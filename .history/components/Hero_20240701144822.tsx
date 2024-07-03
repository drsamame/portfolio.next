import React from 'react';
import { Spotlight } from '@/components/ui/Spotlight';

function Hero() {
	return (
		<div className="pb-20 pt-36">
			<Spotlight
				className="-top-40 -left-10 md:-left-32 md:-top-20p h-screen"
				fill="white"
			/>
            <Spotlight
				className="top-10 left-full"
				fill="white"
			/>
            <Spotlight
				className="-top-40 -left-10 md:-left-32 md:-top-20p h-screen"
				fill="white"
			/>
		</div>
	);
}

export default Hero;
