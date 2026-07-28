/**  主题 Composable */

import { useDark, useToggle, usePreferredDark } from '@vueuse/core'
import { computed, watch, type Ref } from 'vue'

type ThemeMode = 'light' | 'dark' | 'auto'

interface UseThemeReturn {
  isDark: Ref<boolean>
  themeMode: Ref<ThemeMode>
  toggleTheme: () => void
  setThemeMode: (mode: ThemeMode) => void
}

export function useTheme(): UseThemeReturn {
  const preferredDark = usePreferredDark()

  const isDark = useDark({
    storageKey: 'theme-mode',
    valueDark: 'dark',
    valueLight: 'light'
  })

  const themeMode = computed<ThemeMode>({
    get: () => {
      const saved = localStorage.getItem('theme-mode') as ThemeMode | null
      if (saved === 'light' || saved === 'dark') {
        return saved
      }
      return 'auto'
    },
    set: (mode: ThemeMode) => {
      if (mode === 'auto') {
        localStorage.removeItem('theme-mode')
        isDark.value = preferredDark.value
      } else {
        localStorage.setItem('theme-mode', mode)
        isDark.value = mode === 'dark'
      }
    }
  })

  const toggleTheme = useToggle(isDark)

  const setThemeMode = (mode: ThemeMode): void => {
    themeMode.value = mode
  }

  watch(preferredDark, (newVal) => {
    if (themeMode.value === 'auto') {
      isDark.value = newVal
    }
  })

  return {
    isDark,
    themeMode,
    toggleTheme,
    setThemeMode
  }
}
