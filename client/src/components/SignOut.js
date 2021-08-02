import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const SignOut = ({ signOut }) => {
  useEffect(() => signOut());
  return (
    <Redirect to="/" />
  );
}

export default SignOut;
