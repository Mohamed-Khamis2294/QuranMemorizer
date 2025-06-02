import ThemeToggle from "./ThemeToggle"

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl font-bold">QuranMemorizer</h1>
      <ThemeToggle/>
    </div>
  )
}

export default NavBar