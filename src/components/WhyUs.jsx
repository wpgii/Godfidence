import React, { useEffect, useRef, useState } from 'react';
import './WhyUs.css';

const cardData = [
    {
        icon: "src/assets/church.png",
        title: "Spirit Spaces",
        description: `Step into a live environment where your voice becomes a vessel for God’s message. Whether you’re hosting or joining a church service, 
        sharing a personal testimony, or leading a Bible study, your contribution matters. Together, we can create spaces that foster connection and growth in faith, 
        coming together as one in the name of the Lord. Join and support others as we share His Word and uplift one another on our spiritual journeys.`
    },
    {
        icon: "src/assets/handshake.png",
        title: "Fellowship",
        description: `Join a vibrant community where you can connect with fellow believers. Our platform features a matching system that promotes connections among children of God, helping you meet new friends who share your faith. With icebreaker tools to engage conversation, you might be the encouragement someone needs—or vice versa. 
        This feature fosters the exchange of knowledge, encourages seeking education, and guides us in supporting and understanding one another.`
    }
];

const WhyUs = () => {
    const cardRefs = useRef(cardData.map(() => React.createRef()));
    const [revealedCards, setRevealedCards] = useState(Array(cardData.length).fill(false));

    useEffect(() => {
        const handleScroll = () => {
            cardRefs.current.forEach((ref, index) => {
                if (ref.current) {
                    const cardTop = ref.current.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    if (cardTop <= windowHeight - 100 && !revealedCards[index]) {
                        setRevealedCards(prev => {
                            const newRevealed = [...prev];
                            newRevealed[index] = true;
                            return newRevealed;
                        });
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [revealedCards]);

    return (
        <div className="why-us-section" id="why-us">
            <div className="cards-container">
                {cardData.map((card, index) => (
                    <div className={`card ${revealedCards[index] ? 'revealed' : ''}`} ref={cardRefs.current[index]} key={index}>
                        <div className="glow"></div>
                        <div className="card-icon">
                            <img src={card.icon} alt="Card Icon" style={{ width: '55px', height: '55px' }} />
                        </div>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyUs;



