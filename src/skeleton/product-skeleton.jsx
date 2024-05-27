"use client"
import React from 'react';
import Skeleton from "react-loading-skeleton";

const ProductSkeleton = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    Array.from({length:10}).map((_,index)=>(
                        <div key={index} className="col-lg-5-cols col-md-5-cols p-2 col-sm-6 col12">
                            <div className="card shadow-sm h-100 rounded-3 bg-white">
                                <img className="w-100" src="/assets/images/ImagePlaceholder.svg" />
                                <div className="card-body">
                                    <Skeleton count={3} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductSkeleton;