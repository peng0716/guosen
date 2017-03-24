<template>
  <div class="daily-report">
    <img src="../assets/qxinsLogo.png" alt="前海财险">
    <div class="daily-report-content">
      <div class="daily-report-title">
        <span class="daily-report-title-primary">{{currentYear}}</span>
        <span class="daily-report-title-secondary">业务日报</span>
        <div class="daily-report-title-tips">编报部门: 产品精算部</div>
        <div class="daily-report-title-decoration">
          <span class="piece one"></span>
          <span class="piece two"></span>
          <span class="piece three"></span>
        </div>
      </div>
      <div class="daily-report-description">
        <p><span>{{currentDate}}</span>，公司实现签单保费 <span class="font-color-4">41.2</span> 万元，保费收入 <span class="font-color-4">65.1</span> 万元。</p>
        <p>截至 <span>{{currentDate}}</span>，本年累计实现签单保费 <span class="font-color-4">4218.0</span> 万元，保费收入 <span class="font-color-4">4332.7</span> 万元；</p>
        <p><span>{{currentYear}}</span>年当期已决赔款 <span class="font-color-4">275.0</span> 万元，增量未决赔款 <span class="font-color-4">274.3</span> 万元。</p>
      </div>
      <div class="daily-report-table">
        <div class="daily-report-table-tips">金额单位: 万元</div>
        <div class="table-category">
          <table>
            <tr class="table-category-header">
              <td>机构</td>
              <td>险种类别</td>
            </tr>
            <tr>
              <td rowspan="4">深圳分公司</td>
              <td class="no-border bg-color-1">车险</td>
            </tr>
            <tr>
              <td class="no-border bg-color-2">非车险(传统)</td>
            </tr>
            <tr>
              <td class="no-border">互联网业务</td>
            </tr>
            <tr>
              <td class="no-border border-bottom bg-color-3 font-bold">小计</td>
            </tr>
            <tr>
              <td rowspan="3">新疆分公司</td>
              <td class="no-border bg-color-1">车险</td>
            </tr>
            <tr>
              <td class="no-border bg-color-2">非车险</td>
            </tr>
            <tr>
              <td class="no-border border-bottom bg-color-3 font-bold">小计</td>
            </tr>
            <tr>
              <td rowspan="3">广东分公司</td>
              <td class="no-border bg-color-1">车险</td>
            </tr>
            <tr>
              <td class="no-border bg-color-2">非车险</td>
            </tr>
            <tr>
              <td class="no-border border-bottom bg-color-3 font-bold">小计</td>
            </tr>
            <tr>
              <td colspan="2" class="no-border font-bold">车险小计</td>
            </tr>
            <tr>
              <td colspan="2" class="no-border font-bold">非车险(传统)小计</td>
            </tr>
            <tr>
              <td colspan="2" class="no-border font-bold">互联网业务小计</td>
            </tr>
            <tr>
              <td colspan="2" class="bg-color-4 font-bold font-color-3">合计</td>
            </tr>
          </table>
        </div>
        <div class="table-data baofeishouru">
          <table>
            <tr class="table-data-header-primary">
              <td colspan="4">保费收入</td>
            </tr>
            <tr class="table-data-header-secondary">
              <td>{{currentDate}}</td>
              <td>本年<br>累计</td>
              <td>本年<br>日均</td>
              <td>时间进度<br>达成率</td>
            </tr>
            <tr class="bg-color-1">
              <td>8.6</td>
              <td>531.0</td>
              <td>8.3</td>
              <td class="font-color-2">39.0%</td>
            </tr>
            <tr class="bg-color-2">
              <td>0</td>
              <td>86.2</td>
              <td>2,1.3</td>
              <td class="font-color-2">35.9%</td>
            </tr>
            <tr>
              <td>44.2</td>
              <td>2340.9</td>
              <td>36.6</td>
              <td>104.5%</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>52.8</td>
              <td>2958.1</td>
              <td>46.2</td>
              <td class="font-color-1">77.0%</td>
            </tr>
            <tr class="bg-color-1">
              <td>2.3</td>
              <td>349.7</td>
              <td>5.5</td>
              <td class="font-color-2">32.1%</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>71.3</td>
              <td>1.1</td>
              <td class="font-color-2">37.1%</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>2.3</td>
              <td>421.0</td>
              <td>6.6</td>
              <td class="font-color-2">32.9%</td>
            </tr>
            <tr class="bg-color-1">
              <td>10.0</td>
              <td>916.9</td>
              <td>14.3</td>
              <td class="font-color-2">33.7%</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>36.7</td>
              <td>0.6</td>
              <td class="font-color-2">7.7%</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>10.0</td>
              <td>953.6</td>
              <td>14.9</td>
              <td class="font-color-2">29.8%</td>
            </tr>
            <tr class="bg-color-1">
              <td>20.9</td>
              <td>1797.6</td>
              <td>28.1</td>
              <td class="font-color-2">34.8%</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>194.2</td>
              <td>3.0</td>
              <td class="font-color-2">21.3%</td>
            </tr>
            <tr class="font-bold">
              <td>44.2</td>
              <td>2340.9</td>
              <td>36.6</td>
              <td>104.5%</td>
            </tr>
            <tr class="bg-color-4 font-color-3 font-bold">
              <td>65.1</td>
              <td>4332.7</td>
              <td>67.7</td>
              <td class="font-color-2">52.1%</td>
            </tr>
          </table>
        </div>
        <div class="table-data qiandangbaofei">
          <table>
            <tr class="table-data-header-primary">
              <td colspan="3">签单保费</td>
            </tr>
            <tr class="table-data-header-secondary">
              <td>{{currentDate}}</td>
              <td>本年<br>累计</td>
              <td>本年<br>日均</td>
            </tr>
            <tr class="bg-color-1">
              <td>0.0</td>
              <td>513.6</td>
              <td>8.0</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>70.4</td>
              <td>1.1</td>
            </tr>
            <tr>
              <td>38.2</td>
              <td>2216.8</td>
              <td>34.6</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>38.2</td>
              <td>2800.7</td>
              <td>43.8</td>
            </tr>
            <tr class="bg-color-1">
              <td>0.5</td>
              <td>375.2</td>
              <td>5.9</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>71.3</td>
              <td>1.1</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>0.5</td>
              <td>446.5</td>
              <td>7.0</td>
            </tr>
            <tr class="bg-color-1">
              <td>2.5</td>
              <td>935.0</td>
              <td>14.6</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>35.8</td>
              <td>0.6</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>2.5</td>
              <td>970.7</td>
              <td>15.2</td>
            </tr>
            <tr class="bg-color-1 font-bold">
              <td>3.0</td>
              <td>1823.7</td>
              <td>28.5</td>
            </tr>
            <tr class="bg-color-2 font-bold">
              <td>0.0</td>
              <td>177.5</td>
              <td>2.8</td>
            </tr>
            <tr class="font-bold">
              <td>38.2</td>
              <td>2216.8</td>
              <td>34.6</td>
            </tr>
            <tr class="bg-color-4 font-bold font-color-3">
              <td>41.2</td>
              <td>4218.0</td>
              <td>65.9</td>
            </tr>
          </table>
        </div>
        <div class="table-data dangqiyijue">
          <table>
            <tr class="table-data-header-primary">
              <td colspan="2">2017年当期已决</td>
            </tr>
            <tr class="table-data-header-secondary">
              <td>{{currentDate}}</td>
              <td>本年<br>累计</td>
            </tr>
            <tr class="bg-color-1">
              <td>0.0</td>
              <td>103.1</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>9.5</td>
            </tr>
            <tr>
              <td>0.0</td>
              <td>0.0</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>0.0</td>
              <td>112.5</td>
            </tr>
            <tr class="bg-color-1">
              <td>0.0</td>
              <td>88.5</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>0.4</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>0.0</td>
              <td>88.9</td>
            </tr>
            <tr class="bg-color-1">
              <td>0.0</td>
              <td>72.0</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>1.5</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>0.0</td>
              <td>73.5</td>
            </tr>
            <tr class="bg-color-1 font-bold">
              <td>0.0</td>
              <td>263.6</td>
            </tr>
            <tr class="bg-color-2 font-bold">
              <td>0.0</td>
              <td>11.4</td>
            </tr>
            <tr class="font-bold">
              <td>0.0</td>
              <td>0.0</td>
            </tr>
            <tr class="bg-color-4 font-bold font-color-3">
              <td>0.0</td>
              <td>275.0</td>
            </tr>
          </table>
        </div>
        <div class="table-data zengliangweijue">
          <table>
            <tr class="table-data-header-primary">
              <td colspan="2">2017年增量未决</td>
            </tr>
            <tr class="table-data-header-secondary">
              <td>{{currentDate}}</td>
              <td>本年<br>累计</td>
            </tr>
            <tr class="bg-color-1">
              <td>2.0</td>
              <td>33.6</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>-8.1</td>
            </tr>
            <tr>
              <td>0.0</td>
              <td>0.0</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>2.0</td>
              <td>25.5</td>
            </tr>
            <tr class="bg-color-1">
              <td>2.1</td>
              <td>152.3</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>10.8</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>2.1</td>
              <td>163.1</td>
            </tr>
            <tr class="bg-color-1">
              <td>0.9</td>
              <td>86.9</td>
            </tr>
            <tr class="bg-color-2">
              <td>0.0</td>
              <td>-1.2</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>0.9</td>
              <td>85.7</td>
            </tr>
            <tr class="bg-color-1 font-bold">
              <td>5.0</td>
              <td>272.8</td>
            </tr>
            <tr class="bg-color-2 font-bold">
              <td>0.0</td>
              <td>1.4</td>
            </tr>
            <tr class="font-bold">
              <td>0.0</td>
              <td>0.0</td>
            </tr>
            <tr class="bg-color-4 font-bold font-color-3">
              <td>5.0</td>
              <td>274.3</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="daily-report-note">
        <strong>备注</strong>: 1、保费均不含增值税，增值税率为6%。2、深圳分公司的统计结果中包含总部营业部业务。3、汽车保修责任保险按车险进行分类。4、四个季度的保费目标分别按照年度考核目标（全司8亿元）的15%、25%、30%、30%依次分配，每一季度内则按时间比例均匀分配。5、时间进度达成率=本年累计保费收入/截至评估日期的保费目标；时间进度达成率的<span class="font-color-1">警戒区间</span>: [70%,85%)，<span class="font-color-2">异常区间</span>: 小于70%。6、2017当期已决为当期结案案件的赔款金额，增量未决为统计期间期末未决赔款减去期初未决赔款。
      </div>
    </div>
  </div>
