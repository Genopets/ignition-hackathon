

using System.IO;
using System.Xml.Serialization;
using UnityEngine;

namespace UtilityCode.CodeLibrary.Extensions.ExtensionsInSaperateFiles
{
	public static class AssortedExtensions
	{
		/// <summary>
		/// Turns setactive False first object and true the second object, useful usually in UI cases where one panel or icon needs to be replaced with the other
		/// </summary>
		/// <param name="_obj"></param> 
		/// <param name="obj"></param> 
		public static void ReplaceGameObjectWIthOther(this GameObject _obj, GameObject obj)
		{
			_obj.SetActive(false);
			obj.SetActive(true);
		}

		public static void SetActiveFalse(this GameObject _obj)
		{
			_obj.SetActive(false);
		}

		public static void SetActiveTrue(this GameObject _obj)
		{
			_obj.SetActive(true);
		}

		public static void ChangePositionOnOnlyOneAxis(this Transform trans, float value, Axis axis = Axis.x)
		{
			Vector3 position = trans.position;
			if (axis == Axis.x)
				position.x = value;
			else if (axis == Axis.y)
				position.y = value;
			else
				position.z = value;

			trans.position = position;
		}

		public static void TakeSamePositionAs(this Transform trans, Transform trans2)
		{
			trans.position = trans2.position;
		}

		public static void ChangePositionOnAllAxisExcept(this Transform trans,
		                                                 Vector3        position,
		                                                 Axis           ignoreAxis = Axis.x)
		{
			if (ignoreAxis == Axis.x)
				position.x = trans.position.x;
			else if (ignoreAxis == Axis.y)
				position.y = trans.position.y;
			else
				position.z = trans.position.z;
			trans.position = position;
		}

		/// <summary>
		/// Line Point form Equation of Line.
		/// Slope Formula for equation of Line y=mx+b , m=y-y1 / x-x1, b=y-mx m=tan0
		/// </summary>
		public static Vector3 LinePoint(Vector2 first, Vector2 second, float y, float z)
		{
			Vector3 vect      = Vector3.zero;
			float   changeInX = (second.x - first.x);
			float   changeInY = (second.y - first.y);
			if (changeInX == 0)
				changeInX = 1;
			float m = changeInY / changeInX;
			if (m == 0)
				m = 1;
			float b = second.y - (second.x) * m;
			vect.y = y;
			vect.z = z;
			vect.x = (z - b) / m;
			return vect;
		}

		public static Vector3 DirFromAngle(float angleInDegrees)
		{
			return new Vector3(Mathf.Sin(angleInDegrees * Mathf.Deg2Rad), 0, Mathf.Cos(angleInDegrees * Mathf.Deg2Rad));
		}

		public static Vector3 DirFromAngle(float angleInDegrees, Axis axis)
		{
			if (axis == Axis.x)
				return new Vector3(Mathf.Sin(angleInDegrees * Mathf.Deg2Rad), 0, 0);
			else if (axis == Axis.y)
				return new
					Vector3(0, Mathf.Sin(angleInDegrees * Mathf.Deg2Rad) / Mathf.Cos(angleInDegrees * Mathf.Deg2Rad),
					        0);
			else
				return new Vector3(0, 0, Mathf.Cos(angleInDegrees * Mathf.Deg2Rad));
		}

		public static bool PointExistsInsideSquareBounds(Vector3 center, float width, float height, Vector3 target)
		{
			Vector3 corner = new Vector3() {x = center.x - (width / 2), z = center.x - (height / 2)};
			if (target.x < corner.x + width && target.x > corner.x && target.z < corner.z + width &&
			    target.z > corner.z)
				return true;
			return false;
		}

		public static bool IsTargetTransformWithinForwardArc(this Transform trans, Transform target, float angle)
		{
			Vector3 dirToTarget = (target.position - trans.position).normalized;
			if (Vector3.Angle(trans.forward, dirToTarget) < angle / 2)
			{
				return true;
			}

			return false;
		}

