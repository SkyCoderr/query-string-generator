<template>
  <div>
    <div class="include-exclude">
      <span class="include-section">
        <input type="radio" id="include" value="include" v-model="coverage" />
        <label for="include">Include</label>
      </span>
      <span class="exclude-section">
        <input type="radio" id="exclude" value="exclude" v-model="coverage" />
        <label for="exclude">Exclude</label>
      </span>
    </div>

    <div class="colors">
      <span v-for="key in Object.keys(colors)" :key="key" class="color">
        <input type="checkbox" :id="key" :name="key" v-model="colors[key]" />
        <label :for="key">{{ key }}</label>
      </span>
    </div>

    <div class="button">
      <button @click="saveColorOption">save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { IColors } from "@/contracts/IPayload";

@Component({
  components: {},
})
export default class ColorOption extends Vue {
  @Action updateColors!: (colors: IColors) => void;

  coverage = "include";

  colors: Record<string, boolean> = {
    red: false,
    green: false,
    blue: false,
    yellow: false,
    orange: false,
    purple: false,
    white: false,
    black: false,
    grey: false,
    pink: false,
  };

  saveColorOption() {
    let flag = false;
    const colors = Object.keys(this.colors);
    colors.forEach((color: string) => (flag = flag || this.colors[color]));
    if (!flag) {
      alert("Please select at least 1 color.");
      return;
    }
    this.updateColors({ coverage: this.coverage, colors: this.colors });
  }
}
</script>

<style>
.include-exclude {
  text-align: center;
  border: solid rgba(0, 0, 255, 0.5) 4px;
  padding: 5%;
  margin-bottom: 5%;
}

.include-section,
.exclude-section {
  margin: 10%;
}

.colors {
  text-align: center;
  border: solid rgba(0, 0, 255, 0.5) 4px;
  padding: 5%;
  margin-top: 5%;
}

.color {
  margin: 5%;
}

.button {
  text-align: center;
  margin-top: 5%;
}
</style>
