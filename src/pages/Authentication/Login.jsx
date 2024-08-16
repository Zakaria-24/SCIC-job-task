import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

const Login = () => {

    return(
        <div className="flex justify-center items-center mt-4">
            <Card className="max-w-full">
                <h1 className="text-3xl font-bold mb-4">Login now!</h1>

                {/* google authentication */}
                <Button type="submit">Google login</Button>

      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
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