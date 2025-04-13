import React from "react";

const NewPage = ({login}) => {
  return (
    <div>
      <div className="flex flex-col content-center justify-center w-full pt-8 bg-white">
        <div className="flex items-center content-center justify-center w-full text-center">
          <div className="w-24">
            <img src="https://turn2opinion.com/images/icon-review.png" alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-center sm:text-4xl md:text-3xl lg:text-4xl lg:px-52">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-green-500">
              See How It Works In 3 Simple Steps
            </span>
          </h3>
          <p className="pb-12 text-xl text-center lg:px-40">
            Turn2Opinion research panel community provides a very simple and
            easy way to engage you as our new community member. You just need to
            follow a few small steps to be a part of our global community to
            earn rewards with free registration.
          </p>
          <div className="flex-row justify-between w-full lg:px-10 lg:flex">
            <div className="items-center content-center text-center">
              <div >
                <img src="https://turn2opinion.com/images/step1.png" className="p-4 mx-auto bg-red-600 rounded-full w-30" alt="" />
              </div>
              <div><h4 className="text-2xl font-semibold text-black">Sign Up For Free</h4>
              <p className="text-neutral-600">Register with your Active email id and contact number.</p></div>
            </div>
            <div className="items-center content-center text-center">
              <div>
                <img src="https://turn2opinion.com/images/step2.png" className="p-4 mx-auto bg-red-600 rounded-full w-30" alt="" />
              </div>
              <div><h4 className="text-2xl font-semibold text-black">Participate In Surveys</h4><p className="text-neutral-600">Register with your Active email id and contact number.</p> </div>
            </div>
            <div className="items-center content-center text-center">
              <div>
                <img src="https://turn2opinion.com/images/step3.png" className="p-4 mx-auto bg-red-600 rounded-full w-30" alt="" />
              </div>
              <div><h4 className="text-2xl font-semibold text-black">Get rewards</h4><p className="text-neutral-600">Acheive your threshold to claim the rewards via paypal</p> </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-6 pb-6 text-center">
            <button onClick={login} className="p-3 px-5 font-semibold text-black border-2 border-orange-400 rounded-full hover:text-white w-fit bg-gradient-to-b hover:from-red-500 hover:to-blue-500">
              REGISTER NOW
            </button>
          </div>
    </div>
  );
};

export default NewPage;
