import {SheetWrapper} from "@/components/custom/sheet_wrapper";
import {Outlet} from "react-router-dom";

export default function Root() {
  return (
    <div className="grid min-h-full grid-rows-[4rem_1fr_4rem] border-b border-b-gray-200">
      <header id="top-bar" className="flex items-center border-b border-b-gray-200 px-4">
        <SheetWrapper />
        <div className="flex flex-1 items-center justify-end text-lg text-primary">CSR: Vite + React Router</div>
      </header>

      <main id="main-dashboard" className="p-5">
        <Outlet />
      </main>

      <footer className="flex items-center justify-center border-t border-t-gray-200 text-sm font-light tracking-widest">
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Aman
      </footer>
    </div>
  );
}
