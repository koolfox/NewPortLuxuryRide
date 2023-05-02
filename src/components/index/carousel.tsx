import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Cta from "./cta";
import slide1 from "../../../public/la0.jpg";
import slide2 from "../../../public/la2.jpg";
import slide3 from "../../../public/la3.jpg";

export default function Slider() {
  return (
    <>
      <Carousel showThumbs={false} showStatus={false}>
        <div className="h-80 md:h-screen md:max-h-[60vh]">
          <Image src={slide1} alt="." className="opacity-50" />
          <span className="fixed top-[5%] left-[5%] right-[5%] md:top-[10%] md:left-[10%] md:right-[10%]">
            <p className="text-xs md:text-2xl md:font-bold">Welcome</p>
            <p className="text-xs md:text-6xl font-bold ">BOOK A LUXURY CAR</p>
            <p className="text-xs mt-5 md:mt-10 md:text-xl">
              We can provide a safe and comfortable journey. Our Luxury Cars are
              driven by our experienced drivers. You can choose any of our
              luxury cars and book your seat.
            </p>
            <Cta text="Book Now" href="/booking" />
            <Cta text="Learn More" href="/pricing" />
          </span>
        </div>
        <div className="h-80 md:h-screen md:max-h-[60vh]">
          <Image src={slide2} alt="." className="opacity-50" />
          <span className="absolute top-[5%] left-[5%] right-[5%] md:top-[10%] md:left-[10%] md:right-[10%]">
            <p className="text-xs md:text-2xl md:font-bold">Welcome</p>
            <p className="text-xs md:text-6xl font-bold ">BOOK A LUXURY CAR</p>
            <p className="text-xs mt-5 md:mt-10 md:text-xl">
              We can provide a safe and comfortable journey. Our Luxury Cars are
              driven by our experienced drivers. You can choose any of our
              luxury cars and book your seat.
            </p>
            <Cta text="Book Now" href="/booking" />
            <Cta text="Learn More" href="/pricing" />
          </span>
        </div>
        <div className="h-80 md:h-screen md:max-h-[60vh]">
          <Image src={slide3} alt="." className="opacity-50" />
          <span className="absolute top-[5%] left-[5%] right-[5%] md:top-[10%] md:left-[10%] md:right-[10%]">
            <p className="text-xs md:text-2xl md:font-bold">Welcome</p>
            <p className="text-xs md:text-6xl font-bold ">BOOK A LUXURY CAR</p>
            <p className="text-xs mt-5 md:mt-10 md:text-xl">
              We can provide a safe and comfortable journey. Our Luxury Cars are
              driven by our experienced drivers. You can choose any of our
              luxury cars and book your seat.
            </p>
            <Cta text="Book Now" href="/booking" />
            <Cta text="Learn More" href="/pricing" />
          </span>
        </div>
      </Carousel>
    </>
  );
}
