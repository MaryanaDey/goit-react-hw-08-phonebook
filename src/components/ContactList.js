
//  import { useEffect } from "react";
//  import PropTypes from "prop-types";
//  import { useDispatch } from "react-redux";
 import { authOperations } from "../Redux/auth";
import { useSelector } from "react-redux";
import Button from "./ButtonList/ButtonList";
import * as phonebookSelectors from "../Redux/phonebook/phonebook-selectors";
import s from "./PhoneBook.module.css";

export default function СontactList() {
  // const stateContacts = useSelector(phonebookSelectors.getFilterContacts);
  //  const dispatch = useDispatch();
  //  useEffect(() => {
  //   dispatch(authOperations.getCurrentUser());
  //  }, [dispatch]);

  return (
    <>
      {/* {stateContacts.length > 0 && ( */}
        <div>
          <p className={s.infoContact}>
            Для того щоб набрати номер, просто натисніть на нього 😊
          </p>
          {/* <ul className={"js-list"}>
            {stateContacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  <span className={s.nameContact}>{name}: </span>
                  <span className={s.numberContact}>
                    +38
                    <a href={`tel: ${number}`} className={s.numberContact}>
                      {number}
                    </a>
                  </span>
                  <Button id={id}>Видалити</Button>
                </li>
              );
            })}
          </ul> */}
        </div>
      {/* )} */}
    </>
  );
}