import React, {useState, useEffect} from 'react';
import './App.css';
import KeyPadComponent from "./components/KeyPadComponent";

export default function App(){
	let [result, setResult]= useState('0');

	function calculate(){
		try {
			// eslint-disable-next-line
			let x= eval(result);
			if (x.toString().length > 16 && !/\./.test(x)){
				x= x.toPrecision(16)
			}else if (x.toString().length > 16 && /\./.test(x)){
				// eslint-disable-next-line
				x= eval(x.toFixed(16))
			}
			setResult(x.toString());
		} catch(e){
			setResult('error')
		}
	};

	function reset(){
		setResult('0');
	}

	function clearLastChar(){
		if (/error|infinity|-infinity|NaN|undefined/i.test(result)){
			reset();
		} else{
			setResult(result.substring(0, result.length - 1) || '0')
		}
	};

	function handleKey(e){
		if (!e.key) e.blur(); // after mouse clear to keyboard bug fix
		let key= e.key || e.name;
		let x= result.split(/[*/+\-%]/);
		if (/Enter|=/.test(key)){
			calculate();
		} else if (/^c$/i.test(key)){
			reset();
		} else if (/Backspace/.test(key)){
			clearLastChar();
		} else if (result.length <= 47 &&
		/[*/+\-%().]|^\d$/.test(key)){
			if (/error|infinity|-infinity|NaN|undefined/i.test(result)){
				setResult(key);
			}	else if(/\d/.test(key) && result === '0'){
				setResult(key);
			} else if(key === '.' &&
				result.match(/\d$/) &&
				!/[d.]/.test(x[x.length -1])){
				setResult(result + key);
			} else if(key === '+' &&
				result !== '0' &&
				!/[*./+\-(%]$/.test(result)){
				setResult(result + key);
			} else if(key === '-' &&
				result !== '0' &&
				!/[*./+\-(%]$/.test(result)){
				setResult(result + key);
			} else if(key === '*' &&
				result !== '0' &&
				!/[*./+\-(%]$/.test(result)){
				setResult(result + key);
			} else if(key === '/' &&
				result !== '0' &&
				!/[*./+\-(%]$/.test(result)){
				setResult(result + key);
			} else if(key === '%' &&
				result !== '0' &&
				!/[*./+\-(%]$/.test(result)){
				setResult(result + key);
			} else if(key === ')' &&
				/\(/.test(result) && !/\)/.test(result) &&
				!/\(/.test(x[x.length -1]) &&
				result.match(/\d$/)){
				setResult(result + key);
			} else if(key === ')' && result.match(/\d$/) &&
				/\(/.test(result) &&
				!/\(/.test(x[x.length -1]) &&
				result.match(/\(/g).length !==
				result.match(/\)/g).length){
				setResult(result + key);
			} else if(key === '(' && result === '0'){
				setResult(key);
			} else if(key === '(' && result !== '0' &&
				!/[(.]$/.test(result) &&
				/[*/+\-%]$/.test(result)){
				setResult(result + key);
			} else if(key === '0' && result !== '0' &&
				!/[(.]$/.test(result) &&
				/[*/+\-%]$/.test(result)){
				setResult(result + key);
			} else if(/\d/.test(key) && !/\)$/.test(result)){
				setResult(result + key);
			}
		}
	}

	useEffect(()=>{
		document.addEventListener('keydown', handleKey);
		return ()=> {
			document.removeEventListener('keydown', handleKey);
		}
	});

	return(
		<div className="calculator-body">
			<div className="result">
				<p>{result}</p>
			</div>
			<KeyPadComponent onClick={handleKey}/>
		</div>
	);
}