<template>
    <PageHeader/>
    <router-view/>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
    name: 'App',
    components: {
        PageHeader
    }
}
</script>

<style>

</style>
