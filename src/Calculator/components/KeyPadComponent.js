import React from 'react';

export default function KeyPadComponent(props){
	return(
		<div className="button">
			<button name='('
							tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>(</button>
			<button name=')'
							tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>)</button>
			<button name='Backspace'
							className='width2 Backspace'
							onClick={e=> props.onClick(e.target)}
							tabIndex='-1'>↤</button>

			<button name='%'
							tabIndex='-1'
						  onClick={e=> props.onClick(e.target)}>%</button>
			<button name='*'
							tabIndex='-1'
							className='asterisk'
							onClick={e=> props.onClick(e.target)}>*</button>
			<button name='/'
							tabIndex='-1'
							className='dash'
							onClick={e=> props.onClick(e.target)}>/</button>
			<button name='C' tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>C</button>

			<button name='7'
							tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>7</button>
			<button name='8'
							tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>8</button>
			<button name='9'
							tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>9</button>
			<button name='-'
							tabIndex='-1'
							className='minus'
							onClick={e=> props.onClick(e.target)}>-</button>
			
			<button name='4'
							tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>4</button>
			<button name='5'
							tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>5</button>
			<button name='6'
							tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>6</button>
			<button name='+'
							tabIndex='-1'
							className='plus'
							onClick={e=> props.onClick(e.target)}>+</button>
			
			<button name='1'
							tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>1</button>
			<button name='2'
							tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>2</button>
			<button name='3'
							tabIndex='-1'
							onClick={e=> props.onClick(e.target)}>3</button>
			<button name='='
							tabIndex='-1'
							className='height2 equals'
							onClick={e=> props.onClick(e.target)}>=</button>
							
			<button name='0'
							tabIndex='-1'
							className='width2'
							onClick={e=> props.onClick(e.target)}>0</button>
			<button name='.'
							tabIndex='-1'
							className='dot'
							onClick={e=> props.onClick(e.target)}>.</button>
		</div>
	);
}