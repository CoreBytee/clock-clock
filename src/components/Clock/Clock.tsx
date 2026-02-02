import "./Clock.css";

export default function Clock({ rotation }: { rotation: [number, number] }) {
	return (
		<div
			className={`Clock ${rotation[0] === 135 ? "hidden" : ""}`}
			style={{
				["--rotation-1" as any]: rotation[0] + "deg",
				["--rotation-2" as any]: rotation[1] + "deg",
			}}
		>
			<div className="hand" />
			<div className="hand" />
			<div className="dot" />
		</div>
	);
}
