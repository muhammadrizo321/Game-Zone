import NavbarTile from "@/components/common/Menyu/NavbarTitle/NavbarTile";
import Sidebar from "@/components/layouts/Sidebar/Sidebar";
import { ReactNode } from "react";

export default function DashboartLayout({children} : {children : ReactNode}) {

return ( <div className="w-full h-full flex">
<Sidebar/>
<div className="grow flex flex-col">
   <NavbarTile/>
    <main className="grow overflow-y-auto py-4 px-4">{children}</main>
</div>
</div> )
}