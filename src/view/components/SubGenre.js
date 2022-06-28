import React, { useContext, useState } from "react";
import { WizardContext } from "../../context/WizardContext";

function SubGenre() {
	const context = useContext(WizardContext);
	const [isActive, setIsActive] = useState(0);

	const genreData = context.data.filter((obj) => {
		return obj.name === context.genre;
	});

	const onClickHandler = (id, name, isDescriptionRequired) => {
		context.setSubGenre(name);
		context.setIsDescriptionRequired(isDescriptionRequired);
		setIsActive(id);
	};

	const setExtendedFlow = () => {
		context.setExtendedFlow(true);
		setIsActive(-1);
	};

	const getButtonSelected = (id) => {
		return id == isActive ? "genre-button selected" : "genre-button";
	};

	return (
		<div className="subgenre">
			{genreData[0].subgenres.map((record) => {
				return (
					<button
						className={getButtonSelected(record.id)}
						onClick={() => onClickHandler(record.id, record.name, record.isDescriptionRequired)}
						key={record.id}
					>
						{record.name}
					</button>
				);
			})}
			<button className={getButtonSelected(-1)} onClick={setExtendedFlow}>
				Add new
			</button>
		</div>
	);
}

export default SubGenre;
