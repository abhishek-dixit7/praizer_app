import React from "react";
import { Table } from "react-bootstrap";
function AdvanceTable(props) {
  const { headers, data } = props;
  console.log("Data", headers, data);
  return (
    <div>
      <Table responsive="lg">
        <thead>
          <tr>
            {headers.map((item) => (
              <th key={item.key}>{item.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdvanceTable;
