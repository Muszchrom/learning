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
  const [fileUploaded, setFileUploaded] = useState(false);
  const [inputError, setInputError] = useState(null);

  const onClick = () => {
    showProfileImgModal ? setShowProfileImgModal(false) : setShowProfileImgModal(true);
    fileUploaded && setFileUploaded(false);
  }
  const validateInput = (e) => {
    // validate size
    const size = e.target.files[0].size
    if (size > 4000000) {
      setInputError("Plik nie może być większy niż 4MB");
    } else {
      // validate extension
      const fileName = e.target.value;
      const dotIndex = fileName.lastIndexOf('.') + 1;
      const extension = fileName.substr(dotIndex, fileName.length).toLowerCase();
      if (extension === "jpg" || extension === "jpeg" || extension === "png") {
        setInputError(null);
        setFileUploaded(true);
      } else {
        setInputError("Formatem pliku musi być .JPG lub .PNG");
      }
    }
  }

  // Effect for croppie
  useEffect(() => {
    if (croppieDiv.current) {
      var el = croppieDiv.current;
      var vanilla = new Croppie(el, {
        viewport: { width: 200, height: 200, type: 'circle'},
        boundary: { height: 220}
      });
      vanilla.bind({
        url: image,
      });
      //on button click
      vanilla.result('blob').then(function(blob) {
        // do something with cropped blob
      });
    }
  }, [fileUploaded, showProfileImgModal])

  // Effect for hovering over profile image
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
                    {fileUploaded
                      ? (
                        <>
                          <div ref={croppieDiv}>

                          </div>
                          <button>Zapisz</button>
                        </>
                      ): (
                        <div>
                          {inputError && <p className="error-message-info">{inputError}</p>}
                          <label id="lastFocusElement" className="custom-file-input" tabIndex="0">
                            <input type="file" accept=".jpg, .png" onChange={e => validateInput(e)}/>
                            Wybierz zdjęcie
                          </label>
                        </div>
                      )}
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
            <AccountSettingsComponent nameType="Hasło" var="********" />
          </div>
        ) : (
          <Redirect to="/signin" />
        )}
    </div>
  )
}

export default AccountSettings;
