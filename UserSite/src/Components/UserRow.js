import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export default function UserRow(props) {
    const navigate=useNavigate();
    const handleEdit=()=>{
        navigate(`/updateuser?query=${props.value.username}`);
    }
    const fetchData = async () => {
      const req = await axios.delete(`http://localhost:8080/user/${props.value.id}`);
    };
    const handleDelete=()=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this user details!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              fetchData();
              swal("User Details has been deleted Sucessfully!", {
                icon: "success",
              });
              setTimeout(() => {
                document.location.reload();
              }, 2000);
            } else {
              swal("User details is safe!");
            }
          });
    }
  return (
    <>
      <tr>
        <th scope="row">{props.value.id}</th>
        <td>{props.value.firstName} {props.value.lastName}</td>
        <td>{props.value.email}</td>
        <td>{props.value.phone}</td>
        <td>{props.value.username}</td>
        <td>
          <span className="m-2" onClick={handleEdit}><EditIcon style={{ color: "green", cursor: "pointer" }}/></span>
          <span onClick={handleDelete}><DeleteIcon style={{ color: "red", cursor: "pointer" }} /></span>
        </td>
      </tr>
    </>
  );
}
