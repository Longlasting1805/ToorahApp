'use client';

import { useState } from "react"; 
import Hamburger from "hamburger-react";

export default function HamburgerComponent() {
    const [open, setOpen] = useState(false);
    return <div>
        <Hamburger />
    </div>;
}