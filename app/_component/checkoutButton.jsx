"use client";
import { useState } from "react";

export const CheckoutButton = ({amount}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    async function handlePayment() {
        setLoading(true);

        // Call API to create order
        const res = await fetch("/api/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: Number(amount) * 100, currency: "INR" }),
 // Dynamic price
        });

        const data = await res.json();
        if (!data.orderId) {
            alert("Failed to create order. Try again.");
            setLoading(false);
            return;
        }

        // Initialize Razorpay Checkout
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Public key
            amount: data.amount,
            currency: data.currency,
            name: "PrepGenie",
            description: `Payment for ${amount / 100} INR plan`,
            order_id: data.orderId,
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: "Harshit Bhardwaj",
                email: "harshit@example.com",
                contact: "9876543210",
            },
            theme: { color: "#3399cc" },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
        setLoading(false);
    }

    return (
        <button
            onClick={handlePayment}
            disabled={loading}
            className="bg-white text-black font-semibold py-3 px-5 w-full mt-6 rounded-xl shadow-md hover:bg-gray-200"
        >
            {loading ? "Processing..." : "Proceed to Pay"}
        </button>
    );
}
