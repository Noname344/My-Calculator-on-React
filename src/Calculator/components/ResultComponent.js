import React from 'react';

function ResultComponent(props){
	var {result} = props;
	return (
		<div className="result">
			<p>{result}</p>
		</div>
	);
}


export default ResultComponent;