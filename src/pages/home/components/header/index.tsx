import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageCoffe from '../../../../assets/imagem-coffe.svg'
import {
  Collum,
  Content,
  HeaderContainer,
  IconBox,
  IconClock,
  IconCoffe,
  IconShopping,
  Item,
  Items,
  Title,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </Title>
          <Items>
            <Collum>
              <Item>
                <IconShopping>
                  <ShoppingCart weight="fill" size={16} />
                </IconShopping>
                <span>Compra simples e segura</span>
              </Item>
              <Item>
                <IconClock>
                  <Timer weight="fill" size={16} />
                </IconClock>
                <span>Entrega rápida e rastreada</span>
              </Item>
            </Collum>
            <Collum>
              <Item>
                <IconBox>
                  <Package weight="fill" size={16} />
                </IconBox>
                <span>Embalagem mantém o café intacto</span>
              </Item>
              <Item>
                <IconCoffe>
                  <Coffee weight="fill" size={16} />
                </IconCoffe>
                <span>O café chega fresquinho até você</span>
              </Item>
            </Collum>
          </Items>
        </div>
        <img src={imageCoffe} alt="" />
      </Content>
    </HeaderContainer>
  )
}
