
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import CustomContex from "../Utilis/CustomContex";

const NavBar = () => {
    const { user, logOut } = CustomContex();

    return (
        <div>
            <Navbar fluid rounded className="bg-orange-50">
                <Navbar.Brand href="/">
                    <img src="https://i.ibb.co/SXd297T/Screenshot-2024-08-17-084420.png" className="mr-3 w-24 rounded-lg h-6 sm:h-9" alt="GrabLt Logo" />
                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Grablt</span> */}
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                        <Avatar alt="User settings" img= {user?.photoURL || "https://flowbite.com/docs/images/people/profile-picture-5.jpg"}  rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{user?.displayName}</span>
                            <span className="block truncate text-sm font-medium">{user?.email}</span>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                        {
                            user?<Navbar.Link href="login" onClick={() => logOut()}>Log out</Navbar.Link>:<Navbar.Link href="login">Log in</Navbar.Link>
                            
                        }
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="/" active>
                        Home
                    </Navbar.Link>
                    {/* <Navbar.Link href="/">About</Navbar.Link> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;