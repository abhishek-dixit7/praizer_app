import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import AdvanceTable from "../subComponents/AdvanceTable";
// import { redeemAwardWinnerData } from "../data/tableData";
import { userTableHeaders } from "../data/usersTable";
import { useState } from "react";
import { fetchUsersData } from "../../_services/UserService";
function ValueAwardWinnerCard() {
  const [tabelData, setTableData] = useState([]);
  useEffect(() => {
    fetchUsersData().then((response) => setTableData(response));
    console.log("Data For table", tabelData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Header as={"h5"}>Value Award Winner</Card.Header>
        <Card.Body>
          {/* <AdvanceTable
            headers={redeemAwardWinnerData.headers}
            data={redeemAwardWinnerData.data}
          /> */}
          <AdvanceTable headers={userTableHeaders} data={tabelData} />
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default ValueAwardWinnerCard;
