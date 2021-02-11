<template>
  <div class="container has-text-centered mt-5">
    <h1 class="title">Contact with me!</h1>
    <form @submit.prevent="sendEmail" class="pb-5">
      <label>Name</label>
      <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Your Name"
      >
      <label>Email</label>
      <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
      >
      <label>Message</label>
      <textarea
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
          </textarea>

      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: "Contact",
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_lmbkf9p', 'template_881xfnr', e.target, 'user_Bl0dwmxCXhQZ9vDUd1w6V')
            .then((result) => {
              console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
              console.log('FAILED...', error);
            });
      }
      catch (error){
        console.log({error})
      }
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
