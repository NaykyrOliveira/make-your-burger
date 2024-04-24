<template>
    <div id="main-banner">
        <div class="content-banner">            
            <h1>Make Your Burger</h1> 
            <p>Qualidade e excelência em cada detalhe!</p>
        </div>
        <img :src="banner" :alt="banner_burger">
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        data() {
            return {
                banner: '/img/burger.png',
                banner_burger: 'Imagem Hamburguer'
            }
        }
    }
</script>

<style>
    @import '/public/css/banner.css';
</style>