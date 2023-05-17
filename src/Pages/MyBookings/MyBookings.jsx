import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SingleBooking from './SingleBooking';
import { useNavigate } from 'react-router-dom';


const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        }
        )
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBooking(data);
                }
                else {
                    navigate('/')
                }


            })
    }, [])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const rest = booking.filter(book => book._id !== id)
                        setBooking(rest)
                    }
                })
        }
    }
    const handleConfirmBooking = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = booking.filter(book => book._id !== id)
                    const updatedOne = booking.find(book => book._id === id)
                    updatedOne.status = 'confirm'
                    const newBooking = [updatedOne, ...remaining]
                    setBooking(newBooking)
                }
            })
    }

    return (
        <div>
            <h1>{booking.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
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
                            booking.map(book => <SingleBooking
                                handleConfirmBooking={handleConfirmBooking}
                                handleDelete={handleDelete}
                                book={book}></SingleBooking>)
                        }


                    </tbody>



                </table>
            </div>


        </div>
    );
};

export default MyBookings;