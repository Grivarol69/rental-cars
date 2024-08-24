import { ButtonAddCar } from "./components/ButtonAddCar";
import { ListCars } from "./components/ListCars";

export default function CarsManagerPage() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage your car</h2>
        <ButtonAddCar />
      </div>
      <ListCars />
    </div>
  );
}
