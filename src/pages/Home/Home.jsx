import FeaturedProfiles from "../../components/FeaturedProfiles/FeaturedProfiles";
import Features from "../../components/Features/Features";
import PricingCard from "../../components/PricingCard/PricingCard";
import Reviews from "../../components/Reviews/Reviews";
import SuccessStoryBanner from "../../components/SuccessStoryBanner/SuccessStoryBanner";


const Home = () => {
    return (
        <div>
            <FeaturedProfiles></FeaturedProfiles>
            <Features></Features>
            <SuccessStoryBanner></SuccessStoryBanner>
            <PricingCard headerTitle='Membership Plans' description=" Upgrade your plan as per your customized requirements. With a paid membership, you can seamlessly connect with your prospects and get more responses. Here are some key benefits: " />
            <Reviews></Reviews>
        </div>
    );
};

export default Home;