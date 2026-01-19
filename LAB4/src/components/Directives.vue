<template>
    <p>{{ message }}</p>
        <button v-on:click="Title"></button>
</template>
<script>
export default {
    data() {
        return {
            Title:"hide"
                }
            },
    methods: {
        Test() {
            console.log(this.Title);
            if (this.Title === "hide") {
                this.Title = "show";
                return
            }
            this.Title ="hide";
        }
                            }
                }
                    
</script>