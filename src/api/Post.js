import { Axios } from "./Axios";

export const AxiosWrite = (data, callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;
  const token = JSON.parse(localStorage.getItem("accessToken"));
  Axios.post(
    "/api/posts",
    {
      title: data.title,
      content: data.content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => {
      navigateSuccess();
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
