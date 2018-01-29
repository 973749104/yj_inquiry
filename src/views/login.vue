/*
 * @Author: LHX
 * @Date: 2018-01-27 15:05:50
 * @Last Modified by: LHX
 * @Last Modified time: 2018-01-29 17:58:32
 * @登录
 */

 <template>
   <div class="login">
     <Form :label-width="80" class="loginForm">
       <FormItem label="用户名">
         <Input v-model="userName"/>
       </FormItem>
       <FormItem label="密码">
         <Input v-model="pwd" type="password"/>
       </FormItem>
     </Form>
     <Button @click="testConnect">测试</Button>
     <div v-html="testData"></div>
   </div>
 </template>

 <script>
 import axios from 'axios';
 export default {
   data () {
     return {
       userName: '',
       pwd: '',
       testData: ''
     }
   },
   mounted () {

   },
   methods: {
    //  端口连接测试
    testConnect: function() {
      axios.post('/api/user/userLogin.php',{
        userName: this.userName,
        pwd: this.pwd
      })
      .then( (res) => {
        // 登录成功跳转
        this.testData = res.data;
        if(res.data){
          sessionStorage.setItem('user', this.userName);
          this.$router.push('/');
        }else{
          this.$Message.error('用户或密码错误');
        }
      })
    }
   }
 }
 </script>

 <style lang="scss" scoped>
  .login{
    .loginForm{
      width: 500px;
    }
  }
 </style>

