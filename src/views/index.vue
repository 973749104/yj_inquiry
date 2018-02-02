/*
 * @Author: LHX
 * @Date: 2018-01-27 15:05:17
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-02-01 12:33:56
 * @ 首页
 */
<template>
  <div class="home">
    <Layout>
      <!-- topBar -->
      <Header class="topBar" >
        <div class="userInfo">
          <span>账号: {{ userName }} </span>
          <span>剩余积分: {{ userPoint }}</span>
        </div>

        <div class="actButton">
          <Button type="error"
            @click="showCart"
          >购买</Button>
        </div>
      </Header>
      <Content>
        <!-- 分页 -->
        <Tabs v-model="tabIndex" class="tabs">
          <TabPane v-for="(item, index) in tabs" :key="index" :label="item.model" :name="item.model">
            <Tables v-on:selectData="addCart" :tabs="item.model" ref="table"></Tables>
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
    <!-- modal -->
    <Modal
      v-model="modalCart"
      title="确认购买数据"
      ok-text="确认购买"
      @on-ok="buyOk"
      width="80%"
    >
      <Table
        :columns="columns"
        :data="this.$store.getters.getCart"
      ></Table>
    </Modal>
  </div>
</template>

<script>
import Tables from '../components/tableCom';
import index from 'vue';
export default {
  data () {
    return {
      tabIndex: '',
      tabs: [],
      // 显示购物车
      modalCart: false,
      // 列
      columns: [
        {
          title: 'SN',
          key: 'SN'
        },
        {
          title: 'IMEI',
          key: 'IMEI'
        },
        {
          title: 'ECID',
          key: 'ECID'
        },
        {
          title: 'MLBSN',
          key: 'MLBSN'
        }
      ],
      cartGoods: {},
      userName: '',
      userPoint: '',
      test: ''
    }
  },
  created () {
    this.getBrands();
    this.getUserInfo();
  },
  mounted () {
  },
  components: {
    Tables
  },
  methods: {
    // 获取型号
    getBrands: function() {
      this.$axios.get('/api/goods/pullGoodBrands.php')
      .then((res)=>{
        this.tabs = res.data;
      })
    },
    // 获取用户信息
    getUserInfo: function() {
      const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
      if(userInfo){
        this.userName = userInfo.userName;
        this.userPoint = userInfo.userPoint;
      }else{

      }
    },
    // 显示购物车
    showCart: function() {
      // 每次点击购买先清空购物车
      this.$store.dispatch('clearCart');
      if(JSON.stringify(this.cartGoods) == '{}'){
        this.$Message.error('请选择数据');
        return false;
      }else{
        // 循环将数据添加进购物车
        for(let index in this.cartGoods){
          for(let childIndex of this.cartGoods[index]){
            this.$store.dispatch('addCart', childIndex)
          }
        }
        // 显示modal
        this.modalCart = true;
      }
    },
    // 标签页选项添加进catGoods
    addCart: function(selectData, tabs) {
      let keys = tabs;
      this.cartGoods[tabs] = selectData;
    },
    // 确认购买事件
    buyOk: function() {
      const cartData = this.$store.getters.getCart;
      let dataId = [];
      for(let i=0;i<cartData.length;i++){
        dataId.push({
          data_Id: cartData[i].data_id
        })
      }
      this.$axios.post('/api/goods/buyGood.php',{
        userName: this.userName,
        goodsId: dataId
      })
      .then((res) => {
        // this.test = res.data;
        if(res.data['result']){
          // 刷新页面数据
          this.pushTableData();
          // 清空购物车
          this.cartGoods = {};
          this.$store.dispatch('clearCart');
          // 下载EXCLE
          // 返回提示信息
          this.$Message.success('购买成功，已下载数据');
        }else{
          if(res.data['errorCode']==101){
            this.$Message.error('积分不足，请充值后购买');
          }else{
            this.$Message.error('购买失败');
          }
        }
      })
    },
    // 刷新TABLE数据
    pushTableData: function() {
      let count = this.$refs.table.length;
      for(let i=0;i<count;i++){
        this.$refs.table[i].pushPageData();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    .topBar{
      padding: 0 15px;
      height: 50px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .userInfo{
        span{
          padding:  0 5px;
          font-size: 13px;
        }
      }
    }
    .tabs{
      min-height: 800px;
    }
  }
</style>

