import style from "./singin.module.css";
const signin = () => {
  return (
    <>
      <h1>sign in</h1>
      <form className={style.form}>
        <label name="email">email</label>
        <input type="email" name="email" placeholder="type your password" />
        <label name="password">password</label>
        <input type="password" name="password" placeholder="your password" />
        <button>register</button>
      </form>
    </>
  );
};
export default signin;
