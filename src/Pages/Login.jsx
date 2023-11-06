import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Navbar from "../Conpunents/Navbar";
import Footer from "../Conpunents/Footer";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center justify-center my-7">
                <Card className="bg-gray-400 p-5" color="transparent" shadow={false}>
                    <Typography className="text-center" variant="h4" color="blue-gray">
                        Login Now
                    </Typography>
                    {/* <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to .
            </Typography> */}
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                name="email"
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                name="password"
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <input className="mt-6 w-full bg-black p-2 rounded-lg text-white" type="submit" value="Registration" />
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Have a new? Please{" "}
                            <Link to='/registration'>
                                <a href="#" className="font-medium text-gray-900">
                                    Registration
                                </a>
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;