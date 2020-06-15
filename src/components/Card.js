import React from 'react';

const Card = ({ name, email, id }) => {
{/* can do destructuring in the function parameters instead of after like this:
const { name, email, id } = props; */}
	return (
		<div className='tc bg-light-blue dib br3 pa2 ma2 grow bw2 shadow-5'>
		  <img src= {`https://robohash.org/${id}?size=200x200`} alt='robots' />
		  <div>
		  	<h2>{name}</h2>
		  	<p>{email}</p>
		  </div>
		</div>
		);
}

export default Card;