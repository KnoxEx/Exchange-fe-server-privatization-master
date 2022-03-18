<template>
  <component v-bind:is="templateLayoutType"></component>
</template>

<script>
import mixin from 'BlockChain-ui-privatization/PC/common-mixin/otcTrade/index/index';
import 'BlockChain-ui-privatization/PC/common-mixin/otcTrade/otcTrade.styl';
import China from './china.vue';
import International from './international.vue';

export default {
  mixins: [mixin],
  components: {
    International,
    China,
  },
};
</script>
