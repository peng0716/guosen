<template>
  <div class="compensate">
    <el-row>
      <el-col :span="22" :offset="1">
        <el-row :gutter="20" class="blank-bottom">
          <el-col>
            <div class="select-text">核心数据－2</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="el-table el-table--fit el-table--border el-table--enable-row-transition">
              <div class="el-table__body-wrapper">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table__body">
                  <thead>
                  <tr>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        指标
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        当前交易日
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        前一交易日
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        环比变化
                      </div>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(n, index) in 9" class="">
                    <td>
                      <div class="cell">
                        &nbsp;{{ statistics[index] ? statistics[index][0] : '' }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index] ? statistics[index][1] : '' }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index] ? statistics[index][2] : '' }}
                      </div>
                    </td>
                    <td>
                      <div class="cell" :class="statistics[index][4] >= 0 ? 'colorRed' : 'colorGreen'">
                        {{ statistics[index] ? statistics[index][3] : '' }}
                      </div>
                    </td>
                    <!--<td v-if="index == 0">
                     <div class="cell">
                       &nbsp;{{ statistics[index].project }}
                     </div>
                   </td>
                   <td v-if="index == 1">
                     <div class="cell">
                       &nbsp;{{ statistics[index].project }}
                     </div>
                   </td>
                   <td v-if="index == 2">
                     <div class="cell">
                       {{ statistics[index].project }}
                     </div>
                   </td>
                   <td v-if="index == 3">
                     <div class="cell">
                       {{ statistics[index].project }}
                     </div>
                   </td>
                   <td v-if="index == 4">
                     <div class="cell">
                       {{ statistics[index].project }}
                     </div>
                   </td>
                   <td v-if="index == 5">
                     <div class="cell">
                       {{ statistics[index].project }}
                     </div>
                   </td>
                   <td v-if="index == 6">
                     <div class="cell">
                       {{ statistics[index].project }}
                     </div>
                   </td>
                   <td v-if="index == 7">
                     <div class="cell">
                       {{ statistics[index].project }}
                     </div>
                   </td>
                   <td v-if="index == 8">
                     <div class="cell">
                       {{ statistics[index].project }}
                     </div>
                   </td>
                  <td>
                     <div class="cell">
                       {{ statistics[index].periodOpeningBalance }}
                     </div>
                   </td>
                   <td>
                     <div class="cell">
                       {{ statistics[index].newChanges }}
                     </div>
                   </td>
                   <td>
                     <div class="cell" :class="statistics[index].endOfTotal >= 0 ? 'colorRed' : 'colorGreen'">
                       {{ statistics[index].yearOpeningBalance }}
                     </div>
                   </td>-->
                    <!--<td>
                      <div class="cell">
                        {{ formatContent(statistics[index].yearOpeningBalance) }}
                      </div>
                    </td>-->
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { get, post } from '../service/Request'
  import _find from 'lodash/find'
  import _findIndex from 'lodash/findIndex'
  import {
    Loading
  } from 'element-ui'

  export default {
    name: 'index',
    data () {
      var self = this
      return {
        cumulate_user: [],
        new_user: [],
        cancel_user: [],
        new_netgain: [],
        all_binding_user:[],
        binding_user:[],
        active_user:[],
        info_send_user:[],
        cumulate_wxkh_in_2016:[],
        preTransactionDate:'',
        preTransactionDate2:'',
        //dataSetId: 'c7e3d3d3-4892-4642-921f-27f7e2554ef6', /* Development */
        dataSetId: 'cd0a8652-6255-4925-9cfd-5482e529c878', /* Production */
        dataSetTableName: '',
        dateSetFields: [],
        codeNameDate:'',
        dateRange: [
          moment().format('YYYY-MM-DD'),
          moment().format('YYYY-MM-DD')
        ],
        maxDate: '',
        minDate: '',

        fullscreenLoading: false,

        /*statistics: [
          {
            project: '总关注用户数',
            type: '无资料报案件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '日新增用户数',
            type: '报案件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '日取消用户数',
            type: '立案件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '日净增关注用户数',
            type: '未决金额10000元以上未决件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '总绑定用户数',
            type: '未决金额10000元以上未决件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '日绑定用户数',
            type: '未决金额5000元以下未决件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '日活跃用户数',
            type: '未决金额3000元以下未决件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '日消息提醒发送人数',
            type: '未决件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '年度累计微信开户数',
            type: '重开件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          }
        ]*/

        statistics: [
          ['总关注用户数'],
          ['日新增用户数'],
          ['日取消用户数'],
          ['日净增关注用户数'],
          ['总绑定用户数'],
          ['日绑定用户数'],
          ['日活跃用户数'],
          ['日消息提醒发送人数'],
          ['年度累计微信开户数']
        ]
      }
    },
    methods: {
      /*async fetchFilterListByFieldName(aFieldName) {
        const self = this

        const codeName = self.getFieldCodeNameByFieldName(aFieldName)

        const data = await post(`/mort/analysis-result/sql`, {
          'dataSetId': self.dataSetId,
          'sql': `select ${codeName} from ${self.dataSetTableName} where ${self.codeNameDate} = '${self.preTransactionDate}' group by ${codeName}`
        })
        const data2 = await post(`/mort/analysis-result/sql`, {
          'dataSetId': self.dataSetId,
          'sql': `select ${codeName} from ${self.dataSetTableName} where ${self.codeNameDate} = '${self.preTransactionDate2}' group by ${codeName}`
        })
        const rows = [
          data.rows[0],
          data2.rows[0]
        ]
        const filterList = []
        for (let i = 0, count = rows.length; i < count; i++) {
          const [ currentValue = '' ] = rows[i]
          filterList.push({
            value: currentValue,
            label: currentValue
          })
        }
        return filterList
      },

      getFieldCodeNameByFieldName(aFieldName) {
        const self = this

          for (let i = 0, count = self.dateSetFields.length; i < count; i++) {
            const dateSetField = self.dateSetFields[i]
            if (dateSetField.fieldName == aFieldName) {
              return dateSetField.codeName
            }
          }
        console.log(`FieldName '${aFieldName}' not found`)
      },

      dataSorting(data,index){
        const self = this
        data[0].label = parseInt(data[0].label)
        data[1].label = parseInt(data[1].label)
        self.statistics[index].periodOpeningBalance = data[0].label
        self.statistics[index].newChanges = data[1].label

        if(data[1].label < 0){
          data[1].label = Math.abs(parseInt(data[1].label))
        }
        let sequentialValue = (data[0].label - data[1].value) / data[1].label * 100
        if(!self.isInteger(sequentialValue)){
          sequentialValue = sequentialValue.toFixed(2)
        }
        self.statistics[index].endOfTotal = sequentialValue
        self.statistics[index].yearOpeningBalance = sequentialValue + '%'
      },*/

    },
    async created() {
      const self = this
      let preTransaction = {
        "name": "preTransactionDate",
        "params": ["1"]
      }

      let preTransaction2 = {
        "name": "preTransactionDate",
        "params": ["2"]
      }

      self.dataSetTableName = await get(`/mort/data-sets/${self.dataSetId}/table`)
      self.dateSetFields = await get(`/mort/data-sets/${self.dataSetId}/fields`)
      self.preTransactionDate = await post(`/mort/function-executions`,preTransaction)
      self.preTransactionDate2 = await post(`/mort/function-executions`,preTransaction2)

      let cumulate_user = '',new_user = '',cancel_user = '',new_netgain = '',all_binding_user = '',binding_user = '',active_user = '',info_send_user = '',cumulate_wxkh_in_2016 = ''
      for(let i = 0; i < self.dateSetFields.length;i++){
        if(self.dateSetFields[i].fieldName == 'ref_date'){
          self.codeNameDate = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'cumulate_user'){
          cumulate_user = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'new_user'){
          new_user = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'cancel_user'){
          cancel_user = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'new_netgain'){
          new_netgain = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'all_binding_user'){
          all_binding_user = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'binding_user'){
          binding_user = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'active_user'){
          active_user = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'info_send_user'){
          info_send_user = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'cumulate_wxkh_in_2016'){
          cumulate_wxkh_in_2016 = self.dateSetFields[i].codeName
        }
      }

      const tradingDaydata = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId,
        'sql': `select ${cumulate_user},${new_user},${cancel_user},${new_netgain},${all_binding_user},${binding_user},${active_user},${info_send_user},${cumulate_wxkh_in_2016} from ${self.dataSetTableName} where ${self.codeNameDate} = '${self.preTransactionDate}'`
      })

      const tradingDaydata2 = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId,
        'sql': `select ${cumulate_user},${new_user},${cancel_user},${new_netgain},${all_binding_user},${binding_user},${active_user},${info_send_user},${cumulate_wxkh_in_2016} from ${self.dataSetTableName} where ${self.codeNameDate} = '${self.preTransactionDate2}'`
      })

      for(let i = 0; i < self.statistics.length; i++){
        let sequentialValue = (tradingDaydata.rows[0][i] - tradingDaydata2.rows[0][i]) / tradingDaydata2.rows[0][i] * 100
        if(!self.isInteger(sequentialValue)){
          sequentialValue = sequentialValue.toFixed(2)
        }
        self.statistics[i].push(parseInt(tradingDaydata.rows[0][i]))
        self.statistics[i].push(parseInt(tradingDaydata2.rows[0][i]))
        self.statistics[i].push(sequentialValue + '%')
        self.statistics[i].push(sequentialValue)
      }

      /*const data2 = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId,
        'sql': `select ${codeName} from ${self.dataSetTableName} where ${self.codeNameDate} = '${self.preTransactionDate2}' group by ${codeName}`
      })*/

      /*self.cumulate_user = await self.fetchFilterListByFieldName('cumulate_user')
      self.dataSorting(self.cumulate_user,0)
      self.new_user = await self.fetchFilterListByFieldName('new_user')
      self.dataSorting(self.new_user,1)
      self.cancel_user = await self.fetchFilterListByFieldName('cancel_user')
      self.dataSorting(self.cancel_user,2)
      self.new_netgain = await self.fetchFilterListByFieldName('new_netgain')
      self.dataSorting(self.new_netgain,3)
      self.all_binding_user = await self.fetchFilterListByFieldName('all_binding_user')
      self.dataSorting(self.all_binding_user,4)
      self.binding_user = await self.fetchFilterListByFieldName('binding_user')
      self.dataSorting(self.binding_user,5)
      self.active_user = await self.fetchFilterListByFieldName('active_user')
      self.dataSorting(self.active_user,6)
      self.info_send_user = await self.fetchFilterListByFieldName('info_send_user')
      self.dataSorting(self.info_send_user,7)
      self.cumulate_wxkh_in_2016 = await self.fetchFilterListByFieldName('cumulate_wxkh_in_2016')
      self.dataSorting(self.cumulate_wxkh_in_2016,8)*/
    },
    beforeMount() {
      const self = this
    },
    mounted () {
      const self = this
    }
  }
</script>

<style scoped>
  .blank-bottom {
    margin-bottom: 10px
  }
  .compensate {
    padding-top: 20px;
  }
  .el-table table {
    width: 100%;
  }
  .el-table__body, .el-table__header {
    table-layout: auto;
  }
  .el-table td,
  .el-table td .cell,
  .el-table th,
  .el-table th .cell {
    text-align: center;
    white-space: nowrap;
  }
  .el-table td,
  .el-table th {
    height: 30px;
  }
  .el-select {
    width: 100%;
  }

  .select-text {
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    padding-left: 10px;
    background-color: #ccc ;
  }

  .colorRed{
    color:red;
  }
  .colorGreen{
    color:green
  }
  .el-date-editor--daterange.el-input {
    width: 100%;
  }

  .button-offset {
    margin-top: 24px;
  }
</style>
