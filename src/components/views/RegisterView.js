import s from "../PhoneBook.module.css";

export default function RegisterView() {
    return(
        <div>
            <h1 className={s.headingForm}>Сторінка реєстрації</h1>
            <form className={s.form} action="" onSubmit={""}>
        <label htmlFor={""} className={s.labelName}>
          Ім'я
        </label>
        <input
          id={""}
          value={""}
          name="name"
          type="name"
          onChange={""}
        />
        <label htmlFor={""} className={s.labelName}>
          Пошта
        </label>
        <input
          id={""}
          value={""}
          name="email"
          type="email"
          onChange={""}
        />

        <label htmlFor={""} className={s.labelName}>
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
          Зареєструватися
        </button>
      </form>
        </div>
    )
}