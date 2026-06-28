import { ConvexProvider } from 'convex/react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { convexClient } from '@/lib/convex/client'

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ConvexProvider client={convexClient}>
          <StatusBar style="auto" />

          <Stack screenOptions={{ headerShown: false }} />
        </ConvexProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
