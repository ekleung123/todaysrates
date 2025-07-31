import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useUpdateData = () => {
  const store = useContext(AuthContext);

  const updateData = async (val) => {
    try {
      let ref = doc(db, "currencies", "KbToJFzJlaiNgWYs554j");
      let data = {rates: val};
      await setDoc(ref, data);
      store.updateDataContext(val);
    } catch(e) {
      alert("Unable to reach database.  Please check your internet connection.");
    };
  };

  return {updateData};
};