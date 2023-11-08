import { useEffect } from 'react';
import dirtless from '../assets/dirtlessDetailing.jpg?url';
import primebid from '../assets/Bid-Summary.png?url';
import guitario from '../assets/guitario.png?url';
import pottergo from '../assets/potterGo.png?url';
import { mainVariant, secondaryVariant, titleVariant, imgVariant, buttonVariant, iconVariant} from '../utils/animationVariants';
import { motion } from 'framer-motion';
import SvgIcon from './SvgIcon.jsx';

export default function Featured() {
	let isMobile;
	useEffect(() => {
		isMobile = window.innerWidth < 1024;
	}, [])

	if (isMobile) {
		mainVariant, secondaryVariant, titleVariant, imgVariant, buttonVariant, iconVariant = ''
	}

	return (
		<section className="flex flex-col w-full items-center gap-12">
			<div className='grid items-center grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-20'>
				<motion.div variants={mainVariant} initial="default" whileHover='hover' className="relative w-[450px]">
					<motion.img
						src={dirtless}
						alt="dirtless detailing website landing page"
						className="h-full w-full"
						variants={imgVariant}
					/>

					<motion.div variants={secondaryVariant} className="absolute w-full flex flex-col items-center gap-8">
						<motion.strong className="text-3xl drop-shadow-xl" variants={titleVariant}>Dirt-Less Detailing</motion.strong>
						<div className="flex gap-4">
							<motion.a variants={buttonVariant} className="no-underline text-primary text-xl bg-primary text-white px-4 py-2 rounded-md" href="/project/dirtless-detailing">LEARN MORE</motion.a>
							<motion.a variants={buttonVariant} className="no-underline text-primary text-xl border-2 border-primary text-white px-4 py-2 rounded-md" href="https://www.dirtlessdetailing.com" rel="noopener" target="_blank">VISIT SITE</motion.a>
						</div>
						<motion.div variants={iconVariant} className="flex gap-4">
							<SvgIcon name="nextjs" />
							<SvgIcon name="react" />
							<SvgIcon name="sass" />
						</motion.div>
					</motion.div>
				</motion.div>
				<motion.div variants={mainVariant} initial="default" whileHover='hover' className="relative w-[450px]">
					<motion.img
						src={primebid}
						alt="Prime Bid Excel summary page"
						className="h-full w-full"
						variants={imgVariant}
					/>

					<motion.div variants={secondaryVariant} className="absolute w-full flex flex-col items-center gap-8">
						<motion.strong className="text-3xl drop-shadow-xl" variants={titleVariant}>Prime Bid Excel</motion.strong>
						<div className="flex gap-4">
							<motion.a variants={buttonVariant} className="no-underline text-primary text-xl bg-primary text-white px-4 py-2 rounded-md" href="/project/dirtless-detailing">LEARN MORE</motion.a>
						</div>
						<motion.div variants={iconVariant} className="flex gap-4">
							<SvgIcon name="excel" />
							<SvgIcon name="vb" />
						</motion.div>
					</motion.div>
				</motion.div>

				<motion.div variants={mainVariant} initial="default" whileHover='hover' className="relative w-[450px]">
					<motion.img
						src={guitario}
						alt="Guitario landing page"
						className="h-full w-full"
						variants={imgVariant}
					/>

					<motion.div variants={secondaryVariant} className="absolute w-full flex flex-col items-center gap-8">
						<motion.strong className="text-3xl drop-shadow-xl" variants={titleVariant}>Guitario</motion.strong>
						<div className="flex gap-4">
							<motion.a variants={buttonVariant} className="no-underline text-primary text-xl bg-primary text-white px-4 py-2 rounded-md" href="/project/guitario">LEARN MORE</motion.a>
							<motion.a variants={buttonVariant} className="no-underline text-primary text-xl border-2 border-primary text-white px-4 py-2 rounded-md" href="https://www.dirtlessdetailing.com" rel="noopener" target="_blank">VISIT SITE</motion.a>
						</div>
						<motion.div variants={iconVariant} className="flex gap-4">
							<SvgIcon name="reactnative" />
							<SvgIcon name="volumeUp" />
						</motion.div>
					</motion.div>
				</motion.div>

				<motion.div variants={mainVariant} initial="default" whileHover='hover' className="relative w-[450px]">
					<motion.img
						src={pottergo}
						alt="PotterGo landing page"
						className="h-full w-full"
						variants={imgVariant}
					/>

					<motion.div variants={secondaryVariant} className="absolute w-full flex flex-col items-center gap-8">
						<motion.strong className="text-3xl drop-shadow-xl" variants={titleVariant}>Potter Go</motion.strong>
						<div className="flex gap-4">
							<motion.a variants={buttonVariant} className="no-underline text-primary text-xl bg-primary text-white px-4 py-2 rounded-md" href="/project/potterGo">LEARN MORE</motion.a>
						</div>
						<motion.div variants={iconVariant} className="flex gap-4">
							<SvgIcon name="nodejs" />
							<SvgIcon name="express" />
							<SvgIcon name="ejs" />
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			<a href="/projects" className='no-underline text-txt text-xl px-4 py-2 bg-primary'>SEE ALL PROJECTS</a>
		</section>
	)
}

