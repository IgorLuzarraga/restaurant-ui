"use client"

import { useState, useEffect } from "react";

const CountDown = () => {

    let difference = +new Date(`10/10/2023`) - +new Date();
    const [delay, setDelay] = useState(difference);

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const m = Math.floor((difference / 1000 / 60) % 60);
    const s = Math.floor((difference / 1000) % 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setDelay(delay - 1);
        }, 1000);

        if (delay === 0) {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [delay]);

    return (
        <span className="font-bold text-5xl text-yellow-300">
            {d}:{h}:{m}:{s}
        </span>
    );
};

export default CountDown;


// import Countdown from "react-countdown"

// const today = new Date();
// // Create a new date object with the same date as today
// const endingDate = new Date(today);

// // Add one day to the endingDate
// endingDate.setDate(endingDate.getDate() + 1);

// const CountDown = () =>
//     <Countdown className="font-bold text-5xl text-purple-500" date={endingDate} />