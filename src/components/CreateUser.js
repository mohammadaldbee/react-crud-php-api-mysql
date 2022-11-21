import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/api/user/save", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });
  };
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
 
  );
}


