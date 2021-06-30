export default function SignUp () {
  return (
    <main>
      <div className="signinform">
        <div className="signinform-wrapper">
          <form>
            <h1>Zaloguj się</h1>
            <fieldset>
              <label htmlFor="name">Nazwa użytkownika: </label>
              <input
                type="text"
                id="name"
                name="user_name"
                autoComplete="off"
              />

              <label htmlFor="mail">Email: </label>
              <input
                type="email"
                id="mail"
                name="user_email"
                autoComplete="email"
              />

              <label htmlFor="password">Hasło: </label>
              <input
                type="password"
                id="password"
                name="user_password"
                autoComplete="new-password"
              />

              <label htmlFor="rep-password">Powtórz Hasło: </label>
              <input
                type="password"
                id="rep-password"
                name="user_password"
                autoComplete="new-password"
              />

              <button className="sign-in-button" type="submit">Zarejestruj się</button>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
}
