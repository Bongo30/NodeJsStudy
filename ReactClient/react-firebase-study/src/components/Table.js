import React ,{useState,userEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




export default function BasicTable(props) {
  const classes = useStyles();
  const [Users] = useState([]);
  var key = 0 ;
  var test =[];
  
  Users.push(props.user);
  // Users.pop();
  console.log(props.user);
  console.log('user length : '+Users.length);

  // userEffect(()=>{
  //   Users.pop()
  // },[])
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">email</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {Users.map((row) => (
            <TableRow key={key=key+1}>
              <TableCell component="th" scope="row">
                {row.ID}
                {test.push(row.Name)}
                {console.log(test)}
              </TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
