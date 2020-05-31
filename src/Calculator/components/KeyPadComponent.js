import React, {Component} from 'react';

class KeyPadComponent extends Component{
	render(){
		return(
			<div className="button">
				<button name='(' onClick={e=> this.props.onClick(e.target.name)}>(</button>
				<button name=')' onClick={e=> this.props.onClick(e.target.name)}>)</button>
				<button name='Backspace' style={{width: '50%', fontSize: '38px'}} onClick={e=> this.props.onClick(e.target.name)}>↤</button>

				<button name='%' onClick={e=> this.props.onClick(e.target.name)}>%</button>
				<button name='*' style={{fontSize: '45px', paddingTop: '4px'}} onClick={e=> this.props.onClick(e.target.name)}>*</button>
				<button name='/' style={{fontSize: '36px'}} onClick={e=> this.props.onClick(e.target.name)}>/</button>
				<button name='C' onClick={e=> this.props.onClick(e.target.name)}>C</button>

				<button name='7' onClick={e=> this.props.onClick(e.target.name)}>7</button>
				<button name='8' onClick={e=> this.props.onClick(e.target.name)}>8</button>
				<button name='9' onClick={e=> this.props.onClick(e.target.name)}>9</button>
				<button name='-' style={{fontSize: '55px', paddingBottom: '5px'}} onClick={e=> this.props.onClick(e.target.name)}>-</button>
				
				<button name='4' onClick={e=> this.props.onClick(e.target.name)}>4</button>
				<button name='5' onClick={e=> this.props.onClick(e.target.name)}>5</button>
				<button name='6' onClick={e=> this.props.onClick(e.target.name)}>6</button>
				<button name='+' 	style={{fontSize: '53px', fontWeight: 'normal'}} onClick={e=> this.props.onClick(e.target.name)}>+</button>
				
				<div style={{width: '75%', display: 'flex', flexWrap: 'wrap'}}>
					<button name='1' onClick={e=> this.props.onClick(e.target.name)}>1</button>
					<button name='2' onClick={e=> this.props.onClick(e.target.name)}>2</button>
					<button name='3' onClick={e=> this.props.onClick(e.target.name)}>3</button>
					<button name='0' style={{width: '66.66666%'}} onClick={e=> this.props.onClick(e.target.name)}>0</button>
					<button name='.' style={{fontSize: '45px'}} onClick={e=> this.props.onClick(e.target.name)}>.</button>
				</div>
				<button name='=' style={{width: '25%', height: '156px', fontSize: '40px'}} onClick={e=> this.props.onClick(e.target.name)}>=</button>
			</div>
		);
	}
}

export default KeyPadComponent;