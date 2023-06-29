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
      window.localStorage.setItem("id", JSON.stringify(res.data.id));
      console.log(res);
      console.log("작성", res.data);
      console.log(res.data.id);
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};

export const AxiosDelete = (callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;
  const id = JSON.parse(localStorage.getItem("id"));
  Axios.delete(`/api/posts/${id}`)
    .then((res) => {
      navigateSuccess();
      console.log(res);
      alert("삭제");
    })
    .catch((error) => {
      //   error.response.data.message.map((message) => alert(message));
      alert("error", error);
    });
};
