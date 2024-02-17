import React from "react";
import {Button} from "@/components/ui/button";
import {MenuIcon} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {NavLink} from "react-router-dom";
import {cn} from "@/lib/utils";

const navItems = [
  {name: "Home", to: "/"},
  {name: "Play", to: "/play"},
  {name: "Traffic Light", to: "/traffic-light"},
];

/**
 * Wrapper for the Sheet component
 */
export function SheetWrapper() {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-80 rounded-r-md px-0">
        <SheetHeader className="h-8">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-1 p-4">
          {navItems.map((item, index) => (
            <NavItem key={index} to={item.to} text={item.name} onClick={() => setOpen(false)}></NavItem>
          ))}
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

/**
 * @param {object} props
 * @param {string} props.to
 * @param {string} props.text
 * @param {React.MouseEventHandler<HTMLAnchorElement>} [props.onClick]
 */
function NavItem({to, text, onClick}) {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={({isActive}) =>
        cn(
          isActive ? "font-semibold text-gray-800" : "font-normal text-gray-600",
          "rounded-lg p-1 px-3 transition-all hover:bg-gray-200",
        )
      }
    >
      <span>{text}</span>
    </NavLink>
  );
}
