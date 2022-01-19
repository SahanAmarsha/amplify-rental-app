import MyNavbar from './my-components/MyNavBar';
import MyFooter from './my-components/MyFooter';
import {
    BrowserRouter as Router,
    Route, Routes, Switch,
} from "react-router-dom";
import './App.css';
import AddHome from "./pages/AddHome";
import Dashboard from "./pages/Dashboard";

const App = () => {

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <MyNavbar width={"100vw"}/>
                </header>
                <Routes>
                    <Route path="/add-home" element={<AddHome/>} />
                    <Route path="/" element={<Dashboard/>} />
                </Routes>
                <MyFooter width={"100vw"}/>
            </div>
        </Router>
    );
}

export default App;
