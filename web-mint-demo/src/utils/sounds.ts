/* eslint-disable no-shadow */
const isClient = typeof window !== `undefined`;

declare global {
  interface HTMLAudioElement {
    fadeOut: () => void;
    fadeIn: () => void;
    maxVolume: number;
  }
}

interface ISoundOptions {
  loop?: boolean;
  loopStartAt?: number;
  maxVolume?: number;
}

export enum SoundEffects {
  OnHover = `OnHover`,
  OnPress = `OnPress`,
  keyPress = `keyPress`,
  ambience = `ambience`,
  select = `select`,
  birth = `birth`,
  born = `born`,
  q1 = `q1`,
  q2 = `q2`,
  q3 = `q3`,
}

export type SoundType = `${SoundEffects}`;

export type SoundMap = { [sound in SoundType]: string };

export interface SoundsFn {
  play: () => void;
  fadeIn: () => void;
  fadeOut: () => void;
  playToEndThen: (fn: () => void) => void;
}

if (isClient) {
  const options = { fadeEffect: 0.025, delay: 50 };
  HTMLAudioElement.prototype.fadeIn = function FadeOut() {
    this.play();
    this.volume = 0;
    this.muted = false;

    const soundInc = setInterval(() => {
      if (this.volume > this.maxVolume - options.fadeEffect) {
        clearInterval(soundInc);
      } else this.volume += options.fadeEffect;
    }, options.delay);
  };

  HTMLAudioElement.prototype.fadeOut = function FadeOut() {
    this.play();

    const soundInc = setInterval(() => {
      if (this.volume <= 0 + options.fadeEffect) {
        this.pause();
        this.currentTime = 0;
        clearInterval(soundInc);
      } else this.volume -= options.fadeEffect;
    }, options.delay);
  };
}

const SoundSourceMP3: SoundMap = {
  OnHover: `/sound/hover.mp3`,
  OnPress: `/sound/press.mp3`,
  keyPress: `/sound/typing.mp3`,
  ambience: `/sound/ambience.mp3`,
  select: `/sound/select.mp3`,
  birth: `/sound/birth.mp3`,
  born: `/sound/born.mp3`,
  q1: `/sound/q1.mp3`,
  q2: `/sound/q2.mp3`,
  q3: `/sound/q3.mp3`,
};

const SoundSourceOGG: SoundMap = {
  OnHover: `/sound/hover.ogg`,
  OnPress: `/sound/press.ogg`,
  keyPress: `/sound/typing.ogg`,
  ambience: `/sound/ambience.ogg`,
  select: `/sound/select.ogg`,
  birth: `/sound/birth.ogg`,
  born: `/sound/born.ogg`,
  q1: `/sound/q1.ogg`,
  q2: `/sound/q2.ogg`,
  q3: `/sound/q3.ogg`,
};

const instance: Partial<{ [sound in SoundType]: HTMLAudioElement }> = {};

class Sounds implements SoundsFn {
  private audio: HTMLAudioElement;

  constructor(soundName?: SoundType, options?: ISoundOptions) {
    const canPlayOgg = !!new Audio().canPlayType(`audio/ogg; codecs="vorbis"`);

    this.audio = this.getAudioInstance(canPlayOgg, soundName);
    this.audio.muted = true;
    this.audio.loop = options?.loop || false;
    this.audio.volume = options?.maxVolume || 1;
    this.audio.maxVolume = options?.maxVolume || 1;

    if (options?.loop) this.seemlessLoop(options?.loopStartAt);
  }

  private getAudioInstance = (
    canPlayOgg: boolean,
    soundName: SoundType = `OnHover`,
  ) => {
    const getInstance = instance[soundName];

    if (getInstance) getInstance.currentTime = 0;

    if (getInstance) return getInstance;

    const audioSource = canPlayOgg
      ? SoundSourceOGG[soundName]
      : SoundSourceMP3[soundName];

    const audio = new Audio(audioSource);

    instance[soundName] = audio;

    return audio;
  };

  seemlessLoop = (startAt = 0) => {
    const self = this.audio;
    self.ontimeupdate = () => {
      const hasEnd = self.currentTime >= self.duration - self.duration / 10;
      if (hasEnd) self.currentTime = startAt || self.duration / 10;
    };
  };

  play = () => {
    this.audio?.play();
    this.audio.muted = false;
  };

  pause = () => {
    this.audio?.pause();
    this.audio.muted = true;
  };

  playToEndThen = (cb: () => void) => {
    this.play();
    this.audio.onended = cb;
    this.audio.loop = false;
  };

  played = () => this.audio?.played;

  fadeIn = () => this.audio?.fadeIn();

  fadeOut = () => this.audio?.fadeOut();
}

export default Sounds;
