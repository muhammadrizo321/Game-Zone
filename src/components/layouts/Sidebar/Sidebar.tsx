
import Menyu from "@/components/common/Menyu/Menyu"
import { Gamepad} from "lucide-react"





function Sidebar() {
    
  return (
    <div className="px-1 py-4 min-w-72 border-r-2 ">
      Siad
      <h1 className="font-bold text-2xl flex items-center justify-center gap-1 mb-4">
        <Gamepad size={40}/>Game Club
      </h1>

      <Menyu/>
    </div>
  )
}

export default Sidebar
