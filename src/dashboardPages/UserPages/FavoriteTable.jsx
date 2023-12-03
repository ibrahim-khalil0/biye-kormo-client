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




export default function FavoriteTable({favorites, setFavorites}) {

  const handleDelete = (id) => {
    axios.delete(`https://biye-kormo-server.vercel.app/deleteFavorite/${id}`)
    .then(res => {
      console.log(res)
      const remaining = favorites.filter( biodata => biodata._id != id)
      setFavorites(remaining)
    })
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Biodata Id</StyledTableCell>
            <StyledTableCell align="center">Permanent Address</StyledTableCell>
            <StyledTableCell align="center">Occupation</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favorites.map(favorite => (
            <StyledTableRow key={favorite._id}>
              <StyledTableCell component="th" scope="row">
                {favorite.name}
              </StyledTableCell>
              <StyledTableCell align="center">{favorite.biodataId}</StyledTableCell>
              <StyledTableCell align="center">{favorite.permanentDivision}</StyledTableCell>
              <StyledTableCell align="center">{favorite.occupation}</StyledTableCell>
              <StyledTableCell align="right"><button onClick={() => handleDelete(favorite._id)} className='text-red-500'><AiFillDelete></AiFillDelete></button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
