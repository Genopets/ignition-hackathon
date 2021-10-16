

using System;
using UnityEngine;

namespace UtilityCode.CodeLibrary.Extensions.ExtensionsInSaperateFiles
{

	public static class TransformExtensions
	{

		/// <summary>
		/// Assumes Up of your sprite is your forward
		/// </summary>
		/// <param name="self"></param>
		/// <param name="targetTransform"></param>
		public static void Rotate2DTransformTowardsTransform (
			this Transform self
		  , Transform      targetTransform , float angleOffset
		)
		{
			var direction = ( targetTransform.position - self.position ).normalized ;
			self.Rotate2DTransformTowardsDirection( direction ,  angleOffset) ;
		}

		/// <summary>
		/// Assumes Up of your sprite is your forward
		/// </summary>
		/// <param name="self"></param>
		/// <param name="direction"></param>
		public static void Rotate2DTransformTowardsDirection (
			this Transform self
		  , Vector2        direction , float angleOffset
		)
		{
			float angle = Mathf.Atan2( direction.y , direction.x ) * Mathf.Rad2Deg - angleOffset ; // because the code assumes world right to be the default Forward of your sprite
			self.rotation = Quaternion.AngleAxis( angle , Vector3.forward ) ;
		}
		/// <summary>
		/// Assumes Up of your sprite is your forward
		/// </summary>
		/// <param name="self"></param>
		/// <param name="direction"></param>
		public static void Rotate2DTransformTowardsDirection (
			this Transform self
			, Vector2      direction 
		)
		{
			float angle = Mathf.Atan2( direction.y , direction.x ) * Mathf.Rad2Deg - 90 ; // because the code assumes world right to be the default Forward of your sprite
			self.rotation = Quaternion.AngleAxis( angle , Vector3.forward ) ;
		}

		/// <summary>
		/// Look at a GameObject
		/// </summary>
		/// <param name="self"></param>
		/// <param name="target">The thing to look at</param>
		public static void LookAt (
			this Transform self
		  , GameObject     target
		)
		{
			self.LookAt( target.transform ) ;
		}

		/// <summary>
		/// Find the rotation to look at a Vector3
		/// </summary>
		/// <param name="self"></param>
		/// <param name="target">The thing to look at</param>
		/// <returns></returns>
		public static Quaternion GetLookAtRotation (
			this Transform self
		  , Vector3        target
		)
		{
			return Quaternion.LookRotation( target - self.position ) ;
		}

		/// <summary>
		/// Find the rotation to look at a Transform
		/// </summary>
		/// <param name="self"></param>
		/// <param name="target">The thing to look at</param>
		/// <returns></returns>
		public static Quaternion GetLookAtRotation (
			this Transform self
		  , Transform      target
		)
		{
			return GetLookAtRotation( self , target.position ) ;
		}

		/// <summary>
		/// Find the rotation to look at a GameObject
		/// </summary>
		/// <param name="self"></param>
		/// <param name="target">The thing to look at</param>
		/// <returns></returns>
		public static Quaternion GetLookAtRotation (
			this Transform self
		  , GameObject     target
		)
		{
			return GetLookAtRotation( self , target.transform.position ) ;
		}


		/// <summary>
		/// Instantly look away from a target Vector3
		/// </summary>
		/// <param name="self"></param>
		/// <param name="target">The thing to look away from</param>
		public static void LookAwayFrom (
			this Transform self
		  , Vector3        target
		)
		{
			self.rotation = GetLookAwayFromRotation( self , target ) ;
		}

		/// <summary>
		/// Instantly look away from a target transform
		/// </summary>
		/// <param name="self"></param>
		/// <param name="target">The thing to look away from</param>
		public static void LookAwayFrom (
			this Transform self
		  , Transform      target
		)
		{
			self.rotation = GetLookAwayFromRotation( self , target ) ;
		}

		/// <summary>
		/// Instantly look away from a target GameObject
		/// </summary>
		/// <param name="self"></param>
		/// <param name="target">The thing to look away from</param>
		public static void LookAwayFrom (
			this Transform self
		  , GameObject     target
		)
		{
			self.rotation = GetLookAwayFromRotation( self , target ) ;
		}


