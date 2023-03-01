import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function SidePanel() {
  const navigate=useNavigate();
  return (
    <>
        <div className='border-2 border-end border-dark pe-4 pt-3' style={{height:"90vh"}}>
            <div className='sidelink border border-2 rounded p-2 text-center mb-3' onClick={()=>{navigate("/home")}}>Add a Career</div>
            <div className='sidelink border border-2 rounded p-2 text-center mb-3' onClick={()=>{navigate("/allcareers")}}>All Careers</div>
        </div>
    </>
  )
}



