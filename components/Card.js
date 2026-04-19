export default function Card({ title, value, color }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                    rounded-2xl p-5 shadow-lg transition hover:shadow-xl">

      <p className="text-sm text-gray-400">{title}</p>

      <h2 className={`text-2xl font-bold mt-2 ${color}`}>
        ₹{value}
      </h2>
    </div>
  );
}