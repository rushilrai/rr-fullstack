import { SampleList } from '@/modules/sample/components/SampleList'

export function SampleScreen() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">Samples</h1>

      <SampleList />
    </div>
  )
}
