<script></script>

<template>
    <div class="filter">
        <div class="datas">
            <div id="data1" class="data">
                <label for="checkin">Data de entrada</label>
                <input name="checkin" type="date">
            </div>
            <div id="data2" class="data">
                <label for="checkin">Data de saida</label>
                <input name="checkin" type="date">
            </div>
        </div>
        <div id="people" class="item">
        <label for="People">People</label>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>
        <div id="price" class="item">
            <label for="Price" >Price</label>
            <input name="Price" type="range">
        </div>
        <div id="wifi" class="item">
            <label for="Wifi">Wifi</label>
            <input name="Wifi" type="checkbox">
        </div>
        <button>Filter</button>
    </div>
</template>

<style scoped>

    .filter{
        background-color: blueviolet;
        padding: 6%;
        margin: 5%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        width: 80%;
        border: solid 2px black;
        border-radius: 20px;

    }

    .item{
        background-color: transparent;
    }

    .datas{
        background-color: transparent;
        display: flex;
        justify-content: space-between;
    }

    .data{
        border: solid 2px black;
        border-radius: 10px;
        background-color: transparent;
        height: 80px;
        width: 40% ;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1em;
    }


</style>