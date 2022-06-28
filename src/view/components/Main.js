import React, { useContext } from "react";
import { WizardContext } from "../../context/WizardContext";
import Genre from "./Genre";
import SubGenreNew from "./SubGenreNew";
import SubGenre from "./SubGenre";
import Information from "./Information";
import Finished from "./Finished";
import ProgressSteps from "./ProgressSteps";
import Pagination from "./Pagination";

function Main() {
	const context = useContext(WizardContext);

	const displayPage = () => {
		switch (context.page) {
			case 0:
				return <Genre />;
			case 1:
				return <SubGenre />;
			case 2:
				return context.extended_flow ? <SubGenreNew /> : <Information />;
			case 3:
				return <Information />;
			case 4:
				return <Finished />;
			default:
				return <Genre />;
		}
	};

	const displayButtons = () => {
		if (context.page !== 4) {
			return <Pagination />;
		}
	};

	const displayStepsProgress = () => {
		if (context.page !== 4) {
			return <ProgressSteps />;
		}
	};

	return (
		<div className="form">
			<div className="form-container">
				{displayStepsProgress()}
				{displayPage()}
				{displayButtons()}
			</div>
		</div>
	);
}

export default Main;
