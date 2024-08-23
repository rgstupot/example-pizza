function CallOrder() {
  return (
    <div className="my-5 grid grid-cols-2 items-center gap-2 mx-2 xl:flex xl:justify-center">
      <button className="uppercase bg-red-700 p-1 text-slate-50 hover:bg-red-600 hover:font-semibold outline-none xl:w-1/3">
        call
      </button>
      <button className="uppercase bg-red-700 p-1 text-slate-50 hover:bg-red-600 hover:font-semibold outline-none xl:w-1/3">
        order online
      </button>
    </div>
  );
}

export default CallOrder;
