import React, { useContext } from "react";
import { WizardContext } from "../../context/WizardContext";

function BookInfo() {
	const context = useContext(WizardContext);

	const handleChange = (e) => {
		context.updateBookInfo(e.target.id, e.target.value);
	};

	return (
		<div className="informations">
			<div className="information">
				<p>BookTitle:</p>
				<input id="title" type="text" placeholder="Book title" onChange={handleChange} />
			</div>
			<div className="information">
				<p>Author:</p>
				<input id="author" type="text" placeholder="Author" onChange={handleChange} />
			</div>
			<div className="information">
				<p>ISBN:</p>
				<input id="isbn" type="text" placeholder="ISBN" onChange={handleChange} />
			</div>
			<div className="information">
				<p>Publisher:</p>
				<input id="publisher" type="text" placeholder="Publisher" onChange={handleChange} />
			</div>
			<div className="information">
				<p>Date publisher:</p>
				<input id="date" type="date" placeholder="DD/MM/YYYY" onChange={handleChange} />
			</div>
			<div className="information">
				<p>Number of pages:</p>
				<input id="pages" type="text" placeholder="Number of pages" onChange={handleChange} />
			</div>
			<div className="information">
				<p>Format:</p>
				<input id="format" type="text" placeholder="Format" onChange={handleChange} />
			</div>
			<div className="information">
				<p>Edition:</p>
				<input id="edition" type="text" placeholder="Edition" onChange={handleChange} />
			</div>
			<div className="information">
				<p>Edition language:</p>
				<input id="language" type="text" placeholder="Edition lanhuage" onChange={handleChange} />
			</div>

			<div className="information">
				<p>Description:</p>
				<textarea id="description" type="text" placeholder="Type the description..." onChange={handleChange} />
			</div>
		</div>
	);
}

export default BookInfo;
