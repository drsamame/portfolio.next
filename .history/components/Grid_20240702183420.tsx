import React from 'react'
import { BentoGrid } from './ui/BentoGrid'

function Grid() {
  return (
    <section>
        <BentoGrid>
            {[{ title: 'Title1', description: 'Description1' }, { title: 'Title2', description: 'Description2' }, { title: 'Title3', description: 'Description3']}
        </BentoGrid>
    </section>
  )
}

export default Grid