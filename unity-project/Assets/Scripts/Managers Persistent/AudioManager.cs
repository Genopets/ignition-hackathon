using System;
using UnityEngine;
using UtilityCode.CodeLibrary.Extensions.ExtensionsInSaperateFiles;
using UtilityCode.CodeLibrary.Utilities;
using Random = UnityEngine.Random;

namespace UtilityCode.CodeLibrary.Managers.GameAudioManager
{

    public class AudioManager : UnitySingletonPersistent<AudioManager>
    {
        [Header("Auto PlayListMusicMode")] public bool ActivatePlayListMode;
        [Tooltip("OPTIONAL")] public AudioClip[] MusicPlayList;
        private int _trackIndex;

        [Header("References")]
        // Audio players components.
        public AudioSource SfxAudioSource;

        public AudioSource MusicAudioSource;

        [Header("Default Pitch variance")]
        // Random pitch adjustment range.
        static readonly PitchVariance DefaultPitchVariance = new PitchVariance(1, 1);

        public static void PlayDisposableAudioSource(AudioClip clip, Vector3 playAtLocation)
        {
            clip.PlayClipAtPoint(playAtLocation);
        }

        #region MONOBEHAVIOURS

        private void Start()
        {
            if (ActivatePlayListMode)
            {
                _trackIndex = Random.Range(0, MusicPlayList.Length);
            }

            if (MusicAudioSource.playOnAwake)
            {
                MusicAudioSource.clip = MusicPlayList[_trackIndex];
                MusicAudioSource.Play();
            }
        }

        // Update is called once per frame

        void Update()
        {
            if (!MusicAudioSource.isPlaying && ActivatePlayListMode)
            {
                MusicAudioSource.clip = MusicPlayList[Random.Range(0, MusicPlayList.Length)];
                MusicAudioSource.Play();
            }
        }

        #endregion

        #region SFX

        // Play a single clip through the sound effects source.

        public static void Play(AudioClip clip)
        {
            SetPitchToDefaultValue();
            Instance.SfxAudioSource.clip = clip;
            Instance.SfxAudioSource.Play();
        }

        public static void Play(AudioClip clip, bool playOnShot)
        {
            SetPitchToDefaultValue();
            Instance.SfxAudioSource.clip = clip;
            if (playOnShot)
                Instance.SfxAudioSource.PlayOneShot(clip);
            else
                Instance.SfxAudioSource.Play();
        }


        public static void Play(AudioClip clip, bool playOnShot, PitchVariance pitchVariance)
        {
            Instance.SfxAudioSource.pitch = RandomPitch(pitchVariance);
            Instance.SfxAudioSource.clip = clip;

            if (playOnShot)
                Instance.SfxAudioSource.PlayOneShot(clip);
            else
                Instance.SfxAudioSource.Play();
        }

        public static void PlayAtLocation(AudioClip clip, Vector3 location, PitchVariance pitchVariance)
        {
            Instance.SfxAudioSource.transform.position = location;
            Instance.SfxAudioSource.pitch = RandomPitch(pitchVariance);
            Instance.SfxAudioSource.clip = clip;
            Instance.SfxAudioSource.PlayOneShot(clip);
        }

        public static void PlayUsingProvidedAudioSource(AudioClip clip, bool playOnShot, PitchVariance pitchVariance, AudioSource audioSourceToUse)
        {
            audioSourceToUse.pitch = RandomPitch(pitchVariance);
            audioSourceToUse.clip = clip;

            if (playOnShot)
                audioSourceToUse.PlayOneShot(clip);
            else
                audioSourceToUse.Play();
        }

        #endregion

        #region MUSIC

        // Play a single clip through the music source.

        public static void PlayMusic(AudioClip clip)
        {
            Instance.MusicAudioSource.clip = clip;
            Instance.MusicAudioSource.Play();
        }

        // Play a single clip through the music source.

        public static void PlayMusic(AudioClip clip, float volume)
        {
            Instance.MusicAudioSource.volume = volume;
            Instance.MusicAudioSource.clip = clip;
            Instance.MusicAudioSource.Play();
        }

        // Play a single clip through the music source.

        public static void PauseMusic()
        {
            Instance.MusicAudioSource.Pause();
        }

        // Play a single clip through the music source.

        public static void UnPauseMusic()
        {
            Instance.MusicAudioSource.UnPause();
        }

        #endregion

        #region HELPER METHODS

        private static void SetPitchToDefaultValue()
        {
            Instance.SfxAudioSource.pitch = DefaultPitchVariance.LowPitchRange;
        }

        // Play a random clip from an array, and randomize the pitch slightly.
        public void RandomSoundEffect(AudioClip[] clips, PitchVariance pitchVariance)
        {
            SfxAudioSource.pitch = Random.Range(pitchVariance.LowPitchRange, pitchVariance.HighPitchRange);
            SfxAudioSource.clip = clips[Random.Range(0, clips.Length)];
            SfxAudioSource.Play();
        }

        static float RandomPitch(PitchVariance pitchVariance)
        {
            return Random.Range(pitchVariance.LowPitchRange, pitchVariance.HighPitchRange);
        }

        #endregion
    }


    [Serializable]
    public struct PitchVariance
    {
        public float LowPitchRange;
        public float HighPitchRange;

        public PitchVariance(float minPitch, float maximumPitch)
        {
            LowPitchRange = minPitch;
            HighPitchRange = maximumPitch;
        }
    }
}