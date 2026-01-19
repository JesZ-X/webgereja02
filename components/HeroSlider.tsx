"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const slides = [
  {
    img: "/images/test-1.jpg",
    title: "Selamat Datang di GBKP RG Cililitan",
    desc: "Menjadi Gereja yang Bertumbuh dalam Kasih",
  },
  {
    img: "/images/test-2.jpg",
    title: "Koinonia, Marturia, Diakonia",
    desc: "Pelayanan untuk memuliakan Tuhan",
  },
  {
    img: "/images/test-3.jpg",
    title: "Bersama Bertumbuh",
    desc: "Dalam kasih dan pengharapan",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[65vh] xl:h-[60vh] pb-24 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className="h-full">
            {/* WRAPPER */}
            <div className="relative w-full h-full max-h- [720px]">
              {/* IMAGE */}
              <Image
                src={s.img}
                alt={s.title}
                width={1920}
                height={1080}
                priority={i === 0}
                className="w-full h-full object-cover object-center md:object-[center_20%]"
              />

              {/* OVERLAY + TEXT */}
              <div className="absolute inset-0 bg-black/55 flex items-center justify-center text-center px-6">
                <div
                  className="translate-y- [-1rem] sm:translate-y- [-2rem] md:translate-y- [-3rem] 
                             max-w-4xl mx-auto px-2"
                  data-aos="zoom-in"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-lg text-gray-200">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
