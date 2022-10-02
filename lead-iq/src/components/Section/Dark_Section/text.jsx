import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const tags = [
    'Find prospect data.',
    'Track sales triggers.',
    'Personalize cold outreach.',
    'Build sales pipeline by prospecting smarter.'
];

const Text = () => {
    const style = {
        marginButtom: '10px',
        color: '#dae2e3',
        fontSize: '26px',
        lineHeight: '1.2em',
        fontWeight: '400',
        fontFamily: `'Circular Std', sans-serif`,
    }
    const [newTag, setNewtag] = useState("");

    const tag = useCallback(() => {
        let index = Math.floor(Math.random() * tags.length);
        setNewtag(tags[index]);
    }, []);

    useEffect(() => {
        const id = setInterval(tag, 2000);
        return () => clearInterval(id);
    }, [tag]);

    return (
        <>
        <p style={style}>{newTag}</p>
        </>
    )
}

export default Text;