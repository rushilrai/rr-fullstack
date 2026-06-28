import { FlatList, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { SampleCard } from '@/modules/sample/components/SampleCard'
import { useSamples } from '@/modules/sample/queries'

export function SampleScreen() {
  const data = useSamples()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Samples</Text>

      {data === undefined ? (
        <Text style={styles.muted}>Loading samples…</Text>
      ) : data.samples.length === 0 ? (
        <Text style={styles.muted}>No samples yet</Text>
      ) : (
        <FlatList
          data={data.samples}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SampleCard sample={item} />}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 16 },
  heading: { fontSize: 24, fontWeight: '700' },
  muted: { color: '#52525b' },
  list: { gap: 8 },
})
