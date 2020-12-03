import Vue from "vue";

Vue.mixin({
  methods: {
    generateSpan() {
        let gen = Math.floor(Math.random() * 8)
        do {
          gen = Math.floor(Math.random() * 8)
        } while (gen < 5)
        return gen
      },

  }
});
