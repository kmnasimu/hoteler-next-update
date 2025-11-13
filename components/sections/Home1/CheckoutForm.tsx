'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

export default function CheckoutForm() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState('2');

  return (
    <div className="checkout-form-section-two">
      <div className="container">
        <div className="checkout-form">
          <div className="checkout-field">
            <h4>Check-In</h4>
            <div className="chk-field">
              <DatePicker
                selected={checkInDate}
                onChange={(date: Date | null) => setCheckInDate(date)}
                dateFormat="yyyy/MM/dd"
                className="py-2"
                placeholderText="31 Dec 2025"
              />
              <i className="fas fa-angle-down" />
            </div>
          </div>
          <div className="checkout-field">
            <h4>Check-Out</h4>
            <div className="chk-field">
              <DatePicker
                selected={checkOutDate}
                onChange={(date: Date | null) => setCheckOutDate(date)}
                dateFormat="yyyy/MM/dd"
                className="py-2"
                placeholderText="31 Dec 2025"
              />
              <i className="fas fa-angle-down" />
            </div>
          </div>
          <div className="checkout-field select-field br-0">
            <h4>Quests</h4>
            <div className="chk-field py-2">
              <i className="fas fa-angle-down" />
              <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <Link href="/page-rooms" className="theme-btn btn-style-one">
            <span className="btn-title">Check Availability</span>
          </Link>
        </div>
      </div>
    </div>
  );
}


