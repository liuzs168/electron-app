<template>
    <div>
        <h1>首页</h1>
        <button @click="login">登录</button>
        <el-button type="success">Success</el-button>
    </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@store'
import { loginByJson } from '@api/login'
const login = async () => {
    const res = await loginByJson({
        username: 'admin',
        password: '123456'
    })
    console.log(res)
}
const counterStore = useCounterStore()
console.log(counterStore.count)
</script>
