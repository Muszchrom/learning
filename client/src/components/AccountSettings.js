import React from 'react';
import { Redirect } from 'react-router-dom';
import 'croppie/croppie.css'
// import Croppie from 'croppie';
import AccountSettingsComponent from './AccountSettingsComponent';

import image from '../images/impostor.jpg'

const AccountSettings = ({ authenticatedUser }) => {

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
  return (
    <div>
      {authenticatedUser
        ? (
          <div className="account-settings-container">
            <h1>Cześć {authenticatedUser.name}!</h1>
            <img src={image} className="account-settings-image" tabIndex="0" alt="Zdjęcie profilowe"/>
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
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          </div>
        ) : (
          <Redirect to="/signin" />
        )}
    </div>
  )
}

export default AccountSettings;
