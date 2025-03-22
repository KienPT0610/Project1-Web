import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "@/services/api";
import { AppDispatch } from "..";

interface AuthState {
  isLoading: boolean;
  error: string | null;
  user: { username: string } | null;
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
    loginSuccess(state, action: PayloadAction<{ username: string }>) {
      const fakeToken = "fakeToken12345";
      document.cookie = `authToken=${fakeToken}; path=/; max-age=3600; Secure; SameSite=Strict`;
      state.user = action.payload;
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
    getUsers.fetchAPI().then((users) => {
      users.map((value: { email: string; password: string }) => {
        if (email === value.email && password === value.password) {
          oke = false;
          dispatch(loginSuccess({ username: "Test User" }));
        }
      });
      if (oke) {
        dispatch(setError("Invalid email or password"));
      }
    });
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
export {oke}