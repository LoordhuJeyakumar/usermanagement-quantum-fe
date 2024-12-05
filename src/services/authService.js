import axiosInstance from "../api/axiosInstance";

export const register = async (data) => {
  try {
    const response = await axiosInstance.authInstance.post(
      "/auth/register",
      data
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Registration failed:", error.response.data.message);

    return {
      success: false,
      error: error.response.data.error || error.response.data.message,
      errorData: error,
    };
  }
};

export const login = async (data) => {
  try {
    const response = await axiosInstance.authInstance.post("/auth/login", data);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Login failed:", error.response.data.message);

    return {
      success: false,
      error: error.response.data.message,
      errorData: error,
    };
  }
};
