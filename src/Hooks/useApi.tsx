import { useAuthContext } from "./useAuthContext";
const url = import.meta.env.VITE_API_URL;
export const useApi = (Url?: string) => {
  // const ApiUrl = Url ?? "https://charming-figolla-19a92e.netlify.app";
  const ApiUrl = Url ?? url;
  const { user } = useAuthContext();
  const headers = { "Content-Type": "Application/json", token: user ?? "" };
  const getTweets = async (page: number, pageSize: number) => {
    const result = await fetch(`${ApiUrl}/api/tweet/get/${page}/${pageSize}`, {
      method: "GET",
      headers: headers,
    });

    return result;
  };

  const getTweet = async (_id: string) => {
    const result = await fetch(`${ApiUrl}/api/tweet/get/${_id}`, {
      method: "GET",
      headers: headers,
    });

    return result;
  };

  const getComments = async (_id: string) => {
    const result = await fetch(`${ApiUrl}/api/tweet/comment/get/${_id}`, {
      method: "GET",
      headers: headers,
    });

    return result;
  };

  const Login = async (payload: any) => {
    const result = fetch(`${ApiUrl}/api/user/login`, {
      method: "POST",
      headers: headers,
      body: payload,
    });

    return result;
  };
  const signUp = async (payload: any) => {
    const result = fetch(`${ApiUrl}/api/user/signup`, {
      method: "POST",
      headers: headers,
      body: payload,
    });
    return result;
  };

  const PostTweet = async (payload: any) => {
    const result = await fetch(`${ApiUrl}/api/tweet/post`, {
      method: "POST",
      headers: { token: user },
      body: payload,
    });
    return result;
  };

  const GetFollowing = async () => {
    const result = await fetch(`${ApiUrl}/api/relationship/followings`, {
      method: "GET",
      headers: { token: user },
    });
    return await result.json();
  };

  const GetFollowers = async () => {
    const result = await fetch(`${ApiUrl}/api/relationship/followers`, {
      method: "GET",
      headers: { token: user },
    });
    return await result.json();
  };

  const GetTrends = async () => {
    const result = await fetch(`${ApiUrl}/api/trend/get`, {
      method: "GET",
    });
    return result;
  };

  const FollowAccount = async (payload: any) => {
    const result = await fetch(`${ApiUrl}/api/relationship/follow`, {
      method: "PATCH",
      body: payload,
      headers: { token: user, "Content-Type": "Application/json" },
    });
    return result;
  };

  const GetRecAccounts = async () => {
    const result = await fetch(`${ApiUrl}/api/people/getrecommendedaccounts`, {
      method: "GET",
      headers: { token: user, "Content-Type": "Application/json" },
    });
    return result;
  };

  const GetUser = async (user: string) => {
    const result = await fetch(`${ApiUrl}/api/user/current`, {
      method: "GET",
      headers: { token: user, "Content-Type": "Application/json" },
    });

    return result;
  };

  const EditProfile = async (payload: any) => {
    const result = await fetch(`${ApiUrl}/api/user/edit`, {
      method: "POST",
      body: payload,
      headers: { token: user },
    });
    return result;
  };
  const DeleteTweet = async (_id: string) => {
    const result = await fetch(`${ApiUrl}/api/tweet/delete/${_id}`, {
      method: "DELETE",
      headers: { token: user },
    });
    return result;
  };

  const LikePost = async (_id: string) => {
    const result = await fetch(`${ApiUrl}/api/tweet/like/${_id}`, {
      method: "POST",
      headers: { token: user },
    });
    return result;
  };

  const unLikePost = async (_id: string) => {
    const result = await fetch(`${ApiUrl}/api/tweet/unlike/${_id}`, {
      method: "POST",
      headers: { token: user },
    });
    return result;
  };

  return {
    getTweets,
    Login,
    PostTweet,
    GetFollowing,
    GetFollowers,
    signUp,
    GetTrends,
    FollowAccount,
    GetRecAccounts,
    GetUser,
    EditProfile,
    DeleteTweet,
    LikePost,
    unLikePost,
    getTweet,
    getComments,
  };
};
