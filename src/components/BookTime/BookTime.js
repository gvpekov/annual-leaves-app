function BookTime() {

    return (
        <div>
            <div className={"header"}> Book time off </div>
            <div>
                <form>
                    <select>
                        <option>Vacation</option>
                        <option>Medical issue</option>
                        <option>Unpaid days</option>
                    </select>

                    <select>
                        <option>One Day</option>
                        <option>Range</option>
                        <option>First part of the Day</option>
                        <option>Second part of the Day</option>
                    </select>

                    <input className={"date-picker"}></input>

                    <textarea placeholder={"Comment"}>

                    </textarea>

                    <div className={"days-summary"}>
                        <div> Days Per Contract</div>
                        <div> Days left</div>
                        <div> Days is Approved</div>
                    </div>

                    <button>Book Time Off</button>
                </form>
            </div>
        </div>
    )
}

export default BookTime;