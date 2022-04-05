import s from "../PhoneBook.module.css";

export default function Login() {
    return(
        <div>
             <h1 className={s.headingForm}>Сторінка авторизації</h1>
             <form className={s.form} action="" onSubmit={""}>
        <label className={s.labelName} htmlFor={""}>
          Пошта
        </label>
        <input
          id={""}
          value={""}
          name="email"
          type="email"
          onChange={""}
        />
        <label className={s.labelName} htmlFor={""}>
          Пароль
        </label>
        <input
          id={""}
          value={""}
          name="password"
          type="password"
          onChange={""}
        />
        <button className={s.btnReg} type="submit">
          Увійти
        </button>
      </form>
        </div>
    )
}
