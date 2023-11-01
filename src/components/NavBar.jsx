import { useState } from 'react';

const names = [
    {line1: 'Brandon', line2: 'Black'},
    {line1: 'Yet Another', line2: 'Portfolio Site'},
    {line1: 'Brandon', line2: 'Black.dev'},
    {line1: 'Yet Another', line2: 'Seattle Developer'},
]

export default function NavBar() {
    const [line1, setLine1] = useState(names[0].line1);
    const [line2, setLine2] = useState(names[0].line2);

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
        <nav className='bg-primary'>
            <div onMouseEnter={() => changeName()}>
                <p>{line1}</p>
                <p>{line2}</p>
            </div>
        </nav>
    )
}