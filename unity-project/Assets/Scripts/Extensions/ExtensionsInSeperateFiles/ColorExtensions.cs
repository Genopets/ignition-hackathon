using UnityEngine;

namespace UtilityCode.CodeLibrary.Extensions.ExtensionsInSaperateFiles
{
    public static class ColorExtensions 
    {
        public static Color withAlpha(this Color color, float alpha) {
            color.a = alpha;
            return color;
        }
    }
}
