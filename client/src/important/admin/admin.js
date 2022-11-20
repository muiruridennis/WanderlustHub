import React from 'react'
import "./admin.scss";
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import Widget from "../../components/widgets/widget";


function Admin() {
    return (
        <div className="admin">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget  />
            
                </div>
                <div className="dashboard">
                {/* <Clients /> */}
                             
                </div>
            </div>
           

        </div>

    )
}

export default Admin