import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./redux/redux";
import './global.css'
import Pages from "./pages/Pages";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Pages />
            </Provider>
        </BrowserRouter>
    )
}
export default App