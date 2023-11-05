import './Style.css';
function TopHeader() {
    return (
        <div className="row mb-5">
            <div className="searchBar">
                <input
                    type="text"
                    className="form-control"
                    id="customerName"
                    placeholder="Create Search here"/>
                <button>
                    <i className="bx bx-bell"></i>
                </button>
            </div>
        </div>
    );
}

export default TopHeader;
