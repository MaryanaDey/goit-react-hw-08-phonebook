// App.js
import "./App.css";

import s from "./components/PhoneBook.module.css";
import NavBar from "./components/NavBar/NavBar";

export default function Mobile() {
  return (
    <div className={s.container}>
      <NavBar />
    </div>
  );
}