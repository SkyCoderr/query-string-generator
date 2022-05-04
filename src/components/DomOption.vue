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

    <div id="numbers">
      <input type="date" v-model="date" />
    </div>

    <div class="button">
      <button @click="saveColorOption">save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { IDom } from "@/contracts/IPayload";

@Component({
  components: {},
})
export default class DomOption extends Vue {
  @Action updateDom!: (dom: IDom) => void;

  ranges = [
    { id: "before", label: "Before", value: "before" },
    { id: "on", label: "Exactly On", value: "on" },
    { id: "after", label: "After", value: "after" },
  ];

  selectedRange = "on";
  date = "1980-01-01";

  saveColorOption() {
    const date = new Date(this.date);
    const earliest = new Date("1980-01-01");
    const latest = new Date("2020-12-31");
    if (
      date.getTime() < earliest.getTime() ||
      date.getTime() > latest.getTime()
    ) {
      alert("The date has to be between 1980-01-01 to 2020-12-31.");
    }
    this.updateDom({ domRange: this.selectedRange, domValue: this.date });
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

#numbers {
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
