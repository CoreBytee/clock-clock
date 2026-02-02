import { useEffect, useState } from "react";
import Digit from "../Digit/Digit";
import "./Full.css";

export default function Full() {
	const [digits, setDigits] = useState([
		[0, 0],
		[0, 0],
		[0, 0],
	]);

	useEffect(() => {
		function update() {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();
			const seconds = now.getSeconds();

			setDigits([
				[Math.floor(hours / 10), hours % 10],
				[Math.floor(minutes / 10), minutes % 10],
				[Math.floor(seconds / 10), seconds % 10],
			]);
		}

		update();
		const interval = setInterval(update, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={"Full"}>
			{digits.map((group, index) => (
				<div key={index} className="group">
					<Digit
						digit={
							group[0] as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
						}
					/>
					<Digit
						digit={
							group[1] as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
						}
					/>
				</div>
			))}
		</div>
	);
}
