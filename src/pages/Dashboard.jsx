// rrd imports
import { useLoaderData } from "react-router-dom";

// library
import { toast } from "react-toastify";

//  helper functions
import { fetchData } from "../helpers";

// components
import Intro from "../components/Intro";

// loader
export function dashboardLoader() {
	const userName = fetchData("userName");
	return { userName };
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
	const { userName } = useLoaderData();

	return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};
export default Dashboard;
