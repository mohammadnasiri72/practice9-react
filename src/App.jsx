import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import User from './content/user'
import Users from './content/Users'
import About from './content/About'
import Home from './content/Home'
import Option from './content/option'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Web from './Web'
import { createContext, useReducer } from "react";
export const changeColor = createContext(null)

const reducer = (state , action)=>{
    const newState = {...state}
    
    switch (action.type){
        case 'CHANGE_TEXT_COLOR' : {
            newState.color = action.payload
            return newState
        }
        case 'CHANGE_BG_COLOR' : {
            newState.bg = action.payload
            return newState
        }
        case 'CHANGE_BORDER_COLOR' : {
            newState.border = action.payload
            return newState
        }
        default :{
            return state
        }
    }
  }
  
  const initialState = { 
    color  : '#000000' , 
    border : '#b7b7ce' ,
    bg     : '#b7b7ce'
  }

export default function App() {
    const [state , dispatch]= useReducer(reducer , initialState)

    return (
        <>
            <changeColor.Provider value={dispatch}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Web styleText={state.color} styleBorder={state.border} styleBg={state.bg}></Web>}>
                                <Route path='/' element={<Home></Home>}></Route>
                                <Route path='/About' element={<About></About>}></Route>
                                <Route path='/User' element={<User></User>}></Route>
                                <Route path='/User/:username' element={<Users></Users>}></Route>
                                <Route path='/options' element={<Option></Option>}></Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
            </changeColor.Provider>
        </>
    )
}

