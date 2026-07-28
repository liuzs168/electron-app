<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <!-- 顶部导航栏 -->
        <header class="bg-gray-100 dark:bg-gray-800 shadow-md p-4 transition-colors duration-300">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
                    Vue3 + Element Plus + Tailwind
                </h1>
                <div class="flex items-center gap-4">
                    <ThemeSelector />
                    <ThemeToggle />
                </div>
            </div>
        </header>

        <!-- 主内容 -->
        <main class="container mx-auto p-6">
            <el-card class="mb-4">
                <template #header>
                    <span class="text-gray-800 dark:text-white">Element Plus 组件示例</span>
                </template>

                <div class="space-y-4">
                    <el-button type="primary">主要按钮</el-button>
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>
                    <el-button type="info">信息按钮</el-button>
                </div>
            </el-card>

            <!-- 使用 Tailwind 的暗色样式 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="i in 3" :key="i"
                    class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white transition-colors duration-300">
                    <h3 class="text-lg font-semibold mb-2">卡片 {{ i }}</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        这是一个使用 Tailwind CSS 实现的暗色模式卡片
                    </p>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import ThemeToggle from '@components/ThemeToggle.vue'
import ThemeSelector from '@components/ThemeSelector.vue'
</script>
