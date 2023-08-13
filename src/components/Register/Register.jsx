import { useForm } from "react-hook-form"
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <div className="text-center">
            <div className="my-5 md:my-12">
                <h3 className="capitalize font-bold text-3xl md:text-4xl">Create your Account</h3>
                <p className="font-samibold text-xl md:text-2xl">Create account and find your mate with us!</p>
            </div>
            <div className="register-form md:w-3/4 mx-auto grid md:grid-cols-2 md:mb-20">
                <div className="image-full bg-[#FFC5B2]  md:rounded-l-2xl " >
                    <img className="h-full" src="../../../src/assets/images/register-page-image.png" alt="" />
                </div>
                <div className="bg-violet-200 flex justify-center items-center md:rounded-r-2xl py-10">
                    <div className="md:w-3/4 w-5/6">
                        <h3 className="font-bold text-2xl mb-8 ">We always love to see you</h3>
                        <form className="text-left " onSubmit={handleSubmit(onSubmit)}>
                            <div className="my-1">
                                <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span> Create Profile for:</label>
                                <select className="input input-bordered w-full my-2" {...register("owner", { required: true })}>
                                    <option value="Self">Self</option>
                                    <option value="Sister">Sister</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Aunty">Aunty</option>
                                    <option value="Uncle">Uncle</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.owner && <span className="text-red-500" >Owner is required!</span>}
                            </div>

                            <div className="md:flex gap-3">
                                <div className="my-1">
                                    <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span> First Name:</label>
                                    <input className="input input-bordered w-full my-1" {...register("firstName", { required: true })} />
                                    {errors.firstName && <span className="text-red-500" >First name is required!</span>}
                                </div>
                                <div className="my-1">
                                    <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span> Last Name:</label>
                                    <input className="input input-bordered w-full my-1" {...register("lastName", { required: true })} />
                                    {errors.lastName && <span className="text-red-500" >Last name is required!</span>}
                                </div>
                            </div>
                            <div className="my-1">
                                <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span> Email:</label>
                                <input className="input input-bordered w-full my-1" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500" >Email is required!</span>}
                            </div>
                            <div className="my-1">
                                <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span> Mobile Number:</label>
                                <input className="input input-bordered w-full my-1" {...register("number", { required: true })} />
                                {errors.number && <span className="text-red-500" >Mobile number is required!</span>}
                            </div>
                            <div className="flex gap-3">
                                <div className="my-1">
                                    <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span>Gender:</label>
                                    <select className="input input-bordered w-full my-2" {...register("gender", { required: true })}>
                                        <option value="Self">Male </option>
                                        <option value="Sister">Female</option>
                                        <option value="Brother">Others</option>
                                    </select>
                                    {errors.gender && <span className="text-red-500" >Gender is required!</span>}
                                </div>
                                <div className="my-1">
                                    <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span> Date of Birth:</label>
                                    <input type="date" className="input input-bordered w-full my-2" {...register("date", { required: true })} />
                                    {errors.date && <span className="text-red-500" > Date is required!</span>}
                                </div>
                            </div>
                            <div className="md:flex gap-3">
                                <div className="my-1">
                                    <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span>Country:</label>
                                    <select className="input input-bordered w-full my-2" {...register("country", { required: true })}>
                                        <option value="Self">Bangladesh </option>
                                        <option value="Sister">India</option>
                                        <option value="Brother">Pakistan</option>
                                    </select>
                                    {errors.country && <span className="text-red-500" >Country is required!</span>}
                                </div>
                                <div className="my-1">
                                    <label className="text-xl font-semibold"> Referral Code:</label>
                                    <input className="input input-bordered w-full my-2" {...register("referral")} />
                                </div>
                            </div>
                            <div className="md:flex gap-3">
                                <div className="my-1">
                                    <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span>Password:</label>
                                    <input type="password" className="input input-bordered w-full my-2" {...register("password", { required: true })} />
                                    {errors.password && <span className="text-red-500" >Password is required!</span>}
                                </div>
                                <div className="my-1">
                                    <label className="text-xl font-semibold"><span className="text-slate-600 text-lg">*</span>Re-Type Password:</label>
                                    <input type="password" className="input input-bordered w-full my-2" {...register("password", { required: true })} />
                                    {errors.password && <span className="text-red-500" >Password is required!</span>}
                                </div>
                            </div>
                            <input className=" btn w-full bg-gradient-to-b from-primary to-secondary text-white capitalize my-4" type="submit" value="Create Account" />
                        </form>
                        <p className="mb-4"> Or Login with</p>
                        <button className="btn w-full capitalize my-1"> <FaFacebook className="text-2xl" /> Sign in with Facebook</button>
                        <button className="btn w-full capitalize my-1"> <FaTwitter className="text-2xl" />  Sign in with Twitter</button>
                        <button className="btn w-full capitalize my-1"> <FaGoogle className="text-2xl" /> Sign in with Google</button>
                        <p className="mt-8">Already Have an account? <Link to='/sign-in' className="text-secoundary underline underline-offset-2" > Login </Link>  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;