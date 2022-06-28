import React, { useContext, useState } from "react";

import { WizardContext } from "../../context/WizardContext";

function Genre() {
	const context = useContext(WizardContext);
	const [isActive, setIsActive] = useState(0);

	const onClickHandler = (id, name) => {
		context.setGenre(name);
		setIsActive(id);
	};

	const getButtonSelected = (id) => {
		return id === isActive ? "genre-button selected" : "genre-button";
	};

	return (
		<div className="genre">
			{context.data.map((record) => {
				return (
					<button
						className={getButtonSelected(record.id)}
						onClick={() => onClickHandler(record.id, record.name)}
						key={record.id}
					>
						{record.name}
					</button>
				);
			})}
		</div>
	);
}

export default Genre;
