import style from "./singup.module.css";
const signup = () => {
  return (
    <>
      <h1>sing up</h1>
      <form className={style.form}>
        <label name="email">email</label>
        <input type="email" name="email" placeholder="type your password" />
        <label name="name">name</label>
        <input type="text" name="name" placeholder="type your full name" />
        <label name="password">password</label>
        <input type="password" name="password" placeholder="your password" />
        <label name="confirm password">confirm password</label>
        <input type="password" name="confirm password" placeholder="repeat the same password" />
        <button>register</button>
      </form>
    </>
  );
};
export default signup;
