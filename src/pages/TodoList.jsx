import { useRef, useState } from "react";
import Layout from "../components/Layout";
import { data } from "../constant";

function TodoList() {
    const [dataSet, setData] = useState(data);
    const [open, setOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    let Id = useRef(null);
    let Name = useRef("");
    let Email = useRef("");
    let Address = useRef("");
    let Contact = useRef(null);


    const handleDelete = (id) => {
        let index = dataSet.findIndex(data => data.Id == id);
        dataSet.splice(index, 1);
        setData([...dataSet]);
    }

    const openModal = () => {
        setEditIndex(null);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);

    };

    const AddNew = (e) => {
        e.preventDefault();

        let id = Id.current.value;
        let name = Name.current.value;
        let email = Email.current.value;
        let address = Address.current.value;
        let contact = Contact.current.value;
        let newData = { Id: id, Name: name, Email: email, Address: address, Contact: contact }

        if (editIndex !== null) {
            const updatedData = [...dataSet];
            updatedData[editIndex] = newData;
            setData(updatedData);
        } else {
            setData([...dataSet, newData]);
        }


        closeModal();

    }

    const handleEdit = (id) => {
        const index = dataSet.findIndex(data => data.Id == id);
        const item = dataSet[index];
        setEditIndex(index);
        setOpen(true);

        setTimeout(() => {
            Id.current.value = item.Id;
            Name.current.value = item.Name;
            Email.current.value = item.Email;
            Address.current.value = item.Address;
            Contact.current.value = item.Contact;
        }, 0)

    }

    return (
        <div>
            <Layout />
            <div className="mt-5">
                <h1 style={{ textAlign: 'center' }}>ToDo List</h1>
                <div className="mt-5">
                    <table className="table">
                        <thead style={{ textAlign: 'center' }} className="bg-secondary p-5">
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Contact No.</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>

                            {dataSet.map((item, index) => (
                                <tr>
                                    <td>{item.Id}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Address}</td>
                                    <td>{item.Contact}</td>
                                    <td><button className="btn btn-outline-primary" onClick={() => handleEdit(item.Id)}>Edit</button></td>
                                    <td><button className="btn btn-outline-danger" onClick={() => handleDelete(item.Id)}>Delete</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <button className="form-control btn btn-outline-info" onClick={openModal}>Add New Entry</button>
                </div>
            </div>
            {/* Modal Section */}
            {open && (
                <>
                    <div
                        className="modal-backdrop fade show"
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.5)",
                            zIndex: 1040,
                        }}
                        onClick={closeModal}
                    ></div>

                    <div
                        className="modal show d-block"
                        tabIndex="-1"
                        role="dialog"
                        style={{ zIndex: 1050 }}
                    >
                        <div className="modal-dialog d-flex justify-content-center">
                            <div className="modal-content w-75">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add New</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={closeModal}
                                    ></button>
                                </div>
                                <div className="modal-body p-4">
                                    <form>
                                        <div className="form-outline mb-2">
                                            <input
                                                type="Id"
                                                id="Id"
                                                className="form-control"
                                                placeholder="Id"
                                                ref={Id}
                                            />
                                        </div>
                                        <div className="form-outline mb-2">
                                            <input ref={Name} type="Name" id="Name" className="form-control" placeholder="Name" />

                                        </div>

                                        <div className="form-outline mb-2">
                                            <input
                                                type="Email"
                                                id="Email"
                                                className="form-control"
                                                placeholder="Email"
                                                ref={Email}
                                            />
                                        </div>

                                        <div className="form-outline mb-2">
                                            <input
                                                type="Address"
                                                id="Address"
                                                className="form-control"
                                                placeholder="Address"
                                                ref={Address}
                                            />
                                        </div>
                                        <div className="form-outline mb-2">
                                            <input
                                                type="Contact"
                                                id="Contact"
                                                className="form-control"
                                                placeholder="Contact"
                                                ref={Contact}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block"
                                            onClick={AddNew}
                                        >
                                            {editIndex !== null ? "Update" : "Add"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default TodoList;