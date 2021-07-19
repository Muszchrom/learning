import React, {useState} from 'react';
import {
  Link
} from 'react-router-dom';

const SignIn = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const plogin = 'Karol123';
  const ppassword = 'Karol123';

  const validateUserInput = e => {
    e.preventDefault();
    if (login !== plogin || password !== ppassword) {
      setErrors(() => ('Niepoprawny login i/lub hasło'));
      setPassword('');
    } else {
      setErrors(() => (''));
    }
  }

  return (
    <form method="post" onSubmit={validateUserInput}>
      <h1>Zaloguj się</h1>
      <fieldset>
        {errors && <p className="error-message-info">Niepoprawny login i/lub hasło</p>}
        <label htmlFor="login">Podaj Login:</label>
        <input type="text" id="login" value={login} onChange={e => setLogin(e.target.value)}/>
        <label htmlFor="password">Podaj Hasło:</label>
        <input type="text" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button type="submit" name="button">Zaloguj się</button>
      </fieldset>
      <h2>Nie masz konta?</h2>
      <Link className="a-button" to="signup">Zarejestruj się</Link>
    </form>
  );
}

export default SignIn;
