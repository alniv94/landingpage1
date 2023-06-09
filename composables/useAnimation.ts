import anime from "animejs";

interface Binding {
  value?: number;
}

export default () => ({
  vSlideUp: {
    created(el: any, binding: Binding) {
      const duration = binding.value || 200;

      useAnime(
        {
          targets: el,
          translateY: [100, 0],
          opacity: [0, 1],
          duration,
          easing: "linear",
        },
        true
      );
    },
  },
  vFadeIn: {
    created(el: any, binding: Binding) {
      const duration = binding.value || 500;

      useAnime(
        {
          targets: el,
          opacity: [0, 1],
          duration,
          delay: 0,
          easing: "cubicBezier(.5, .05, .1, .3)",
        },
        true
      );
    },
  },
  vStagger: {
    created(el: any, binding: Binding) {
      const duration = binding.value || 50;
      useAnime(
        {
          targets: el,
          delay: anime.stagger(duration, { from: "center" }),
          opacity: [0, 1],
          easing: "cubicBezier(.5, .05, .1, .3)",
        },
        true
      );
    },
  },
  vFadeRight: {
    created(el: any, binding: Binding) {
      const duration = binding.value || 500;
      useAnime(
        {
          targets: el,
          translateX: [-100, 0],
          duration,
          opacity: [0, 1],
          easing: "linear",
        },
        true
      );
    },
  },
  vFadeLeft: {
    created(el: any, binding: Binding) {
      const duration = binding.value || 500;
      useAnime(
        {
          targets: el,
          translateX: [100, 0],
          duration,
          opacity: [0, 1],
          easing: "linear",
        },
        true
      );
    },
  },
  vFadeSlideDown: {
    created(el: any, binding: Binding) {
      const duration = binding.value || 500;
      useAnime(
        {
          targets: el,
          translateY: [100, 0],
          duration,
          opacity: [0, 1],
          easing: "linear",
        },
        true
      );
    },
  },
  vStaggerDown: {
    created(el: any, binding: Binding) {
      const duration = binding.value || 100;
      useAnime(
        {
          targets: el,
          delay: anime.stagger(duration, { easing: "linear" }),
          opacity: [0, 1],
        },
        true
      );
    },
  },
  vStaggerUp: {
    created(el: any, binding: Binding) {
      const duration = binding.value || 100;
      useAnime(
        {
          targets: el,
          translateY: [100, 0],
          delay: anime.stagger(duration),
          opacity: [0, 1],
          easing: "linear",
        },
        true
      );
    },
  },
});
