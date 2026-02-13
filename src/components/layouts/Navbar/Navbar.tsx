import NavbarTile from "@/components/common/Menyu/NavbarTitle/NavbarTile"
import { ThemeController } from "@/components/common/ThemeController/ThemeController"



function Navbar() {
  return (
    <header className="py-4 px-8 shadow-sm border-b flex items-center justify-between">
<NavbarTile/>
<ThemeController/>
    </header>
  )
}

export default Navbar
