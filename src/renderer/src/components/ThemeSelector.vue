<template>
    <el-dropdown @command="handleCommand">
        <div class="flex items-center cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
            <el-icon :size="20">
                <component :is="currentIcon" />
            </el-icon>
            <span class="ml-2 text-sm hidden sm:inline">
                {{ currentTheme === 'dark' ? '暗色' : '亮色' }}
            </span>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="light">
                    <el-icon>
                        <Sunny />
                    </el-icon>
                    <span class="ml-2">亮色</span>
                </el-dropdown-item>
                <el-dropdown-item command="dark">
                    <el-icon>
                        <Moon />
                    </el-icon>
                    <span class="ml-2">暗色</span>
                </el-dropdown-item>
                <el-dropdown-item command="auto">
                    <el-icon>
                        <Monitor />
                    </el-icon>
                    <span class="ml-2">跟随系统</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Sunny, Moon, Monitor } from '@element-plus/icons-vue'
import { useTheme } from '@composables/useTheme'

const { isDark, themeMode, setThemeMode } = useTheme()

const currentIcon = computed(() => {
    if (themeMode.value === 'auto') return Monitor
    return isDark.value ? Moon : Sunny
})

const currentTheme = computed(() => {
    if (themeMode.value === 'auto') return 'auto'
    return isDark.value ? 'dark' : 'light'
})

const handleCommand = (command: 'light' | 'dark' | 'auto'): void => {
    setThemeMode(command)
}
</script>
