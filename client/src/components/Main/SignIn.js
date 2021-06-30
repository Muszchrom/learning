import { Link } from 'react-router-dom';

export default function SignIn () {
  return (
    <main>
      <div className="signinform">
        <div className="signinform-wrapper">
          <form onSubmit={e => e.preventDefault()} method="POST">
            <h1>Zaloguj się</h1>
            <fieldset>
              <label htmlFor="name">Nazwa użytkownika: </label>
              <input
                type="text"
                id="name"
                name="user_name"
                autoComplete="nickname"
              />

              <label htmlFor="password">Hasło: </label>
              <input
                type="password"
                id="password"
                name="user_password"
                autoComplete="current-password"
              />

              <button className="sign-in-button" type="submit">Zaloguj się</button>
            </fieldset>
          </form>
        </div>
        <div className="signinform-wrapper">
          <h2>Nie masz konta?</h2>
          <Link to="/signup" className="signup-link">Zarejestruj się</Link>
        </div>
      </div>
    </main>
  );
}
