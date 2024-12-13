import React, { useState } from 'react';
import '../App.css'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const ThreeDTextList = () => {
  const [isHovered, setIsHovered] = useState(-1)
  const textRef = useRef(null)

  const textItems = [
    'MINI- <br> SHELL', 'CUB-3D', 'PHILO',
    'WEBSERV', 'PUSH-SWAP', 'INCEPTION',
    'PONG-ARENA',
    'ARENA-PONG',
    'PONG-LAB',
    'ARENA-STUDIO',
    // 'PNG-ART',
  ];

  useEffect(() => {
    const text = textRef.current?.children;

    // Animate each character with staggered effect
    gsap.fromTo(
      text,
      { opacity: 0, y: -window.innerHeight, scale: 1}, // Start state
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: {
          amount: 0.1,
          from: "end"
        }, 
        ease: "power1.inOut",
        scale: 1
      }
    )
    gsap.fromTo(
      text,
      { rotationY: -100 },
      {
        rotationY: -45,
        duration: 0.9,
        ease: "power1.inOut",
        stagger: {
          amount: 0.5,
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
    <div className='projects-wrapper'>
      <div className="projects-list-container" >
        <div className='flex flex-col justify-center items-end h-full w-full' >
          <ul className='projects' ref={textRef}>
          {textItems.map((item, index) => (
              <li className={`project-name cursor-pointer font-bold text-right  
                  ${isHovered === index ? 'hover-style': ''}`}
                  onMouseEnter={() => handleHovered(index)}
                  onMouseLeave={() => setIsHovered(-1)}
                >
                  <div className='project-container'>
                    <a href='#' >
                      MINI-<br /> SHELL
                    </a>
                </div>
              </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThreeDTextList;