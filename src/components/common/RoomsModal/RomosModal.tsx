"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"

import { zodResolver } from "@hookform/resolvers/zod"

import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import z from "zod";

import RoomsModalFrom from "../RoomsModalFrom/RoomsModalFrom"
import { useState } from "react"
const roomSchema = z.object({
    name: z.string().min(2, "Xona nomi: Kamida ikkita harf bo'lishi kerak!").max(20, "Xonalar nomi: 20 harfdan kam bo'lish shart"),
    price: z.number("raqam bolishi shar").min(5000, "Kamida 5000 so'm bo'lishi kerak").max(100000,"Narx yuz mig so'mdan ko'p bo'lmasin!" )
})

type TRoom = z.infer <typeof roomSchema>


export function RoomsModal() {

  const [showModal, setSHowModal] = useState(false)
 
  return (
    <Dialog open={showModal} onOpenChange={setSHowModal}>
        <DialogTrigger className="ml-auto" asChild>
          <Button>
            <Plus/>
          <span>  Xona qo'shish</span>
          </Button>
        </DialogTrigger>
{showModal && <RoomsModalFrom setSHowModal={setSHowModal}/>}
    </Dialog>
  );
}
