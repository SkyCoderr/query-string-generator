<template>
  <div>
    <div>Generated Query String:</div>
    <div>{{ queryString }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { IColors, ISpeed, IDom, ILaser } from "@/contracts/IPayload";

@Component({
  components: {},
})
export default class Tabs extends Vue {
  @State colors!: IColors;
  @State speed!: ISpeed;
  @State dom!: IDom;
  @State laser!: ILaser;

  get queryString() {
    const colorString = this.generateColorString(this.colors);
    const speedString = this.generateSpeedString(this.speed);
    const domString = this.generateDomString(this.dom);
    const laserString = this.generateLaserString(this.laser);
    let result = `${colorString}&${speedString}&${domString}&${laserString}`;
    return encodeURIComponent(result);
  }

  generateColorString(cl: IColors) {
    const coverage = cl.coverage;
    const colors = cl.colors;
    const values = Object.values(colors);
    const keys = Object.keys(colors).filter(
      (key: string, index: number) => values[index]
    );
    let result = `coverage=${coverage}&colors=${keys.join(",")}`;
    return result;
  }

  generateSpeedString(sp: ISpeed) {
    return `speedRange=${sp.speedRange}&speedValue=${sp.speedValue}`;
  }

  generateDomString(dom: IDom) {
    return `domRange=${dom.domRange}&domValue=${dom.domValue}`;
  }

  generateLaserString(laser: ILaser) {
    return `laserRange=${laser.laserRange}`;
  }
}
</script>

<style></style>
