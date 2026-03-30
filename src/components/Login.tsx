import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navi = useNavigate();
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
        <div>ログインページ</div>

        <div>未ログインの場合は表示</div>

        <Button variant="contained" onClick={() => navi("/entrance")}>
          玄関へ{" "}
        </Button>
      </Box>
    </>
  );
};
