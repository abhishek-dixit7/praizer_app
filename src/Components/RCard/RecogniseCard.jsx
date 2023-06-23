import React, { useState, useEffect } from "react";
//import { recogniseValues } from "../data/constants";

import { GetUserDetailsByUid } from "../../_services/UserService";
import { RecogniseSkeleton } from "./RecogniseSkeleton";
function RecogniseCard({ uid }) {
  const [title, setTitle] = useState(false);
  const [details, setDetails] = useState();
  const showTitle = () => {
    setTitle(!title);
  };
  const FetchUserData = async () => {
    try {
      var data = await GetUserDetailsByUid(uid);
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <RecogniseSkeleton
      details={details}
      showTitle={showTitle}
      title={title}
      likeDisabled={false}
    />
  );
}

export default RecogniseCard;
