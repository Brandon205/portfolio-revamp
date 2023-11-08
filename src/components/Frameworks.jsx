import { motion } from 'framer-motion';
import { aboutSectionVariant } from '../utils/animationVariants.js'
import SvgIcon from './SvgIcon.jsx';

export default function Frameworks(props) {
    return (
        <motion.div variants={aboutSectionVariant} whileInView="hover" initial='default'>
            {props.fullList ?
                <div className="flex gap-8 xl:gap-12">
                    <SvgIcon name='astro' />
                    <SvgIcon name='nextjs' />
                    <SvgIcon name='react' />
                    <SvgIcon name='javascript' />
                    <SvgIcon name='typescript' />
                    <SvgIcon name='python' />
                    <SvgIcon name='mongodb' />
                </div> : 
                <div className="flex gap-8 xl:gap-12">
                    <SvgIcon name='astro' />
                    <SvgIcon name='nextjs' />
                    <SvgIcon name='react' />
                    <SvgIcon name='javascript' />
                    <SvgIcon name='typescript' />
                    <SvgIcon name='python' />
                    <SvgIcon name='mongodb' />
                </div>
            }
        </motion.div>
    )
}