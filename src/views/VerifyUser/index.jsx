/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Creators } from '@Actions/verifyUser';

const { getUserVerifiedDataRequest, setToken } = Creators;

const VerifyUser = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const token = new URLSearchParams(search).get('token');

  useEffect(() => {
    dispatch(setToken(token));
    dispatch(getUserVerifiedDataRequest({ token }));
  }, []);

  return (
    <div style={{ textAlign: 'center', top: '30%' }}>
      <p>Verifying.......</p>
    </div>
  );
};

export default VerifyUser;
