import CalendarHistoryRow from "../CalendarHistoryRow/CalendarHistoryRow";

function CalendarHistoryTable(props) {
    let leaveDays = [
        {
            "id": 1,
            "status":"Approved",
            "name": "Georgi Pekov",
            "dateFrom": "01.02.2022",
            "dateTo": "06.02.2022",
            "workingDays": "4",
        },        {
            "id": 2,
            "status":"Approved",
            "name": "Georgi Pekov",
            "dateFrom": "01.02.2022",
            "dateTo": "06.02.2022",
            "workingDays": "4",
        },        {
            "id": 3,
            "status":"Approved",
            "name": "Georgi Pekov",
            "dateFrom": "01.05.2022",
            "dateTo": "06.05.2022",
            "workingDays": "4",
        },        {
            "id": 4,
            "status":"Approved",
            "name": "Georgi Pekov",
            "dateFrom": "01.02.2022",
            "dateTo": "16.02.2022",
            "workingDays": "14",
        },
    ];


    return (
        <table>
            <thead>
            <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Date From</th>
                <th>Date to</th>
                <th>Working Days</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            { leaveDays.map((day) =>
                    <CalendarHistoryRow key={day.id} row={day}/>
            )}
            </tbody>
        </table>
    )
}

export default CalendarHistoryTable;