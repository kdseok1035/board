<template>
    <header>
        <div id="nav">
            <h1 @click="mainPage">게시판</h1>
        </div>
    </header>
</template>

<script>


export default {

    methods: {
        mainPage() {
            location.href = '/dist/'

        }
    }
}
</script>

<style scoped>
h1 {
    cursor: pointer;
    width: fit-content;
}
</style>