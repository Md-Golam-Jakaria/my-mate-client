import { useForm } from "react-hook-form"
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className="text-center">
            <div className="my-12">
                <h3 className="capitalize font-bold text-4xl">Welcome Back</h3>
                <p className="font-samibold text-2xl">World number #1 matrimony site</p>
            </div>
            <div className="login-form w-3/4 mx-auto grid grid-cols-2 my-10">
                <div className="image-full bg-[#FFC5B2]  rounded-l-2xl " >
                    <img src="../../../src/assets/images/login-page-image.png" alt="" />
                </div>
                <div className="bg-violet-200 flex justify-center items-center rounded-r-2xl ">
                    <div className="w-3/4">
                        <h3 className="font-bold text-2xl mb-8 ">We always love to see you</h3>
                        <form className="text-left " onSubmit={handleSubmit(onSubmit)}>
                            <div className="my-2">
                                <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span> Email:</label>
                                <input className="input input-bordered w-full my-1" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500" >Email is required!</span>}
                            </div>
                            <div className="my-2">
                                <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span> Password:</label>
                                <input className="input input-bordered w-full my-2" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500" >Password is required!</span>}
                            </div>
                            <input className=" btn w-full bg-gradient-to-b from-primary to-secondary text-white capitalize my-4" type="submit" value='Sign in' />
                        </form>
                        <p className="mb-4"> Or Login with</p>
                        <button className="btn w-full capitalize my-2"> <FaFacebook className="text-2xl" /> Sign in with Facebook</button>
                        <button className="btn w-full capitalize my-2"> <FaTwitter className="text-2xl" />  Sign in with Twitter</button>
                        <button className="btn w-full capitalize my-2"> <FaGoogle className="text-2xl" /> Sign in with Google</button>
                        <p className="mt-8">Do not Have an account? <Link to='/register' className="text-secoundary underline underline-offset-2" > Create Account </Link>  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;