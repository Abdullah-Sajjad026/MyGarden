import React from 'react'
import clsx from 'clsx'
import Typed from 'typed.js'

export default function Greeting() {
  const className = clsx(
    'bg-gradient-to-r from-violet-500 to-purple-500 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600',
    'mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  )

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Selam,', 'Hello,', 'Hola,', 'Howdy,', 'Gracias,'],
      typeSpeed: 300,
      shuffle: true,
      loop: true,
      backDelay: 2000,
      backSpeed: 100,
      //  showCursor: false
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return (
    <div className={className}>
      <span ref={el} /> fellow! <i className="twa twa-waving-hand"></i>
    </div>
  )
}
