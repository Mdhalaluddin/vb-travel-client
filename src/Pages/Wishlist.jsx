import Navbar from "../Conpunents/Navbar";
import Footer from "../Conpunents/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyWishlist from "./MyWishlist";
import Swal from "sweetalert2";

const Wishlist = () => {

    const { user } = useContext(AuthContext);
    const [wishlists, setWishlists] = useState([]);
    const url = `https://vb-travel-server.vercel.app/wishlist?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setWishlists(data);
            })
    }, [url])
    // fetch('url')
    const handleDeleted = id => {
        const proceed =
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            })
        if (proceed) {
            fetch(`https://vb-travel-server.vercel.app/wishlist/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result.data);
                    if (result.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    const remaining = wishlists.filter(wishlist => wishlist._id !== id)
                    setWishlists(remaining)
                })
        }
    }
    return (

        <>
            <Navbar></Navbar>
            <h2 className="text-2xl text-center  p-5 font-semibold ">My wishlist</h2>
                <div className="grid my-3 bg-blue-gray-50 p-10 gap-6 max-w-[92%] mx-auto">
                    {
                        wishlists.map(wishlist => <MyWishlist key={wishlist._id} handleDeleted={handleDeleted} wishlist={wishlist}></MyWishlist>)
                    }
                </div>
            <Footer></Footer>
        </>

    );
};

export default Wishlist;