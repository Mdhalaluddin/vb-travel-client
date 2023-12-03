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
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/addBlog'>Add Blog</Link></li>
            <li><Link to='/allBlog'>All Blog</Link></li>
            <li><Link to='/featuredBlogs '>Featured Blogs </Link></li>
            {
                user?.email?
                <>
                <li><Link to='/wishlist'>Wishlist</Link></li>
                </>
                : " "
            }
            <li><Link to='/about'>About</Link></li>

        </>
    return (
        <div className="bg-gray-900">
            <div className="navbar py-2 max-h-10 max-w-[92%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn bg-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-3 items-center shadow bg-gray-600 text-center rounded-lg w-40 text-white">
                            {NavLink}
                        </ul>
                    </div>
                    <Link to='/'> 
                        <img className="w-20 h-14" src="https://i.ibb.co/k18449P/download-removebg-preview.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {NavLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?. email? <>
                            <nav className="flex items-center justify-center">
                                {
                                    user?.photoURL ?
                                    <div className="dropdown pt-2 mr-4 dropdown-bottom dropdown-end">
                                    <label tabIndex={0} className="m-1">
                                        <div className="avatar online">
                                            <div className="w-14 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-brown-50 rounded-box w-52">
                                        <li><a className="p-2">{user.email}</a></li>
                                    </ul>
                                </div>
                                :
                                <li><a className="p-2 text-red-200">{user.email}</a></li>
                                }
                                <a onClick={handleLogOut} className="btn btn-sm px-2 bg-brown-200">LogOut</a>
                            </nav>
                        </>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;