"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ModalProps {
  title: string,
  description: string,
  isOpen: boolean, 
  onClose: () => void,
  children?: React.ReactNode
}

const Modal = ({title, description, isOpen, onClose, children} : ModalProps) => {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
          <div>
            {children}
          </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal