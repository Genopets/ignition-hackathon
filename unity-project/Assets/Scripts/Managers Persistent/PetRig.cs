using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Transactions;
using Cinemachine;
using UnityEngine;
using UtilityCode.CodeLibrary.Utilities;

public class PetRig : UnitySingletonPersistent<PetRig>
{

    #region GeneralVars

    [Header("Canvas and Camera Parent Rig")]
    public GameObject cameraRig;
    public GameObject canvasRig;
    
    [Header("VirtualCameras")] 
    public CinemachineVirtualCamera fullBodyCamera;
    public CinemachineVirtualCamera headCamera;
    public CinemachineVirtualCamera eyeCamera;
    public CinemachineVirtualCamera earCamera;
    public CinemachineVirtualCamera bodyCamera;
    public CinemachineVirtualCamera maneCamera;
    public CinemachineVirtualCamera tailCamera;

    [Header("Canvas")] 
    public GameObject fullBodyCanvas;
    public GameObject headCanvas;
    public GameObject eyeCanvas;
    public GameObject earCanvas;
    public GameObject bodyCanvas;
    public GameObject maneCanvas;
    public GameObject tailCanvas;

    [Header("CameraBlendDelay")] 
    public float cameraBlendDelay;
    
    public bool isBlendComplete = false;
    
    #endregion
    
    #region CoRoutines

    private IEnumerator TurnCanvasOnWithDelay(GameObject Canvas, float delay)
    {
        isBlendComplete = false;
        yield return new WaitForSeconds(delay);
        Canvas.SetActive(true);
        isBlendComplete = true;
    }
    
    #endregion
    #region HelperFunctions

    public void AttachToPet(Transform Pet)
    {
        transform.position = Pet.position;
    }

    public void InitialSetup()
    {
        headCamera.Priority = 0;
        eyeCamera.Priority = 0;
        earCamera.Priority = 0;
        bodyCamera.Priority = 0;
        maneCamera.Priority = 0;
        tailCamera.Priority = 0;
        
        headCanvas.SetActive(false);
        eyeCanvas.SetActive(false);
        earCanvas.SetActive(false);
        bodyCanvas.SetActive(false);
        maneCanvas.SetActive(false);
        tailCanvas.SetActive(false);

        fullBodyCamera.Priority = 1;
        fullBodyCanvas.SetActive(true);
    }

    private void TurnOnFullBodyCanvasWithDelay()
    {
        
        fullBodyCanvas.SetActive(true);
    }
    
    private void Zoom(CinemachineVirtualCamera from, CinemachineVirtualCamera to)
    {
        from.Priority = 0;
        to.Priority = 1;
    }

    private void SwitchCanvas(GameObject from, GameObject to, float cameraBlendDelay)
    {
        from.SetActive(false);
        StartCoroutine(TurnCanvasOnWithDelay(to, cameraBlendDelay));
    }

    public void ZoomToHead()
    {
        Zoom(fullBodyCamera,headCamera);
        SwitchCanvas(fullBodyCanvas,headCanvas,cameraBlendDelay);
        
    }

    public void ZoomBackFromHead()
    {
        Zoom(headCamera,fullBodyCamera);
        SwitchCanvas(headCanvas,fullBodyCanvas, cameraBlendDelay);
    }

    public void ZoomToEye()
    {
        Zoom(headCamera,eyeCamera);
        SwitchCanvas(headCanvas,eyeCanvas,cameraBlendDelay);
    }

    public void ZoomBackFromEye()
    {
        Zoom(eyeCamera,headCamera);
        SwitchCanvas(eyeCanvas,headCanvas,cameraBlendDelay);
    }

    public void ZoomToEar()
    {
        Zoom(headCamera, earCamera);
        SwitchCanvas(headCanvas,earCanvas,cameraBlendDelay);
    }

    public void ZoomBackFromEar()
    {
        Zoom(earCamera,headCamera);
        SwitchCanvas(earCanvas,headCanvas,cameraBlendDelay);
    }

    public void ZoomToBody()
    {
        Zoom(fullBodyCamera, bodyCamera);
        SwitchCanvas(fullBodyCanvas, bodyCanvas,cameraBlendDelay);
    }

    public void ZoomBackFromBody()
    {
        Zoom(bodyCamera,fullBodyCamera);
        SwitchCanvas(bodyCanvas,fullBodyCanvas,cameraBlendDelay);
    }

    public void ZoomToMane()
    {
        Zoom(bodyCamera, maneCamera);
        SwitchCanvas(bodyCanvas,maneCanvas,cameraBlendDelay);
    }

    public void ZoomBackFromMane()
    {
        Zoom(maneCamera,bodyCamera);
        SwitchCanvas(maneCanvas,bodyCanvas,cameraBlendDelay);
    }

    public void ZoomToTail()
    {
        Zoom(bodyCamera,tailCamera);
        SwitchCanvas(bodyCanvas,tailCanvas,cameraBlendDelay);
    }

    public void ZoomBackFromTail()
    {
        Zoom(tailCamera,bodyCamera);
        SwitchCanvas(tailCanvas,bodyCanvas,cameraBlendDelay);
    }

    public void ZoomOut()
    {
        headCamera.Priority = 0;
        eyeCamera.Priority = 0;
        earCamera.Priority = 0;
        bodyCamera.Priority = 0;
        maneCamera.Priority = 0;
        tailCamera.Priority = 0;
        
        headCanvas.SetActive(false);
        eyeCanvas.SetActive(false);
        earCanvas.SetActive(false);
        bodyCanvas.SetActive(false);
        maneCanvas.SetActive(false);
        tailCanvas.SetActive(false);
        
        fullBodyCamera.Priority = 1;
        Invoke("TurnOnFullBodyCanvasWithDelay",cameraBlendDelay);
        
    }
    #endregion
}
