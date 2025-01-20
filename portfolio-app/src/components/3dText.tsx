import React, { useState } from 'react';
import '../App.css'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const ThreeDTextList = () => {
  const [isHovered, setIsHovered] = useState(-1)
  const [miniWindowPosition, setMiniWindowPosition] = useState({ top: 0, left: 0 });
  const textRef = useRef(null)
  const miniWindowRef = useRef(null)

  const textItems = [
    'PONGARENA','HttpForge','DockOps','NetTrain', 
    'C-Forge','readaline','C-Shell', 'Thinkers','VMachine',
    'rayCast', 'Sortify', 
  ];
  const animateText = () => {
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
        { scaleX: 0.5}, // Start state
        {
          duration: 3.7,
          stagger: {
            amount: 0.7,
            from: "end"
          }, 
          ease: "power2.inOut",
          scaleX: 1,
          delay: 0.1,
        }
      )
  }

  useEffect(() => {
    animateText()
  }, [])

  const moveTextBottom = (index: number, event:React.MouseEvent) => {
    const texts = textRef.current?.children;

    if (texts) {
      Array.from(texts).forEach((text, i) => {
        if (i > index) {
          gsap.to(text, {
            y: "42vh",
            duration: 1,
            ease: 'power3.inOut',
            stagger: 0.1,
          });
        }
      });
    }
  };
  
  const  resetTextPosition = () => {
    if (isHovered != -1) return
    const texts = textRef.current?.children;
    if (texts) {
          gsap.to(texts, {
            y: 0,
            duration: 1.5,
            ease: 'power3.inOut',
            stagger: 0.1,
          });
    }
  }
  const  handleMouseLeave = (index:number) => {
    setIsHovered(-1)
    const texts = textRef.current?.children;

    if (texts) {
      Array.from(texts).forEach((text, i) => {
        if (i > index) {
          gsap.to(text, {
            y: 0,
            duration: 1,
            ease: 'power3.inOut',
            stagger: 0.1,
          });
        }
      });
    }
  }


  const  handleHovered = (index:number, event:React.MouseEvent) => {
    const boundingRect = event.currentTarget.getBoundingClientRect();
    {
      setMiniWindowPosition({
        top: boundingRect.bottom + window.scrollY + 10,
        left: boundingRect.left
      })
    }
    setIsHovered(index)
    moveTextBottom(index, event)
  }

  useEffect(() => {
    // isHovered == -1 && resetTextPosition()
  }, [isHovered])

  return (
    <div className='projects-wrapper flex p-3'>
          <div className='image-wrapper'>
            {/* <img src="https://cdn.prod.website-files.com/62ea6a5ecc445286d8af43a1/650063d6ead7951cf3dc5966_Hero-GIF.gif" /> */}
          </div>
          <h4 className='work-header' >recent work</h4>
          <ul className='projects' ref={textRef}>
            {textItems.map((item, index) => (
              <li className={`project-name cursor-pointer font-bold text-right  
                  ${isHovered === index ? 'hover-style': ''}`}
                  onMouseEnter={(e) => handleHovered(index, e)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  key={index}
                >
                <div className='project-container'>
                    <div className='flex gap-8'>
                      <a href='#'  dangerouslySetInnerHTML={{ __html: item.toUpperCase() }} />
                      <div className='work-year'> 2020 </div>
                      {/* <div className='work-line'></div> */}
                    </div>
                </div>
                    
              </li>
          ))}
          </ul>
              <div className={`mini-window ${isHovered == -1 ? "hidden": ""}`}
              style={{
                width: `${isHovered != -1 ? "50vw": "0"}`,
                height: `${isHovered != -1 ? "40vh": "0"}`,
                top: miniWindowPosition.top,
                left: miniWindowPosition.left / 2,
              }}
              ref={miniWindowRef}
              >
                <img className='mini-window-image'  src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww' />
                {/* Project description */}
              </div>
    </div>
  );
};

export default ThreeDTextList;