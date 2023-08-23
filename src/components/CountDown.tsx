"use client"

import Countdown from "react-countdown"

const today = new Date();
// Create a new date object with the same date as today
const endingDate = new Date(today);

// Add one day to the endingDate
endingDate.setDate(endingDate.getDate() + 1);

const CountDown = () =>
    <Countdown className="font-bold text-5xl text-purple-500" date={endingDate} />

export default CountDown