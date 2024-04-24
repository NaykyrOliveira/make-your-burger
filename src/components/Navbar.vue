<template>
    <nav id="nav" class="blur-effect">
        <router-link to="/" id="logo-url">
            <img id="logo" :src="logo" :alt="alt">
        </router-link> 
        <router-link to="/">Home</router-link>
        <router-link to="/pedidos">Pedidos</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        props: ["logo", "alt"]
    }
</script>
    
<style>
    @import '/public/css/navbar.css';
</style>