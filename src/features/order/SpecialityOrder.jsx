import { useParams } from "react-router-dom";

function SpecialityOrder() {
  const { pizzaName } = useParams();

  return <div>{pizzaName}</div>;
}

export default SpecialityOrder;
