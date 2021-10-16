using System;
using System.Collections;
using System.Collections.Generic;
using Managers_Persistent;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class AugmentInstallationSlider : MonoBehaviour,IDragHandler,IEndDragHandler
{
    #region GeneralVars
    [Header("Clamping X Positions")]
    public float startPosX;
    public float finalPosX;
    public float dragSenstivity;
    
    #endregion
    
    #region EventListeners
    public void OnDrag(PointerEventData eventData)
    {
        Vector3 position = transform.localPosition;
        float newPos = (position.x + eventData.delta.x) * dragSenstivity;
        transform.localPosition = new Vector3(Mathf.Clamp(newPos, startPosX, finalPosX),position.y, position.z);
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        Vector3 position = transform.localPosition;
        if (position.x == finalPosX)
        {
            BroadcastSystem.AugmentInstallComplete?.Invoke();
            
        }
        transform.localPosition = new Vector3(startPosX, position.y, position.z);
    }
    
   #endregion
}
