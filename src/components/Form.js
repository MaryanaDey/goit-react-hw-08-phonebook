import s from "./PhoneBook.module.css";

export default function Form(){
    return (
        <form className={s.form} onSubmit={""}>
      <label htmlFor={""} className={s.labelName}>
        Ім'я
      </label>
      <input
        id={""}
        type="text"
        name="name"
        value={""}
        onChange={""}
        autoComplete="off"
      ></input>
      </form>
    )
}