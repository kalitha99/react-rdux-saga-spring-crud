import { Container, makeStyles, Paper, TextField } from '@material-ui/core'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser, deleteUser, loadUserStart, updateUser } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

function Student() {
    const classes = useStyles();
    const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    
    const [load, setload] = useState(true);
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.data);

    const handleClick = (e) => {
        e.preventDefault();
        const form = { name, address };
        dispatch(createUser(form))
        setload(!load);
        setName("");
        setAddress("");
      };

      useEffect(() => {
        dispatch(loadUserStart());
      },[load]);
      
      const handelDelete = (id) => {
        dispatch(deleteUser(id));
        setload(!load);
      };


  return (
     <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>Add Student</h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Student Adress"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>
      {/*
      {name}
      {address}
  */}
      <h1>Students</h1>

      <Paper elevation={3} style={paperStyle}>
        {users.map((student, index) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={student.id}
          >
            
            
              Id:{student.id}
              <br />
              Name:{student.name}
              <br />
              Address:{student.address}
              <br />
           
            <Button onClick={() => handelDelete(student.id)}>DELETE</Button>
          </Paper>
        ))}
      </Paper>
    </Container>
  )
}

export default Student