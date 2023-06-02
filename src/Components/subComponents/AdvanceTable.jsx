import React from "react";
import { Table } from "react-bootstrap";
function AdvanceTable(props) {
  const { headers, data } = props;
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
      <br />
    </div>
  );
}

export default AdvanceTable;
