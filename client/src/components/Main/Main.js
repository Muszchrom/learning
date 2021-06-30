import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Main ({match, history}) {
  let param1 = match.params.age;
  let param2 = match.params.fname + ' ' + match.params.sname;

  const [age, setAge] = useState('');
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`${age}, ${fname}, ${lname}`);
    const path = `/get-info-from-link/${age}/${fname}-${lname}`;
    console.log("Redirecting user to the path B)");
    history.push(path);
  }

  return (
    <main>
      <article>
        <p>Spróbuj dodać coś do linku coś co nie przekierowuje na inne strony </p>
        <p>Na przykład -> localhost:3000/get-info-from-link/wiek/imie</p>
        <Link style={{"color": "red", "padding": "5px"}} to="/get-info-from-link/wiek/imie-nazwisko">Albo kliknij w ten link</Link>
        <p>Tutaj wyświetli się twój pierwszy parametr: {param1}</p>
        <p>A tutaj drugi: {param2}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Wiek" onChange={input => setAge(input.target.value)} />
          <input type="text" placeholder="Imie" onChange={input => setFName(input.target.value)} />
          <input type="text" placeholder="Nazwisko" onChange={input => setLName(input.target.value)} />
          <button type="submit">Go!</button>
        </form>
      </article>
    </main>
  );
};
