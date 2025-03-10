import axios from "./axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";

const useAuthService = () => {
  const axiosPrivate = useAxiosPrivate();
  const { setUser, setAccessToken } = useAuth();

  const signup = async (newUser) => {
    try {
      const res = await axios.post(`http://localhost:5000/auth/signup`, newUser);
      const user = res.data;
      setUser(user);
      return { status: true };
    } catch (error) {
      console.error("Signup error:", error.response || error.message || error);
      throw error;
    }
  };

  const login = async (id, password) => {
    const credentials = { id, password };

    try {
      const res = await axios.post(`/auth/login`, credentials, { withCredentials: true });
      const { message, accessToken, user } = res.data;

      // Ensure user and accessToken are received
      if (accessToken && user) {
        setUser(user);
        setAccessToken(accessToken);
        return { status: true };
      } else {
        console.error("Login failed, missing data:", res.data);
        return { status: false, error: "Missing data in response" };
      }
    } catch (error) {
      console.error("Login error:", error.response || error.message || error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const res = await axios.get(`/auth/logout`, { withCredentials: true });
      setUser("");
      setAccessToken("");
      return { status: true };
    } catch (error) {
      console.error("Logout error:", error.response || error.message || error);
      return { status: false, error };
    }
  };

  const getDetails = async () => {
    try {
      const res = await axiosPrivate.get(`/auth/details`);
      return { status: true, data: res.data };
    } catch (error) {
      console.error("Get Details error:", error.response || error.message || error);
      return { status: false, error };
    }
  };

  return {
    signup,
    login,
    logout,
    getDetails,
  };
};

export default useAuthService;
