import { useEffect } from 'react';
import dirtless from '../assets/dirtlessDetailing.jpg?url';
import next from '../icons/nextjs.png?url';
import react from '../icons/react.png?url';
import sass from '../icons/sass.png?url';
import { motion } from 'framer-motion'

export default function Featured() {
	let isMobile;
	useEffect(() => {
		isMobile = window.innerWidth < 1024;
	}, [])

	let mainVariant, imgVariant, buttonVariant, iconVariant;
	if (!isMobile) {
		mainVariant = {
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		}
	
		imgVariant = {
			hover: { filter: 'blur(8px)' },
		}
		
		buttonVariant = {
			default: { opacity: 0 },
			hover: { opacity: 1 }
		}
		
		iconVariant = {
			default: { opacity: 0 },
			hover: { opacity: 1 },
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.3
			}
		}
	}

	return (
		<section className="flex w-full justify-center">
			<div>
				<motion.div variants={mainVariant} className="relative w-[450px]">
					<motion.img
						src={dirtless}
						alt="dirtless detailing website landing page"
						className="h-full w-full"
						variants={imgVariant}
						whileHover="hover"
					/>

					<motion.strong className="text-3xl">Dirt-Less Detailing</motion.strong>

					<motion.div variants={mainVariant} className="flex flex-col items-center gap-8">
						<motion.div className="flex gap-4">
							<motion.div variants={buttonVariant} className="button">LEARN MORE</motion.div>
							<motion.div variants={buttonVariant} className="button">VISIT SITE</motion.div>
						</motion.div>
						<motion.div variants={mainVariant} className="flex gap-4">
							<motion.img src={next} variants={iconVariant} initial="default" className="w-[48px]" alt="Nextjs icon" />
							<motion.img src={react} variants={iconVariant} initial="default" animate="hover" className="w-[48px]" alt="React icon" />
							<motion.img src={sass} variants={iconVariant} initial="default" animate="hover" className="w-[48px]" alt="Sass icon" />
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			<div>SEE ALL PROJECTS</div>
		</section>
	)
}

