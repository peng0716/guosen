<template>
  <div class="compensate">
    <el-row>
      <el-col :span="22" :offset="1">
        <el-row :gutter="20" class="blank-bottom">
          <el-col>
            <div class="select-text">金太阳转换客户占比表－双周报</div>
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
                        转换数量
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        开户数量
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        转换占比
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        环比增长
                      </div>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(n, index) in 60">
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
                        <div class="cell">
                          {{ statistics[index] ? statistics[index][3] : '' }}
                        </div>
                      </td>
                      <td>
                        <div class="cell">
                          {{ statistics[index] ? statistics[index][4] : '' }}
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
        //dataSetId: 'c4819d70-9782-4261-bf76-091ed4f9e784', /* Development */
        dataSetId: '78d4f55c-e356-42f8-a23e-202a780be6b7', /* Production */
        dataSetTableName: '',
        dateSetFields: [],
        codeNameDate:'',

        fullscreenLoading: false,

        data_length:'',
        data_date:'',

        statistics: []
      }
    },
    async created() {
      const self = this

      self.dataSetTableName = await get(`/mort/data-sets/${self.dataSetId}/table`)
      self.dateSetFields = await get(`/mort/data-sets/${self.dataSetId}/fields`)

      let stat_date = '',f1 = '',f2 = '',r1 = ''
      for(let i = 0; i < self.dateSetFields.length;i++){
        if(self.dateSetFields[i].fieldName == 'stat_date'){
          stat_date = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f1'){
          f1 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'f2'){
          f2 = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'r1'){
          r1 = self.dateSetFields[i].codeName
        }

      }

      const data = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId,
        'sql': `select ${stat_date},${f1},${f2},${r1} from ${self.dataSetTableName} ORDER BY ${stat_date} DESC LIMIT 76`
      })
      const { rows } = data
      for(let i = 0; i < rows.length; i++){
        rows[i][0] = rows[i][0].substring(0,10)
        rows[i][1] = self.toThousands(parseInt(rows[i][1]))
        rows[i][2] = self.toThousands(parseInt(rows[i][2]))
        if(rows[i + 14] != undefined){
          let growthValue = self.formatContent((rows[i][3] - rows[i + 14][3]) * 100) + '%'
          rows[i].push(growthValue)
        }

        rows[i][3] = self.formatContent(rows[i][3] * 100) + '%'
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