</template>

<script>

import { get } from '../service/Request'

export default {
  name: 'index',
  data () {
    return {
      currentYear: moment().format('YYYY'),
      currentDate: moment().format('MMM Do')
    }
  },
  methods: {
    computedTableWidth() {
      let dailyReportDomWidth = $('.daily-report').width()
      $('.table-category').width(Math.round(dailyReportDomWidth * .2))
      $('.table-data.baofeishouru').width(Math.round(dailyReportDomWidth * .3))
      $('.table-data.qiandangbaofei').width(Math.round(dailyReportDomWidth * .2))
      $('.table-data.dangqiyijue').width(Math.round(dailyReportDomWidth * .15))
      $('.table-data.zengliangweijue').width(Math.round(dailyReportDomWidth * .15))
    },
    async getCustomData() {
      let data = await get('/mort/data-sets/dde8dc3a-ef3b-44ee-bb60-cd78e85ba0e4/preview?rowSize=10')
      console.log('data = ', data)
    }
  },
  mounted () {
    let self = this
    $(window).resize(function() {
      self.computedTableWidth()
    });
    self.computedTableWidth()

    self.getCustomData()
  }
}
</script>

<style scoped>
.daily-report {
  width: 90%;
  min-width: 810px;
  margin: 0 auto;
}

