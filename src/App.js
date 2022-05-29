import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} element={route.element} path={route.path} exact={route.exact} />
                ))}
            </Routes>
        </div>
    );
}

export default App;
