'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';


function CheckoutForm() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    return (
        <>

        <div className="checkout-form-section-two">
            <div className="container">
                <div className="checkout-form">
                    <div className="checkout-field">
                        <h4>تحقق في</h4>
                        <div className="chk-field">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="yyyy/MM/dd"
                                className="py-2"
                                placeholderText="31 Dec 2025"
                            />
                            <i className="fas fa-angle-down" />
                        </div>
                    </div>
                    <div className="checkout-field">
                        <h4>الدفع</h4>
                        <div className="chk-field">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="yyyy/MM/dd"
                                className="py-2"
                                placeholderText="31 Dec 2025"
                            />
                            <i className="fas fa-angle-down" />
                        </div>
                    </div>
                    <div className="checkout-field select-field br-0">
                        <h4>أسئلة</h4>
                        <div className="chk-field py-2">
                            <i className="fas fa-angle-down" />
                            <select>
                                <option>2 </option>
                                <option>1 </option>
                                <option>2 </option>
                                <option>3 </option>
                            </select>
                        </div>
                    </div>
                    <Link href="/contact" className="theme-btn btn-style-one"><span className="btn-title">يفحص <br />التوفر</span></Link>
                </div>
            </div>
        </div>

        </>
    )
}
export default CheckoutForm
