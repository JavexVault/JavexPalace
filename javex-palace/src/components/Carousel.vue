<script >
export default {
    data() {
        return {
            teste: '1.jpg',
        }
    }
}
</script>

<template>
    <div class="carousel">
        <img class="image" :src="'./images/' + teste">
    </div>
</template>

<style scoped>
    .carousel {
        display: flex;
        padding: 1rem;
        gap: 5px;
        max-width: 100%;
        overflow: scroll;
        scroll-behavior: smooth;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .carousel::-webkit-scrollbar {
        display: none;
    }

    .image {
        width: 100%;
        height: 10rem;
        border-radius: 10px;
    }
</style>