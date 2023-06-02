import React from "react";
import { Card } from "react-bootstrap";
import AdvanceTable from "../subComponents/AdvanceTable";
import { redeemHeaders } from "../data/tableData";
function ValueAwardWinnerCard() {
  return (
    <div className="mt-1 mx-1">
      <Card style={{ minHeight: "20rem" }}>
        <Card.Header as={"h5"}>Value Award </Card.Header>
        <Card.Body>
          <AdvanceTable
            headers={redeemHeaders.headers}
            data={redeemHeaders.data}
          />
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default ValueAwardWinnerCard;
