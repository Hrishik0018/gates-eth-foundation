import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/schemes/pension-schemes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/schemes/pension-schemes"!</div>
}
