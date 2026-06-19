import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/schemes/skill-development')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/schemes/skill-development"!</div>
}
