import React, { useRef, useState } from "react"

interface Person {
    firstName: string,
    lastName: string
}

interface Props {
    text: string
    ok?: boolean // <----- makes them optional with ?
    i?: number
    fn?: (bob: string) => string
    person: Person // <------ Person is now added to props / Person is object of type props
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

interface TextNode {
    text: string
}

export const TextField: React.FC<Props> = ({handleChange}) => {
    const [count, setCount] = useState<number | null | undefined>(5) // | is "or" in typescript, so now it can be <number "or"| null>
    const [ count2, setCount2 ] = useState<TextNode>({text: 'hello'})
    const inputRef = useRef<HTMLInputElement>(null) // for input elements use HTMLInputElement and put value in ()
    const divRef = useRef<HTMLDivElement>(null) // for div elements use HTMLDivElement and put value in () enz. enz.

    setCount(undefined)

    // Hover over attributes to see what they demand from you

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}