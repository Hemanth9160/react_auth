import * as  React from 'react';
import { useState } from 'react';
import './App.css';
// import Item from"@mui/material/ListItem";
// import {Box} from "@mui/system";
// import Grid from "@mui/material/Grid"
// import { Typography } from '@mui/material';
import{  
  Button,
  Table,
  TableBody,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  // TextField,
} from '@mui/material';
// import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';

export default function App() {
  const [name, setName] = useState("");
  const [empid, setEmpid] = useState("");
  const [phone, setPhone] = useState("");
  const [dept, setDept] = useState(""); 
const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [conValue, setConValue] = useState([]);

  const handleSubmit = () => {
    console.log(name, empid, dept, city, email, phone);
    console.log();
    setName('');
    setEmpid('');
    setDept('');
    setCity('');
    setEmail('');
    setPhone('');
  };

  return (
    <>   
            <form  
            // onsubmit="event.preventDefault();onFormSubmit();" autocomplete="off"
            >
                <div>
                    <label>Name</label>
                    {/* <label class="validation-error hide" id="NameValidationError"></label> */}
                    <input type="text" name="Name" id="Name" onChange={(e)=> setName(e.target.value)}
                    value={name}/>
                    <span id="NameError"></span>
                </div>
                <div>
                    <label>Employee Id</label>
                    <input type="text" name="empid" id="empid"     onChange={(e) => setEmpid(e.target.value)}
        value={empid} /><br/>
                </div>
                <div>
                    <label>Department</label>
                    <input type="text" name="Dept" id="salary" required    onChange={(e) => setDept(e.target.value)}
        value={dept}/>
                </div>
               
                <div>
                    <label >City</label>
                    <select type="city" id="city" required  onChange={(e) => setCity(e.target.value)}
        value={city}>
                        <option value="Nellore">Nellore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Others">others</option>
                      </select>
                </div>
                <div>
                <label>Email</label>
                {/* <label class="validation-error hide" id="emailValidationError"></label> */}
                    <input type="text" name="email" id="email"   onChange={(e) => setEmail(e.target.value)}
        value={email}/>
                    <span id="emailError"></span>
                </div>
                <div>
                    <label>Phone number</label>
                    {/* <label class="validation-error hide" id="phnoValidationError"></label> */}
                    <input type="tel" name="phone" id="phone"   onChange={(e) => setPhone(e.target.value)}
        value={phone}/>
                    <span  id="phnoError"></span>
                </div>
              
               
                <Button
        onClick={handleSubmit}
        type="submit"
        p={5}
        width={5}
        variant="contained"
        color="primary"
      >  
        Register
      </Button>
            </form>
      
    {/* <form>
      <h1>Registration form</h1>
      <div
        variant="Standard"
        margin="normal"
        required
        fullWidth
        id="name"
        label="EnterName"
        name="name"
        autocomplete="name"
        autoFocus
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <div
        variant="Standard"
        margin="normal"
        required
        fullWidth
        id="empid"
label="Enter Employee_Id"
        name="empid"
        autocomplete="empid"
        autoFocus
        onChange={(e) => setEmpid(e.target.value)}
        value={empid}
      />
      <div
        variant="Standard"
        margin="normal"
        required
        fullWidth
        id="dept"
        label="Enter Department"
        name="dept"
        autocomplete="dept"
        autoFocus
        onChange={(e) => setDept(e.target.value)}
        value={dept}
      />
 <div
        variant="Standard"
        margin="normal"
      
        id="city"
        label="Enter WorkLocation(city)"
        name="city"
        autocomplete="city"
        autoFocus
        onChange={(e) => setCity(e.target.value)}
        value={city}
        required
        fullWidth
      />
      <div
        variant="Standard"
        margin="normal"
        required
        fullWidth
id="email"
        label="Enter EmailId"
        name="email"
        autocomplete="email"
        autoFocus
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div
        variant="Standard"
        margin="normal"
        required
        fullWidth
        id="phone"
        label="Enter Phone number"
        name="phone"
        autocomplete="phone"
        autoFocus
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
  
 <Button
        onClick={handleSubmit}
        type="submit"
        p={5}
        width={5}
        variant="contained"
        color="primary"
      >  
        Register
      </Button>
  </form> */}

       <form>    
        <TableContainer 
        component={Paper}>
          <Table aria-label="simple table">
            <TableHead border="1px">
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Employee_Id</TableCell>
                <TableCell align="center">Department</TableCell>
                <TableCell align="center">City </TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                conValue.map(row=> (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.empid}</TableCell>
                    <TableCell align="center">{row.dept}</TableCell>
                    <TableCell align="center">{row.city}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        </form>
 
        </>
  );
}