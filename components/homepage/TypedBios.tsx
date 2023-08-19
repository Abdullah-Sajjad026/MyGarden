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
      backSpeed: 20,
      loop: true,
      backDelay: 2500,
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
          They call me a <b className="font-medium">Young Programming Ninja</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">BASIC</b>.
        </li>
        <li>I make businesses shine on the web.</li>
        <li>I'm focusing on improving my project architecture skills.</li>
        <li>I work mostly with JS/TS technologies.</li>
        <li>
          I'm somewhat a sport-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />
          </span>
          .
        </li>
        <li>
          I also like playing chess <Twemoji emoji="chess-pawn" />.
        </li>
        <li>
          I am good at playing video games <Twemoji emoji="video-game" />, played PUBG a lot.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
