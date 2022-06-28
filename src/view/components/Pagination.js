import React, { useContext } from "react";
import { WizardContext } from "../../context/WizardContext";
import { Pages } from "../../view/consts";

function Finished() {
	const context = useContext(WizardContext);

	const nextPage = () => {
		context.nextPage();
	};

	const prevPage = () => {
		if (context.page === Pages.AddSubGenre && context.extended_flow) {
			context.setExtendedFlow(false);
		}
		context.prevPage();
	};

	const createBook = () => {
		context.book_info["genre"] = context.genre;
		context.book_info["subGenre"] = context.subGenre;
		console.log(context.book_info);
		context.goToPage(Pages.Finished);
	};

	const isDisabled = (isNext) => {
		if (!isNext) {
			return context.page === Pages.Genre;
		}

		if (context.page === Pages.Genre && context.genre == "") {
			return true;
		}

		if (context.page === Pages.SubGenre && !context.extended_flow && context.subGenre == "") {
			return true;
		}
		if (context.page === Pages.SubGenreNew && context.subGenre == "" && context.extended_flow) {
			return true;
		}

		if (isLastPage() && !context.book_info.title) {
			return true;
		}

		if (isLastPage() && context.isDescriptionRequired && !context.book_info.description) {
			return true;
		}

		return false;
	};

	const isLastPage = () => {
		return (context.page === Pages.SubGenreNew && !context.extended_flow) || context.page === Pages.Information;
	};

	return (
		<div className="pagination">
			<button className="pagination-prev" disabled={isDisabled(false)} onClick={prevPage}>
				Prev
			</button>
			{isLastPage() ? (
				<button className="pagination-add" disabled={isDisabled(true)} onClick={createBook}>
					Add
				</button>
			) : (
				<button className="pagination-next" disabled={isDisabled(true)} onClick={nextPage}>
					Next
				</button>
			)}
		</div>
	);
}

export default Finished;
