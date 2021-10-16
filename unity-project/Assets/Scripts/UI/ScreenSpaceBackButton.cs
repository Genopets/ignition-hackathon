using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;
using UtilityCode.CodeLibrary.UI_Linking_System.Linkers;

public class ScreenSpaceBackButton : ButtonLinker
{
    protected override void OnClickCallback()
    {
        BroadcastSystem.OnBackButtonPressed?.Invoke();
    }
    
}
