import {Link} from 'react-router-dom';

// I've changed default function for example
// export default function () {}
// to arrow function as below
// It's exported at the bottom of the file
const Reviews = () => (
    <main>
      <article>
        <header>
          <h1>Assassin's Creed</h1>
        </header>
        <div>
          <p>Altaïr ibn La-Ahad tak nazywa się bohater gry, który ma za zadanie wyeliminować dziewięć postaci propagujących wyprawy krzyżowe oraz odpowiedzialnych za cierpienia innych ludzi
          Gracz będzie odwiedzał pięć historycznych miast: Jerozolime, Damaszek, Akkę, Masjaf i Arsuf</p>
          <p>Głównym bohaterem jest natomiast Desmond Miles żyjący w czasach
            obecnych. Jest on barmanem porwanym przez organizaję Abstergo
            Industries i umieszczony w Animusie czyli maszynie, która pozwala
            odczytywać pamięć genetyczną przodków. Właśnie tak ów Desmond
          wcieli się w Altaïra</p>
          <Link to="/reviews/assassins-creed">Czytaj dalej...</Link>
        </div>
      </article>
      <article>
        <header>
          <h1>Dead Space</h1>
          <p>Dead Space to pięknie odwzorowany brud, syf i rdza. Wyeksploatowane statki kosmiczne, toporne stalowe konstrukcje, które wyglądają staro, choć pochodzą z przyszłości. Odpowiednio oświetlone, miejscami zaparowane i zakurzone, świetnie kontrastują z nieprzebraną czernią kosmosu.</p>
          <Link to="/reviews/dead-space">Czytaj dalej...</Link>
        </header>
      </article>
      <article>
        <header>
          <h1>Assassin's Creed</h1>
        </header>
        <div>
          <p>Altaïr ibn La-Ahad tak nazywa się bohater gry, który ma za zadanie wyeliminować dziewięć postaci propagujących wyprawy krzyżowe oraz odpowiedzialnych za cierpienia innych ludzi
          Gracz będzie odwiedzał pięć historycznych miast: Jerozolime, Damaszek, Akkę, Masjaf i Arsuf</p>
          <p>Głównym bohaterem jest natomiast Desmond Miles żyjący w czasach
            obecnych. Jest on barmanem porwanym przez organizaję Abstergo
            Industries i umieszczony w Animusie czyli maszynie, która pozwala
            odczytywać pamięć genetyczną przodków. Właśnie tak ów Desmond
          wcieli się w Altaïra</p>
          <Link to="/reviews/assassins-creed">Czytaj dalej...</Link>
        </div>
      </article>
    </main>
  );


export default Reviews;
