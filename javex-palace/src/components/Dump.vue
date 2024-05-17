<template>
    <div class="dump">
        <div class="img"><div class="bg"></div></div>
        <div class="img"><div class="bg"></div></div>
        <div class="img"><div class="bg"></div></div>
        <div class="img"><div class="bg"></div></div>
    </div>
</template>

<style scoped>
    .dump{
        display: flex;
        width: 100%;
        height: 23em;
        justify-content: center;
    }
    .img {
        width: 100%;
        height: 100%;
        filter: blur(2px 0);
        background: url(../assets/images/1.jpg);
        background-position: center;
        background-size: cover;
        transition: width .3s ease-in-out;
    }
    .img:nth-child(2) {
        background: url(../assets/images/2.jpg);
        background-position: center;
        background-size: cover;
    }
    .img:nth-child(3) {
        background: url(../assets/images/3.jpg);
        background-position: center;
        background-size: cover;
    }
    .img:nth-child(4) {
        background: url(../assets/images/montanha.jpg);
        background-position: center;
        background-size: cover;
    }
    .bg {
        width: 100%;
        height: 100%;
        opacity: .7;
        background-color: black;
        transition: opacity .3s ease-in-out;
    }
    .img:hover {
        width: 175%;
        z-index: 2;
        .bg {
            opacity: 0;
        }
    }

    @media screen and (max-width: 400px) {
        div {
            height: 15em;
        }
        div:hover{
            flex-grow: 11;
        }

    }
</style>

<script>

</script>

