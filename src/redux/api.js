import axios from "axios";


export const createUserapi = async (user) =>
await axios.post('http://localhost:8080/student/add',user);


export const loaduserapi = async () =>
await axios.get('http://localhost:8080/student/getAll');


export const deleteuserapi = async (userid) =>
await axios.delete(`http://localhost:8080/student/${userid}`);


export const updateuserapi = async (userid,userInfo) =>
await axios.put(`http://localhost:8080/student/update`,userInfo);