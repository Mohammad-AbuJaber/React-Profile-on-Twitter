import React from 'react';
import "../stylesheets/App.css";
import Dashboard from "./Dashboard";
import Main from "./Main";
import Recommendations from "./Recommendations";

export default function App() {
    return (
        <div className="main-container">
            <Dashboard/>
            <Main/>
            <Recommendations/>
        </div>
    );
}
