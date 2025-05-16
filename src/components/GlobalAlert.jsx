import { useEffect } from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setAlertData } from "../redux/rootSlice";

export const GlobalAlert = () => {
  const { alertData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  useEffect(() => {
    if (alertData.type && alertData.message) {
      const timer = setTimeout(() => {
        dispatch(setAlertData({ type: "", message: "" }));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alertData, dispatch]);

  if (!alertData.type || !alertData.message) return null;

  return (
    <Alert
      severity={alertData.type}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-60"
    >
      {alertData.message}
    </Alert>
  );
};
