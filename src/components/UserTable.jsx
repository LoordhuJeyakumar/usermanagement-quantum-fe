import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Settings, Delete } from "@mui/icons-material";
import { data as initialData } from "../data/staticData";

const statusColors = {
  Active: "green",
  Suspended: "red",
  Inactive: "orange",
};

// Attach a random image to each row once during initialization
const dataWithImages = initialData.map((row) => ({
  ...row,
  image: `${row.image}?img=${Math.floor(Math.random() * 70) + 1}`,
}));

const UserTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Data to display on the current page
  const currentPageData = dataWithImages.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer className="border mt-8 shadow-md">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPageData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img
                    src={row.image}
                    alt="profile"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                    }}
                  />
                  {row.name}
                </div>
              </TableCell>
              <TableCell>{row.dateCreated}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <span style={{ color: statusColors[row.status] }}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell>
                <Tooltip title="Settings">
                  <IconButton sx={{ color: "blue" }}>
                    <Settings />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton sx={{ color: "red" }}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={dataWithImages.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default UserTable;
