using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using Managers_Persistent;
using TMPro;
using UnityEngine;
using UnityEngine.PlayerLoop;
using UnityEngine.UI;
using UtilityCode.CodeLibrary.Utilities;

public class PetCustomizationSystem : UnitySingleton<PetCustomizationSystem>
{
    
    #region GeneralVars
    
    private Transform eye;
    private Transform ear;
    private Transform mane;
    private Transform tail;

    private IDictionary<string, int> petState;
    
    
    enum State { FullBody, Head, Body, Eye, Ear, Mane, Tail };

    private State currentState;

    private bool readyToInstall;
    
    private State[] eligibleMenuCanvasActivationState;
    
    public Transform petTransform;
    
    public GameObject menuItemsContentObject;

    public GameObject menuItemReferenceButton;

    public GameObject augmentInstallationSlider;

    [Header("BeforeInstallEarIcons")] 
    public Sprite[] beforeEarIcons;

    [Header("ReadyForInstallEarIcons")] 
    public Sprite[] readyEarIcons;
    

    [Header("ButtonSliderObjectes")] 
    public GameObject buttonSliderStats;

    public GameObject buttonSliderIcon;
    
    #endregion
    
    #region HelperFunctions
    private void SubscribeToEvents()
    {
        BroadcastSystem.OnBackButtonPressed.AddListener(BackButtonPressed);
        BroadcastSystem.OnHeadButtonPressed.AddListener(HeadButtonPressed);
        BroadcastSystem.OnEyeButtonPressed.AddListener(EyeButtonPressed);
        BroadcastSystem.OnEarButtonPressed.AddListener(EarButtonPressed);
        BroadcastSystem.OnBodyButtonPressed.AddListener(BodyButtonPressed);
        BroadcastSystem.OnManeButtonPressed.AddListener(ManeButtonPressed);
        BroadcastSystem.OnTailButtonPressed.AddListener(TailButtonPressed);
        BroadcastSystem.OnMenuBodyPartButtonPressed.AddListener(menuBodyPartButtonPressed);
        BroadcastSystem.AugmentInstallComplete.AddListener(AugmentInstallationComplete);

    }
    private void UnsubscribeToEvents()
    {
        BroadcastSystem.OnBackButtonPressed.RemoveListener(BackButtonPressed);
        BroadcastSystem.OnHeadButtonPressed.RemoveListener(HeadButtonPressed);
        BroadcastSystem.OnEyeButtonPressed.RemoveListener(EyeButtonPressed);
        BroadcastSystem.OnEarButtonPressed.RemoveListener(EarButtonPressed);
        BroadcastSystem.OnBodyButtonPressed.RemoveListener(BodyButtonPressed);
        BroadcastSystem.OnManeButtonPressed.RemoveListener(ManeButtonPressed);
        BroadcastSystem.OnTailButtonPressed.RemoveListener(TailButtonPressed);
        BroadcastSystem.OnMenuBodyPartButtonPressed.RemoveListener(menuBodyPartButtonPressed);
        BroadcastSystem.AugmentInstallComplete.RemoveListener(AugmentInstallationComplete);
    }

    private void GetPetBodyParts()
    {
        eye = GameObject.FindGameObjectWithTag("Eye").transform;
        ear = GameObject.FindGameObjectWithTag("Ear").transform;
        mane = GameObject.FindGameObjectWithTag("Mane").transform;
        tail = GameObject.FindGameObjectWithTag("Tail").transform;
    }

    private void InitializePetState()
    {
        Transform[] targetParts = {eye, ear, mane, tail};
        foreach (Transform bodyPart in targetParts)
        {
            for (int i = 0; i < bodyPart.childCount; i++)
            {
                if (bodyPart.GetChild(i).gameObject.activeSelf)
                {
                    petState.Add(bodyPart.tag,i);
                }
            }
        }
    }

    private void SwitchHUDElements(GameObject element,bool status)
    {
        element.SetActive(status);
    }

    private void DestroyMenuItemsContent()
    {
        foreach (Transform child in menuItemsContentObject.transform)
        {
            Destroy(child.gameObject);
        }
    }

    private Transform GetFocusedPart()
    {
        if (currentState == State.Eye)
        {
            return eye;
        }
        else if (currentState == State.Ear)
        {
            return ear;
        }
        else if (currentState == State.Mane)
        {
            return mane;
        }
        else if (currentState == State.Tail)
        {
            return tail;
        }
        else
        {
            return null;
        }
    }

    private void PopulateMenuItemsContent()
    {   
        
        int[] agility = {5,3,1};
        int index = 0;
        Transform focusedPart = GetFocusedPart();
        if (focusedPart)
        {
            foreach (Transform child in focusedPart)
            {
                if (focusedPart.tag == "Ear")
                {
                    GameObject newButton = Instantiate(menuItemReferenceButton, menuItemsContentObject.transform);
                    TMP_Text stats = newButton.transform.GetChild(0).gameObject.GetComponent<TMP_Text>();
                    Image icon = newButton.transform.GetChild(2).gameObject.GetComponent<Image>();
                    
                    stats.text = "+" + agility[index];
                    icon.sprite = beforeEarIcons[index];
                    
                    index++;
                }
                else
                {
                    GameObject newButton = Instantiate(menuItemReferenceButton, menuItemsContentObject.transform);
                }

            }
        }
    }

