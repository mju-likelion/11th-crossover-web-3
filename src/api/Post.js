import { Axios } from "./Axios";

export const AxiosWrite = (data, id, callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;

  Axios.post("/api/posts", {
    title: data.title,
    content: data.content,
  })
    .then((res) => {
      navigateSuccess();
      console.log(id);
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
