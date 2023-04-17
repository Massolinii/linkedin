import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/action/UserAction";

const Test = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData);
  }, []);
  return <p>Sono una prova</p>;
};

export default Test;
