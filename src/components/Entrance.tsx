import { Box } from "@mui/material";
import { Link } from "react-router-dom";
// import { useAuthStore } from "../store/AuthStore";
// import useSWR from "swr";
// import type { User } from "../dto/Types";
// import { useEffect } from "react";

export const Entrance: React.FC = () => {
  //   const { isLoggedIn, logout } = useAuthStore();

  //   const checkLogin = () => {
  //     // 未ログインの場合、ログインページへ遷移
  //   };

  //   useEffect(() => {
  //     console.log("未ログイン：ログインページ遷移");
  //     if (!isLoggedIn) {
  //     }
  //   }, []);

  return (
    <>
      <Box
        sx={{
          width: 1000, // 単位なしはデフォルトで 'px'
          height: 600,
          display: "flex",
          flexDirection: "column", // 子要素を縦に並べる
          justifyContent: "center", // 縦方向の中央揃え
          alignItems: "center", // 横方向の中央揃え
          border: "1px solid #ccc", // 範囲をわかりやすくするための枠線
          gap: 1, // テキスト間の余白（8px単位）
        }}
      >
        <div>エントランスページ</div>

        <div>ログイン済みの場合表示</div>

        <div>未ログインの場合はログイン画面へ遷移</div>

        <Link to="/login">
          <button style={{ fontSize: "18px", padding: "10px 20px" }}>ログイン画面へ</button>
        </Link>
      </Box>
    </>
  );
};
