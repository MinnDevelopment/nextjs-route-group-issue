"use client";
import { use } from "react";

export default function PageC() {
    use(new Promise((resolve) => setTimeout(resolve, 2000)));
    return <>Page C</>
}