import { Footer } from "flowbite-react";

const FooTer = () => {

    return (
        <Footer container className="bg-orange-50">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src="https://i.ibb.co/SXd297T/Screenshot-2024-08-17-084420.png"
            alt="GrabLt Logo"
            name="GrabLt"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="GrabLt" year={2026} />
      </div>
    </Footer>
    );
  };
  
  export default FooTer;