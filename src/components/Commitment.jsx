import React from 'react';
import './Commitment.css'; 

const Commitment = () => {
  const paragraphs = [
    `Godfidence stands as a community grounded in the unwavering belief that God has a plan for each of us,
     a plan that is far greater than anything we can imagine. We trust fully in His wisdom, leaning not on our own understanding, 
     but on His perfect guidance, as we seek to glorify Him in everything we do.`,

    `This platform is more than a space for believers—it’s a sanctuary where we uplift and inspire one another, 
     living out the command to love one another as Christ has loved us. We believe in fostering meaningful fellowship that reflects the heart of God’s Word.
     Whether you're sharing your testimony, engaging in scripture, or encouraging someone else, Godfidence exists to help you grow in your walk with the Lord.`,

    `God calls us to love all people, including those who may not yet know Him. At Godfidence, 
     we show that love by extending kindness, respect, and understanding to everyone. This is a place where the love of God is made visible through action—where we share hope,
     even with those who may feel lost. Our mission is to be a light in this world, showing the beauty of Christ’s love and inviting others into His grace.`,

    `We trust that God's plan for this community will lead us to build lasting, faith-driven connections. 
     Here, you’ll find spaces where you can share your story, be encouraged, and grow spiritually, surrounded by those who are also walking in faith. 
     No matter where you are on your journey, Godfidence is a place where God’s glory is at the center of everything we do, and where we remind each other daily that through Him, 
     anything is possible.`,

    `Godfidence is not just about creating a community—it's about building a movement where we support each other in faith, 
     trust God's timing, and give Him all the glory for every success. Together, we believe, we grow, and we glorify Him.`,
  ];

  return (
    <section className="commitment-section"> 
      <div className="commitment-container">
        <div className="tablet-card">
          <h1 className="commit-subheading font-effect-3d" id="commitment">Our Commitment</h1>
          {paragraphs.map((text, index) => (
            <p key={index} className={`paragraph${index % 2 === 0 ? '1' : '2'} font-effect-3d`}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
