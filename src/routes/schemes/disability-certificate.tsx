import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/schemes/disability-certificate')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/schemes/disability-certificate"!</div>
}
