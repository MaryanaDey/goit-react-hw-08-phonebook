import s from "./User.module.css";

export default function User() {
  return (
    <>
      <div className={s.containerNav}>
        <p className={s.user}>Добрый день !</p>
        <button className={s.btn} type="button">
          Выйти
        </button>
      </div>
    </>
  );
}