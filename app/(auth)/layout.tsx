import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid lg:grid-cols-2 h-full items-center justify-center">
      <div className="flex items-center justify-center">{children}</div>
      <div className="hidden lg:flex lg:bg-slate-300 h-full justify-center items-center lg:flex-col">
        <Image src="/logo.svg" alt="Logo Rental Cars" width="80" height="80" />
        <h1 className="text-xl font-bold">Rental Car</h1>
      </div>
    </div>
  );
}
