using System;
using UnityEngine;

namespace UtilityCode.CodeLibrary.Extensions.ExtensionsInSaperateFiles
{
    public static class ArrayExtensions {

        /// <summary>
        /// For each component in an array, take an action
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="array"></param>
        /// <param name="callback">The action to take</param>
        public static void ForEachComponent<T>(this T[] array, System.Action<T> callback) where T : Component
        {
            for (var i = 0; i < array.Length; i++)
            {
                callback.Invoke(array[i]);
            }
        }
        
        public static T random<T>(this T[] array) {
            return array[Mathf.FloorToInt(UnityEngine.Random.value * array.Length)];
        }

        public static int Count<T>(this T[] array, Func<T, bool> countPredicate) {
            var count = 0;
            for (int i = 0; i < array.Length; i++) {
                if (countPredicate(array[i]))
                    count++;
            }
            return count;
        }

        public static void ForEach<T>(this T[] array, Action<T> action) {
            for (int i = 0; i < array.Length; i++) {
                action(array[i]);
            }
        }
    }
}
