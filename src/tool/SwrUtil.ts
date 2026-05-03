import useSWRMutation from "swr/mutation";
import type { LoginRequest, LoginResponse } from "../dto/Types";
import { useAuthStore } from "../store/AuthStore";
import { API_PATH, postFetcher } from "./AxiosUtil";

export const useLogin = () => {
  // useSWRMutationにloginAPIを呼び出すpostFetcherを指定
  const { trigger, isMutating, error } = useSWRMutation<
    LoginResponse,
    Error,
    string,
    LoginRequest
  >(API_PATH.login, postFetcher);

  const authStore = useAuthStore();

  const execLogin = async (req: LoginRequest) => {
    console.log(`Attempting login: userId=${req.userId}`);

    try {
      const result = await trigger(req);

      if (result) {
        console.log("SWR Login success:", result);
        // JWTトークンを格納
        authStore.setToken(result.accessToken, result.userInfo);
      }
      return result; // 成功時に結果を返す
    } catch (e) {
      console.error("エラーが発生しました:", e);
      throw e; // エラーを呼び出し元に伝播させる
    }
  };

  return {
    execLogin,
    isMutating,
    error,
  };
};
