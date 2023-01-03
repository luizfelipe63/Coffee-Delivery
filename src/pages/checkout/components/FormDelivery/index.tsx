import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  CardCoffeInputs,
  ContainerInputs,
  HeaderInputs,
  InputContent,
} from './styles'

export function FormDelivery() {
  const { register} = useFormContext()

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
        <InputContent>
          <input 
            type={'text'} 
            placeholder="CEP" 
            maxLength={8} 
            {...register("cep")}
            required
          />
         
        </InputContent>
        <InputContent>
          <input 
            type="text" 
            placeholder="Rua" 
            required 
            {...register('street')} 
          />
        </InputContent>
        <InputContent>
          <input 
            type="text" 
            placeholder="Número" 
            required 
            {...register('number')} />
        </InputContent>
        <InputContent>
          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          <span>Opcional</span>
        </InputContent>
        <InputContent>
          <input 
            type="text" 
            placeholder="Bairro"  
            required 
            {...register('district')} />
        </InputContent>
        <InputContent>
          <input 
            type="text" 
            placeholder="Cidade" 
            required 
            {...register('city')} />
        </InputContent>
        <InputContent>
          <input 
           type="text" 
           placeholder="UF" 
           required 
           {...register('UF')} />
        </InputContent>
      </ContainerInputs>
    </CardCoffeInputs>
  )
}
