
import { FaKey, FaNotesMedical, FaShieldAlt } from 'react-icons/fa';
import "./Features.css"
const Features = () => {
    return (
        <div className='py-20'>
            <h2 className='font-semibold text-3xl text-center md:w-2/4 mx-auto mb-12 ' >Lorem dolor amet consectetur adipiscing. Commode acceptor bandit torpor meanness egoists mathis. ucibus laces ultrices acned seed.</h2>
            <div className='flex justify-center items-center gap-10'>
                <div className='image-design'>
                    <img className='pl-56' src="../../../src/assets/images/feature-couple.png" alt="" />
                </div>
                <div>
                    <div className='flex items-center gap-3 font-bold text-secoundary border-b-2 text-xl mb-5 '>
                        <FaShieldAlt></FaShieldAlt>
                        <p> 100% Screened Profiles</p>
                    </div>
                    <div className='flex items-center gap-3 font-bold text-secoundary border-b-2 text-xl mb-5 '>
                        <FaNotesMedical></FaNotesMedical>
                        <p> Verification by Personal Visit</p>
                    </div>
                    <div className='flex items-center gap-3 font-bold text-secoundary border-b-2 text-xl mb-5 '>
                        <FaKey></FaKey>
                        <p> Strong Privacy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;