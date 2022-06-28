import React, { useContext } from "react";
import { WizardContext } from "../../context/WizardContext";

function Finished() {
	const context = useContext(WizardContext);

	const resetContext = () => {
		context.resetContext();
	};

	return (
		<div className="adding-book">
			<div className="checked">&#10003;</div>
			<p>Book added successfully</p>
			<button className="pagination-finished" onClick={resetContext}>
				Add another book
			</button>
		</div>
	);
}

export default Finished;
