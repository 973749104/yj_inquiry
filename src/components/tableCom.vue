<template>
  <div class="tableCom">
    <Table
      :columns="columns"
      :data="dataTable"
      size="small"
      @on-select="select"
      @on-select-all="selectAll"
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
            { label: '3131', value: '3131'},
            ]
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
      dataTable: [
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
      ]
    }
  },
  methods: {
    select(selection, row) {
      console.log(`已选数据 ${selection}`);
      console.log(row);
      },
    selectAll: function (selection){
      console.log(selection);
    }
  }
}
</script>

<style scoped>

</style>
