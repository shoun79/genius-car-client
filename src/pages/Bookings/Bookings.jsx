import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    const url = `https://genius-car-server-lilac-nu.vercel.app/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                }
                else {
                    //valid use case  
                    //logout  then navigate
                    navigate('/')
                }
            })
    }, [url]);

    const hendleDelete = _id => {
        const process = confirm('Are you sure');
        if (process) {
            fetch(`https://genius-car-server-lilac-nu.vercel.app/bookings/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== _id);
                        setBookings(remaining)
                        alert('Success');
                    }
                })
        }
    }

    const hendleBookingConfirm = _id => {
        console.log(_id);
        const process = confirm('Are you sure');
        if (process) {
            fetch(`https://genius-car-server-lilac-nu.vercel.app/bookings/${_id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: 'confirm' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        const remainingBooking = bookings.filter(booking => booking._id !== _id);
                        const updatedBooking = bookings.find(booking => booking._id === _id);
                        updatedBooking.status = 'confirm';
                        setBookings([updatedBooking, ...remainingBooking]);
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='text-5xl'>Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                hendleDelete={hendleDelete}
                                hendleBookingConfirm={hendleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;