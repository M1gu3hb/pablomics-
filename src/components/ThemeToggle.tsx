import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Portfolio } from '../data/portfolio'

const getInitialTheme = () => {
  const storedTheme = window.localStorage.getItem('psm-theme')
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

type ThemeToggleProps = {
  copy: Portfolio['interfaceCopy']['theme']
}

export function ThemeToggle({ copy }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('psm-theme', theme)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={isDark ? copy.lightLabel : copy.darkLabel}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb">
          {isDark ? <Moon size={13} /> : <Sun size={13} />}
        </span>
      </span>
    </button>
  )
}

