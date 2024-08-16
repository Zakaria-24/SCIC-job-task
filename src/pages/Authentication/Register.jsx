import { Button, Card, FileInput, Label, TextInput } from "flowbite-react";

const Register = () => {

    return (
        <div className="flex justify-center items-center mt-2">
            <Card className="max-w-full">
                <h1 className="text-3xl font-bold mb-4">Register now!</h1>

                {/* google authentication */}
                <Button type="submit">Google login</Button>

                <form className="flex flex-col gap-1">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="full Name" value="Your Name" />
                        </div>
                        <TextInput id="name" type="email" placeholder="Example Name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput id="email" type="email" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" type="password" required />
                    </div>

                    <div className="mb-2 block">
                        <Label htmlFor="photo-url" value="Upload file" />
                    </div>
                    <FileInput id="photo-url" />

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