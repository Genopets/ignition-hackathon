using System.Collections.Generic;
using UnityEngine;

namespace UtilityCode.CodeLibrary.Extensions.ExtensionsInSaperateFiles
{
    public static class Vector3Extensions {

        public static Vector2 to2(this Vector3 vector) {
            return vector;
        }

        public static Vector3 withX(this Vector3 vector, float x) {
            return new Vector3(x, vector.y, vector.z);
        }

        public static Vector3 withY(this Vector3 vector, float y) {
            return new Vector3(vector.x, y, vector.z);
        }

        public static Vector3 withZ(this Vector3 vector, float z) {
            return new Vector3(vector.x, vector.y, z);
        }

        public static Vector3 plusX(this Vector3 vector, float plusX) {
            return new Vector3(vector.x + plusX, vector.y, vector.z);
        }

        public static Vector3 plusY(this Vector3 vector, float plusY) {
            return new Vector3(vector.x, vector.y + plusY, vector.z);
        }

        public static Vector3 plusZ(this Vector3 vector, float plusZ) {
            return new Vector3(vector.x, vector.y, vector.z + plusZ);
        }

        public static Vector3 timesX(this Vector3 vector, float timesX) {
            return new Vector3(vector.x * timesX, vector.y, vector.z);
        }

        public static Vector3 timesY(this Vector3 vector, float timesY) {
            return new Vector3(vector.x, vector.y * timesY, vector.z);
        }

        public static Vector3 timesZ(this Vector3 vector, float timesZ) {
            return new Vector3(vector.x, vector.y, vector.z * timesZ);
        }
        
        /// <summary>
        /// Finds the position closest to the given one.
        /// </summary>
        /// <param name="position">World position.</param>
        /// <param name="otherPositions">Other world positions.</param>
        /// <returns>Closest position.</returns>
        public static Vector3 GetClosest(this Vector3 position, IEnumerable<Vector3> otherPositions)
        {
            var closest          = Vector3.zero;
            var shortestDistance = Mathf.Infinity;

            foreach (var otherPosition in otherPositions)
            {
                var distance = (position - otherPosition).sqrMagnitude;

                if (distance < shortestDistance)
                {
                    closest          = otherPosition;
                    shortestDistance = distance;
                }
            }

            return closest;
        }
    }
}
