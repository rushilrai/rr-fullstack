import { createFileRoute } from '@tanstack/react-router'

import { SampleScreen } from '@/screens/sample'

export const Route = createFileRoute('/')({
  component: SampleScreen,
})
