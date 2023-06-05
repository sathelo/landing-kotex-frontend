import Vue from 'vue';
import { camelToKebab, reachGoal, getStaticUrl } from '@/lib/tools';

Vue.mixin({
  methods: {
    reachGoal,
    getStaticUrl,

    bem(name, mods = {}) {
      const result = [name];

      for (const [mod, value] of Object.entries(mods)) {
        if (value === true) {
          result.push(`${name}_${camelToKebab(mod)}`);
        } else if (value || value === 0) {
          result.push(`${name}_${camelToKebab(mod)}_${camelToKebab(value)}`);
        }
      }

      return result.join(' ');
    },
  },
});
