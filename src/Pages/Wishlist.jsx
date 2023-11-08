import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Conpunents/Navbar";
import Footer from "../Conpunents/Footer";
import { TbHttpDelete } from 'react-icons/tb';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const Wishlist = () => {
    const wishlists = useLoaderData();
    const { id } = useParams();
    const wishlist = wishlists.find(wishlist => wishlist._id === id)
    console.log(wishlist);
    return (
        <div>
            <Navbar></Navbar>
            <div className="gird space-y-5 my-10">
                <Card className="max-w-[80%] mx-auto flex-row">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 w-2/5 shrink-0 rounded-r-none"
                    >
                        <img
                            src={wishlist.img}
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h6" color="gray" className="mb-4 uppercase">
                            {wishlist.category}
                        </Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {wishlist.short_description}
                        </Typography>
                        <a href="#" className="inline-block">
                            <div className="flex gap-9 mt-10">
                            <Link to={`/details/${id}`}>
                            <Button variant="text" className="flex items-center gap-2">
                                Details
                            </Button>
                            </Link>
                            <Button variant="text" className="flex text-3xl bg-red-300 items-center gap-2">
                                <TbHttpDelete></TbHttpDelete>
                            </Button>
                            </div>
                        </a>
                    </CardBody>
                </Card>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Wishlist;