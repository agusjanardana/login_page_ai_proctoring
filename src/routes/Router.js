import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { Login} from "../pages";


export function Routers() {
    return (
        <Router>
        <div>
            <Routes>
                <Route exact path="/" element={<Login/>}>
                </Route>
            </Routes>
        </div>
        </Router>
    )
}
