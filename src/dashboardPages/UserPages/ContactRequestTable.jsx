import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function CustomizedTables({biodata, setContacts}) {

  const handleDelete = (id) => {
    axios.delete(`https://biye-kormo-server.vercel.app/deleteContactRequest/${id}`)
    .then(res => {
      console.log(res)
      const remaining = biodata.filter( biodata => biodata._id != id)
      setContacts(remaining)
    })
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Biodata Id</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Mobile N.</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {biodata.map(data => (
            <StyledTableRow key={data._id}>
              <StyledTableCell component="th" scope="row">
                {data.name}
              </StyledTableCell>
              <StyledTableCell align="center">{data.biodataId}</StyledTableCell>
              <StyledTableCell align="center">{data.status}</StyledTableCell>
              <StyledTableCell align="center">{data.status == 'approved' ? data.mobileNumber : 'Request Not Accepted Yet'}</StyledTableCell>
              <StyledTableCell align="center">{data.status == 'approved' ? data.contactEmail : 'Request Not Accepted Yet'}</StyledTableCell>
              <StyledTableCell align="right"><button onClick={() => handleDelete(data._id)} className='text-red-500'><AiFillDelete></AiFillDelete></button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
