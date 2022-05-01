import axios from "axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post("http://localhost:8080/api/login", {
        email: userEmail,
        password: userPassword,
    });
};

const getAllUsers = (userId) => {
    return axios.get(`http://localhost:8080/api/get-all-users?id=${userId}`);
};
export { handleLoginApi, getAllUsers };