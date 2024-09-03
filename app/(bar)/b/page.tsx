"use client";
import { use } from "react";

export default function PageB() {
    use(new Promise((resolve) => setTimeout(resolve, 2000)));
    return <>Page B</>
}