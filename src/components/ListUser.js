import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response){
          alert("are yoe sure to delete this record?")
            getUsers();
        });
    }
    return (
        <div>
            <h1>List Users</h1>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link class="btn btn-warning" to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}