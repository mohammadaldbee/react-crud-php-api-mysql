

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/api/user/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
      < div className="cont ">
   
      <div className="card">
  
        <div className="card-header">Add a User
          {/* <a href="" className="btn btn-secondary btn-sm float-end"> Go Back</a> */}
        </div>
  
      <div className="card-body ">
        <form className="col-8" onSubmit={handleSubmit}>
          <div className="form-group">
          <div class="row mb-3">
            <label htmlFor="exampleInputEmail1">Name:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="name"
              onChange={handleChange}
              value={inputs.name}
            />
          </div>
  
  
         
          <div class="row mb-3">
            <label htmlFor="exampleInputPassword1">Email address:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={handleChange}
              value={inputs.email}
            />
          </div>
  
           
          <div class="row mb-3">
            <label htmlFor="exampleInputPassword1">Mobile:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="mobile"
              onChange={handleChange}
              value={inputs.mobile}
            />
          </div>
          <div class="row mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </div>
          </div>
        </form>
      </div>
  
  
  
      
      </div>
  
      </div>
   
    )
}

