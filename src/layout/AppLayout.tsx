// layout/AppLayout.tsx
import { Outlet } from 'react-router-dom'
import { AppShell } from '@mantine/core'

export default function AppLayout() {
  return (
    <AppShell padding="md" className="scrolling-bg">
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
