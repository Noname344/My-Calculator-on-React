import React, {Component} from 'react';

class KeyPadComponent extends Component{
	render(){
		return(
			<div className="button">
				<button name='(' onClick={e=> this.props.onClick(e.target.name)}>(</button>
				<button name=')' onClick={e=> this.props.onClick(e.target.name)}>)</button>
				<button className='width2' name='Backspace' style={{fontSize: '38px', padding: '15.7px 0'}} onClick={e=> this.props.onClick(e.target.name)}>↤</button>

				<button name='%' onClick={e=> this.props.onClick(e.target.name)}>%</button>
				<button name='*' style={{fontSize: '45px', padding: '8.8px 0'}} onClick={e=> this.props.onClick(e.target.name)}>*</button>
				<button name='/' style={{fontSize: '36px', padding: '16.6px 0'}} onClick={e=> this.props.onClick(e.target.name)}>/</button>
				<button name='C' onClick={e=> this.props.onClick(e.target.name)}>C</button>

				<button name='7' onClick={e=> this.props.onClick(e.target.name)}>7</button>
				<button name='8' onClick={e=> this.props.onClick(e.target.name)}>8</button>
				<button name='9' onClick={e=> this.props.onClick(e.target.name)}>9</button>
				<button name='-' style={{fontSize: '55px', padding: '7.27px 0'}} onClick={e=> this.props.onClick(e.target.name)}>-</button>
				
				<button name='4' onClick={e=> this.props.onClick(e.target.name)}>4</button>
				<button name='5' onClick={e=> this.props.onClick(e.target.name)}>5</button>
				<button name='6' onClick={e=> this.props.onClick(e.target.name)}>6</button>
				<button name='+' 	style={{fontSize: '53px', padding: '7.54px 0', fontWeight: 'normal'}} onClick={e=> this.props.onClick(e.target.name)}>+</button>
				
				<button name='1' onClick={e=> this.props.onClick(e.target.name)}>1</button>
				<button name='2' onClick={e=> this.props.onClick(e.target.name)}>2</button>
				<button name='3' onClick={e=> this.props.onClick(e.target.name)}>3</button>
				<button name='=' className='height2' style={{fontSize: '40px', padding: '10px 0'}} onClick={e=> this.props.onClick(e.target.name)}>=</button>
				<button name='0' className='width2' onClick={e=> this.props.onClick(e.target.name)}>0</button>
				<button name='.' style={{fontSize: '45px', padding: '8.8px 0'}} onClick={e=> this.props.onClick(e.target.name)}>.</button>
			</div>
		);
	}
}

export default KeyPadComponent;