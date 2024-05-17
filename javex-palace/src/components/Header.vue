<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <RouterLink class="router-link" to="/">
            <h1>Javex Palace</h1>
        </RouterLink>
        <div class="hamburguer">
            <a><i class="fa-solid fa-bars"></i></a>
        </div>
        <div class="links">
        <a href="#">Sobre nos</a>
        <a href="#">Contato</a>
        <a href="#">Eventos</a>
        </div>
    </header>
</template>

<style>
    header{
        background-color: #012335;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 7%;
        height: 3em;
        
    }

    .links{
        display: none;
        font-family: "Oswald", sans-serif;
        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    .hamburguer{
        background-color: #012335;
        
    }

    .hamburguer:hover{
        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        transform: scale(1.1);
    }

    h1{
        background-color: transparent;
        color: white;
        font-size: small;
        font-family: "Playfair Display", serif;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
    }

    a {
        background-color: transparent;
    }

    i{
        background-color: #012335;
        color: white;
    }

    @media screen and (min-width:400px){

        .hamburguer{
            display: none;
        }

        .links{
            display: flex;
            justify-content: space-between;
            background-color: #012335;
            gap:1em;
        }

        .links a{
            font-size: xx-small;
            color:white;
            text-decoration: none;
        }

        .links a:hover{
            color:#F2A71B;
            transform: scale(1.2);
        }
        
        .router-link{
            text-decoration: none;
        }
    }

</style>
