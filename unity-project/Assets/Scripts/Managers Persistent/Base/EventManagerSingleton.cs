using System;
using UnityEngine;
using UnityEngine.Events;
using UtilityCode.CodeLibrary.Utilities;

namespace Managers_Persistent
{
    /// <summary>
    /// Central custom in game events handler, all the events are to be created here as PUBLIC will then be subscribable by any and all
    /// gameobjects, i.e can act like a central communication hub
    /// <para>Shahryar Saqib</para>
    /// </summary>
    public abstract class EventManagerSingleton : UnitySingletonPersistent<EventManagerSingleton>
    {
    }

    [Serializable]
    public class UnityEventInt : UnityEvent<int>
    {
    }

    [Serializable]
    public class UnityEventFloat : UnityEvent<float>
    {
    }

    [Serializable]
    public class UnityEventString : UnityEvent<string>
    {
    }

    [Serializable]
    public class UnityEventBool : UnityEvent<bool>
    {
    }

    [Serializable]
    public class UnityEventVector3 : UnityEvent<Vector3>
    {
    }

    [Serializable]
    public class UnityEventVector2 : UnityEvent<Vector2>
    {
    }

    [Serializable]
    public class UnityEventGameObject : UnityEvent<GameObject>
    {
    }

    [Serializable]
    public class UnityEventQuaternion : UnityEvent<Quaternion>
    {
    }

    [Serializable]
    public class UnityEventTransform : UnityEvent<Transform>
    {
    }

    [Serializable]
    public class UnityEventColor : UnityEvent<Color>
    {
    }

    [Serializable]
    public class UnityEventTexture2D : UnityEvent<Texture2D>
    {
    }

    [Serializable]
    public class UnityEventAudioClip : UnityEvent<AudioClip>
    {
    }
    
    [Serializable]
    public class UnityEventPartSwitchButton : UnityEvent<PartSwitchButton>
    {
        
    }
    
    [Serializable]
    public class PartSwitchButton
    {
        public int index;
        public GameObject buttonPrefab;

        public PartSwitchButton(int __index, GameObject __buttonPrefab )
        {
            index = __index;
            buttonPrefab = __buttonPrefab;
        }
    }
}