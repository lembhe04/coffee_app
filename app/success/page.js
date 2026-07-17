// "use client";

// import Link from "next/link";

// export default function SuccessPage() {
//   return (
//     <div className="min-h-screen flex justify-center items-center px-6">
//       <div className="card p-10 text-center max-w-md w-full">
//         <div className="text-6xl">
//           🎉
//         </div>

//         <h1 className="text-4xl font-bold mt-6">
//           Payment Successful
//         </h1>

//         <p className="mt-4 text-gray-600">
//           Thank you for supporting my work.
//         </p>

//         <Link
//           href="/"
//           className="btn-primary inline-block mt-8"
//         >
//           Back Home
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Link from "next/link";

export default function SuccessPage() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2500),
      setTimeout(() => setStep(3), 4200),
      setTimeout(() => setStep(4), 5500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="success-page">

      {step === 4 && (
        <Confetti
          recycle={false}
          numberOfPieces={350}
        />
      )}

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="title"
      >
        Payment Successful
      </motion.h1>

      <div className="machine">

        <div className="top" />

        <div className="nozzle" />

        {step >= 2 && (
          <motion.div
            className="coffee-stream"
            initial={{ height: 0 }}
            animate={{ height: 150 }}
            transition={{ duration: 1.8 }}
          />
        )}

        <div className="cup">

          <motion.div
            className="coffee-fill"
            initial={{ height: 0 }}
            animate={{
              height:
                step >= 3
                  ? "100%"
                  : "0%",
            }}
            transition={{ duration: 2 }}
          />

          {step >= 3 && (
            <>
              <span className="steam steam1"></span>
              <span className="steam steam2"></span>
              <span className="steam steam3"></span>
            </>
          )}
        </div>
      </div>

      <div className="status">

        {step === 0 && "Preparing Machine..."}

        {step === 1 && "Grinding Coffee Beans..."}

        {step === 2 && "Brewing Coffee..."}

        {step === 3 && "Pouring Fresh Coffee..."}

        {step === 4 && (
          <>
            <h2>Your Coffee is Ready ☕</h2>

            <p>
              Thank you for supporting my work ❤️
            </p>

            <Link href="/">
              <button className="home-btn">
                Back Home
              </button>
            </Link>
          </>
        )}

      </div>

    </main>
  );
}