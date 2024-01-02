import React from 'react';
import person from './../../../assets/images/about_us/person.jpg'
import parts from './../../../assets/images/about_us/parts.jpg'

const About = () => {

    return (
        <div className="hero  bg-base-200 my-16 py-14">
            <div className="hero-content flex-col lg:flex-row space-y-16">
                <div className='lg:w-1/2 relative'>
                    <img src={person} alt='' className="max-w-sm rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src={parts} alt='' className="w-3/5 max-w-sm rounded-lg shadow-2xl absolute top-1/2 right-5  border-8 border-white" />
                </div>
                <div className='lg:w-1/2'>
                    <p className='text-2xl font-bold text-orange-600'>About Us</p>
                    <h1 className="text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-3">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div >
    );
};

export default About;