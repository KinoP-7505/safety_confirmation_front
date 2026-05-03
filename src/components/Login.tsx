import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginRequest } from "../dto/Types";
import { useAuthStore } from "../store/AuthStore";
import { useLogin } from "../tool/SwrUtil";

export const Login: React.FC = () => {
  const navi = useNavigate();
  const authStore = useAuthStore();
  // { trigger, isMutating, error }
  const swr = useLogin();
  const [userId, setUserId] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  // ログイン処理
  const handleLogin = async () => {
    console.log(`updateTodo todoid= ${userId}, todoText= ${pass}`);
    const req: LoginRequest = {
      userId: userId,
      password: pass,
    };
    // ログイン処理：ログイン結果、エラーハンドリングは、useLoginカスタムフック
    // execLoginで実施
    await swr.execLogin(req);
  };

  // 入力値を正規表現（半角英数字記号）チェック
  const checkInput = (value: string) => {
    const pattern = /^[!-~]*$/;
    return pattern.test(value);
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid
            sx={{ marginTop: "150px" }}
            size={12}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold" }}
            >
              ログインページ
            </Typography>
          </Grid>
          <Grid size={12}>
            <TextField
              id="textfield-id"
              label="ユーザーID"
              variant="standard"
              sx={{ width: 200 }}
              onChange={(e) => {
                // 半角英数字記号の場合、入力セット
                if (checkInput(e.target.value)) {
                  setUserId(e.target.value);
                }
              }}
              value={userId}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              id="textfield-pass"
              label="パスワード"
              variant="standard"
              sx={{ width: 200 }}
              onChange={(e) => {
                // 半角英数字記号の場合、入力セット
                if (checkInput(e.target.value)) {
                  setPass(e.target.value);
                }
              }}
              value={pass}
            />
          </Grid>
          <Grid size={12}>
            <Button
              id="button-login"
              variant="contained"
              onClick={() => handleLogin()}
            >
              ログイン
            </Button>
          </Grid>
        </Grid>
        <Grid
          size={12}
          sx={{ marginTop: "20px" }}
        >
          <Typography
            id="label-error"
            variant="body2"
            sx={{ color: "red" }}
          >
            エラーメッセージエリア
          </Typography>
        </Grid>
        {/* 下記は確認のための実装、問題が無ければ本来の実装に修正すること */}
        {/* ログイン成功時は、useEffectでauthStore.isLoggedInがtrueになった場合、navi関数で遷移する */}

        {authStore.isLoggedIn && (
          <Grid size={12}>
            <Button
              variant="contained"
              onClick={() => navi("/entrance")}
            >
              玄関へ
            </Button>
          </Grid>
        )}
        {/* ここまでを削除 */}
      </Box>
    </>
  );
};
