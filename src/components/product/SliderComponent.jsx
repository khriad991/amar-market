'use client'
import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import useSWR from "swr";
import {Fetcher} from "../../../utility/Fetcher";
import Link from "next/link";
import SliderSkeleton from "@/skeleton/slider-skeleton";

const SliderComponent = () => {
    const [index ,setIndex] = useState(0)
    const handleSelect = (selectedIndex,e) => {
        setIndex(selectedIndex);
    }
    const handlePrev = () => {
        setIndex(index - 1 < 0 ? data['data'].length - 1 : index - 1);
    };
    const handleNext = () => {
        setIndex(index + 1 >= data['data'].length ? 0 : index + 1);
    };

        // client site data fetch
    const {data,isLoading} = useSWR('/api/product/slider-list',Fetcher)

    if(isLoading) return <SliderSkeleton/>

    if(data) return (
        <Carousel controls={false} data-bs-theme="light" activeIndex={index} onSelect={handleSelect} className="hero-bg">
            {
                data['data'].map((item,i)=>{
                    return (
                        <Carousel.Item key={i}>
                            <div className="container-fluid ">
                                <div className="row px-5 justify-content-center">
                                    <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                        <h1 className="headline-1 fw-bolder  text-white">{item['title'] + " " +  item?.id} </h1>
                                        <p className="h2 fw-bolder">{item['price']}</p>
                                        <p className="text-dark">{item['short_des']}</p>
                                        <Link href={`/details/${item['product_id']}`} className="btn text-white btn-dark mt-1 px-5">Buy Now</Link>
                                    </div>
                                    <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                        <img src={item['image']} className="w-100" alt="..."/>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    )
                })
            }

            <button onClick={handlePrev} className="carousel-control-prev btn rounded-5" type="button">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button onClick={handleNext} className="carousel-control-next btn" type="button">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </Carousel>
    )
};

export default SliderComponent;