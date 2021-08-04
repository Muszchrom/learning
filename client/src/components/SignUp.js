import React, { useState, useEffect } from 'react';
import {
  Link,
  useHistory
} from 'react-router-dom';

import LoadingAnimation from './LoadingAnimation';

const SignUp = ({ data }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  const submit = e => {
    e.preventDefault();
    setLoading(true);

    const user = {
      name,
      username,
      email,
      password,
      confirmedPassword
    };

    data.createUser(user)
      .then(errors => {
        if (errors.length) {
          setErrors(errors);
          setLoading(false);
        } else {
          setLoading(false);
          setErrors([]);
          console.log(`${username} is successfully signed up and authenticated!`);
          history.push('/accountsettings');
        }
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
        history.push('/error');
      });
    }

  // Displaying error messages, colors and icons when error/errors occur
  useEffect(() => {
    const inputErrors = {
      name: {hasError: false, message: ''},
      username: {hasError: false, message: ''},
      email: {hasError: false, message: ''},
      password: {hasError: false, message: ''},
      confirmedPassword: {hasError: false, message: ''}
    };

    errors.forEach(e => {
      const err = e.split(' : ');
      const msg = err[0];
      const field = err[1];
      if (!inputErrors[field].hasError) {
        inputErrors[field].hasError = true;
        inputErrors[field].message = msg;
      }
    })

    for (let [field] of Object.entries(inputErrors)) {
      const input = document.getElementById(field);
      if (inputErrors[field].hasError) {
        input.nextSibling.innerText = inputErrors[field].message;
        input.nextSibling.style.display = 'block';
        input.style.border = '1px solid red';
        input.nextSibling.nextSibling.style.display = 'block';
      } else {
        input.nextSibling.innerText = '';
        input.nextSibling.style.display = 'none';
        input.style.border = '1px solid white';
        input.nextSibling.nextSibling.style.display = 'none';
      }
    }
  }, [errors]);

  return (
    <form method="post" onSubmit={e => submit(e)}>
      <h1>Zarejestruj się</h1>
      <fieldset>
        <label htmlFor="name">Imię:</label>
        <input type="text" id="name" onChange={e => setName(e.target.value)}/>
        <p className="error-message-info"></p>
        <div className="error-input-icon-div">
          <i className="material-icons error-input-icon" style={{color: 'red'}}>
            warning
          </i>
        </div>

        <label htmlFor="username">Nazwa użytkownika:</label>
        <input type="text" id="username" onChange={e => setUsername(e.target.value)}/>
        <p className="error-message-info"></p>
        <div className="error-input-icon-div">
          <i className="material-icons error-input-icon" style={{color: 'red'}}>
            warning
          </i>
        </div>

        <label htmlFor="email">Emile:</label>
        <input type="text" id="email" onChange={e => setEmail(e.target.value)}/>
        <p className="error-message-info"></p>
        <div className="error-input-icon-div">
          <i className="material-icons error-input-icon" style={{color: 'red'}}>
            warning
          </i>
        </div>

        <label htmlFor="password">Hasło:</label>
        <input type="text" id="password" onChange={e => setPassword(e.target.value)}/>
        <p className="error-message-info"></p>
        <div className="error-input-icon-div">
          <i className="material-icons error-input-icon" style={{color: 'red'}}>
            warning
          </i>
        </div>

        <label htmlFor="confirmedPassword">Powtórz hasło:</label>
        <input type="text" id="confirmedPassword" onChange={e => setConfirmedPassword(e.target.value)}/>
        <p className="error-message-info"></p>
        <div className="error-input-icon-div">
          <i className="material-icons error-input-icon" style={{color: 'red'}}>
            warning
          </i>
        </div>
      </fieldset>
      <button type="submit" name="button" style={{position: 'relative'}}>
        Zarejestruj się
        {loading ? <LoadingAnimation /> : false}
      </button>
      <h2>Masz konto?</h2>
      <Link className="a-button" to="signin">Zaloguj się</Link>
    </form>
  );
}

export default SignUp;
