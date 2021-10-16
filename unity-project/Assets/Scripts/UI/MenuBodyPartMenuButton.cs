using System.Collections;
using System.Collections.Generic;
using Cinemachine;
using Managers_Persistent;
using UnityEngine;
using UtilityCode.CodeLibrary.UI_Linking_System.Linkers;

public class MenuBodyPartMenuButton : ButtonLinker
{

    protected override void OnClickCallback()
    {
        Transform parent = gameObject.transform.parent;
        for (int i = 0; i < parent.childCount; i++)
        {
            if (parent.GetChild(i).gameObject == gameObject)
            {
                BroadcastSystem.OnMenuBodyPartButtonPressed?.Invoke(new PartSwitchButton(i,gameObject));
                break;
            }
        }
        
    }
    
}
