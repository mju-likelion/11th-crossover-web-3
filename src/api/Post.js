import { Axios } from "./Axios";

export const AxiosPost = (page, accessToken, callbackFunction) => {
    const POST_SIZE = 10;

    Axios.get("/api/posts", {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        params: {
            size: parseInt(POST_SIZE),
            page: page,
        }
    })
        .then((res) => {
            callbackFunction(res.data);
        })
        .catch((error) => {
            error.response.data.message.map((message) => console.log(message));
        });
};