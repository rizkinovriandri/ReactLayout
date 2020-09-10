import styled from "styled-components";

export const BtnComponent = styled.button`
    width: 150px;
    padding: 10px;
    margin: 10px 0px;
    border: none;

    
    color: ${props => props.primary ? "white" : "#3b5998"};
    
    background: ${props => props.primary ? "#3b5998" : "white"};
    border: 2px solid #3b5998;
    border-radius: 3px;
    
    
    font-size: 16px;
    cursor: pointer;
    border-radius : 0%;
    margin-right : 20px;

    &:hover {
        color: ${props =>
            props.primary ? '#3b5998' : 'white'};
        background-color: ${props =>
          props.primary ? 'white' : '#3b5998'};
      }

`;