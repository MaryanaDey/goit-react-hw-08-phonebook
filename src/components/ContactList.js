// import { useEffect } from "react";
// import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
// import { authOperations } from "../Redux/auth";
// import { useSelector } from "react-redux";
// import Button from "./ButtonList/ButtonList";
// import * as phonebookSelectors from "../Redux/phonebook/phonebook-selectors";

import s from "./PhoneBook.module.css";

export default function СontactList() {
    return (
        <>
        <div>
        <p className={s.infoContact}>
            Для того щоб набрати номер, просто натисніть на нього 😊
          </p>
        </div>
        </>
    )
}

