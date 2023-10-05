"use client";

import { useState } from "react";
import DataGrid, { textEditor } from "react-data-grid";

export default function RDG() {
  const columns = [
    {
      key: "id",
      name: "ID",
    },
    {
      key: "name",
      name: "Name",
      editable: true,
      renderEditCell: textEditor,
    },
  ];

  const [rows, setRows] = useState([
    { id: 1, name: "Foo" },
    { id: 2, name: "Bar" },
  ]);

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      onRowsChange={(rows: any) => setRows(rows)}
    />
  );
}
