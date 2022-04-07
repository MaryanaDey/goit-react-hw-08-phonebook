import s from "./PhoneBook.module.css";
import Button from "./Button/Button";
import shortid from "shortid";
import { useState } from "react";

export default function Form(){
  const [newName, setName] = useState("");
  const [number, setNumber] = useState("");

  const InputValues = (e) => {
    const maxValues = e.target.max;
    const {name, value} = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);

        break;
      case "number":
        console.log(value.length);
        if (value.length > maxValues) {
          return;
        }
        setNumber(value);
        break;
      default:
        return;
   }
  };

  const addContact = (e) => {
    e.preventDefault();

    const lengthInputNemeChech = newName.length;
    const lengthInputNumberChech = number.length;
    if (lengthInputNemeChech < 2 || lengthInputNemeChech > 10) {
      alert('Введіть ім"я більше 1-го символа і не більше 10');
      return;
    }
    if (lengthInputNumberChech < 7 || lengthInputNumberChech > 10) {
      alert("Введіть номер більше 7-ми цифр і не більше 10");
      return;
    }

    onSubmit(newName, number, state);

    resetInputValues();
  };

  
  const onCheckName = (contactList, newNameF) => {
    return contactList.some(({ newName }) => newName === newNameF);
  };

  const onSubmit = (newName, number, contactList) => {
    if (onCheckName(contactList, newName)) {
      alert('Це ім"я вже існує');
      return;
    }
    //dispatch(phonebookOperation.addContact(newName, number));
  };

  const resetInputValues = () => {
    setName("");
    setNumber("");
  }

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