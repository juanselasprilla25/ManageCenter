import "./Counter.css";

import React, { useEffect, useState } from "react";

export function Counter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(count);
	}, [count]);

	function adjustCount(amount) {
		setCount((currentAmount) => {
			return currentAmount + amount;
		});
	}

	return (
		<React.Fragment>
			<button onClick={() => adjustCount(-1)}>-</button>
			<span> {count}</span>
			<button onClick={() => adjustCount(1)}>+</button>
		</React.Fragment>
	);
}
