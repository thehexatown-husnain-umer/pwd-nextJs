import { useSelector } from "react-redux";
const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state) => state.login.token);

  return isLoggedIn;
};
export default ProtectedRoute;
