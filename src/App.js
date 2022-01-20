import MyNavbar from './my-components/MyNavBar';
import MyFooter from './my-components/MyFooter';
import {
    BrowserRouter as Router,
    Route, Routes, useNavigate,
} from "react-router-dom";
import {withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import AddHome from "./pages/AddHome";
import Dashboard from "./pages/Dashboard";

const App = (props) => {
    const { signOut, user } = props;

    const navbarOverrides = {
        "Flex.Flex[1].IconExitToApp[0]": {
            style: {
                cursor: 'pointer'
            },
            onClick: signOut
        }
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <MyNavbar overrides={navbarOverrides} width={"100vw"}/>
                </header>
                <Routes>
                    <Route path="/add-home" element={<AddHome/>}/>
                    <Route path="/" element={<Dashboard/>}/>
                </Routes>
                <MyFooter width={"100vw"}/>
            </div>
        </Router>
    );
}

export default withAuthenticator(App);
