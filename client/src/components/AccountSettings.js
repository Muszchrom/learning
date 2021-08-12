import React, { useState, useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import 'croppie/croppie.css'
import Croppie from 'croppie';

import AccountSettingsComponent from './AccountSettingsComponent';
import ModalWindow from './ModalWindow';

import impostor from '../images/impostor.jpg'

const AccountSettings = ({ authenticatedUser }) => {

  const button = useRef();
  const shadow = useRef();
  const croppieDiv = useRef();

  const [showProfileImgModal, setShowProfileImgModal] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const [profilePicture, setProfilePicture] = useState(impostor);
  const [image, setImage] = useState(null);
  const [croppie, setCroppie] = useState(null);
  const [inputError, setInputError] = useState(null);

  const onClick = () => {
    showProfileImgModal ? setShowProfileImgModal(false) : setShowProfileImgModal(true);
    fileUploaded && setFileUploaded(false);
  }

  // validate input image
  const validateInputImage = (e) => {
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
        // if all fine run setUpImage fucntion and set errors to null;
        setInputError(null);
        setUpImage(e.target.files[0]);
      } else {
        setInputError("Formatem pliku musi być .JPG lub .PNG");
      }
    }
  }

  // setting up input image
  const setUpImage = (file) => {
    const imageType = /image.*/;
    if (file.type.match(imageType)) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setFileUploaded(true);
      }
      reader.readAsDataURL(file);
    }
  }

  // Effect for croppie
  useEffect(() => {
      const el = croppieDiv.current;
      if (el) {
        const croppieInstance = new Croppie(el, {
          viewport: {
            width: 200,
            height: 200,
            type: 'circle'},
          boundary: {
            height: 220
          }
        });
        croppieInstance.bind({
          url: image,
        });
        setCroppie(croppieInstance);
      }
  }, [fileUploaded, image])

  const handleImageSubmit = (e) => {
    e.preventDefault();
    croppie.result('base64').then((blob) => {
      setProfilePicture(blob);
    });
    showProfileImgModal ? setShowProfileImgModal(false) : setShowProfileImgModal(true);
    fileUploaded && setFileUploaded(false);
  }

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
              <img src={profilePicture} role="button" className="account-settings-image" alt="Zdjęcie profilowe"/>
              <div ref={shadow}></div>
            </button>
            {showProfileImgModal
              ? (
                <ModalWindow onClick={onClick} title="Zmień zdjęcie profilowe">
                  <div className="modal-form">
                    {fileUploaded
                      ? (
                        <form onSubmit={handleImageSubmit}>
                          <div ref={croppieDiv}>

                          </div>
                          <input />
                          <button type="submit">Potwierdź</button>
                        </form>
                      ): (
                        <div>
                          {inputError && <p className="error-message-info">{inputError}</p>}
                          <label id="lastFocusElement" className="custom-file-input" tabIndex="0">
                            <input type="file" accept=".jpg, .png" onChange={e => validateInputImage(e)}/>
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
