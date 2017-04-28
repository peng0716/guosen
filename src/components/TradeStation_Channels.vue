<template>
  <div class="compensate">
    <el-row>
      <el-col :span="22" :offset="1">
        <el-row :gutter="20" class="blank-bottom">
          <el-col>
            <div class="select-text">TradeStation渠道推广详细表</div>
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
                        日期
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        手机号
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        渠道
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        是否注册成功
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        分支机构名称
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        客户资金账号
                      </div>
                    </th>
                    <th colspan="1" rowspan="1" class="is-leaf">
                      <div class="cell">
                        城市
                      </div>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(n, index) in data_length" class="">
                    <td v-if="index == 0" :rowspan="data_length">
                      <div class="cell">
                        &nbsp;{{ data_date }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index][1] }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index][2] }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index][3] }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index][4] }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index][5] }}
                      </div>
                    </td>
                    <td>
                      <div class="cell">
                        {{ statistics[index][6] }}
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
        dataSetId: '8607c70c-78fd-464c-b121-2dce83f3c798', /* Development */
        //dataSetId: '6cf32fbf-4bec-4c0d-8166-72f73ec83f69', /* Production */
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

      let ref_date = '',mobileno = '',qd = '',reg_suc = '',branch_name = '',custid = '',position = ''
      for(let i = 0; i < self.dateSetFields.length;i++){
        if(self.dateSetFields[i].fieldName == 'ref_date'){
          ref_date = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'mobileno'){
          mobileno = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'qd'){
          qd = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'reg_suc'){
          reg_suc = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'branch_name'){
          branch_name = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'custid'){
          custid = self.dateSetFields[i].codeName
        }

        if(self.dateSetFields[i].fieldName == 'position'){
          position = self.dateSetFields[i].codeName
        }
      }

      const data = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId,
        'sql': `select ${ref_date},${mobileno},${qd},${reg_suc},${branch_name},${custid},${position} from ${self.dataSetTableName} where ${mobileno} is not Null and ${ref_date} = (select max(${ref_date}) from ${self.dataSetTableName})`
      })
      const { rows } = data
      self.data_length = rows.length
      self.data_date = rows[0][0].substring(0,10)
      self.statistics = rows
      console.log('statistics=',self.statistics)

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
