import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';


export default function DemoButton() {
    const dispatch = useDispatch()
    const credential = "The Stig"
    const password = "passy12"

    const demoLog = () => {
        return dispatch(login({ credential, password }))
    }


    return (
        <>
            <span className="demo-button" onClick={() => demoLog()}>
                Demo
            </span>
        </>
    )
}
