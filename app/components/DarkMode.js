import { useTheme } from "next-themes"

export default function DarkMode() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="dark:text-light"
        suppressHydrationWarning
      >
        Turn {theme === "dark" ? "On" : "Off"} Lights
      </button>
    </div>
  )
}
