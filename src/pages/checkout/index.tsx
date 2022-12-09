import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { 
  CheckoutContainer,
  CoffeInputs, 
  CoffePayment,
  HeaderPayment, 
  HeaderBase, 
  InputCep,
  InputContainer,
  InfoBase,
  InputBairro,
  InputUF,
  InputBase,
  SelectButton,
  ButtonContent,
  CoffeCard,
  ButtonCard,
  InfoItens,
  InfoTotal} from "./styles";

export function Checkout(){
  return (
    <CheckoutContainer>
      <section>
        <h1>Complete seu pedido</h1>
        <CoffeInputs>
          <HeaderBase>
            <MapPinLine size={22}/>
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderBase>
          <form action="">
            <InputContainer>
              <div><InputCep type="text" placeholder="CEP" /></div>
              <div><InputBase type="text" placeholder="Rua" /></div>
              <InfoBase>
                <InputCep type="text" placeholder="Número" />
                <InputBase type="text" placeholder="Complemento" />
              </InfoBase>
              <InfoBase>
                <InputBairro type="text" placeholder="Bairro" />
                <InputBase type="text" placeholder="Cidade" />
                <InputUF type="text" placeholder="UF" />
              </InfoBase>
            </InputContainer>
          </form>
        </CoffeInputs>
        <CoffePayment>
          <HeaderPayment>
            <CurrencyDollar size={22}/>
            <div>
              <p>Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </HeaderPayment>
          <ButtonContent>
            <SelectButton>
              <CreditCard size={16}/>
              CARTÃO DE CRÉDITO
            </SelectButton>
            <SelectButton>
              <Bank size={16}/>
              CARTÃO DE DÉBITO
            </SelectButton>
            <SelectButton>
              <Money size={16}/>
              DINHEIRO
            </SelectButton>
          </ButtonContent>
        </CoffePayment>
      </section>
      <section>
        <h1>Cafés selecionados</h1>
        <CoffeCard>
          <InfoItens>
            <p>Total de itens</p>
            <span>R$ 29,70</span>
          </InfoItens>
          <InfoItens>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </InfoItens>
          <InfoTotal>
            <p>Total</p>
            <span>R$ 33,20</span>
          </InfoTotal>
          <ButtonCard>confirmar pedido</ButtonCard>
        </CoffeCard>
      </section>
    </CheckoutContainer>
  )
}