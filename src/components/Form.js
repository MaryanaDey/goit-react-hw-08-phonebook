import s from "./PhoneBook.module.css";
import Button from "./Button/Button";
import shortid from "shortid";

export default function Form(){

  const idName = shortid.generate();
  const idNumber = shortid.generate();
    return (
        <form className={s.form} onSubmit={""}>
      <label htmlFor={""} className={s.labelName}>
        Ім'я
      </label>
      <input
        id={idName}
        placeholder="Name"
        type="text"
        name="name"
        value={""}
        onChange={""}
        autoComplete="off"
      ></input>

<label htmlFor={""} className={s.labelNumber}>
        Номер
      </label>
      <input
        id={idNumber}
        placeholder="(0xx) xxx-xx-xx"
        type="tel"
        pattern="^[ 0-9]+$"
        name="number"
        value={""}
        onChange={""}
        autoComplete="off"
        max="10"
      ></input>
          <Button>Додати контакт</Button>
      </form>
    )
}