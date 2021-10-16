using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UtilityCode.CodeLibrary.UI_Linking_System.Linkers;

public class WorldSpaceHeadButton : ButtonLinker
{
    
    protected override void OnClickCallback()
    {
        BroadcastSystem.OnHeadButtonPressed?.Invoke();
    }

}
