import { ChangeEvent, useEffect, useState } from 'react'
import { ButtonFilter, FilterContent } from './styles'
import { cardProps } from '../../../../components/CardCoffe'
import { CoffeCard } from '../../../../mocks/coffe'
import { FormProps } from 'react-router-dom'

const databutton = [
  {
    name: 'Todos',
    value: 'Todos',
  },
  {
    name: 'Tradicional',
    value: 'Tradicional',
  },
  {
    name: 'Especial',
    value: 'Especial',
  },
  {
    name: 'Com Leite',
    value: 'Com Leite',
  },
  {
    name: 'Alcoólico',
    value: 'Alcoólico',
  },
  {
    name: 'Gelado',
    value: 'Gelado',
  },
]

export function Filter() {
  // const [filterTags, setFilterTags] = useState<cardProps[]>([])

  // useEffect(() => {
  //   setFilterTags()
  // }, [])

  // function filterTag(tagType: string[]) {
  //   const filtredTags = CoffeCard.filter((type) => type.tag === tagType)
  //   return filtredTags
  // }

  // function handleFilterTagCard(e: ChangeEvent<HTMLButtonElement>) {
  //   const filterCardCoffe = e.target.value

  //   filterCardCoffe !== 'Todos'
  //     ? setFilterTags(filterTag(filterCardCoffe))
  //     : setFilterTags()
  // }

  return (
    <FilterContent>
      {databutton.map((type) => {
        return (
          <ButtonFilter
            value={type.value}
            // onClick={handleFilterTagCard}
            key={type.value}
          >
            {type.name}
          </ButtonFilter>
        )
      })}
    </FilterContent>
  )
}
