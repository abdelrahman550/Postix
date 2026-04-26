import { Avatar } from "@heroui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Image, SendHorizontal, Smile } from "lucide-react";
import { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { authContext } from "../../Context/AuthContextProvider";
import InvalidCommentInput from "./InvalidCommentInput";
import { getUserData } from "../../Services/getUserData";

export default function CommentInputField({ postId }) {
  // Initializing States
  const [commentInputError, setCommentInputError] = useState(false);

  // Token Authentication Hook
  const { token } = useContext(authContext);

  const { data: userDataRes } = useQuery({
    queryFn: () => getUserData(token),
    queryKey: ["userData", token],
    enabled: !!token,
  });

  const userData = userDataRes?.data?.data?.user;

  // Using useRef Hook To Access The DOM To Get The Comment Text Input
  const commentTextInput = useRef(null);

  const queryClient = useQueryClient();

  // Create Comment Function
  function createComment() {
    const commentData = {
      content: commentTextInput.current.value,
    };

    if (commentTextInput.current?.value?.length >= 2) {
      return axios.post(
        `https://route-posts.routemisr.com/posts/${postId}/comments`,
        commentData,
        {
          headers: {
            token: token,
          },
        },
      );
    } else {
      throw new Error("Comment must be at least 2 characters");
    }
  }

  const { isPending, mutate } = useMutation({
    mutationFn: createComment,
    onSuccess: function () {
      setCommentInputError(false);
      commentTextInput.current.value = "";
      queryClient.invalidateQueries(["All Comments", postId]);
      toast.success("Comment Created Successfully!", {
        position: "top-center",
      });
    },
    onError: function (error) {
      console.error("Error", error);
      setCommentInputError(true);
    },
  });

  return (
    <>
      {commentInputError && <InvalidCommentInput />}
      <div className="mt-3 flex w-full gap-2">
        <div>
          <Avatar
            isBordered={false}
            radius="full"
            size="sm"
            src={userData.photo}
            color="secondary"
          />
        </div>
        <div className="flex w-full flex-col gap-1 rounded-2xl border border-slate-200 bg-[#F0F2F5] px-2.5 py-1.5 focus-within:border-[#c7dafc] focus-within:bg-white">
          <textarea
            ref={commentTextInput}
            placeholder={`Comment As ${userData.name}`}
            rows="1"
            className="scrollbar-hide max-h-35 min-h-10 w-full resize-none bg-transparent px-2 py-1.5 text-sm leading-5 outline-none placeholder:text-slate-500"
          ></textarea>
          <div className="mt-1 flex items-center justify-end">
            <button
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#5B21B6] text-white shadow-sm transition hover:bg-[#3B167A] disabled:cursor-not-allowed disabled:bg-[#EDE9FE] disabled:opacity-100"
              onClick={mutate}
            >
              {isPending ? "..." : <SendHorizontal size={16} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
