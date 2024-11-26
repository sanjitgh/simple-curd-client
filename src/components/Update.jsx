import { useLoaderData } from "react-router-dom";

const Update = () => {
  const lodededData = useLoaderData();

  const handelUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch(`http://localhost:5000/users/${lodededData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          alert("User update successfully");
        }
      });
  };
  return (
    <div>
      <h3>Updated information of {lodededData.name}</h3>
      <form onSubmit={handelUpdate}>
        <input type="text" name="name" defaultValue={lodededData?.name} />
        <br />
        <input type="email" name="email" defaultValue={lodededData?.email} />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
