import { useContext } from "react"
import { changeColor } from '../App'

const textAction = (e) => {
    return {
        type: 'CHANGE_TEXT_COLOR',
        payload: e
    }
}
const borderAction = (e) => {
    return {
        type: 'CHANGE_BORDER_COLOR',
        payload: e
    }
}
const bgAction = (e) => {
    return {
        type: 'CHANGE_BG_COLOR',
        payload: e
    }
}

export default function Option() {
    const dispatch = useContext(changeColor);
    const themeHandler1 = () => {
        dispatch({ type: 'CHANGE_TEXT_COLOR', payload: 'red' })
        dispatch({ type: 'CHANGE_BORDER_COLOR', payload: 'green' })
        dispatch({ type: 'CHANGE_BG_COLOR', payload: 'blue' })
    }
    const themeHandler2 = () => {
        dispatch({ type: 'CHANGE_TEXT_COLOR', payload: 'green' })
        dispatch({ type: 'CHANGE_BORDER_COLOR', payload: 'blue' })
        dispatch({ type: 'CHANGE_BG_COLOR', payload: 'red' })
    }
    const themeHandler3 = () => {
        dispatch({ type: 'CHANGE_TEXT_COLOR', payload: 'blue' })
        dispatch({ type: 'CHANGE_BORDER_COLOR', payload: 'red' })
        dispatch({ type: 'CHANGE_BG_COLOR', payload: 'green' })
    }
    return (
        <>
            <div className="w-75 m-2 test2">
                <h1>{`Options`}</h1>
                <p>this is options page</p>
                <p><span>Text Color : </span> <input onChange={(e) => {
                    dispatch(textAction(e.target.value))
                }} type="color" /></p>
                <p><span>Border Color : </span> <input onChange={(e) => {
                    dispatch(borderAction(e.target.value))
                }} type="color" /></p>
                <p><span>bg Color : </span> <input onChange={(e) => {
                    dispatch(bgAction(e.target.value))
                }} type="color" /></p>
                <div className="d-flex">
                    <h3>select theme : </h3>
                    <button className='btns' onClick={themeHandler1}>theme 1</button>
                    <button className='btns' onClick={themeHandler2}>theme 2</button>
                    <button className='btns' onClick={themeHandler3}>theme 3</button>
                </div>
            </div>
        </>
    )
}

