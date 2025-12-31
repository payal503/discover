import { useState } from "react";
import { SignIn } from "../service/api";
import {useDispatch} from "react-redux";
import { setUser } from "../redux/userSlice";

function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [userInfo, setUserInfo] = useState([]);
    const dispatch = useDispatch();
    console.log("hghg", userInfo)

    const login = async (event) => {
        event.preventDefault();
        try {
            let payload = { Email: Email, Password: Password }
            let result = await SignIn(payload);
            setUserInfo(result)
            dispatch(setUser(result))
            console.log("Successfully login");
        }catch (err) {
            console.log("SignIn Failed", err.message)
        }
    }
    return (
        <div class="container mt-5">
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <form className="p-5">
                <div class="mb-3" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                    <label for="email" class="form-label">Your Email</label>
                    <input type="email" class="form-control" id="email" required onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div class="mb-3" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" required onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary ml-5" style={{ marginLeft: '20px' }} onClick={login}>Login</button>
            </form>
        </div>
    )
}

export default Login;