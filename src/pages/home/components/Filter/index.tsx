import { useContext } from 'react'
import { CoffeContext, FilterProps } from '../../../../context/CoffeContext'
import { databutton } from '../../../../mocks/buttonFilter'
import { FilterContent, OptionsFilter } from './styles'

export function Filter() {
  const { updateFilter } = useContext(CoffeContext)
  return (
    <FilterContent>
      {databutton.map((coffes) => {
        return (
          <OptionsFilter
            key={coffes.value}
            onClick={() => updateFilter(coffes.value as FilterProps)}
          >
            {coffes.name}
          </OptionsFilter>
        )
      })}
    </FilterContent>
  )
}
