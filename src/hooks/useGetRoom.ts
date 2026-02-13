"use client" 

import { getRoom } from "@/firebase/firebaseRoom"
import { FullRoomType } from "@/types/types"
import { useEffect, useState } from "react"


export const useGetRooms = () => {
    const [rooms, setrooms] = useState<FullRoomType[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fullData= getRoom((data) => {
            setrooms(data) 
            setLoading(false)
        })
        return () => fullData()
    }, [])

    return {rooms, loading}
};