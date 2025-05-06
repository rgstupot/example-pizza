import CallOrder from "../ui/CallOrder";
import Hours from "../ui/Hours";
import Intro from "../ui/Intro";
import Location from "../ui/Location";

function Main() {
  return (
    <div className="flex flex-col gap-4 xl:mx-[25rem] lg:mx-[15rem] md:mx-[10rem]">
      <CallOrder />
      <Intro />
      <div className="flex flex-col justify-center items-center gap-4 ">
        <Hours />
        <Location />
      </div>
    </div>
  );
}

export default Main;
