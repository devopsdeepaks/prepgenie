"use client";
import React from "react";
import { motion } from "framer-motion";
import { SpotlightN } from "@/components/spotlight-new";

const pricingPlans = [
  {
    name: "Free Plan",
    price: "$0",
    features: ["Task Management", "Data Encryption", "Deadline Alerts"],
  },
  {
    name: "Pro Plan",
    price: "$12",
    features: [
      "Task Management",
      "Data Encryption",
      "Deadline Alerts",
      "Collaboration Tools",
    ],
  },
  {
    name: "Advanced Plan",
    price: "$19",
    features: [
      "Task Management",
      "Data Encryption",
      "Deadline Alerts",
      "Collaboration Tools",
      "Custom Workflows",
      "Real-Time Sync",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Black & White Spotlight Effect */}
      <SpotlightN
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(255, 255, 255, 0.12) 0, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.08) 0, rgba(255, 255, 255, 0.03) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.05) 0, rgba(255, 255, 255, 0.02) 80%, transparent 100%)"
      />

      {/* Pricing Cards Section */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-8">Affordable Pricing Plans</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-[#111] p-6 rounded-2xl shadow-lg w-80 border border-gray-600 flex flex-col justify-between min-h-[320px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className="text-xl font-bold my-4">{plan.price}/month</p>
                <ul className="text-left space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Button with consistent alignment */}
              <button className="mt-auto px-6 py-2 bg-white text-black hover:bg-gray-200 rounded-lg">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
