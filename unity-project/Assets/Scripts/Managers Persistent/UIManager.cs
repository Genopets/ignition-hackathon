using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using UtilityCode.CodeLibrary.Utilities;

public class UIManager : UnitySingletonPersistent<UIManager>
{
    #region GeneralVars

    [Header("BeforeInstallation UI Objects")]
    public GameObject beforeInstallTextObjects;

    public Sprite beforeInstallBGImage;
    public Sprite beforeInstallBackButtonImage;

    [Header("ReadyForInstallation UI Objects")]
    public GameObject readyForInstallTextObjects;

    public Sprite readyForInstallBGImage;
    public Sprite readyForInstallBackButtonImage;

    public GameObject backGroundImageObject;
    
    public GameObject backButton;


    private enum UIState {BeforeInstall, ReadyForInstall};

    private UIState currentUIState;
    #endregion
    
    #region HelperFunctions
    private void SwitchUI()
    {
        if (currentUIState == UIState.BeforeInstall)
        {
            currentUIState = UIState.ReadyForInstall;
            backGroundImageObject.GetComponent<Image>().sprite = readyForInstallBGImage;
            backButton.GetComponent<Image>().sprite = readyForInstallBackButtonImage;
            readyForInstallTextObjects.SetActive(true);
            beforeInstallTextObjects.SetActive(false);

        }
        else if (currentUIState == UIState.ReadyForInstall)
        {
            InitializeUI();
        }
    }
    private void InitializeUI()
    {
        currentUIState = UIState.BeforeInstall;
        backGroundImageObject.GetComponent<Image>().sprite = beforeInstallBGImage;
        backButton.GetComponent<Image>().sprite = beforeInstallBackButtonImage;
        beforeInstallTextObjects.SetActive(true);
        readyForInstallTextObjects.SetActive(false);
    }
    #endregion
    
    #region EventListener

    private void UISwitchResponse()
    {
        SwitchUI();
    }

    #endregion

    #region UnityLifeCycle

    private void OnEnable()
    {
        BroadcastSystem.AugmentReadyForInstall.AddListener(UISwitchResponse);
        BroadcastSystem.AugmentInstallComplete.AddListener(UISwitchResponse);
    }

    private void OnDisable()
    {
        BroadcastSystem.AugmentReadyForInstall.RemoveListener(UISwitchResponse);
        BroadcastSystem.AugmentInstallComplete.RemoveListener(UISwitchResponse);
    }

    void Start()
    {
        InitializeUI();
    }
    
    #endregion
    
}
