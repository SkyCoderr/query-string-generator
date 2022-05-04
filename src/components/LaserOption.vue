<template>
  <div>
    <div class="ranges">
      <span v-for="range in ranges" :key="range.id" class="range">
        <input
          type="radio"
          :id="range.value"
          :value="range.value"
          v-model="selectedRange"
        />
        <label :for="range.value">{{ range.label }}</label>
      </span>
    </div>

    <div class="button">
      <button @click="saveLaserOption">save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { ILaser } from "@/contracts/IPayload";

@Component({
  components: {},
})
export default class LaserOption extends Vue {
  @Action updateLaser!: (laser: ILaser) => void;

  ranges = [
    { id: "lasered", label: "With Laser", value: "with" },
    { id: "unlasered", label: "Without Laser", value: "without" },
  ];

  selectedRange = "with";

  saveLaserOption() {
    this.updateLaser({ laserRange: this.selectedRange });
  }
}
</script>

<style>
.ranges {
  text-align: center;
  border: solid rgba(0, 0, 255, 0.5) 4px;
  padding: 5%;
  margin-bottom: 5%;
}

.range {
  margin: 8%;
}

.button {
  text-align: center;
  margin-top: 5%;
}
</style>
