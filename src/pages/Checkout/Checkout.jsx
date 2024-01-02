import React, { useContext } from 'react';
import CheckoutBanner from '../Shared/CheckoutBanner/CheckoutBanner';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service;

    const { user } = useContext(AuthContext);
    const hendleOrderConfirm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            name,
            date,
            email,
            img,
            service_id: _id,
            price: price,
            service: title,
        }

        fetch('https://genius-car-server-lilac-nu.vercel.app/bookings', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('success')
                }
            })
    }
    return (
        <div>
            <CheckoutBanner></CheckoutBanner>
            <div>
                <h2 className='text-center text-3xl'>Book Service: {title}</h2>
                <form onSubmit={hendleOrderConfirm} className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue={user?.displayName} type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input defaultValue={user?.email} type="email" name='email' placeholder="email" className="input input-bordered" required readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} placeholder="Due Amount" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-warning" type="submit" value="Order Confirm" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;