/*
 * @Author: LHX
 * @Date: 2018-01-27 15:05:17
 * @Last Modified by: LHX
 * @Last Modified time: 2018-01-27 16:56:43
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
            @click="modalCart = true"
            :disabled="this.$store.getters.getCart.length <= 0"
          >购买</Button>
        </div>
      </Header>
      <Content>
        <!-- 分页 -->
        <Tabs v-model="tabIndex">
          <TabPane v-for="(item, index) in tabs" :key="index" :label="item">
            <Tables></Tables>
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
    <!-- modal -->
    <Modal
      v-model="modalCart"
      title="确认购买数据"
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
      ]
    }
  },
  components: {
    Tables
  },
  methods: {
    buyOk: function() {
      console.log('ok');
    },
    buyCancel: function() {
      console.log('cancle');
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

