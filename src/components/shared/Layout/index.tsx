import { AppShell } from "@mantine/core";
import { PropsWithChildren } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Layout({children}: PropsWithChildren) {
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm'}}
            padding="md"
            >
            <Header />
            <Navbar />

            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    )
}