"use client"
import React from 'react';
import Skeleton from "react-loading-skeleton";

const FeaturesSkeleton = () => {
    return (
        <div className="container section">
            <div className="row">
                {
                    Array.from({length:4}).map((_,index)=>(
                        <div key={index} className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <img className="w-100"
                                                 src="/assets/images/ImagePlaceholder.svg" />
                                        </div>
                                        <div className="col-8">
                                            <Skeleton count={3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturesSkeleton;