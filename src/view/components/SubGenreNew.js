import React, { useContext } from "react";
import { WizardContext } from "../../context/WizardContext";

function SubGenreNew() {
	const context = useContext(WizardContext);

	const handleChange = (event) => {
		context.setSubGenre(event.target.value);
	};

	const handleChangeChk = (event) => {
		context.setIsDescriptionRequired(event.target.checked);
	};

	return (
		<div>
			<input type="text" placeholder="Subgenre name" onChange={handleChange}></input>
			<br></br>
			<input type="checkbox" id="newsubgenre" onChange={handleChangeChk}></input>

			<label> Desctription is required for the subgenre</label>
		</div>
	);
}

export default SubGenreNew;
