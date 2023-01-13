import { ShoppingCart, MapPin, MoonStars, SunDim } from 'phosphor-react'
import Logo from '../../assets/Logo-coffe.svg'
import LogoDark from '../../assets/Logo-darkMode.svg'
import {
  Actions,
  Card,
  NavContainer,
  Location,
  CardToggle,
  NavContent,
} from './styles'

import { NavLink } from 'react-router-dom'

import { useContext } from 'react'
import { CoffeContext } from '../../context/CoffeContext'

interface Props {
  toggleTheme: () => void
  stateDark: boolean
}

export function NavBar({ toggleTheme, stateDark }: Props) {
  const { lengthNavBarCartCard } = useContext(CoffeContext)

  return (
    <NavContainer>
      <NavContent>
        <NavLink to={'/'}>
          {stateDark ? (
            <img src={LogoDark} alt="" />
          ) : (
            <img src={Logo} alt="" />
          )}
        </NavLink>
        <Actions>
          <Location>
            <MapPin weight="fill" size={22} />
            Luziânia, GO
          </Location>
          <CardToggle onClick={toggleTheme}>
            {stateDark ? (
              <SunDim weight="fill" size={22} />
            ) : (
              <MoonStars weight="fill" size={22} />
            )}
          </CardToggle>
          <NavLink to={'/checkout'} title="carrinho">
            <Card>
              <ShoppingCart weight="fill" size={22} />
              {lengthNavBarCartCard > 0 && <span>{lengthNavBarCartCard}</span>}
            </Card>
          </NavLink>
        </Actions>
      </NavContent>
    </NavContainer>
  )
}
