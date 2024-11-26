import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const lodededUsers = useLoaderData();
  const [users, setUsers] = useState(lodededUsers)

  const handelDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount > 0){
          alert('Deleted successfully.')
          const remaining = users.filter(user => user._id !== _id);
          setUsers(remaining)
        }
        else{
          alert('Delete faild.')
        }
      });
  };
  return (
    <div>
      <h3>Total data ({users.length})</h3>
      <div>
        {users.map((user) => (
          <div
            key={user._id}
            style={{ border: "1px solid blue", marginBottom: "10px" }}
          >
            <p>{user.name}</p>
            <p>
              <b>{user.email}</b>
            </p>
            <Link to={`/update/${user._id}`}>Update</Link>
            <button onClick={() => handelDelete(user._id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
