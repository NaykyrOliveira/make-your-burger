<template>
    <div v-if="msg" class="message-container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Message',
        props: {
            msg: String
        },
        data() {
            return {
                timer: null
            }
        },
        watch: {
            message(value) {
                if(value) {
                    clearTimeout(this.timer);
                    this.timer = setTimeout(() => this.$emit('clearMessage'), 3000);
                }
            }
        }
    }
</script>

<style>
    @import '/public/css/message.css';
</style>