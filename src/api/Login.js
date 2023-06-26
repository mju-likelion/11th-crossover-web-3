import {Axios} from  './Axios';


export const AxiosLogin = (data, goMain) => {


    Axios.post(`/api/auth/login`, {
        id: data.id,
        password: data.password,
    })
        .then((res) => {
            console.log(res.data)
            window.localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken))

            goMain();

            // console.log(res.data.accessToken)

        })

        .catch((error) => {
            console.log(error)
            if (error.response && error.response.data && error.response.data.message) {
                error.response.data.message.map((message) => alert(message));

            } else {
                console.log("에러", error);
            }
        })
}