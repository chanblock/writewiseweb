import React from 'react';
import "../styles/Page404.css";

const Page404 = () => {
    // const handleRegister = () => {
    //     const title = "Free trial";
    //     const price = '$0/month then $24';
    //     const url = `https://welby.com.au/subscribe?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}`;
    //     window.location.href = url;
    // }
    return (
        <div className="container">
    <h1 className="title">Page Out of Service</h1>
    <p className="text">We're sorry, the page you're looking for is not available at this moment. The new page is called Welby.</p>
    <p className="text">If you are already a user of writewise, you can log in with the same email and password.</p>
    <p className="text">If you have not registered yet, we invite you to do so in the <span className="highlight">sign up free</span> options or in the <span className="highlight">subscription plans</span>.</p>
    <p className="text">The page has moved to <a href="https://welby.com.au" className="link">https://welby.com.au</a></p>
</div>
        
    );
};

export default Page404;
