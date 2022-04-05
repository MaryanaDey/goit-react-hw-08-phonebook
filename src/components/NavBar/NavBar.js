import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import User from "./User";
import s from "./Navigation.module.css";

export default function NavBar() {
  return (
    <div className={s.generalNavContainer}>
      <Navigation />
      <User />
      <AuthNav />
    </div>
  );
}