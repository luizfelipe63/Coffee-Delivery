import { CurrencyDollar, MapPinLine } from "phosphor-react";
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
  InputBase} from "./styles";

export function Checkout(){
  return (
    <CheckoutContainer>
      <div>
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
          <div>
            <button>CARTÃO DE CRÉDITO</button>
            <button>CARTÃO DE DÉBITO</button>
            <button>DINHEIRO</button>
          </div>
        </CoffePayment>
      </div>
      <h1>Cafés selecionados</h1>
    </CheckoutContainer>
  )
}