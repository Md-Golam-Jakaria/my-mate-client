import { Link } from "react-router-dom";

const Header = () => {
    const menus = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "Active Members", path: "/active-member" },
        { id: 3, name: "Pricing", path: "/pricing" },
        { id: 4, name: "Success Stories", path: "/success-stories" },
        { id: 5, name: "Contact Us", path: "/contact-us" }
    ];


    return (
        <div className="navbar bg-base-100 border-b-2 border-slate-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* Mobile menu  */}
                        {
                            menus.map((menu) => <li className="px-3" key={menu.id}> <Link to={menu.path} > {menu.name} </Link> </li>)
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Real Mate</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* Desktop menu  */}
                    {
                        menus.map((menu) => <li className="px-1 font-semibold" key={menu.id}> <Link to={menu.path} > {menu.name} </Link> </li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/sign-in' className="px-3 text-black font-semibold">Sign In</Link>
                <Link to='/register' className="btn bg-gradient-to-b from-primary to-secondary text-white capitalize ">Register</Link>
            </div>
        </div>
    );
};

export default Header;