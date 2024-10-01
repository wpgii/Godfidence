import React, { useEffect } from 'react';
import './Resources.css'; // Ensure your CSS is linked

// Import images directly
import calendarIcon from '../assets/calendar.png';
import popcornIcon from '../assets/popcorn.png';
import robotIcon from '../assets/robot.png';
import cardsIcon from '../assets/cards.png';
import journalIcon from '../assets/journal.png';
import chatIcon from '../assets/chat.png';

const resourcesData = [
  {
    title: "Calendar Sync with Favorite Speakers/Churches:",
    description: "This feature allows users to follow their favorite speakers, churches, or ministries and automatically sync upcoming events directly to their personal calendars. Whether it’s a special sermon, Bible study, or community event, users can stay informed without manually adding dates. With reminders and real-time updates, they’ll never miss a spiritual gathering or speaker they love. This creates an easy and organized way for users to manage their spiritual engagements alongside their daily lives.",
    icon: calendarIcon, 
  },
  {
    title: "Popcorn Reading for Group Bible Studies:",
    description: "During group Bible study sessions, this feature facilitates shared reading of scripture by randomly selecting participants to read aloud. It brings an element of interaction and community building to Bible studies, encouraging everyone to engage. This ensures that the session remains dynamic and inclusive, fostering an environment where everyone contributes and connects with God’s word in a collaborative and engaging way.",
    icon: popcornIcon, 
  },
  {
    title: "Zion - AI Chatbot:",
    description: "Zion is an advanced AI chatbot designed to assist users in interpreting scripture, answering faith-related questions, and guiding them through their spiritual journey. Zion can offer real-time conversations, helping users explore the deeper meanings behind Bible passages, clear doubts, or seek explanations during personal study or group discussions. It acts as a knowledgeable and supportive 'sibling in Christ,' fostering deeper understanding and reflection in a user-friendly way.",
    icon: robotIcon, 
  },
  {
    title: "Ice Breaker- Fellowship Game for Spiritual Questions:",
    description: "The 'Ice Breaker' game is a randomized question generator that serves to deepen the fellowship experience by prompting users to explore thought-provoking and spiritually significant questions. The questions are designed to elicit meaningful conversations, encouraging users to share personal testimonies, life lessons, and reflections on faith. It’s a fun yet purposeful way to connect with others, build community, and grow together in faith.",
    icon: cardsIcon, 
  },
  {
    title: "Digital Journal for Notes & Reflections:",
    description: "This feature offers users a private space to take notes during Bible studies, sermons, or personal reflection. The journal is designed to be easily accessible, enabling users to jot down insights, verses that resonate with them, or any thoughts they want to revisit later. It helps users keep track of their spiritual growth and journey, offering a convenient way to document and reflect on their experiences with God’s word.",
    icon: journalIcon, 
  },
  {
    title: "Community Discussion Board:",
    description: "The discussion board is a platform for users to engage in ongoing conversations about faith, Bible passages, personal struggles, and triumphs. Emphasizing the importance of community, it’s a place where believers can seek advice, share interpretations, ask questions, and encourage one another. It fosters a supportive environment where users can grow in faith together, strengthening the community through open and meaningful dialogue.",
    icon: chatIcon, 
  },
];

const Resources = () => {
  useEffect(() => {
    const resourceItems = document.querySelectorAll('.resource-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the item is visible
    );

    resourceItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      resourceItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="resources-container" id="resources">
      <div className="resources"> 
        {resourcesData.map((resource, index) => (
          <div className={`resource-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <img src={resource.icon} alt={`${resource.title} icon`} className="icon" />
            <div className="content">
              <h3 className="title">{resource.title}</h3>
              <p className="description">{resource.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
