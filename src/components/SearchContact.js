import s from "./PhoneBook.module.css";

export default function SearchContact(){
    return (
        <div className={s.containerSearch}>
      <label className={s.labelSearch} htmlFor={id}>
        Пошук контактів по імені
      </label>
      <input
        type="text"
        name="filter"
        value={""}
        onChange={""}
        id={""}
        autoComplete="off"
        className={s.inputSearch}
      ></input>
    </div>
    )
}