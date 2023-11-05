import './Style.css';
function Table() {
    return (
        <div className="row px-2">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col" className="selector">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id=""
                            />
                        </th>
                        <th scope="col">Invoive ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Payable Amount</th>
                        <th scope="col">Paid Amount</th>
                        <th scope="col">Due</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td  className="selector">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id=""
                            />
                        </td>
                        <td>#AHGA68</td>
                        <td>01/11/2023</td>
                        <td>jacob Marcus</td>
                        <td>
                            <span>&#8377;</span> 1000
                        </td>
                        <td>
                            <span>&#8377;</span> 1000
                        </td>
                        <td>
                            <span>&#8377;</span> 0
                        </td>
                    </tr>
                    <tr>
                        <td  className="selector">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id=""
                            />
                        </td>
                        <td>#AHGA68</td>
                        <td>01/11/2023</td>
                        <td>Otto</td>
                        <td>
                            <span>&#8377;</span> 1000
                        </td>
                        <td>
                            <span>&#8377;</span> 1000
                        </td>
                        <td>
                            <span>&#8377;</span> 0
                        </td>
                    </tr>
                    <tr>
                        <td  className="selector">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id=""
                            />
                        </td>
                        <td>#AHGA68</td>
                        <td>01/11/2023</td>
                        <td>Otto</td>
                        <td>
                            <span>&#8377;</span> 1000
                        </td>
                        <td>
                            <span>&#8377;</span> 1000
                        </td>
                        <td>
                            <span>&#8377;</span> 0
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}
export default Table;
