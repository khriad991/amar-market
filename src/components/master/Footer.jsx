'use client'
import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <div className="section-bottom shadow-sm bg-white">
                <div className="container py-5">
                    <div className="row"> <div className="col-md-4">
                        <h1 className="bodyMedium">Legals</h1> <p className="my-2">
                        <Link className="nav-link" href={"/legals/about"}>About</Link>
                    </p>
                        <p className="my-2">
                            <Link className="nav-link" href={"/legals/refund"}>Refund Policy</Link>
                        </p>
                        <p className="my-2">
                            <Link className="nav-link" href={"/legals/privacy"}>Privacy Policy</Link>
                        </p>
                        <p className="my-2"> Slider Skeleton <Link className="nav-link" href={"/legals/terms"}>Terms</Link> </p>
                    </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium">Information</h1>
                            <p className="my-2"> <Link className="nav-link" href={"/legals/buy"}>How to buy</Link> </p>
                            <p className="my-2"> <Link className="nav-link" href={"/legals/contact"}>Contact</Link> </p>
                            <p className="my-2"> <Link className="nav-link" href={"/legals/complain"}>Complain</Link> </p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium">About</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                            <img alt="" className="w-100" src="/assets/images/pay.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-3 text-center">
                <p className="text-white bodySmal">All Rights Reserved </p>
            </div>
        </div>
    );
};

export default Footer;