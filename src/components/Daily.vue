<template>
  <div class="daily-report">
    <img src="../assets/qxinsLogo.png" alt="前海财险">
    <div class="daily-report-content">
      <div class="daily-report-title">
        <span class="daily-report-title-primary">{{ currentYear }}</span>
        <span class="daily-report-title-secondary">业务日报</span>
        <div class="daily-report-title-tips">编报部门: 产品精算部</div>
        <div class="daily-report-title-decoration">
          <span class="piece one"></span>
          <span class="piece two"></span>
          <span class="piece three"></span>
        </div>
      </div>
      <div class="daily-report-description">
        <p><span>{{ currentDate }}</span>，公司实现签单保费 <span class="font-color-4">{{ formatContent(total.baoFei.final.currentDayOfQianDan) }}</span> 万元，保费收入 <span class="font-color-4">{{ formatContent(total.baoFei.final.currentDayOfShouRu) }}</span> 万元。</p>
        <p>截至 <span>{{ currentDate }}</span>，本年累计实现签单保费 <span class="font-color-4">{{ formatContent(total.baoFei.final.currentYearOfQianDan) }}</span> 万元，保费收入 <span class="font-color-4">{{ formatContent(total.baoFei.final.currentYearOfShouRu) }}</span> 万元；</p>
        <p><span>{{ currentYear }}</span>年当期已决赔款 <span class="font-color-4">{{ formatContent(total.peiKuan.final.currentYearOfYiJue) }}</span> 万元，增量未决赔款 <span class="font-color-4">{{ formatContent(total.peiKuan.final.currentYearOfWeiJue) }}</span> 万元。</p>
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
              <td v-if="!showWeek">{{ currentDate }}</td>
              <td v-if="showWeek">近7天</td>
              <td>本年<br>累计</td>
              <td>本年<br>日均</td>
              <td>时间进度<br>达成率</td>
            </tr>
            <tr class="bg-color-1">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.car.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.car.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.car.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.car.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(agencyDataOfShenZhen.baoFei.car.timeProgressRate)">{{ formatContent(agencyDataOfShenZhen.baoFei.car.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="bg-color-2">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.noCar.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.noCar.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.noCar.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.noCar.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(agencyDataOfShenZhen.baoFei.noCar.timeProgressRate)">{{ formatContent(agencyDataOfShenZhen.baoFei.noCar.timeProgressRate, true) }}%</td>
            </tr>
            <tr>
              <td v-if="!showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.online.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.online.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.online.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.online.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(agencyDataOfShenZhen.baoFei.online.timeProgressRate)">{{ formatContent(agencyDataOfShenZhen.baoFei.online.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.subtotal.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.subtotal.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.subtotal.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.subtotal.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(agencyDataOfShenZhen.baoFei.subtotal.timeProgressRate)">{{ formatContent(agencyDataOfShenZhen.baoFei.subtotal.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="bg-color-1">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.car.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.car.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.car.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.car.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(agencyDataOfXinJiang.baoFei.car.timeProgressRate)">{{ formatContent(agencyDataOfXinJiang.baoFei.car.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="bg-color-2">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.noCar.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.noCar.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.noCar.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.noCar.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(agencyDataOfXinJiang.baoFei.noCar.timeProgressRate)">{{ formatContent(agencyDataOfXinJiang.baoFei.noCar.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.subtotal.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.subtotal.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.subtotal.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.subtotal.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(agencyDataOfXinJiang.baoFei.subtotal.timeProgressRate)">{{ formatContent(agencyDataOfXinJiang.baoFei.subtotal.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="bg-color-1">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.car.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.car.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.car.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.car.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(agencyDataOfGuangDong.baoFei.car.timeProgressRate)">{{ formatContent(agencyDataOfGuangDong.baoFei.car.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="bg-color-2">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.noCar.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.noCar.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.noCar.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.noCar.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(agencyDataOfGuangDong.baoFei.noCar.timeProgressRate)">{{ formatContent(agencyDataOfGuangDong.baoFei.noCar.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.subtotal.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.subtotal.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.subtotal.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.subtotal.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(agencyDataOfGuangDong.baoFei.subtotal.timeProgressRate)">{{ formatContent(agencyDataOfGuangDong.baoFei.subtotal.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="bg-color-1 font-bold">
              <td v-if="!showWeek">{{ formatContent(total.baoFei.car.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(total.baoFei.car.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(total.baoFei.car.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(total.baoFei.car.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(total.baoFei.car.timeProgressRate)">{{ formatContent(total.baoFei.car.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="bg-color-2 font-bold">
              <td v-if="!showWeek">{{ formatContent(total.baoFei.noCar.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(total.baoFei.noCar.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(total.baoFei.noCar.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(total.baoFei.noCar.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(total.baoFei.noCar.timeProgressRate)">{{ formatContent(total.baoFei.noCar.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="font-bold">
              <td v-if="!showWeek">{{ formatContent(total.baoFei.online.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(total.baoFei.online.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(total.baoFei.online.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(total.baoFei.online.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(total.baoFei.online.timeProgressRate)">{{ formatContent(total.baoFei.online.timeProgressRate, true) }}%</td>
            </tr>
            <tr class="bg-color-4 font-bold font-color-3">
              <td v-if="!showWeek">{{ formatContent(total.baoFei.final.currentDayOfShouRu) }}</td>
              <td v-if="showWeek">{{ formatContent(total.baoFei.final.currentWeekOfShouRu) }}</td>
              <td>{{ formatContent(total.baoFei.final.currentYearOfShouRu) }}</td>
              <td>{{ formatContent(total.baoFei.final.currentYearOfShouRu / currentDayOfYear) }}</td>
              <td :class="timeProgressRateColor(total.baoFei.final.timeProgressRate)">{{ formatContent(total.baoFei.final.timeProgressRate, true) }}%</td>
            </tr>
          </table>
        </div>
        <div class="table-data qiandangbaofei">
          <table>
            <tr class="table-data-header-primary">
              <td colspan="3">签单保费</td>
            </tr>
            <tr class="table-data-header-secondary">
              <td v-if="!showWeek">{{ currentDate }}</td>
              <td v-if="showWeek">近7天</td>
              <td>本年<br>累计</td>
              <td>本年<br>日均</td>
            </tr>
            <tr class="bg-color-1">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.car.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.car.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.car.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.car.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="bg-color-2">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.noCar.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.noCar.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.noCar.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.noCar.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr>
              <td v-if="!showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.online.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.online.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.online.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.online.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.subtotal.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfShenZhen.baoFei.subtotal.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.subtotal.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.baoFei.subtotal.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="bg-color-1">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.car.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.car.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.car.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.car.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="bg-color-2">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.noCar.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.noCar.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.noCar.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.noCar.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.subtotal.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfXinJiang.baoFei.subtotal.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.subtotal.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.baoFei.subtotal.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="bg-color-1">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.car.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.car.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.car.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.car.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="bg-color-2">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.noCar.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.noCar.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.noCar.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.noCar.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td v-if="!showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.subtotal.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(agencyDataOfGuangDong.baoFei.subtotal.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.subtotal.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.baoFei.subtotal.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="bg-color-1 font-bold">
              <td v-if="!showWeek">{{ formatContent(total.baoFei.car.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(total.baoFei.car.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(total.baoFei.car.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(total.baoFei.car.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="bg-color-2 font-bold">
              <td v-if="!showWeek">{{ formatContent(total.baoFei.noCar.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(total.baoFei.noCar.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(total.baoFei.noCar.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(total.baoFei.noCar.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="font-bold">
              <td v-if="!showWeek">{{ formatContent(total.baoFei.online.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(total.baoFei.online.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(total.baoFei.online.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(total.baoFei.online.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
            <tr class="bg-color-4 font-bold font-color-3">
              <td v-if="!showWeek">{{ formatContent(total.baoFei.final.currentDayOfQianDan) }}</td>
              <td v-if="showWeek">{{ formatContent(total.baoFei.final.currentWeekOfQianDan) }}</td>
              <td>{{ formatContent(total.baoFei.final.currentYearOfQianDan) }}</td>
              <td>{{ formatContent(total.baoFei.final.currentYearOfQianDan / currentDayOfYear) }}</td>
            </tr>
          </table>
        </div>
        <div class="table-data dangqiyijue">
          <table>
            <tr class="table-data-header-primary">
              <td colspan="2">{{ currentYear }}年当期已决</td>
            </tr>
            <tr class="table-data-header-secondary">
              <td>{{ currentDate }}</td>
              <td>本年<br>累计</td>
            </tr>
            <tr class="bg-color-1">
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.car.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.car.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="bg-color-2">
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.noCar.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.noCar.currentYearOfYiJue) }}</td>
            </tr>
            <tr>
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.online.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.online.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.subtotal.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.subtotal.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="bg-color-1">
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.car.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.car.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="bg-color-2">
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.noCar.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.noCar.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.subtotal.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.subtotal.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="bg-color-1">
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.car.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.car.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="bg-color-2">
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.noCar.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.noCar.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.subtotal.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.subtotal.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="bg-color-1 font-bold">
              <td>{{ formatContent(total.peiKuan.car.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(total.peiKuan.car.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="bg-color-2 font-bold">
              <td>{{ formatContent(total.peiKuan.noCar.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(total.peiKuan.noCar.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="font-bold">
              <td>{{ formatContent(total.peiKuan.online.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(total.peiKuan.online.currentYearOfYiJue) }}</td>
            </tr>
            <tr class="bg-color-4 font-bold font-color-3">
              <td>{{ formatContent(total.peiKuan.final.currentDayOfYiJue) }}</td>
              <td>{{ formatContent(total.peiKuan.final.currentYearOfYiJue) }}</td>
            </tr>
          </table>
        </div>
        <div class="table-data zengliangweijue">
          <table>
            <tr class="table-data-header-primary">
              <td colspan="2">{{ currentYear }}年增量未决</td>
            </tr>
            <tr class="table-data-header-secondary">
              <td>{{ currentDate }}</td>
              <td>本年<br>累计</td>
            </tr>
            <tr class="bg-color-1">
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.car.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.car.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="bg-color-2">
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.noCar.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.noCar.currentYearOfWeiJue) }}</td>
            </tr>
            <tr>
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.online.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.online.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.subtotal.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(agencyDataOfShenZhen.peiKuan.subtotal.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="bg-color-1">
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.car.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.car.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="bg-color-2">
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.noCar.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.noCar.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.subtotal.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(agencyDataOfXinJiang.peiKuan.subtotal.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="bg-color-1">
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.car.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.car.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="bg-color-2">
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.noCar.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.noCar.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="bg-color-3 font-bold">
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.subtotal.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(agencyDataOfGuangDong.peiKuan.subtotal.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="bg-color-1 font-bold">
              <td>{{ formatContent(total.peiKuan.car.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(total.peiKuan.car.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="bg-color-2 font-bold">
              <td>{{ formatContent(total.peiKuan.noCar.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(total.peiKuan.noCar.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="font-bold">
              <td>{{ formatContent(total.peiKuan.online.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(total.peiKuan.online.currentYearOfWeiJue) }}</td>
            </tr>
            <tr class="bg-color-4 font-bold font-color-3">
              <td>{{ formatContent(total.peiKuan.final.currentDayOfWeiJue) }}</td>
              <td>{{ formatContent(total.peiKuan.final.currentYearOfWeiJue) }}</td>
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
  name: 'daily',
  data () {
    return {
      currentYear: moment().format('YYYY'),
      currentDate: moment().format('MMM Do'),
      currentDayOfYear: moment().format('DDD'),

      showWeek: false,

      dataSetOfBaoFei: [],
      dataSetOfJinDu: [],
      dataSetOfMuBiao: [],
      dataSetOfPeiKuan: [],

      agencyDataOfShenZhen: {
        baoFei: {
          car: {},
          noCar: {},
          online: {},
          subtotal: {}
        },
        peiKuan: {
          car: {},
          noCar: {},
          online: {},
          subtotal: {}
        }
      },
      agencyDataOfXinJiang: {
        baoFei: {
          car: {},
          noCar: {},
          subtotal: {}
        },
        peiKuan: {
          car: {},
          noCar: {},
          subtotal: {}
        }
      },
      agencyDataOfGuangDong: {
        baoFei: {
          car: {},
          noCar: {},
          subtotal: {}
        },
        peiKuan: {
          car: {},
          noCar: {},
          subtotal: {}
        }
      },

      total: {
        baoFei: {
          car: {},
          noCar: {},
          online: {},
          final: {}
        },
        peiKuan: {
          car: {},
          noCar: {},
          online: {},
          final: {}
        }
      }

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
    timeProgressRateColor(aTimeProgressRate) {
      if (aTimeProgressRate > 70) {
        return 'font-color-1'
      }
      if (aTimeProgressRate < 70) {
        return 'font-color-2'
      }
      return ''
    },
    getDataByKeyOfBaoFei(aAgency, aInsuranceType) {
      const self = this

      for (let i = 0, count = self.dataSetOfBaoFei.length; i < count; i++) {
        const [ , agency = '', insuranceType = '', currentDayOfShouRu = 0, currentWeekOfShouRu = 0, , currentYearOfShouRu = 0, currentDayOfQianDan = 0, currentWeekOfQianDan = 0, , currentYearOfQianDan = 0 ] = self.dataSetOfBaoFei[i]

        if ((aAgency == agency) && (aInsuranceType == insuranceType)) {

          return {
            currentDayOfShouRu: parseFloat(currentDayOfShouRu) / 10000,
            currentWeekOfShouRu: parseFloat(currentWeekOfShouRu) / 10000,
            currentYearOfShouRu: parseFloat(currentYearOfShouRu) / 10000,
            currentDayOfQianDan: parseFloat(currentDayOfQianDan) / 10000,
            currentWeekOfQianDan: parseFloat(currentWeekOfQianDan) / 10000,
            currentYearOfQianDan: parseFloat(currentYearOfQianDan) / 10000
          }
        }
      }

      return {
        currentDayOfShouRu: 0,
        currentWeekOfShouRu: 0,
        currentYearOfShouRu: 0,
        currentDayOfQianDan: 0,
        currentWeekOfQianDan: 0,
        currentYearOfQianDan: 0
      }
    },
    getDataByKeyOfMuBiao(aAgency) {
      const self = this

      for (let i = 0, count = self.dataSetOfMuBiao.length; i < count; i++) {
        const [ agency, expect ] = self.dataSetOfMuBiao[i]

        if (aAgency == agency) {
          return parseFloat(expect)
        }
      }

      return 0
    },
    getDataByKeyOfJinDu(aDate = moment().format('YYYY-MM-DD')) {
      const self = this

      for (let i = 0, count = self.dataSetOfJinDu.length; i < count; i++) {
        const [ , currentDate, percentage ] = self.dataSetOfJinDu[i]
        if (currentDate.indexOf(aDate) != -1) {
          return parseFloat(percentage)
        }
      }

      return 0
    },
    getDataByKeyOfPeiKuan(aAgency, aInsuranceType) {
      const self = this

      for (let i = 0, count = self.dataSetOfPeiKuan.length; i < count; i++) {
        const [ , agency = '', insuranceType = '', yiJue2016 = 0, yiJue2017 = 0, weiJue2016 = 0, weiJue2017 = 0, peiKuanYiJue2016 = 0, peiKuanWeiJue2016 = 0, toDayYiJue = 0, toDayWeiJue = 0 ] = self.dataSetOfPeiKuan[i]
        if ((aAgency == agency) && (aInsuranceType == insuranceType)) {
          return {
            yiJue2016: parseFloat(yiJue2016) / 10000,
            yiJue2017: parseFloat(yiJue2017) / 10000,
            weiJue2016: parseFloat(weiJue2016) / 10000,
            weiJue2017: parseFloat(weiJue2017) / 10000,
            peiKuanYiJue2016: parseFloat(peiKuanYiJue2016) / 10000,
            peiKuanWeiJue2016: parseFloat(peiKuanWeiJue2016) / 10000,
            toDayYiJue: parseFloat(toDayYiJue) / 10000,
            toDayWeiJue: parseFloat(toDayWeiJue) / 10000
          }
        }
      }

      return {
        yiJue2016: 0,
        yiJue2017: 0,
        weiJue2016: 0,
        weiJue2017: 0,
        peiKuanYiJue2016: 0,
        peiKuanWeiJue2016: 0,
        toDayYiJue: 0,
        toDayWeiJue: 0
      }
    },
    async fetchDataSetById(aDataSetId) {
      const data = await get(`/mort/data-sets/${aDataSetId}/preview?rowSize=1000`)

      const { columns, rows } = data

      return rows
    },
    parseDataOfBaoFei() {
      const self = this

      /* muBiao */
      const muBiaoOfShenZhen = self.getDataByKeyOfMuBiao('深分传统')
      const muBiaoOfXinJiang = self.getDataByKeyOfMuBiao('新疆分公司')
      const muBiaoOfGuangDong = self.getDataByKeyOfMuBiao('广东分公司')
      const muBiaoOfOnline = self.getDataByKeyOfMuBiao('互联网业务')

      /* jinDu */
      const jinDuOfToDay = self.getDataByKeyOfJinDu()

      /* divisor */
      const divisorOfShenZhen = muBiaoOfShenZhen * jinDuOfToDay
      const divisorOfXinJiang = muBiaoOfXinJiang * jinDuOfToDay
      const divisorOfGuangDong = muBiaoOfGuangDong * jinDuOfToDay
      const divisorOfOnline = muBiaoOfOnline * jinDuOfToDay
      const divisorOfTotal = (muBiaoOfShenZhen + muBiaoOfXinJiang + muBiaoOfGuangDong) * jinDuOfToDay

      /* agencyDataOfShenZhen */
      const baoFeiOfCarOfShenZhen = self.getDataByKeyOfBaoFei('深圳分公司', '车')
      const baoFeiOfCarOfZhongBu = self.getDataByKeyOfBaoFei('总部营业部', '车')

      const baoFeiOfNoCarOfShenZhen = self.getDataByKeyOfBaoFei('深圳分公司', '非车')
      const baoFeiOfNoCarOfZhongBu = self.getDataByKeyOfBaoFei('总部营业部', '非车')

      const baoFeiOfOnlineOfShenZhen = self.getDataByKeyOfBaoFei('深圳分公司', '深分航意险（独立）')
      const baoFeiOfOnlineOfZhongBu = self.getDataByKeyOfBaoFei('总部营业部', '境内旅游意外伤害保险')

      self.agencyDataOfShenZhen.baoFei.car = {
        currentDayOfShouRu: baoFeiOfCarOfShenZhen.currentDayOfShouRu + baoFeiOfCarOfZhongBu.currentDayOfShouRu,
        currentWeekOfShouRu: baoFeiOfCarOfShenZhen.currentWeekOfShouRu + baoFeiOfCarOfZhongBu.currentWeekOfShouRu,
        currentYearOfShouRu: baoFeiOfCarOfShenZhen.currentYearOfShouRu + baoFeiOfCarOfZhongBu.currentYearOfShouRu,
        timeProgressRate: (baoFeiOfCarOfShenZhen.currentYearOfShouRu + baoFeiOfCarOfZhongBu.currentYearOfShouRu) / (divisorOfShenZhen * 0.85),

        currentDayOfQianDan: baoFeiOfCarOfShenZhen.currentDayOfQianDan + baoFeiOfCarOfZhongBu.currentDayOfQianDan,
        currentWeekOfQianDan: baoFeiOfCarOfShenZhen.currentWeekOfQianDan + baoFeiOfCarOfZhongBu.currentWeekOfQianDan,
        currentYearOfQianDan: baoFeiOfCarOfShenZhen.currentYearOfQianDan + baoFeiOfCarOfZhongBu.currentYearOfQianDan
      }

      self.agencyDataOfShenZhen.baoFei.noCar = {
        currentDayOfShouRu: baoFeiOfNoCarOfShenZhen.currentDayOfShouRu + baoFeiOfNoCarOfZhongBu.currentDayOfShouRu,
        currentWeekOfShouRu: baoFeiOfNoCarOfShenZhen.currentWeekOfShouRu + baoFeiOfNoCarOfZhongBu.currentWeekOfShouRu,
        currentYearOfShouRu: baoFeiOfNoCarOfShenZhen.currentYearOfShouRu + baoFeiOfNoCarOfZhongBu.currentYearOfShouRu,
        timeProgressRate: (baoFeiOfNoCarOfShenZhen.currentYearOfShouRu + baoFeiOfNoCarOfZhongBu.currentYearOfShouRu) / (divisorOfShenZhen * 0.15),

        currentDayOfQianDan: baoFeiOfNoCarOfShenZhen.currentDayOfQianDan + baoFeiOfNoCarOfZhongBu.currentDayOfQianDan,
        currentWeekOfQianDan: baoFeiOfNoCarOfShenZhen.currentWeekOfQianDan + baoFeiOfNoCarOfZhongBu.currentWeekOfQianDan,
        currentYearOfQianDan: baoFeiOfNoCarOfShenZhen.currentYearOfQianDan + baoFeiOfNoCarOfZhongBu.currentYearOfQianDan
      }

      self.agencyDataOfShenZhen.baoFei.online = {
        currentDayOfShouRu: baoFeiOfOnlineOfShenZhen.currentDayOfShouRu + baoFeiOfOnlineOfZhongBu.currentDayOfShouRu,
        currentWeekOfShouRu: baoFeiOfOnlineOfShenZhen.currentWeekOfShouRu + baoFeiOfOnlineOfZhongBu.currentWeekOfShouRu,
        currentYearOfShouRu: baoFeiOfOnlineOfShenZhen.currentYearOfShouRu + baoFeiOfOnlineOfZhongBu.currentYearOfShouRu,
        timeProgressRate: (baoFeiOfOnlineOfShenZhen.currentYearOfShouRu + baoFeiOfOnlineOfZhongBu.currentYearOfShouRu) / divisorOfOnline,

        currentDayOfQianDan: baoFeiOfOnlineOfShenZhen.currentDayOfQianDan + baoFeiOfOnlineOfZhongBu.currentDayOfQianDan,
        currentWeekOfQianDan: baoFeiOfOnlineOfShenZhen.currentWeekOfQianDan + baoFeiOfOnlineOfZhongBu.currentWeekOfQianDan,
        currentYearOfQianDan: baoFeiOfOnlineOfShenZhen.currentYearOfQianDan + baoFeiOfOnlineOfZhongBu.currentYearOfQianDan
      }

      self.agencyDataOfShenZhen.baoFei.subtotal = {
        currentDayOfShouRu: self.agencyDataOfShenZhen.baoFei.car.currentDayOfShouRu + self.agencyDataOfShenZhen.baoFei.noCar.currentDayOfShouRu + self.agencyDataOfShenZhen.baoFei.online.currentDayOfShouRu,
        currentWeekOfShouRu: self.agencyDataOfShenZhen.baoFei.car.currentWeekOfShouRu + self.agencyDataOfShenZhen.baoFei.noCar.currentWeekOfShouRu + self.agencyDataOfShenZhen.baoFei.online.currentWeekOfShouRu,
        currentYearOfShouRu: self.agencyDataOfShenZhen.baoFei.car.currentYearOfShouRu + self.agencyDataOfShenZhen.baoFei.noCar.currentYearOfShouRu + self.agencyDataOfShenZhen.baoFei.online.currentYearOfShouRu,
        timeProgressRate: (self.agencyDataOfShenZhen.baoFei.car.currentYearOfShouRu + self.agencyDataOfShenZhen.baoFei.noCar.currentYearOfShouRu + self.agencyDataOfShenZhen.baoFei.online.currentYearOfShouRu) / (divisorOfShenZhen * 0.85 + divisorOfShenZhen * 0.15 + divisorOfOnline),

        currentDayOfQianDan: self.agencyDataOfShenZhen.baoFei.car.currentDayOfQianDan + self.agencyDataOfShenZhen.baoFei.noCar.currentDayOfQianDan + self.agencyDataOfShenZhen.baoFei.online.currentDayOfQianDan,
        currentWeekOfQianDan: self.agencyDataOfShenZhen.baoFei.car.currentWeekOfQianDan + self.agencyDataOfShenZhen.baoFei.noCar.currentWeekOfQianDan + self.agencyDataOfShenZhen.baoFei.online.currentWeekOfQianDan,
        currentYearOfQianDan: self.agencyDataOfShenZhen.baoFei.car.currentYearOfQianDan + self.agencyDataOfShenZhen.baoFei.noCar.currentYearOfQianDan + self.agencyDataOfShenZhen.baoFei.online.currentYearOfQianDan
      }

      /* agencyDataOfXinJiang */
      const baoFeiOfCarOfXinJiang = self.getDataByKeyOfBaoFei('新疆分公司', '车')
      const baoFeiOfNoCarOfXinJiang = self.getDataByKeyOfBaoFei('新疆分公司', '非车')

      self.agencyDataOfXinJiang.baoFei.car = {
        currentDayOfShouRu: baoFeiOfCarOfXinJiang.currentDayOfShouRu,
        currentWeekOfShouRu: baoFeiOfCarOfXinJiang.currentWeekOfShouRu,
        currentYearOfShouRu: baoFeiOfCarOfXinJiang.currentYearOfShouRu,
        timeProgressRate: baoFeiOfCarOfXinJiang.currentYearOfShouRu / (divisorOfXinJiang * 0.85),

        currentDayOfQianDan: baoFeiOfCarOfXinJiang.currentDayOfQianDan,
        currentWeekOfQianDan: baoFeiOfCarOfXinJiang.currentWeekOfQianDan,
        currentYearOfQianDan: baoFeiOfCarOfXinJiang.currentYearOfQianDan
      }

      self.agencyDataOfXinJiang.baoFei.noCar = {
        currentDayOfShouRu: baoFeiOfNoCarOfXinJiang.currentDayOfShouRu,
        currentWeekOfShouRu: baoFeiOfNoCarOfXinJiang.currentWeekOfShouRu,
        currentYearOfShouRu: baoFeiOfNoCarOfXinJiang.currentYearOfShouRu,
        timeProgressRate: baoFeiOfNoCarOfXinJiang.currentYearOfShouRu / (divisorOfXinJiang * 0.15),

        currentDayOfQianDan: baoFeiOfNoCarOfXinJiang.currentDayOfQianDan,
        currentWeekOfQianDan: baoFeiOfNoCarOfXinJiang.currentWeekOfQianDan,
        currentYearOfQianDan: baoFeiOfNoCarOfXinJiang.currentYearOfQianDan
      }

      self.agencyDataOfXinJiang.baoFei.subtotal = {
        currentDayOfShouRu: self.agencyDataOfXinJiang.baoFei.car.currentDayOfShouRu + self.agencyDataOfXinJiang.baoFei.noCar.currentDayOfShouRu,
        currentWeekOfShouRu: self.agencyDataOfXinJiang.baoFei.car.currentWeekOfShouRu + self.agencyDataOfXinJiang.baoFei.noCar.currentWeekOfShouRu,
        currentYearOfShouRu: self.agencyDataOfXinJiang.baoFei.car.currentYearOfShouRu + self.agencyDataOfXinJiang.baoFei.noCar.currentYearOfShouRu,
        timeProgressRate: (self.agencyDataOfXinJiang.baoFei.car.currentYearOfShouRu + self.agencyDataOfXinJiang.baoFei.noCar.currentYearOfShouRu) / (divisorOfXinJiang * 0.85 + divisorOfXinJiang * 0.15),

        currentDayOfQianDan: self.agencyDataOfXinJiang.baoFei.car.currentDayOfQianDan + self.agencyDataOfXinJiang.baoFei.noCar.currentDayOfQianDan,
        currentWeekOfQianDan: self.agencyDataOfXinJiang.baoFei.car.currentWeekOfQianDan + self.agencyDataOfXinJiang.baoFei.noCar.currentWeekOfQianDan,
        currentYearOfQianDan: self.agencyDataOfXinJiang.baoFei.car.currentYearOfQianDan + self.agencyDataOfXinJiang.baoFei.noCar.currentYearOfQianDan
      }

      /* agencyDataOfGuangDong */
      const baoFeiOfCarOfGuangDong = self.getDataByKeyOfBaoFei('广东分公司', '车')
      const baoFeiOfNoCarOfGuangDong = self.getDataByKeyOfBaoFei('广东分公司', '非车')

      self.agencyDataOfGuangDong.baoFei.car = {
        currentDayOfShouRu: baoFeiOfCarOfGuangDong.currentDayOfShouRu,
        currentWeekOfShouRu: baoFeiOfCarOfGuangDong.currentWeekOfShouRu,
        currentYearOfShouRu: baoFeiOfCarOfGuangDong.currentYearOfShouRu,
        timeProgressRate: baoFeiOfCarOfGuangDong.currentYearOfShouRu / (muBiaoOfGuangDong * 0.85),

        currentDayOfQianDan: baoFeiOfCarOfGuangDong.currentDayOfQianDan,
        currentWeekOfQianDan: baoFeiOfCarOfGuangDong.currentWeekOfQianDan,
        currentYearOfQianDan: baoFeiOfCarOfGuangDong.currentYearOfQianDan
      }

      self.agencyDataOfGuangDong.baoFei.noCar = {
        currentDayOfShouRu: baoFeiOfNoCarOfGuangDong.currentDayOfShouRu,
        currentWeekOfShouRu: baoFeiOfNoCarOfGuangDong.currentWeekOfShouRu,
        currentYearOfShouRu: baoFeiOfNoCarOfGuangDong.currentYearOfShouRu,
        timeProgressRate: baoFeiOfNoCarOfGuangDong.currentYearOfShouRu / (muBiaoOfGuangDong * 0.15),

        currentDayOfQianDan: baoFeiOfNoCarOfGuangDong.currentDayOfQianDan,
        currentWeekOfQianDan: baoFeiOfNoCarOfGuangDong.currentWeekOfQianDan,
        currentYearOfQianDan: baoFeiOfNoCarOfGuangDong.currentYearOfQianDan
      }

      self.agencyDataOfGuangDong.baoFei.subtotal = {
        currentDayOfShouRu: self.agencyDataOfGuangDong.baoFei.car.currentDayOfShouRu + self.agencyDataOfGuangDong.baoFei.noCar.currentDayOfShouRu,
        currentWeekOfShouRu: self.agencyDataOfGuangDong.baoFei.car.currentWeekOfShouRu + self.agencyDataOfGuangDong.baoFei.noCar.currentWeekOfShouRu,
        currentYearOfShouRu: self.agencyDataOfGuangDong.baoFei.car.currentYearOfShouRu + self.agencyDataOfGuangDong.baoFei.noCar.currentYearOfShouRu,
        timeProgressRate: (self.agencyDataOfGuangDong.baoFei.car.currentYearOfShouRu + self.agencyDataOfGuangDong.baoFei.noCar.currentYearOfShouRu) / (muBiaoOfGuangDong * 0.85 + muBiaoOfGuangDong * 0.15),

        currentDayOfQianDan: self.agencyDataOfGuangDong.baoFei.car.currentDayOfQianDan + self.agencyDataOfGuangDong.baoFei.noCar.currentDayOfQianDan,
        currentWeekOfQianDan: self.agencyDataOfGuangDong.baoFei.car.currentWeekOfQianDan + self.agencyDataOfGuangDong.baoFei.noCar.currentWeekOfQianDan,
        currentYearOfQianDan: self.agencyDataOfGuangDong.baoFei.car.currentYearOfQianDan + self.agencyDataOfGuangDong.baoFei.noCar.currentYearOfQianDan
      }

      /* total */
      self.total.baoFei.car = {
        currentDayOfShouRu: self.agencyDataOfShenZhen.baoFei.car.currentDayOfShouRu + self.agencyDataOfXinJiang.baoFei.car.currentDayOfShouRu + self.agencyDataOfGuangDong.baoFei.car.currentDayOfShouRu,
        currentWeekOfShouRu: self.agencyDataOfShenZhen.baoFei.car.currentWeekOfShouRu + self.agencyDataOfXinJiang.baoFei.car.currentWeekOfShouRu + self.agencyDataOfGuangDong.baoFei.car.currentWeekOfShouRu,
        currentYearOfShouRu: self.agencyDataOfShenZhen.baoFei.car.currentYearOfShouRu + self.agencyDataOfXinJiang.baoFei.car.currentYearOfShouRu + self.agencyDataOfGuangDong.baoFei.car.currentYearOfShouRu,
        timeProgressRate: (self.agencyDataOfShenZhen.baoFei.car.currentYearOfShouRu + self.agencyDataOfXinJiang.baoFei.car.currentYearOfShouRu + self.agencyDataOfGuangDong.baoFei.car.currentYearOfShouRu) / (divisorOfTotal * 0.85),

        currentDayOfQianDan: self.agencyDataOfShenZhen.baoFei.car.currentDayOfQianDan + self.agencyDataOfXinJiang.baoFei.car.currentDayOfQianDan + self.agencyDataOfGuangDong.baoFei.car.currentDayOfQianDan,
        currentWeekOfQianDan: self.agencyDataOfShenZhen.baoFei.car.currentWeekOfQianDan + self.agencyDataOfXinJiang.baoFei.car.currentWeekOfQianDan + self.agencyDataOfGuangDong.baoFei.car.currentWeekOfQianDan,
        currentYearOfQianDan: self.agencyDataOfShenZhen.baoFei.car.currentYearOfQianDan + self.agencyDataOfXinJiang.baoFei.car.currentYearOfQianDan + self.agencyDataOfGuangDong.baoFei.car.currentYearOfQianDan
      }

      self.total.baoFei.noCar = {
        currentDayOfShouRu: self.agencyDataOfShenZhen.baoFei.noCar.currentDayOfShouRu + self.agencyDataOfXinJiang.baoFei.noCar.currentDayOfShouRu + self.agencyDataOfGuangDong.baoFei.noCar.currentDayOfShouRu,
        currentWeekOfShouRu: self.agencyDataOfShenZhen.baoFei.noCar.currentWeekOfShouRu + self.agencyDataOfXinJiang.baoFei.noCar.currentWeekOfShouRu + self.agencyDataOfGuangDong.baoFei.noCar.currentWeekOfShouRu,
        currentYearOfShouRu: self.agencyDataOfShenZhen.baoFei.noCar.currentYearOfShouRu + self.agencyDataOfXinJiang.baoFei.noCar.currentYearOfShouRu + self.agencyDataOfGuangDong.baoFei.noCar.currentYearOfShouRu,
        timeProgressRate: (self.agencyDataOfShenZhen.baoFei.noCar.currentYearOfShouRu + self.agencyDataOfXinJiang.baoFei.noCar.currentYearOfShouRu + self.agencyDataOfGuangDong.baoFei.noCar.currentYearOfShouRu) / (divisorOfTotal * 0.15),

        currentDayOfQianDan: self.agencyDataOfShenZhen.baoFei.noCar.currentDayOfQianDan + self.agencyDataOfXinJiang.baoFei.noCar.currentDayOfQianDan + self.agencyDataOfGuangDong.baoFei.noCar.currentDayOfQianDan,
        currentWeekOfQianDan: self.agencyDataOfShenZhen.baoFei.noCar.currentWeekOfQianDan + self.agencyDataOfXinJiang.baoFei.noCar.currentWeekOfQianDan + self.agencyDataOfGuangDong.baoFei.noCar.currentWeekOfQianDan,
        currentYearOfQianDan: self.agencyDataOfShenZhen.baoFei.noCar.currentYearOfQianDan + self.agencyDataOfXinJiang.baoFei.noCar.currentYearOfQianDan + self.agencyDataOfGuangDong.baoFei.noCar.currentYearOfQianDan
      }

      self.total.baoFei.online = {
        currentDayOfShouRu: self.agencyDataOfShenZhen.baoFei.online.currentDayOfShouRu,
        currentWeekOfShouRu: self.agencyDataOfShenZhen.baoFei.online.currentWeekOfShouRu,
        currentYearOfShouRu: self.agencyDataOfShenZhen.baoFei.online.currentYearOfShouRu,
        timeProgressRate: (self.agencyDataOfShenZhen.baoFei.online.currentYearOfShouRu) / divisorOfOnline,

        currentDayOfQianDan: self.agencyDataOfShenZhen.baoFei.online.currentDayOfQianDan,
        currentWeekOfQianDan: self.agencyDataOfShenZhen.baoFei.online.currentWeekOfQianDan,
        currentYearOfQianDan: self.agencyDataOfShenZhen.baoFei.online.currentYearOfQianDan
      }

      self.total.baoFei.final = {
        currentDayOfShouRu: self.total.baoFei.car.currentDayOfShouRu + self.total.baoFei.noCar.currentDayOfShouRu + self.total.baoFei.online.currentDayOfShouRu,
        currentWeekOfShouRu: self.total.baoFei.car.currentWeekOfShouRu + self.total.baoFei.noCar.currentWeekOfShouRu + self.total.baoFei.online.currentWeekOfShouRu,
        currentYearOfShouRu: self.total.baoFei.car.currentYearOfShouRu + self.total.baoFei.noCar.currentYearOfShouRu + self.total.baoFei.online.currentYearOfShouRu,
        timeProgressRate: (self.total.baoFei.car.currentYearOfShouRu + self.total.baoFei.noCar.currentYearOfShouRu + self.total.baoFei.online.currentYearOfShouRu) / (divisorOfTotal * 0.85 + divisorOfTotal * 0.15 + divisorOfOnline),

        currentDayOfQianDan: self.total.baoFei.car.currentDayOfQianDan + self.total.baoFei.noCar.currentDayOfQianDan + self.total.baoFei.online.currentDayOfQianDan,
        currentWeekOfQianDan: self.total.baoFei.car.currentWeekOfQianDan + self.total.baoFei.noCar.currentWeekOfQianDan + self.total.baoFei.online.currentWeekOfQianDan,
        currentYearOfQianDan: self.total.baoFei.car.currentYearOfQianDan + self.total.baoFei.noCar.currentYearOfQianDan + self.total.baoFei.online.currentYearOfQianDan
      }

    },

    parseDataOfPeiKuan() {
      const self = this

      /* agencyDataOfShenZhen */
      const peiKuanOfCarOfShenZhen =  self.getDataByKeyOfPeiKuan('深圳分公司', '车险')
      const peiKuanOfCarOfZhongBu =  self.getDataByKeyOfPeiKuan('总部营业部', '车险')

      const peiKuanOfNoCarOfShenZhen =  self.getDataByKeyOfPeiKuan('深圳分公司', '非车')
      const peiKuanOfNoCarOfZhongBu =  self.getDataByKeyOfPeiKuan('总部营业部', '非车')

      const peiKuanOfOnlineOfShenZhen =  self.getDataByKeyOfPeiKuan('深分航意险', '互联网')
      const peiKuanOfOnlineOfZhongBu =  self.getDataByKeyOfPeiKuan('总公司境内旅游意外险', '互联网')

      self.agencyDataOfShenZhen.peiKuan.car = {
        currentDayOfYiJue: peiKuanOfCarOfShenZhen.toDayYiJue,
        currentYearOfYiJue: (peiKuanOfCarOfShenZhen.yiJue2016 + peiKuanOfCarOfZhongBu.yiJue2016 + peiKuanOfCarOfShenZhen.yiJue2017 + peiKuanOfCarOfZhongBu.yiJue2017) - (peiKuanOfCarOfShenZhen.peiKuanYiJue2016 + peiKuanOfCarOfZhongBu.peiKuanYiJue2016),

        currentDayOfWeiJue: peiKuanOfCarOfShenZhen.toDayWeiJue,
        currentYearOfWeiJue: (peiKuanOfCarOfShenZhen.weiJue2016 + peiKuanOfCarOfZhongBu.weiJue2016 + peiKuanOfCarOfShenZhen.weiJue2017 + peiKuanOfCarOfZhongBu.weiJue2017) - (peiKuanOfCarOfShenZhen.peiKuanWeiJue2016 + peiKuanOfCarOfZhongBu.peiKuanWeiJue2016)
      }

      self.agencyDataOfShenZhen.peiKuan.noCar = {
        currentDayOfYiJue: peiKuanOfNoCarOfShenZhen.toDayYiJue,
        currentYearOfYiJue: (peiKuanOfNoCarOfShenZhen.yiJue2016 + peiKuanOfNoCarOfZhongBu.yiJue2016 + peiKuanOfNoCarOfShenZhen.yiJue2017 + peiKuanOfNoCarOfZhongBu.yiJue2017) - (peiKuanOfNoCarOfShenZhen.peiKuanYiJue2016 + peiKuanOfNoCarOfZhongBu.peiKuanYiJue2016),

        currentDayOfWeiJue: peiKuanOfNoCarOfShenZhen.toDayWeiJue,
        currentYearOfWeiJue: (peiKuanOfNoCarOfShenZhen.weiJue2016 + peiKuanOfNoCarOfZhongBu.weiJue2016 + peiKuanOfNoCarOfShenZhen.weiJue2017 + peiKuanOfNoCarOfZhongBu.weiJue2017) - (peiKuanOfNoCarOfShenZhen.peiKuanWeiJue2016 + peiKuanOfNoCarOfZhongBu.peiKuanWeiJue2016)
      }

      self.agencyDataOfShenZhen.peiKuan.online = {
        currentDayOfYiJue: peiKuanOfOnlineOfShenZhen.toDayYiJue,
        currentYearOfYiJue: (peiKuanOfOnlineOfShenZhen.yiJue2016 + peiKuanOfOnlineOfZhongBu.yiJue2016 + peiKuanOfOnlineOfShenZhen.yiJue2017 + peiKuanOfOnlineOfZhongBu.yiJue2017) - (peiKuanOfOnlineOfShenZhen.peiKuanYiJue2016 + peiKuanOfOnlineOfZhongBu.peiKuanYiJue2016),

        currentDayOfWeiJue: peiKuanOfOnlineOfShenZhen.toDayWeiJue,
        currentYearOfWeiJue: (peiKuanOfOnlineOfShenZhen.weiJue2016 + peiKuanOfOnlineOfZhongBu.weiJue2016 + peiKuanOfOnlineOfShenZhen.weiJue2017 + peiKuanOfOnlineOfZhongBu.weiJue2017) - (peiKuanOfOnlineOfShenZhen.peiKuanWeiJue2016 + peiKuanOfOnlineOfZhongBu.peiKuanWeiJue2016)
      }

      self.agencyDataOfShenZhen.peiKuan.subtotal = {
        currentDayOfYiJue: self.agencyDataOfShenZhen.peiKuan.car.currentDayOfYiJue + self.agencyDataOfShenZhen.peiKuan.noCar.currentDayOfYiJue + self.agencyDataOfShenZhen.peiKuan.online.currentDayOfYiJue,
        currentYearOfYiJue: self.agencyDataOfShenZhen.peiKuan.car.currentYearOfYiJue + self.agencyDataOfShenZhen.peiKuan.noCar.currentYearOfYiJue + self.agencyDataOfShenZhen.peiKuan.online.currentYearOfYiJue,

        currentDayOfWeiJue: self.agencyDataOfShenZhen.peiKuan.car.currentDayOfWeiJue + self.agencyDataOfShenZhen.peiKuan.noCar.currentDayOfWeiJue + self.agencyDataOfShenZhen.peiKuan.online.currentDayOfWeiJue,
        currentYearOfWeiJue: self.agencyDataOfShenZhen.peiKuan.car.currentYearOfWeiJue + self.agencyDataOfShenZhen.peiKuan.noCar.currentYearOfWeiJue + self.agencyDataOfShenZhen.peiKuan.online.currentYearOfWeiJue
      }

      /* agencyDataOfXinJiang */
      const peiKuanOfCarOfXinJiang =  self.getDataByKeyOfPeiKuan('新疆分公司', '车险')
      const peiKuanOfNoCarOfXinJiang =  self.getDataByKeyOfPeiKuan('新疆分公司', '非车')

      self.agencyDataOfXinJiang.peiKuan.car = {
        currentDayOfYiJue: peiKuanOfCarOfXinJiang.toDayYiJue,
        currentYearOfYiJue: (peiKuanOfCarOfXinJiang.yiJue2016 + peiKuanOfCarOfXinJiang.yiJue2017) - peiKuanOfCarOfXinJiang.peiKuanYiJue2016,

        currentDayOfWeiJue: peiKuanOfCarOfXinJiang.toDayWeiJue,
        currentYearOfWeiJue: (peiKuanOfCarOfXinJiang.weiJue2016 + peiKuanOfCarOfXinJiang.weiJue2017) - peiKuanOfCarOfXinJiang.peiKuanWeiJue2016,
      }

      self.agencyDataOfXinJiang.peiKuan.noCar = {
        currentDayOfYiJue: peiKuanOfNoCarOfXinJiang.toDayYiJue,
        currentYearOfYiJue: (peiKuanOfNoCarOfXinJiang.yiJue2016 + peiKuanOfNoCarOfXinJiang.yiJue2017) - peiKuanOfNoCarOfXinJiang.peiKuanYiJue2016,

        currentDayOfWeiJue: peiKuanOfNoCarOfXinJiang.toDayWeiJue,
        currentYearOfWeiJue: (peiKuanOfNoCarOfXinJiang.weiJue2016 + peiKuanOfNoCarOfXinJiang.weiJue2017) - peiKuanOfNoCarOfXinJiang.peiKuanWeiJue2016
      }

      self.agencyDataOfXinJiang.peiKuan.subtotal = {
        currentDayOfYiJue: self.agencyDataOfXinJiang.peiKuan.car.currentDayOfYiJue + self.agencyDataOfXinJiang.peiKuan.noCar.currentDayOfYiJue,
        currentYearOfYiJue: self.agencyDataOfXinJiang.peiKuan.car.currentYearOfYiJue + self.agencyDataOfXinJiang.peiKuan.noCar.currentYearOfYiJue,

        currentDayOfWeiJue: self.agencyDataOfXinJiang.peiKuan.car.currentDayOfWeiJue + self.agencyDataOfXinJiang.peiKuan.noCar.currentDayOfWeiJue,
        currentYearOfWeiJue: self.agencyDataOfXinJiang.peiKuan.car.currentYearOfWeiJue + self.agencyDataOfXinJiang.peiKuan.noCar.currentYearOfWeiJue
      }

      /* agencyDataOfGuangDong */
      const peiKuanOfCarOfGuangDong =  self.getDataByKeyOfPeiKuan('广东分公司', '车险')
      const peiKuanOfNoCarOfGuangDong =  self.getDataByKeyOfPeiKuan('广东分公司', '非车')

      self.agencyDataOfGuangDong.peiKuan.car = {
        currentDayOfYiJue: peiKuanOfCarOfGuangDong.toDayYiJue,
        currentYearOfYiJue: (peiKuanOfCarOfGuangDong.yiJue2016 + peiKuanOfCarOfGuangDong.yiJue2017) - peiKuanOfCarOfGuangDong.peiKuanYiJue2016,

        currentDayOfWeiJue: peiKuanOfCarOfGuangDong.toDayWeiJue,
        currentYearOfWeiJue: (peiKuanOfCarOfGuangDong.weiJue2016 + peiKuanOfCarOfGuangDong.weiJue2017) - peiKuanOfCarOfGuangDong.peiKuanWeiJue2016,
      }

      self.agencyDataOfGuangDong.peiKuan.noCar = {
        currentDayOfYiJue: peiKuanOfNoCarOfGuangDong.toDayYiJue,
        currentYearOfYiJue: (peiKuanOfNoCarOfGuangDong.yiJue2016 + peiKuanOfNoCarOfGuangDong.yiJue2017) - peiKuanOfNoCarOfGuangDong.peiKuanYiJue2016,

        currentDayOfWeiJue: peiKuanOfNoCarOfGuangDong.toDayWeiJue,
        currentYearOfWeiJue: (peiKuanOfNoCarOfGuangDong.weiJue2016 + peiKuanOfNoCarOfGuangDong.weiJue2017) - peiKuanOfNoCarOfGuangDong.peiKuanWeiJue2016
      }

      self.agencyDataOfGuangDong.peiKuan.subtotal = {
        currentDayOfYiJue: self.agencyDataOfGuangDong.peiKuan.car.currentDayOfYiJue + self.agencyDataOfGuangDong.peiKuan.noCar.currentDayOfYiJue,
        currentYearOfYiJue: self.agencyDataOfGuangDong.peiKuan.car.currentYearOfYiJue + self.agencyDataOfGuangDong.peiKuan.noCar.currentYearOfYiJue,

        currentDayOfWeiJue: self.agencyDataOfGuangDong.peiKuan.car.currentDayOfWeiJue + self.agencyDataOfGuangDong.peiKuan.noCar.currentDayOfWeiJue,
        currentYearOfWeiJue: self.agencyDataOfGuangDong.peiKuan.car.currentYearOfWeiJue + self.agencyDataOfGuangDong.peiKuan.noCar.currentYearOfWeiJue
      }

      /* total */
      self.total.peiKuan.car = {
        currentDayOfYiJue: self.agencyDataOfShenZhen.peiKuan.car.currentDayOfYiJue + self.agencyDataOfXinJiang.peiKuan.car.currentDayOfYiJue + self.agencyDataOfGuangDong.peiKuan.car.currentDayOfYiJue,
        currentYearOfYiJue: self.agencyDataOfShenZhen.peiKuan.car.currentYearOfYiJue + self.agencyDataOfXinJiang.peiKuan.car.currentYearOfYiJue + self.agencyDataOfGuangDong.peiKuan.car.currentYearOfYiJue,

        currentDayOfWeiJue: self.agencyDataOfShenZhen.peiKuan.car.currentDayOfWeiJue + self.agencyDataOfXinJiang.peiKuan.car.currentDayOfWeiJue + self.agencyDataOfGuangDong.peiKuan.car.currentDayOfWeiJue,
        currentYearOfWeiJue: self.agencyDataOfShenZhen.peiKuan.car.currentYearOfWeiJue + self.agencyDataOfXinJiang.peiKuan.car.currentYearOfWeiJue + self.agencyDataOfGuangDong.peiKuan.car.currentYearOfWeiJue
      }

      self.total.peiKuan.noCar = {
        currentDayOfYiJue: self.agencyDataOfShenZhen.peiKuan.noCar.currentDayOfYiJue + self.agencyDataOfXinJiang.peiKuan.noCar.currentDayOfYiJue + self.agencyDataOfGuangDong.peiKuan.noCar.currentDayOfYiJue,
        currentYearOfYiJue: self.agencyDataOfShenZhen.peiKuan.noCar.currentYearOfYiJue + self.agencyDataOfXinJiang.peiKuan.noCar.currentYearOfYiJue + self.agencyDataOfGuangDong.peiKuan.noCar.currentYearOfYiJue,

        currentDayOfWeiJue: self.agencyDataOfShenZhen.peiKuan.noCar.currentDayOfWeiJue + self.agencyDataOfXinJiang.peiKuan.noCar.currentDayOfWeiJue + self.agencyDataOfGuangDong.peiKuan.noCar.currentDayOfWeiJue,
        currentYearOfWeiJue: self.agencyDataOfShenZhen.peiKuan.noCar.currentYearOfWeiJue + self.agencyDataOfXinJiang.peiKuan.noCar.currentYearOfWeiJue + self.agencyDataOfGuangDong.peiKuan.noCar.currentYearOfWeiJue
      }

      self.total.peiKuan.online = {
        currentDayOfYiJue: self.agencyDataOfShenZhen.peiKuan.online.currentDayOfYiJue,
        currentYearOfYiJue: self.agencyDataOfShenZhen.peiKuan.online.currentYearOfYiJue,

        currentDayOfWeiJue: self.agencyDataOfShenZhen.peiKuan.online.currentDayOfWeiJue,
        currentYearOfWeiJue: self.agencyDataOfShenZhen.peiKuan.online.currentYearOfWeiJue
      }

      self.total.peiKuan.final = {
        currentDayOfYiJue: self.total.peiKuan.car.currentDayOfYiJue + self.total.peiKuan.noCar.currentDayOfYiJue,
        currentYearOfYiJue: self.total.peiKuan.car.currentYearOfYiJue + self.total.peiKuan.noCar.currentYearOfYiJue,

        currentDayOfWeiJue: self.total.peiKuan.car.currentDayOfWeiJue + self.total.peiKuan.noCar.currentDayOfWeiJue,
        currentYearOfWeiJue: self.total.peiKuan.car.currentYearOfWeiJue + self.total.peiKuan.noCar.currentYearOfWeiJue
      }

    }
  },
  async created() {
    const self = this

    /* baoFei */
    // const dataSetIdOfBaoFei = '37b09342-b51f-48ec-a236-95278d0d77c4'
    const dataSetIdOfBaoFei = '4893be75-7ee7-4e4f-bd18-f1c4f5773967'    /* Production */
    // const dataSetIdOfBaoFei = 'e158b51b-db41-476c-b2f7-6a971d7b59c2'
    self.dataSetOfBaoFei = await self.fetchDataSetById(dataSetIdOfBaoFei)

    /* jinDu */
    // const dataSetIdOfJinDu = 'a56f820d-7e9c-4c7d-9cd6-03adb56fb8a1'
    const dataSetIdOfJinDu = '93696ca9-774c-4317-9203-ede759863331'   /* Production */
    // const dataSetIdOfJinDu = '2b3a00f6-2ed0-4ea9-8547-d71a7e55d2f2'
    self.dataSetOfJinDu = await self.fetchDataSetById(dataSetIdOfJinDu)

    /* muBiao */
    // const dataSetIdOfMuBiao = '1af83a31-5f2a-454a-a24a-9fb4c253e235'
    const dataSetIdOfMuBiao = 'e5514a38-4435-4e87-829b-db525533e2f5'    /* Production */
    // const dataSetIdOfMuBiao = '42bf9fe8-3c0a-43fc-ba23-e7f2fc21c200'
    self.dataSetOfMuBiao = await self.fetchDataSetById(dataSetIdOfMuBiao)

    /* peiKuan */
    // const dataSetIdOfPeiKuan = '73005be3-81f4-4917-b7cb-6597ae27d8a3'
    const dataSetIdOfPeiKuan = '94c54ee7-25fc-4149-a2e3-3ffefff54ac5'   /* Production */
    // const dataSetIdOfPeiKuan = 'de37a96a-302d-4678-8758-7072a982db63'
    self.dataSetOfPeiKuan = await self.fetchDataSetById(dataSetIdOfPeiKuan)

    self.parseDataOfBaoFei()
    self.parseDataOfPeiKuan()
  },
  mounted () {
    const self = this
    $(window).resize(() => {
      self.computedTableWidth()
    });

    setTimeout(() => {
      self.computedTableWidth()
    }, 200)

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
  font-size: 106px;
  color: #c0504d;
  line-height: 100%;
  font-family: myHaettenschweiler;
  letter-spacing: 5px;
}
.daily-report-title .daily-report-title-secondary {
  font-size: 53px;
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
  font-size: 21px;
  font-weight: bolder;
  padding-left: 5%;
  margin-bottom: 10px;
}

.daily-report-description p {
  margin: 5px 0;
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
  padding: 0 6px;
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
.font-color-3 td.font-color-1 {
  color: #e37b27;
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
  font-size: 14px;
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
  height: 68px;
}
.table-data .table-data-header-primary td {
  height: 29px;
}
.table-data .table-data-header-secondary td {
  height: 39px;
}
.table-data tr:nth-child(6) td,
.table-data tr:nth-child(9) td,
.table-data tr:nth-child(12) td,
.table-data tr:nth-child(15) td {
  border-bottom: 1px solid #000;
}
</style>
