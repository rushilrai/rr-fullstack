export function handleHealthCheck() {
  return { status: 'alive' as const }
}
