"use client"
import React, {useEffect} from 'react';
import {Menu} from "@components/menu";
import AdminHeader from "@components/admin/header";
import {useNavStore} from "@services/nav";

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    const {toggle} = useNavStore()

    useEffect(() => {
        if(window.innerWidth > 768)
        toggle(true)
    }, [toggle]);

    return (
        <div className={"flex h-screen"}>
            <Menu />
            <div className={"w-full flex flex-col h-full"}>
                <AdminHeader />
                <div className={"overflow-y-scroll h-full"}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;