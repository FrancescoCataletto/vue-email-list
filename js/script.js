/*

Descrizione:
Attraverso l’apposita API di Boolean
"https://flynn.boolean.careers/exercises/api/random/mail"
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

 */

const app = new Vue(
    {
        el: "#app",

        data: {
            
            emailArr: []

        },

        mounted(){
          this.randomEmails()
        },

        methods: {
            // FUNZIONE CHE CHIAMA L'API PER GENERARE UNA MAIL CASUALE E PUSHARE NELL'ARRAY DEI DATA(GENERA 10 EMAIL CASUALI CON QUESTO CICLO)
            randomEmails(){
                for(let i = 0; i < 10; i++){
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then(res => {
                        this.emailArr.push(res.data.response)
                    })
                }
                console.log(this.emailArr)
            }
        }
    }
)