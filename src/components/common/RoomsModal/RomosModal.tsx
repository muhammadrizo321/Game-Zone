"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import z from "zod";
const roomSchema = z.object({
    name: z.string().min(2, "Xona nomi: Kamida ikkita harf bo'lishi kerak!").max(20, "Xonalar nomi: 20 harfdan kam bo'lish shart"),
    price: z.number()
})

type TRoom = z.infer <typeof roomSchema>


export function RoomsModal() {

    const {register, handleSubmit} = useForm<TRoom>()

const onsubmit = (room: TRoom)=> {

}
 console.log(onsubmit)
  return (
    <Dialog>
      
        <DialogTrigger className="ml-auto" asChild>
          <Button>
            <Plus/>
          <span>  Xona qo'shish</span>
          </Button>
        </DialogTrigger>
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
            </Field>
            <Field>
              <Label htmlFor="price-1">Xonanig narxi </Label>
              <Input 
              type="number" id="price-1"  
              placeholder="Masalan: 1 saot 15 ming"
              {...register("price", {valueAsNumber:true})} />
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
    </Dialog>
  )
}
