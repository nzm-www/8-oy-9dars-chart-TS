

const RadialChart = ({ value, label, color }: { value: number; label: string; color: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg className="w-24 h-24">
          <circle
            className="text-gray-300"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="36"
            cx="48"
            cy="48"
          />
          <circle
            className={`text-${color}`}
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="36"
            cx="48"
            cy="48"
            strokeDasharray="226.2"
            strokeDashoffset={226.2 - (value / 100) * 226.2}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
          {value}%
        </div>
      </div>
      <p className={`mt-2 text-${color}`}>{label}</p>
    </div>
  );
};

export default function Fotter() {
  const data = [
    { label: 'Стратегик фикрлаш', value: 85, color: 'green-500' },
    { label: 'Натижага йўналганлик', value: 75, color: 'green-400' },
    { label: 'Ўзгаришларни бошқариш', value: 33, color: 'black' },
    { label: 'Лидерлик', value: 100, color: 'blue-500' },
    { label: 'Ўз-ўзини ривожлантириш', value: 98, color: 'green-500' },
    { label: 'Коммуника-тивлик', value: 45, color: 'text-orange-500' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Компетенциялар</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <RadialChart key={item.label} value={item.value} label={item.label} color={item.color} />
        ))}
        
      </div>
    </div>
  );
}
