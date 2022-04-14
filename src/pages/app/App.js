import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components'
import narutoImg from "../../images/naruto.png"
import jutsoSound from '../../sounds/src_sounds_jutso.mp3'
import { Quotes } from '../../components';
import { getQuotes } from '../../services/quoteService';


const audio = new Audio(jutsoSound);


export function App(){
  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState ({
    quote: 'loading...', 
    speaker: 'loading speaker...'
  });
  

  const onUpdate = async () => {
    const quote = await getQuotes();

    if (isMounted.current){
      setQuoteState(quote);
      audio.play();
      
    }
  };

  useEffect(() => {
    onUpdate();

    return () =>{
      isMounted.current = false;

    };
  },[]);

  return (
  
  <Content>
    <Quotes 
    {...quoteState}
    onUpdate={onUpdate}/>
    <NarutoImg src={narutoImg} alt="Naruto"/>
  </Content>
  );
} 

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-itens: center;
`

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self:flex-end;

`;