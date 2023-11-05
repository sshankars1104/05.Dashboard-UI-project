import './Style.css';
function Search() {
    return (
        <div className="row mb-5">
            <div className="col-3">
                <div className="mb-3">
                    <label for="customerName" className="form-label">
                        Customer
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="customerName"
                        placeholder="Enter customer name"
                    />
                </div>
            </div>
            <div className="col-3">
                <div className="mb-3">
                    <label for="invoiceId" className="form-label">
                        Invoice ID
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="invoiceId"
                        placeholder="Enter Invoice Id"
                    />
                </div>
            </div>
            <div className="col-3">
                <div className="mb-3">
                    <label for="startDate" className="form-label">
                        Start Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        placeholder="name@example.com"
                    />
                </div>
            </div>
            <div className="col-3">
                <div className="mb-3">
                    <label for="endDate" className="form-label">
                        End Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        placeholder="name@example.com"
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;
