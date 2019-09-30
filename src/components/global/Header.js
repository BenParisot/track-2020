import React from 'react';
import { GiVote } from 'react-icons/gi';
import './header.scss';

export default function Header() {
    return (
        <section className="header-container">
            <GiVote className="header-icon" size={82} />
            <h1 className="header-title">Track<br/> 2020</h1>
        </section>
    )
}
