import React from 'react';

function MagicButton({ title, icon, position, handleClick, otherClases }: { title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClases?: string }) {
	return (
		<button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10" onClick={handleClick}>
			
			<span className={`inline-flex z-10 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClases}`}>
                {position === 'left' && icon}
				{title}asdsa
                {position === 'right' && icon}
			</span>
		</button>
	);
}

export default MagicButton;
