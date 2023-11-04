export const mainVariant = {
    default: { opacity: 1 },
    hover: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.2
        }
    },
    
}

export const secondaryVariant = {
    default: { y: 0 },
    hover: {
        y: -225,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.2
        }
    },
}

export const thirdVariant = {
    default: {},
    hover: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.2
        }
    }
}

export const titleVariant = {
    default: { y: 0 },
    hover: { y: 0 }
}

export const imgVariant = {
    default: { filter: 'blur(0) brightness(100%)' },
    hover: { filter: 'blur(4px)brightness(50%)' },
}

export const buttonVariant = {
    default: { opacity: 0 },
    hover: { opacity: 1 }
}

export const iconVariant = {
    default: { opacity: 0 },
    hover: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.5
        }
    }
}

// SVG ICON VARIANTS FOR FEATURED SECTION

export const nextVariantMain = {
    default: { opacity: 0, y: -100 },
    hover: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

export const nextVariant1 = {
    default: {opacity: 0, x: -10},
    hover: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5,
            duration: 0.5
        }
    }
}

export const nextVariant2 = {
    default: {opacity: 0, x: 10},
    hover: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.7,
            duration: 0.5
        }
    }
}

export const nextVariant3 = {
    default: { opacity: 0, y: -20 },
    hover: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5
        }
    }
}

export const reactVariant = {
    default: { opacity: 0, scale: 0.5 },
    hover: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.75
        }
    }
}

export const sassVariant = {
    default: { opacity: 0, scale: 0.5 },
    hover: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1
        }
    }
}