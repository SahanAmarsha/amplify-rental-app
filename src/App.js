import logo from './logo.svg';
import {CardB} from './ui-components';
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
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
              {homes?.map((home) =>(
                  <CardB key={home.id} home={home} />
              ))}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
