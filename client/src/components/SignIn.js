import React, {useState} from 'react';
import {
  Link,
  useHistory
} from 'react-router-dom';

const SignIn = ({signIn}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  let history = useHistory();

  const submit = e => {
    e.preventDefault();

    signIn(email, password)
      .then(user => {
        if (user === null) {
          setErrors('Niepoprawny email i/lub hasło');
        } else {
          setErrors(() => (''));
          console.log(`${email} is now signed in`);
          history.push('/');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <form method="post" onSubmit={submit}>
      <h1>Zaloguj się</h1>
      <fieldset>
        {errors && <p className="error-message-info">Niepoprawny email i/lub hasło</p>}
        <label htmlFor="email">Podaj Email:</label>
        <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
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
