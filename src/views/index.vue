/*
 * @Author: LHX
 * @Date: 2018-01-27 15:05:17
 * @Last Modified by: LHX
 * @Last Modified time: 2018-01-28 18:20:11
 * @ 首页
 */
<template>
  <div class="home">
    <Layout>
      <!-- topBar -->
      <Header class="topBar" >
        <div class="userInfo">
          <span>账号: xxxx </span>
          <span>剩余积分: xxx</span>
        </div>
        <div class="actButton">
          <Button type="error"
            @click="showCart"
          >购买</Button>
        </div>
      </Header>
      <Content>
        <!-- 分页 -->
        <Tabs v-model="tabIndex">
          <TabPane v-for="(item, index) in tabs" :key="index" :label="item" :name="item">
            <Tables v-on:selectData="addCart" :tabs="item"></Tables>
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
      @on-cancel="buyCancel"
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
export default {
  data () {
    return {
      tabIndex: '',
      tabs: [
        'iphone1',
        'iphone2',
        'iphone3',
        'iphone4',
        'iphone5',
        'iphone6',
        'iphone7',
        'iphone8',
        'iphone9',
        'iphone10',
      ],
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
    }
  },
  mounted () {
  },
  components: {
    Tables
  },
  methods: {
    showCart: function() {
      if(JSON.stringify(this.cartGoods) == '{}'){
        console.log('no data');
        return false;
      }else{
        for(let index in this.cartGoods){
          this.$store.dispatch('addCart', this.cartGoods[index])
        }
        console.log(this.$store.getters.getCart)
        this.modalCart = true;
      }
    },
    addCart: function(selectData, tabs) {
      let keys = tabs;
      this.cartGoods[tabs] = selectData;
    },
    buyOk: function() {
      console.log('ok');
    },
    buyCancel: function() {
      console.log('cancle');
    },
    changeTab: function() {
      console.log(this.tabIndex);
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
  }
</style>

