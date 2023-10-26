import { Stack } from '@mui/material';
import './App.css';
import Header from './components/header';
import {BsFillCartFill} from 'react-icons/bs'
import styled from 'styled-components';
import Food from './Food';

function App() {
  return (
    <Wrapper className="App">
        <Stack sx={{background: "#564123cf",padding: "5px 10px"}}
             direction='row' justifyContent='space-between'>
            <Stack>
              <img src="/logo.png" height='80px' width='100px' alt="" />
            </Stack>
            <Stack  className='shop-cart'>
               <BsFillCartFill color='#fff'/>
            </Stack>
        </Stack>
        <Header/>
        <Food/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
.shop-cart{
    align-items: center;
    justify-content: center;
    padding-right: 21px;
    font-size: 20px;
}
  
`

export default App;
