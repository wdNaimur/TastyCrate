import React, { useEffect, useState } from "react";
import SingleChefCard from "./SingleChefCard";
import SectionHeading from "../UI/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ChefCard = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("/data/ChefCard.json")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);

  return (
    <>
      <SectionHeading subHeading="EXPERTS" heading="Discover Our Chef" />
      <div className="container px-4 mx-auto">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {chefData.map((chef, i) => (
            <SwiperSlide key={i}>
              <SingleChefCard chef={chef} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ChefCard;
