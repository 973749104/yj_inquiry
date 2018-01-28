/*
 * @Author: LHX
 * @Date: 2018-01-27 15:05:50
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-28 22:03:39
 * @登录
 */

 <template>
   <div class="login">
     <Form :label-width="80" class="loginForm">
       <FormItem label="用户名">
         <Input/>
       </FormItem>
       <FormItem label="密码">
         <Input/>
       </FormItem>
     </Form>
   </div>
 </template>

 <script>
 export default {

 }
 </script>

 <style lang="scss" scoped>
  .login{
    .loginForm{
      width: 500px;
    }
  }
 </style>

