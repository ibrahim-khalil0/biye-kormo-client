import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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


export default function ManageUserTable({users, premium, setPremium, admin, setAdmin}) {


  const handlePremium = (email) => {

    axios.put(`https://biye-kormo-server.vercel.app/approvedPremium/${email}`)
    .then(res => {
      console.log(res.data)
      setPremium(admin + 1)
    })
  }


  const handleAdmin = (email) => {

    axios.put(`https://biye-kormo-server.vercel.app/makeAdmin/${email}`)
    .then(res => {
      console.log(res.data)
      setAdmin(admin + 1)
    })
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Name</StyledTableCell>
            <StyledTableCell align="center">User Email</StyledTableCell>
            <StyledTableCell align="center">Make Admin</StyledTableCell>
            <StyledTableCell align="right">Make Premium</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <StyledTableRow key={user._id}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.contactEmail}</StyledTableCell>
              <StyledTableCell align="center">{user.isAdmin ? <span className='text-lg'>Admin</span> : <button onClick={() => handleAdmin(user.contactEmail)} className='bg-[#9D6824] rounded-md px-2 py-1 text-white'>Make Admin</button>} </StyledTableCell>
              <StyledTableCell align="right">{user.isPremium == 'accepted' ? <span className='text-lg'>Premium</span> : <button onClick={() => handlePremium(user.contactEmail)} className='bg-[#9D6824] rounded-md px-2 py-1 text-white'>Make Premium</button>}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
