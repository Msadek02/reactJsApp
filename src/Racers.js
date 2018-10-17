import React from 'react';

const Racers = ({racers}) => {
	const racersList = racers.map(racer => {
		if (racer.age > 27 ) {
		return (
			<div className="racers" key={racer.id}>
				<div>Name:{racer.name}</div>
				<div>Age: {racer.age}</div>
				<div>Belt: {racer.belt}</div>
			</div>
		)
		}
		else {
			return null
		}
	})
	return (
		<div className="racer-list">
			{racersList}
		</div>
	)
}

export default Racers;