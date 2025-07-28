"use client";
import React from "react";
import { testimonials } from '../../data/projects'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
    return (
        <>
            <section id="testimonials" className="bg-gray-100 py-12 px-4 text-center section-padding">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">What Our Clients Say</h3>
                <div className="max-w-3xl mx-auto">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        slidesPerView={1}
                    >
                        {testimonials?.map((t, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white shadow-md rounded-xl p-6 mb-10 cursor-pointer">
                                    <p className="italic text-gray-600 text-lg  hover:text-blue-600 transition-colors duration-300">"{t.quote}"</p>
                                    <div className="rating flex justify-center gap-1 my-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400' : 'text-gray-300'
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.158c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.158a1 1 0 00.95-.69l1.286-3.957z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <h4 className="mt-4 font-semibold text-gray-800">- {t.name}</h4>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Testimonial;