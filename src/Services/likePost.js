import axios from "axios";

export function likePost(token, postId) {
  return axios.put(
    `https://route-posts.routemisr.com/posts/${postId}/like`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}
