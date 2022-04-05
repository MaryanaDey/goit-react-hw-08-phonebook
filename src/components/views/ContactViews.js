import s from "../PhoneBook.module.css";
import Form from "../Form";
import ContactList from "../ContactList";
import SearchContact from "../SearchContact";

export default function ContactsViews() {
  return (
    <>
      <h1 className={s.headingForm}>Телефонная книга </h1>
      <Form />
      <h2 className={s.contactList}>Контакты</h2>
      <SearchContact />
      <ContactList />
    </>
  );
}