// App.js
// import "./App.css";
 import { Routes, Route } from 'react-router-dom';
// import s from "./components/PhoneBook.module.css";
// import NavBar from "./components/NavBar/NavBar";
 import HomeView from "./components/views/HomeView";
 import RegisterView from "./components/views/RegisterView";
// import LoginView from "./components/views/LoginView";
// import PrivateRoute from "./components/views/PrivateRoute";
// import PublicRoute from "./components/views/PublicRoute";

//import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import s from "./components/PhoneBook.module.css";

//import authOperations from "./Redux/auth/auth-operations";
import NavBar from "./components/NavBar/NavBar";

// import RegisterView from "./components/views/RegisterView";
 import LoginView from "./components/views/LoginView";
 import ContactView from "./components/views/ContactViews";
// import HomeView from "./components/views/HomeView";
// import PrivateRoute from "./components/views/PrivateRoute";
// import PublicRoute from "./components/views/PublicRoute";
// import { authSelectors } from "./Redux/auth";
import { Suspense } from "react";

export default function Mobile() {
  //const dispatch = useDispatch();
  // const refreshingPage = useSelector(authSelectors.getRefreshingPage);
  //console.log(refreshingPage);

  //useEffect(() => {
   // dispatch(authOperations.getCurrentUser());
  //}, [dispatch]);
  
  return (
    // !refreshingPage && (
      <div className={s.container}>
      <NavBar />
      
      <Suspense fallback={<>Loading...</>}>
        <Routes >
          <Route path="/" element={<HomeView />}></Route>
          <Route path="/register" element={ <RegisterView />}>
          </Route>
          <Route path="/login" element={ <LoginView />}>
          </Route>
          <Route path="/contacts" element={<ContactView />}>
          </Route>
        </Routes>
      </Suspense>
    </div>
    )
  // );
}