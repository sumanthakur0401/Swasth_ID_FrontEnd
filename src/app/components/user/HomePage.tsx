"use client";

import { useEffect, useRef, useState } from "react";
import { format, parseISO } from "date-fns";

const userName = "Suman Thakur";

const treatments = [
  {
    id: 1,
    treatment: "Hypertension Management",
    doctor: "Dr. Ramesh Gupta",
    date: "2025-07-15",
  },
  {
    id: 2,
    treatment: "Diabetes Control",
    doctor: "Dr. Anjali Mehta",
    date: "2025-07-10",
  },
  {
    id: 3,
    treatment: "Physiotherapy Sessions",
    doctor: "Dr. Vikram Singh",
    date: "2025-07-12",
  },
];

export default function UserHomePage() {
  const [greeting, setGreeting] = useState("");
  const [qrUnlocked, setQrUnlocked] = useState(false);
  const [showPinInput, setShowPinInput] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [today, setToday] = useState("");
  const [countdown, setCountdown] = useState(10);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    setToday(format(new Date(), "MM/dd/yyyy"));
  }, []);

  const startCountdown = () => {
    setCountdown(10);
    countdownRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleQrClick = () => {
    if (qrUnlocked) return;
    setShowPinInput(true);
    setPin("");
    setPinError("");
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only digits and max 4 chars
    if (/^\d{0,4}$/.test(value)) {
      setPin(value);
      setPinError("");

      if (value.length === 4) {
        if (value === "0000") {
          setQrUnlocked(true);
          setShowPinInput(false);
          startCountdown();
          timeoutRef.current = setTimeout(() => {
            setQrUnlocked(false);
          }, 10000);
        } else {
          setPinError("Incorrect PIN");
          setPin("");
        }
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-cyan-100 via-blue-50 to-indigo-100 p-6 md:p-12">
      {/* Header */}
      <header className="mb-8">
        <p className="text-indigo-700 font-semibold text-lg md:text-xl">
          {greeting},
        </p>
        <h1 className="text-5xl font-extrabold text-indigo-900 drop-shadow-lg">
          {userName}
        </h1>
      </header>

      {/* Profile Section */}
      <section className="flex items-center mb-10 gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
          {userName
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-indigo-900">Profile</h2>
          <p className="text-indigo-700">Patient ID: SWA123456</p>
          <p className="text-indigo-700">Age: 32</p>
          <p className="text-indigo-700">Blood Group: B+</p>
          <p className="text-indigo-700">Today: {today}</p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Treatments */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-indigo-900">
            Current Treatments
          </h3>
          <ul className="space-y-4 max-h-72 overflow-y-auto">
            {treatments.map(({ id, treatment, doctor, date }) => (
              <li
                key={id}
                className="bg-white/60 rounded-lg p-4 shadow-md border border-white/50 hover:shadow-lg transition"
              >
                <p className="font-semibold text-indigo-900">{treatment}</p>
                <p className="text-indigo-700 text-sm">
                  Consulting Dr: {doctor}
                </p>
                <p className="text-indigo-600 text-xs mt-1">
                  Started on: {format(parseISO(date), "MM/dd/yyyy")}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* QR Code */}
        <div
          className="relative bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer"
          onClick={handleQrClick}
          title="Click to unlock QR code (PIN required)"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-900">
            Your QR Code
          </h3>

          {/* QR Code image */}
          <img
            src="/qr-codes/SUMAN2025QR.png"
            alt="User QR Code"
            className={`w-48 h-48 rounded-xl shadow-lg transition-filter duration-300 ${
              qrUnlocked ? "filter-none" : "filter blur-sm brightness-90"
            }`}
          />

          {/* PIN Input Overlay */}
          {showPinInput && !qrUnlocked && (
            <div
              className="absolute top-0 left-0 w-full h-full bg-white/90 backdrop-blur-md rounded-xl flex flex-col items-center justify-center gap-2 p-6 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <label
                className={`font-semibold mb-1 ${
                  pinError ? "text-red-600" : "text-indigo-900"
                }`}
              >
                {pinError ? "Wrong pin!!! Enter again" : "Enter PIN"}
              </label>
              <input
                type="password"
                inputMode="numeric"
                maxLength={4}
                value={pin}
                onChange={handlePinChange}
                className={`w-24 text-center text-xl rounded border p-2 focus:outline-none focus:ring-2
                ${
                  pinError
                    ? "border-red-600 focus:ring-red-600 text-red-700"
                    : "border-indigo-600 focus:ring-indigo-500 text-indigo-900"
                }
              `}
                autoFocus
              />
            </div>
          )}

          <p className="absolute bottom-4 text-sm font-medium select-none text-indigo-700">
            {qrUnlocked
              ? `QR Code visible for ${countdown} second${
                  countdown !== 1 ? "s" : ""
                }`
              : "Click to unlock (PIN required)"}
          </p>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-indigo-900">
            Recent Activity
          </h3>
          <ul className="space-y-3 text-indigo-700 max-h-72 overflow-y-auto">
            <li>Lab test results received</li>
            <li>Upcoming appointment on 07/20/2025</li>
            <li>Medication refill reminder</li>
            <li>New message from Dr. Anjali Mehta</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
