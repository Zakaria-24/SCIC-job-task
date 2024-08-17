import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


 const CustomContex = () => {
  const Contex = useContext(AuthContext);
  return Contex;
};
export default CustomContex;
