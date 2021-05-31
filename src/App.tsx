import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Provider} from "react-redux";



function App() {
    return (
<Provider>
            <Counter/>
</Provider>
           );
}

export default App;
