import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProfile,
  getUserProfile,
  setThisUserID,
} from "../redux/action/UserAction";
import { Link, useParams } from "react-router-dom/dist";

const Test = () => {
  const dispatch = useDispatch();
  const { userID } = useParams();

  //const thisID = useSelector((state) => state.user.thisProfile.userID);
  const checkUserID = () => {
    if (userID) {
      dispatch(setThisUserID(userID));
    } else {
      dispatch(setThisUserID(null));
    }
    // dispatch(getThisProfile);
    console.log(userID);
  };
  useEffect(() => {
    checkUserID();
    dispatch(getAllProfile);
    dispatch(getUserProfile);
  }, []);
  return (
    <>
      <p>Sono una prova</p>;
      {userID ? (
        <Link to="/profile" onClick={() => dispatch(setThisUserID(null))}>
          mioProfilo
        </Link>
      ) : (
        <></>
      )}
      {userID ? (
        <></>
      ) : (
        <Link to="/profile/5fc4ae95b708c200175de88d">altro utente</Link>
      )}
    </>
  );
};

export default Test;
