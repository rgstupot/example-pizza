function ToppingSelector({ topping }) {
  return (
    <ul className="flex gap-5">
      <li>
        <input
          type="checkbox"
          id={topping}
          name={topping}
          value={topping}
          className="hidden peer"
        />
        <label
          htmlFor={topping}
          className="p-2 bg-slate-50 text-slate-900 rounded-md uppercase flex items-center peer-checked:bg-green-700 peer-checked:text-green-50 peer-checked:font-bold cursor-pointer peer-checked:ring-green-700 peer-checked:ring-4 hover:bg-slate-200 hover:font-semibold"
        >
          {topping}
        </label>
      </li>
    </ul>
  );
}

export default ToppingSelector;
