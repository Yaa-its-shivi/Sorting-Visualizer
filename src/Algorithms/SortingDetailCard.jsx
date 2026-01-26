const SortDetailsCard = ({
  name = "Bubble Sort",
  description,
  best,
  average,
  worst,
  space,
  stable,
  inPlace,
  category,
  useCases
}) => (
  <div className="flex flex-col gap-4">
    
    {/* Title */}
    <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>

    {/* Description */}
    <p className="text-sm text-gray-700 leading-relaxed">
      {description}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">Category: {category}</span>
      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Stable: {stable ? "Yes" : "No"}</span>
      <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">In-Place: {inPlace ? "Yes" : "No"}</span>
    </div>

    {/* Complexity Table */}
    <div className="border rounded-lg p-3 bg-gray-50">
      <h3 className="text-sm font-semibold text-gray-800 mb-2">Time Complexity</h3>
      <div className="text-sm flex flex-col gap-1">
        <p><strong>Best:</strong> {best}</p>
        <p><strong>Average:</strong> {average}</p>
        <p><strong>Worst:</strong> {worst}</p>
        <p><strong>Space:</strong> {space}</p>
      </div>
    </div>

    {/* Use Cases */}
    <div className="border rounded-lg p-3 bg-gray-50">
      <h3 className="text-sm font-semibold text-gray-800 mb-2">Where it's Useful</h3>
      <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
        {useCases.map((u, idx) => (
          <li key={idx}>{u}</li>
        ))}
      </ul>
    </div>

  </div>
);


export default SortDetailsCard;