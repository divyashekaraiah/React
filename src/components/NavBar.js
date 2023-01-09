import React from "react";
import { A } from 'hookrouter';
export const NavBar = () => {
    return (
        <div>
            <h1>My Website</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '20px',
                border: '1px solid grey'
            }}>
            <A href="/">Home</A>
            <A href="/about">About</A>
            <A href="/contacts/1234">Contacts</A>

            </div>
            
        </div>
    )
}
