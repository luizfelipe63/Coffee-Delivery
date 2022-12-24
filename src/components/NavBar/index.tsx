import {NavLink} from 'react-router-dom'

import {ShoppingCart, MapPin,MoonStars, SunDim} from 'phosphor-react'
import Logo from '../../assets/Logo-coffe.svg'
import LogoDark from '../../assets/Logo-darkMode.svg'
import { Actions, Card, NavContainer,Location, CardToggle} from './styles'


interface Props{
  toggleTheme: () => void
  stateDark: boolean
}


export function NavBar({toggleTheme, stateDark} : Props){

  return (
    <NavContainer>
      <NavLink to={'/'}>
        {stateDark ? <img src={LogoDark} alt="" /> : <img src={Logo} alt="" /> }
      </NavLink>
      <Actions>
      <Location>
        <MapPin weight='fill' size={22}/>
        Luziânia, GO
      </Location>
      <CardToggle onClick={toggleTheme}>
        {stateDark ? <SunDim weight='fill' size={22}/> : <MoonStars  weight='fill' size={22}/> }
      </CardToggle>
      <NavLink to={'/checkout'} title='carrinho'>
        <Card>
          <ShoppingCart weight='fill' size={22}/>
          <span>3</span>
        </Card>
      </NavLink>
      </Actions>
    </NavContainer>
  )
}