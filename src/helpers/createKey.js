const createKey = (item, type, data) => {
	let indexItem = data.indexOf(item);
	return indexItem + type;
};

export default createKey;
