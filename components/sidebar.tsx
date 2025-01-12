"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed left-4 top-4 z-50 md:hidden">
          <MenuIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Quick links to different sections of the portfolio.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 flex flex-col space-y-2">
          <Button variant="ghost" asChild>
            <a href="#skills">Skills</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/blog">Blog</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

