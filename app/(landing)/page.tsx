import React from 'react';

function LandingPage() {
    const className = "p-2 px-4 m-4  inline-block bg-gray-900 text-white"
    return (
        <div>
            Landing page
            <a href='sign-in' className={className}>Login</a>
            <a href='sign-up' className={className}>Signup</a>
        </div>
    );
}

export default LandingPage;