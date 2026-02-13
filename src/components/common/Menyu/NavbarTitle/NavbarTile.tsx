"use client";
import { usePathname } from "next/navigation"


function NavbarTile() {
  const pathname = usePathname()
  let title: string; 
  if (pathname == "/dashboard/rooms") title = "Xonalar";
  else title = "Asosiy"
  return (
    
    

      <h2 className="text-2xl font-bold ">
{title}
      </h2>

    
   )
}

export default NavbarTile
