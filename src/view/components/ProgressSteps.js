import React, { useContext } from "react";
import { WizardContext } from "../../context/WizardContext";

function ProgressSteps() {
	const context = useContext(WizardContext);

	const getSteps = () => {
		const page = context.page;

		const steps_start = ["Genre", "Subgenre", "..."];
		const steps_full = ["Genre", "Subgenre", "Add new sungenre", "Information"];
		const steps_full_non_extended_flow = ["Genre", "Subgenre", "Information"];

		switch (page) {
			case 0:
				return steps_start;
			case 1:
				return steps_start;
			case 2:
				return context.extended_flow ? steps_full : steps_full_non_extended_flow;
			default:
				return steps_full;
		}
	};

	const getStepStyle = (index) => {
		if (context.page == index) {
			return "progress-step active";
		} else {
			return "progress-step";
		}
	};

	return (
		<>
			<h5 className="heading">Add Book - New book</h5>
			<div className="progress-steps">
				{getSteps().map((step, index) => {
					return (
						<div className={getStepStyle(index)} key={index}>
							<div className="number">{step == "..." ? "..." : index + 1}</div>
							<div className="title" key={index}>
								{step == "..." ? " " : step}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default ProgressSteps;
