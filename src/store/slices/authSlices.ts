import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "@/services/api";
import { AppDispatch } from "..";
import { TUserData } from "@/types/user.type";

interface AuthState {
  isLoading: boolean;
  error: string | null;
  user: TUserData | null;
}

let oke = true;

const initialState: AuthState = {
  isLoading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthError(state) {
      state.error = null;
    },
    startLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    loginSuccess(state, action: PayloadAction<{ user: TUserData }>) {
      const fakeToken = "fakeToken12345";
      document.cookie = `authToken=${fakeToken}; path=/; max-age=3600; Secure; SameSite=Strict`;
      state.user = action.payload.user;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  resetAuthError,
  startLoading,
  stopLoading,
  loginSuccess,
  setError,
} = authSlice.actions;

export default authSlice.reducer;

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(startLoading());

    try {
      const users = await getUsers.fetchAPI(); // Chờ fetch danh sách users
      const user = users.find(
        (value: { email: string; password: string }) =>
          email === value.email && password === value.password
      ) as TUserData | undefined; // Tìm user trong danh sách

      if (user) {
        dispatch(loginSuccess({ user })); // Đúng user thì đăng nhập thành công
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        dispatch(setError("Invalid email or password")); // Sai user thì báo lỗi
      }
    } catch (error: any) {
      console.error(error);
      dispatch(setError("Error fetching users")); // Báo lỗi nếu API thất bại
    }
  };
export const register =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(startLoading());
    getUsers.fetchAPI().then((users) => {
      users.map((value: { email: string; password: string }) => {
        if (email === value.email && password === value.password) {
          oke = false;
          setTimeout(() => {
            console.log("Tài Khoản đã tồn tại");
            dispatch(stopLoading());
          }, 1000);
        }
      });
      if (oke) {
        console.log("Tạo tài khoản thành công");
        dispatch(stopLoading());
      }
    });
  };

export const logout = () => (dispatch: AppDispatch) => {
  document.cookie = "authToken=; path=/; max-age=0";
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("user");
  window.location.href = "/auth/login";
};
export { oke };
