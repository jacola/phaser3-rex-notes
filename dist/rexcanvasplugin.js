(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rexcanvasplugin = factory());
})(this, (function () { 'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  // copy from Phaser.GameObjects.Text

  var Utils = Phaser.Renderer.WebGL.Utils;
  var WebGLRenderer = function WebGLRenderer(renderer, src, camera, parentMatrix) {
    if (src.dirty) {
      src.updateTexture();
      src.dirty = false;
    }
    if (src.width === 0 || src.height === 0) {
      return;
    }
    camera.addToRenderList(src);
    var frame = src.frame;
    var width = frame.width;
    var height = frame.height;
    var getTint = Utils.getTintAppendFloatAlpha;
    var pipeline = renderer.pipelines.set(src.pipeline, src);
    var textureUnit = pipeline.setTexture2D(frame.glTexture, src);
    renderer.pipelines.preBatch(src);
    pipeline.batchTexture(src, frame.glTexture, width, height, src.x, src.y, width / src.resolution, height / src.resolution, src.scaleX, src.scaleY, src.rotation, src.flipX, src.flipY, src.scrollFactorX, src.scrollFactorY, src.displayOriginX, src.displayOriginY, 0, 0, width, height, getTint(src.tintTopLeft, camera.alpha * src._alphaTL), getTint(src.tintTopRight, camera.alpha * src._alphaTR), getTint(src.tintBottomLeft, camera.alpha * src._alphaBL), getTint(src.tintBottomRight, camera.alpha * src._alphaBR), src.tintFill, 0, 0, camera, parentMatrix, false, textureUnit);
    renderer.pipelines.postBatch(src);
  };

  // copy from Phaser.GameObjects.Text

  var CanvasRenderer = function CanvasRenderer(renderer, src, camera, parentMatrix) {
    if (src.dirty) {
      src.updateTexture();
      src.dirty = false;
    }
    if (src.width === 0 || src.height === 0) {
      return;
    }
    camera.addToRenderList(src);
    renderer.batchSprite(src, src.frame, camera, parentMatrix);
  };

  var Render = {
    renderWebGL: WebGLRenderer,
    renderCanvas: CanvasRenderer
  };

  var Color = Phaser.Display.Color;
  var CanvasMethods = {
    clear: function clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.dirty = true;
      return this;
    },
    fill: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.dirty = true;
      return this;
    },
    drawFrame: function drawFrame(key, frame, dx, dy, dWidth, dHeight, sxOffset, syOffset, sWidth, sHeight) {
      var textureFrame = this.scene.sys.textures.getFrame(key, frame);
      if (!textureFrame) {
        return this;
      }
      var frameWidth = textureFrame.cutWidth,
        frameHeight = textureFrame.cutHeight;
      if (dx === undefined) {
        dx = 0;
      }
      if (dy === undefined) {
        dy = 0;
      }
      if (dWidth === undefined) {
        dWidth = frameWidth;
      }
      if (dHeight === undefined) {
        dHeight = frameHeight;
      }
      if (sxOffset === undefined) {
        sxOffset = 0;
      }
      if (syOffset === undefined) {
        syOffset = 0;
      }
      if (sWidth === undefined) {
        sWidth = frameWidth;
      }
      if (sHeight === undefined) {
        sHeight = frameHeight;
      }
      var sx = textureFrame.cutX + sxOffset;
      var sy = textureFrame.cutY + syOffset;
      this.context.drawImage(textureFrame.source.image,
      // image
      sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      this.dirty = true;
      return this;
    },
    getDataURL: function getDataURL(type, encoderOptions) {
      return this.canvas.toDataURL(type, encoderOptions);
    },
    getPixel: function getPixel(x, y, out) {
      if (out === undefined) {
        out = new Color();
      }
      var rgb = this.context.getImageData(x, y, 1, 1);
      out.setTo(rgb.data[0], rgb.data[1], rgb.data[2], rgb.data[3]);
      return out;
    },
    setPixel: function setPixel(x, y, r, g, b, a) {
      if (typeof r !== 'number') {
        var color = r;
        r = color.red;
        g = color.green;
        b = color.blue;
        a = color.alpha;
      }
      if (a === undefined) {
        a = r !== 0 || g !== 0 || b !== 0 ? 255 : 0;
      }
      var imgData = this.context.createImageData(1, 1);
      imgData.data[0] = r;
      imgData.data[1] = g;
      imgData.data[2] = b;
      imgData.data[3] = a;
      this.context.putImageData(imgData, x, y);
      this.dirty = true;
      return this;
    }
  };

  var CopyCanvasToTexture = function CopyCanvasToTexture(scene, srcCanvas, key, x, y, width, height) {
    var textures = scene.sys.textures;
    var renderer = scene.renderer;
    if (x === undefined) {
      x = 0;
    }
    if (y === undefined) {
      y = 0;
    }
    if (width === undefined) {
      width = srcCanvas.width;
    }
    if (height === undefined) {
      height = srcCanvas.height;
    }
    var texture;
    if (textures.exists(key)) {
      texture = textures.get(key);
    } else {
      texture = textures.createCanvas(key, width, height);
    }
    var destCanvas = texture.getSourceImage();
    if (destCanvas.width !== width) {
      destCanvas.width = width;
    }
    if (destCanvas.height !== height) {
      destCanvas.height = height;
    }
    var destCtx = destCanvas.getContext('2d', {
      willReadFrequently: true
    });
    destCtx.clearRect(0, 0, width, height);
    destCtx.drawImage(srcCanvas, x, y, width, height);
    if (renderer.gl && texture) {
      renderer.canvasToTexture(destCanvas, texture.source[0].glTexture, true, 0);
    }
  };

  var TextureMethods = {
    updateTexture: function updateTexture(callback, scope) {
      if (callback) {
        if (scope) {
          callback.call(scope, this.canvas, this.context);
        } else {
          callback(this.canvas, this.context);
        }
      }
      if (this.canvas.width !== this.frame.width || this.canvas.height !== this.frame.height) {
        this.frame.setSize(this.canvas.width, this.canvas.height);
      }
      if (this.renderer && this.renderer.gl) {
        this.frame.source.glTexture = this.renderer.canvasToTexture(this.canvas, this.frame.source.glTexture, true);
        this.frame.glTexture = this.frame.source.glTexture;
      }
      this.dirty = false;
      var input = this.input;
      if (input && !input.customHitArea) {
        input.hitArea.width = this.width;
        input.hitArea.height = this.height;
      }
      return this;
    },
    generateTexture: function generateTexture(key, x, y, width, height) {
      var srcCanvas = this.canvas;
      if (width === undefined) {
        width = srcCanvas.width;
      } else {
        width *= this.resolution;
      }
      if (height === undefined) {
        height = srcCanvas.height;
      } else {
        height *= this.resolution;
      }
      CopyCanvasToTexture(this.scene, srcCanvas, key, x, y, width, height);
      return this;
    },
    loadTexture: function loadTexture(key, frame) {
      var textureFrame = this.scene.sys.textures.getFrame(key, frame);
      if (!textureFrame) {
        return this;
      }
      if (this.width !== textureFrame.cutWidth || this.height !== textureFrame.cutHeight) {
        this.setSize(textureFrame.cutWidth, textureFrame.cutHeight);
      } else {
        this.clear();
      }
      this.drawFrame(key, frame);
      this.dirty = true;
      return this;
    }
  };

  var MinVersion = 60;
  var IsChecked = false;
  var CheckP3Version = function CheckP3Version(minVersion) {
    if (IsChecked) {
      return;
    }
    if (minVersion === undefined) {
      minVersion = MinVersion;
    }
    var currentVersion = parseInt(Phaser.VERSION.match(/\.(\d+)\./)[1]);
    if (currentVersion < minVersion) {
      console.error("Minimum supported version : 3.".concat(minVersion));
    }
    IsChecked = true;
  };

  CheckP3Version();
  var CanvasPool = Phaser.Display.Canvas.CanvasPool;
  var GameObject = Phaser.GameObjects.GameObject;
  var Canvas$1 = /*#__PURE__*/function (_GameObject) {
    _inherits(Canvas, _GameObject);
    var _super = _createSuper(Canvas);
    function Canvas(scene, x, y, width, height) {
      var _this;
      _classCallCheck(this, Canvas);
      if (x === undefined) {
        x = 0;
      }
      if (y === undefined) {
        y = 0;
      }
      if (width === undefined) {
        width = 1;
      }
      if (height === undefined) {
        height = 1;
      }
      _this = _super.call(this, scene, 'rexCanvas');
      _this.renderer = scene.sys.game.renderer;
      _this.resolution = 1;
      _this._width = width;
      _this._height = height;
      width = Math.max(Math.ceil(width * _this.resolution), 1);
      height = Math.max(Math.ceil(height * _this.resolution), 1);
      _this.canvas = CanvasPool.create(_assertThisInitialized(_this), width, height);
      _this.context = _this.canvas.getContext('2d', {
        willReadFrequently: true
      });
      _this.dirty = false;
      _this.setPosition(x, y);
      _this.setOrigin(0.5, 0.5);
      _this.initPipeline();
      _this.initPostPipeline(true);
      _this._crop = _this.resetCropObject();

      //  Create a Texture for this Text object
      _this.texture = scene.sys.textures.addCanvas(null, _this.canvas, true);

      //  Get the frame
      _this.frame = _this.texture.get();

      //  Set the resolution
      _this.frame.source.resolution = _this.resolution;
      if (_this.renderer && _this.renderer.gl) {
        //  Clear the default 1x1 glTexture, as we override it later
        _this.renderer.deleteTexture(_this.frame.source.glTexture);
        _this.frame.source.glTexture = null;
      }
      _this.dirty = true;
      return _this;
    }
    _createClass(Canvas, [{
      key: "preDestroy",
      value: function preDestroy() {
        CanvasPool.remove(this.canvas);
        this.texture.destroy();
        this.canvas = null;
        this.context = null;
      }
    }, {
      key: "width",
      get: function get() {
        return this._width;
      },
      set: function set(value) {
        this.setSize(value, this._height);
      }
    }, {
      key: "height",
      get: function get() {
        return this._height;
      },
      set: function set(value) {
        this.setSize(this._width, value);
      }
    }, {
      key: "setCanvasSize",
      value: function setCanvasSize(width, height) {
        if (this._width === width && this._height === height) {
          return this;
        }
        this._width = width;
        this._height = height;
        this.updateDisplayOrigin();
        width = Math.max(Math.ceil(width * this.resolution), 1);
        height = Math.max(Math.ceil(height * this.resolution), 1);
        this.canvas.width = width;
        this.canvas.height = height;
        this.frame.setSize(width, height);
        this.dirty = true;
        return this;
      }

      // setSize might be override
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        this.setCanvasSize(width, height);
        return this;
      }
    }, {
      key: "displayWidth",
      get: function get() {
        return this.scaleX * this._width;
      },
      set: function set(value) {
        this.scaleX = value / this._width;
      }
    }, {
      key: "displayHeight",
      get: function get() {
        return this.scaleY * this._height;
      },
      set: function set(value) {
        this.scaleY = value / this._height;
      }
    }, {
      key: "setDisplaySize",
      value: function setDisplaySize(width, height) {
        this.displayWidth = width;
        this.displayHeight = height;
        return this;
      }
    }, {
      key: "getCanvas",
      value: function getCanvas(readOnly) {
        if (!readOnly) {
          this.dirty = true;
        }
        return this.canvas;
      }
    }, {
      key: "getContext",
      value: function getContext(readOnly) {
        if (!readOnly) {
          this.dirty = true;
        }
        return this.context;
      }
    }, {
      key: "needRedraw",
      value: function needRedraw() {
        this.dirty = true;
        return this;
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        this.setSize(width, height);
        return this;
      }
    }]);
    return Canvas;
  }(GameObject);
  var Components = Phaser.GameObjects.Components;
  Phaser.Class.mixin(Canvas$1, [Components.Alpha, Components.BlendMode, Components.Crop, Components.Depth, Components.Flip, Components.GetBounds, Components.Mask, Components.Origin, Components.Pipeline, Components.PostPipeline, Components.ScrollFactor, Components.Tint, Components.Transform, Components.Visible, Render, CanvasMethods, TextureMethods]);

  var LoadImageMethods = {
    loadFromURL: function loadFromURL(url, callback) {
      var self = this;
      var img = new Image();
      img.onload = function () {
        if (self.width !== img.width || self.height !== img.height) {
          self.resize(img.width, img.height);
        } else {
          self.clear();
        }
        self.context.drawImage(img, 0, 0);
        self.updateTexture();
        if (callback) {
          callback();
        }
        img.onload = null;
        img.src = '';
        img.remove();
      };
      img.src = url;
      return this;
    },
    loadFromURLPromise: function loadFromURLPromise(url) {
      var self = this;
      return new Promise(function (resolve, reject) {
        self.loadFromURL(url, resolve);
      });
    },
    loadFromFile: function loadFromFile(file, callback) {
      var url = URL.createObjectURL(file);
      this.loadFromURL(url, function () {
        URL.revokeObjectURL(url);
        if (callback) {
          callback();
        }
      });
      return this;
    },
    loadFromFilePromise: function loadFromFilePromise(file) {
      var self = this;
      return new Promise(function (resolve, reject) {
        self.loadFromFile(file, resolve);
      });
    }
  };

  var Canvas = /*#__PURE__*/function (_CanvasBase) {
    _inherits(Canvas, _CanvasBase);
    var _super = _createSuper(Canvas);
    function Canvas() {
      _classCallCheck(this, Canvas);
      return _super.apply(this, arguments);
    }
    return _createClass(Canvas);
  }(Canvas$1);
  Object.assign(Canvas.prototype, LoadImageMethods);

  function Factory (x, y, width, height) {
    var gameObject = new Canvas(this.scene, x, y, width, height);
    this.scene.add.existing(gameObject);
    return gameObject;
  }

  var GetAdvancedValue = Phaser.Utils.Objects.GetAdvancedValue;
  var BuildGameObject = Phaser.GameObjects.BuildGameObject;
  function Creator (config, addToScene) {
    if (config === undefined) {
      config = {};
    }
    if (addToScene !== undefined) {
      config.add = addToScene;
    }
    var width = GetAdvancedValue(config, 'width', 256);
    var height = GetAdvancedValue(config, 'height', width);
    var gameObject = new Canvas(this.scene, 0, 0, width, height);
    BuildGameObject(this.scene, gameObject, config);
    var fillColor = GetAdvancedValue(config, 'fill', null);
    gameObject.fill(fillColor);
    return gameObject;
  }

  var IsInValidKey = function IsInValidKey(keys) {
    return keys == null || keys === '' || keys.length === 0;
  };
  var GetEntry = function GetEntry(target, keys, defaultEntry) {
    var entry = target;
    if (IsInValidKey(keys)) ; else {
      if (typeof keys === 'string') {
        keys = keys.split('.');
      }
      var key;
      for (var i = 0, cnt = keys.length; i < cnt; i++) {
        key = keys[i];
        if (entry[key] == null || _typeof(entry[key]) !== 'object') {
          var newEntry;
          if (i === cnt - 1) {
            if (defaultEntry === undefined) {
              newEntry = {};
            } else {
              newEntry = defaultEntry;
            }
          } else {
            newEntry = {};
          }
          entry[key] = newEntry;
        }
        entry = entry[key];
      }
    }
    return entry;
  };
  var SetValue = function SetValue(target, keys, value, delimiter) {
    if (delimiter === undefined) {
      delimiter = '.';
    }

    // no object
    if (_typeof(target) !== 'object') {
      return;
    }

    // invalid key
    else if (IsInValidKey(keys)) {
      // don't erase target
      if (value == null) {
        return;
      }
      // set target to another object
      else if (_typeof(value) === 'object') {
        target = value;
      }
    } else {
      if (typeof keys === 'string') {
        keys = keys.split(delimiter);
      }
      var lastKey = keys.pop();
      var entry = GetEntry(target, keys);
      entry[lastKey] = value;
    }
    return target;
  };

  var CanvasPlugin = /*#__PURE__*/function (_Phaser$Plugins$BaseP) {
    _inherits(CanvasPlugin, _Phaser$Plugins$BaseP);
    var _super = _createSuper(CanvasPlugin);
    function CanvasPlugin(pluginManager) {
      var _this;
      _classCallCheck(this, CanvasPlugin);
      _this = _super.call(this, pluginManager);

      //  Register our new Game Object type
      pluginManager.registerGameObject('rexCanvas', Factory, Creator);
      return _this;
    }
    _createClass(CanvasPlugin, [{
      key: "start",
      value: function start() {
        var eventEmitter = this.game.events;
        eventEmitter.on('destroy', this.destroy, this);
      }
    }]);
    return CanvasPlugin;
  }(Phaser.Plugins.BasePlugin);
  SetValue(window, 'RexPlugins.GameObjects.Canvas', Canvas);

  return CanvasPlugin;

}));
