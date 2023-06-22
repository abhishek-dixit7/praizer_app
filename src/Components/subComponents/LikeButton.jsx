import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { TiHeartFullOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { Context } from "../../Context/Context";

function LikeButton() {
  const [like, setLike] = useState("Like");
  const { showToast } = useContext(Context);

  const handleButton = () => {
    setLike(like === "Like" ? "Unlike" : "Like");
    if (like === "Like") showToast("Post Liked!!", "success");
    else showToast("Post Unliked!!", "error");
  };
  return (
    <div>
      <Button variant="light" onClick={handleButton}>
        {like}
        {like === "Like" ? <TiHeartFullOutline /> : <TiHeartOutline />}
      </Button>
      {like !== "Like" ? <span>You liked this</span> : null}
    </div>
  );
}

export default LikeButton;
