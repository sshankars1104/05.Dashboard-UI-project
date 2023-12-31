import './Style.css';
function Sidebar() {
    return (
        <div className="col-2">
            <div className="sidebar h-full py-5 d-flex flex-column justify-content-between">
                <div className="row mb-5 branding-container">
                    <h5 className="text-center brand-name">Medico Sales</h5>
                </div>
                <div className="row nav-links">
                    <ul>
                        <li className="nav-link active">
                            <i className="bx bxs-grid-alt me-3"></i>
                            <p>Dashboard</p>
                        </li>
                        <li className="nav-link">
                            <i className="bx bx-test-tube me-3"></i>
                            <p>Labtest</p>
                        </li>
                        <li className="nav-link">
                            <i className="bx bxs-calendar-plus me-3"></i>
                            <p>Appointment</p>
                        </li>
                        <li className="nav-link">
                            <i className="bx bx-shopping-bag me-3"></i>
                            <p>Medicine Order</p>
                        </li>
                        <li className="nav-link">
                            <i className="bx bx-message-add me-3"></i>
                            <p>Meessage</p>
                        </li>
                        <li className="nav-link">
                            <i className="bx bxs-guitar-amp me-3"></i>
                            <p>Payment</p>
                        </li>
                        <li className="nav-link">
                            <i className="bx bx-cog me-3"></i>
                            <p>Settings</p>
                        </li>
                    </ul>
                </div>
                <div className="footer">
                    <div className="d-flex align-items-center justify-content-start">
                        <i className="bx bx-help-circle me-3"></i>
                        <p>Help</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
