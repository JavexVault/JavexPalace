<script setup>
    var imagePaths = [ 
        "../../src/assets/images/1.jpg", "../../src/assets/images/2.jpg", "../../src/assets/images/3.jpg", "../../src/assets/images/1.jpg", "../../src/assets/images/2.jpg", "../../src/assets/images/3.jpg",
    ];
</script>

<template>
    <div class="carousel">
        <img class="image" v-for="imagePath in imagePaths" :src="imagePath">
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
        min-width: 50%;
        height: 10rem;
        border-radius: 10px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
    }
</style>