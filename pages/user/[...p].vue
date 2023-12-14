<template>
    <div>
        <h1>{{ p }}</h1>
    </div>
</template>


<script setup>
const route = useRoute()
const { p } = route.params
</script> 