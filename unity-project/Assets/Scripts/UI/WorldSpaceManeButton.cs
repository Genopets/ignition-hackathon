using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UtilityCode.CodeLibrary.UI_Linking_System.Linkers;

public class WorldSpaceManeButton : ButtonLinker
{
    protected override void OnClickCallback()
    {
        BroadcastSystem.OnManeButtonPressed?.Invoke();
    }
}
