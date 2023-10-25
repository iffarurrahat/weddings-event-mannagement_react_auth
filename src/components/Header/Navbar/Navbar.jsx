import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const navLink = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
        >
            Home
        </NavLink></li>

        {
            user && <>
                <li><NavLink
                    to="/portfolio"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }
                >
                    Portfolio
                </NavLink></li>
                <li><NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }
                >
                    About Us
                </NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar absolute z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="cursor-pointer lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#edf3f8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navLink}
                    </ul>
                </div>
                <a className="normal-case text-2xl text-white ml-auto lg:ml-0 -mr-12 lg:mr-0">
                    <img src="https://i.ibb.co/G2yMCPt/logo-felling.png" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal gap-5 px-1 text-[#C3D7E3] text-lg font-medium">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ?
                                    <img className="" src={user.photoURL} /> :
                                    <img className="" src="https://demo.sirv.com/nuphar.jpg?w=400" />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">

                        {
                            user ?
                                <div>

                                    <p className="mb-2">{user?.displayName}</p>
                                    <button onClick={handleSignOut} className="btn btn-sm bg-red-600 text-white">LogOut</button>
                                </div> :
                                <button className="btn btn-sm bg-green-600 text-white"><Link to='/login'>LogoIn</Link></button>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;












