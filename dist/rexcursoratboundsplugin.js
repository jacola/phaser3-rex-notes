(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rexcursoratboundsplugin = factory());
})(this, (function () { 'use strict';

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
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
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

  var Key = Phaser.Input.Keyboard.Key;
  var KeyCodes = Phaser.Input.Keyboard.KeyCodes;
  var CursorKeys = /*#__PURE__*/function () {
    function CursorKeys(scene) {
      _classCallCheck(this, CursorKeys);
      // scene: scene instance, or undefined
      this.cursorKeys = {
        up: new Key(scene, KeyCodes.UP),
        down: new Key(scene, KeyCodes.DOWN),
        left: new Key(scene, KeyCodes.LEFT),
        right: new Key(scene, KeyCodes.RIGHT)
      };
      this.noKeyDown = true;
    }
    _createClass(CursorKeys, [{
      key: "shutdown",
      value: function shutdown(fromScene) {
        for (var key in this.cursorKeys) {
          this.cursorKeys[key].destroy();
        }
        this.cursorKeys = undefined;
      }
    }, {
      key: "destroy",
      value: function destroy(fromScene) {
        shutdown(fromScene);
      }
    }, {
      key: "createCursorKeys",
      value: function createCursorKeys() {
        return this.cursorKeys;
      }
    }, {
      key: "setKeyState",
      value: function setKeyState(keyName, isDown) {
        var key = this.cursorKeys[keyName];
        if (!key.enabled) {
          return this;
        }
        if (isDown) {
          this.noKeyDown = false;
        }
        if (key.isDown !== isDown) {
          FakeEvent.timeStamp = Date.now();
          FakeEvent.keyCode = key.keyCode;
          if (isDown) {
            key.onDown(FakeEvent);
          } else {
            key.onUp(FakeEvent);
          }
        }
        return this;
      }
    }, {
      key: "clearAllKeysState",
      value: function clearAllKeysState() {
        this.noKeyDown = true;
        for (var keyName in this.cursorKeys) {
          this.setKeyState(keyName, false);
        }
        return this;
      }
    }, {
      key: "getKeyState",
      value: function getKeyState(keyName) {
        return this.cursorKeys[keyName];
      }
    }, {
      key: "upKeyDown",
      get: function get() {
        return this.cursorKeys.up.isDown;
      }
    }, {
      key: "downKeyDown",
      get: function get() {
        return this.cursorKeys.down.isDown;
      }
    }, {
      key: "leftKeyDown",
      get: function get() {
        return this.cursorKeys.left.isDown;
      }
    }, {
      key: "rightKeyDown",
      get: function get() {
        return this.cursorKeys.right.isDown;
      }
    }, {
      key: "anyKeyDown",
      get: function get() {
        return !this.noKeyDown;
      }
    }]);
    return CursorKeys;
  }();
  var FakeEvent = {
    timeStamp: 0,
    keyCode: 0,
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    metaKey: false,
    location: 0
  };

  var CameraClass = Phaser.Cameras.Scene2D.BaseCamera;
  var IsCameraObject = function IsCameraObject(object) {
    return object instanceof CameraClass;
  };

  var Rectangle = Phaser.Geom.Rectangle;
  var GetViewport = function GetViewport(scene, camera, out) {
    if (!IsCameraObject(camera)) {
      out = camera;
      camera = undefined;
    }
    if (out === undefined) {
      out = new Rectangle();
    } else if (out === true) {
      out = globRect;
    }
    if (camera) {
      return scene.scale.getViewPort(camera, out);
    } else {
      return scene.scale.getViewPort(out);
    }
  };
  var globRect = new Rectangle();

  var GetValue = Phaser.Utils.Objects.GetValue;
  var CursorAtBounds = /*#__PURE__*/function (_CursorKeys) {
    _inherits(CursorAtBounds, _CursorKeys);
    var _super = _createSuper(CursorAtBounds);
    function CursorAtBounds(scene, config) {
      var _this;
      _classCallCheck(this, CursorAtBounds);
      _this = _super.call(this, scene);
      _this.scene = scene;
      _this.sensitiveDistance = GetValue(config, 'sensitiveDistance', 20);
      var bounds = GetValue(config, 'bounds', undefined);
      if (bounds === undefined) {
        bounds = GetViewport(scene);
      }
      _this.bounds = bounds;
      _this.boot();
      return _this;
    }
    _createClass(CursorAtBounds, [{
      key: "boot",
      value: function boot() {
        this.scene.input.on('pointermove', this.onPointerMove, this);
        this.scene.input.on('gameout', this.clearAllKeysState, this);
        this.scene.sys.events.once('shutdown', this.destroy, this);
      }
    }, {
      key: "shutdown",
      value: function shutdown() {
        if (!this.scene) {
          return;
        }
        this.scene.input.off('pointermove', this.onPointerMove, this);
        this.scene.input.off('gameout', this.clearAllKeysState, this);
        this.scene.sys.events.off('shutdown', this.destroy, this);
        this.scene = undefined;
        _get(_getPrototypeOf(CursorAtBounds.prototype), "shutdown", this).call(this);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.shutdown();
      }
    }, {
      key: "onPointerMove",
      value: function onPointerMove(pointer) {
        var cursorX = pointer.x,
          cursorY = pointer.y;
        var left = this.bounds.left,
          right = this.bounds.right,
          top = this.bounds.top,
          bottom = this.bounds.bottom,
          sensitiveDistance = this.sensitiveDistance;
        var atLeftBound = cursorX >= left && cursorX <= left + sensitiveDistance,
          atRightBound = cursorX <= right && cursorX >= right - sensitiveDistance,
          atTopBound = cursorY >= top && cursorY <= top + sensitiveDistance,
          atBottomBound = cursorY <= bottom && cursorY >= bottom - sensitiveDistance;
        this.clearAllKeysState();
        this.setKeyState('left', atLeftBound);
        this.setKeyState('right', atRightBound);
        this.setKeyState('up', atTopBound);
        this.setKeyState('down', atBottomBound);
      }
    }, {
      key: "up",
      get: function get() {
        return this.upKeyDown;
      }
    }, {
      key: "down",
      get: function get() {
        return this.downKeyDown;
      }
    }, {
      key: "left",
      get: function get() {
        return this.leftKeyDown;
      }
    }, {
      key: "right",
      get: function get() {
        return this.rightKeyDown;
      }
    }, {
      key: "noKey",
      get: function get() {
        return this.noKeyDown;
      }
    }]);
    return CursorAtBounds;
  }(CursorKeys);

  var CursorAtBoundsPlugin = /*#__PURE__*/function (_Phaser$Plugins$BaseP) {
    _inherits(CursorAtBoundsPlugin, _Phaser$Plugins$BaseP);
    var _super = _createSuper(CursorAtBoundsPlugin);
    function CursorAtBoundsPlugin(pluginManager) {
      _classCallCheck(this, CursorAtBoundsPlugin);
      return _super.call(this, pluginManager);
    }
    _createClass(CursorAtBoundsPlugin, [{
      key: "start",
      value: function start() {
        var eventEmitter = this.game.events;
        eventEmitter.on('destroy', this.destroy, this);
      }
    }, {
      key: "add",
      value: function add(scene, config) {
        return new CursorAtBounds(scene, config);
      }
    }]);
    return CursorAtBoundsPlugin;
  }(Phaser.Plugins.BasePlugin);

  return CursorAtBoundsPlugin;

}));
