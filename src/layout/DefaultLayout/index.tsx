import {Outlet} from 'react-router-dom'
import { NavBar } from '../../components/NavBar';
import { LayoutContainer } from './style';

export function DefaultLayuot(){
  return (
    <LayoutContainer>
      <Outlet/>
    </LayoutContainer>
  )
}