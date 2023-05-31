import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { TiHeartFullOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
function LikeButton() {
  const [like, setLike] = useState("Like");
  return (
    <div>
      <Button
        variant="light"
        onClick={() => setLike(like === "Like" ? "Unlike" : "Like")}
      >
        {like}
        {like === "Like" ? <TiHeartFullOutline /> : <TiHeartOutline />}
      </Button>
      {like !== "Like" ? <span>You liked this</span> : null}
    </div>
  );
}

export default LikeButton;
