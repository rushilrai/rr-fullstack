import { StyleSheet, Text, View } from 'react-native'

import type { Sample } from '../schema'

interface SampleCardProps {
  sample: Sample
}

export function SampleCard({ sample }: SampleCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{sample.title}</Text>
      <Text style={styles.data}>{sample.data}</Text>
      <Text style={styles.date}>
        {new Date(sample.createdAt).toLocaleDateString()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#e4e4e7',
    borderRadius: 8,
    padding: 12,
    gap: 4,
  },
  title: { fontSize: 16, fontWeight: '600' },
  data: { fontSize: 14, color: '#52525b' },
  date: { fontSize: 12, color: '#a1a1aa' },
})
