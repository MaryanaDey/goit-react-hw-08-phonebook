// App.js
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import s from "./components/PhoneBook.module.css";
import NavBar from "./components/NavBar/NavBar";
import HomeView from "./components/views/HomeView";
import RegisterView from "./components/views/RegisterView";
import LoginView from "./components/views/LoginView";


import ContactView from "./components/views/ContactViews";
import { Suspense } from "react";
export default function Mobile() {
  return (
    <div className={s.container}>
      <NavBar />
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route  path="/">
          </Route>

          <Route 
          path="/"
          element={
            <HomeView />
          }
          />
        
        </Routes>

      </Suspense>
      <ContactView />
     
      <RegisterView />
      <LoginView />
    </div>
  );
}