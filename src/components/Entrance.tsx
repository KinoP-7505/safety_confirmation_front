import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

export const Entrance: React.FC = () => {
  const authStore = useAuthStore();
  const navi = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    console.log("未ログイン：ログインページ遷移");
    console.log(`authStore.isLoggedIn = ${authStore.isLoggedIn}`);
    if (!authStore.isLoggedIn) {
      navi("/login");
    }
  }, [authStore.isLoggedIn, navi]);

  const hadleLogout = () => {
    authStore.removeToken();
    navi("/login");
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#ffcaca", color: "#333" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ flexGrow: 1, textDecoration: "none", color: "inherit", fontWeight: "bold" }}
            >
              MODERN APP
            </Typography>

            <Box>
              <Button onClick={() => hadleLogout()}>ログアウト処理</Button>
              <Button component={Link} to="/">
                Home
              </Button>

              <Button variant="outlined" endIcon={<KeyboardArrowDownIcon />} onClick={(e) => setAnchorEl(e.currentTarget)}>
                サービス
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem component={Link} to="/samp1" onClick={handleClose}>
                  サンプル１
                </MenuItem>
                <MenuItem component={Link} to="/samp2" onClick={handleClose}>
                  サンプル２
                </MenuItem>
                <MenuItem component={Link} to="/samp1" onClick={handleClose}>
                  サンプル３
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
        {/* 3. メインコンテンツエリア */}
        <Box
          component="main"
          sx={{
            flexGrow: 1, // 残りの画面領域をすべて埋める
            p: 3, // コンテンツの周りに適切なパディングを付与
            backgroundColor: (theme) => theme.palette.grey[50], // 背景色を薄くつける場合
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
