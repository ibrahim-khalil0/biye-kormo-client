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
import { FaUserCircle, FaCrown } from "react-icons/fa";
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



export default function contactRequestTable({users, setUsers}) {

  const handleApproved = (email) => {

    axios.put(`https://biye-kormo-server.vercel.app/approvedContactRequest/${email}`)
    .then(res => {
      console.log(res.data)
      const remaining = users.filter(user => user._id != email)
      setUsers(remaining)
    })
  }

  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Biodata Id</StyledTableCell>
            <StyledTableCell align="center">Request For (Id)</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="right">Approved contact request</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <StyledTableRow key={user._id}>
              <StyledTableCell component="th" scope="row">
                {user.requesterName}
              </StyledTableCell>
              <StyledTableCell align="center">{user.requesterBiodataId}</StyledTableCell>
              <StyledTableCell align="center">{user.biodataId}</StyledTableCell>
              <StyledTableCell align="center">{user.requesterEmail}</StyledTableCell>
              <StyledTableCell align="right"><button onClick={() => handleApproved(user._id)} className='bg-[#9D6824] rounded-md px-2 py-1 text-white'>Approve</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
