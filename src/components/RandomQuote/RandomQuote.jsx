import React, { useState } from "react";
import "./RandomQuote.css";
import twitter_icon from "../assets/new-twitter-logo-x-icon-black-background_1017-45427.jpg";
import reload_icon from "../assets/stock-vector-flat-icon-of-cyclic-rotation-recycling-recurrence-renewal-1415545238.jpg";

const RandomQuote = () => {
    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const [quote, setQuote] = useState({
        text: "No Risk No Reward",
        author: "Sahil",
    });

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    };

    const twitter = () => {
        window.open(
            `https://twitter.com/intent/tweet?texxt=${quote.text} - ${quote.author.split(",")[0]
            }`
        );
    };

    loadQuotes();
    return (
        <>
        <h1 className="h1">Random Quote Generator</h1>
            <div className="container">
                <div className="quote">{quote.text}</div>
                <div>
                    <div className="line"></div>
                    <div className="author">- {quote.author.split(",")[0]}</div>
                    <div className="icons">
                        <img
                            src={reload_icon}
                            onClick={() => {
                                random();
                            }}
                            alt=""
                        ></img>
                        <img
                            src={twitter_icon}
                            onClick={() => {
                                twitter();
                            }}
                            alt=""
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RandomQuote;


//done
