using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UtilityCode.CodeLibrary.UI_Linking_System.Linkers;

public class WorldSpaceEyeButton : ButtonLinker
{
    protected override void OnClickCallback()
    {
        BroadcastSystem.OnEyeButtonPressed?.Invoke();
    }
}
