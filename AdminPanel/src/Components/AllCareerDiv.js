import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SidePanel from "./SidePanel";
import axios from "axios";
import CareerItemDiv from "./CareerItemDiv";

export default function AllCareerDiv() {
  const [career, setCareer] = useState([]);
  const [apidata, setApidata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("http://localhost:8081/allcareers");
      setCareer(req.data);
      setApidata(req.data);
    };
    fetchData();
  }, []);
  const [search, setSearch] = useState("");
  
  const handleChange=(e)=>{
    if(e.target.value === ""){
      setCareer(apidata);
    }
    else{
      const filteredData = apidata.filter(item =>
        item.jobtitle.toLowerCase().includes(search.toLowerCase()) || item.city.toLowerCase().includes(search.toLowerCase()) || item.jobtype.toLowerCase().includes(search.toLowerCase())
      );
        setCareer(filteredData);
    }
    setSearch(e.target.value);
  }
  let currentDate = new Date().toJSON().slice(0, 10);
  let publishDate= new Date(career.date);
  console.log(publishDate)
  

  const filterOptions = [
    { value: "", label: "All" },
    { value: "1", label: "Today" },
    { value: "2", label: "By this month" },
    { value: "3", label: "By this year"}
  ];

  const [selectedFilter, setSelectedFilter] = useState("");

  const DropdownfilteredData = career.filter((item) =>
    selectedFilter === "" ? true : item.date === selectedFilter
  );
  
  return (
    <>
      <section>
        <div className="row d-flex justify-content-evenly mt-5 pt-4">
          <div className="col-md-2">
            <SidePanel />
          </div>
          <div className="col-md-9 pt-4">
           <div className="row d-flex justify-content-between">
            <div className="col-3">
            <h2><b>All Careers</b></h2>
            </div>
            <div className="col-5 d-flex">
            <input type="search" className="form-control me-3" value={search} onChange={handleChange} placeholder="Search your career here" style={{width:"300px"}}/>
            <select
              value={selectedFilter}
              onChange={(event) => setSelectedFilter(event.target.value)}
              class="form-select"
              style={{width:"150px"}}
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            </div>
           </div>
            <div className="row">
              { career.length > 0 ? (
                  career.map((item, index) => {
                    return <CareerItemDiv key={index} value={item} />;
                  })
              ) : (
                <div className="container mt-5 pt-5">
                  <div className="row">
                    <div className="col-md-5 mx-auto">
                    <h2>No Data Found !</h2>
                    </div>
                  </div>
                </div>
              ) }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
