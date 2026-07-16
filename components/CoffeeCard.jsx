export default function CoffeeCard({
  amount,
  emoji,
  selected,
  onClick,
}) {
  return (
    <div
      onClick={() => onClick(amount)}
      className={`coffee-card ${
        selected === amount ? "active" : ""
      }`}
    >
      <div className="text-5xl">{emoji}</div>

      <h3 className="mt-4 text-2xl font-bold">
        ₹{amount}
      </h3>

      <p className="mt-2 text-gray-500">
        Buy {amount / 10} coffee
      </p>
    </div>
  );
}