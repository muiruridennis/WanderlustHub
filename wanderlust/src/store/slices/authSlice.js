import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from "../../api";
import { toast } from 'react-toastify';


export const signIn = createAsyncThunk(
  'auth/login',
  async (formData) => {
    try {
      const { data } = await api.signIn(formData);
      toast.success(data?.message);
      return data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || 'An error occurred while signing in.';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
);

export const signOut = createAsyncThunk(
  'auth/signout',
  async () => {
    try {
      const { data } = await api.logOut();
      toast.success(data?.logoutMessage);
      return data
    } catch (error) {
      const errorMessage = error?.response?.data?.message || 'An error occurred while signing out.';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
);

export const signUp = createAsyncThunk(
  'auth/signup',
  async (formData) => {
    try {
      const { data } = await api.signUp(formData);
      return data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || 'An error occurred while signing up.';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (resetData) => {
    try {
      const { data } = await api.resetPassword(resetData);
      return data
    } catch (error) {
      const errorMessage = error?.response?.data?.message || 'An error occurred while reseting password.';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
);
export const recoverPassword = createAsyncThunk(
  'auth/recoverPassword',
  async (email) => {
    try {
      await api.recoverPassword(email)
    }
    catch (error) {
      console.log(error)
      const errorMessage = error?.response?.data?.message || 'An error occurred while recovering password.';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
);


export const confirmEmail = createAsyncThunk(
  'auth/confirmEmail',
  async (token) => {
    try {
      const { data } = await api.confirmEmail(token);
      console.log("data in confirm authSlice", data);
      toast.success(data?.message);
      return data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || 'An error occurred while confirming Email.';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
);

export const resendConfirmEmail = createAsyncThunk(
  'auth/resendConfirmEmail',
  async () => {
    try {
      await api.resendConfirmEmail();
    } catch (error) {
      const errorMessage = error?.response?.data?.message || 'An error occurred while resending Confirm Email.';
      toast.error(errorMessage);
      throw new Error(errorMessage); throw error;
    }
  }
);

export const getCurrentUserData = createAsyncThunk(
  'auth/getCurrentUserData',
  async () => {
    try {
      const { data } = await api.getCurrentUserData();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      const errorMessage = error?.response?.data?.message || 'An error occurred while getting authenticated user.';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  authData: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.isLoading = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action?.error?.message;
        state.isLoading = false;
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authData = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.isLoading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })
      .addCase(recoverPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(recoverPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(recoverPassword.rejected, (state, action) => {
        state.error = action?.error?.message;
        state.isLoading = false;
      })
      .addCase(confirmEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(confirmEmail.fulfilled, (state, action) => {
        state.authData = action?.payload;
        state.isLoading = false;
      })
      .addCase(confirmEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })
      .addCase(resendConfirmEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resendConfirmEmail.fulfilled, (state) => {
        state.isLoading = false;
      })

      .addCase(resendConfirmEmail.rejected, (state, action) => {
        state.error = action?.error?.message;
        state.loading = false;
      })

      // Case for getCurrentUserData
      .addCase(getCurrentUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(getCurrentUserData.rejected, (state, action) => {
        state.error = action?.error?.message;
        state.loading = false;
      });
  },
});


export default authSlice.reducer;
