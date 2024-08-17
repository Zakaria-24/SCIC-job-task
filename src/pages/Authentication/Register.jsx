import { Button, Card, Label, TextInput } from "flowbite-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomContex from "../../Utilis/CustomContex";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { registerUser, setUser, googleLogin } = CustomContex();
    const [regError, setRegError] = useState("");
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      const { fullName, photoUrl, email, password } = data;
  
      registerUser(email, password)
        .then((result) => {
          setUser(result.user);
          // setSuccess("Registered Successfully");
          toast.success("Registered Successfully");
          // navigate after login user
          navigate(location?.state ? location.state : "/");
  
          // update user
          updateProfile(result.user, {
            displayName: fullName,
            photoURL: photoUrl,
          }).then(() => {
            // navigate after login user
            navigate("/");
          });
        })
  
        .catch((error) => {
          setRegError(error.message);
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
        <div className="flex justify-center items-center mt-2">
            <Card className="max-w-full">
                <h1 className="text-3xl font-bold mb-4">Register now!</h1>

                {/* google authentication */}
                <Button onClick={handleGoogleLogin} type="submit">Google login</Button>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="fullName" value="Your Name" />
                        </div>
                        <TextInput id="fullName" type="text" placeholder="Example Name" required 
                        {...register("fullName", { required: true })}
                        />
                        {errors.fullName && (
                          <span className="text-red-400">This field is required</span>
                        )}
                    </div>
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
                         {regError && <span className="text-red-400">{regError}</span>}
                    </div>

                    {/* <div className="mb-2 block">
                        <Label htmlFor="photoUrl" value="Upload file" />
                    </div>
                    <FileInput id="photoUrl" /> */}

<div>
                        <div className="mb-2 block">
                            <Label htmlFor="photoUrl" value="Your photoUrl" />
                        </div>
                        <TextInput id="photoUrl" type="text" placeholder="photoUrl" required 
                         {...register("photoUrl", { required: true })}
                         />
                         {errors.photoUrl && (
                           <span className="text-red-400">This field is required</span>
                         )}
                         {regError && <span className="text-red-400">{regError}</span>}
                    </div>

                    <Button type="submit">Register</Button>
                </form>
                <p className="mt-2">Already have an account <a href="login" className="hover:text-primary-600 dark:hover:text-primary-500 underline font-semibold text-green-700">
                    please login</a>
                </p>
            </Card>
        </div>
    )
}

export default Register;