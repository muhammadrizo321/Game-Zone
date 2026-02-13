"use client"

import { Button } from "@/components/ui/button"
import {
  
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



import InputError from "../inputError/InputError"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Dispatch, SetStateAction } from "react"

import { useSetRooms } from "@/hooks/useSetRooms"

const roomSchema = z.object({
    name: z.string().min(2, "Xona nomi: Kamida ikkita harf bo'lishi kerak!").max(20, "Xonalar nomi: 20 harfdan kam bo'lish shart"),
    price: z.number("raqam bolishi shar").min(5000, "Kamida 5000 so'm bo'lishi kerak").max(100000,"Narx yuz mig so'mdan ko'p bo'lmasin!" )
})
 export type TRoom = z.infer <typeof roomSchema>

type Props = {
    setSHowModal: Dispatch<SetStateAction<boolean>>
}

function RoomsModalFrom({setSHowModal}: Props) {

const {setRoom} = useSetRooms()

     const {register,
         handleSubmit,
         reset,
          formState: {errors} } = useForm<TRoom>({
            resolver: zodResolver(roomSchema),
        })
    
    const onsubmit = (room: TRoom)=> {
    setRoom(room)

    reset();
    setSHowModal(false);
    }
    
  return (
   <DialogContent className="sm:max-w-sm">
<form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Xona Yarating</DialogTitle>
            <DialogDescription>
            <i>
                 Profilingizga bu yerda o‘zgartirishlar kiriting. Tugatgach, saqlash tugmasini bosing.
            </i>
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field className="gap-1">
              <Label htmlFor="name-1">Xonaning nomi yoki raqami</Label>
              <Input id="name-1" 
                    {...register("name")}
              placeholder="Masalan: 01-xona"/>
{errors.name && <InputError message={errors.name.message}/>}
            </Field>
            <Field>
              <Label htmlFor="price-1">Xonanig narxi </Label>
              <Input 
              type="number" id="price-1"  
              placeholder="Masalan: 1 saot 15 ming"
              {...register("price", {valueAsNumber:true})} />
{errors.price && <InputError message={errors.price.message}/>}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Bekor qilish</Button>
            </DialogClose>
            <Button type="submit">Xona ochish</Button>
          </DialogFooter>
        </form>
       </DialogContent>
  )
}

export default RoomsModalFrom
