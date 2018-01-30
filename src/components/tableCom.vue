<template>
  <div class="tableCom">
    <Table
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
          title: 'SN',
          key: 'SN',
          filters:[
            { label: '1111', value: '1111'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            { label: '3131', value: '3131'},
            ],
            filterMultiple: true,
            filterMethod (value, row){
              return row.SN.includes(value);
            }
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
      dataTable: []
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
        this.dataTable = res.data;
      })
    },
    select: function(selection) {
        this.$emit('selectData', selection, this.tabs);
      }
  }
}
</script>

<style scoped>

</style>
