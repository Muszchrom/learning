import React, {useEffect, useState} from 'react';

const Minecraft = (props) => {
  //36.90
  const [goal, setGoal] = useState(0);
  const [currentAmount, setCurrentAmount] = useState(0);

  const progress = async (data) => {
    await data.getMinecrtaftProgressBar()
      .then(prg => {
        const a = prg.moneyForMinecraftServer.progress;
        const b = prg.moneyForMinecraftServer.goal;
        setCurrentAmount(a);
        setGoal(b);
        const progressBar = document.querySelector('.progress-bar-done');
        progressBar.style.width = `${Math.round((a * 100) / b)}%`;
      })
  }

  useEffect(() => {
    progress(props.data);
  }, [props.data]);

  return (
    <div>
      <div className="container-center">
        <h1>Minecraft.html</h1>
        <p>Status: zbieranie funduszy</p>
        <div className="progress-bar">
          <div className="progress-bar-done" data-done="60"></div>
        </div>
        <p><span id="moneyForServer">{`${currentAmount.toFixed(2)} / ${goal.toFixed(2)}zł`}</span></p>
        <div className="flex-buttons-container">
          <button type="button" name="button">Dołącz</button>
          <button type="button" name="button">Donate</button>
        </div>
      </div>
      <article>
        <h2>Zasady</h2>
        <ul>
          <li>Nie cheatuj</li>
          <li>Nie griefuj</li>
        </ul>
        <h2>Informacje o serwerze</h2>
        <ul>
          <li>Obecna wersja 1.17</li>
          <li>Plugin na logowanie</li>
          <li>Plugin better sleeping</li>
          <li>Rozmiar mapy 10k x 10k</li>
        </ul>
      </article>
    </div>
  );
}

export default Minecraft;
