import React, { useState, useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import 'croppie/croppie.css'
import Croppie from 'croppie';

import AccountSettingsComponent from './AccountSettingsComponent';
import ModalWindow from './ModalWindow';

import image from '../images/impostor.jpg'

const AccountSettings = ({ authenticatedUser }) => {

  const button = useRef();
  const shadow = useRef();
  const croppieDiv = useRef();
  const [showProfileImgModal, setShowProfileImgModal] = useState(false);

  useEffect(() => {
    if (croppieDiv.current) {
      var el = croppieDiv.current;
      var vanilla = new Croppie(el, {
        viewport: { width: 200, height: 200, type: 'circle'},
        boundary: { width: 320, height: 220}
      });
      vanilla.bind({
        url: image,
      });
      //on button click
      vanilla.result('blob').then(function(blob) {
        // do something with cropped blob
      });
    }
  }, [showProfileImgModal])

  const onClick = () => {
    showProfileImgModal ? setShowProfileImgModal(false) : setShowProfileImgModal(true);
  }

  useEffect(() => {
    if (button.current) {
      button.current.addEventListener('mouseover', () => {
        toggleStyles();
      })
      button.current.addEventListener('mouseout', () => {
        toggleStyles();
      });
      button.current.addEventListener('focus', () => {
        toggleStyles();
      });
      button.current.addEventListener('focusout', () => {
        toggleStyles();
      });
      const toggleStyles = () => {
        shadow.current.classList.toggle('box-shadow');
      }
    }
  }, []);

  return (
    <div>
      {authenticatedUser
        ? (
          <div className="account-settings-container">
            <h1>Cześć {authenticatedUser.name}!</h1>
            <button ref={button} className="account-settings-image-button" onClick={onClick}>
              <img src={image} role="button" className="account-settings-image" alt="Zdjęcie profilowe"/>
              <div ref={shadow}></div>
            </button>
            {showProfileImgModal
              ? (
                <ModalWindow onClick={onClick} title="Zmień zdjęcie profilowe">
                  <div className="modal-form">
                    <div ref={croppieDiv}>

                    </div>
                    <label id="lastFocusElement" className="custom-file-input" tabIndex="0">
                      <input type="file" accept=".jpg,.png" />
                      Wybierz zdjęcie
                    </label>
                  </div>
                </ModalWindow>
              ): false}
            <AccountSettingsComponent
              nameType="Nazwa użytkownika"
              var={authenticatedUser.username} />
            <AccountSettingsComponent
              nameType="Email"
              var={
                '*'.repeat(authenticatedUser.email.split('@')[0].length) + '@' + authenticatedUser.email.split('@')[1]
              } />
            <AccountSettingsComponent
              nameType="Hasło"
            var="********" />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          </div>
        ) : (
          <Redirect to="/signin" />
        )}
    </div>
  )
}

export default AccountSettings;
