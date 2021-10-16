using System;
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;

namespace UtilityCode.CodeLibrary.UI_Linking_System.Linkers
{
    [RequireComponent(typeof(TMP_Text))]
    public abstract class TmpTextLinker : MonoBehaviour
    {
        public TMP_Text textBox;

        protected virtual void Start()
        {
            textBox = GetComponent<TMP_Text>();
        }

        public void ChangeColor(Color newColor)
        {
            textBox.color = newColor;
        }
    }
}