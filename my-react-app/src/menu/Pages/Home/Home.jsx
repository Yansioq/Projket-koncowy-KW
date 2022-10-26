import React from 'react';
import './Home.scss'
import CarouselFunction from "./Carousel/Carousel-function.jsx";

export function Home() {
    return (
        <div className="Home">
            <main className="ad">
                <section className="ad-logo">
                    <p className="logo2-1">Your</p>
                    <p className="logo2-2">beauty</p>
                </section>
                <p className="ad-text">Where beauty doesn't have one definition</p>
            </main>
            <section className='latest'>
                <p className='latest-posts'>Opinions</p>
                <CarouselFunction/>
            </section>
        </div>
    );
}