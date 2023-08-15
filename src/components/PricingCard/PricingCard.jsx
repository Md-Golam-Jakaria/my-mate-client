import { FaArrowRight } from "react-icons/fa";

const PricingCard = (props) => {
    return (
        <div className="">
            <div className="mb-5 mx-auto text-center md:w-2/4">
                <h1 className="text-3xl font-bold my-5">{props.headerTitle}</h1>
                <p>{props.description}</p>
            </div>
            <div className="my-20">
                <div className="flex justify-center gap-10">
                    <div className="card w-96 bg-base-100 shadow-xl border-2 hover:border-2 hover:border-secondary ease-in duration-200">
                        <div className="card-body">
                            <h2 className="card-title"><span className="text-secoundary font-bold text-5xl">$0.00</span>/month</h2>
                            <p>Free Membership</p>
                            <hr className="my-4 " />
                            <div className="card-actions justify-start">
                                <li>Match, Chat & Meet</li>
                                <li>5 Super Likes a week</li>
                                <li>Hide Advertisements</li>
                                <li className="text-slate-300">1 Free Boost a month</li>
                                <li className="text-slate-300">New Top Pinks every day</li>
                                <li className="text-slate-300">Message before matching</li>
                                <li className="text-slate-300">Prioritised Likes</li>
                                <li className="text-slate-300">See the likes you&apos;ve sent in the last 7 days.</li>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2 hover:border-2 hover:border-secondary ease-in duration-200">
                        <div className="card-body">
                            <h2 className="card-title"><span className="text-secoundary font-bold text-5xl">$12</span>/month</h2>
                            <p>Free Membership</p>
                            <hr className="my-4 " />
                            <div className="card-actions justify-start">
                                <li>Match, Chat & Meet</li>
                                <li>5 Super Likes a week</li>
                                <li>Hide Advertisements</li>
                                <li>1 Free Boost a month</li>
                                <li>New Top Pinks every day</li>
                                <li>Message before matching</li>
                                <li>Prioritised Likes</li>
                                <li>See the likes you&apos;ve sent in the last 7 days.</li>
                            </div>
                            <button className="bg-secoundary flex items-center gap-5 text-white font-bold p-3 rounded justify-center my-2 w-full">Subscribe now <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;