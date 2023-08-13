import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="bg-slate-800 text-white p-4 mt-2">
            <div className="grid grid-cols-3">
                <div>
                    <h1 className="text-2xl font-bold uppercase"> Real Mate </h1>
                </div>
                <div className="">
                    <Link className="" to='#'> <p className="py-2 hover:text-secoundary">Home </p> </Link>
                    <Link className="" to='#'> <p className="py-2 hover:text-secoundary">Active members </p> </Link>
                    <Link className="" to='#'> <p className="py-2 hover:text-secoundary">Pricings </p> </Link>
                    <Link className="" to='#'> <p className="py-2 hover:text-secoundary">Success Stories </p> </Link>
                    <Link className="" to='#'> <p className="py-2 hover:text-secoundary">Contact us </p> </Link>
                </div>
                <div className="">
                    <Link className="" to='#'> <p className="py-2 hover:text-secoundary">Privacy & Policy </p> </Link>
                    <Link className="" to='#'> <p className="py-2 hover:text-secoundary">Careers </p> </Link>
                    <Link className="" to='#'> <p className="py-2 hover:text-secoundary">Terms & Conditions </p> </Link>
                    <Link className="" to='#'> <p className="py-2 hover:text-secoundary">Faq </p> </Link>
                </div>
            </div>
            <hr />
            <div className="py-5 text-right">
                <p>@ 2022 Real meat. All right reserved.</p>
            </div>
        </section>
    );
};

export default Footer;