"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesPreview } from "./SparklesPreview";
import { CheckoutButton } from "./checkoutButton";

export default function Pricing() {
    const plans = [
        {
            title: "Free Plan",
            price: "$0",
            description: "Free for everyone",
            features: [
                { text: "AI Mock Audio Interview", available: true },
                { text: "RoadMaps", available: true },
                { text: "Techzone Post", available: true },
                { text: "AI Video Mock Interiew", available: false },
                { text: "Customize Roadmaps", available: false },
                { text: "80+ ATS Resume", available: false },
                { text: "On Demand Features", available: false },

            ],
            buttonText: "Get Started",
        },
        {
            title: "Pro Plan",
            price: "$9.99",
            description: "Advanced features for professionals",
            features: [
                { text: "AI Mock Audio Interview", available: true },
                { text: "RoadMaps", available: true },
                { text: "Techzone Post", available: true },
                { text: "AI Video Mock Interiew", available: true },
                { text: "Customize Roadmaps", available: true },
                { text: "80+ ATS Resume", available: true },
                { text: "On Demand Features", available: false },
            ],
            buttonText: "Upgrade Now",
        },
        {
            title: "Developer Plan",
            price: "$14.99",
            description: "Developer features for professionals",
            features: [
                { text: "AI Mock Audio Interview", available: true },
                { text: "RoadMaps", available: true },
                { text: "Techzone Post", available: true },
                { text: "AI Video Mock Interiew", available: true },
                { text: "Customize Roadmaps", available: true },
                { text: "80+ ATS Resume", available: true },
                { text: "On Demand Features", available: true },
            ],
            buttonText: "Beast Mode",
        },
    ];

    

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white -mt-20 pb-10">
            {/* Pricing Heading */}
            <TextGenerateEffect
                className="text-xl w-full text-center sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
                words="Affordable Pricing Plans"
            />
            <SparklesPreview />

            {/* Pricing Cards */}
            <div className="relative text-left z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-gradient-to-br from-[#0C0C0D] to-black p-8 rounded-2xl shadow-lg border border-gray-700 text-center w-80 mx-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-200">{plan.title}</h2>
                        <p className="text-5xl font-bold mt-2">{plan.price}</p>
                        <p className="text-gray-400 text-sm">per user / month</p>
                        <p className="text-gray-300 mt-3">{plan.description}</p>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white text-black font-semibold py-3 px-5 w-full mt-6 rounded-xl shadow-md hover:bg-gray-200"
                            onClick={() => handlePayment(plan.price)}
                        >
                            {plan.buttonText}
                        </motion.button>

                         {/* Checkout Button */}
                        {plan.price > 0 ? (
                            <CheckoutButton amount={plan.price} />
                        ) : (
                            <button className="bg-gray-500 text-white font-semibold py-3 px-5 w-full mt-6 rounded-xl shadow-md cursor-not-allowed">
                                Free Plan Activated
                            </button>
                        )}

                        {/* Features List */}
                        <div className="border-t text-left  border-gray-700 mt-8 pt-5">
                            <h3 className="text-lg font-semibold text-gray-200">What's Included</h3>
                            <ul className="mt-4 space-y-3 text-left">
                                {plan.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        className="flex text-left  space-x-3 "
                                    >
                                        <span className={feature.available ? "text-green-400 text-left" : "text-gray-500"}>
                                            {feature.available ? "✔️" : "⚫"}
                                        </span>
                                        <span className={feature.available ? "text-white text-left" : "text-gray-500 text-left"}>
                                            {feature.text}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
