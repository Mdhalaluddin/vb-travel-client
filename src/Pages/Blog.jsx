import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { MdFavorite } from 'react-icons/Md';
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";


const Blog = ({ language }) => {
    const navigate = useNavigate()
    const { _id, img, category, shortDescription } = language;
    console.log(language);
    const handleWishlist = e => {
        e.preventDefault()
        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(language)
        })
            .then(res => res.json())
            .then(data => { console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'success',
                        'Your request successfully!',
                        'success'
                    )
                    return navigate("/wishlist")
                }
            })
    }
    return (

        <Card className="w-96">
            <form onSubmit={handleWishlist}>
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img
                        src={img}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                            {category}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium text-2xl text-red-400">
                            <Link onClick={handleWishlist} to={`/wishlist/${_id}`}><MdFavorite></MdFavorite></Link>
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                        {shortDescription}
                    </Typography>
                </CardBody>
                <a href="#" className="inline-block">
                    <Link to={`/details/${_id}`}>
                        <Button variant="text" className="flex mb-3 font-semibold items-center gap-2">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </Link>
                </a>

            </form>
        </Card>
    );
};

Blog.propTypes = {
    language: PropTypes.array
}

export default Blog;