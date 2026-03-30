import { Box } from "@mui/material";

export const Entrance: React.FC = () => {
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
      </Box>
    </>
  );
};
