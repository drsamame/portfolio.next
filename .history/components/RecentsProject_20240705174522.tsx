'use client';
import { projects } from '@/data';
import React from 'react';
import { PinContainer } from './ui/3d-pin';

function RecentsProject() {
	return (
		<div className="py-20">
			<h1 className="heading">
				A small selection of {''}
				<span className="text-purple">recent projects</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{projects.map(({ title, id, des, link, img, iconLists }) => (
					<div
						key={id}
						className="lg:min-h-[32rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden lg:rounded-3xl"
					>
						<PinContainer title={title} href={link}>
							<div className="relative flex items-center justify-center sm:w-96 w-[80vw] lg:h-[30vh]">
								<div>
									<img src="/bg.png" alt="bg-img" />
								</div>
								<img src={img} alt="project-img" className="z-10 absolute" />
							</div>
							<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
								{title}
							</h1>
							<p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-1">
								{des}
							</p>
							<div className="flex items-center justify-between mt-7 mb-3">
								<div className="flex items-center">
									{iconLists.map((item) => (
										<div key={item} className="border border-white/[0.2]">
											<img
												src={item}
												alt={item}
												className="p-2 rounded-full bg-black lg:w-10 lg:h-10 justify-center items-center"
											/>
										</div>
									))}
								</div>
							</div>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	);
}

export default RecentsProject;
