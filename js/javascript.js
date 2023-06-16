console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            nome: '',
            cognome: '',
            colorePreferito: '',
            suffisso: '',
            pwd: ''
        }
    },
    methods: {

        // Sum
        pwdGenerator() {
            this.pwd = this.nome + this.cognome + this.colorePreferito + this.suffisso;
        }
    }
});

// Mount
app.mount('#root');