"use client"

import React from 'react';
import {Button} from "@components/ui/button";
import {Menu} from "lucide-react";
import {useNavStore} from "@services/nav";

const AdminHeader = () => {
    const {toggle} = useNavStore()
    return (
        <div className="sticky w-full top-0 z-30 flex items-center gap-4 h-16 px-6 bg-background border-b">
            <Button variant="ghost" size="sm" onClick={() => toggle()} className={"md:hidden block"}>
                <Menu className="h-4 w-4" />
            </Button>
            <h1 className="text-lg font-semibold">Project management</h1>
        </div>
    );
};

export default AdminHeader;