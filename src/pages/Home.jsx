import { useState } from "react";
import Layout from "../components/Layout";
import { SignUp } from "../service/api";

function Home() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Image, setImage] = useState("");
    const [userData, setUserData] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("Name", Name);
        formData.append("Email", Email);
        formData.append("Password", Password);
        formData.append("Image", Image);
        let result = await SignUp(formData)
        console.log("Result", result)
        setUserData(result);
    }

    return (
        <div >
            <Layout />
            <div class="container mt-5">
                <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
                <form className="p-5">
                    <div class="mb-3" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                        <label for="name" class="form-label">Your Name</label>
                        <input type="text" class="form-control" id="name" required onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div class="mb-3" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                        <label for="email" class="form-label">Your Email</label>
                        <input type="email" class="form-control" id="email" required onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div class="mb-3" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div class="mb-3" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                        <label for="repeat-password" class="form-label">Upload Image</label>
                        <input type="file" class="form-control" id="repeat-password" required onChange={(event) => setImage(event.target.files[0])} />
                    </div>

                    <button type="submit" class="btn btn-primary ml-5" style={{ marginLeft: '20px' }} onClick={handleSubmit}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Home;