.daily-report-content {
  text-align: center;
}

.daily-report-title {
  width: 714px;
  width: 90%;
  font-weight: bolder;
  text-align: center;
  display: inline-block;
  position: relative;
  margin-top: -30px;
}
.daily-report-title .daily-report-title-primary {
  font-size: 80px;
  color: #c0504d;
  line-height: 100%;
}
.daily-report-title .daily-report-title-secondary {
  font-size: 50px;
  color: #1f497d;
}
.daily-report-title .daily-report-title-tips {
  position: absolute;
  right: 4px;
  bottom: 10px;
  font-weight: normal;
}
.daily-report-title .daily-report-title-decoration {
  font-size: 0;
}
.daily-report-title .daily-report-title-decoration .piece {
  width: 238px;
  width: 33.33%;
  height: 7px;
  border: 1px solid;
  display: inline-block;
}
.daily-report-title .daily-report-title-decoration .piece.one {
  background-color: #00c1d5;
  border-color: #9ddce9;
  border-right: 0;
}
.daily-report-title .daily-report-title-decoration .piece.two {
  background-color: #1091d2;
  border-color: #a2cee8;
  border-left: 0;
  border-right: 0;
}
.daily-report-title .daily-report-title-decoration .piece.three {
  background-color: #0565af;
  border-color: #9fc2de;
  border-left: 0;
}

