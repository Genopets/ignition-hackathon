using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UtilityCode.CodeLibrary.UI_Linking_System.Linkers;

public class WorldSpaceEarButton : ButtonLinker
{
    
    protected override void OnClickCallback()
    {
        BroadcastSystem.OnEarButtonPressed?.Invoke();
    }

}
