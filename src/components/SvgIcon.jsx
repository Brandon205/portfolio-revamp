import * as icons from '../icons/icons.jsx';

const links = {
    "astro": "https://astro.build/",
    "css3": "https://en.wikipedia.org/wiki/CSS",
    "ejs": "https://ejs.co/",
    "excel": "https://en.wikipedia.org/wiki/Microsoft_Excel",
    "express": "https://expressjs.com/",
    "firebase": "https://firebase.google.com/",
    "graphql": "https://graphql.org/",
    "html5": "https://html.com/html5/",
    "java": "https://www.java.com/en/",
    "javascript": "https://www.javascript.com/",
    "mongodb": "https://www.mongodb.com/",
    "nextjs": "https://nextjs.org/",
    "nodejs": "https://nodejs.org/en",
    "python": "https://www.python.org/",
    "react": "https://react.dev/",
    "reactnative": "https://reactnative.dev/",
    "sass": "https://sass-lang.com/",
    "typescript": "https://www.typescriptlang.org/",
    "vb": "https://learn.microsoft.com/en-us/office/vba/api/overview/excel",
    "volume-up": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",
}

const titles = {
    "astro": "Astro Framework",
    "css3": "Cascading Style Sheets (CSS)",
    "ejs": "Embedded JavaScript Templating (EJS)",
    "excel": "Microsoft Excel",
    "express": "Express JS",
    "firebase": "Google Firebase",
    "graphql": "GraphQL",
    "html5": "Hyper Text Markup Language",
    "java": "Java Programming Language",
    "javascript": "JavaScript",
    "mongodb": "MongoDB",
    "nextjs": "Next JS",
    "nodejs": "Node JS",
    "python": "Python Programming Language",
    "react": "React Javascript Framework",
    "reactnative": "React Native",
    "sass": "Syntactically Awesome Stylesheet",
    "typescript": "Typescript Programming Language",
    "vb": "Visual Basic for Applications",
    "volume-up": "Web Audio API",
}

// <SvgIcon name="react" />
export default function SvgIcon(props) {
    return (
        <a href={links[props.name]} title={titles[props.name]} target="_blank" rel="noopener">
            {icons[props.name]}
        </a>
    )
}