    private void ResetPetState()
    {
        Transform[] targetParts = {eye, ear, mane, tail};
        foreach (Transform bodyPart in targetParts)
        {  
            for (int i = 0; i < bodyPart.childCount; i++)
            {
                if (i != petState[bodyPart.gameObject.tag])
                {
                    bodyPart.GetChild(i).gameObject.SetActive(false);
                }
                else
                {
                    bodyPart.GetChild(i).gameObject.SetActive(true);
                }
            }
        }
    }

    private void UpdatePetState()
    {
        Transform[] targetParts = {eye, ear, mane, tail};
        foreach (Transform bodyPart in targetParts)
        {
            for (int i = 0; i < bodyPart.childCount; i++)
            {
                if (bodyPart.GetChild(i).gameObject.activeSelf)
                {
                    petState[bodyPart.gameObject.tag] = i;
                }
            }
        }
    }

    private void RollBackState()
    {
        if (currentState == State.Head)
        {
            currentState = State.FullBody;
            PetRig.Instance.ZoomBackFromHead();
        }
        else if (currentState == State.Body)
        {
            currentState = State.FullBody;
            PetRig.Instance.ZoomBackFromBody();
        }
        else if (currentState == State.Eye)
        {
            currentState = State.Head;
            PetRig.Instance.ZoomBackFromEye();
        }
        else if (currentState == State.Ear)
        {
            currentState = State.Head;
            PetRig.Instance.ZoomBackFromEar();
        }
        else if (currentState == State.Mane)
        {
            currentState = State.Body;
            PetRig.Instance.ZoomBackFromMane();
        }
        else if (currentState == State.Tail)
        {
            currentState = State.Body;
            PetRig.Instance.ZoomBackFromTail();
        }
        else
        {
            //trigger event to roll back to previous scene. exit augmentation
        }
    }
    #endregion

    #region ButtonEventListener

    public void BackButtonPressed()
    {
        if (PetRig.Instance.isBlendComplete)
        {
            if (readyToInstall)
            {
                readyToInstall = false;
                PopulateMenuItemsContent();
                SwitchHUDElements(augmentInstallationSlider,false);
                ResetPetState();
                BroadcastSystem.AugmentReadyForInstall?.Invoke();
            
                return;

            }
            else if (eligibleMenuCanvasActivationState.Contains(currentState))
            {
                DestroyMenuItemsContent();
            
            }
            RollBackState();
        }

        
    }

    public void HeadButtonPressed()
    {
        PetRig.Instance.ZoomToHead();
        currentState = State.Head;
    }

    public void EyeButtonPressed()
    {
        PetRig.Instance.ZoomToEye();
        currentState = State.Eye;
        PopulateMenuItemsContent();
        
    }

    public void EarButtonPressed()
    {
        PetRig.Instance.ZoomToEar();
        currentState = State.Ear;
        PopulateMenuItemsContent();
        
    }

    public void BodyButtonPressed()
    {
        PetRig.Instance.ZoomToBody();
        currentState = State.Body;
    }

    public void ManeButtonPressed()
    {
        PetRig.Instance.ZoomToMane();
        currentState = State.Mane;
        PopulateMenuItemsContent();
        
    }

    public void TailButtonPressed()
    {
        PetRig.Instance.ZoomToTail();
        currentState = State.Tail;
        PopulateMenuItemsContent();
        
    }

    public void menuBodyPartButtonPressed(PartSwitchButton buttonPrefab)
    {
        Transform parent = GetFocusedPart();
        int buttonIndex = buttonPrefab.index;
        GameObject selectedButton = buttonPrefab.buttonPrefab;
        
        if (buttonIndex == petState[parent.tag])
        {
            return;
        }
        parent.GetChild(buttonIndex).gameObject.SetActive(true);
        parent.GetChild(petState[parent.tag]).gameObject.SetActive(false);
        
        DestroyMenuItemsContent();
        SwitchHUDElements(augmentInstallationSlider,true);
        readyToInstall = true;
        
        buttonSliderStats.GetComponent<TMP_Text>().text = selectedButton.transform.GetChild(0).GetComponent<TMP_Text>().text;
        buttonSliderIcon.GetComponent<Image>().sprite = readyEarIcons[buttonPrefab.index];
        
        BroadcastSystem.AugmentReadyForInstall?.Invoke();

    }

    public void AugmentInstallationComplete()
    {
        PetRig.Instance.ZoomOut();
        SwitchHUDElements(augmentInstallationSlider,false);
        currentState = State.FullBody;
        UpdatePetState();
        readyToInstall = false;
    }
    
    #endregion
    
    #region UnityLifeCycle
    private void Start()
    {
        SubscribeToEvents();
        currentState = State.FullBody;
        GetPetBodyParts();
        PetRig.Instance.InitialSetup();
        PetRig.Instance.AttachToPet(petTransform);
     
        SwitchHUDElements(augmentInstallationSlider,false);
        
        petState = new Dictionary<string, int>();
        
        eligibleMenuCanvasActivationState = new State[4];
        eligibleMenuCanvasActivationState[0] = State.Eye;
        eligibleMenuCanvasActivationState[1] = State.Ear;
        eligibleMenuCanvasActivationState[2] = State.Mane;
        eligibleMenuCanvasActivationState[3] = State.Tail;
        
        InitializePetState();

    }

    private void OnDisable()
    {
        UnsubscribeToEvents();
    }

    #endregion
}
