import React from "react";

const Button = ({ setHandle, btnText }) => {
	return (
		<button type='button' className='btn btn-block' onClick={setHandle}>
			{btnText}
		</button>
	);
};

export default Button;
