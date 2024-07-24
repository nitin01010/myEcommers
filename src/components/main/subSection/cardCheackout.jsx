import React from 'react';
import { useSelector } from 'react-redux';

const CardCheckout = () => {
    const Counter = useSelector((state) => state);

    const handlePayment = async () => {
        // Load Razorpay script
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
            alert('Razorpay SDK could not be loaded. Check your internet connection.');
            return;
        };
        document.body.appendChild(script);

        script.onload = async () => {
            const options = {
                key: "rzp_live_p92CniFjb4HEq0", // Replace with your key
                amount: "100", // Example amount
                currency: "INR",
                name: "Acme Corp",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                handler: function (response) {
                    alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                },
                prefill: {
                    name: "Piyush Garg",
                    email: "youremail@example.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        };
    };

    return (
        <>
            <div className='flex flex-col gap-6 px-3 bg-[#f2f2f2]'>
                { Counter.map((item, index) => (
                    <div key={ index } className='flex bg-white pb-3 rounded-md gap-4 border flex-col lg:flex-row'>
                        <img src={ item.image } alt="" className="object-cover rounded shadow-sm w-[100%] md:w-[200px] h-[200px]" />
                        <div className='flex px-2 flex-col gap-5'>
                            <p className='text-lg font-semibold'>{ item.title }</p>
                            <p className='text-lg font-semibold'>{ item.price }</p>
                        </div>
                    </div>
                )) }
                <div className='flex gap-4 px-3 justify-end items-center'>
                    <button onClick={ handlePayment } className='shadow-sm py-2 px-2 bg-blue-700 text-white w-[200px] mb-4 rounded-md mt-3 text-lg font-semibold'>Total Pay</button>
                    <p className='text-2xl font-bold'>${
                        Counter.reduce((total, item) => total + item.price, 0)
                    }</p>
                </div>
            </div>
        </>
    );
};

export default CardCheckout;