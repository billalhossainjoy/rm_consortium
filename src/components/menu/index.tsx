"use client";

import {useLogout, useMenu} from "@refinedev/core";
import Link from "next/link";
import {cn} from "@lib/utils";
import {useNavStore} from "@services/nav";
import {XIcon} from "lucide-react";

export const Menu = () => {
    const{isOpen, toggle} = useNavStore()
    const { mutate: logout } = useLogout();
    const { menuItems, selectedKey } = useMenu();

  return (
    <nav className={cn("menu bg-background !p-0 h-full text-white sm:relative absolute -left-full w-60 z-50 overflow-hidden transition-all duration-300 border-r", {
        "left-0": isOpen,
        "w-0": !isOpen
    })}>
        <div className={cn("mb-2 p-3 w-full text-primary border-b flex items-center justify-between")}>
            <h1 className={"font-bold text-2xl"}>Admin Panel</h1>
            <XIcon className={"block md:hidden"} size={18} onClick={() => toggle()}/>
        </div>
        <div className={" h-full flex flex-col justify-between box"}>
            <ul className={"px-2 flex flex-col gap-3"}>
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.route
                    return (
                        <li key={item.key}>
                            <Link
                                href={item.route ?? "/"}
                                className={selectedKey === item.key ? "active" : ""}
                            >
                                <div className={cn("text-white bg-primary/80 rounded py-2 px-3")}>{item.label}</div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <button className={"cursor-pointer w-full relative bottom-0 mb-15 p-5 bg-primary"} onClick={() => logout()}>Logout</button>
        </div>

    </nav>
  );
};
