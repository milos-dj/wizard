import { useState } from "react";
import { WizardContext } from "./WizardContext";
import dummyData from "../shared/dummyData.json";

function WizardContextProvider({ children }) {
	const loadData = () => {
		return JSON.parse(JSON.stringify(dummyData));
	};

	const data = loadData()["genres"];

	const initialState = {
		data: data,
		genre: "",
		subGenre: "",
		page: 0,
		extended_flow: false,
		isDescriptionRequired: false,
		book_info: {},
	};

	const [state, setState] = useState(initialState);

	const setGenre = (value) => {
		state.genre = value;
		setState({ ...state });
	};

	const setSubGenre = (value) => {
		state.subGenre = value;
		setState({ ...state });
	};

	const setIsDescriptionRequired = (value) => {
		state.isDescriptionRequired = value;
		setState({ ...state });
	};

	const nextPage = () => {
		state.page = state.page + 1;
		setState({ ...state });
	};

	const prevPage = () => {
		state.page = state.page - 1;
		setState({ ...state });
	};

	const goToPage = (value) => {
		state.page = value;
		setState({ ...state });
	};

	const setExtendedFlow = (value) => {
		state.extended_flow = value;
		state.subGenre = "";
		setState({ ...state });
	};

	const updateBookInfo = (key, value) => {
		state.book_info[key] = value;
		setState({ ...state });
	};

	const resetContext = () => {
		setState({ ...initialState });
	};

	const values = {
		...state,
		setSubGenre: setSubGenre,
		setGenre: setGenre,
		nextPage: nextPage,
		prevPage: prevPage,
		setIsDescriptionRequired: setIsDescriptionRequired,
		setExtendedFlow: setExtendedFlow,
		updateBookInfo: updateBookInfo,
		resetContext: resetContext,
		goToPage: goToPage,
	};

	return <WizardContext.Provider value={values}>{children}</WizardContext.Provider>;
}

export default WizardContextProvider;
