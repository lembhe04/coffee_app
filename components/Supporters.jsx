export default function Supporters() {
  const supporters = [
    {
      name: "Rahul",
      amount: 100,
    },
    {
      name: "Priya",
      amount: 50,
    },
    {
      name: "Amit",
      amount: 10,
    },
  ];

  return (
    <div className="card p-8">
      <h2 className="text-3xl font-bold text-center">
        ❤️ Recent Supporters
      </h2>

      <div className="mt-8 space-y-4">
        {supporters.map((supporter, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-200 pb-4"
          >
            <h3 className="font-semibold">
              {supporter.name}
            </h3>

            <span className="font-bold text-amber-600">
              ₹{supporter.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}