		public static void CopyTransformValuesFrom(this Transform trans, Transform values, bool isLocal = false)
		{
			if (isLocal)
			{
				trans.localPosition    = values.localPosition;
				trans.localEulerAngles = values.localEulerAngles;
			}
			else
			{
				trans.position    = values.position;
				trans.eulerAngles = values.eulerAngles;
			}
		}


		// Returns an angle valued clamped as [-180 .. +180]

		public static float ClampAngle(float angle)
		{
			angle = angle % 360.0f;
			if (angle > 180.0f)
				angle -= 360.0f;
			return angle;
		}


		// Returns an angle valued clamped as [0 .. +360] suitable for Mathf.LerpAngle

		public static float ClampAngle360(float angle)
		{
			angle = angle % 360.0f;
			if (angle < 0.0f)
				angle += 360.0f;
			return angle;
		}


		// Draws a debug crossmark at the given position using the given transform for orientation

		public static void DrawCrossMark(Vector3 pos, Transform trans, Color col, float length = 0.1f)
		{
			length *= 0.5f;

			Vector3 F = trans.forward * length;
			Vector3 U = trans.up      * length;
			Vector3 R = trans.right   * length;

			Debug.DrawLine(pos - F, pos + F, col);
			Debug.DrawLine(pos - U, pos + U, col);
			Debug.DrawLine(pos - R, pos + R, col);
		}


		// Converting linear to logaritmic values, useful for debug lines

		public static float Lin2Log(float val)
		{
			return Mathf.Log(Mathf.Abs(val) + 1) * Mathf.Sign(val);
		}

		public static Vector3 Lin2Log(Vector3 val)
		{
			return Vector3.ClampMagnitude(val, Lin2Log(val.magnitude));
		}


		// Method for cloning serializable classes
		// Usage: someClass = CommonTools.CloneObject(classToBeCloned);
		//
		// Source: http://stackoverflow.com/questions/78536/deep-cloning-objects
		//
		// Edy: Modified for using XmlSerializer instead of BinaryFormatter, which
		// seems to support basic types only.

		public static T CloneObject<T>(T source)
		{
			#if NETFX_CORE
        if (!typeof(T).GetTypeInfo().IsSerializable)
			#else
			if (!typeof(T).IsSerializable)
				#endif
				throw new System.ArgumentException("The type must be serializable.", "source");

			// Don't serialize a null object, simply return the default for that object
			if (Object.ReferenceEquals(source, null))
				return default(T);

			XmlSerializer serializer = new XmlSerializer(typeof(T));
			Stream        stream     = new MemoryStream();
			using (stream)
			{
				serializer.Serialize(stream, source);
				stream.Seek(0, SeekOrigin.Begin);
				return (T) serializer.Deserialize(stream);
			}
		}


		// Unclamped Lerp methods


		public static float FastLerp(float from, float to, float t)
		{
			return from + (to - from) * t;
		}


		public static float LinearLerp(float x0, float y0, float x1, float y1, float x)
		{
			return y0 + (x - x0) * (y1 - y0) / (x1 - x0);
		}


		public static float LinearLerp(Vector2 from, Vector2 to, float t)
		{
			return LinearLerp(from.x, from.y, to.x, to.y, t);
		}


		public static float CubicLerp(float x0, float y0, float x1, float y1, float x)
		{
			// Hermite-based cubic polinomial function (spline) with horizontal tangents (0)
			//
			// h1(t) =  2*t3 - 3*t2 + 1;	-> start point
			// h2(t) = -2*t3 + 3*t2;		-> end point

			float t  = (x - x0) / (x1 - x0);
			float t2 = t        * t;
			float t3 = t        * t2;

			return y0 * (2 * t3 - 3 * t2 + 1) + y1 * (-2 * t3 + 3 * t2);
		}


		public static float CubicLerp(Vector2 from, Vector2 to, float t)
		{
			return CubicLerp(from.x, from.y, to.x, to.y, t);
		}


		// Smooth interpolation with simplified tangent adjustment


