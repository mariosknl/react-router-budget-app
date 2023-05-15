const generateRandomColor = () => {
	const existingBudgetLength = fetchData("budgets")?.length ?? 0;
	return `${existingBudgetLength * 34} 65% 50%`;
};

// Local storage
export const fetchData = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

// delete item
export const deleteItem = ({ key }) => {
	return localStorage.removeItem(key);
};

// create budget
export const createBudget = ({ name, amount }) => {
	const newItem = {
		id: crypto.randomUUID(),
		name,
		createdAt: Date.now(),
		amount: +amount,
		color: generateRandomColor(),
	};

	const existingBugdets = fetchData("budgets") ?? [];
	return localStorage.setItem(
		"budgets",
		JSON.stringify([...existingBugdets, newItem])
	);
};
