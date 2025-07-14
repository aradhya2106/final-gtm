import React, { useEffect, useRef, useState } from "react";
import "./SecondAnimation.css";

export default function SecondAnimation() {
  const cubeRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame;
    let angleX = 0;
    let angleY = 0;

    const animate = () => {
      if (!isHovered) {
        angleX += 0.5;
        angleY += 0.7;
        setRotation({ x: angleX, y: angleY });
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  const handleMouseMove = (e) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const { width, height, left, top } = wrapper.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    // Convert cursor position to a range of [-45deg, 45deg]
    const rotateY = (offsetX / width - 0.5) * 90;
    const rotateX = (0.5 - offsetY / height) * 90;

    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <div className="second-container">
      <div className="second-text">
        <h2>Transforming Ideas into Scalable Impact</h2>
        <p>Explore how we empower businesses with modern tech solutions.</p>
      </div>

      <div
        className="cube-wrapper"
        ref={wrapperRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div
          ref={cubeRef}
          className="spinning-cube"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <span className="face front">AI</span>
          <span className="face back">Cloud</span>
          <span className="face left">IoT</span>
          <span className="face right">Web</span>
          <span className="face top">Apps</span>
          <span className="face bottom">Data</span>
        </div>
      </div>
    </div>
  );
}
