import styled from 'styled-components'
import { keyframes } from 'styled-components';
import { toast } from 'react-toastify';
import { useState } from 'react';

function generate() {
    let arr = [2550, 2580, 3061, 3070, 3071]
    let output = arr[Math.floor(Math.random() * arr.length)];
    for(let i = 0; i< 7; i++){
      output += Math.floor(Math.random() * 5) + 1 + ""
    }
    output += "5"
    return output;
  }


const animation = keyframes`
0% {
    transform: scale(0);
    filter: blur(20px);
}
100% {
    transform: scale(1);
    filter: blur(0px);
}
`

const openningAnimation = keyframes`
0% {
    filter: blur(20px);
    transform: scale(0.5);
}
100% {
    filter: blur(0px);
    transform: scale(1);
}
`

const openningAnimationRegen = keyframes`
0% {
    filter: blur(20px);
    transform: scale(0);
    width: 0;
    height: 0;
    margin-left: 0;
}
100% {
    filter: blur(0px);
    transform: scale(1);
    margin-left: 10px;
    width: 60px;
    height: 60px;
}
`

const Wrapper = styled.span`
  display: inline-block;
  cursor: pointer;
  span {
    display: inline-block;
    animation: ${animation};
    transform: scale(0);
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.8,-.5,.2,1.4);
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
  span:nth-child(7) {
    animation-delay: 0.7s;
  }
  span:nth-child(8) {
    animation-delay: 0.8s;
  }
  span:nth-child(9) {
    animation-delay: 0.9s;
  }
  span:nth-child(10) {
    animation-delay: 1s;
  }
  span:nth-child(11) {
    animation-delay: 1.1s;
  }
  span:nth-child(12) {
    animation-delay: 1.2s;
  }

`
const Background = styled.div`
border-radius: 30px;
border: 2px solid red;
color: white;
padding: 0.25em 1em;
font-size: 30px;
font-family: "Open Sans Hebrew";
background-color: red;
`
const Regen = styled.button`
background-color: red;
color: white;
border-radius: 30px;
width: 60px;
height: 60px;
font-size: 20px;
cursor: pointer;
transform: scale(1);
margin-left: 10px;
animation: ${openningAnimationRegen};
animation-duration: 1s;
transition: all 0.5s;
`

const Container = styled.div`
display: flex;
flex-direction: row;
text-align: center;
transform: scale(1);
transition: all 0.5s;
animation: ${openningAnimation};
animation-duration: 1s;
cursor: pointer;
`
async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

function handleCodeClick(code, setCopied) {
     copyTextToClipboard(code).then(() => {
        setCopied(true)
        toast.error("הקוד הועתק בהצלחה", {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: "colored",
            icon: "📃"
        });
    });

}

function Output({setClicked}) {
    const [copied, setCopied] = useState(false);
    const code = generate()
    const array = code.split('');
    function handleReload() {
        setClicked(false)
      }
    return (<Container >
        <Background onClick={() => handleCodeClick(code, setCopied)}>
            <Wrapper > 
                {array.map((item, key) => {
                return <span key={key}>{item}</span>
            })} 
            </Wrapper>
        </Background>
        {copied ? <Regen onClick={handleReload}>🔃</Regen> : null}
    </Container>)
}

export default Output