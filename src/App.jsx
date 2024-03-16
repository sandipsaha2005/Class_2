import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(5)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [specialChar,setSpecialChar] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (specialChar) str += "~!@#$%^&*()_-";
    for (let index = 0; index < length; index++) {
      let charIdx = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIdx);
    }
    setPassword(pass);
  }, [length, numberAllowed, specialChar,setPassword]);
  
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,specialChar,setPassword]);

  return (
    <>
      <div className='bg-gray-400 w-full mx-w-md mx-auto px-4 py-3 rounded text-white'>
        <h1 className='text-center px-2 py-3 text-3xl'>Password Generator</h1>
        <div className='flex rounded justify-center '>
          <input type="text" name="" id="" value={password} placeholder={password} className='rounded py-3 px-2 h-10 bg-black text-white' readOnly/>
          <button className='bg-green-400 shadow mb-4 px-3 py-3 rounded text-white shrink-0 h-10'>Copy</button>
        </div>
        <div className='flex justify-center gap-5'>
          <div className='flex items-center'>
            <input type="range" min={5} max={20} value={length} onChange={(e)=> {
            setLength(e.target.value);
            
            }} className='' />
            
            <label htmlFor=""> Length: {length} </label>
          </div>
          <div className='flex items-center'>
            <input type="checkbox" name="" id="" defaultChecked={numberAllowed} onChange={()=>{
              setNumberAllowed((prev)=>!prev);
              
              }}
            />
            <label htmlFor="">Number</label>
          </div>
          <div className='flex items-center'>
            <input type="checkbox" name="" id="" defaultChecked={specialChar}  onChange={()=>{
              setSpecialChar((prev)=>!prev);
             
            }}/>
            <label htmlFor="">Characher</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
