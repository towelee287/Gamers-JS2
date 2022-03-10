Vue.component('error', {
    data() {
        return {
            error: false
        }
    },
    methods: {
        err() {
            this.error = true
        }
    },
    template: `
    <p v-if="error" class="error">Error! FAILED TO LOAD API</p>    
    `
});