		public static float TangentLerp(float x0, float y0, float x1, float y1, float a, float b, float x)
		{
			float h   = y1 - y0;
			float tg0 = 3.0f * h * a;
			float tg1 = 3.0f * h * b;

			// Hermite-based cubic polinomial function (spline)
			//
			// h1(t) =  2*t3 - 3*t2 + 1;	-> start point
			// h2(t) = -2*t3 + 3*t2;		-> end point
			// h3(t) =    t3 - 2*t2 + t;	-> start tangent
			// h4(t) =    t3 - t2;			-> end tangent

			float t  = (x - x0) / (x1 - x0);
			float t2 = t        * t;
			float t3 = t        * t2;

			return y0 * (2 * t3 - 3 * t2 + 1) + y1 * (-2 * t3 + 3 * t2) + tg0 * (t3 - 2 * t2 + t) + tg1 * (t3 - t2);
		}


		public static float TangentLerp(Vector2 from, Vector2 to, float a, float b, float t)
		{
			return TangentLerp(from.x, from.y, to.x, to.y, a, b, t);
		}


		// Hermite interpolation with full control on tangents


		public static float HermiteLerp(float x0,
		                                float y0,
		                                float x1,
		                                float y1,
		                                float outTangent,
		                                float inTangent,
		                                float x)
		{
			// Hermite-based cubic polinomial function (spline)
			//
			// h1(t) =  2*t3 - 3*t2 + 1;	-> start point
			// h2(t) = -2*t3 + 3*t2;		-> end point
			// h3(t) =    t3 - 2*t2 + t;	-> start tangent
			// h4(t) =    t3 - t2;			-> end tangent

			float t  = (x - x0) / (x1 - x0);
			float t2 = t        * t;
			float t3 = t        * t2;

			return y0        * (2 * t3 - 3 * t2 + 1) + y1 * (-2 * t3 + 3 * t2) + outTangent * (t3 - 2 * t2 + t) +
			       inTangent * (t3              - t2);
		}


		// Generic biased lerp with optional context optimization:
		//
		// 	BiasedLerp(x, bias)				generic unoptimized
		//	BiasedLerp(x, bias, context)	optimized for bias which changes unfrequently


		public class BiasLerpContext
		{
			public float lastBias     = -1.0f;
			public float lastExponent = 0.0f;
		}


		static float BiasWithContext(float x, float bias, BiasLerpContext context)
		{
			if (x <= 0.0f)
				return 0.0f;
			if (x >= 1.0f)
				return 1.0f;

			if (bias != context.lastBias)
			{
				if (bias <= 0.0f)
					return x >= 1.0f ? 1.0f : 0.0f;
				else if (bias >= 1.0f)
					return x > 0.0f ? 1.0f : 0.0f;
				else if (bias == 0.5f)
					return x;

				context.lastExponent = Mathf.Log(bias) * -1.4427f;
				context.lastBias     = bias;
			}

			return Mathf.Pow(x, context.lastExponent);
		}


		static float BiasRaw(float x, float bias)
		{
			if (x <= 0.0f)
				return 0.0f;
			if (x >= 1.0f)
				return 1.0f;

			if (bias <= 0.0f)
				return x >= 1.0f ? 1.0f : 0.0f;
			else if (bias >= 1.0f)
				return x > 0.0f ? 1.0f : 0.0f;
			else if (bias == 0.5f)
				return x;

			float exponent = Mathf.Log(bias) * -1.4427f;
			return Mathf.Pow(x, exponent);
		}


		public static float BiasedLerp(float x, float bias)
		{
			float result = bias <= 0.5f
				               ? BiasRaw(Mathf.Abs(x), bias)
				               : 1.0f - BiasRaw(1.0f - Mathf.Abs(x), 1.0f - bias);

			return x < 0.0f ? -result : result;
		}


		public static float BiasedLerp(float x, float bias, BiasLerpContext context)
		{
			float result = bias <= 0.5f
				               ? BiasWithContext(Mathf.Abs(x), bias, context)
				               : 1.0f - BiasWithContext(1.0f - Mathf.Abs(x), 1.0f - bias, context);

			return x < 0.0f ? -result : result;
		}
	}

	public enum Axis
	{
		x,
		y,
		z
	}
}