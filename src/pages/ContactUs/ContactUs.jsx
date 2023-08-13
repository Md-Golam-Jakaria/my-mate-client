import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=" my-20 w-3/4 mx-auto ">
            <div className="text-center w-2/4 mx-auto">
                <h1 className="text-4xl font-bold">How we can help you</h1>
                <p className="text-lg mt-4" >Fill out the form and a member from our team will get back to you with 24 hours, of here more way to get in touch</p>
            </div>
            <div className="flex justify-around items-start mt-10">
                <div>
                    <div className="mt-12">
                        <FaWhatsapp className="text-4xl p-2 text-[#FA4A6F] bg-[#FCE0ED] rounded-full" />
                        <h4 className="font-semibold mt-2">Chat us on Whatsapp:</h4>
                        <p>Mon-Fri from 8:00 am to 5:00pm</p>
                        <h4 className="font-semibold mt-2">+00 123 4567</h4>
                    </div>
                    <div className="mt-12">
                        <FaWhatsapp className="text-4xl p-2 text-[#FA4A6F] bg-[#FCE0ED] rounded-full" />
                        <h4 className="font-semibold mt-2">Chat us on Whatsapp:</h4>
                        <p>Mon-Fri from 8:00 am to 5:00pm</p>
                        <h4 className="font-semibold mt-2">+00 123 4567</h4>
                    </div>
                    <div className="mt-12">
                        <FaWhatsapp className="text-4xl p-2 text-[#FA4A6F] bg-[#FCE0ED] rounded-full" />
                        <h4 className="font-semibold mt-2">Chat us on Whatsapp:</h4>
                        <p>Mon-Fri from 8:00 am to 5:00pm</p>
                        <h4 className="font-semibold mt-2">+00 123 4567</h4>
                    </div>
                </div>
                <div className="bg-[#EEFEFF] p-10 rounded-2xl">
                    <h1 className="text-2xl font-bold text-center my-10" >Always we did love to here from you</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="my-5">
                            <label> Your name:</label>
                            <input className="input input-bordered w-full my-1" placeholder="Write your name here" {...register("name", { required: true })} />
                        </div>
                        <div className="my-5">
                            <label> Email address:</label>
                            <input className="input input-bordered w-full my-1" placeholder="Write your email here" {...register("name", { required: true })} />
                        </div>
                        <div className="my-5">
                            <label> Subject:</label>
                            <input className="input input-bordered w-full my-1" placeholder="Write your subject here" {...register("name", { required: true })} />
                        </div>
                        <div className="my-5">
                            <label> Description:</label>
                            <textarea className="textarea textarea-bordered w-full my-1" rows="5" placeholder="Write your description here..." {...register("name", { required: true })} />
                        </div>
                        <input className="btn w-full bg-secondary text-white capitalize my-4" type="submit" value='Send Now' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;