.daily-report-description {
  text-align: left;
  font-size: 18px;
  font-weight: bolder;
  padding-left: 26px;
  padding-left: 3%;
  margin-bottom: 10px;
}

.daily-report-description p {
  margin: 5px 0;
}
.daily-report-description p:first-child {
  text-indent: 46px;
}
.daily-report-description p:nth-child(2) {
  text-indent: 22px;
}

.daily-report-table {
  font-size: 0;
  display: inline-block;
  position: relative;
}
.daily-report-table-tips {
  position: absolute;
  top: -20px;
  right: 2px;
  font-size: 12px;
}

.daily-report-note {
  text-align: left;
  margin-bottom: 10px;
}


table {
  border: 1px solid #000;
  width: 100%;
  white-space: nowrap;
}
td {
  border: 1px solid #000;
  text-align: center;
  padding: 2px 6px;
  height: 22px;
  background-color: #eeece1;
}
.bg-color-1,
.bg-color-1 td {
  background-color: #c4d79b;
}
.bg-color-2,
.bg-color-2 td {
  background-color: #c5d9f1;
}
.bg-color-3,
.bg-color-3 td {
  background-color: #bfbfbf;
}
.bg-color-4,
.bg-color-4 td {
  background-color: #f2dcdb;
}
.no-border {
  border: 0;
}

.font-color-1,
.font-color-1 td {
  color: #e37b27;
}
.font-color-2,
.font-color-2 td {
  color: #fb191a;
}
.font-color-3,
.font-color-3 td {
  color: #0069be;
}
.font-color-3 td.font-color-2 {
  color: #fb191a;
}

.font-color-4,
.font-color-4 td {
  color: #023794;
  font-size: 20px;
  font-style: italic;
}
.font-bold,
.font-bold td {
  font-weight: bold;
}

td.border-bottom {
  border-bottom: 1px solid #000;
}

.table-category,
.table-data {
  display: inline-block;
  font-size: 12px;
}

.table-data {
  margin-left: -1px;
  vertical-align: top;
}
.table-data td {
  border: 0;
}

.table-category .table-category-header td,
.table-data .table-data-header-primary td,
.table-data .table-data-header-secondary td {
  background-color: #0070c0;
  color: #fff;
  border-bottom: 1px solid #000;
}

.table-category .table-category-header td {
  height: 60px;
}
.table-data .table-data-header-primary td {
  height: 22px;
}
.table-data .table-data-header-secondary td {
  height: 38px;
}
.table-data tr:nth-child(6) td,
.table-data tr:nth-child(9) td,
.table-data tr:nth-child(12) td,
.table-data tr:nth-child(15) td {
  border-bottom: 1px solid #000;
}
</style>
