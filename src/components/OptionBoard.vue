<template>
  <div id="board">
    <ColorOption v-show="selectedTab === 'colors'" />
    <SpeedOption v-show="selectedTab === 'speed'" />
    <DomOption v-show="selectedTab === 'dom'" />
    <LaserOption v-show="selectedTab === 'laser'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ColorOption from "@/components/ColorOption.vue";
import SpeedOption from "@/components/SpeedOption.vue";
import DomOption from "@/components/DomOption.vue";
import LaserOption from "@/components/LaserOption.vue";

@Component({
  components: {
    ColorOption,
    SpeedOption,
    DomOption,
    LaserOption,
  },
})
export default class Tabs extends Vue {
  @Prop({
    required: true,
    type: String,
  })
  selectedTab!: string;
}
</script>

<style>
#board {
  position: absolute;
  height: 60%;
  width: 50%;
  background-color: rgb(255, 255, 0);
  margin: 4% 20% 40% 30%;
  display: inline-block;
}
</style>
