import { UserSessionCard } from "@/modules/UserSession";
import { AppShell } from "@mantine/core";

export default function Navbar() {

    return (
        <AppShell.Navbar p="md">
            <UserSessionCard />
        </AppShell.Navbar>
    )
}