"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full border-b shadow-sm bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold mr-4">
          Recipes
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 items-center">
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/services">
            <Button variant="ghost">Services</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4 mt-6">
                <Link href="/about">
                  <Button variant="ghost" className="w-full justify-start">
                    About
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="ghost" className="w-full justify-start">
                    Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" className="w-full justify-start">
                    Contact
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
