import axios from "axios";

const Base_Url = "http://localhost:3000/user";
const api = axios.create({
    baseURL: Base_Url,
})

export const SignUp = async (userData) => {
    try {
        let response = await api.post(`/signup`, userData);
        return response.data;
    } catch (err) {
        console.log("SignUp failed", err.message)
    }
}

export const SignIn = async (payload) => {
    try {
        let response = await api.post(`/signin`, payload);
        return response.data.user;

    } catch (err) {
        console.log("SignIn Failed", err.message)
    }
}

export const getUserList = async () => {
    try {
        let response = await api.get('/getUserList');
        return response.data.userList;
    } catch (err) {
        console.log("Failed", err.message)
    }
}

export const Modify = async (payload) => {
    try {
        let response = await api.put(`/modify`, payload)
        return response.data;

    } catch (err) {
        console.log("Update failed", err.message)
    }
}

export const RemoveUser = async (userId) => {
    try {
    let response = await api.delete(`/delete/${userId}`);

    } catch (err) {
        console.log("Delete user Failed", err.message)
    }
}