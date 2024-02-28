import { StaticImageData } from "next/image";
import car from "../../public/CAR.jpeg";

interface Car {
    img: StaticImageData;
    model: string;
    year: number;
    status: "AVAILABLE" | "DISPOSABLE";
  }
  
const fakeData: Car[] = [
    { img: car, model: "Mini Cooper", year: 2022, status: "AVAILABLE"},
    { img: car, model: "Toyota Corolla", year: 2020, status: "DISPOSABLE"},
    { img: car, model: "Honda Civic", year: 2019, status: "AVAILABLE"},
    { img: car, model: "Ford Mustang", year: 2021, status: "DISPOSABLE"},
    { img: car, model: "Tesla Model S", year: 2023, status: "AVAILABLE"},
];
  
export default fakeData;