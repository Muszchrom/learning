import React, { useRef, useEffect } from 'react';

export default function ModalWindow (props) {
  const overlay = useRef();
  const modal = useRef();

  const firstFocusPortal = useRef();
  const lastFocusPortal = useRef();
  const firstFocusElement = useRef();

  let title = '';

  if (props.nameType === 'Nazwa użytkownika') {
    title = 'Zmień nazwę użytkownika';
  } else if (props.nameType === 'Email') {
    title = 'Zmień email';
  } else if (props.nameType === 'Hasło') {
    title = 'Zmień hasło';
  } else {
    title = props.title;
  }

  useEffect(() => {
    const lastFocusElementID = document.getElementById('lastFocusElement');

    document.addEventListener('focusin', trapFocus);
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        props.onClick();
      }
    })

    if (modal) {
      if (lastFocusElementID) {
        lastFocusElementID.focus();
        lastFocusElementID.blur();
      }
    }

    function trapFocus(e) {
      if (lastFocusElementID) {
        if (e.target === firstFocusPortal.current) {
          lastFocusElementID.focus();
        }

        if (e.target === lastFocusPortal.current) {
          firstFocusElement.current.focus();
        }
      }
    }

    return function cleanup() {
      document.removeEventListener('focusin', trapFocus);
      document.removeEventListener('keydown', (e) => {
        if (e.key === "Escape") {
          props.onClick();
        }
      })
    }
  }, [props]);

  return (
    <div>
      <div ref={overlay} className="overlay" onClick={props.onClick}></div>
      <div ref={modal} className="modal">
        <span ref={firstFocusPortal} tabIndex='0'></span>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button aria-label="Zamknij" ref={firstFocusElement} className="modal-close-button" onClick={props.onClick}>
            <i className="close-button-svg"></i>
          </button>
        </div>
        {props.nameType === 'Nazwa użytkownika'
          ? <Username onClick={props.onClick}/>
          : props.nameType === 'Email'
            ? <Email onClick={props.onClick}/>
            : props.nameType === 'Hasło'
              ? <Password onClick={props.onClick}/>
              : props.children
        }
        <span ref={lastFocusPortal} tabIndex='0'></span>
      </div>
    </div>
  )
}

function Username (props) {
  return (
    <form onSubmit={e => e.preventDefault()} className="modal-form">
      <label>Nowa nazwa użytkownika:</label>
      <input></input>
      <label>Podaj hasło:</label>
      <input></input>
      <button id="lastFocusElement" type="submit" className="" onClick={props.onClick}>Zatwierdź</button>
    </form>
  );
}

function Email (props) {
  return (
    <form onSubmit={e => e.preventDefault()} className="modal-form">
      <label>Nowy email:</label>
      <input></input>
      <label>Podaj hasło:</label>
      <input></input>
      <button id="lastFocusElement" type="submit" className="" onClick={props.onClick}>Zatwierdź</button>
    </form>
  );
}

function Password (props) {
  return (
    <form onSubmit={e => e.preventDefault()} className="modal-form">
      <label>Nowe hasło:</label>
      <input></input>
      <label>Powtórz nowe hasło:</label>
      <input></input>
      <label>Podaj stare hasło:</label>
      <input></input>
      <button id="lastFocusElement" type="submit" className="" onClick={props.onClick}>Zatwierdź</button>
    </form>
  );
}
