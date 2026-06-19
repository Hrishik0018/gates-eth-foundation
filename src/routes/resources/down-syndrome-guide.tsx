import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resources/down-syndrome-guide')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/resources/down-syndrome-guide"!</div>
}
