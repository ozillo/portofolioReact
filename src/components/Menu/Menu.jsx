import React, { useState, useEffect, useRef } from "react";
import "./Menu.css"; 

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef(null);
  const borderRef = useRef(null);

  const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];

  const handleItemClick = (index) => {
    setActiveIndex(index);
    document.body.style.backgroundColor = bgColorsBody[index];
  };

  const offsetMenuBorder = () => {
    if (!menuRef.current || !borderRef.current) return;
    const activeItem = menuRef.current.children[activeIndex];
    const offsetActiveItem = activeItem.getBoundingClientRect();
    const left =
      Math.floor(
        offsetActiveItem.left -
          menuRef.current.offsetLeft -
          (borderRef.current.offsetWidth - offsetActiveItem.width) / 2
      ) + "px";

    borderRef.current.style.transform = `translate3d(${left}, 0 , 0)`;
  };

  useEffect(() => {
    offsetMenuBorder();
    window.addEventListener("resize", offsetMenuBorder);
    return () => window.removeEventListener("resize", offsetMenuBorder);
  }, [activeIndex]);

  return (
    <menu className="menu" ref={menuRef}>
      {[
        { bgColor: "#ff8c00", icon: "menu" },
        { bgColor: "#f54888", icon: "cart" },
        { bgColor: "#4343f5", icon: "layers" },
        { bgColor: "#e0b115", icon: "grid" },
        { bgColor: "#65ddb7", icon: "image" },
      ].map((item, index) => (
        <button
          key={index}
          className={`menu__item ${index === activeIndex ? "active" : ""}`}
          style={{ "--bgColorItem": item.bgColor }}
          onClick={() => handleItemClick(index)}
        >
          <svg className="icon" viewBox="0 0 24 24">
            {index === 0 && (
              <>
                <path d="M3.8,6.6h16.4" />
                <path d="M20.2,12.1H3.8" />
                <path d="M3.8,17.5h16.4" />
              </>
            )}
            {index === 1 && (
              <>
                <path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8 C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" />
                <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
              </>
            )}
            {/* Agregar más iconos de manera similar */}
          </svg>
        </button>
      ))}
      <div className="menu__border" ref={borderRef}></div>
      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7 c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5 c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
          </clipPath>
        </svg>
      </div>
    </menu>
  );
};

export default Menu;
