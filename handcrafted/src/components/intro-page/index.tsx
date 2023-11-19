import React from 'react';

const Hero = () => {
    return (
        <div className="bg-cover h-full" style={{
            backgroundImage: `url("/images/background.svg")`,
            marginLeft: '0',
          }}>
            <div className="grid grid-cols-4 h-full p-8 mb-2 bg-gray-600 mt-0">
            <h1 className="font-bold underline text-white font-heading text-4xl" style={{marginTop: '50'}}>
                  You are Welcome to Handcrafted Haven
                </h1>
              <div className="border-white bg-black bg-opacity-40 border-solid border-2 max-w-md mt-24 p-8 rounded-2xl col-span-2">
                <h1 className="font-bold underline text-white font-heading">
                  You are Welcome to Handcrafted Haven
                </h1>
                <p className="text-white text-opacity-100 mt-4 font-body">
                  Handcrafted Haven is an innovative web application that aims to
                  provide a platform for artisans and crafters to showcase and sell
                  their unique handcrafted items. It serves as a virtual marketplace,
                  connecting talented creators with potential customers who appreciate
                  the beauty and quality of handmade products.
                </p>
              </div>
              <div className="border-white border-solid border-2 h-44 p-8 rounded-2xl bg-black bg-opacity-40 col-span-2 ml-8 mt-24 transition ease-in-out delay-150 hover:bg-accent hover:-translate-y-1 hover:scale-110 duration-300">
                <h1 className="text-center text-white mt-10 font-bold font-heading">
                  The Home of Artisans
                </h1>
              </div>
              <div className="border-white bg-black bg-opacity-40 max-w-md border-solid border-2 rounded-2xl mt-4 mb-2 p-8 col-span-2">
                <p className="text-white font-body">
                  Handcrafted Haven aims to revolutionize the way handcrafted items are discovered,
                  appreciated, and acquired. By providing a digital platform for artisans to showcase
                  their creativity and connect with a broader audience, the web application fosters a
                  thriving community of passionate creators and conscious consumers.
                  With its user-friendly features, secure e-commerce capabilities, and emphasis
                  on customization and community engagement, Handcrafted Haven is set to become the go-to
                  destination for those seeking unique, handcrafted treasures.
                </p>
              </div>
            </div>
          </div>
          
    );
}

export default Hero;