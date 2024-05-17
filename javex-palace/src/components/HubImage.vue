<template>
<div class="hub">
    <div class="upper">
        <h1>Welcome to the future</h1>
    </div>
    <div class="lower">
        <button class="botao">Reserve ja</button>
    </div>
</div>
</template>

<style scoped>
    .hub{
        display: flex;
        flex-direction: column;
        background-image: url(../assets/images/1.jpg);
        height: 105vh;
        background-size: cover;
        background-position: center center;
    }

    .upper h1{
        font-size: 300%;
        font-family: "Inter", sans-serif;
        font-style: italic;
        font-weight: 200;
    }
    .upper{
        display: flex;
        padding: 5%;
        background-color: transparent;
        height: 100%;
    }

    .lower{
        display: flex;
        justify-content: center;
        align-items: end;
        padding: 5%;
        background-color: transparent;
        height: 100%;
    }

    .botao{
        width: 40%;
        height: 3rem;
        border-radius: 30px;
        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        color: #F2A71B;
    }

    .botao:hover{
            background-color:#F2A71B;
            transform: scale(1.1);
            color: aliceblue;
    }

    @media screen and (min-width:700px){
        .botao{
        width: 20%;
        height: 4rem
    }
    }
</style>

<script>
    
</script>

