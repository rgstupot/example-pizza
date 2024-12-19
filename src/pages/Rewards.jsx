import { CiPizza } from "react-icons/ci";

function Rewards() {
  return (
    <div className="flex flex-col gap-5 px-4 py-2">
      <div className="flex justify-center">
        <h1 className="text-3xl italic font-extrabold uppercase">
          pizza reward points
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="p-2 border-double border-4 border-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim
          nobis quisquam delectus assumenda voluptatem, distinctio omnis,
          recusandae sunt eius provident sit deserunt natus vero? Est
          repudiandae sapiente illum aspernatur!
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center p-2">
        <CiPizza className="h-[3rem] w-[3rem] text-red-700" />
        <CiPizza className="h-[3rem] w-[3rem] text-red-700" />
        <CiPizza className="h-[3rem] w-[3rem] text-red-700" />
        <CiPizza className="h-[3rem] w-[3rem] text-red-700" />
        <CiPizza className="h-[3rem] w-[3rem] text-red-700" />
        <CiPizza className="h-[3rem] w-[3rem] text-red-700" />
        <CiPizza className="h-[3rem] w-[3rem] text-red-700" />
        <CiPizza className="h-[3rem] w-[3rem] text-red-700" />
        <CiPizza className="h-[3rem] w-[3rem] text-red-700" />
        <CiPizza className="h-[3rem] w-[3rem] text-red-700" />
      </div>
    </div>
  );
}

export default Rewards;
