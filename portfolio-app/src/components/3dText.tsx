import React, { useState } from 'react';
import '../App.css'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const ThreeDTextList = () => {
  const [isHovered, setIsHovered] = useState(-1)
  const textRef = useRef(null)

  const textItems = [
    'libft','so-long', 'printf', 'get-nextline','pipex','Born2beroot',
    'MINI-SHELL', 'CUB-3D', 'PHILO',
    'WEBSERV', 'PUSH-SWAP', 'INCEPTION', 'net-practice',
    'PONGARENA',
    // 'PNG-ART',
  ];

  useEffect(() => {
    const text = textRef.current?.children;

    gsap.fromTo(
      text,
      {  y: -window.innerHeight * 2.8, delay: 0.1}, // Start state
      {
        y: 0,
        duration: 3.5,
        stagger: {
          amount: 0.1,
          from: "end"
        }, 
        ease: "power3.inOut",
      }
    )
    gsap.fromTo(
      text,
      { scaleX: 0.7}, // Start state
      {
        duration: 3.7,
        stagger: {
          amount: 0.7,
          from: "end"
        }, 
        ease: "power2.inOut",
        scaleX: 1.2,
        delay: 0.1,
      }
    )
    gsap.fromTo(
      text,
      { rotationY: -60},
      {
        rotationY: -25,
        duration: 3.6,
        ease: "power3.inOut",
        stagger: {
          amount: 0.9,
          from: "end"
        },
        delay: 0.2
      }
    );
   
  }, [])

  function handleHovered(index:number) {
    
    setIsHovered(index)
  }

  return (
    <div className='projects'>
          <ul className='projects' ref={textRef}>
            {textItems.map((item, index) => (
              <li className={`project-name cursor-pointer font-bold text-right  
                  ${isHovered === index ? 'hover-style': ''}`}
                  onMouseEnter={() => handleHovered(index)}
                  onMouseLeave={() => setIsHovered(-1)}
                  key={index}
                >
                <div className='project-container'>
                    <a href='#'  dangerouslySetInnerHTML={{ __html: item.toUpperCase() }} />
                </div>
              </li>
          ))}
          </ul>
    </div>
  );
};

export default ThreeDTextList;