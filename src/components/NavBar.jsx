import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const names = [
    {line1: 'Brandon', line2: 'Black'},
    {line1: 'Yet Another', line2: 'Portfolio Site'},
    {line1: 'Brandon', line2: 'Black.dev'},
    {line1: 'Yet Another', line2: 'Seattle Developer'},
]

const navMotion = {
    visible: {
      opacity: 1,
  
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  }
  const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  const itemMotionDesktop = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: 0 },
  }
  const navLinks = [
    { name: "Home", href: "/", id: 1 },
    { name: "Projects", href: "/projects", id: 2 },
    { name: "About", href: "/about", id: 3 },
  ]
  
  const NavLinks = ({isMobile}) => (
    <div className={isMobile ? 'flex flex-col gap-24 text-lg' : 'flex gap-12'}>
      {navLinks.map(({ name, href, id }) => (
        <motion.a
          key={id}
          variants={isMobile ? itemMotion : itemMotionDesktop}
          href={href}
          className='text-xl'
        >
          {name}
        </motion.a>
      ))}
    </div>
  )

export default function NavBar() {
    const [line1, setLine1] = useState(names[0].line1);
    const [line2, setLine2] = useState(names[0].line2);
    const [toggled, setToggled] = useState(false);

    function changeName() {
        let index = Math.floor(Math.random() * 4)
        if (line1 === names[index].line1) {
            if (index >= names.length - 1) {
                index = 0;
            } else {
                index++;
            }
        }
        setLine1(names[index].line1);
        setLine2(names[index].line2);
    }

    return (
        <nav className='bg-primary flex justify-between px-4 relative items-center'>
            <div onMouseEnter={() => changeName()}>
                <p className='text-3xl'>{line1}</p>
                <p className='text-3xl'>{line2}</p>
            </div>

            {toggled && (
                <motion.div
                    variants={navMotion}
                    animate="visible"
                    initial="hidden"
                    className="fixed left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-24 bg-white text-2xl font-bold"
                >
                    <NavLinks isMobile={true} />
                </motion.div>
            )}

            <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 25 }}
                transition={{ delay: 0.35 }}
                className="hidden xl:flex xl:items-center xl:justify-center xl:gap-12 xl:text-lg"
            >
                <NavLinks isMobile={false} />
            </motion.div>

            <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 25 }}
                transition={{ delay: 0.35 }}
                onClick={() => setToggled(!toggled)}
                className="z-50 cursor-pointer space-y-1.5 xl:hidden"
            >
                <motion.span
                animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
                className="line-1 block h-0.5 w-8 bg-secondary"
                ></motion.span>

                <motion.span
                animate={{ width: toggled ? 0 : 24 }}
                className="line-2 block h-0.5 w-6 bg-secondary"
                ></motion.span>

                <motion.span
                animate={{
                    rotateZ: toggled ? -45 : 0,
                    y: toggled ? -8 : 0,
                    width: toggled ? 32 : 24,
                }}
                className="line-3 block h-0.5 w-4 bg-secondary"
                ></motion.span>

            </motion.div>
        </nav>
    )
}