import React, {Component} from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

export default class App extends Component{
	constructor(props){
		super(props);
		this.state={
			result: '0',
		};
	}

	calculate(){
		try {
			// eslint-disable-next-line
			var x= eval(this.state.result);
			if (x.toString().length > 17 && !/\./.test(x)){
				x= x.toPrecision(17)
			}else if (x.toString().length > 17 && /\./.test(x)){
				// eslint-disable-next-line
				x= eval(x.toFixed(16))
			}
			
				this.setState({
					result: x.toString()
				});
		} catch(e){
			this.setState({
				result: 'error'
			})
		}
	};

	reset=()=>{
		this.setState({
			result: '0'
		})
	};

	clearLastChar(){
		if (/error|infinity|-infinity|NaN|undefined/i.test(this.state.result)){
			this.reset();
		} else{
			this.setState({
				result: this.state.result.substring(0, this.state.result.length - 1) || '0'
			});
		}
	};

	handleKey=e=>{ 
		const key = e.key || e;
		const result= this.state.result;
		const x= result.split(/[*/+\-%]/);
		if (/Enter|=/.test(key)){
			this.calculate();
		} else if (/^c$|^с$/i.test(key)){
			this.reset();
		} else if(/Backspace/.test(key)){
			this.clearLastChar();
		} else if (result.length <= 47 &&
		/[*/+\-%().]|^\d$/.test(key)){
			if (/error|infinity|-infinity|NaN|undefined/i.test(result)){
				this.setState({
					result: key
				});
			}	else if(/\d/.test(key) && result === '0'){
				this.setState({
					result: key
				});
			} else if(key === '.' &&
				result.match(/\d$/) &&
				!/[d.]/.test(x[x.length -1])){
				this.setState({
					result: result + key
				});
			} else if(key === '+' &&
				result !== '0' &&
				!/[*./+\-(%]$/.test(result)){
				this.setState({
					result: result + key
				});
			} else if(key === '-' &&
				result !== '0' &&
				!/[*./+\-(%]$/.test(result)){
				this.setState({
					result: result + key
				});
			} else if(key === '*' &&
				result !== '0' &&
				!/[*./+\-(%]$/.test(result)){
				this.setState({
					result: result + key
				});
			} else if(key === '/' &&
				result !== '0' &&
				!/[*./+\-(%]$/.test(result)){
				this.setState({
					result: result + key
				});
			} else if(key === '%' &&
				result !== '0' &&
				!/[*./+\-(%]$/.test(result)){
				this.setState({
					result: result + key
				});
			} else if(key === ')' &&
				/\(/.test(result) && !/\)/.test(result) &&
				!/\(/.test(x[x.length -1]) &&
				result.match(/\d$/)){
				this.setState({
					result: result + key
				});
			} else if(key === ')' && result.match(/\d$/) &&
				/\(/.test(result) &&
				!/\(/.test(x[x.length -1]) &&
				result.match(/\(/g).length !==
				result.match(/\)/g).length){
				this.setState({
					result: result + key
				});
			} else if(key === '(' && result === '0'){
				this.setState({
					result: key
				});
			} else if(key === '(' && result !== '0' &&
				!/[(.]$/.test(result) &&
				/[*/+\-%]$/.test(result)){
				this.setState({
					result: result + key
				});
			} else if(key === '0' && result !== '0' &&
				!/[(.]$/.test(result) &&
				/[*/+\-%]$/.test(result)){
				this.setState({
					result: result + key
				});
			} else if(/\d/.test(key) && !/\)$/.test(result)){
				this.setState({
					result: result + key
				});
			}
		}
	}

	componentDidMount(){
		document.addEventListener('keydown', this.handleKey);
	}

	componentWillUnmount(){
		document.removeEventListener('keydown', this.handleKey);
	}

	render(){
		return(
			<div className="calculator-body">
				<ResultComponent 
					result={this.state.result}
				/>
				<KeyPadComponent onClick={this.handleKey}/>
			</div>
		);
	}
}