import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const CheckOut = () => {

    const service = useLoaderData()
    const { _id, title, price, img } = service
    const { user } = useContext(AuthContext)
    const handleConfirmOrder = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = user?.email
        const date = form.date.value
        console.log(name, email, date);

        const info = {
            customerName: name,
            email: email,
            img,
            date: date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(info);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)


        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>



            <form onSubmit={handleConfirmOrder}>

                <div className="card-body grid grid-cols-1 lg:grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' className="input input-bordered" defaultValue={user?.displayName} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' className="input input-bordered" defaultValue={user?.email} />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={price} className="input input-bordered" />

                    </div>


                    <div className="form-control mt-6 btn btn-primary btn-block">
                        <input type="submit" value="Confirm Order" />
                    </div>
                </div>


            </form>
        </div>

    );
};

export default CheckOut;