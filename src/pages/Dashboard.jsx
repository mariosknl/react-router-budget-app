// react router dom imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helpers";

// loader
export function dashboardLoader() {
	const userName = fetchData("userName");
	return { userName };
}

const Dashboard = () => {
	const { userName } = useLoaderData();

	return <div>Dashboard</div>;
};

export default Dashboard;
