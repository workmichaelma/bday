import './App.css'
import { useState } from 'react'

function App() {
  const [screen, setScreen] = useState(0)
  return (
    <div className='flex w-screen h-screen bg-zinc-800'>
      <div
        className='flex w-full h-full justify-center items-center'
        onClick={() => {
          if (screen < 7) setScreen(screen + 1)
          else {
            window.open(
              'https://www.dior.com/ja_jp/fashion/products/search?query=montaigne+30+bag',
              '_blank'
            )
            setScreen(0)
          }
        }}
      >
        {screen === 0 && (
          <img
            src='/images/11-1.thumb128.gif'
            className='w-40 h-40'
            alt='0'
          />
        )}
        {screen === 1 && (
          <img
            src='/images/17-1.thumb128.gif'
            className='w-40 h-40'
            alt='0'
          />
        )}
        {screen === 2 && (
          <div className=''>
            <img
              src='/images/1-1.thumb128.gif'
              className='w-50 h-50'
              alt='0'
            />
            <img
              src='/images/4-1.thumb128.gif'
              className='w-40 h-40 fixed left-0 top-0 -scale-x-[1]'
              alt='0'
            />
            <img
              src='/images/4-1.thumb128.gif'
              className='w-40 h-40 fixed right-0 top-0'
              alt='0'
            />
            <img
              src='/images/4-1.thumb128.gif'
              className='w-40 h-40 fixed left-0 bottom-0 -scale-x-[1]'
              alt='0'
            />
            <img
              src='/images/4-1.thumb128.gif'
              className='w-40 h-40 fixed right-0 bottom-0'
              alt='0'
            />
          </div>
        )}
        {screen === 3 && (
          <img
            src='/images/29-1.thumb128.gif'
            className='w-30 h-30'
            alt='0'
          />
        )}
        {screen === 4 && (
          <div className=''>
            <img
              src='/images/7-1.thumb128.gif'
              className='w-30 h-30'
              alt='0'
            />
            <img
              src='/images/23-1.thumb128.gif'
              className='w-20 h-20 fixed left-0 top-0 -scale-x-[1]'
              alt='0'
            />
            <img
              src='/images/23-1.thumb128.gif'
              className='w-20 h-20 fixed right-0 top-0'
              alt='0'
            />
            <img
              src='/images/3333-1.thumb128.gif'
              className='w-20 h-20 fixed left-0 bottom-0 -scale-x-[1]'
              alt='0'
            />
            <img
              src='/images/3333-1.thumb128.gif'
              className='w-20 h-20 fixed right-0 bottom-0'
              alt='0'
            />
          </div>
        )}
        {screen === 5 && (
          <div className=''>
            <img
              src='/images/2333-1.thumb128.gif'
              className='w-40 h-40'
              alt='0'
            />
            <img
              src='/images/5-1.thumb128.gif'
              className='w-40 h-40 fixed right-0 top-0'
              alt='0'
            />
            <img
              src='/images/211-1.thumb128.gif'
              className='w-40 h-40 fixed left-0 top-0'
              alt='0'
            />
            <img
              src='/images/18-1.thumb128.gif'
              className='w-40 h-40 fixed left-0 bottom-0'
              alt='0'
            />
            <img
              src='/images/22-1.thumb128.gif'
              className='w-40 h-40 fixed right-0 bottom-0'
              alt='0'
            />
          </div>
        )}
        {screen === 6 && (
          <img
            src='/images/3-1.thumb128.gif'
            className='w-30 h-30'
            alt='0'
          />
        )}
        {screen === 7 && (
          <img
            src='/images/0-1.thumb128.gif'
            className='w-40 h-40'
            alt='0'
          />
        )}
      </div>
    </div>
  )
}

export default App
