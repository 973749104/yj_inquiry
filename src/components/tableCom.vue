<template>
  <div class="tableCom">
    <Table
      border
      :columns="columns"
      :data="dataTable"
      size="small"
      @on-selection-change="select"
      ></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '编号',
          key: 'data_id'
        },
        {
          title: 'SN',
          key: 'SN',
          filters: [],
          filterMethod (value, row){
            return row.SN.includes(value);
          }
        },
        {
          title: 'IMEI',
          key: 'IMEI',
          filters: [],
          filterMethod (value, row){
            return row.IMEI.includes(value);
          }
        },
        {
          title: 'ECID',
          key: 'ECID',
          filters: [],
          filterMethod (value, row){
            return row.ECID.includes(value);
          }
        },
        {
          title: 'MLBSN',
          key: 'MLBSN',
          filters: [],
          filterMethod (value, row){
            return row.MLBSN.includes(value);
          }
        },
        {
          title: 'BTY',
          key: 'BTY',
          filters: [],
          filterMethod (value, row){
            return row.BTY.includes(value);
          }
        }
      ],
      dataTable: [],
      html: '',
    }
  },
  created () {
    this.getPageData(this.tabs);
  },
  mounted () {
  },
  props: {
      tabs: {
        type: String
      }
  },
  methods: {
    // 拉取页面数据
    getPageData: function(tab) {
      this.$axios.get('/api/goods/pullGoods.php?tab=' + tab)
      .then( (res) => {
        this.fileterData(res.data);
        this.dataTable = res.data;
      })
    },
    select: function(selection) {
        this.$emit('selectData', selection, this.tabs);
    },
    // 重新拉取页面数据
    pushPageData: function() {
      this.getPageData(this.tabs);
    },
    // 数据筛选
    fileterData: function(data){
      let SN = [];
      let IMEI = [];
      let ECID = [];
      let MLBSN = [];
      let BTY = [];
      for(let i=0;i<data.length;i++){
        if(!SN.includes(data[i].SN)){
          SN.push(data[i].SN);
        }
        if(!IMEI.includes(data[i].IMEI)){
          IMEI.push(data[i].IMEI);
        }
        if(!ECID.includes(data[i].ECID)){
          ECID.push(data[i].ECID);
        }
        if(!MLBSN.includes(data[i].MLBSN)){
          MLBSN.push(data[i].MLBSN);
        }
        if(!BTY.includes(data[i].BTY)){
          BTY.push(data[i].BTY);
        }
      }
      this.columns[2].filters = this.formatData(SN);
      this.columns[3].filters= this.formatData(IMEI);
      this.columns[4].filters= this.formatData(ECID);
      this.columns[5].filters= this.formatData(MLBSN);
      this.columns[6].filters= this.formatData(BTY);
    },
    formatData: function(data) {
      let formatData = [];
      for(let i=0;i<data.length;i++){
        formatData.push(
          {
            label: data[i],
            value: data[i]
          }
        );
      }
      return formatData;
    },
  }
}
</script>

 <style lang="scss" scoped>
  .tableCom{
  }
</style>
