import CallOrder from "../ui/CallOrder";
import Hours from "../ui/Hours";
import Intro from "../ui/Intro";
import Location from "../ui/Location";

function Main() {
  return (
    <div className="flex flex-col gap-4">
      <CallOrder />
      <Intro />
      <div className="flex flex-col justify-center items-center gap-4 xl:flex-row xl:gap-[15rem]">
        <Hours />
        <Location />
      </div>
    </div>
  );
}

export default Main;
