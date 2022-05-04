<template>
  <div id="page">
    <div id="control">
      <Tabs
        :source="source"
        :selectedTab="selectedTab"
        @tabChanged="updateSelectedTab"
      ></Tabs>
      <OptionBoard :selectedTab="selectedTab" />
    </div>
    <div id="output">
      <Output></Output>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import OptionBoard from "@/components/OptionBoard.vue";
import Output from "@/components/Output.vue";

@Component({
  components: {
    Tabs,
    OptionBoard,
    Output,
  },
})
export default class Home extends Vue {
  source = [
    { key: "colors", value: "Colors" },
    { key: "speed", value: "Max Speed" },
    { key: "dom", value: "Date of Manufacture" },
    { key: "laser", value: "Pulse Laser" },
  ];

  selectedTab = this.source[0].key;

  updateSelectedTab(tab: { key: string; value: string }) {
    this.selectedTab = tab.key;
  }
}
</script>

<style>
#page {
  position: static;
}

#control {
  height: 80%;
  width: 100%;
}
</style>
