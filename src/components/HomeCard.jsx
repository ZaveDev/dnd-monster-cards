import React from "react";
import Styled from "styled-components";

const StyledHomeCard = Styled.div`
background: rgb(50,50,50);
  width: 16%;
  height: 20%;
  margin: 1%;
  display:flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 1%;
  .body{
    height: 80%;

    display:flex;
    justify-content: center;
    align-items: center;
  }
  .footer{

    height: 20%;    
    display:flex;
    justify-content: center;
  }

`;

export default function HomeCard() {
  return (
    <StyledHomeCard>
      <div className="body">
        <h2>name</h2>
      </div>
      <div className="footer">
        <button className="primary-btn" onClick={() => {}}>
          More
        </button>
      </div>
    </StyledHomeCard>
  );
}
