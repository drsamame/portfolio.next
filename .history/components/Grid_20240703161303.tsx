import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '../data';

function Grid() {
	return (
		<section>
			<BentoGrid>
				{gridItems.map((item, index) => (
					<BentoGridItem
						key={index}
						title={item.title}
						description={item.description}
                        className={item.className}

					/>
				))}
			</BentoGrid>
		</section>
	);
}

export default Grid;
