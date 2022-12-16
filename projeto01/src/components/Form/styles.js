import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color:#fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
  justify-content: space-around;
  padding: 15px 0;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
'`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  margin-top: 30px;
  margin-left: 10px
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  font-size: 15px;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: center;
  input {
  margin-left: 20px;
  accent-color: black;
  margin-top: 0;
 }
`;

export const Button = styled.button`
padding: 5px 10px;
border:none;
border-radius: 5px;
cursor: pointer;
color: white;
background-color: teal;
`;