const Reviews = () => {
    return (
        <div className="my-20" >
            <h1 className="font-bold text-2xl text-center my-10 capitalize">What our members say</h1>
            <div className="grid grid-cols-3 gap-20 px-20">
                <div className="text-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <p className=" text-center " >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo facilis reiciendis eaque incidunt similique unde.</p>
                    <div className="flex items-center gap-3 justify-center my-5 " >
                        <img className="w-[45px]" src="../../../src/assets/images/review.png" alt="" />
                        <p className="font-bold">Rayn Xoss</p>
                    </div>
                </div>
                <div className="text-center ">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <p className=" text-center " >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo facilis reiciendis eaque incidunt similique unde.</p>
                    <div className="flex items-center gap-3 justify-center my-5 " >
                        <img className="w-[45px]" src="../../../src/assets/images/review.png" alt="" />
                        <p className="font-bold">Rayn Xoss</p>
                    </div>
                </div>
                <div className="text-center ">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <p className=" text-center " >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo facilis reiciendis eaque incidunt similique unde.</p>
                    <div className="flex items-center gap-3 justify-center my-5 " >
                        <img className="w-[45px]" src="../../../src/assets/images/review.png" alt="" />
                        <p className="font-bold">Rayn Xoss</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;