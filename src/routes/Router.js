import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { Login, InputUjian} from "../pages";


export function Routers() {
    return (
        <Router>
        <div>
            <Routes>
                <Route exact path="/" element={<Login/>}></Route>
                <Route exact path="/input" element={<InputUjian/>}></Route>

            </Routes>
        </div>
        </Router>
    )
}
