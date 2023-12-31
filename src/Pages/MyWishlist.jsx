import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const MyWishlist = ({ wishlist, handleDeleted }) => {

    const { _id } = wishlist;
    
        return (
            <div className='w-full'>
                <Card key={wishlist._id} className="max-w-[80%] mx-auto flex-row">
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
                        <Typography variant="h6" color="gray" className="mb-4 uppercase md:text-xl text-xs">
                            {wishlist.category}
                        </Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2 md:text-2xl text-sm md:w-full w-40">
                            {wishlist.shortDescription}
                        </Typography>
                        <a href="#" className="inline-block">
                            <div className="flex-row-reverse md:flex  md:w-full w-72 md:space-x-10 md:gap-9 gap-2 mt-10">
                                <Link to={`/details/${_id}`}>
                                    <Button variant="text" className="flex font-semibold btn-sm bg-green-200 items-center gap-2 my-3 md:my-0">
                                        Details
                                    </Button>
                                </Link>
                                <Button onClick={() => handleDeleted(_id)} variant="text" className="flex font-semibold btn-sm bg-red-300 items-center gap-2">
                                    DELETE
                                </Button>
                            </div>
                        </a>
                    </CardBody>
                </Card>
            </div>
        );
    };

MyWishlist.propTypes = {
    wishlist: PropTypes.array.isRequired,
    handleDeleted: PropTypes.array
}
export default MyWishlist;