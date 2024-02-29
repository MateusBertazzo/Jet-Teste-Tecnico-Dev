import { StaticImageData } from "next/image";
import car from "../../public/CAR.jpeg";

interface Car {
    img: StaticImageData;
    model: string;
    year: number;
    status: "AVAILABLE" | "DISPOSABLE";
    reservation: string;
    stars: number;
  }
  
const fakeData: Car[] = [
    { img: car, model: "Mini Cooper", year: 2022, status: "AVAILABLE", reservation: "11/07", stars: 5},
    { img: car, model: "Mini Cooper", year: 2022, status: "AVAILABLE", reservation: "11/07", stars: 5},
    { img: car, model: "Mini Cooper", year: 2022, status: "AVAILABLE", reservation: "11/07", stars: 5},
    { img: car, model: "Mini Cooper", year: 2022, status: "AVAILABLE", reservation: "11/07", stars: 5},
    { img: car, model: "Mini Cooper", year: 2022, status: "AVAILABLE", reservation: "11/07", stars: 5},
];
  
export default fakeData;