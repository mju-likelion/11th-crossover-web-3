import { Axios } from "./Axios";

export const AxiosLogin = (data, loginToggle, goMain) => {
  const {id, password} = data;
  const LoginSuccess = (accessToken) => {
    window.localStorage.setItem("accessToken", JSON.stringify(accessToken));
    const LocalAccessToken = JSON.parse(localStorage.getItem("accessToken"));

    if (LocalAccessToken) {
      goMain();
      loginToggle();
    }
  };

  Axios.post(`/api/auth/login`, {
    id,
    password,
  })
    .then((res) => {
      LoginSuccess(res.data.accessToken);
    })

    .catch((error) => {
      console.log(error);
      if (error.response.data.message) {
        error.response.data.message.map((message) => alert(message));
      } else {
        console.log("에러", error);
      }
    });
};
