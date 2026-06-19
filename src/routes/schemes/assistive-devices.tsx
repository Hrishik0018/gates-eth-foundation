import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/schemes/assistive-devices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/schemes/assistive-devices"!</div>
}
