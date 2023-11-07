import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logOut seccessfully');
            })
            .catch(error => console.log(error))
    }
    const NavLink =
        <>
            <li><a><Link to='/addBlog'>Add Blog</Link></a></li>
            <li><a><Link to='/registration'>Registration</Link></a></li>
            <li><a><Link to='/allBlog'>All Blog</Link></a></li>
            <li><a><Link to='/wishlist'>Wishlist</Link></a></li>
            <li><a><Link to='/about'>About</Link></a></li>
        </>
    return (
        <div className="bg-gray-900">
            <div className="navbar max-h-6 max-w-[92%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn bg-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-3 items-center shadow bg-gray-600 text-center rounded-lg w-40 text-white">
                            {NavLink}
                        </ul>
                    </div>
                    <img className="w-10 h-10" src="https://i.ibb.co/fYGGC8v/306727995-477224907747391-5021090266511720501-n-removebg-preview.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {NavLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <nav className="flex items-center justify-center">
                                <div className="dropdown mr-4 dropdown-bottom dropdown-end">
                                    <label tabIndex={0} className="m-1">
                                        <div className="avatar online">
                                            <div className="w-14 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-brown-200 rounded-box w-52">
                                        <li><a className="p-2">{user.email}</a></li>
                                    </ul>
                                </div>
                                <a onClick={handleLogOut} className="btn btn-sm px-2 bg-brown-200">LogOut</a>
                            </nav>
                        </>
                            :
                            <Link to='/login'>
                                <a className="btn btn-sm">Login</a>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;