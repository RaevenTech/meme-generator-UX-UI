import "./App.css";
import Form from "./components/meme/Form";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <div className="main_container">
                <Header />
                <Form />
            </div>
        </div>
    );
}

export default App;
