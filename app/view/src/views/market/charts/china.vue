<template>
  <div>
    <div
      :id="'myEcharts' + name"
      v-bind:style="styleObject"
      class="echart-box"></div>
  </div>
</template>

<script>
import mixin from 'blockchain-ui-privatization/PC/common-mixin/market/charts/charts';
import 'blockchain-ui-privatization/PC/common-mixin/market/charts/charts.styl';

export default {
  mixins: [mixin],
  mounted() {
    this.init();
  },
};
</script>
