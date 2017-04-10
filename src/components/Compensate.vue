<template>
  <div class="compensate">
    <el-row>
      <el-col :span="22" :offset="1">
        <el-row :gutter="20" class="blank-bottom">
          <el-col :span="6">
            <div class="select-text">机构</div>
            <el-select v-model="DPT_CNM" filterable placeholder="请选择" size="small">
              <el-option :label="'全部'" :value="''"></el-option>
              <el-option
                v-for="(item, index) in DPT_CNM_LIST"
                v-if="item.value"
                :label="item.label"
                :value="item.value"
                :key="index">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <div class="select-text">业务来源</div>
            <el-select v-model="BSNS_TYP_CNM" filterable placeholder="请选择" size="small">
              <el-option :label="'全部'" :value="''"></el-option>
              <el-option
                v-for="(item, index) in BSNS_TYP_CNM_LIST"
                v-if="item.value"
                :label="item.label"
                :value="item.value"
                :key="index">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <div class="select-text">险种维度</div>
            <el-select v-model="PROD_CNM" filterable placeholder="请选择" size="small">
              <el-option :label="'全部'" :value="''"></el-option>
              <el-option
                v-for="(item, index) in PROD_CNM_LIST"
                v-if="item.value"
                :label="item.label"
                :value="item.value"
                :key="index">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <div class="select-text">赔案经办人</div>
            <el-select v-model="RGST_CNM" filterable placeholder="请选择" size="small">
              <el-option :label="'全部'" :value="''"></el-option>
              <el-option
                v-for="(item, index) in RGST_CNM_LIST"
                v-if="item.value"
                :label="item.label"
                :value="item.value"
                :key="index">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="blank-bottom">
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
                          序号
                        </div>
                      </th>
                      <th colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">
                          类别
                        </div>
                      </th>
                      <th colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">
                          项目
                        </div>
                      </th>
                      <th colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">
                          期初余额
                        </div>
                      </th>
                      <th colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">
                          新增/变化
                        </div>
                      </th>
                      <th colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">
                          期末累计
                        </div>
                      </th>
                      <th colspan="1" rowspan="1" class="is-leaf">
                        <div class="cell">
                          年初余额
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(n, index) in 37" class="">
                      <td>
                        <div class="cell">
                          {{ index + 1 }}
                        </div>
                      </td>
                      <td v-if="index == 0" rowspan="7">
                        <div class="cell">
                          &nbsp;案件
                          <br>
                          （未决）
                        </div>
                      </td>
                      <td v-if="index == 7" rowspan="5">
                        <div class="cell">
                          &nbsp;案件
                          <br>
                          （已决）
                        </div>
                      </td>
                      <td v-if="index == 12" rowspan="8">
                        <div class="cell">
                          准备金
                        </div>
                      </td>
                      <td v-if="index == 20" rowspan="10">
                        <div class="cell">
                          赔款
                        </div>
                      </td>
                      <td v-if="index == 30">
                        <div class="cell">
                          单列
                        </div>
                      </td>
                      <td v-if="index == 31" rowspan="7">
                        <div class="cell">
                          合计
                        </div>
                      </td>
                      <td>
                        <div class="cell">
                          {{ statistics[index].type }}
                        </div>
                      </td>
                      <td>
                        <div class="cell">
                          {{ formatContent(statistics[index].periodOpeningBalance) }}
                        </div>
                      </td>
                      <td>
                        <div class="cell">
                          {{ formatContent(statistics[index].newChanges) }}
                        </div>
                      </td>
                      <td>
                        <div class="cell">
                          {{ formatContent(statistics[index].endOfTotal) }}
                        </div>
                      </td>
                      <td>
                        <div class="cell">
                          {{ formatContent(statistics[index].yearOpeningBalance) }}
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
  name: 'compensate',
  data () {
    var self = this
    return {
      DPT_CNM: '',
      DPT_CNM_LIST: [],
      BSNS_TYP_CNM: '',
      BSNS_TYP_CNM_LIST: [],
      PROD_CNM: '',
      PROD_CNM_LIST: [],
      RGST_CNM: '',
      RGST_CNM_LIST: [],
      CASE_STATE: '',
      CASE_STATE_LIST: [],

      // dataSetId: 'bf164b90-7854-4aed-8d77-223b9de0c8f1', /* Development */
      dataSetId: 'ebdb35ad-7010-4c1e-9ba6-bc11625d5465', /* Production */
      dataSetTableName: '',
      dateSetFields: [],
      dateRange: [
        moment().format('YYYY-MM-DD'),
        moment().format('YYYY-MM-DD')
      ],
      maxDate: '',
      minDate: '',

      fullscreenLoading: false,

      pickerOptions: {
        disabledDate(time) {
          return (time.getTime() < self.minDate) || (time.getTime() > self.maxDate)
        },
        onPick(aDateObj) {
          self.dateRange = [
            moment(aDateObj.minDate).format('YYYY-MM-DD'),
            moment(aDateObj.maxDate).format('YYYY-MM-DD')
          ]
        }
      },

      statistics: [
        {
          project: '案件（未决）',
          type: '无资料报案件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '案件（未决）',
          type: '报案件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '案件（未决）',
          type: '立案件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '案件（未决）',
          type: '未决金额10000元以上未决件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '案件（未决）',
          type: '未决金额5000元以下未决件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '案件（未决）',
          type: '未决金额3000元以下未决件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '案件（未决）',
          type: '未决件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '案件（已决）',
          type: '重开件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '案件（已决）',
          type: '拒赔件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '案件（已决）',
          type: '立案注销件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '案件（已决）',
          type: '正常赔付结案件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '案件（已决）',
          type: '结案件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '准备金',
          type: '直接业务（赔款）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '准备金',
          type: '直接业务（直接理赔费用）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '准备金',
          type: '追偿款',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '准备金',
          type: '直接业务（汇总）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '准备金',
          type: '再保预摊回（临时分出）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '准备金',
          type: '再保预摊回（合约分出）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '准备金',
          type: '临时分入业务',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '准备金',
          type: '再保后总额-赔款',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '赔款',
          type: '直接业务（赔款）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '赔款',
          type: '直接业务（直接理赔费用）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '赔款',
          type: '追偿款',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '赔款',
          type: '直接业务（汇总）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '赔款',
          type: '再保预摊回（临时分出）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '赔款',
          type: '再保预摊回（合约分出）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '赔款',
          type: '临时分入业务',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '赔款',
          type: '再保前总额',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '赔款',
          type: '再保摊回',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '赔款',
          type: '再保后保额',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '单列',
          type: '报案注销件数',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '合计',
          type: '已决+未决（直接业务）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '合计',
          type: '已决+未决（再保分入）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '合计',
          type: '准备金(直接业务)',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '合计',
          type: '准备金(再保分入)',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '合计',
          type: '已报告赔款(直接业务）',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        },
        {
          project: '合计',
          type: '已报告赔款(再保分入)',
          periodOpeningBalance: 0,
          newChanges: 0,
          endOfTotal: 0,
          yearOpeningBalance: 0
        }
      ]
    }
  },
  methods: {
    async fetchFilterListByFieldName(aFieldName) {
      const self = this

      const codeName = self.getFieldCodeNameByFieldName(aFieldName)

      const { rows = [] } = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId,
        'sql': `select ${codeName} from ${self.dataSetTableName} group by ${codeName}`
      })

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

    onDateChange(aText) {
      const self = this
    },

    async onSearch() {
      const self = this

      let loadingInstance = Loading.service({ fullscreen: true });

      const CodeName_TYPE_CNM = self.getFieldCodeNameByFieldName('TYPE_CNM')
      const CodeName_PROJECT_CNM = self.getFieldCodeNameByFieldName('PROJECT_CNM')
      const CodeName_ASSESS_DT = self.getFieldCodeNameByFieldName('ASSESS_DT')
      const CodeName_INDEX_VALUE = self.getFieldCodeNameByFieldName('INDEX_VALUE')
      const CodeName_DPT_CNM = self.getFieldCodeNameByFieldName('DPT_CNM_LVL2')
      const CodeName_BSNS_TYP_CNM = self.getFieldCodeNameByFieldName('BSNS_TYP_CNM')
      const CodeName_PROD_CNM = self.getFieldCodeNameByFieldName('PROD_CNM')
      const CodeName_RGST_CNM = self.getFieldCodeNameByFieldName('RGST_CNM')
      const CodeName_CASE_STATE = self.getFieldCodeNameByFieldName('CASE_STATE')

      let whereAddition = ''
      if (self.DPT_CNM != '') {
        whereAddition += ` and ${CodeName_DPT_CNM} = '${self.DPT_CNM}'`
      }
      if (self.BSNS_TYP_CNM != '') {
        whereAddition += ` and ${CodeName_BSNS_TYP_CNM} = '${self.BSNS_TYP_CNM}'`
      }
      if (self.PROD_CNM != '') {
        whereAddition += ` and ${CodeName_PROD_CNM} = '${self.PROD_CNM}'`
      }
      if (self.RGST_CNM != '') {
        whereAddition += ` and ${CodeName_RGST_CNM} = '${self.RGST_CNM}'`
      }
      if (self.CASE_STATE != '') {
        whereAddition += ` and ${CodeName_CASE_STATE} = '${self.CASE_STATE}'`
      }

      const [ START_DATE = '', END_DATE = '' ] = self.dateRange

      const { rows = [] } = await post(`/mort/analysis-result/sql`, {
        'dataSetId': self.dataSetId,
        'sql': `select a.${CodeName_TYPE_CNM} type,
                     a.${CodeName_PROJECT_CNM} project,
                     a.sum1 qiChuYuE,
                     (b.sum2 - a.sum1) xinZengBianHua,
                     b.sum2 qiMoLeiJi,
                     c.sum3 nianChuLeiJi
                from (select ${CodeName_TYPE_CNM}, ${CodeName_PROJECT_CNM}, sum(${CodeName_INDEX_VALUE}) as sum1
                        from ${self.dataSetTableName}
                       where ${CodeName_ASSESS_DT} <= '${moment(START_DATE).format('YYYY-MM-DD HH:mm:ss')}' ${whereAddition}
                       group by ${CodeName_TYPE_CNM}, ${CodeName_PROJECT_CNM}) a
                left join (select ${CodeName_TYPE_CNM}, ${CodeName_PROJECT_CNM}, sum(${CodeName_INDEX_VALUE}) as sum2
                             from ${self.dataSetTableName}
                            where ${CodeName_ASSESS_DT} <= '${moment(END_DATE).format('YYYY-MM-DD HH:mm:ss')}' ${whereAddition}
                            group by ${CodeName_TYPE_CNM}, ${CodeName_PROJECT_CNM}) b
                  on a.${CodeName_TYPE_CNM} = b.${CodeName_TYPE_CNM}
                 and a.${CodeName_PROJECT_CNM} = b.${CodeName_PROJECT_CNM}
                left join (select ${CodeName_TYPE_CNM}, ${CodeName_PROJECT_CNM}, sum(${CodeName_INDEX_VALUE}) as sum3
                             from ${self.dataSetTableName}
                            where ${CodeName_ASSESS_DT} <= '${moment(START_DATE).format('YYYY-01-01 HH:mm:ss')}' ${whereAddition}
                            group by ${CodeName_TYPE_CNM}, ${CodeName_PROJECT_CNM}) c
                  on c.${CodeName_TYPE_CNM} = b.${CodeName_TYPE_CNM}
                 and c.${CodeName_PROJECT_CNM} = b.${CodeName_PROJECT_CNM}
              `
      })

      rows.map(row => {
        const [ project = '', type = '', periodOpeningBalance = 0, newChanges = 0, endOfTotal = 0, yearOpeningBalance = 0 ] = row

        const statisticIndex = _findIndex(self.statistics, { 'project': project, 'type': type })

        self.statistics[statisticIndex].periodOpeningBalance = periodOpeningBalance
        self.statistics[statisticIndex].newChanges = newChanges
        self.statistics[statisticIndex].endOfTotal = endOfTotal
        self.statistics[statisticIndex].yearOpeningBalance = yearOpeningBalance

      })

      setTimeout(() => {
        loadingInstance.close()
      }, 10)
    }
  },
  async created() {
    const self = this

    self.dataSetTableName = await get(`/mort/data-sets/${self.dataSetId}/table`)
    self.dateSetFields = await get(`/mort/data-sets/${self.dataSetId}/fields`)

    self.DPT_CNM_LIST = await self.fetchFilterListByFieldName('DPT_CNM_LVL2')
    self.BSNS_TYP_CNM_LIST = await self.fetchFilterListByFieldName('BSNS_TYP_CNM')
    self.PROD_CNM_LIST = await self.fetchFilterListByFieldName('PROD_CNM')
    self.RGST_CNM_LIST = await self.fetchFilterListByFieldName('RGST_CNM')
    self.CASE_STATE_LIST = await self.fetchFilterListByFieldName('CASE_STATE')

    const CodeName_ASSESS_DT = self.getFieldCodeNameByFieldName('ASSESS_DT')
    const { rows = [] } = await post(`/mort/analysis-result/sql`, {
      'dataSetId': self.dataSetId,
      'sql': `select min(${CodeName_ASSESS_DT}), max(${CodeName_ASSESS_DT}) from ${self.dataSetTableName}`
    })

    const [ [ currentMinDate = '', currentMaxDate = '' ] ] = rows
    self.minDate = moment(currentMinDate).unix() * 1000
    self.maxDate = moment(currentMaxDate).unix() * 1000
    if (moment(currentMaxDate).isBefore(moment())) {
      self.dateRange = [
        moment(currentMaxDate).format('YYYY-MM-DD'),
        moment(currentMaxDate).format('YYYY-MM-DD')
      ]
    }
    self.onSearch()
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
  font-size: 14px;
  margin-bottom: 4px;
  padding-left: 2px;
}

.el-date-editor--daterange.el-input {
  width: 100%;
}

.button-offset {
  margin-top: 24px;
}
</style>
