import { SampleCard } from '@/modules/sample/components/SampleCard'
import { useSamples } from '@/modules/sample/queries'

export function SampleScreen() {
  const data = useSamples()

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">Samples</h1>

      {data === undefined ? (
        <p className="text-muted-foreground">Loading samples…</p>
      ) : data.samples.length === 0 ? (
        <p className="text-muted-foreground">No samples yet</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {data.samples.map((sample) => (
            <li key={sample._id}>
              <SampleCard sample={sample} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
