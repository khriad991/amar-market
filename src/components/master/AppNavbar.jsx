'use client'
import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";

const AppNavbar = () => {
    return (
        <>
            <div className="container-fluid text-white p-2 bg-success">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-6">
                         <span>
                           <span className="f-12">
                            <i className="bi bi-envelope"></i> Support@PlanB.com
                           </span>
                             <span className="f-12 mx-2">
                            <i className="bi bi-envelope"></i> 01774688159 </span>
                         </span>
                        </div>
                        <div className="col-md-6">
                        <span className="float-end">
                            <span className="bodySmal mx-2">
                                <i className="bi bi-whatsapp"></i>
                            </span>
                            <span className="bodySmal mx-2">
                                <i className="bi bi-youtube"></i>
                            </span>
                            <span className="bodySmal">
                                <i className="bi bi-facebook"></i>
                            </span>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar collapseOnSelect expand="lg" className="bg-white sticky-top shadow-sm py-3">
                <Container>
                    <Navbar.Brand href="">
                        <img className="img-fluid" src="/images/plainb-logo.svg"
                             alt="" width="96px" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="btn ms-2 btn-light position-relative"
                                  href="/">
                                <i className="bi bi-house"></i> Home </Link>
                            <Link href="/cart" type="button" className="btn ms-2 btnlight position-relative">
                                <i className="bi text-dark bi-bag"></i> Cart <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">0</span>
                            </Link>
                            <Link href="/wish" type="button" className="btn ms-4 btnlight position-relative">
                                <i className="bi text-dark bi-heart"></i> Wish <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">0</span>
                            </Link>
                            <Link href="/orders" type="button" className="btn ms-4 btnlight position-relative">
                                <i className="bi text-dark bi-truck"></i> Order </Link>
                        </Nav>
                        <Nav>
                            <div className="input-group">
                                <input className="form-control" type="search"
                                       placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-dark" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" style={{ width:24,height:24 }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>

                            <Link type="button" className="btn ms-3 btn-success d-flex" href="/profile">Profile</Link>
                            <Link type="button" className="btn ms-3 btn-success d-flex" href="/profile">Logout</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default AppNavbar;