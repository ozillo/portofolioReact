import React from "react";
import styled from "styled-components";

const Switch = ({ onChangeTheme }) => {
  return (
    <StyledWrapper>
      <div>
        <input
          type="checkbox"
          id="checkboxInput"
          onChange={onChangeTheme} // Llama a la función pasada como prop
        />
        <label htmlFor="checkboxInput" className="toggleSwitch"></label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #checkboxInput {
    display: none;
  }

  .toggleSwitch {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 30px;
    background-color: rgb(82, 82, 82);
    border-radius: 20px;
    cursor: pointer;
    transition-duration: 0.2s;
  }

  .toggleSwitch::after {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 5px;
    background-color: white;
    border-radius: 50%;
    transition-duration: 0.2s;
    box-shadow: 5px 2px 7px rgba(8, 8, 8, 0.26);
  }

  #checkboxInput:checked + .toggleSwitch::after {
    transform: translateX(20px);
    transition-duration: 0.2s;
  }

  #checkboxInput:checked + .toggleSwitch {
    background-color: rgb(148, 118, 255);
    transition-duration: 0.2s;
  }
`;

export default Switch;
