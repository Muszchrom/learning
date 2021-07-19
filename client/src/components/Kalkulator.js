import React, {useState, useEffect} from 'react';

const Kalkulator = () => {

  const [baseAmount, setBaseAmount] = useState('');
  const [baseStrength, setBaseStrength] = useState('');
  const [liquidAmount, setLiquidAmount] = useState('');
  const [liquidStrength, setLiquidStrength] = useState('');
  const [calculatedAmount, setCalculatedAmount] = useState('');
  const [calculatedStrength, setCalculatedStrength] = useState('');

  useEffect(() => {
    const bAmount = parseInt(baseAmount);
    const bStrength = parseInt(baseStrength);
    const lAmount = parseInt(liquidAmount);
    const lStrength = parseInt(liquidStrength);
    const cAmount = parseInt(bAmount + lAmount);
    const cStrength = Math.round((((bAmount * bStrength) + (lAmount * lStrength)) / cAmount) * 100) / 100;
    setCalculatedAmount('' + cAmount);
    setCalculatedStrength('' + cStrength);
  }, [baseAmount, baseStrength, liquidAmount, liquidStrength, calculatedAmount])

  return (
    <article>
      <div className="kalkulator-moc-liquidu">
        <form className="" method="get">
          <h1>Oblicz moc liquidu</h1>
          <fieldset>
            <legend><span className="enumerate">1</span>Liquid Bazowy (ilość w ml)</legend>
            <label htmlFor="base-amount">Podaj ilość liquidu bazowego:</label>
            <input type="text" id="base-amount" onChange={e => setBaseAmount(e.target.value)}/>
            <label htmlFor="base-strength">Podaj moc liquidu bazowego:</label>
            <input type="text" id="base-strength" onChange={e => setBaseStrength(e.target.value)}/>

            <legend><span className="enumerate">2</span>Liquid Rozcieńczany (ilość w ml)</legend>
            <label htmlFor="liquid-amount">Podaj ilość liquidu rozcieńczanego:</label>
            <input type="text" id="liquid-amount" onChange={e => setLiquidAmount(e.target.value)}/>
            <label htmlFor="liquid-strength">Podaj moc liquidu rozcieńczanego:</label>
            <input type="text" id="liquid-strength" onChange={e => setLiquidStrength(e.target.value)}/>
          </fieldset>
        </form>
        <p>Ilość otrzymanego liquidu: <span id="calc-amount">{calculatedAmount}</span> ml</p>
        <p>Moc otrzymanego liquidu: <span id="calc-strength">{calculatedStrength}</span> mg/ml</p>
      </div>
    </article>
  )
}

export default Kalkulator;
