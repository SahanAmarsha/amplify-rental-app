import React from "react";
import {NewHomes} from "../ui-components";


const Dashboard = () => {

    return (
        <div className="app-body">
            <NewHomes isPaginated itemsPerPage={6}/>
            {/*{homes?.map((home) =>(*/}
            {/*    <CardB key={home.id} home={home} />*/}
            {/*))}*/}
        </div>
    );
}

export default Dashboard;