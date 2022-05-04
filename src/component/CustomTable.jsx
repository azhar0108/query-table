import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomTable = (props) => {
  const { rows, apiData, displaydata } = props;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Notification Id</StyledTableCell>
              <StyledTableCell align="right">senderUid</StyledTableCell>
              <StyledTableCell align="right">receiverUid</StyledTableCell>
              <StyledTableCell align="right">oneLiner</StyledTableCell>
              <StyledTableCell align="right">Message</StyledTableCell>
              <StyledTableCell align="right">notificationType</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.sno}>
                <StyledTableCell component="th" scope="row">
                  {row.sno}
                </StyledTableCell>
                <StyledTableCell align="right">{row.sender}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.contact}</StyledTableCell>
                <StyledTableCell align="right">{row.message}</StyledTableCell>
                <StyledTableCell align="right">{row.action}</StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  <Button onClick={() => displaydata(index)}>
                    <EditIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody> */}
          <TableBody>
            {apiData.map((row, index) => (
              <StyledTableRow key={row.notificationId}>
                <StyledTableCell component="th" scope="row">
                  {row.notificationId}
                </StyledTableCell>
                <StyledTableCell align="right">{row.senderUid}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.receiverUid}
                </StyledTableCell>
                <StyledTableCell align="right">{row.oneLiner}</StyledTableCell>
                <StyledTableCell align="right">{row.message}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.notificationType}
                </StyledTableCell>
                <StyledTableCell align="right">{row.message}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={() => displaydata(index)}>
                    {" "}
                    <EditIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomTable;
