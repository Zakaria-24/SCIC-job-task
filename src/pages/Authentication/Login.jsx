import { Button, Card, Label, TextInput } from "flowbite-react";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomContex from "../../Utilis/CustomContex";

const Login = () => {
  const { loginUser, setUser, googleLogin } = CustomContex();
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    console.log(success);
    setSuccess("");

    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        // setSuccess("Registered Successfully");
        toast.success("Login Successfully");

        // navigate after login user
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setLoginError("Provide a valid email or password");
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      setUser(result.user);
      toast.success("Google Login Successfully");
      navigate("/");
    });
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <Card className="max-w-full">
        <h1 className="text-3xl font-bold mb-4">Login now!</h1>

        {/* google authentication */}
        <Button onClick={handleGoogleLogin} type="submit">Google login</Button>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" type="email" placeholder="name@flowbite.com" required 
             {...register("email", { required: true })}
             />
             {errors.email && (
               <span className="text-red-400">This field is required</span>
             )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" required 
            {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          {loginError && <span className="text-red-400">{loginError}</span>}
          <Button type="submit">Login</Button>
        </form>
        <p className="mt-6">Do not have an account <a href="register" className="hover:text-primary-600 dark:hover:text-primary-500 underline font-semibold text-green-700">
          please register</a>
        </p>
      </Card>
    </div>
  )
}

export default Login;