import React from 'react';
import { Spotlight } from '@/components/ui/Spotlight';

function Hero() {
	return (
		<div className="pb-20 pt-36">
			<div>
				{' '}
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20p h-screen"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full h-[80vh] w-[50vw]"
					fill="purple"
				/>
				<Spotlight className="top-28 left-80 h-[80-vh] w-[50vw]" fill="blue" />
			</div>
			<div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
					Backgrounds
				</p>
			</div>
		</div>
	);
}

export default Hero;