import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import EditIcon from '@mui/icons-material/Edit';
import swal from 'sweetalert';

export default function CareerItemDiv(props) {
  const navigate=useNavigate();
  const handleDelete=()=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this career data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your Career Data has been deleted!", {
          icon: "success",
        });
        const fetchData=async ()=>{
          const req=await axios.delete(`http://localhost:8081/${props.value.id}`).then((res)=>{
             setTimeout(() => {
              document.location.reload();
             }, 2000);
          }).catch((err)=>{
              console.log(err);
          })
      }
      fetchData();
      } else {
        swal("Your Career data is safe!");
      }
    });
  }
  const handleEdit=()=>{
    navigate(`/edituser/${props.value.id}`);
  }
  return (
   <>
   <Toaster  position='top-center' reverseOrder="false"/>
    <div className="col-md-3 m-4 shadow p-4 careerborder">
        <small><b>{props.value.country} | {props.value.city}</b></small> <br />
        <Link style={{color:"black", fontSize:"30px", fontWeight:"600"}}>{props.value.jobtitle}</Link>
        <p><b>{props.value.jobtype}</b></p>
        <small><b>{props.value.date}</b></small>
        <div className='float-end mt-4'>
        <span className='me-2'><DeleteIcon onClick={handleDelete} style={{color:"red", cursor:"pointer"}}/></span>
        <span><EditIcon onClick={handleEdit} style={{color:"green", cursor:"pointer"}}/></span>
        </div>
    </div>
   </>
  )
}
