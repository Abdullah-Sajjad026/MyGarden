import type { TwemojiProps } from '@/types'
import { toKebabCase } from '@/utils'

export function Twemoji({ emoji, size = 'twa-lg', className }: TwemojiProps) {
  const cls = `inline-block twa ${size} twa-${toKebabCase(emoji)} ${className || ''}`
  return <i className={cls.trim()} />
}

export default Twemoji
