import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '../data';

function Grid() {
	return (
		<section>
			<BentoGrid>
				{gridItems.map((item) => (
					<BentoGridItem
						key={item.id}
						title={item.title}
						description={item.description}
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}

					/>
				))}
			</BentoGrid>
		</section>
	);
}

export default Grid;
