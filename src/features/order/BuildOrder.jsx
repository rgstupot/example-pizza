function BuildOrder() {
  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-col gap-5 p-2 bg-red-700 text-red-50 border-2 border-red-950 shadow-md shadow-red-950">
        <h1 className="text-xl font-bold">Build Your Pizza</h1>
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold">Size</h2>
          <ul className="flex gap-6">
            <li>
              <input
                type="radio"
                id="small"
                name="size"
                value="small"
                className="hidden peer"
              />
              <label
                htmlFor="small"
                className="p-2 bg-slate-50 text-slate-900 rounded-md uppercase flex items-center peer-checked:bg-red-500"
              >
                small
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="medium"
                name="size"
                value="medium"
                className="hidden peer"
              />
              <label
                htmlFor="medium"
                className="p-2 bg-slate-50 text-slate-900 rounded-md uppercase flex items-center peer-checked:bg-red-500"
              >
                medium
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BuildOrder;
