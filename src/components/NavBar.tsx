import ThemeToggle from "./ThemeToggle"

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 mx-5 lg:mx-72  right-0 z-50 flex justify-between items-center px-4 py-2 bg-white  dark:bg-gray-900 shadow">
      <h1 className="text-xl font-bold">QuranMemorizer</h1>
      <ThemeToggle/>
    </div>
  )
}

export default NavBar