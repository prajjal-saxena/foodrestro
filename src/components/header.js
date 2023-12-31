import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import all from './Allfood'

const header = () => {
  const selectItem =(menuList) => {
     console.log(all.filter((elem)=>(
        elem.food == menuList
     )))
  }

  return (
    <Wrapper>
     <ButtonGroup sx={{
        width: '100%',
        justifyContent: 'space-around' 
     }}>
         <Button className='btn' onClick={()=>selectItem("breakfast")}>Breakfast</Button>
         <Button className='btn' onClick={()=>selectItem("lunch")}>Lunch</Button>
         <Button className='btn' onClick={()=>selectItem("Dinner")}>Dinner</Button>
     </ButtonGroup>  
     </Wrapper>
  )
}

const Wrapper = styled.section`
    background: #56412363;
    .btn{
      background: #8C7E65;
      color: #ffff;
      font-weight: 800;
      font-style: italic;
      letter-spacing: 3px;
      border: transparent;
    }
    .btn:hover{
      color: #000;
      border: transparent;
    }
`;

export default header