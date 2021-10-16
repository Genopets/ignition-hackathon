using UnityEngine;

public class GameManager : SingletonMonoBehaviour<GameManager>
{
    // Start is called before the first frame update
    void Start()
    {
        // Add unity message manager to the gobal scene
        gameObject.AddComponent<UnityMessageManager>();
    }
}