<template>
    <footer id="footer">
        <hr>
        <div class="footer-container">
            <div class="contact-info">
                <h3>Contato:</h3>
                <div>
                    <img class="icon-social-media" :src="telefone" :alt="phone">
                    <p class="phone info-item">+55 (61)9999-0000</p>
                </div>
                 <div>   
                    <img class="icon-social-media" :src="instagram" :alt="social">
                    <p class="social-media info-item">Instagram</p>
                </div>
            </div>
            <div class="address-info">
                <h3>Nosso Endereço:</h3>
                <div>
                    <img  class="icon-social-media" :src="localidade" :alt="location">
                    <p class="address info-item">Rua 01 Avenida 01</p>
                </div>
            </div>
        </div>
        
    </footer>    
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                telefone: '/img/icon/telefone.png',
                phone: 'Ícone de telefone para contato',
                instagram: '/img/icon/instagram.png',
                social: 'Ícone do Instagram',
                localidade: '/img/icon/localidade.png',
                location: 'Ícone de localização'
            }
        }
    }
</script>

<style>
    @import '/public/css/footer.css';
</style>
