import React, { MouseEventHandler } from 'react'
import ButtonUnstyled,{
  // buttonUnstyledClasses,
  ButtonUnstyledProps,
}  from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import {GiHamburger} from 'react-icons/gi'


const CustomButtonRoot = styled('button')`
  background: ${({ theme }) => theme.palette.primary.main};
  height: 60px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0 0 0 15px;
  border-color: transparent;
  transition: transform 0.5s;
  position: fixed;
  top: 0;
  right: 0;
  color: white;
  &:hover{
      transform: scale(1.1);
  }
`

const CustomHamburgerButton = (props: ButtonUnstyledProps) => {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const NavHamburger: React.FC<{onClick?: () => void}> = ({onClick}) => {
  return (
    <CustomHamburgerButton onClick={onClick}>
      <GiHamburger style={{fontSize: '35px'}}/>
    </CustomHamburgerButton>
  )
}

export default NavHamburger