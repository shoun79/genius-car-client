import React from 'react';

const SmallBanner = () => {
    return (
        <div className='bg-black mb-8 text-white  h-[250px] flex flex-col lg:flex-row items-center justify-around py-8 rounded-lg '>
            <div className='flex items-center'>
                <p className='text-2xl mr-4'>📅 </p>
                <div>
                    <p>We are open monday-friday</p>
                    <p className='text-2xl'>7.00 am - 9.00 pm</p>
                </div>
            </div>
            <div className='flex items-center'>
                <p className='text-2xl mr-4'> 📞  </p>
                <div>
                    <p>Have a Question</p>
                    <p className='text-2xl'>+278 73843 8374</p>
                </div>
            </div>
            <div className='flex items-center'>
                <p className='text-2xl mr-4'> 🔂 </p>
                <div>
                    <p>Need a repair? our address</p>
                    <p className='text-2xl'>Liza street, New York</p>
                </div>
            </div>

        </div>

    );
};

export default SmallBanner;