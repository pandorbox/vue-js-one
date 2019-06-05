<template>
    <div class="formyz">
        <form id="formyz" @submit="checkForm" action="https://vuejs.org/" method="post" novalidate="true">
            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </p>
            <table>
                <tr>
                    <td><label for="name">姓名</label></td>
                    <td><input id="name" v-model="name" type="text" name="name"></td>
                </tr>
                <tr>
                    <td><label for="email">Email</label></td>
                    <td><input id="email" v-model="email" type="email" name="email"></td>
                </tr>
                <tr>
                    <td><label for="movie">爱好</label></td>
                    <td><select id="movie" v-model="movie" name="movie">
                            <option>Star Wars</option>
                            <option>Vanilla Sky</option>
                            <option>Atomic Blonde</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <input type="submit" value="提交">
                </tr>
            </table>
        </form>
    </div>
</template>
<style>
     table{
        border:1px solid #ccc;
        width: 30%;
        word-break: break-all;
        border-collapse: separate;/**/
        border-spacing: 0px 10px; /**/
        padding:10px 10px;
    }
    table>tr>td>input{
        width: 100%;
    }
  
</style>

<script>
export default {
    data() {
        return{
            errors: [],
            name: null,
            email: null,
            movie: null
        }
    
  },
  methods: {
    checkForm: function (e) {
        e.preventDefault();
        this.errors = [];

        if (!this.name) {
          this.errors.push("Name required.");
        }
        if (!this.email) {
          this.errors.push('Email required.');
        } else if (!this.validEmail(this.email)) {
          this.errors.push('Valid email required.');
        }
        if (!this.errors.length) {
          return true;
        }


    },  
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>

