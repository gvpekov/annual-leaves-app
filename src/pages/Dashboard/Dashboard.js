import Card from "../../components/commons/Card/Card";
import "./styles.css";
import BookTime from "../../components/BookTime/BookTime";

function DashboardPage() {
    return (
        <div id="dashboard">
            <Card><BookTime/></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
}

export default DashboardPage;