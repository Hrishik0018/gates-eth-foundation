import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/schemes/scholarships')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/schemes/scholarships"!</div>
}
