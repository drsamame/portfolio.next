import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

function Grid() {
	return (
		<section>
			<BentoGrid>
				{[
					{ title: 'Title1', description: 'Description1' },
					{ title: 'Title2', description: 'Description2' },
					{ title: 'Title3', description: 'Description3' },
				].map((item, index) => (
                    <BentoGridItem key={index} title={item.title} description={item.description} />
                ))
                }
			</BentoGrid>
		</section>
	);
}

export default Grid;
