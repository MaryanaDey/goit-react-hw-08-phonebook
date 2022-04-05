import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute() {
    return (
        <Route>
            <Redirect to="/login" />
        </Route>
    )
}