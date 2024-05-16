<template>
    <div class="dump">
       <div id="div1"></div>

       <div id="div2"></div>

       <div id="div3"></div>

       <div id="div4"></div>
    </div>
</template>

<style scoped>

    #div1{
        background-image: url("../assets/images/1.jpg");
    }
    #div2{
        background-image: url("../assets/images/2.jpg");
    }
    #div3{
        background-image: url("../assets/images/3.jpg");
    }
    #div4{
        background-image: url("../assets/images/montanha.jpg");
    }


    .dump{
        display: flex;
        flex-grow: 1;
        width: 100%;
        background-color: black;
    }

    div{       
        height: 25em;
        flex-grow: 1;
        transition:.5s ease-in-out;
        background-size: cover;
        background-position: center center;
        background-color: black;
    }

    div:hover{
        opacity: 1;
        flex-grow:3;
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

