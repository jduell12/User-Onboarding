import styled from 'styled-components'

export const StyledForm = styled.form`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    margin: 5%;
    padding: 5%;
    background-color:aliceblue
`;

export const StyledInnerForm = styled.div`
    padding: 0 3% 0 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledButton = styled.button`
  height: 2rem;
  width: 6rem;
  border-radius: 8px;
  color: rgb(30, 220, 20);
  background-color: white;
  border: 2px solid rgb(30, 220, 20);

  &:hover{
      cursor:pointer;
  }

  &:disabled{
      color:crimson;
      background-color: white;
      border: 2px solid crimson;
      cursor: not-allowed;
  }
`;

export const StyledErrorDiv = styled.div`
  color: crimson;
`;