<template>
    <el-switch v-model="isDark" :active-icon="Moon" :inactive-icon="Sunny" class="theme-switch" @change="toggleTheme" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useTheme } from '@composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-switch {
    --el-switch-off-color: #409eff;
    --el-switch-on-color: #303030;
}
</style>
