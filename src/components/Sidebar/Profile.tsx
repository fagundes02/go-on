import { LogOut } from "lucide-react";

export function Profile() {
    return (
        <div className="grid items-center gap-3 grid-cols-profile">
            <img
                src="https://github.com/fagundes02.png"
                className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col truncate ">
                <span className="text-sm font-semibold text-zinc-700 ">
                    Davi Fagundes
                </span>

                <span className="truncate text-sm text-zinc-500">
                    davidanielcst@gmail.com
                </span>
            </div>

            <button type="button" className="ml-auto rounded-mdp p-2 hover:bg-zinc-50">
                <LogOut className="w-5 h-5 text-zinc-500" />
            </button>
        </div>
    )
}