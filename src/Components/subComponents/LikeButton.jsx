import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { TiHeartFullOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { toast } from "react-toastify";
function LikeButton() {
  const [like, setLike] = useState("Like");
  const handleButton = () => {
    setLike(like === "Like" ? "Unlike" : "Like");
    toast.success("You liked it!!");
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
