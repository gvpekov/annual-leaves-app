function CalendarHistoryRow(props) {
    const {row} = props;
    return (
        <tr>
            <td>{row.status}</td>
            <td>{row.username}</td>
            <td>{row.dateFrom}</td>
            <td>{row.dateTo}</td>
            <td>{row.workingDays}</td>
            <td></td>
        </tr>
    )
}
export default CalendarHistoryRow;


