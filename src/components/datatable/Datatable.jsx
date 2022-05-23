import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Link from '@mui/material/Link';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover": {
    backgroundColor: "#b3e5fc",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const columns = [
  {
    id: "name",
    label: "채널",
  },
  {
    id: "code",
    label: "주문번호",
  },
  {
    id: "population",
    label: "구매일",
  },
  {
    id: "size",
    label: "상품명",
  },
  {
    id: "density",
    label: "ICCID",
  },
  {
    id: "densit",
    label: "여행자",
  },
  {
    id: "densi",
    label: "번호",
  },
  {
    id: "dens",
    label: "이메일",
  },
  {
    id: "den",
    label: "결제방법",
  },
  {
    id: "de",
    label: "상태",
  },
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody hover>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => {
                return (
					
                  <StyledTableRow
                    key={user.id}
                    onDoubleClick={() => console.log(user)}
                  >
				  <TableCell>{user.id}</TableCell>
				  <TableCell>{user.userId}</TableCell>
				  <TableCell>{user.completed}</TableCell>
				  <TableCell>{user.title}</TableCell>
				  <TableCell>{user.id}</TableCell>
				  <TableCell>{user.id}</TableCell>
				  <TableCell>ttt</TableCell>
				  <TableCell>{user.id}</TableCell>
				  <TableCell>{user.id}</TableCell>
				  <TableCell>{user.id}</TableCell>
                  </StyledTableRow>
				  
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

