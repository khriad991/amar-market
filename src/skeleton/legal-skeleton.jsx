import React from 'react';
import Skeleton from "react-loading-skeleton";

const LegalSkeleton = () => {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="card p-4">
                        {
                            Array.from({length: 20}).map((_,index) =>(
                                <Skeleton count={1} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalSkeleton;