<template>
  <div class="compensate">
    <el-row>
      <el-col :span="22" :offset="1">
        <el-row :gutter="20" class="blank-bottom">
          <el-col>
            <div class="select-text">各渠道有效委托情况－双周报</div>
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
                        日期(天)
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        委托渠道
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        有效委托笔数
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        有效委托笔数占比
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        有效委托笔数环比增长
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        有效委托金额
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        有效委托金额占比
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        有效委托金额环比增长
                      </div>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(n, index) in displayData">
                    <td v-if="index == dateIndex[0]" :rowspan="dateLength[0]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[1]" :rowspan="dateLength[1]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[2]" :rowspan="dateLength[2]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[3]" :rowspan="dateLength[3]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[4]" :rowspan="dateLength[4]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[5]" :rowspan="dateLength[5]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[6]" :rowspan="dateLength[6]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[7]" :rowspan="dateLength[7]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[8]" :rowspan="dateLength[8]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[9]" :rowspan="dateLength[9]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[10]" :rowspan="dateLength[10]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[11]" :rowspan="dateLength[11]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[12]" :rowspan="dateLength[12]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[13]" :rowspan="dateLength[13]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[14]" :rowspan="dateLength[14]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[15]" :rowspan="dateLength[15]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[16]" :rowspan="dateLength[16]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[17]" :rowspan="dateLength[17]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[18]" :rowspan="dateLength[18]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[19]" :rowspan="dateLength[19]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[20]" :rowspan="dateLength[20]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[21]" :rowspan="dateLength[21]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[22]" :rowspan="dateLength[22]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[23]" :rowspan="dateLength[23]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[24]" :rowspan="dateLength[24]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[25]" :rowspan="dateLength[25]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[26]" :rowspan="dateLength[26]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[27]" :rowspan="dateLength[27]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[28]" :rowspan="dateLength[28]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
                    </td>
                    <td v-if="index == dateIndex[29]" :rowspan="dateLength[29]">
                      <div class="cell">{{ statistics[index] ? statistics[index][0] : '' }}</div>
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
                      <div class="cell">
                        {{ statistics[index] ? statistics[index][6] : '' }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index] ? statistics[index][7] : '' }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index] ? statistics[index][4] : '' }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index] ? statistics[index][8] : '' }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index] ? statistics[index][9] : '' }}
                      </div>
                    </td>
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
        //dataSetId: '20e241f2-32b0-47c7-95e1-9c2f6d7b8104', /* Development */
        dataSetId: '056504da-de2a-4140-8640-e27e3aa00c7a', /* Production */
        dataSetTableName: '',
        dateSetFields: [],
        codeNameDate:'',

        fullscreenLoading: false,

        displayData:0,
        maxDate:'',
        dateIndex:[0],
        timeData:[],
        dateLength:[],

        statistics: []
      }
    },
    methods:{
      zeroize(data){
        return data < 10 ? '0' + data : data
      },

      timeTransformation(time){
        const self = this
        time = new Date(time * 1000)
        let Y = time.getFullYear() + '-'
        let M = self.zeroize(time.getMonth()+1) + '-'
        let D = self.zeroize(time.getDate()) + ' '
        let h = self.zeroize(time.getHours()) + ':'
        let m = self.zeroize(time.getMinutes()) + ':'
        let s = self.zeroize(time.getSeconds()) + '.0'
        time = Y + M + D + h + m + s
        return time
      },

      channelSorting(data){
        const self = this
        console.log('data=',data)
        debugger
        const channelData = [],otherChannel = [],phoneChannel = [],onlineChannel = [],sunChannel = []
        const { rows } = data
        self.timeData.push(self.maxDate)
        for(let i = 0; i < rows.length;i++){
          let rowDate = rows[i][0]
          if(rows[i + 1] != undefined && rowDate != rows[i + 1][0]){
            self.dateIndex.push(i + 1)
            self.timeData.push(rows[i + 1][0])
          }
        }
        self.displayData = self.dateIndex[30]

        for(let j = 0; j < rows.length;j++){
          if(rows[j][1] == '其他'){
            otherChannel.push(rows[j])
            rows.splice(j,1)
          }else if(rows[j][1] == '电话委托'){
            phoneChannel.push(rows[j])
            rows.splice(j,1)
          }else if(rows[j][1] == '网上交易'){
            onlineChannel.push(rows[j])
            rows.splice(j,1)
          }else if(rows[j][1] == '金太阳'){
            sunChannel.push(rows[j])
            rows.splice(j,1)
          }
          j--
        }

        for(let z = 0; z < self.dateIndex.length; z++){
          let cur = Math.abs(self.dateIndex[z] - self.dateIndex[z + 1])
          self.dateLength.push(cur)
          if(self.timeData[z] == otherChannel[0][0]){
            channelData.push(otherChannel[0])
            otherChannel.splice(0,1)
          }
          if(self.timeData[z] == phoneChannel[0][0]){
            channelData.push(phoneChannel[0])
            phoneChannel.splice(0,1)
          }
          if(self.timeData[z] == onlineChannel[0][0]){
            channelData.push(onlineChannel[0])
            onlineChannel.splice(0,1)
          }
          if(self.timeData[z] == sunChannel[0][0]){
            channelData.push(sunChannel[0])
            sunChannel.splice(0,1)
          }
        }
        console.log('channelData=',channelData)
        return channelData
      }
    },
    async created() {
      const self = this
      self.dataSetTableName = await get(`/mort/data-sets/${self.dataSetId}/table`)
      self.dateSetFields = await get(`/mort/data-sets/${self.dataSetId}/fields`)

      let stat_date = '',class1 = '',f1 = '',f2 = '',t1 = '',t2 = ''
      for(let i = 0; i < self.dateSetFields.length;i++){
        if(self.dateSetFields[i].fieldName == 'stat_date'){
          stat_date = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'class1'){
          class1 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f1'){
          f1 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f2'){
          f2 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 't1'){
          t1 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 't2'){
          t2 = self.dateSetFields[i].codeName
        }

      }

      const time = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId,
        'sql': `select max(${stat_date}) from ${self.dataSetTableName}`
      })
      let maxDate = time.rows[0][0]
      self.maxDate = maxDate
      let timestamp = Date.parse(new Date(maxDate));
      timestamp = timestamp / 1000
      let timeOfDay = 60 * 60 * 24 * 44
      let minDate = self.timeTransformation(timestamp - timeOfDay)

      const data = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId,
        'sql': `select ${stat_date},${class1},${f1},${t1},${f2},${t2} from ${self.dataSetTableName} where ${stat_date} >= '${minDate}' and ${stat_date} <= '${maxDate}' order by ${stat_date} desc`
      })
      let rows = self.channelSorting(data)

      for(let z = 0; z < rows.length; z++){
        rows[z][3] = rows[z][3] * 1
        rows[z][5] = rows[z][5] * 1

        let numberAccounted = self.formatContent(rows[z][2] / rows[z][3] * 100) + '%'
        rows[z].push(numberAccounted)

        if(rows[self.dateIndex[14] + z] != undefined){
        let numberGrowth = self.formatContent((rows[z][2] / rows[self.dateIndex[14] + z][2] - 1) * 100) + '%'
          rows[z].push(numberGrowth)
        }

        let moneyAccounted = self.formatContent(rows[z][4] / rows[z][5] * 100) + '%'
        rows[z].push(moneyAccounted)

        if(rows[self.dateIndex[14] + z] != undefined){
          let moneyGrowth = self.formatContent((rows[z][4] / rows[self.dateIndex[14] + z][4] - 1) * 100) + '%'
          rows[z].push(moneyGrowth)
        }

        rows[z][0] = rows[z][0].substring(0,10)
        rows[z][2] = self.toThousands(parseInt(rows[z][2]))
        rows[z][4] = self.toThousands(rows[z][4])
      }
      self.statistics = rows

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
    margin-bottom: 20px;
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
