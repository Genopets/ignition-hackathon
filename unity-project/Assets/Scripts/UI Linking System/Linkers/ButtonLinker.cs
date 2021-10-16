using System;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

namespace UtilityCode.CodeLibrary.UI_Linking_System.Linkers
{
    [RequireComponent(typeof(Button))]
    public abstract class ButtonLinker : MonoBehaviour
    {
        [HideInInspector] public Button button;

        protected virtual void Start()
        {
            button = GetComponent<Button>();
            button.onClick.AddListener(OnClickCallback);
        }

        protected abstract void OnClickCallback();
    }
}