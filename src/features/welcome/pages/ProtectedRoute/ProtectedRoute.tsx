import React from 'react';
import {Navigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/rootReducer";

const ProtectedRoute = () => {
  const {logged} = useSelector((state: RootState) => state.auth);
  
  if (!logged) {
    alert('You are not logged in!')
    return <Navigate to='/welcome' />
  }
  
  return (
    <div>
      Protected route works!
    </div>
  );
};

export default ProtectedRoute;
