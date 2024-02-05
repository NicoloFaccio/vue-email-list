const {createApp} = Vue;

createApp ({
  data(){
    return {
      mails: [
        {
          primaMail: ""
        },
        {
          seondaMail: ""
        },
        {
          terzaMail: ""
        },
        {
          quartaMail: ""
        },
        {
          quintaMail: ""
        },
        {
          sestaMail: ""
        },
        {
          settiamMail: ""
        },
        {
          ottavaMail: ""
        },
        {
          nonaMail: ""
        },
        {
          decimaMail: ""
        }
      ],
    }
  },

  methods: {
    generaMail(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
      console.log(result.data)

      this.primaMail = result.data.response})
    }
  }
})