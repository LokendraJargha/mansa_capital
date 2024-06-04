"use client"
import { useEffect, useState } from "react"
import useAuthStore from "../../../config/userStore"
import Sidebar from "@/components/ui/sidebar"
import Header from "@/components/ui/header"
export default function UserLayout({children}){
    const { _hasHydrated } = useAuthStore()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [_hasHydrated])
    return _hasHydrated && mounted &&  (
        <div className="flex flex-col h-screen">
      <div className="fixed w-full top-0 z-10">
        <Header />  
      </div>
      <div className="flex flex-row flex-1 pt-14 bg-zinc-200">
        <div className="w-[20%] h-full fixed top-16">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 ml-[20%] overflow-y-auto overflow-x-auto mt-5 bg-zinc-200">
          <div className="flex-1 ">{children}</div>
        </div>
      </div>
    </div>
)
}
