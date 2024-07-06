'use client';
import { projects } from '@/data';
import React from 'react';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa6';

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
						className="lg:min-h-[32rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]  lg:rounded-3xl"
					>
						<PinContainer title={link} href={link} className='border-none'>
							<div className="relative flex items-center justify-center sm:w-96 w-[80vw] lg:h-[16rem] h-[16rem]">
								<img src={img} alt="project-img" className="z-10 absolute top-0" />
							</div>
							<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
								{title}
							</h1>
							<p className="lg:text-xl lg:font-normal font-light text-sm ">
								{des}
							</p>
							<div className="flex items-center justify-between mt-7 mb-3">
								<div className="flex items-center">
									{iconLists.map((icon, index) => (
										<div
											key={index}
											className="rounded-full border border-white/15 bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
											style={{
												transform: `translateX(-${5 * index + 2}px)`,
											}}
										>
											<img src={icon} alt="icon5" className="p-2" />
										</div>
									))}
								</div>
							</div>
							<div className="flex justify-center items-center float-end -mt-[45px]">
								<p className="flex lg:text-base md:text-xs text-sm text-purple">
									Check Live Site
								</p>
								<FaLocationArrow className="ms-3" color="#CBACF9" />
							</div>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	);
}

export default RecentsProject;
