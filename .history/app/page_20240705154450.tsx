import Hero from '@/components/Hero';
import { FloatingNav } from '../components/ui/FloatinNav';
import Grid from '@/components/Grid';
import { navItems } from '@/data';
import RecentsProject from '@/components/RecentsProject';

export default function Home() {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentsProject />
			</div>
		</main>
	);
}
