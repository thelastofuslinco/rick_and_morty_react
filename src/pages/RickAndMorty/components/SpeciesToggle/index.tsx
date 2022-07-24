import { Button } from '@/components/Button'
import { SpeciesToggleProps } from './types'

export const SpeciesToggle = ({
  onChangeSpecies,
  filter
}: SpeciesToggleProps) => {
  return (
    <div>
      <Button
        onClick={() =>
          onChangeSpecies((prev) => ({ ...prev, species: undefined }))
        }
        disabled={filter.species !== 'Human' && filter.species !== 'Alien'}
      >
        All
      </Button>
      <Button
        onClick={() =>
          onChangeSpecies((prev) => ({ ...prev, species: 'Human' }))
        }
        disabled={filter.species === 'Human'}
      >
        Human
      </Button>
      <Button
        onClick={() =>
          onChangeSpecies((prev) => ({ ...prev, species: 'Alien' }))
        }
        disabled={filter.species === 'Alien'}
      >
        Alien
      </Button>
    </div>
  )
}
