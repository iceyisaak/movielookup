import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layouts/watchlistlayout')({
  component: () => <div>Hello /_layouts/watchlistlayout!</div>
})