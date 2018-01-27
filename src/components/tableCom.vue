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
      dataTable: [
        {
          SN: '21321',
          IMEI: 'ASDAS',
          ECID: 'AS25D2AS4',
          MLBSN: '3S4DW313',
        },
        {
          SN: '1111',
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
        this.$store.dispatch('addCart', selection);
        console.log(this.$store.getters.getCart)
      },
    selectAll: function (selection){
      console.log(selection);
    }
  }
}
</script>

<style scoped>

</style>
