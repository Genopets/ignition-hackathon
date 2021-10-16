using System.Collections;
using System.Collections.Generic;
using Managers_Persistent;
using UnityEngine;
using UnityEngine.Events;

public class BroadcastSystem : EventManagerSingleton
{
    public static UnityEventGameObject ObjectInteractionPossible = new UnityEventGameObject();
    public static UnityEventGameObject ObjectPickup = new UnityEventGameObject();
    public static UnityEventGameObject ObjectPickUpfailedHandFull = new UnityEventGameObject();
    public static UnityEventGameObject ObjectDrop = new UnityEventGameObject();
    public static UnityEventGameObject ObjectDropkeyPressed = new UnityEventGameObject();
    public static UnityEventGameObject ObjectThrow = new UnityEventGameObject();
    public static UnityEventGameObject ObjectTakeToInventory = new UnityEventGameObject();
    public static UnityEventString ObjectClickedInInventory = new UnityEventString();
    public static UnityEventGameObject ObjectTakeFromInventory = new UnityEventGameObject();
    public static UnityEventGameObject ObjectPlacementPossible = new UnityEventGameObject();
    
    public static UnityEventBool SetCursorLock = new UnityEventBool();
    public static UnityEvent OnGenopetEvolution  = new UnityEvent();
    public static UnityEvent OnBackButtonPressed = new UnityEvent();
    public static UnityEvent OnHeadButtonPressed = new UnityEvent();
    public static UnityEvent OnEyeButtonPressed = new UnityEvent();
    public static UnityEvent OnEarButtonPressed = new UnityEvent();
    public static UnityEvent OnBodyButtonPressed = new UnityEvent();
    public static UnityEvent OnTailButtonPressed = new UnityEvent();
    public static UnityEvent OnManeButtonPressed = new UnityEvent();
    public static UnityEventPartSwitchButton OnMenuBodyPartButtonPressed = new UnityEventPartSwitchButton();
    public static UnityEvent AugmentInstallComplete = new UnityEvent();
    public static UnityEvent AugmentReadyForInstall = new UnityEvent();
}