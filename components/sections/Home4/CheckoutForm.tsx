'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';


function CheckoutForm() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    return (
        <>

        <div className="checkout-form-section v2">
            <div className="auto-container">
                <div className="checkout-form">
                    <div className="checkout-field">
                        <h6>Check in</h6>
                        <div className="chk-field">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="yyyy/MM/dd"
                                className="py-2"
                                placeholderText="20 June, 2025"
                            />
                            <i className="fa fa-calendar" />
                        </div>
                    </div>
                    <div className="checkout-field">
                        <h6>Check out</h6>
                        <div className="chk-field">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="yyyy/MM/dd"
                                className="py-2"
                                placeholderText="20 June, 2025"
                            />
                            <i className="fa fa-calendar" />
                        </div>
                    </div>
                    <div className="checkout-field br-0">
                        <h6>Room</h6>
                        <div className="chk-field">
                            <i className="fa fa-angle-down" />
                            <select>
                                <option>Standard Room Size </option>
                                <option>Standard Room Size </option>
                                <option>Standard Room Size </option>
                                <option>Standard Room Size </option>
                            </select>
                        </div>
                    </div>
                    <Link href="/" className="theme-btn btn-style-one"><span className="btn-title">check now</span></Link>
                </div>
            </div>
        </div>

        </>
    )
}
export default CheckoutForm
