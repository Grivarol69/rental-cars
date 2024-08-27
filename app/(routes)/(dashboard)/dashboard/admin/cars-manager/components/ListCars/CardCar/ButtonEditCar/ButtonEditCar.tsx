"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Pencil } from "lucide-react";
import { useState } from "react";

import { ButtonEditCarProps } from "./ButtonEditCar.type";
import { FormEditCar } from "../FormEditCar";

export function ButtonEditCar(props: ButtonEditCarProps) {
  const { carData } = props;
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog}>
      <VisuallyHidden>
        <DialogTitle>My Dialog Title</DialogTitle>
      </VisuallyHidden>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Editar
          <Pencil className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
