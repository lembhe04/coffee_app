"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex justify-center items-center px-6">
      <div className="card p-10 text-center max-w-md w-full">
        <div className="text-6xl">
          🎉
        </div>

        <h1 className="text-4xl font-bold mt-6">
          Payment Successful
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for supporting my work.
        </p>

        <Link
          href="/"
          className="btn-primary inline-block mt-8"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

