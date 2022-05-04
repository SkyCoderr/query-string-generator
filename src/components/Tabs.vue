<template>
  <div class="tabs">
    <div
      v-for="tab in source"
      :key="tab.key"
      :class="getTabClass(tab)"
      @click="updateSelectedTab(tab)"
    >
      {{ tab.value }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Tabs extends Vue {
  @Prop({
    required: true,
    type: Array,
  })
  source!: { key: string; value: string }[];

  @Prop({
    required: true,
    type: String,
  })
  selectedTab!: string;

  updateSelectedTab(tab: { key: string; value: string }) {
    this.$emit("tabChanged", tab);
  }

  getTabClass(tab: { key: string; value: string }) {
    return tab.key === this.selectedTab
      ? "selected-tab tab"
      : "unselected-tab tab";
  }
}
</script>

<style>
.tabs {
  position: absolute;
  width: 20%;
  text-align: center;
}

.tab {
  padding: 5%;
  margin-top: 20%;
  margin-bottom: 20%;
  background-color: rgba(0, 255, 0, 0.5);
  cursor: pointer;
}

.selected-tab {
  background-color: rgba(255, 126, 0, 0.8);
}

.unselected-tab {
}
</style>
