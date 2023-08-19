import FeaturedProfiles from "../../components/FeaturedProfiles/FeaturedProfiles";
import Features from "../../components/Features/Features";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import PricingCard from "../../components/PricingCard/PricingCard";
import Reviews from "../../components/Reviews/Reviews";
import SuccessStoryBanner from "../../components/SuccessStoryBanner/SuccessStoryBanner";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className="md:w-2/4 mx-auto my-20">
                <h1 className=" my-4 w-4/6 text-2xl font-bold">We bringing people together with our platform in very easy way</h1>
                <div className="grid grid-cols-3 gap-10">
                    <div>
                        <img className="w-12 my-5" src="../../../src/assets/images/signup.svg" alt="" />
                        <h2 className="text-2xl font-bold capitalize my-5">Sign up</h2>
                        <p>Register for free & put up your Matrimony Profile</p>
                    </div>
                    <div>
                        <img className="w-12 my-5" src="../../../src/assets/images/connect.svg" alt="" />
                        <h2 className="text-2xl font-bold capitalize my-5">Connect</h2>
                        <p>Select & Connect with Matches you like</p>
                    </div>
                    <div>
                        <img className="w-12 my-5" src="../../../src/assets/images/intaract.svg" alt="" />
                        <h2 className="text-2xl font-bold capitalize my-5">Interact</h2>
                        <p>Become a Premium Member & Start a Conversation</p>
                    </div>
                </div>
            </div>
            <FeaturedProfiles></FeaturedProfiles>
            <Features></Features>
            <SuccessStoryBanner></SuccessStoryBanner>
            <PricingCard headerTitle='Membership Plans' description=" Upgrade your plan as per your customized requirements. With a paid membership, you can seamlessly connect with your prospects and get more responses. Here are some key benefits: " />
            <Reviews></Reviews>
        </div>
    );
};

export default Home;