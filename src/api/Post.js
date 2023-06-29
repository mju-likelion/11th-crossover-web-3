import { Axios } from "./Axios";

export const getAllPost = (page, accessToken, callbackFunction) => {
  const POST_SIZE = 10;

  Axios.get("/api/posts", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      size: POST_SIZE,
      page: page,
    },
  })
    .then((res) => {
      callbackFunction(res.data);
    })
    .catch((error) => {
      error.response.data.message.map((message) => console.log(message));
    });
};

export const axiosWrite = (data, callbackFunctions) => {
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

export const getPostDetail = (id, accessToken, callbackFunction) => {
  Axios.get(`/api/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      id: id,
    },
  })
    .then((res) => {
      callbackFunction(res.data);
    })
    .catch((error) => {
      error.response.data.message.map((message) => console.log(message));
    });
};

export const deletePost = (id, accessToken, callbackFunctions) => {
  const { navigateSuccess } = callbackFunctions;
  Axios.delete(`/api/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => {
      navigateSuccess();
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
