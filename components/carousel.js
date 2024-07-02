import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Carous() {
  return (
    <div className="h-56 sm:h-64 md:h-96">
      <Carousel slideInterval={3000}>
        <Image width={1000} height={1000} src="/homepagecarousel/img1.jpg" alt="..." />
        <Image width={1000} height={1000} src="/homepagecarousel/img2.jpg" alt="..." />
        <Image width={1000} height={1000} src="/homepagecarousel/img1.jpg" alt="..." />
        <Image width={1000} height={1000} src="/homepagecarousel/img2.jpg" alt="..." />
      </Carousel>
    </div>
  );
}