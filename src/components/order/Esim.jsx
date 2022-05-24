import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
const EsimOrder = () => {
  const [dataTable, setDataTable] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    { title: "Username", field: "username" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Web Link", field: 'website' }
  ]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => setDataTable(res))
  }, [])




  const options = {
    filterType: "dropdown",
    responsive: "scroll",
    rowsPerPage: [20],
    rowsPerPageOptions: [20, 50, 100],
    exportButton: true,
  };

  return (
    <div className="App wrapper">
      <MUIDataTable
        title={"uSIM"}
        data={dataTable}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default EsimOrder;
