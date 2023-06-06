import anime from "animejs/lib/anime.es.js";
import {
  UseIntersectionObserverOptions,
  isString,
  useIntersectionObserver,
} from "@vueuse/core";

export default (
  params: anime.AnimeParams,
  onIntersect = false,
  intersectionObserverOptions: UseIntersectionObserverOptions = { threshold: 0 }
): anime.AnimeInstance => {
  const animeInstance = anime({ ...params });
  if (onIntersect)
    useIntersectionObserver(
      isString(params.targets)
        ? document.querySelectorAll(params.targets as string)[0]
        : Array.isArray(params.targets)
        ? params.targets?.[0]
        : params.targets,
      ([{ isIntersecting }]) => {
        if (isIntersecting) animeInstance.restart();
        else animeInstance.pause();
      },
      intersectionObserverOptions
    );
  return animeInstance;
};
