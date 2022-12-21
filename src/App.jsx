import React from 'react'
import { motion } from "framer-motion"
import { useState, useEffect } from 'react'

function App() {

  const [todolist, setTodolist] = useState([])
  const [text, setText] = useState("")

  const onTextChange = ({ target: { value } }) => {
    setText(value)
  }

  const addTodo = (event) => {
    event.preventDefault(); //ไม่ให้รีหน้า
    setTodolist([
      ...todolist,
      text
    ])

    setText("")
  }


  return (
    <div className=" bg-gradient-to-r from-gray-600 to-slate-800 h-screen max-w-screen">
      <div>
        <div className='text-white flex justify-center items-center max-w-screen h-screen font-thin '>
          <div className=' w-screen h-screen'>
            <form className=''>
              <label className='flex justify-center items-center mt-11'>
                <motion.input type="text" value={text} whileHover={{ scale: 1.3 }} onChange={onTextChange} className='text-black p-2 text-[1.4rem]  border-1 border-gray-900 rounded-xl' placeholder='type here . . ' />
              </label>
              <div className='flex justify-center items-center mt-5 my-4 bg'>
                <motion.button whileHover={{ scale: 1.3 }} onClick={addTodo} className='text-[1.5rem] ' type="submit">submit</motion.button>
              </div>
            </form>
            <div className='pt-6 justify-center items-center h-auto max-w-screen'>
              {todolist.length > 0 && todolist.map((todo, index) => {
                return (
                  <motion.div className='flex justify-center tex items-center w-auto h-auto mt-4 grid-cols-4 text-[1.5rem]' key={index}>{todo}</motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
