import React from 'react';
import Pic4 from '../imgs/pic (4).png';
import Pic1 from '../imgs/pic (1).png';
import Pic2 from '../imgs/pic (2).png';
import Pic3 from '../imgs/pic (3).png';

const Rentals = () => {
  return (
    <div className="font-[Montserrat] px-10 md:px-20 py-16 space-y-16 bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <img src={Pic4} alt="Uber Rentals" className="w-[370px] rounded-lg shadow-lg" />
        <div className="max-w-lg text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Uber Rentals</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Book Rentals to save time with one car and driver for your multi-stop trips.
          </p>
          <a href="#" className="text-blue-600 hover:underline">Learn more</a>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        <img src={Pic1} alt="Uber Intercity" className="w-[370px] rounded-lg shadow-lg" />
        <div className="max-w-lg text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Uber Intercity</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Book Intercity to head outstation anytime in convenient and affordable cars.
          </p>
          <a href="#" className="text-blue-600 hover:underline">Learn more</a>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Focused on safety, wherever you go</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4">
          <img src={Pic2} alt="Safety Commitment" className="w-40 h-40 rounded-md" />
          <p className="text-xl font-medium text-gray-900">Our commitment to your safety</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            With every safety feature and every standard in our Community Guidelines, we are committed
            to helping to create a safe environment for our users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-blue-600 text-sm">
            <a href="#" className="hover:underline">Read about our Community Guidelines</a>
            <a href="#" className="hover:underline">See all safety features</a>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4">
          <img src={Pic3} alt="Safety" className="w-40 h-40 rounded-md" />
          <p className="text-xl font-medium text-gray-900">Stay safe wherever you go</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your safety is our priority. With multiple safety features, we ensure secure rides every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-blue-600 text-sm">
            <a href="#" className="hover:underline">View all cities</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
