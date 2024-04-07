import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layouts/resultslayout')({
  component: () => <div>Hello /_layouts/resultslayout!</div>
})