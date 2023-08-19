import './HomeBanner.css'
import { useForm } from "react-hook-form"

const HomeBanner = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className=" header-banner flex justify-end items-center " >
            {/* <div className="flex-1">
                <img src="../../../src/assets/images/Hero.png" alt="" />
            </div> */}
            <div className="mx-5 w-3/6 p-10">
                <h1 className="text-6xl font-bold">Find your mate with us</h1>
                <div className=' glass px-10 py-3 rounded-2xl mt-10 drop-shadow-2xl '>
                    <h2 className='text-xl font-bold text-center my-10'>Create your profile for your perfect match!</h2>
                    <form className="text-left " onSubmit={handleSubmit(onSubmit)}>
                        <div className="my-1">
                            <label className="text-md font-semibold"><span className="text-slate-600 text-lg">*</span> Create Profile for:</label>
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
                                <label className="text-md font-semibold"><span className="text-slate-600 text-lg">*</span> First Name:</label>
                                <input className="input input-bordered w-full my-1" {...register("firstName", { required: true })} />
                                {errors.firstName && <span className="text-red-500" >First name is required!</span>}
                            </div>
                            <div className="my-1">
                                <label className="text-md font-semibold"><span className="text-slate-600 text-lg">*</span> Last Name:</label>
                                <input className="input input-bordered w-full my-1" {...register("lastName", { required: true })} />
                                {errors.lastName && <span className="text-red-500" >Last name is required!</span>}
                            </div>
                        </div>
                        <div className="my-1">
                            <label className="text-md font-semibold"><span className="text-slate-600 text-lg">*</span> Email:</label>
                            <input className="input input-bordered w-full my-1" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500" >Email is required!</span>}
                        </div>
                        <div className="my-1">
                            <label className="text-md font-semibold"><span className="text-slate-600 text-lg">*</span> Mobile Number:</label>
                            <input className="input input-bordered w-full my-1" {...register("number", { required: true })} />
                            {errors.number && <span className="text-red-500" >Mobile number is required!</span>}
                        </div>
                        <div className="flex gap-3">
                            <div className="my-1">
                                <label className="text-md font-semibold"><span className="text-slate-600 text-lg">*</span>Gender:</label>
                                <select className="input input-bordered w-full my-2" {...register("gender", { required: true })}>
                                    <option value="Self">Male </option>
                                    <option value="Sister">Female</option>
                                    <option value="Brother">Others</option>
                                </select>
                                {errors.gender && <span className="text-red-500" >Gender is required!</span>}
                            </div>
                            <div className="my-1">
                                <label className="text-md font-semibold"><span className="text-slate-600 text-lg">*</span> Date of Birth:</label>
                                <input type="date" className="input input-bordered w-full my-2" {...register("date", { required: true })} />
                                {errors.date && <span className="text-red-500" > Date is required!</span>}
                            </div>
                        </div>
                        <div className="md:flex gap-3">
                            <div className="my-1">
                                <label className="text-md font-semibold"><span className="text-slate-600 text-lg">*</span>Country:</label>
                                <select className="input input-bordered w-full my-2" {...register("country", { required: true })}>
                                    <option value="Self">Bangladesh </option>
                                    <option value="Sister">India</option>
                                    <option value="Brother">Pakistan</option>
                                </select>
                                {errors.country && <span className="text-red-500" >Country is required!</span>}
                            </div>
                            <div className="my-1">
                                <label className="text-md font-semibold"> Referral Code:</label>
                                <input className="input input-bordered w-full my-2" {...register("referral")} />
                            </div>
                        </div>
                        <div className="md:flex gap-3">
                            <div className="my-1">
                                <label className="text-md font-semibold"><span className="text-slate-600 text-lg">*</span>Password:</label>
                                <input type="password" className="input input-bordered w-full my-2" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500" >Password is required!</span>}
                            </div>
                            <div className="my-1">
                                <label className="text-md font-semibold"><span className="text-slate-600 text-lg">*</span>Re-Type Password:</label>
                                <input type="password" className="input input-bordered w-full my-2" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500" >Password is required!</span>}
                            </div>
                        </div>
                        <input className=" btn w-full bg-gradient-to-b from-primary to-secondary text-white capitalize my-4" type="submit" value="Create Account" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;