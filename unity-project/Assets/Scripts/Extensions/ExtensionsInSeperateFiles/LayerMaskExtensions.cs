

using UnityEngine;

namespace UtilityCode.CodeLibrary.Extensions.ExtensionsInSaperateFiles
{
    public static class LayerMaskExtensions
    {
        public static bool MaskContains(this LayerMask mask, int layerNumber)
        {
            return mask == (mask | (1 << layerNumber));
        }
    }
}