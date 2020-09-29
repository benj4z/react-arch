import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getUser } from "../../../../store/User/dispatchers";
import { RootState } from "../../../../store/rootReducer";
import Loading from "../../../../components/Loading/Loading";

const UserPage = () => {
  const dispatch = useDispatch()
  const { userId } = useParams();
  const { user, loading, error } = useSelector((state: RootState) => state.user);
  
  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId])
  
  if (loading) {
    return <Loading />
  }
  
  return (
    <div>
      <h2>User Info:</h2>
      {user && (
        <div className="infoContainer">
         <span>{user.firstName}</span>
         <span>{user.lastName}</span>
         <span>{user.email}</span>
        </div>
      )}
      {error && (
        <div>Some error occurs: {error}</div>
      )}
    </div>
  );
};

export default UserPage;
