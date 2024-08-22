import type { ReactNode } from 'react'
import { Button } from './ui/button'

export const ScrollButton = ({
  children,
  className,
  target,
}: {
  children: ReactNode
  className?: string
  target: string
}) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    console.log('click', element)
    if (element) {
      element.scrollIntoView()
    }
  }

  return (
    <Button
      className={className ? className : ''}
      onClick={() => handleScroll(target)}
    >
      {children}
    </Button>
  )
}
