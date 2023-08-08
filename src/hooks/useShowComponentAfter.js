import { useState, useRef } from "react";

export default function(after=2000, closeAfter){
    const [open, setOpen] = useState(false);
    const openRef = useRef(null);
    const closeRef = useRef(null);

    const show = () => {
        cut();

        openRef.current = setTimeout(() => {
            setOpen(true);

            if(closeAfter && typeof(closeAfter) === 'number')
            {
                closeRef.current = setTimeout(() => setOpen(false), closeAfter);
            }
        }, after);
    }

    const hide = () => {
        cut();
        setOpen(false);
    }

    const cut = () => {
        if(openRef.current) clearTimeout(openRef.current);
        if(closeRef.current) clearTimeout(closeRef.current);
    }

    return {open, show, hide, cut};
}