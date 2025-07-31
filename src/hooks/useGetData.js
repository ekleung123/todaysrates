import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { dbError } from "../constants/text";

export const useGetData = () => {
  const store = useContext(AuthContext);
  const [currencyData, setCurrencyData] = useState();

  useEffect(() => {
    let ref = collection(db, "currencies"); 

    getDocs(ref)
     .then(snapshot => {
        let results = [];
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()});
        });
        let arr = results[0].rates;
        setCurrencyData(arr); 

        // (Below) This structured cloning prevents store Context from binding 
        // to the Form array.
        
        let arr2 = structuredClone(arr);

        // (Below) The database is protected by Firebase security rules.  But it's 
        // still possible for buy and sell rates to be maliciously changed from 
        // numbers to letters.  If that happens, the incorrectly formatted buy or sell 
        // rate would be assigned a random number to prevent website from breaking.
        
        arr2.forEach((val, count) => {
          let buy = Number(arr2[count].buy);
          let sell = Number(arr2[count].sell);
          if (isNaN(buy) || isNaN(sell)) { 
            arr2[count].buy = "1.944";
            arr2[count].sell = "2.144";
          };
        });
        
        setCurrencyData(arr2);
        store.updateDataContext(arr2);
      })
      .catch(err => {
        alert(dbError);
      });
  }, []);

  return {currencyData};
};