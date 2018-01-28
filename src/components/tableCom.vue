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
  mounted () {
  },
  props: {
      tabs: {
        type: String
      }
  },
  methods: {
    select(selection) {
        this.$emit('selectData', selection, this.tabs);
      },
    selectAll(selection) {
        console.log(selection);
        this.$emit('selectData', selection, this.tabs);
    }
  }
}
</script>

<style scoped>

</style>
