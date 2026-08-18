import { atom } from "jotai";


export const counterAtom = atom(0)

export const even = atom((get)=>{
    const count = get(counterAtom)

    return count % 2
})