import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

import { authOperations } from "../../Redux/auth";
import s from "../PhoneBook.module.css";

export default function RegisterView() {
  // const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    // dispatch(authOperations.register({ name, email, password }));
    // resetForm();
  };

  // const resetForm = () => {
  //   setName("");
  //   setEmail("");
  //   setPassword("");
  // };

  // const idName = shortid.generate();
  // const idEmail = shortid.generate();
  // const idPassword = shortid.generate();

  return (
    <div>
      <h1 className={s.headingForm}>Сторінка реєстрації</h1>
      <form className={s.form} action="" onSubmit={handleSubmite}>
        <label htmlFor={""} className={s.labelName}>
          Ім'я
        </label>
        <input
          id={""}
          value={name}
          name="name"
          type="name"
          onChange={handleChange}
        />

        <label htmlFor={""} className={s.labelName}>
          Пошта
        </label>
        <input
          id={""}
          value={email}
          name="email"
          type="email"
          onChange={handleChange}
        />

        <label htmlFor={""} className={s.labelName}>
          Пароль
        </label>
        <input
          id={""}
          value={password}
          name="password"
          type="password"
          onChange={handleChange}
        />

        <button className={s.btnReg} type="submit">
          Зареєструватися
        </button>
      </form>
    </div>
  );
}