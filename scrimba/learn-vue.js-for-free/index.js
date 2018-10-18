/**
 * index.js
 */

"use strict"

// variables
let black = '#3E454F';
let blue = '#8BCDD8';
let blueLight = '#B9E8EF';
let brown = '#B38A82';
let gray = '#C1C4C7';
let green = '#67C787';
let orange = '#F49E73';
let pink = '#D9809C';
let pinkLight = '#E4A2B7';
let red = '#F27280';
let sand = '#F5D6B7';
let yellow = '#F7D88B';

// functions
function emojify(name) {
  var out = `<img src="emojis/` + name + `.svg">`;
  return out;
}

// components
Vue.component("swatch", {
  props: ["active", "swatch", "effect"],
  template: `
    <div class="grid-item">
      <div class="grid-cell__top" :style="effect(swatch)">
        <span v-html="swatch.emoji"
          :class="{ bounce: swatch == active }">
        </span>
      </div>
      <div class="grid-cell__bottom" :style="{ color: swatch.color }">
        <span>{{ swatch.color.toUpperCase() }}</span>
      </div>
    </div>
  `
});

// app
var app = new Vue({
  el: "#app",
  data: {
    active: "",
    swatches: [
      {
        emoji: emojify("alligator"),
        color: green
      },
      {
        emoji: emojify("bear"),
        color: brown
      },
      {
        emoji: emojify("bee"),
        color: yellow
      },
      {
        emoji: emojify("beetle"),
        color: black
      },
      {
        emoji: emojify("cat"),
        color: orange
      },
      {
        emoji: emojify("dog"),
        color: gray
      },
      {
        emoji: emojify("hippo"),
        color: blue
      },
      {
        emoji: emojify("penguin"),
        color: red
      },
      {
        emoji: emojify("pig"),
        color: pink
      },
      {
        emoji: emojify("snail"),
        color: sand
      },
      {
        emoji: emojify("squid"),
        color: pinkLight
      },
      {
        emoji: emojify("whale"),
        color: blueLight
      }
    ]
  },
  methods: {
    activate: function(swatch) {
      this.active = swatch;
    },
    gradient: function(swatch) {
      return {
        background: "linear-gradient(100deg, whitesmoke -100%, " + swatch.color + ")"
      }
    }
  }
});
