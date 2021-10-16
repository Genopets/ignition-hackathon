// GNU General Public License v3.0 Shahryar Saqib 
// Youtube: The Mannered Coder https://www.youtube.com/channel/UCGrnFZJWOB769Pirppb8Xog

using UnityEngine;

namespace UtilityCode.CodeLibrary.Utilities
{
	/// <summary>
	/// Persistent Version of the Singleton Class.V1.0
	/// <para>by Shahryar Saqib</para>
	/// </summary>
	/// <typeparam name="T">Pass the name of this class so a proper typed static instance is created</typeparam>
	public class UnitySingletonPersistent<T> : MonoBehaviour where T : Component
	{
		private static T instance;
		public static T Instance
		{
			get
			{
				if (instance == null)
				{
					instance = FindObjectOfType<T>();
					if (instance == null)
					{
						var obj = new GameObject();
						obj.name = typeof(T).Name;
						instance = obj.AddComponent<T>();
					}
				}

				return instance;
			}
		}

		public virtual void Awake()
		{
			DontDestroyOnLoad(gameObject);
			if (instance == null)
			{
				instance = this as T;
			}
			else
			{
				Destroy(gameObject);
			}
		}
	}
}