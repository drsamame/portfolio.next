import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '../data';

function Grid() {
	return (
		<section>
			<BentoGrid>
				{.map((item, index) => (
                    <BentoGridItem key={index} title={item.title} description={item.description} />
                ))
                }
			</BentoGrid>
		</section>
	);
}

export default Grid;
