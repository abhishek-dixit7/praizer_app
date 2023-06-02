import React from "react";
import { Card } from "react-bootstrap";
import AdvanceTable from "../subComponents/AdvanceTable";
import { redeemAwardWinnerData } from "../data/tableData";
function ValueAwardWinnerCard() {
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Header as={"h5"}>Value Award Winner</Card.Header>
        <Card.Body>
          <AdvanceTable
            headers={redeemAwardWinnerData.headers}
            data={redeemAwardWinnerData.data}
          />
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default ValueAwardWinnerCard;
