
//* 1 npm install --save typescript @types/node @types/react @types/react-dom @types/jest


//* 2 npx tsc --init


// * if you need --
// Suppress TypeScript errors by adding // @ts-ignore on the line before the error
// If a file uses jsx(i.e. < App />), the file extension must be.tsx instead of.ts


// I want to share a tip.If you find that something implicitly has the type any
// and you’re not sure how to fix it in that moment, don’t.Create this and use it to hush the error:

// export type FixMeLater = any


// STEPS FOR TS CONVERSION
// Add TypeScript
// Add tsconfig.json
// Start simple
// Convert all files
// Increase strictness
// Clean it up

//EXAMPLE
/*

import React, { MouseEventHandler } from 'react'
import { buttonStyles } from './Button.styles'

type Props = {
    onClick: MouseEventHandler,
    text: string,
}

const Button = ({ onClick, text }: Props) => (
    <button onClick={onClick} className={buttonStyles}>
        {text}
    </button>
)

export default Button

*/