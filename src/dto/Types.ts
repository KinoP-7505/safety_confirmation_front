export type UserInfo = {
  userId: number;
  username: string;
  email: string;
  role: "ADMIN" | "USER";
};

export type LoginRequest = {
  userId: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
  userInfo: UserInfo;
};
