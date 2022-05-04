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

    <div class="number">
      <input type="text" v-model="text" />
    </div>

    <div class="button">
      <button @click="saveSpeedOption">save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { ISpeed } from "@/contracts/IPayload";

@Component({
  components: {},
})
export default class SpeedOption extends Vue {
  @Action updateSpeed!: (speed: ISpeed) => void;

  ranges = [
    { id: "less-than", label: "Less Than", value: "lt" },
    { id: "equals", label: "Equals", value: "eq" },
    { id: "more-than", label: "More Than", value: "mt" },
  ];

  selectedRange = "lt";
  text = "";

  saveSpeedOption() {
    const number = Number(this.text);
    if (isNaN(number) || number < 50 || number > 200) {
      alert(
        "Please make sure the input is a number and is between 50 and 200."
      );
    }
    this.updateSpeed({ speedRange: this.selectedRange, speedValue: this.text });
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

.number {
  text-align: center;
  border: solid rgba(0, 0, 255, 0.5) 4px;
  padding: 5%;
  margin-top: 5%;
}

.button {
  text-align: center;
  margin-top: 5%;
}
</style>
