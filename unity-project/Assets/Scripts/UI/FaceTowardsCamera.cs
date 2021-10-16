using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FaceTowardsCamera : MonoBehaviour
{
    #region UnityLifeCycle
    void Update()
    {
        transform.LookAt(transform.position + Camera.main.transform.forward);
    }
    
    #endregion
}
