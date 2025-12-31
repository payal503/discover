import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getUserList, Modify, RemoveUser } from "../service/api";

function UserList() {
    const [userData, setUserData] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [form, setForm] = useState({ Name: "", Email: "", Password: "", Image: null });
    const userList = async () => {
        try {
            let result = await getUserList();
            if (result)
                setUserData(result)

        } catch (err) {
            console.log("failed to load User data", err.message);
        }
    }

    useEffect(() => {
        userList();
    }, [])

    const removeUser = async (userId) => {
        try {
            let result = await RemoveUser(userId);

            if (result?.status) {
                // Update state first
                setUserData((prevData) => prevData.filter((user) => user._id !== userId));
                // Then show alert
                alert("User deleted successfully!");
                console.log("User deleted successfully!");
            } else {
                alert("Delete failed: " + result?.msg);
                console.log("Delete failed on server:", result?.msg);
            }
        } catch (err) {
            alert("Something went wrong");
            console.log("Something went wrong", err);
        }
    };


    const handleEditClick = (user) => {
        setEditUser(user);
        setForm({ Name: user.Name, Email: user.Email, Password: "", Image: null });
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleUpdate = async () => {
        try {
            const payload = { ...form, _id: editUser._id };
            let result = await Modify(payload);

            if (result?.status) {
                alert("User updated successfully!");
                setEditUser(null);
                userList(); // Refresh the list
            } else {
                alert("Update failed!");
            }
        } catch (err) {
            console.log("Update failed", err);
        }
    };

    return (
        <>
            <Layout />
            <div className="mt-5">
                <h1>UserList</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Profile</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData && userData.map((item, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <th><img src={item.Image} alt="" /></th>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td><button className="btn btn-outline-primary" onClick={() => handleEditClick(item)}>Edit</button></td>
                                <td><button className="btn btn-outline-danger" onClick={() => removeUser(item._id)}>Trash</button></td>

                            </tr>
                        )

                        )}

                    </tbody>
                </table>
                {/* Edit Modal */}
                {editUser && (
                    <div className="card p-3 mt-3">
                        <h4>Edit User</h4>
                        <input type="text" name="Name" value={form.Name} onChange={handleChange} placeholder="Name" className="form-control mb-2" />
                        <input type="email" name="Email" value={form.Email} onChange={handleChange} placeholder="Email" className="form-control mb-2" />
                        <input type="password" name="Password" value={form.Password} onChange={handleChange} placeholder="New Password" className="form-control mb-2" />
                        <input type="file" name="Image" onChange={handleChange} className="form-control mb-2" />
                        <button className="btn btn-success me-2" onClick={handleUpdate}>Update</button>
                        <button className="btn btn-secondary" onClick={() => setEditUser(null)}>Cancel</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default UserList;