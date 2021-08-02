import React, { useState, useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import 'croppie/croppie.css'
// import Croppie from 'croppie';

import AccountSettingsComponent from './AccountSettingsComponent';
import ModalWindow from './ModalWindow';

import image from '../images/impostor.jpg'

const AccountSettings = ({ authenticatedUser }) => {

  const imageElement = useRef();
  const [showProfileImgModal, setShowProfileImgModal] = useState(false);

  // const XD = 'aids';
  //
  // useEffect(() => {
  //   var el = document.getElementById('vanilla-demo');
  //   var vanilla = new Croppie(el, {
  //       viewport: { width: 200, height: 200, type: 'circle'},
  //       boundary: { width: 320, height: 220}
  //   });
  //   vanilla.bind({
  //       url: image,
  //   });
  //   //on button click
  //   vanilla.result('blob').then(function(blob) {
  //       // do something with cropped blob
  //   });
  // }, [XD])
  // console.log(authenticatedUser)

  const onClick = () => {
    showProfileImgModal ? setShowProfileImgModal(false) : setShowProfileImgModal(true);
  }

  useEffect(() => {
    imageElement.current.addEventListener('click', () => {
      setShowProfileImgModal(true);
    })
  }, [showProfileImgModal])

  return (
    <div>
      {authenticatedUser
        ? (
          <div className="account-settings-container">
            <h1>Cześć {authenticatedUser.name}!</h1>
            <img src={image} ref={imageElement} className="account-settings-image" tabIndex="0" alt="Zdjęcie profilowe"/>
            {showProfileImgModal
              ? (
                <ModalWindow onClick={onClick} nameType={'Nazwa użytkownika'}>
                  <div id="testing"></div>
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
            {/* <div id="vanilla-demo">

            </div> */}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          </div>
        ) : (
          <Redirect to="/signin" />
        )}
    </div>
  )
}

export default AccountSettings;
