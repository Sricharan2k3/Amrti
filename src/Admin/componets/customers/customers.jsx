// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { Avatar, CardHeader, Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const rows = [
  {
    age: 27,
    status: "current",
    date: "09/27/2018",
    name: "Harsh",
    email: "harsh@kisanlink.com",
    image: "",
  },
  {
    age: 27,
    status: "current",
    date: "09/27/2018",
    name: "Harsh",
    email: "harsh@kisanlink.com",
    image: "",
  },
  {
    age: 27,
    status: "current",
    date: "09/27/2018",
    name: "Harsh",
    email: "harsh@kisanlink.com",
    image: "",
  },
  {
    age: 27,
    status: "current",
    date: "09/27/2018",
    name: "Harsh",
    email: "harsh@kisanlink.com",
    image: "",
  },
  {
    age: 27,
    status: "current",
    date: "09/27/2018",
    name: "Harsh",
    email: "harsh@kisanlink.com",
    image: "",
  },
  {
    age: 27,
    status: "current",
    date: "09/27/2018",
    name: "Harsh",
    email: "harsh@kisanlink.com",
    image: "",
  },
  {
    age: 27,
    status: "current",
    date: "09/27/2018",
    name: "Harsh",
    email: "harsh@kisanlink.com",
    image: "",
  },
];



const Customers = () => {
  const navigate=useNavigate();
  function handlePaginationChange(event, value) {
    console.log("Current page:", value);
  }
  return (
    <Box>
         <Card>
      <CardHeader
          title='All Customers'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          
        />
      <TableContainer>
        <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0,10).map((item,index) => (
              <TableRow hover key={item.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{index+1}</TableCell>
                <TableCell> <Avatar/>  </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                
                
               
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  
    </Box>
   
  )
}

export default Customers;
