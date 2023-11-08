import dirtless from '../assets/dirtlessDetailing.jpg?url';
import primebid from '../assets/Bid-Summary.png?url';
import guitario from '../assets/guitario.png?url';
import pottergo from '../assets/potterGo.png?url';
import { motion } from 'framer-motion';
import SvgIcon from './SvgIcon';

const imgVariant = {
	default: {},
	hover: {}
}

// Want an animation on all elements the ones on the left will move up on scroll down slightly and the ones on the right down slightly on scroll down
// Will need to use 2x useTransform that uses x and changes y and possibly slight x values for the elements, one useMotion to get x, and the Scroll import from framer motion to track the scroll pos
export default function ProjectsComponent() {
	return (
        <div className='flex flex-col lg:flex-row gap-8 p-8'>
			<motion.img className='w-full rounded-2xl' src={dirtless} alt="Dirtless detailing landing page" />
			<div className='flex flex-col justify-around h-auto'>
				<h3 className='text-4xl'>Dirt-Less Detailing</h3>
				<p className='text-xl'>A professional auto detailing site I made from scratch that has at this point gone through hundreds of updates and versions. The site was built to drive traffic and get clients for Dirt-Less Detailing.</p>
				<div className='flex gap-8 xl:gap-12'>
					<SvgIcon name="nextjs" />
					<SvgIcon name="react" />
					<SvgIcon name="sass" />
				</div>
				<div className="flex gap-4">
					<a className="no-underline text-primary text-xl bg-primary text-white px-4 py-2 rounded-md" href="/project/dirtless-detailing">LEARN MORE</a>
					<a className="no-underline text-primary text-xl border-2 border-primary text-white px-4 py-2 rounded-md" href="https://www.dirtlessdetailing.com" rel="noopener" target="_blank">VISIT SITE</a>
				</div>
			</div>
		</div>
	)
}