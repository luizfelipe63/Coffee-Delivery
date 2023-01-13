import { ChangeEvent, SelectHTMLAttributes, useContext } from 'react'
import { CoffeContext, FilterProps } from '../../../../context/CoffeContext'
import { databutton } from '../../../../mocks/buttonFilter'
import { FilterContent, OptionsFilter } from './styles'

export function Filter() {
  const { updateFilter, filter } = useContext(CoffeContext)

  const handleChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    updateFilter(event.target.value as FilterProps)
  }

  return (
    <FilterContent value={filter} onChange={handleChangeFilter}>
      {databutton.map((coffes) => {
        return (
          <OptionsFilter value={coffes.value} key={coffes.value}>
            {coffes.name}
          </OptionsFilter>
        )
      })}
    </FilterContent>
  )
}
