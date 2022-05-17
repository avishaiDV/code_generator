import Output from "./components/Output"
import styled from "styled-components"
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  let [isClicked, setClicked] = useState(false);

  function handleCodeClick() {
    setClicked(true);
  }
  return (
  <Container>
    <h1 style={{color: "white", textAlign: "center", fontFamily: "Open Sans Hebrew", letterSpacing:"5px"}}>!מחולל הקודים</h1>
    {isClicked ? (<Output setClicked={setClicked} />): <Button onClick={handleCodeClick}>צור לי קוד</Button>}
    <ToastContainer />
  </Container>
  );
}



const Container = styled.div`
padding: 0;
margin: 0;
background-color: #000000;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`



const Button = styled.button`
  background-color: red;
  border: 2px solid red;
  color: white;
  border-radius: 30px;
  width: 100px;
  height: 40px;
  font-size: 20px;
  font-family: "Open Sans Hebrew";
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    font-size: 30px;
    width: 130px;
    height: 80px;  
  }
`

export default App;
