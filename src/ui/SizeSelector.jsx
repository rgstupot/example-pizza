function SizeSelector({ sizes }) {
  return (
    <ul className="flex gap-6">
      {sizes.map((size, i) => (
        <li key={i}>
          <input
            type="radio"
            id={size}
            name="size"
            value={size}
            className="hidden peer"
          />
          <label
            htmlFor={size}
            className="p-2 bg-slate-50 text-slate-900 rounded-md uppercase flex items-center peer-checked:bg-green-700 peer-checked:text-green-50 peer-checked:font-bold cursor-pointer peer-checked:ring-green-700 peer-checked:ring-4 hover:bg-slate-200 hover:font-semibold"
          >
            {size}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default SizeSelector;
