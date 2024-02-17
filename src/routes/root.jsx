import {SheetWrapper} from "@/components/custom/sheet_wrapper";
import {Outlet} from "react-router-dom";

export default function Root() {
  return (
    <div className="grid min-h-full grid-rows-[4rem_1fr_4rem] border-b border-b-gray-200">
      <header id="top-bar" className="flex items-center border-b border-b-gray-200 px-4">
        <SheetWrapper />
      </header>

      <main id="main-dashboard" className="flex p-5">
        <Outlet />
      </main>

      <footer className="flex items-center justify-center border-t border-t-gray-200 text-sm font-light tracking-widest">
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Aman
      </footer>
    </div>
  );
}
