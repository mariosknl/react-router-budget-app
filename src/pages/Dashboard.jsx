// rrd imports
import { useLoaderData } from "react-router-dom";

// library
import { toast } from "react-toastify";

//  helper functions
import { fetchData } from "../helpers";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// loader
export function dashboardLoader() {
	const userName = fetchData("userName");
	const budgets = fetchData("budgets");
	return { userName, budgets };
}

// action
export async function dashboardAction({ request }) {
	const data = await request.formData();
	const formData = Object.fromEntries(data);

	try {
		localStorage.setItem("userName", JSON.stringify(formData.userName));
		return toast.success(`Welcome, ${formData.userName}!`);
	} catch (error) {
		throw new Error("There was a problem saving your account.");
	}
}

const Dashboard = () => {
	const { userName, budgets } = useLoaderData();

	return (
		<>
			{userName ? (
				<div className="dashboard">
					<h1>
						Welcome back, <span className="accent">{userName}</span>
					</h1>
					<div className="grid-sm">
						{/* {budgets ? () : ()} */}
						<div className="grid-lg">
							<div className="flex-lg">
								<AddBudgetForm />
							</div>
						</div>
					</div>
				</div>
			) : (
				<Intro />
			)}
		</>
	);
};
export default Dashboard;
