/*
 * @Author: LHX
 * @Date: 2018-01-28 09:06:30
 * @Last Modified by: LHX
 * @Last Modified time: 2018-01-28 09:06:54
 * @ 管理员登录
 */

<template>
  <div class="adminLogin">
     <Form :label-width="80" class="loginForm">
       <FormItem label="用户名">
         <Input v-model="userName"/>
       </FormItem>
       <FormItem label="密码">
         <Input v-model="pwd" type="password"/>
       </FormItem>
     </Form>
     <Button @click="testConnect">测试</Button>
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
}
</script>

<style lang="scss" scoped>

</style>

