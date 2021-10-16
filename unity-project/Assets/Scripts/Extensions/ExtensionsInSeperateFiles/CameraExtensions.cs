using UnityEngine;

namespace UtilityCode.CodeLibrary.Extensions.ExtensionsInSaperateFiles
{
	public static class CameraExtensions
	{
		public static Bounds OrthographicBounds(this UnityEngine.Camera camera)
		{
			float screenAspect = (float)Screen.width     / (float)Screen.height;
			float cameraHeight = camera.orthographicSize * 2;
			Bounds bounds = new Bounds(
			                           camera.transform.position,
			                           new Vector3(cameraHeight * screenAspect, cameraHeight, 0));
			return bounds;
		}
	}
}