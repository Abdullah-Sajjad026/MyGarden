import React from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'

export default function TypedBios() {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>I'm a learner, builder, and freedom seeker.</li>
        <li>
          I live in <b className="font-medium">Rahim Yar Khan</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">BASIC</b>.
        </li>
        <li>I love web development.</li>
        <li>I'm focusing on getting better at MERN Stack development.</li>
        <li>I work mostly with JS/TS technologies.</li>
        <li>
          I'm somewhat a sport-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />
          </span>
          .
        </li>
        <li>
          I love playing chess <Twemoji emoji="chess-pawn" />.
        </li>
        <li>
          I love playing video game <Twemoji emoji="video-game" />, PUBG Mobile is my favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
