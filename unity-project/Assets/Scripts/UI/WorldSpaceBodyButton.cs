using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UtilityCode.CodeLibrary.UI_Linking_System.Linkers;

public class WorldSpaceBodyButton : ButtonLinker
{
    protected override void OnClickCallback()
    {
        BroadcastSystem.OnBodyButtonPressed?.Invoke();
    }
}
