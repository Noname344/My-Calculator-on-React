import React, {Component} from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			result: '0',
		};
	}

	calculate(){
		try {
			var x= (eval(this.state.result)).toString();
			var Rnd= x.length > 13 ? Number(x).toPrecision(13) : x;
				this.setState({
					result: Rnd
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
		let key = e.key || e;
		let x= this.state.result.split(/[*/+\-%]/);
		if (/Enter|=/.test(key)){
			this.calculate();
		} else if (/^c$|^с$/i.test(key)){
			this.reset();
		} else if(/Backspace/.test(key)){
			this.clearLastChar();
		} else if (this.state.result.length <= 47 &&
		/[*/+\-%().]|^\d$/.test(key)){
			if (/error|infinity|-infinity|NaN|undefined/i.test(this.state.result)){
				this.setState({
					result: key
				});
			}	else if(/\d/.test(key) && this.state.result === '0'){
				this.setState({
					result: key
				});
			} else if(key === '.' &&
				this.state.result.match(/\d$/) &&
				!/[d.]/.test(x[x.length -1])){
				this.setState({
					result: this.state.result + key
				});
			} else if(key === '+' &&
				this.state.result !== '0' &&
				!/[*./+\-(%]$/.test(this.state.result)){
				this.setState({
					result: this.state.result + key
				});
			} else if(key === '-' &&
				this.state.result !== '0' &&
				!/[*./+\-(%]$/.test(this.state.result)){
				this.setState({
					result: this.state.result + key
				});
			} else if(key === '*' &&
				this.state.result !== '0' &&
				!/[*./+\-(%]$/.test(this.state.result)){
				this.setState({
					result: this.state.result + key
				});
			} else if(key === '/' &&
				this.state.result !== '0' &&
				!/[*./+\-(%]$/.test(this.state.result)){
				this.setState({
					result: this.state.result + key
				});
			} else if(key === '%' &&
				this.state.result !== '0' &&
				!/[*./+\-(%]$/.test(this.state.result)){
				this.setState({
					result: this.state.result + key
				});
			} else if(key === ')' &&
				/\(/.test(this.state.result) && !/\)/.test(this.state.result) &&
				!/\(/.test(x[x.length -1]) &&
				this.state.result.match(/\d$/)){
				this.setState({
					result: this.state.result + key
				});
			} else if(key === ')' && this.state.result.match(/\d$/) &&
				/\(/.test(this.state.result) &&
				!/\(/.test(x[x.length -1]) &&
				this.state.result.match(/\(/g).length !==
				this.state.result.match(/\)/g).length){
				this.setState({
					result: this.state.result + key
				});
			} else if(key === '(' && this.state.result === '0'){
				this.setState({
					result: key
				});
			} else if(key === '(' && this.state.result !== '0' &&
				!/[(.]$/.test(this.state.result) &&
				/[*/+\-%]$/.test(this.state.result)){
				this.setState({
					result: this.state.result + key
				});
			} else if(key === '0' && this.state.result !== '0' &&
				!/[(.]$/.test(this.state.result) &&
				/[*/+\-%]$/.test(this.state.result)){
				this.setState({
					result: this.state.result + key
				});
			} else if(/\d/.test(key) && !/\)$/.test(this.state.result)){
				this.setState({
					result: this.state.result + key
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

export default App;