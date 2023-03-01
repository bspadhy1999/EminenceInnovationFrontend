import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import SidePanel from "./SidePanel";
import Navbar from './Navbar';

export default function EditUser() {
    const paramData=useParams();
    const [apidata, setApidata] = useState({});
    useEffect(() => {
        const fetchData=async ()=>{
            const req=await axios.get(`http://localhost:8081/${paramData.id}`).then((res)=>{
              setApidata(res.data);
              console.log(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
        fetchData();
    }, []);
    const [career, setCareer] = useState({
        id:`${apidata.id}`,
        country:`${apidata.country}`,
        city:`${apidata.city}`,
        jobtitle:`${apidata.jobtitle}`,
        jobtype:`${apidata.jobtype}`
    })
    const handleOnchange=(e)=>{
        const {name,value}=e.target;
        setCareer(prevState =>({
          ...prevState,
          [name]:value
        }));
      };
      const handleUpdate=()=>{
        const fetchData=async ()=>{
            const req=await axios.put("http://localhost:8081/updateCareer", career).then((res)=>{
             toast.success("Career is updated sucessfully");
            }).catch((err)=>{
                console.log(err);
            })
        }
        fetchData();
      }
  return (
    <>
    <Navbar/>
    <Toaster  position='top-center' reverseOrder="false"/>
    <section>
        <div className="row d-flex justify-content-evenly mt-5 pt-4">
            <div className="col-md-2">
            <SidePanel />
            </div>
            <div className="col-md-9">
            <div className="row d-flex justify-content-center">
            <div className='col-md-6 mx-auto border border-2 rounded-2 p-5 mt-4 shadow'>
                <div className='text-center mb-4'>
                    <h4 style={{color:"#1976d2"}}><b>Update a Career</b></h4>
                </div>
                <small></small>
                <form>
               <div className="mb-3">
               <label className="form-label">Country</label>
                <input type="text" name='country' value={career.country} onChange={handleOnchange} className="form-control" id="exampleFormControlInput1" placeholder="Enter here" required/>
                </div>
                <div className="mb-3">
                <label className="form-label">City</label>
                <select name='city' onChange={handleOnchange} className="form-control mb-3" required>
                <option selected disabled>--- Select City --</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Delhi">Delhi</option>
                </select>
                </div>
                <div className="mb-3">
                <label className="form-label">Job Title</label>
                <select name='jobtitle' onChange={handleOnchange} className="form-control mb-3" required>
                <option selected disabled>--- Select Job Title --</option>
                <option value="Jr. Java Developer">Jr. Java Developer</option>
                <option value="Sr. Java Developer">Sr. Java Developer</option>
                <option value="Jr. Nodejs Developer">Jr. Nodejs Developer</option>
                <option value="Sr. Nodejs Developer">Sr. Nodejs Developer</option>
                <option value="Jr. Php Developer">Jr. Php Developer</option>
                <option value="Sr. Php Developer">Sr. Php Developer</option>
                </select>
                </div>
                <div className="mb-5">
                <label className="form-label">Job Type</label>
                <select name='jobtype' onChange={handleOnchange} className="form-control mb-3" required>
                <option selected disabled>--- Select Job Type --</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Associate Software Engineer">Associate Software Engineer</option>
                <option value="Support Engineer">Support Engineer</option>
                </select>
                </div>
                <div className="mb-3">
                    <button type='submit' onClick={handleUpdate} className='p-2 rounded' style={{border:"none",backgroundColor:"#1976d2",color:"white"}}>Update Now 👉</button>
                </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    </section>
</>
  )
}