		/// <summary>
		/// Find the rotation to look away from a target Vector3
		/// </summary>
		/// <param name="self"></param>
		/// <param name="target">The thing to look away from</param>
		public static Quaternion GetLookAwayFromRotation (
			this Transform self
		  , Vector3        target
		)
		{
			return Quaternion.LookRotation( self.position - target ) ;
		}

		/// <summary>
		/// Find the rotation to look away from a target transform
		/// </summary>
		/// <param name="self"></param>
		/// <param name="target">The thing to look away from</param>
		public static Quaternion GetLookAwayFromRotation (
			this Transform self
		  , Transform      target
		)
		{
			return GetLookAwayFromRotation( self , target.position ) ;
		}

		/// <summary>
		/// Find the rotation to look away from a target GameObject
		/// </summary>
		/// <param name="self"></param>
		/// <param name="target">The thing to look away from</param>
		public static Quaternion GetLookAwayFromRotation (
			this Transform self
		  , GameObject     target
		)
		{
			return GetLookAwayFromRotation( self , target.transform.position ) ;
		}

		/// <summary>
		/// Makes the given game objects children of the transform.
		/// </summary>
		/// <param name="transform">Parent transform.</param>
		/// <param name="children">Game objects to make children.</param>
		public static void AddChildren (
			this Transform transform
		  , GameObject []  children
		)
		{
			Array.ForEach( children , child => child.transform.parent = transform ) ;
		}

		/// <summary>
		/// Makes the game objects of given components children of the transform.
		/// </summary>
		/// <param name="transform">Parent transform.</param>
		/// <param name="children">Components of game objects to make children.</param>
		public static void AddChildren (
			this Transform transform
		  , Component []   children
		)
		{
			Array.ForEach( children , child => child.transform.parent = transform ) ;
		}

		/// <summary>
		/// Sets the position of a transform's children to zero.
		/// </summary>
		/// <param name="transform">Parent transform.</param>
		/// <param name="recursive">Also reset ancestor positions?</param>
		public static void ResetChildPositions (
			this Transform transform
		  , bool           recursive = false
		)
		{
			foreach ( Transform child in transform )
			{
				child.position = Vector3.zero ;

				if ( recursive )
				{
					child.ResetChildPositions( recursive ) ;
				}
			}
		}

		/// <summary>
		/// Sets the layer of the transform's children.
		/// </summary>
		/// <param name="transform">Parent transform.</param>
		/// <param name="layerName">Name of layer.</param>
		/// <param name="recursive">Also set ancestor layers?</param>
		public static void SetChildLayers (
			this Transform transform
		  , string         layerName
		  , bool           recursive = false
		)
		{
			var layer = LayerMask.NameToLayer( layerName ) ;
			SetChildLayersHelper( transform , layer , recursive ) ;
		}

		static void SetChildLayersHelper (
			Transform transform
		  , int       layer
		  , bool      recursive
		)
		{
			foreach ( Transform child in transform )
			{
				child.gameObject.layer = layer ;

				if ( recursive )
				{
					SetChildLayersHelper( child , layer , recursive ) ;
				}
			}
		}

		/// <summary>
		/// Sets the x component of the transform's position.
		/// </summary>
		/// <param name="x">Value of x.</param>
		public static void SetX (
			this Transform transform
		  , float          x
		)
		{
			transform.position = new Vector3( x , transform.position.y , transform.position.z ) ;
		}

		/// <summary>
		/// Sets the y component of the transform's position.
		/// </summary>
		/// <param name="y">Value of y.</param>
		public static void SetY (
			this Transform transform
		  , float          y
		)
		{
			transform.position = new Vector3( transform.position.x , y , transform.position.z ) ;
		}

		/// <summary>
		/// Sets the z component of the transform's position.
		/// </summary>
		/// <param name="z">Value of z.</param>
		public static void SetZ (
			this Transform transform
		  , float          z
		)
		{
			transform.position = new Vector3( transform.position.x , transform.position.y , z ) ;
		}

	}

}