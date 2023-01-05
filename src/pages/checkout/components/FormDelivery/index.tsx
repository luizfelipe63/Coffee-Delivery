import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  CardCoffeInputs,
  ContainerInputs,
  HeaderInputs,
  InputContainer,
  InputContent,
  InputConplemnt
} from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function FormDelivery() {
  const { register, formState} = useFormContext()

  const {errors} = formState as ErrorsType

  return (
    <CardCoffeInputs>
      <HeaderInputs>
        <MapPinLine size={22} />
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </HeaderInputs>
      <ContainerInputs>
        <InputContainer>
          <InputContent>
            <input 
              type="text" 
              placeholder='CEP'
              {...register('cep')}  />
          </InputContent>
          <span>{errors.cep?.message}</span>
        </InputContainer>

        <InputContainer>
          <InputContent>
            <input 
              type="text" 
              placeholder='Rua'
              {...register('street')}  />
          </InputContent>
          <span>{errors.street?.message}</span>
        </InputContainer>  

        <InputContainer>
          <InputContent>
            <input 
              type="text" 
              placeholder='Número'
              {...register('number')}  />
          </InputContent>
          <span>{errors.number?.message}</span>
        </InputContainer>    

        <InputContainer>
          <InputConplemnt>
            <input 
              type="text" 
              placeholder='Complemento'
              {...register('complement')}  />
              <span>Opcional</span>
          </InputConplemnt>
        </InputContainer> 

        <InputContainer>
          <InputContent>
            <input 
              type="text" 
              placeholder='Bairro'
              {...register('district')}  />
          </InputContent>
          <span>{errors.district?.message}</span>
        </InputContainer>  

        <InputContainer>
          <InputContent>
            <input 
              type="text" 
              placeholder='Cidade'
              {...register('city')}  />
          </InputContent>
          <span>{errors.city?.message}</span>
        </InputContainer>  

        <InputContainer>
          <InputContent>
            <input 
              type="text" 
              placeholder='UF'
              {...register('uf')}  />
          </InputContent>
          <span>{errors.uf?.message}</span>
        </InputContainer>   
       </ContainerInputs>
    </CardCoffeInputs>
  )
}
