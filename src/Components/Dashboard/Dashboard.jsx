import { useLoaderData, useParams } from "react-router-dom";
import Title from "../Title/Title";

const Dashboard = () => {
    const data = useLoaderData()
    console.log(data)
    const param = useParams()
    console.log(param)
    Title("Dashboard")
    return (
        <div>
           
        </div>
    );
};

export default Dashboard;