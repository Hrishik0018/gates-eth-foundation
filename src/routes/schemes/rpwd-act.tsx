import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/schemes/rpwd-act')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/schemes/rpwd-act"!</div>
}
