import React from "react"
import { HashRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./redux/redux";
import './global.css'
import Pages from "./pages/Pages";

const App = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <Pages />
            </Provider>
        </HashRouter>
    )
}
export default App