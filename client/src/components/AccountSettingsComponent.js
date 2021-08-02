import React, { useState } from 'react';

import ModalWindow from './ModalWindow';

export default function AccountSettingsComponent(props) {

  const [show, setShow] = useState(false);

  const onClick = () => {
    show ? setShow(false) : setShow(true);
  }

  return (
    <div className="account-settings-edit-container">
      <div>
        <p className="margin-none">{props.nameType}</p>
        <p className="margin-none">{props.var}</p>
      </div>
      <button className="account-settings-button" onClick={onClick}>
        Edytuj
      </button>
      {show ? <ModalWindow onClick={onClick} nameType={props.nameType}/>
      : false
      }
          </div>
  );
}
