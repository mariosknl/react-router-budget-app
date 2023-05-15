import { formatCurrency, formatDataToLocaleString } from "../helpers";

const ExpenseItem = ({ expense }) => {
	return (
		<>
			<td>{expense.name}</td>
			<td>{formatCurrency(expense.amount)}</td>
			<td>{formatDataToLocaleString(expense.createdAt)}</td>
		</>
	);
};

export default ExpenseItem;
