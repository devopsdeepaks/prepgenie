import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req) {
    try {
        const { amount, currency } = await req.json();

        // Initialize Razorpay Instance
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        // Create Order
        const options = {
            amount: amount * 100, // Amount in paise (₹1 = 100 paise)
            currency: currency || "INR",
            receipt: `receipt_${Math.floor(Math.random() * 1000000)}`,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
