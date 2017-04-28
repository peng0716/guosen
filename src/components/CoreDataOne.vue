<template>
  <div class="compensate">
    <el-row>
      <el-col :span="22" :offset="1">
        <el-row :gutter="20" class="blank-bottom">
          <el-col>
            <div class="select-text">核心数据－１</div>
          </el-col>
        </el-row>
        <!--<el-row :gutter="20" class="blank-bottom">
          <el-col :span="6">
            <div class="select-text">案件类型</div>
            <el-select v-model="CASE_STATE" filterable placeholder="请选择" size="small">
              <el-option :label="'全部'" :value="''"></el-option>
              <el-option
                v-for="(item, index) in CASE_STATE_LIST"
                v-if="item.value"
                :label="item.label"
                :value="item.value"
                :key="index">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <div class="select-text">时间范围</div>
            <el-date-picker
              v-model="dateRange"
              type="daterange"
              placeholder="选择日期范围"
              size="small"
              :editable="false"
              :picker-options="pickerOptions"
              @change="onDateChange">
            </el-date-picker>
          </el-col>
          <el-col :span="6">
            <el-button
              type="primary"
              size="small"
              class="button-offset"
              @click="onSearch">
              查询
            </el-button>
          </el-col>
        </el-row>-->
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
                        当天
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        前一个交易日
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
                  <tr v-for="(n, index) in 10" class="">
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
                      <div class="cell" :class="statisticsColor[index] >= 0 ? 'colorRed' : 'colorGreen'">
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
                    <td v-if="index == 9">
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
        f23: [],
        f24: [],
        f27: [],
        z_activeusers: [],
        f4:[],
        f37:[],
        f5:[],
        f4375:[
          {label:''},
          {label:''}
        ],
        f6:[],
        f7:[],
        f67:[
          {label:''},
          {label:''}
        ],
        f8:[],
        f9:[],
        f89:[
          {label:''},
          {label:''}
        ],
        soft_ver:'',
        device_ver:'',
        soft_alias:'',
        softver:'',

        //dataSetId: 'a59ba21e-18ea-459d-a953-409588ac2789', /* Development */
        //dataSetId2: '06728b0c-12cf-47b5-a68c-62b2a27cac28', /* Development */
        dataSetId: '213a2497-3641-497c-9ead-fe409996bd00', /* Production */
        dataSetId2: '56df44a9-da81-4cc6-98e7-5a15bccd5ac5', /* Production */
        dataSetTableName: '',
        dateSetFields: [],
        dataSetTableName2: '',
        dateSetFields2: [],
        codeNameDate:'',
        codeNameDate2:'',
        preTransactionDate:'',
        preTransactionDate2:'',
        dateRange: [
          moment().format('YYYY-MM-DD'),
          moment().format('YYYY-MM-DD')
        ],
        maxDate: '',
        minDate: '',

        fullscreenLoading: false,

        statisticsColor:[],
        statistics: [
          ['总注册用户数'],
          ['总交易用户数'],
          ['总转换用户数'],
          ['动态有效客户数'],
          ['总成交量(亿元)'],
          ['成交量占比'],
          ['总手续费(万元)'],
          ['手续费占比'],
          ['总有效委托笔数'],
          ['有效委托笔数占比']
        ]

        /*statistics: [
          {
            project: '总注册用户数',
            type: '无资料报案件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0,
          },
          {
            project: '总交易用户数',
            type: '报案件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '总转换用户数',
            type: '立案件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '动态有效客户数',
            type: '未决金额10000元以上未决件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '总成交量(亿元)',
            type: '未决金额10000元以上未决件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '成交量占比',
            type: '未决金额5000元以下未决件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '总手续费(万元)',
            type: '未决金额3000元以下未决件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '手续费占比',
            type: '未决件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '总有效委托笔数',
            type: '重开件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          },
          {
            project: '有效委托笔数占比',
            type: '拒赔件数',
            periodOpeningBalance: 0,
            newChanges: 0,
            endOfTotal: 0,
            yearOpeningBalance: 0
          }
        ]*/
      }
    },
    /*methods: {
      async fetchFilterListByFieldName(aFieldName) {
        const self = this

        const codeName = self.getFieldCodeNameByFieldName(aFieldName)
        let textSql
        let textSql2
        if(aFieldName != 'z_activeusers'){
          textSql = {
            'dataSetId': self.dataSetId,
              'sql': `select ${codeName} from ${self.dataSetTableName} where ${self.codeNameDate} = '${self.preTransactionDate}' and ${self.soft_ver} = '@_all' and ${self.device_ver} = '@_all' and ${self.soft_alias} = '@_all' group by ${codeName}`
          }

          textSql2 = {
            'dataSetId': self.dataSetId,
            'sql': `select ${codeName} from ${self.dataSetTableName} where ${self.codeNameDate} = '${self.preTransactionDate2}' and ${self.soft_ver} = '@_all' and ${self.device_ver} = '@_all' and ${self.soft_alias} = '@_all' group by ${codeName}`
          }
        }else{
          textSql = {
            'dataSetId': self.dataSetId2,
            'sql': `select ${codeName} from ${self.dataSetTableName2} where ${self.codeNameDate2} = '${self.preTransactionDate}' and ${self.softver} = '小计' group by ${codeName}`
          }

          textSql2 = {
            'dataSetId': self.dataSetId2,
            'sql': `select ${codeName} from ${self.dataSetTableName2} where ${self.codeNameDate2} = '${self.preTransactionDate2}' and ${self.softver} = '小计' group by ${codeName}`
          }
        }

        const data = await post(`/mort/analysis-result/sql`, textSql)
        const data2 = await post(`/mort/analysis-result/sql`, textSql2)
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
        if(aFieldName != 'z_activeusers'){
          for (let i = 0, count = self.dateSetFields.length; i < count; i++) {
            const dateSetField = self.dateSetFields[i]
            if (dateSetField.fieldName == aFieldName) {
              return dateSetField.codeName
            }
          }
        }else{
          for (let i = 0, count = self.dateSetFields2.length; i < count; i++) {
            const dateSetField = self.dateSetFields2[i]
            if (dateSetField.fieldName == aFieldName) {
              return dateSetField.codeName
            }
          }
        }
        console.log(`FieldName '${aFieldName}' not found`)
      },

      dataSorting(data,index){
        const self = this

        if(index != 4 && index != 5 && index != 7 && index != 9){
          data[0].label = parseInt(data[0].label)
          data[1].label = parseInt(data[1].label)
        }

        if(index == 4){
          data[0].label = new Number(data[0].label)
          data[1].label = new Number(data[1].label)
          let yiLabel = data[0].label.toString()
          let yiLabel2 = data[1].label.toString()
          data[0].label = yiLabel.substring(0,yiLabel.length - 8)
          data[1].label = yiLabel2.substring(0,yiLabel2.length - 8)
        }

        if(index == 6){
          let wanLabel = data[0].label.toString()
          let wanLabel2 = data[1].label.toString()
          data[0].label = wanLabel.substring(0,wanLabel.length - 4)
          data[1].label = wanLabel2.substring(0,wanLabel2.length - 4)
        }
        let sequentialValue = data[0].label - data[1].label
        self.statistics[index].periodOpeningBalance = data[0].label
        self.statistics[index].newChanges = data[1].label
        if(!self.isInteger(sequentialValue)){
          sequentialValue = sequentialValue.toFixed(2)
        }
        self.statistics[index].endOfTotal = sequentialValue
        self.statistics[index].yearOpeningBalance = sequentialValue

        if(index == 5 || index == 7 || index == 9){
          self.statistics[index].periodOpeningBalance = self.statistics[index].periodOpeningBalance + '%'
          self.statistics[index].newChanges = self.statistics[index].newChanges + '%'
          self.statistics[index].yearOpeningBalance = self.statistics[index].yearOpeningBalance + '%'
        }
      },
    },*/
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
      self.dataSetTableName2 = await get(`/mort/data-sets/${self.dataSetId2}/table`)
      self.dateSetFields = await get(`/mort/data-sets/${self.dataSetId}/fields`)
      self.dateSetFields2 = await get(`/mort/data-sets/${self.dataSetId2}/fields`)
      self.preTransactionDate = await post(`/mort/function-executions`,preTransaction)
      self.preTransactionDate2 = await post(`/mort/function-executions`,preTransaction2)

      let f23 = '',f24 = '',f27 = '',f4 = '',f37 = '',f5 = '',f6 = '',f7 = '',f8 = '',f9 = ''
      for(let i = 0; i < self.dateSetFields.length;i++){
        if(self.dateSetFields[i].fieldName == 'stat_date'){
            self.codeNameDate = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'soft_ver'){
          self.soft_ver = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'device_ver'){
          self.device_ver = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'soft_alias'){
          self.soft_alias = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f23'){
          f23 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f24'){
          f24 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f27'){
          f27 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f4'){
          f4 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f37'){
          f37 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f5'){
          f5 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f6'){
          f6 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f7'){
          f7 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f8'){
          f8 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f9'){
          f9 = self.dateSetFields[i].codeName
        }

      }

      let z_activeusers = ''
      for(let j = 0; j < self.dateSetFields2.length;j++){
        if(self.dateSetFields2[j].fieldName == 'dcdate'){
          self.codeNameDate2 = self.dateSetFields2[j].codeName
        }
        if(self.dateSetFields2[j].fieldName == 'softver'){
          self.softver = self.dateSetFields2[j].codeName
        }
        if(self.dateSetFields2[j].fieldName == 'z_activeusers'){
          z_activeusers = self.dateSetFields2[j].codeName
        }
      }

      /*let textSql
      let textSql2
      if(aFieldName != 'z_activeusers'){
        textSql = {
          'dataSetId': self.dataSetId,
          'sql': `select ${codeName} from ${self.dataSetTableName} where ${self.codeNameDate} = '${self.preTransactionDate}' and ${self.soft_ver} = '@_all' and ${self.device_ver} = '@_all' and ${self.soft_alias} = '@_all' group by ${codeName}`
        }

        textSql2 = {
          'dataSetId': self.dataSetId,
          'sql': `select ${codeName} from ${self.dataSetTableName} where ${self.codeNameDate} = '${self.preTransactionDate2}' and ${self.soft_ver} = '@_all' and ${self.device_ver} = '@_all' and ${self.soft_alias} = '@_all' group by ${codeName}`
        }
      }else{
        textSql = {
          'dataSetId': self.dataSetId2,
          'sql': `select ${codeName} from ${self.dataSetTableName2} where ${self.codeNameDate2} = '${self.preTransactionDate}' and ${self.softver} = '小计' group by ${codeName}`
        }

        textSql2 = {
          'dataSetId': self.dataSetId2,
          'sql': `select ${codeName} from ${self.dataSetTableName2} where ${self.codeNameDate2} = '${self.preTransactionDate2}' and ${self.softver} = '小计' group by ${codeName}`
        }
      }*/

      const tradingDaydata = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId,
        'sql': `select ${f23},${f24},${f27},${f4},${f37},${f5},${f6},${f7},${f8},${f9} from ${self.dataSetTableName} where ${self.codeNameDate} = '${self.preTransactionDate}' and ${self.soft_ver} = '@_all' and ${self.device_ver} = '@_all' and ${self.soft_alias} = '@_all'`
      })
      const tradingDaydata2 = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId,
        'sql': `select ${f23},${f24},${f27},${f4},${f37},${f5},${f6},${f7},${f8},${f9} from ${self.dataSetTableName} where ${self.codeNameDate} = '${self.preTransactionDate2}' and ${self.soft_ver} = '@_all' and ${self.device_ver} = '@_all' and ${self.soft_alias} = '@_all'`
      })

      const tradingDaydata_2 = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId2,
        'sql': `select ${z_activeusers} from ${self.dataSetTableName2} where ${self.codeNameDate2} = '${self.preTransactionDate}' and ${self.softver} = '小计'`
      })
      const tradingDaydata_2_1 = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId2,
        'sql': `select ${z_activeusers} from ${self.dataSetTableName2} where ${self.codeNameDate2} = '${self.preTransactionDate2}' and ${self.softver} = '小计'`
      })

      /*动态有效客户数*/
      tradingDaydata.rows[0].splice(3,0,tradingDaydata_2.rows[0][0])
      tradingDaydata2.rows[0].splice(3,0,tradingDaydata_2_1.rows[0][0])
      /*总成交量*/
      tradingDaydata.rows[0][4] = tradingDaydata.rows[0][4] * 1
      tradingDaydata2.rows[0][4] = tradingDaydata.rows[0][4] * 1

      /*成交量占比 f5 / (f4 - f37)*/
      tradingDaydata.rows[0].push(self.formatContent(tradingDaydata.rows[0][6] / (tradingDaydata.rows[0][4] - tradingDaydata.rows[0][5]) * 100))
      tradingDaydata2.rows[0].push(self.formatContent(tradingDaydata2.rows[0][6] / (tradingDaydata2.rows[0][4] - tradingDaydata2.rows[0][5]) * 100))

      /*手续费占比 f7 / f6*/
      tradingDaydata.rows[0].push(self.formatContent(tradingDaydata.rows[0][8] / tradingDaydata.rows[0][7] * 100))
      tradingDaydata2.rows[0].push(self.formatContent(tradingDaydata2.rows[0][8] / tradingDaydata2.rows[0][7] * 100))

      /* 有效委托笔数占比 f9 / f8*/
      tradingDaydata.rows[0].push(self.formatContent(tradingDaydata.rows[0][10] / tradingDaydata.rows[0][9] * 100))
      tradingDaydata2.rows[0].push(self.formatContent(tradingDaydata2.rows[0][10] / tradingDaydata2.rows[0][9] * 100))

      /*总成交量(亿元)*/
      let yiLabel = tradingDaydata.rows[0][4].toString()
      let yiLabel2 = tradingDaydata2.rows[0][4].toString()
      tradingDaydata.rows[0][4] = yiLabel.substring(0,yiLabel.length - 8)
      tradingDaydata2.rows[0][4] = yiLabel2.substring(0,yiLabel2.length - 8)

      /*总手续费(万元)*/
      let wanLabel = parseInt(tradingDaydata.rows[0][7]).toString()
      let wanLabel2 = parseInt(tradingDaydata2.rows[0][7]).toString()
      tradingDaydata.rows[0][7] = wanLabel.substring(0,wanLabel.length - 4)
      tradingDaydata2.rows[0][7] = wanLabel2.substring(0,wanLabel2.length - 4)

      tradingDaydata.rows[0].splice(5,2,tradingDaydata.rows[0][11])
      tradingDaydata2.rows[0].splice(5,2,tradingDaydata2.rows[0][11])

      tradingDaydata.rows[0].splice(7,1,tradingDaydata.rows[0][11])
      tradingDaydata2.rows[0].splice(7,1,tradingDaydata2.rows[0][11])

      tradingDaydata.rows[0].splice(9,0,tradingDaydata.rows[0][12])
      tradingDaydata2.rows[0].splice(9,0,tradingDaydata2.rows[0][12])

      for(let i = 0; i < 10;i++){
        let sequentialValue = tradingDaydata.rows[0][i] - tradingDaydata2.rows[0][i]
        if(!self.isInteger(sequentialValue)){
          sequentialValue = sequentialValue.toFixed(2)
        }

        self.statisticsColor.push(sequentialValue)

        if(i != 5 && i != 7 && i != 9){
          self.statistics[i].push(parseInt(tradingDaydata.rows[0][i]))
          self.statistics[i].push(parseInt(tradingDaydata2.rows[0][i]))
        }else{
          self.statistics[i].push(tradingDaydata.rows[0][i] + '%')
          self.statistics[i].push(tradingDaydata2.rows[0][i] + '%')
        }

        if(i != 5 && i != 7 && i != 9){
         self.statistics[i].push(sequentialValue)
        }else{
          self.statistics[i].push(sequentialValue + '%')
        }
      }

      /*self.f23 = await self.fetchFilterListByFieldName('f23')
      self.dataSorting(self.f23,0)
      self.f24 = await self.fetchFilterListByFieldName('f24')
      self.dataSorting(self.f24,1)
      self.f27 = await self.fetchFilterListByFieldName('f27')
      self.dataSorting(self.f27,2)
      self.z_activeusers = await self.fetchFilterListByFieldName('z_activeusers')
      self.dataSorting(self.z_activeusers,3)
      self.f4 = await self.fetchFilterListByFieldName('f4')
      let f4_init = self.f4
      f4_init[0].value = f4_init[0].value.toString()
      f4_init[0].value = f4_init[0].value * 1
      f4_init[1].value = f4_init[1].value * 1
      self.dataSorting(self.f4,4)
      self.f37 = await self.fetchFilterListByFieldName('f37')
      self.f5 = await self.fetchFilterListByFieldName('f5')
      self.f4375[0].label = self.formatContent(self.f5[0].label / (f4_init[0].value - self.f37[0].label) * 100)
      self.f4375[1].label = self.formatContent(self.f5[1].label / (f4_init[1].value - self.f37[1].label) * 100)
      self.dataSorting(self.f4375,5)
      self.f6 = await self.fetchFilterListByFieldName('f6')
      let f6_init = self.f6
      self.dataSorting(self.f6,6)
      self.f7 = await self.fetchFilterListByFieldName('f7')
      self.f67[0].label = self.formatContent(self.f7[0].label / f6_init[0].value * 100)
      self.f67[1].label = self.formatContent(self.f7[1].label / f6_init[1].value * 100)
      self.dataSorting(self.f67,7)
      self.f8 = await self.fetchFilterListByFieldName('f8')
      self.dataSorting(self.f8,8)
      self.f9 = await self.fetchFilterListByFieldName('f9')
      self.f89[0].label = self.formatContent(self.f9[0].label / self.f8[0].label * 100)
      self.f89[1].label = self.formatContent(self.f9[1].label / self.f8[1].label * 100)
      self.dataSorting(self.f89,9)*/
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
