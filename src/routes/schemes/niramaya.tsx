import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/schemes/niramaya')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/schemes/niramaya"!</div>
}
