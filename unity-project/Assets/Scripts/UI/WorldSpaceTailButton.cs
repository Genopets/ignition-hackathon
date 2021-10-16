using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UtilityCode.CodeLibrary.UI_Linking_System.Linkers;

public class WorldSpaceTailButton : ButtonLinker
{
    protected override void OnClickCallback()
    {
        BroadcastSystem.OnTailButtonPressed?.Invoke();
    }
    
}
