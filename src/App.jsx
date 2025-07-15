import { useReducer, useState } from 'react'
import './App.css'
import SideBar from './components/SideBar';
import MainForm from './components/MainForm';
import NavigationButtons from './components/NavigationButtons';
import navStateReducer from './Reducers/navStateReducer';
import { navStateContext } from './Contexts/NavStateContext';

function App() {

  const initialState= {
    step : 1,
    direction: 1
  }
  

  const [navState, navStateDispatch]= useReducer(navStateReducer, initialState);


  return (
    <navStateContext.Provider value={{navState, navStateDispatch}}>
      <main className='min-h-screen h-full w-full font-ubuntu bg-blue-50 text-base md:flex md:items-center md:justify-center'>
        <div className='z-10 relative w-full h-full flex flex-col md:bg-White md:flex-row md:w-[90%] lg:w-[75%] xl:w-[65%] md:p-3 md:rounded-xl'>

          <div className="md:w-[30%] md:relative"> 
            <img className='hidden absolute w-full h-full left-0 -z-10 object-cover rounded-lg md:block' src="/multi-step-form/assets/images/bg-sidebar-desktop.svg" alt="" />
            <SideBar />
          </div>
          <div className='md:w-[70%] md:flex md:justify-center md:px-5 lg:px-10'>

            <MainForm />
          </div>
        </div>
      </main>
    </navStateContext.Provider>
  )
}

export default App
