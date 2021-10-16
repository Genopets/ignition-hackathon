using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class RingRotator : MonoBehaviour
{
    #region GeneralVars

    public Vector3 axis;
    public float speed;
    
    #endregion
    
    #region UnityLifeCycle

    private void Start()
    {
        transform.localRotation =  Quaternion.Euler(transform.localEulerAngles.x, transform.localEulerAngles.y, Random.Range(45,90));
    }

    void Update()
    {
        transform.Rotate(axis * speed * Time.deltaTime,Space.Self);
    }
    #endregion
}
