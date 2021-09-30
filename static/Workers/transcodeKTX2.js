define(["./when-7b580518","./Check-3917d765","./WebGLConstants-4e26b85a","./RuntimeError-fad4d3c6","./createTaskProcessorWorker"],function(s,_,t,S,R){"use strict";var A,e,T,O,n,B,G,M,C,K={UNSIGNED_BYTE:t.WebGLConstants.UNSIGNED_BYTE,UNSIGNED_SHORT:t.WebGLConstants.UNSIGNED_SHORT,UNSIGNED_INT:t.WebGLConstants.UNSIGNED_INT,FLOAT:t.WebGLConstants.FLOAT,HALF_FLOAT:t.WebGLConstants.HALF_FLOAT_OES,UNSIGNED_INT_24_8:t.WebGLConstants.UNSIGNED_INT_24_8,UNSIGNED_SHORT_4_4_4_4:t.WebGLConstants.UNSIGNED_SHORT_4_4_4_4,UNSIGNED_SHORT_5_5_5_1:t.WebGLConstants.UNSIGNED_SHORT_5_5_5_1,UNSIGNED_SHORT_5_6_5:t.WebGLConstants.UNSIGNED_SHORT_5_6_5,toWebGLConstant:function(_,R){switch(_){case K.UNSIGNED_BYTE:return t.WebGLConstants.UNSIGNED_BYTE;case K.UNSIGNED_SHORT:return t.WebGLConstants.UNSIGNED_SHORT;case K.UNSIGNED_INT:return t.WebGLConstants.UNSIGNED_INT;case K.FLOAT:return t.WebGLConstants.FLOAT;case K.HALF_FLOAT:return R.webgl2?t.WebGLConstants.HALF_FLOAT:t.WebGLConstants.HALF_FLOAT_OES;case K.UNSIGNED_INT_24_8:return t.WebGLConstants.UNSIGNED_INT_24_8;case K.UNSIGNED_SHORT_4_4_4_4:return t.WebGLConstants.UNSIGNED_SHORT_4_4_4_4;case K.UNSIGNED_SHORT_5_5_5_1:return t.WebGLConstants.UNSIGNED_SHORT_5_5_5_1;case K.UNSIGNED_SHORT_5_6_5:return K.UNSIGNED_SHORT_5_6_5}},isPacked:function(_){return _===K.UNSIGNED_INT_24_8||_===K.UNSIGNED_SHORT_4_4_4_4||_===K.UNSIGNED_SHORT_5_5_5_1||_===K.UNSIGNED_SHORT_5_6_5},sizeInBytes:function(_){switch(_){case K.UNSIGNED_BYTE:return 1;case K.UNSIGNED_SHORT:case K.UNSIGNED_SHORT_4_4_4_4:case K.UNSIGNED_SHORT_5_5_5_1:case K.UNSIGNED_SHORT_5_6_5:case K.HALF_FLOAT:return 2;case K.UNSIGNED_INT:case K.FLOAT:case K.UNSIGNED_INT_24_8:return 4}},validate:function(_){return _===K.UNSIGNED_BYTE||_===K.UNSIGNED_SHORT||_===K.UNSIGNED_INT||_===K.FLOAT||_===K.HALF_FLOAT||_===K.UNSIGNED_INT_24_8||_===K.UNSIGNED_SHORT_4_4_4_4||_===K.UNSIGNED_SHORT_5_5_5_1||_===K.UNSIGNED_SHORT_5_6_5}},r=Object.freeze(K),F={DEPTH_COMPONENT:t.WebGLConstants.DEPTH_COMPONENT,DEPTH_STENCIL:t.WebGLConstants.DEPTH_STENCIL,ALPHA:t.WebGLConstants.ALPHA,RGB:t.WebGLConstants.RGB,RGBA:t.WebGLConstants.RGBA,LUMINANCE:t.WebGLConstants.LUMINANCE,LUMINANCE_ALPHA:t.WebGLConstants.LUMINANCE_ALPHA,RGB_DXT1:t.WebGLConstants.COMPRESSED_RGB_S3TC_DXT1_EXT,RGBA_DXT1:t.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT1_EXT,RGBA_DXT3:t.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT3_EXT,RGBA_DXT5:t.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT5_EXT,RGB_PVRTC_4BPPV1:t.WebGLConstants.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,RGB_PVRTC_2BPPV1:t.WebGLConstants.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,RGBA_PVRTC_4BPPV1:t.WebGLConstants.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,RGBA_PVRTC_2BPPV1:t.WebGLConstants.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,RGBA_ASTC:t.WebGLConstants.COMPRESSED_RGBA_ASTC_4x4_WEBGL,RGB_ETC1:t.WebGLConstants.COMPRESSED_RGB_ETC1_WEBGL,RGB8_ETC2:t.WebGLConstants.COMPRESSED_RGB8_ETC2,RGBA8_ETC2_EAC:t.WebGLConstants.COMPRESSED_RGBA8_ETC2_EAC,RGBA_BC7:t.WebGLConstants.COMPRESSED_RGBA_BPTC_UNORM,componentsLength:function(_){switch(_){case F.RGB:return 3;case F.RGBA:return 4;case F.LUMINANCE_ALPHA:return 2;case F.ALPHA:case F.LUMINANCE:default:return 1}},validate:function(_){return _===F.DEPTH_COMPONENT||_===F.DEPTH_STENCIL||_===F.ALPHA||_===F.RGB||_===F.RGBA||_===F.LUMINANCE||_===F.LUMINANCE_ALPHA||_===F.RGB_DXT1||_===F.RGBA_DXT1||_===F.RGBA_DXT3||_===F.RGBA_DXT5||_===F.RGB_PVRTC_4BPPV1||_===F.RGB_PVRTC_2BPPV1||_===F.RGBA_PVRTC_4BPPV1||_===F.RGBA_PVRTC_2BPPV1||_===F.RGBA_ASTC||_===F.RGB_ETC1||_===F.RGB8_ETC2||_===F.RGBA8_ETC2_EAC||_===F.RGBA_BC7},isColorFormat:function(_){return _===F.ALPHA||_===F.RGB||_===F.RGBA||_===F.LUMINANCE||_===F.LUMINANCE_ALPHA},isDepthFormat:function(_){return _===F.DEPTH_COMPONENT||_===F.DEPTH_STENCIL},isCompressedFormat:function(_){return _===F.RGB_DXT1||_===F.RGBA_DXT1||_===F.RGBA_DXT3||_===F.RGBA_DXT5||_===F.RGB_PVRTC_4BPPV1||_===F.RGB_PVRTC_2BPPV1||_===F.RGBA_PVRTC_4BPPV1||_===F.RGBA_PVRTC_2BPPV1||_===F.RGBA_ASTC||_===F.RGB_ETC1||_===F.RGB8_ETC2||_===F.RGBA8_ETC2_EAC||_===F.RGBA_BC7},isDXTFormat:function(_){return _===F.RGB_DXT1||_===F.RGBA_DXT1||_===F.RGBA_DXT3||_===F.RGBA_DXT5},isPVRTCFormat:function(_){return _===F.RGB_PVRTC_4BPPV1||_===F.RGB_PVRTC_2BPPV1||_===F.RGBA_PVRTC_4BPPV1||_===F.RGBA_PVRTC_2BPPV1},isASTCFormat:function(_){return _===F.RGBA_ASTC},isETC1Format:function(_){return _===F.RGB_ETC1},isETC2Format:function(_){return _===F.RGB8_ETC2||_===F.RGBA8_ETC2_EAC},isBC7Format:function(_){return _===F.RGBA_BC7},compressedTextureSizeInBytes:function(_,R,A){switch(_){case F.RGB_DXT1:case F.RGBA_DXT1:case F.RGB_ETC1:case F.RGB8_ETC2:return Math.floor((R+3)/4)*Math.floor((A+3)/4)*8;case F.RGBA_DXT3:case F.RGBA_DXT5:case F.RGBA_ASTC:case F.RGBA8_ETC2_EAC:return Math.floor((R+3)/4)*Math.floor((A+3)/4)*16;case F.RGB_PVRTC_4BPPV1:case F.RGBA_PVRTC_4BPPV1:return Math.floor((Math.max(R,8)*Math.max(A,8)*4+7)/8);case F.RGB_PVRTC_2BPPV1:case F.RGBA_PVRTC_2BPPV1:return Math.floor((Math.max(R,16)*Math.max(A,8)*2+7)/8);case F.RGBA_BC7:return Math.ceil(R/4)*Math.ceil(A/4)*16;default:return 0}},textureSizeInBytes:function(_,R,A,t){_=F.componentsLength(_);return(_=r.isPacked(R)?1:_)*r.sizeInBytes(R)*A*t},alignmentInBytes:function(_,R,A){A=F.textureSizeInBytes(_,R,A,1)%4;return 0==A?4:2==A?2:1},createTypedArray:function(_,R,A,t){var e=r.sizeInBytes(R),R=e===Uint8Array.BYTES_PER_ELEMENT?Uint8Array:e===Uint16Array.BYTES_PER_ELEMENT?Uint16Array:e===Float32Array.BYTES_PER_ELEMENT&&R===r.FLOAT?Float32Array:Uint32Array;return new R(F.componentsLength(_)*A*t)},flipY:function(_,R,A,t,e){if(1===e)return _;for(var T=F.createTypedArray(R,A,t,e),O=F.componentsLength(R),n=t*O,B=0;B<e;++B)for(var G=B*t*O,M=(e-B-1)*t*O,C=0;C<n;++C)T[M+C]=_[G+C];return T},toInternalFormat:function(_,R,A){if(!A.webgl2)return _;if(_===F.DEPTH_STENCIL)return t.WebGLConstants.DEPTH24_STENCIL8;if(_===F.DEPTH_COMPONENT){if(R===r.UNSIGNED_SHORT)return t.WebGLConstants.DEPTH_COMPONENT16;if(R===r.UNSIGNED_INT)return t.WebGLConstants.DEPTH_COMPONENT24}if(R===r.FLOAT)switch(_){case F.RGBA:return t.WebGLConstants.RGBA32F;case F.RGB:return t.WebGLConstants.RGB32F;case F.RG:return t.WebGLConstants.RG32F;case F.R:return t.WebGLConstants.R32F}if(R===r.HALF_FLOAT)switch(_){case F.RGBA:return t.WebGLConstants.RGBA16F;case F.RGB:return t.WebGLConstants.RGB16F;case F.RG:return t.WebGLConstants.RG16F;case F.R:return t.WebGLConstants.R16F}return _}},i=Object.freeze(F),N=Object.freeze({VK_FORMAT_UNDEFINED:0,VK_FORMAT_R4G4_UNORM_PACK8:1,VK_FORMAT_R4G4B4A4_UNORM_PACK16:2,VK_FORMAT_B4G4R4A4_UNORM_PACK16:3,VK_FORMAT_R5G6B5_UNORM_PACK16:4,VK_FORMAT_B5G6R5_UNORM_PACK16:5,VK_FORMAT_R5G5B5A1_UNORM_PACK16:6,VK_FORMAT_B5G5R5A1_UNORM_PACK16:7,VK_FORMAT_A1R5G5B5_UNORM_PACK16:8,VK_FORMAT_R8_UNORM:9,VK_FORMAT_R8_SNORM:10,VK_FORMAT_R8_USCALED:11,VK_FORMAT_R8_SSCALED:12,VK_FORMAT_R8_UINT:13,VK_FORMAT_R8_SINT:14,VK_FORMAT_R8_SRGB:15,VK_FORMAT_R8G8_UNORM:16,VK_FORMAT_R8G8_SNORM:17,VK_FORMAT_R8G8_USCALED:18,VK_FORMAT_R8G8_SSCALED:19,VK_FORMAT_R8G8_UINT:20,VK_FORMAT_R8G8_SINT:21,VK_FORMAT_R8G8_SRGB:22,VK_FORMAT_R8G8B8_UNORM:23,VK_FORMAT_R8G8B8_SNORM:24,VK_FORMAT_R8G8B8_USCALED:25,VK_FORMAT_R8G8B8_SSCALED:26,VK_FORMAT_R8G8B8_UINT:27,VK_FORMAT_R8G8B8_SINT:28,VK_FORMAT_R8G8B8_SRGB:29,VK_FORMAT_B8G8R8_UNORM:30,VK_FORMAT_B8G8R8_SNORM:31,VK_FORMAT_B8G8R8_USCALED:32,VK_FORMAT_B8G8R8_SSCALED:33,VK_FORMAT_B8G8R8_UINT:34,VK_FORMAT_B8G8R8_SINT:35,VK_FORMAT_B8G8R8_SRGB:36,VK_FORMAT_R8G8B8A8_UNORM:37,VK_FORMAT_R8G8B8A8_SNORM:38,VK_FORMAT_R8G8B8A8_USCALED:39,VK_FORMAT_R8G8B8A8_SSCALED:40,VK_FORMAT_R8G8B8A8_UINT:41,VK_FORMAT_R8G8B8A8_SINT:42,VK_FORMAT_R8G8B8A8_SRGB:43,VK_FORMAT_B8G8R8A8_UNORM:44,VK_FORMAT_B8G8R8A8_SNORM:45,VK_FORMAT_B8G8R8A8_USCALED:46,VK_FORMAT_B8G8R8A8_SSCALED:47,VK_FORMAT_B8G8R8A8_UINT:48,VK_FORMAT_B8G8R8A8_SINT:49,VK_FORMAT_B8G8R8A8_SRGB:50,VK_FORMAT_A8B8G8R8_UNORM_PACK32:51,VK_FORMAT_A8B8G8R8_SNORM_PACK32:52,VK_FORMAT_A8B8G8R8_USCALED_PACK32:53,VK_FORMAT_A8B8G8R8_SSCALED_PACK32:54,VK_FORMAT_A8B8G8R8_UINT_PACK32:55,VK_FORMAT_A8B8G8R8_SINT_PACK32:56,VK_FORMAT_A8B8G8R8_SRGB_PACK32:57,VK_FORMAT_A2R10G10B10_UNORM_PACK32:58,VK_FORMAT_A2R10G10B10_SNORM_PACK32:59,VK_FORMAT_A2R10G10B10_USCALED_PACK32:60,VK_FORMAT_A2R10G10B10_SSCALED_PACK32:61,VK_FORMAT_A2R10G10B10_UINT_PACK32:62,VK_FORMAT_A2R10G10B10_SINT_PACK32:63,VK_FORMAT_A2B10G10R10_UNORM_PACK32:64,VK_FORMAT_A2B10G10R10_SNORM_PACK32:65,VK_FORMAT_A2B10G10R10_USCALED_PACK32:66,VK_FORMAT_A2B10G10R10_SSCALED_PACK32:67,VK_FORMAT_A2B10G10R10_UINT_PACK32:68,VK_FORMAT_A2B10G10R10_SINT_PACK32:69,VK_FORMAT_R16_UNORM:70,VK_FORMAT_R16_SNORM:71,VK_FORMAT_R16_USCALED:72,VK_FORMAT_R16_SSCALED:73,VK_FORMAT_R16_UINT:74,VK_FORMAT_R16_SINT:75,VK_FORMAT_R16_SFLOAT:76,VK_FORMAT_R16G16_UNORM:77,VK_FORMAT_R16G16_SNORM:78,VK_FORMAT_R16G16_USCALED:79,VK_FORMAT_R16G16_SSCALED:80,VK_FORMAT_R16G16_UINT:81,VK_FORMAT_R16G16_SINT:82,VK_FORMAT_R16G16_SFLOAT:83,VK_FORMAT_R16G16B16_UNORM:84,VK_FORMAT_R16G16B16_SNORM:85,VK_FORMAT_R16G16B16_USCALED:86,VK_FORMAT_R16G16B16_SSCALED:87,VK_FORMAT_R16G16B16_UINT:88,VK_FORMAT_R16G16B16_SINT:89,VK_FORMAT_R16G16B16_SFLOAT:90,VK_FORMAT_R16G16B16A16_UNORM:91,VK_FORMAT_R16G16B16A16_SNORM:92,VK_FORMAT_R16G16B16A16_USCALED:93,VK_FORMAT_R16G16B16A16_SSCALED:94,VK_FORMAT_R16G16B16A16_UINT:95,VK_FORMAT_R16G16B16A16_SINT:96,VK_FORMAT_R16G16B16A16_SFLOAT:97,VK_FORMAT_R32_UINT:98,VK_FORMAT_R32_SINT:99,VK_FORMAT_R32_SFLOAT:100,VK_FORMAT_R32G32_UINT:101,VK_FORMAT_R32G32_SINT:102,VK_FORMAT_R32G32_SFLOAT:103,VK_FORMAT_R32G32B32_UINT:104,VK_FORMAT_R32G32B32_SINT:105,VK_FORMAT_R32G32B32_SFLOAT:106,VK_FORMAT_R32G32B32A32_UINT:107,VK_FORMAT_R32G32B32A32_SINT:108,VK_FORMAT_R32G32B32A32_SFLOAT:109,VK_FORMAT_R64_UINT:110,VK_FORMAT_R64_SINT:111,VK_FORMAT_R64_SFLOAT:112,VK_FORMAT_R64G64_UINT:113,VK_FORMAT_R64G64_SINT:114,VK_FORMAT_R64G64_SFLOAT:115,VK_FORMAT_R64G64B64_UINT:116,VK_FORMAT_R64G64B64_SINT:117,VK_FORMAT_R64G64B64_SFLOAT:118,VK_FORMAT_R64G64B64A64_UINT:119,VK_FORMAT_R64G64B64A64_SINT:120,VK_FORMAT_R64G64B64A64_SFLOAT:121,VK_FORMAT_B10G11R11_UFLOAT_PACK32:122,VK_FORMAT_E5B9G9R9_UFLOAT_PACK32:123,VK_FORMAT_D16_UNORM:124,VK_FORMAT_X8_D24_UNORM_PACK32:125,VK_FORMAT_D32_SFLOAT:126,VK_FORMAT_S8_UINT:127,VK_FORMAT_D16_UNORM_S8_UINT:128,VK_FORMAT_D24_UNORM_S8_UINT:129,VK_FORMAT_D32_SFLOAT_S8_UINT:130,VK_FORMAT_BC1_RGB_UNORM_BLOCK:131,VK_FORMAT_BC1_RGB_SRGB_BLOCK:132,VK_FORMAT_BC1_RGBA_UNORM_BLOCK:133,VK_FORMAT_BC1_RGBA_SRGB_BLOCK:134,VK_FORMAT_BC2_UNORM_BLOCK:135,VK_FORMAT_BC2_SRGB_BLOCK:136,VK_FORMAT_BC3_UNORM_BLOCK:137,VK_FORMAT_BC3_SRGB_BLOCK:138,VK_FORMAT_BC4_UNORM_BLOCK:139,VK_FORMAT_BC4_SNORM_BLOCK:140,VK_FORMAT_BC5_UNORM_BLOCK:141,VK_FORMAT_BC5_SNORM_BLOCK:142,VK_FORMAT_BC6H_UFLOAT_BLOCK:143,VK_FORMAT_BC6H_SFLOAT_BLOCK:144,VK_FORMAT_BC7_UNORM_BLOCK:145,VK_FORMAT_BC7_SRGB_BLOCK:146,VK_FORMAT_ETC2_R8G8B8_UNORM_BLOCK:147,VK_FORMAT_ETC2_R8G8B8_SRGB_BLOCK:148,VK_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK:149,VK_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK:150,VK_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK:151,VK_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK:152,VK_FORMAT_EAC_R11_UNORM_BLOCK:153,VK_FORMAT_EAC_R11_SNORM_BLOCK:154,VK_FORMAT_EAC_R11G11_UNORM_BLOCK:155,VK_FORMAT_EAC_R11G11_SNORM_BLOCK:156,VK_FORMAT_ASTC_4x4_UNORM_BLOCK:157,VK_FORMAT_ASTC_4x4_SRGB_BLOCK:158,VK_FORMAT_ASTC_5x4_UNORM_BLOCK:159,VK_FORMAT_ASTC_5x4_SRGB_BLOCK:160,VK_FORMAT_ASTC_5x5_UNORM_BLOCK:161,VK_FORMAT_ASTC_5x5_SRGB_BLOCK:162,VK_FORMAT_ASTC_6x5_UNORM_BLOCK:163,VK_FORMAT_ASTC_6x5_SRGB_BLOCK:164,VK_FORMAT_ASTC_6x6_UNORM_BLOCK:165,VK_FORMAT_ASTC_6x6_SRGB_BLOCK:166,VK_FORMAT_ASTC_8x5_UNORM_BLOCK:167,VK_FORMAT_ASTC_8x5_SRGB_BLOCK:168,VK_FORMAT_ASTC_8x6_UNORM_BLOCK:169,VK_FORMAT_ASTC_8x6_SRGB_BLOCK:170,VK_FORMAT_ASTC_8x8_UNORM_BLOCK:171,VK_FORMAT_ASTC_8x8_SRGB_BLOCK:172,VK_FORMAT_ASTC_10x5_UNORM_BLOCK:173,VK_FORMAT_ASTC_10x5_SRGB_BLOCK:174,VK_FORMAT_ASTC_10x6_UNORM_BLOCK:175,VK_FORMAT_ASTC_10x6_SRGB_BLOCK:176,VK_FORMAT_ASTC_10x8_UNORM_BLOCK:177,VK_FORMAT_ASTC_10x8_SRGB_BLOCK:178,VK_FORMAT_ASTC_10x10_UNORM_BLOCK:179,VK_FORMAT_ASTC_10x10_SRGB_BLOCK:180,VK_FORMAT_ASTC_12x10_UNORM_BLOCK:181,VK_FORMAT_ASTC_12x10_SRGB_BLOCK:182,VK_FORMAT_ASTC_12x12_UNORM_BLOCK:183,VK_FORMAT_ASTC_12x12_SRGB_BLOCK:184,VK_FORMAT_G8B8G8R8_422_UNORM:1000156e3,VK_FORMAT_B8G8R8G8_422_UNORM:1000156001,VK_FORMAT_G8_B8_R8_3PLANE_420_UNORM:1000156002,VK_FORMAT_G8_B8R8_2PLANE_420_UNORM:1000156003,VK_FORMAT_G8_B8_R8_3PLANE_422_UNORM:1000156004,VK_FORMAT_G8_B8R8_2PLANE_422_UNORM:1000156005,VK_FORMAT_G8_B8_R8_3PLANE_444_UNORM:1000156006,VK_FORMAT_R10X6_UNORM_PACK16:1000156007,VK_FORMAT_R10X6G10X6_UNORM_2PACK16:1000156008,VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16:1000156009,VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16:1000156010,VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16:1000156011,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16:1000156012,VK_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16:1000156013,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16:1000156014,VK_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16:1000156015,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16:1000156016,VK_FORMAT_R12X4_UNORM_PACK16:1000156017,VK_FORMAT_R12X4G12X4_UNORM_2PACK16:1000156018,VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16:1000156019,VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16:1000156020,VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16:1000156021,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16:1000156022,VK_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16:1000156023,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16:1000156024,VK_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16:1000156025,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16:1000156026,VK_FORMAT_G16B16G16R16_422_UNORM:1000156027,VK_FORMAT_B16G16R16G16_422_UNORM:1000156028,VK_FORMAT_G16_B16_R16_3PLANE_420_UNORM:1000156029,VK_FORMAT_G16_B16R16_2PLANE_420_UNORM:1000156030,VK_FORMAT_G16_B16_R16_3PLANE_422_UNORM:1000156031,VK_FORMAT_G16_B16R16_2PLANE_422_UNORM:1000156032,VK_FORMAT_G16_B16_R16_3PLANE_444_UNORM:1000156033,VK_FORMAT_PVRTC1_2BPP_UNORM_BLOCK_IMG:1000054e3,VK_FORMAT_PVRTC1_4BPP_UNORM_BLOCK_IMG:1000054001,VK_FORMAT_PVRTC2_2BPP_UNORM_BLOCK_IMG:1000054002,VK_FORMAT_PVRTC2_4BPP_UNORM_BLOCK_IMG:1000054003,VK_FORMAT_PVRTC1_2BPP_SRGB_BLOCK_IMG:1000054004,VK_FORMAT_PVRTC1_4BPP_SRGB_BLOCK_IMG:1000054005,VK_FORMAT_PVRTC2_2BPP_SRGB_BLOCK_IMG:1000054006,VK_FORMAT_PVRTC2_4BPP_SRGB_BLOCK_IMG:1000054007,VK_FORMAT_ASTC_4x4_SFLOAT_BLOCK_EXT:1000066e3,VK_FORMAT_ASTC_5x4_SFLOAT_BLOCK_EXT:1000066001,VK_FORMAT_ASTC_5x5_SFLOAT_BLOCK_EXT:1000066002,VK_FORMAT_ASTC_6x5_SFLOAT_BLOCK_EXT:1000066003,VK_FORMAT_ASTC_6x6_SFLOAT_BLOCK_EXT:1000066004,VK_FORMAT_ASTC_8x5_SFLOAT_BLOCK_EXT:1000066005,VK_FORMAT_ASTC_8x6_SFLOAT_BLOCK_EXT:1000066006,VK_FORMAT_ASTC_8x8_SFLOAT_BLOCK_EXT:1000066007,VK_FORMAT_ASTC_10x5_SFLOAT_BLOCK_EXT:1000066008,VK_FORMAT_ASTC_10x6_SFLOAT_BLOCK_EXT:1000066009,VK_FORMAT_ASTC_10x8_SFLOAT_BLOCK_EXT:1000066010,VK_FORMAT_ASTC_10x10_SFLOAT_BLOCK_EXT:1000066011,VK_FORMAT_ASTC_12x10_SFLOAT_BLOCK_EXT:1000066012,VK_FORMAT_ASTC_12x12_SFLOAT_BLOCK_EXT:1000066013,VK_FORMAT_G8B8G8R8_422_UNORM_KHR:1000156e3,VK_FORMAT_B8G8R8G8_422_UNORM_KHR:1000156001,VK_FORMAT_G8_B8_R8_3PLANE_420_UNORM_KHR:1000156002,VK_FORMAT_G8_B8R8_2PLANE_420_UNORM_KHR:1000156003,VK_FORMAT_G8_B8_R8_3PLANE_422_UNORM_KHR:1000156004,VK_FORMAT_G8_B8R8_2PLANE_422_UNORM_KHR:1000156005,VK_FORMAT_G8_B8_R8_3PLANE_444_UNORM_KHR:1000156006,VK_FORMAT_R10X6_UNORM_PACK16_KHR:1000156007,VK_FORMAT_R10X6G10X6_UNORM_2PACK16_KHR:1000156008,VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16_KHR:1000156009,VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16_KHR:1000156010,VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16_KHR:1000156011,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16_KHR:1000156012,VK_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16_KHR:1000156013,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16_KHR:1000156014,VK_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16_KHR:1000156015,VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16_KHR:1000156016,VK_FORMAT_R12X4_UNORM_PACK16_KHR:1000156017,VK_FORMAT_R12X4G12X4_UNORM_2PACK16_KHR:1000156018,VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16_KHR:1000156019,VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16_KHR:1000156020,VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16_KHR:1000156021,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16_KHR:1000156022,VK_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16_KHR:1000156023,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16_KHR:1000156024,VK_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16_KHR:1000156025,VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16_KHR:1000156026,VK_FORMAT_G16B16G16R16_422_UNORM_KHR:1000156027,VK_FORMAT_B16G16R16G16_422_UNORM_KHR:1000156028,VK_FORMAT_G16_B16_R16_3PLANE_420_UNORM_KHR:1000156029,VK_FORMAT_G16_B16R16_2PLANE_420_UNORM_KHR:1000156030,VK_FORMAT_G16_B16_R16_3PLANE_422_UNORM_KHR:1000156031,VK_FORMAT_G16_B16R16_2PLANE_422_UNORM_KHR:1000156032,VK_FORMAT_G16_B16_R16_3PLANE_444_UNORM_KHR:1000156033});const X=[171,75,84,88,32,50,48,187,13,10,26,10];(C=A=A||{})[C.NONE=0]="NONE",C[C.BASISLZ=1]="BASISLZ",C[C.ZSTD=2]="ZSTD",C[C.ZLIB=3]="ZLIB",e=e||{},e[e.BASICFORMAT=0]="BASICFORMAT",(C=T=T||{})[C.UNSPECIFIED=0]="UNSPECIFIED",C[C.ETC1S=163]="ETC1S",C[C.UASTC=166]="UASTC",(C=O=O||{})[C.UNSPECIFIED=0]="UNSPECIFIED",C[C.SRGB=1]="SRGB",(M=M=M||{})[M.UNSPECIFIED=0]="UNSPECIFIED",M[M.LINEAR=1]="LINEAR",M[M.SRGB=2]="SRGB",M[M.ITU=3]="ITU",M[M.NTSC=4]="NTSC",M[M.SLOG=5]="SLOG",M[M.SLOG2=6]="SLOG2",(M=n=n||{})[M.ALPHA_STRAIGHT=0]="ALPHA_STRAIGHT",M[M.ALPHA_PREMULTIPLIED=1]="ALPHA_PREMULTIPLIED",(G=G=G||{})[G.RGB=0]="RGB",G[G.RRR=3]="RRR",G[G.GGG=4]="GGG",G[G.AAA=15]="AAA",(B=B=B||{})[B.RGB=0]="RGB",B[B.RGBA=3]="RGBA",B[B.RRR=4]="RRR",B[B.RRRG=5]="RRRG";class D{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=A.NONE,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:e.BASICFORMAT,versionNumber:2,descriptorBlockSize:40,colorModel:T.UNSPECIFIED,colorPrimaries:O.SRGB,transferFunction:O.SRGB,flags:n.ALPHA_STRAIGHT,texelBlockDimension:{x:4,y:4,z:1,w:1},bytesPlane:[],samples:[]}],this.keyValue={},this.globalData=null}}class l{constructor(_,R,A,t){this._dataView=new DataView(_.buffer,_.byteOffset+R,A),this._littleEndian=t,this._offset=0}_nextUint8(){var _=this._dataView.getUint8(this._offset);return this._offset+=1,_}_nextUint16(){var _=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,_}_nextUint32(){var _=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,_}_nextUint64(){var _=this._dataView.getUint32(this._offset,this._littleEndian)+2**32*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,_}_skip(_){return this._offset+=_,this}_scan(_,R=0){var A=this._offset;let t=0;for(;this._dataView.getUint8(this._offset)!==R&&t<_;)t++,this._offset++;return t<_&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+A,t)}}function u(_){return"undefined"!=typeof TextDecoder?(new TextDecoder).decode(_):Buffer.from(_).toString("utf8")}var V,a=["positiveX","negativeX","positiveY","negativeY","positiveZ","negativeZ"],U=163,E=166;function L(_,R){var A,t=_.ktx2Buffer,e=_.supportedTargetFormats;try{A=function(R){const _=new Uint8Array(R.buffer,R.byteOffset,X.length);if(_[0]!==X[0]||_[1]!==X[1]||_[2]!==X[2]||_[3]!==X[3]||_[4]!==X[4]||_[5]!==X[5]||_[6]!==X[6]||_[7]!==X[7]||_[8]!==X[8]||_[9]!==X[9]||_[10]!==X[10]||_[11]!==X[11])throw new Error("Missing KTX 2.0 identifier.");const A=new D,t=17*Uint32Array.BYTES_PER_ELEMENT,e=new l(R,X.length,t,!0);A.vkFormat=e._nextUint32(),A.typeSize=e._nextUint32(),A.pixelWidth=e._nextUint32(),A.pixelHeight=e._nextUint32(),A.pixelDepth=e._nextUint32(),A.layerCount=e._nextUint32(),A.faceCount=e._nextUint32();var T=e._nextUint32();A.supercompressionScheme=e._nextUint32();const O=e._nextUint32(),n=e._nextUint32(),B=e._nextUint32(),G=e._nextUint32(),M=e._nextUint64(),C=e._nextUint64(),K=new l(R,X.length+t,3*T*8,!0);for(let _=0;_<T;_++)A.levels.push({levelData:new Uint8Array(R.buffer,R.byteOffset+K._nextUint64(),K._nextUint64()),uncompressedByteLength:K._nextUint64()});const r=new l(R,O,n,!0),F={vendorId:r._skip(4)._nextUint16(),descriptorType:r._nextUint16(),versionNumber:r._nextUint16(),descriptorBlockSize:r._nextUint16(),colorModel:r._nextUint8(),colorPrimaries:r._nextUint8(),transferFunction:r._nextUint8(),flags:r._nextUint8(),texelBlockDimension:{x:r._nextUint8()+1,y:r._nextUint8()+1,z:r._nextUint8()+1,w:r._nextUint8()+1},bytesPlane:[r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8()],samples:[]},N=(F.descriptorBlockSize/4-6)/4;for(let _=0;_<N;_++)F.samples[_]={bitOffset:r._nextUint16(),bitLength:r._nextUint8(),channelID:r._nextUint8(),samplePosition:[r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8()],sampleLower:r._nextUint32(),sampleUpper:r._nextUint32()};A.dataFormatDescriptor.length=0,A.dataFormatDescriptor.push(F);const s=new l(R,B,G,!0);for(;s._offset<G;){const R=s._nextUint32(),X=s._scan(R),_=u(X),t=s._scan(R-X.byteLength);A.keyValue[_]=_.match(/^ktx/i)?u(t):t,s._offset%4&&s._skip(4-s._offset%4)}if(C<=0)return A;const S=new l(R,M,C,!0),i=S._nextUint16(),V=S._nextUint16(),a=S._nextUint32(),U=S._nextUint32(),E=S._nextUint32(),L=S._nextUint32(),o=[];for(let _=0;_<T;_++)o.push({imageFlags:S._nextUint32(),rgbSliceByteOffset:S._nextUint32(),rgbSliceByteLength:S._nextUint32(),alphaSliceByteOffset:S._nextUint32(),alphaSliceByteLength:S._nextUint32()});var P=M+S._offset,c=(I=(f=P+a)+U)+E,P=new Uint8Array(R.buffer,R.byteOffset+P,a),f=new Uint8Array(R.buffer,R.byteOffset+f,U),I=new Uint8Array(R.buffer,R.byteOffset+I,E),c=new Uint8Array(R.buffer,R.byteOffset+c,L);return A.globalData={endpointCount:i,selectorCount:V,imageDescs:o,endpointsData:P,selectorsData:f,tablesData:I,extendedData:c},A}(t)}catch(_){throw new S.RuntimeError("Invalid KTX2 file.")}if(0!==A.layerCount)throw new S.RuntimeError("KTX2 texture arrays are not supported.");if(0!==A.pixelDepth)throw new S.RuntimeError("KTX2 3D textures are unsupported.");var T=A.dataFormatDescriptor[0],_=new Array(A.levelCount);return 0!==A.vkFormat||T.colorModel!==U&&T.colorModel!==E?(R.push(t.buffer),function(_,R){var A,t=_.vkFormat===N.VK_FORMAT_R8G8B8_SRGB?i.RGB:i.RGBA;_.vkFormat===N.VK_FORMAT_R8G8B8A8_UNORM?A=r.UNSIGNED_BYTE:_.vkFormat===N.VK_FORMAT_R16G16B16A16_SFLOAT?A=r.HALF_FLOAT:_.vkFormat===N.VK_FORMAT_R32G32B32A32_SFLOAT&&(A=r.FLOAT);for(var e=0;e<_.levels.length;++e){var T={};R[e]=T;for(var O=_.levels[e].levelData,n=_.pixelWidth>>e,B=_.pixelHeight>>e,G=n*B*i.componentsLength(t),M=0;M<_.faceCount;++M){var C=O.byteOffset+G*_.typeSize*M;C=new(s.defined(A)&&1!==r.sizeInBytes(A)?2===r.sizeInBytes(A)?Uint16Array:Float32Array:Uint8Array)(O.buffer,C,G),T[a[M]]={internalFormat:t,datatype:A,width:n,height:B,levelBuffer:C}}}}(A,_)):function(_,R,A,t,e,T){var O,n,B=new t.KTX2File(_),G=B.getWidth(),M=B.getHeight(),C=B.getLevels(),_=B.getHasAlpha();if(!(0<G&&0<M&&0<C))throw B.close(),B.delete(),new S.RuntimeError("Invalid KTX2 file");C=R.dataFormatDescriptor[0],t=t.transcoder_texture_format;if(C.colorModel===U)if(A.etc)O=_?i.RGBA8_ETC2_EAC:i.RGB8_ETC2,n=_?t.cTFETC2_RGBA:t.cTFETC1_RGB;else if(A.etc1&&!_)O=i.RGB_ETC1,n=t.cTFETC1_RGB;else if(A.s3tc)O=_?i.RGBA_DXT5:i.RGB_DXT1,n=_?t.cTFBC3_RGBA:t.cTFBC1_RGB;else if(A.pvrtc)O=_?i.RGBA_PVRTC_4BPPV1:i.RGB_PVRTC_4BPPV1,n=_?t.cTFPVRTC1_4_RGBA:t.cTFPVRTC1_4_RGB;else if(A.astc)O=i.RGBA_ASTC,n=t.cTFASTC_4x4_RGBA;else{if(!A.bc7)throw new S.RuntimeError("No transcoding format target available for ETC1S compressed ktx2.");O=i.RGBA_BC7,n=t.cTFBC7_RGBA}else if(C.colorModel===E)if(A.astc)O=i.RGBA_ASTC,n=t.cTFASTC_4x4_RGBA;else if(A.bc7)O=i.RGBA_BC7,n=t.cTFBC7_RGBA;else if(A.s3tc)O=_?i.RGBA_DXT5:i.RGB_DXT1,n=_?t.cTFBC3_RGBA:t.cTFBC1_RGB;else if(A.etc)O=_?i.RGBA8_ETC2_EAC:i.RGB8_ETC2,n=_?t.cTFETC2_RGBA:t.cTFETC1_RGB;else if(A.etc1&&!_)O=i.RGB_ETC1,n=t.cTFETC1_RGB;else{if(!A.pvrtc)throw new S.RuntimeError("No transcoding format target available for UASTC compressed ktx2.");O=_?i.RGBA_PVRTC_4BPPV1:i.RGB_PVRTC_4BPPV1,n=_?t.cTFPVRTC1_4_RGBA:t.cTFPVRTC1_4_RGB}if(!B.startTranscoding())throw B.close(),B.delete(),new S.RuntimeError("startTranscoding() failed");for(var K=0;K<R.levels.length;++K){var r={};T[K]=r,G=R.pixelWidth>>K,M=R.pixelHeight>>K;var F=B.getImageTranscodedSizeInBytes(K,0,0,n.value),N=new Uint8Array(F),F=B.transcodeImage(N,K,0,0,n.value,0,-1,-1);if(!s.defined(F))throw new S.RuntimeError("transcodeImage() failed.");e.push(N.buffer),r[a[0]]={internalFormat:O,width:G,height:M,levelBuffer:N}}B.close(),B.delete()}(t,A,e,V,R,_),_}function o(_){(V=_).initializeBasis(),self.onmessage=R(L),self.postMessage(!0)}return function(_){var R=_.data.webAssemblyConfig;if(s.defined(R))return require([R.modulePath],function(_){return s.defined(R.wasmBinaryFile)?void(_=!s.defined(_)?self.MSC_TRANSCODER:_)(R).then(function(_){o(_)}):_().then(function(_){o(_)})})}});