'use client'
import React, {useState} from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";
import {Tab, Tabs} from "react-bootstrap";
import Link from "next/link";
import useSWR from "swr";
import {Fetcher} from "../../../utility/Fetcher";
import ProductSkeleton from "@/skeleton/product-skeleton";

const ProductComponent = () => {
    const [remark ,setRemark] = useState('new')

    // mutate for recall data
    let {data, isLoading , mutate} = useSWR(`/api/product/list-by-remark?remark=${remark}`,Fetcher) // mutate for recall data
    const listByRemarkRequest =async (selectedWork) => {
        setRemark(selectedWork)
        await mutate();

    }


    return (
        <div>
            <div className="section">
                <div className="container-fluid py-5 bg-white">
                    <div className="row">
                        <h1 className="headline-4 text-center my-2 p-0">Our Products</h1>
                        <span className="bodySmal mb-3 text-center">Explore a World of Choices Across Our Most Popular</span>
                        <div className="col-12">
                            <Tabs onSelect={listByRemarkRequest} defaultActiveKey="new" id="uncontrolledtab-example" className="nav nav-pills p-3 border-bottom-0 justify-content-center mb-3">
                                <Tab eventKey="new" title="New">
                                    {
                                        (()=>{
                                            if(isLoading) return <ProductSkeleton/>
                                            if(data) return (
                                                <div className="container">
                                                    <div className="row">
                                                        {
                                                            data['data'].map((item,i)=>{
                                                                let price=<p className="bodyMedium text-dark my-1">Price: ${item['price']} </p>
                                                                if(item['discount']===true){
                                                                    price=<p className="bodyMedium  text-dark my-1">Price:<strike> ${item['price']} < /strike> ${item['discount_price']} </p>
                                                                }
                                                                return(
                                                                    <div key={i} className="col-lg-5-cols col-md-5-cols p-2  col-sm-6 col-12">
                                                                        <Link href={`/details?id=${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                                            <img className="w-100 rounded-top-2" src={item['image']} alt="product_image"/>
                                                                            <div className="card-body">
                                                                                <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                                                {price}
                                                                                <StarRatings rating={parseFloat(item['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                )})
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })()
                                    }
                                </Tab>
                                <Tab eventKey="trending" title="Trending">
                                    {
                                        (()=>{
                                            if(isLoading) return <ProductSkeleton/>
                                            if(data)return (
                                                <div className="container">
                                                    <div className="row">
                                                        { data['data'].map((item, i)=> {
                                                            let price = <p className="bodyMedium text-dark my-1">Price: ${item['price']} </p>
                                                            if (item['discount'] === true) { price = <p className="bodyMedium text-dark my-1"> Price: <strike> ${item['price']} < /strike> ${item['discountPrice']} </p> }
                                                            return(
                                                                <div key={i} className="col-lg-5-cols col-md-5-cols p-2 col-sm-6 col-12">
                                                                    <Link href={`/details?id=${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                                        <img className="w-100 rounded-top-2" src={item['image']} alt="product_image" />
                                                                        <div className="card-body">
                                                                            <p className="bodySmal text-secondary my-1">
                                                                                {item['title']}</p> {price}
                                                                            <StarRatings rating={parseFloat(item['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        })()
                                    }
                                </Tab>
                                <Tab eventKey="popular" title="Popular">
                                    {
                                        (()=>{
                                            if(isLoading) return <ProductSkeleton/>
                                            if(data) return (
                                                <div className="container">
                                                    <div className="row">
                                                        {
                                                            data['data'].map((item, i)=> {
                                                                let price = <p className="bodyMedium text-dark my-1">Price: ${item['price']} </p>
                                                                if (item['discount'] === true) { price = <p className="bodyMedium text-dark my-1">Price: <strike>${item['price']} < /strike> ${item['discountPrice']} </p> }
                                                                return (
                                                                    <div key={i} className="col-lg-5-cols col-md-5-cols p-2 col-sm-6 col-12">
                                                                        <Link href={`/details?id=${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                                            <img className="w-100 rounded-top-2" src={item['image']} alt="product_image" />
                                                                            <div className="card-body">
                                                                                <p className="bodySmal text-secondary my-1">
                                                                                    {item['title']}</p> {price}
                                                                                <StarRatings rating={parseFloat(item['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                )})
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })()
                                    }
                                </Tab>
                                <Tab eventKey="top" title="Top">
                                    {
                                        (()=>{
                                            if(isLoading) return <ProductSkeleton/>
                                            if(data) return (
                                                <div className="container">
                                                    <div className="row">
                                                        { data['data'].map((item, i)=>{
                                                            let price = <p className="bodyMedium text-dark my-1">Price: ${item['price']} </p>
                                                            if (item['discount'] === true) { price = <p className="bodyMedium text-dark my-1">Price: <strike>${item['price']} < /strike> ${item['discountPrice']} </p> }
                                                            return (
                                                                <div key={i} className="col-lg-5-cols col-md-5-cols p-2 col-sm-6 col-12">
                                                                    <Link href={`/details?id=${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                                        <img className="w-100 rounded-top-2" src={item['image']} alt="product_image" />
                                                                        <div className="card-body">
                                                                            <p className="bodySmal text-secondary my-1">{item['title']}</p> {price}
                                                                            <StarRatings rating={parseFloat(item['star'])}
                                                                                     starRatedColor="red"
                                                                                     starDimension="15px"
                                                                                     starSpacing="2px"
                                                                            />
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            )})
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })()
                                    }
                                </Tab>
                                <Tab eventKey="special" title="Special">
                                    {
                                        (()=>{
                                            if(isLoading) return <ProductSkeleton/>
                                            if(data)return (
                                                <div className="container">
                                                    <div className="row"> { data['data'].map((item, i) => {
                                                        let price = <p className="bodyMedium text-dark my-1">Price: ${item['price']} </p>
                                                        if (item['discount'] === true) { price = <p className="bodyMedium text-dark my-1">Price: <strike>${item['price']} < /strike> ${item['discountPrice']} </p> }
                                                        return (
                                                            <div key={i} className="col-lg-5-cols col-md-5-cols p-2 col-sm-6 col-12">
                                                                <Link href={`/details?id=${item['_id']}`} Legal Content className="card shadow-sm h-100 rounded-3 bg-white">
                                                                    <img className="w-100 rounded-top-2" src={item['image']} alt="product_image"/>
                                                                    <div className="card-body">
                                                                        <p className="bodySmal text-secondary my-1">{item['title']}</p> {price}
                                                                        <StarRatings rating={parseFloat(item['star'])}
                                                                                     starRatedColor="red"
                                                                                     starDimension="15px"
                                                                                     starSpacing="2px"
                                                                        />
                                                                </div>
                                                            </Link>
                                                        </div> ) }) } </div>
                                                </div>
                                            )
                                        })()
                                    }
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductComponent;