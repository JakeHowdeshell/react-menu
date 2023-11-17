import { useState } from "react";
import React from "react";
import Header from './Header';
import Footer from './Footer';
import BreakfastPage from '../pages/BreakfastPage';
import DinnerPage from '../pages/DinnerPage';
import HomePage from '../pages/HomePage';
import LunchPage from '../pages/LunchPage';

export default function Container() {
    const [ currentPage, setCurrentPage ] = useState('HomePage');

    const renderPage = () => {
        if (currentPage === 'HomePage') {
            return <HomePage />
        }
        if (currentPage === 'BreakfastPage') {
            return <BreakfastPage />
        }
        if (currentPage === 'LunchPage') {
            return <LunchPage />
        }
            return <DinnerPage />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="">
            <div className="">
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
                <main className="">{renderPage()}</main>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}
