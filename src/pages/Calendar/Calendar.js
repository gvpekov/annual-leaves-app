import CalendarHistoryTable from "../../components/CalendarHistoryTable/CalendarHistoryTable";

function CalendarPage() {
    let name = "Georgi Pekov";
    return (
        <div id="mainContent">
            <CalendarHistoryTable username={name} age="34" />

        </div>
    );
}

export default CalendarPage;
