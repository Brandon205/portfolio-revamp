import { motion } from 'framer-motion';
import { nextVariantMain, nextVariant1, nextVariant2, nextVariant3, nextVariant4, aboutSectionVariant } from '../utils/animationVariants.js'

export default function Frameworks(props) {
    return (
        <motion.div className='flex gap-8 xl:gap-12' variants={aboutSectionVariant} whileInView="hover" initial={false}>
            {props.fullList ?
                <div>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="48px"
                        height="48px"
                        baseProfile="basic"
                        variants={nextVariantMain}
                    >
                        <linearGradient id="NRNx2IPDe7PJlJvrxOKgWa" x1="24" x2="24" y1="43.734" y2="4.266" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#0a070a" />
                            <stop offset=".465" stopColor="#2b2b2b" />
                            <stop offset="1" stopColor="#4b4b4b" />
                        </linearGradient>
                        <circle cx="24" cy="24" r="19.734" fill="url(#NRNx2IPDe7PJlJvrxOKgWa)" />
                        <motion.rect
                            width="3.023"
                            height="15.996"
                            x="15.992"
                            y="16.027"
                            fill="#fff"
                            variants={nextVariant1}
                        />
                        <linearGradient id="NRNx2IPDe7PJlJvrxOKgWb" x1="30.512" x2="30.512" y1="33.021" y2="18.431" gradientUnits="userSpaceOnUse">
                            <stop offset=".377" stopColor="#fff" stopOpacity="0" />
                            <stop offset=".666" stopColor="#fff" stopOpacity=".3" />
                            <stop offset=".988" stopColor="#fff" />
                        </linearGradient>
                        <motion.rect
                            width="2.953"
                            height="14.59"
                            x="29.035"
                            y="15.957"
                            fill="url(#NRNx2IPDe7PJlJvrxOKgWb)"
                            variants={nextVariant2}
                        />
                        <linearGradient id="NRNx2IPDe7PJlJvrxOKgWc" x1="22.102" x2="36.661" y1="21.443" y2="40.529" gradientUnits="userSpaceOnUse">
                            <stop offset=".296" stopColor="#fff" />
                            <stop offset=".521" stopColor="#fff" stopOpacity=".5" />
                            <stop offset=".838" stopColor="#fff" stopOpacity="0" />
                        </linearGradient>
                        <motion.polygon
                            fill="url(#NRNx2IPDe7PJlJvrxOKgWc)"
                            points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"
                            variants={nextVariant3}
                        />
                    </motion.svg>
                </div> : 
                <div>
                    not full icon list
                </div>
            }
        </motion.div>
    )
}