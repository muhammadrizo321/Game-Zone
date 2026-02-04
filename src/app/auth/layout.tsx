import { ReactNode } from "react";

export default function AuthLayout({ children }: {chidren: ReactNode}) {
    return <div className="w-full h-full flex items-center justify-center">
        {children}
    </div> 
}