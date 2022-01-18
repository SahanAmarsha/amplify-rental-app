import logo from './logo.svg';
import {CardB} from './ui-components';
import MyNavbar from './my-components/MyNavBar';
import './App.css';
import {useEffect, useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {listHomes} from "./graphql/queries";

const App = () => {

    const [homes, setHomes] = useState([]);

    const fetchHomes = async () => {
        try {
            const currentHomes = await API.graphql(graphqlOperation(listHomes));
            console.log('CurrentHomes:', currentHomes);
            setHomes(currentHomes?.data?.listHomes?.items);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchHomes();
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <MyNavbar width={"100vw"} />
            </header>
            <div className="app-body">
                {homes?.map((home) =>(
                    <CardB key={home.id} home={home} />
                ))}
            </div>
        </div>
    );
}

export default App;
