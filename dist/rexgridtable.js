(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rexgridtable = factory());
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
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
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
  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);
        var desc;
        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            return false;
          }
          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }
        return true;
      };
    }
    return set(target, property, value, receiver);
  }
  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new TypeError('failed to set property');
    }
    return value;
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
  var Zone$1 = Phaser.GameObjects.Zone;
  var AddItem = Phaser.Utils.Array.Add;
  var RemoveItem$3 = Phaser.Utils.Array.Remove;
  var Base$1 = /*#__PURE__*/function (_Zone) {
    _inherits(Base, _Zone);
    var _super = _createSuper(Base);
    function Base(scene, x, y, width, height) {
      var _this;
      _classCallCheck(this, Base);
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
      _this = _super.call(this, scene, x, y, width, height);
      _this.children = [];
      return _this;
    }
    _createClass(Base, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene || this.ignoreDestroy) {
          return;
        }
        if (fromScene) {
          // Stop scene
          var child;
          for (var i = this.children.length - 1; i >= 0; i--) {
            child = this.children[i];
            if (!child.parentContainer &&
            // Not in container
            !child.displayList // Not in scene, neither in layer
            ) {
              // Destroy child which is not in scene, container, or layer manually
              child.destroy(fromScene);
            }
          }
        }

        // Destroy/remove children
        this.clear(!fromScene);
        _get(_getPrototypeOf(Base.prototype), "destroy", this).call(this, fromScene);
      }
    }, {
      key: "contains",
      value: function contains(gameObject) {
        return this.children.indexOf(gameObject) !== -1;
      }
    }, {
      key: "add",
      value: function add(gameObjects) {
        var parent = this;
        AddItem(this.children, gameObjects, 0,
        // Callback of item added
        function (gameObject) {
          gameObject.once('destroy', parent.onChildDestroy, parent);
        }, this);
        return this;
      }
    }, {
      key: "remove",
      value: function remove(gameObjects, destroyChild) {
        var parent = this;
        RemoveItem$3(this.children, gameObjects,
        // Callback of item removed
        function (gameObject) {
          gameObject.off('destroy', parent.onChildDestroy, parent);
          if (destroyChild) {
            gameObject.destroy();
          }
        });
        return this;
      }
    }, {
      key: "onChildDestroy",
      value: function onChildDestroy(child, fromScene) {
        // Only remove reference
        this.remove(child, false);
      }
    }, {
      key: "clear",
      value: function clear(destroyChild) {
        var parent = this;
        var gameObject;
        for (var i = 0, cnt = this.children.length; i < cnt; i++) {
          gameObject = this.children[i];
          gameObject.off('destroy', parent.onChildDestroy, parent);
          if (destroyChild) {
            gameObject.destroy();
          }
        }
        this.children.length = 0;
        return this;
      }
    }]);
    return Base;
  }(Zone$1);
  var Components = Phaser.GameObjects.Components;
  Phaser.Class.mixin(Base$1, [Components.Alpha, Components.Flip]);

  var GetParent$1 = function GetParent(gameObject, name) {
    var parent;
    if (name === undefined) {
      if (gameObject.hasOwnProperty('rexContainer')) {
        parent = gameObject.rexContainer.parent;
      }
    } else {
      parent = GetParent(gameObject);
      while (parent) {
        if (parent.name === name) {
          break;
        }
        parent = GetParent(parent);
      }
    }
    return parent;
  };
  var GetTopmostParent$1 = function GetTopmostParent(gameObject) {
    var parent = GetParent$1(gameObject);
    while (parent) {
      gameObject = parent;
      parent = GetParent$1(parent);
    }
    return gameObject;
  };

  var DegToRad$3 = Phaser.Math.DegToRad;
  var RadToDeg$2 = Phaser.Math.RadToDeg;
  var GetLocalState = function GetLocalState(gameObject) {
    if (!gameObject.hasOwnProperty('rexContainer')) {
      var rexContainer = {
        parent: null,
        self: null,
        layer: null,
        x: 0,
        y: 0,
        syncPosition: true,
        rotation: 0,
        syncRotation: true,
        scaleX: 0,
        scaleY: 0,
        syncScale: true,
        alpha: 0,
        syncAlpha: true,
        visible: true,
        active: true
      };
      Object.defineProperty(rexContainer, 'angle', {
        get: function get() {
          return RadToDeg$2(this.rotation);
        },
        set: function set(value) {
          this.rotation = DegToRad$3(value);
        }
      });
      Object.defineProperty(rexContainer, 'displayWidth', {
        get: function get() {
          return gameObject.width * this.scaleX;
        },
        set: function set(width) {
          this.scaleX = width / gameObject.width;
        }
      });
      Object.defineProperty(rexContainer, 'displayHeight', {
        get: function get() {
          return gameObject.height * this.scaleY;
        },
        set: function set(height) {
          this.scaleY = height / gameObject.height;
        }
      });
      gameObject.rexContainer = rexContainer;
    }
    return gameObject.rexContainer;
  };

  var Parent = {
    setParent: function setParent(gameObject, parent) {
      if (parent === undefined) {
        parent = this;
      }
      var localState = GetLocalState(gameObject);
      if (parent) {
        // Add to parent
        localState.parent = parent;
        localState.self = gameObject;
      } else {
        // Remove from parent
        localState.parent = null;
        localState.self = null;
      }
      return this;
    },
    getParent: function getParent(gameObject, name) {
      if (typeof gameObject === 'string') {
        name = gameObject;
        gameObject = undefined;
      }
      if (gameObject === undefined) {
        gameObject = this;
      }
      return GetParent$1(gameObject, name);
    },
    getTopmostParent: function getTopmostParent(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }
      return GetTopmostParent$1(gameObject);
    }
  };

  var GetValue$17 = Phaser.Utils.Objects.GetValue;
  var BaseAdd = Base$1.prototype.add;
  var Add$3 = function Add(gameObject, config) {
    this.setParent(gameObject);
    var state = GetLocalState(gameObject);
    SetupSyncFlags(state, config);
    this.resetChildState(gameObject) // Reset local state of child
    .updateChildVisible(gameObject) // Apply parent's visible to child
    .updateChildActive(gameObject) // Apply parent's active to child
    .updateChildScrollFactor(gameObject) // Apply parent's scroll factor to child
    .updateChildMask(gameObject); // Apply parent's mask to child

    BaseAdd.call(this, gameObject);
    this.addToParentContainer(gameObject);
    this.addToRenderLayer(gameObject);
    return this;
  };
  var AddLocal = function AddLocal(gameObject, config) {
    this.setParent(gameObject);

    // Set local state from child directly
    var state = GetLocalState(gameObject);
    SetupSyncFlags(state, config);
    // Position
    state.x = gameObject.x;
    state.y = gameObject.y;
    state.rotation = gameObject.rotation;
    state.scaleX = gameObject.scaleX;
    state.scaleY = gameObject.scaleY;
    // Alpha
    state.alpha = gameObject.alpha;
    // Visible
    state.visible = gameObject.visible;
    // Active
    state.active = gameObject.active;
    this.updateChildPosition(gameObject).updateChildAlpha(gameObject).updateChildVisible(gameObject) // Apply parent's visible to child
    .updateChildActive(gameObject) // Apply parent's active to child
    .updateChildScrollFactor(gameObject) // Apply parent's scroll factor to child
    .updateChildMask(gameObject); // Apply parent's mask to child

    BaseAdd.call(this, gameObject);
    this.addToRenderLayer(gameObject);
    return this;
  };
  var SetupSyncFlags = function SetupSyncFlags(state, config) {
    if (config === undefined) {
      config = true;
    }
    if (typeof config === 'boolean') {
      state.syncPosition = config;
      state.syncRotation = config;
      state.syncScale = config;
      state.syncAlpha = config;
      state.syncScrollFactor = config;
    } else {
      state.syncPosition = GetValue$17(config, 'syncPosition', true);
      state.syncRotation = GetValue$17(config, 'syncRotation', true);
      state.syncScale = GetValue$17(config, 'syncScale', true);
      state.syncAlpha = GetValue$17(config, 'syncAlpha', true);
      state.syncScrollFactor = GetValue$17(config, 'syncScrollFactor', true);
    }
  };
  var AddChild$2 = {
    // Can override this method
    add: function add(gameObject) {
      if (Array.isArray(gameObject)) {
        this.addMultiple(gameObject);
      } else {
        Add$3.call(this, gameObject);
      }
      return this;
    },
    // Don't override this method
    pin: function pin(gameObject, config) {
      if (Array.isArray(gameObject)) {
        this.addMultiple(gameObject, config);
      } else {
        Add$3.call(this, gameObject, config);
      }
      return this;
    },
    addMultiple: function addMultiple(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        Add$3.call(this, gameObjects[i]);
      }
      return this;
    },
    addLocal: function addLocal(gameObject) {
      if (Array.isArray(gameObject)) {
        this.addMultiple(gameObject);
      } else {
        AddLocal.call(this, gameObject);
      }
      return this;
    },
    // Don't override this method
    pinLocal: function pinLocal(gameObject, config) {
      if (Array.isArray(gameObject)) {
        this.addMultiple(gameObject, config);
      } else {
        AddLocal.call(this, gameObject, config);
      }
      return this;
    },
    addLocalMultiple: function addLocalMultiple(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        AddLocal.call(this, gameObjects[i]);
      }
      return this;
    }
  };

  var BaseRemove = Base$1.prototype.remove;
  var BaseClear = Base$1.prototype.clear;
  var RemoveChild$1 = {
    // Can override this method
    remove: function remove(gameObject, destroyChild) {
      if (GetParent$1(gameObject) !== this) {
        return this;
      }
      this.setParent(gameObject, null);
      if (!destroyChild) {
        this.removeFromRenderLayer(gameObject);
      }
      BaseRemove.call(this, gameObject, destroyChild);
      return this;
    },
    // Don't override this method
    unpin: function unpin(gameObject, destroyChild) {
      if (GetParent$1(gameObject) !== this) {
        return this;
      }
      this.setParent(gameObject, null);
      if (!destroyChild) {
        this.removeFromRenderLayer(gameObject);
      }
      BaseRemove.call(this, gameObject, destroyChild);
      return this;
    },
    clear: function clear(destroyChild) {
      var children = this.children;
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        var child = children[i];
        this.setParent(child, null);
        if (!destroyChild) {
          this.removeFromRenderLayer(child);
        }
      }
      BaseClear.call(this, destroyChild);
      return this;
    }
  };

  var ChildState = {
    getLocalState: function getLocalState(gameObject) {
      return GetLocalState(gameObject);
    },
    resetChildState: function resetChildState(gameObject) {
      this.resetChildPositionState(gameObject).resetChildVisibleState(gameObject).resetChildAlphaState(gameObject).resetChildActiveState(gameObject);
      return this;
    },
    resetChildrenState: function resetChildrenState(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        this.resetChildState(gameObjects[i]);
      }
      return this;
    },
    syncProperties: function syncProperties() {
      this.syncPosition().syncVisible().syncAlpha().syncActive().syncScrollFactor().syncMask();
      return this;
    }
  };

  var RotateAround$3 = Phaser.Math.RotateAround;
  var Transform = {
    worldToLocal: function worldToLocal(point) {
      // Transform
      point.x -= this.x;
      point.y -= this.y;
      // Rotate
      RotateAround$3(point, 0, 0, -this.rotation);
      // Scale
      point.x /= this.scaleX;
      point.y /= this.scaleY;
      return point;
    },
    localToWorld: function localToWorld(point) {
      // Scale
      point.x *= this.scaleX;
      point.y *= this.scaleY;
      // Rotate
      RotateAround$3(point, 0, 0, this.rotation);
      // Transform
      point.x += this.x;
      point.y += this.y;
      return point;
    }
  };

  var GetScale = function GetScale(a, b) {
    if (a === b) {
      return 1;
    } else {
      return a / b;
    }
  };

  var Position = {
    updateChildPosition: function updateChildPosition(child) {
      if (child.isRexContainerLite) {
        child.syncChildrenEnable = false;
      }
      var state = GetLocalState(child);
      var parent = state.parent;
      if (state.syncPosition) {
        child.x = state.x;
        child.y = state.y;
        parent.localToWorld(child);
      }
      if (state.syncRotation) {
        child.rotation = state.rotation + parent.rotation;
      }
      if (state.syncScale) {
        child.scaleX = state.scaleX * parent.scaleX;
        child.scaleY = state.scaleY * parent.scaleY;
      }
      if (child.isRexContainerLite) {
        child.syncChildrenEnable = true;
        child.syncPosition();
      }
      return this;
    },
    syncPosition: function syncPosition() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildPosition, this);
      }
      return this;
    },
    resetChildPositionState: function resetChildPositionState(child) {
      var state = GetLocalState(child);
      var parent = state.parent;
      state.x = child.x;
      state.y = child.y;
      parent.worldToLocal(state);
      state.scaleX = GetScale(child.scaleX, parent.scaleX);
      state.scaleY = GetScale(child.scaleY, parent.scaleY);
      state.rotation = child.rotation - parent.rotation;
      return this;
    },
    setChildPosition: function setChildPosition(child, x, y) {
      child.x = x;
      child.y = y;
      this.resetChildPositionState(child);
      return this;
    },
    setChildLocalPosition: function setChildLocalPosition(child, x, y) {
      var state = GetLocalState(child);
      state.x = x;
      state.y = y;
      this.updateChildPosition(child);
      return this;
    },
    resetLocalPositionState: function resetLocalPositionState() {
      var parent = GetLocalState(this).parent;
      if (parent) {
        parent.resetChildPositionState(this);
      }
      return this;
    }
  };

  var DegToRad$2 = Phaser.Math.DegToRad;
  var Rotation = {
    updateChildRotation: function updateChildRotation(child) {
      var state = GetLocalState(child);
      var parent = state.parent;
      if (state.syncRotation) {
        child.rotation = parent.rotation + state.rotation;
      }
      return this;
    },
    syncRotation: function syncRotation() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildRotation, this);
      }
      return this;
    },
    resetChildRotationState: function resetChildRotationState(child) {
      var state = GetLocalState(child);
      var parent = state.parent;
      state.rotation = child.rotation - parent.rotation;
      return this;
    },
    setChildRotation: function setChildRotation(child, rotation) {
      child.rotation = rotation;
      this.resetChildRotationState(child);
      return this;
    },
    setChildAngle: function setChildAngle(child, angle) {
      child.angle = angle;
      this.resetChildRotationState(child);
      return this;
    },
    setChildLocalRotation: function setChildLocalRotation(child, rotation) {
      var state = GetLocalState(child);
      state.rotation = rotation;
      this.updateChildRotation(child);
      return this;
    },
    setChildLocalAngle: function setChildLocalAngle(child, angle) {
      var state = GetLocalState(child);
      state.rotation = DegToRad$2(angle);
      this.updateChildRotation(child);
      return this;
    },
    resetLocalRotationState: function resetLocalRotationState() {
      var parent = GetLocalState(this).parent;
      if (parent) {
        parent.resetChildRotationState(this);
      }
      return this;
    }
  };

  var Scale$1 = {
    updateChildScale: function updateChildScale(child) {
      var state = GetLocalState(child);
      var parent = state.parent;
      if (state.syncScale) {
        child.scaleX = parent.scaleX * state.scaleX;
        child.scaleY = parent.scaleY * state.scaleY;
      }
      return this;
    },
    syncScale: function syncScale() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildScale, this);
      }
      return this;
    },
    resetChildScaleState: function resetChildScaleState(child) {
      var state = GetLocalState(child);
      var parent = state.parent;
      state.scaleX = GetScale(child.scaleX, parent.scaleX);
      state.scaleY = GetScale(child.scaleY, parent.scaleY);
      return this;
    },
    setChildScale: function setChildScale(child, scaleX, scaleY) {
      if (scaleY === undefined) {
        scaleY = scaleX;
      }
      child.scaleX = scaleX;
      child.scaleY = scaleY;
      this.resetChildScaleState(child);
      return this;
    },
    setChildLocalScale: function setChildLocalScale(child, scaleX, scaleY) {
      if (scaleY === undefined) {
        scaleY = scaleX;
      }
      var state = GetLocalState(child);
      state.scaleX = scaleX;
      state.scaleY = scaleY;
      this.updateChildScale(child);
      return this;
    },
    setChildDisplaySize: function setChildDisplaySize(child, width, height) {
      child.setDisplaySize(width, height);
      this.resetChildScaleState(child);
      return this;
    },
    resetLocalScaleState: function resetLocalScaleState() {
      var parent = GetLocalState(this).parent;
      if (parent) {
        parent.resetChildScaleState(this);
      }
      return this;
    }
  };

  /*

  Visible in localState:

    - visible: original visible of child
    - maskVisible: invisible by parent mask, see MaskChildren.js
        - undefined (not in masking) : Equal to mask visible
        - true (mask visible) : Inside, or across parent's visible area
        - false (maske invisible) : Out of parent's visible area

  Visible result of child = (parent visible) && (child visible) && (mask visible)
  */

  var Visible = {
    updateChildVisible: function updateChildVisible(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      var maskVisible = localState.hasOwnProperty('maskVisible') ? localState.maskVisible : true;
      child.visible = parent.visible && localState.visible && maskVisible;
      return this;
    },
    syncVisible: function syncVisible() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildVisible, this);
      }
      return this;
    },
    resetChildVisibleState: function resetChildVisibleState(child) {
      var localState = GetLocalState(child);
      // Delete maskVisible property
      if (localState.hasOwnProperty('maskVisible')) {
        delete localState.maskVisible;
      }
      localState.visible = child.visible;
      return this;
    },
    setChildVisible: function setChildVisible(child, visible) {
      // Visible of child will be affect by parent's visible, and mask visible
      this.setChildLocalVisible(child, visible);
      return this;
    },
    // Internal method
    setChildLocalVisible: function setChildLocalVisible(child, visible) {
      if (visible === undefined) {
        visible = true;
      }
      var localState = GetLocalState(child);
      localState.visible = visible;
      this.updateChildVisible(child);
      return this;
    },
    // Internal method
    setChildMaskVisible: function setChildMaskVisible(child, visible) {
      if (visible === undefined) {
        visible = true;
      }
      var localState = GetLocalState(child);
      localState.maskVisible = visible;
      this.updateChildVisible(child);
      return this;
    },
    resetLocalVisibleState: function resetLocalVisibleState() {
      var parent = GetLocalState(this).parent;
      if (parent) {
        parent.resetChildVisibleState(this);
      }
      return this;
    }
  };

  var Alpha = {
    updateChildAlpha: function updateChildAlpha(child) {
      var state = GetLocalState(child);
      var parent = state.parent;
      if (state.syncAlpha) {
        child.alpha = parent.alpha * state.alpha;
      }
      return this;
    },
    syncAlpha: function syncAlpha() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildAlpha, this);
      }
      return this;
    },
    resetChildAlphaState: function resetChildAlphaState(child) {
      var state = GetLocalState(child);
      var parent = state.parent;
      state.alpha = GetScale(child.alpha, parent.alpha);
      return this;
    },
    setChildAlpha: function setChildAlpha(child, alpha) {
      child.alpha = alpha;
      this.resetChildAlphaState(child);
      return this;
    },
    setChildLocalAlpha: function setChildLocalAlpha(child, alpha) {
      var state = GetLocalState(child);
      state.alpha = alpha;
      this.updateChildAlpha(child);
      return this;
    },
    resetLocalAlphaState: function resetLocalAlphaState() {
      var parent = GetLocalState(this).parent;
      if (parent) {
        parent.resetChildAlphaState(this);
      }
      return this;
    }
  };

  var Active = {
    updateChildActive: function updateChildActive(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      child.active = parent.active && localState.active;
      return this;
    },
    syncActive: function syncActive() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildActive, this);
      }
      return this;
    },
    resetChildActiveState: function resetChildActiveState(child) {
      var localState = GetLocalState(child);
      localState.active = child.active;
      return this;
    },
    setChildActive: function setChildActive(child, active) {
      child.active = active;
      this.resetChildActiveState(child);
      return this;
    },
    setChildLocalActive: function setChildLocalActive(child, active) {
      if (active === undefined) {
        active = true;
      }
      var localState = GetLocalState(child);
      localState.active = active;
      this.updateChildActive(child);
      return this;
    },
    resetLocalActiveState: function resetLocalActiveState() {
      var parent = GetLocalState(this).parent;
      if (parent) {
        parent.resetChildActiveState(this);
      }
      return this;
    }
  };

  var ScrollFactor = {
    updateChildScrollFactor: function updateChildScrollFactor(child) {
      var state = GetLocalState(child);
      var parent = state.parent;
      if (state.syncScrollFactor) {
        child.scrollFactorX = parent.scrollFactorX;
        child.scrollFactorY = parent.scrollFactorY;
      }
      return this;
    },
    syncScrollFactor: function syncScrollFactor() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildScrollFactor, this);
      }
      return this;
    }
  };

  var Mask = {
    updateChildMask: function updateChildMask(child) {
      // Don't propagate null mask to clear children's mask
      if (this.mask == null) {
        return this;
      }
      var maskGameObject = this.mask.hasOwnProperty('geometryMask') ? this.mask.geometryMask : this.mask.bitmapMask;
      if (maskGameObject !== child) {
        child.mask = this.mask;
      }
      return this;
    },
    syncMask: function syncMask() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildMask, this);
      }
      return this;
    },
    setMask: function setMask(mask) {
      this.mask = mask;
      return this;
    },
    clearMask: function clearMask(destroyMask) {
      if (destroyMask === undefined) {
        destroyMask = false;
      }
      var self = this;

      // Clear current mask
      this._mask = null;
      this.setChildMaskVisible(this);
      // Also set maskVisible to `true`

      this.children.forEach(function (child) {
        // Clear child's mask
        if (child.clearMask) {
          child.clearMask(false);
        }
        if (!child.hasOwnProperty('isRexContainerLite')) {
          self.setChildMaskVisible(child);
          // Set child's maskVisible to `true`
        }
      });

      if (destroyMask && this.mask) {
        this.mask.destroy();
      }
      return this;
    }
  };

  var SortGameObjectsByDepth = function SortGameObjectsByDepth(gameObjects, descending) {
    if (gameObjects.length <= 1) {
      return gameObjects;
    }
    if (descending === undefined) {
      descending = false;
    }
    var itemList;
    var gameObject = gameObjects[0];
    if (gameObject.displayList) {
      // Inside a scene or a layer
      itemList = gameObject.displayList; // displayList
    } else if (gameObject.parentContainer) {
      // Inside a container
      itemList = gameObject.parentContainer.list; // array
    } else {
      itemList = gameObject.scene.sys.displayList; // displayList
      // ??       
    }

    if (itemList.depthSort) {
      // Is a displayList object
      itemList.depthSort();
      itemList = itemList.list;
      // itemList is an array now
    }

    // itemList is an array
    if (descending) {
      gameObjects.sort(function (childA, childB) {
        return itemList.indexOf(childB) - itemList.indexOf(childA);
      });
    } else {
      gameObjects.sort(function (childA, childB) {
        return itemList.indexOf(childA) - itemList.indexOf(childB);
      });
    }
    return gameObjects;
  };

  var Depth = {
    setDepth: function setDepth(value, containerOnly) {
      this.depth = value;
      if (!containerOnly && this.children) {
        var children = this.getAllChildren();
        for (var i = 0, cnt = children.length; i < cnt; i++) {
          children[i].depth = value;
        }
      }
      return this;
    },
    swapDepth: function swapDepth(containerB) {
      var depthA = this.depth;
      var depthB = containerB.depth;
      this.setDepth(depthB);
      containerB.setDepth(depthA);
      return this;
    },
    incDepth: function incDepth(inc) {
      this.depth += inc;
      if (this.children) {
        var children = this.getAllChildren();
        for (var i = 0, cnt = children.length; i < cnt; i++) {
          children[i].depth += inc;
        }
      }
      return this;
    },
    bringToTop: function bringToTop() {
      var displayList = this.displayList;
      var children = this.getAllChildren([this]);
      SortGameObjectsByDepth(children, false);
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        var child = children[i];
        if (displayList.exists(child)) {
          displayList.bringToTop(child);
        }
      }
      return this;
    },
    moveDepthBelow: function moveDepthBelow(gameObject) {
      var displayList = this.displayList;
      if (gameObject.displayList !== displayList) {
        // Do nothing if not at the same display list
        return this;
      }
      var children = this.getAllChildren([this]);
      SortGameObjectsByDepth(children, false);
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        var child = children[i];
        if (displayList.exists(child)) {
          displayList.moveBelow(gameObject, child);
          break;
        }
      }
      return this;
    },
    moveDepthAbove: function moveDepthAbove(gameObject) {
      var displayList = this.displayList;
      if (gameObject.displayList !== displayList) {
        // Do nothing if not at the same display list
        return this;
      }
      var children = this.getAllChildren([this]);
      SortGameObjectsByDepth(children, true);
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        var child = children[i];
        if (displayList.exists(child)) {
          displayList.moveAbove(gameObject, child);
          break;
        }
      }
      return this;
    },
    bringChildToTop: function bringChildToTop(gameObject) {
      var children = this.getAllChildren([this]);
      SortGameObjectsByDepth(children, true);
      var topChild = children[0];
      if (topChild === gameObject) {
        return this;
      }
      if (topChild.displayList !== gameObject.displayList) {
        return this;
      }
      topChild.displayList.moveAbove(gameObject, topChild);
      return this;
    },
    sendChildToBack: function sendChildToBack(gameObject) {
      var children = this.getAllChildren([this]);
      SortGameObjectsByDepth(children, false);
      var bottomChild = children[0];
      if (bottomChild === gameObject) {
        return this;
      }
      if (bottomChild.displayList !== gameObject.displayList) {
        return this;
      }
      bottomChild.displayList.moveBelow(gameObject, bottomChild);
      return this;
    }
  };

  var DepthFirstSearch = function DepthFirstSearch(root, callback) {
    var skip = callback(root);
    if (!skip && root.isRexContainerLite) {
      var children = root.children;
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        DepthFirstSearch(children[i], callback);
      }
    }
  };
  var BreadthFirstSearch = function BreadthFirstSearch(root, callback) {
    var queue = [root];
    while (queue.length > 0) {
      var current = queue.shift();
      var skip = callback(current);
      if (!skip && current.isRexContainerLite) {
        queue.push.apply(queue, _toConsumableArray(current.children));
      }
    }
  };

  var ArrayUtils = Phaser.Utils.Array;
  var Children = {
    getChildren: function getChildren(out) {
      if (!out) {
        out = this.children; // Return internal children array
      } else {
        for (var i = 0, cnt = this.children.length; i < cnt; i++) {
          out.push(this.children[i]);
        }
        // Copy children
      }

      return out;
    },
    getAllChildren: function getAllChildren(out) {
      if (out === undefined) {
        out = [];
      }
      var root = this;
      BreadthFirstSearch(root, function (child) {
        // Don't add root
        if (child === root) {
          return;
        }
        out.push(child);
      });
      return out;
    },
    getAllVisibleChildren: function getAllVisibleChildren(out) {
      if (out === undefined) {
        out = [];
      }
      var root = this;
      BreadthFirstSearch(root, function (child) {
        // Don't add root
        if (child === root) {
          return;
        }
        // Don't add invisible child
        if (!child.visible) {
          return true;
        }
        out.push(child);
      });
      return out;
    },
    bfs: function bfs(callback, root) {
      if (root === undefined) {
        root = this;
      }
      BreadthFirstSearch(root, callback);
      return this;
    },
    dfs: function dfs(callback, root) {
      if (root === undefined) {
        root = this;
      }
      DepthFirstSearch(root, callback);
      return this;
    },
    contains: function contains(gameObject) {
      // Override Base.contains method
      var parent = GetParent$1(gameObject);
      if (!parent) {
        return false;
      } else if (parent === this) {
        return true;
      } else {
        return this.contains(parent);
      }
    },
    getByName: function getByName(name, recursive) {
      if (!recursive) {
        return ArrayUtils.GetFirst(this.children, 'name', name); // object, or null if not found
      } else {
        // recursive
        // Breadth-first search
        var queue = [this];
        var parent, child;
        while (queue.length) {
          parent = queue.shift();
          for (var i = 0, cnt = parent.children.length; i < cnt; i++) {
            child = parent.children[i];
            if (child.name === name) {
              return child;
            } else if (child.isRexContainerLite) {
              queue.push(child);
            }
          }
        }
        return null;
      }
    },
    getRandom: function getRandom(startIndex, length) {
      return ArrayUtils.GetRandom(this.children, startIndex, length);
    },
    getFirst: function getFirst(property, value, startIndex, endIndex) {
      return ArrayUtils.GetFirstElement(this.children, property, value, startIndex, endIndex);
    },
    getAll: function getAll(property, value, startIndex, endIndex) {
      return ArrayUtils.GetAll(this.children, property, value, startIndex, endIndex);
    },
    count: function count(property, value, startIndex, endIndex) {
      return ArrayUtils.CountAllMatching(this.children, property, value, startIndex, endIndex);
    },
    swap: function swap(child1, child2) {
      ArrayUtils.Swap(this.children, child1, child2);
      return this;
    },
    setAll: function setAll(property, value, startIndex, endIndex) {
      ArrayUtils.SetAll(this.children, property, value, startIndex, endIndex);
      return this;
    }
  };

  var GetLocalStates = function GetLocalStates(gameObjects) {
    var localStates = [];
    for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
      var gameObject = gameObjects[i];
      if (!gameObject.hasOwnProperty('rexContainer')) {
        continue;
      }
      localStates.push(gameObject.rexContainer);
    }
    return localStates;
  };
  var GetScene = function GetScene(gameObjects) {
    for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
      var scene = gameObjects[i].scene;
      if (scene) {
        return scene;
      }
    }
    return null;
  };
  var UpdateChild = function UpdateChild(tween, key, target) {
    if (!target.parent) {
      // target object was removed, so remove this tween too
      tween.remove();
      return;
    }
    var parent = target.parent;
    var child = target.self;
    switch (key) {
      case 'x':
      case 'y':
        parent.updateChildPosition(child);
        break;
      case 'angle':
      case 'rotation':
        parent.updateChildRotation(child);
        break;
      case 'scaleX':
      case 'scaleY':
      case 'displayWidth':
      case 'displayHeight':
        parent.updateChildScale(child);
        break;
      case 'alpha':
        parent.updateChildAlpha(child);
        break;
      default:
        parent.updateChildPosition(child);
        parent.updateChildRotation(child);
        parent.updateChildScale(child);
        parent.updateChildAlpha(child);
        break;
    }
  };
  var Tween = {
    tweenChild: function tweenChild(tweenConfig) {
      var targets = tweenConfig.targets;
      if (!Array.isArray(targets)) {
        targets = [targets];
      }
      var scene = this.scene || GetScene(targets);
      if (!scene) {
        return;
      }

      // Map child game objects to local states
      tweenConfig.targets = GetLocalStates(targets);
      var tween = scene.tweens.add(tweenConfig);

      // Update child game object in 'update' event
      tween.on('update', UpdateChild);
      return tween;
    },
    tweenSelf: function tweenSelf(tweenConfig) {
      tweenConfig.targets = [this];
      return this.tweenChild(tweenConfig);
    },
    createTweenChildConfig: function createTweenChildConfig(tweenConfig) {
      var targets = tweenConfig.targets;
      if (targets) {
        if (!Array.isArray(targets)) {
          targets = [targets];
        }
        // Map child game objects to local states
        tweenConfig.targets = GetLocalStates(targets);
      }
      var onUpdate = tweenConfig.onUpdate;
      tweenConfig.onUpdate = function (tween, target) {
        if (onUpdate) {
          onUpdate(tween, target);
        }
        UpdateChild(tween, undefined, target);
      };
      return tweenConfig;
    },
    tween: function tween(tweenConfig) {
      var scene = this.scene;
      if (!tweenConfig.targets) {
        tweenConfig.targets = this;
      }
      return scene.tweens.add(tweenConfig);
    }
  };

  var ContainerKlass = Phaser.GameObjects.Container;
  var IsContainerGameObject = function IsContainerGameObject(gameObject) {
    return gameObject instanceof ContainerKlass;
  };

  var LayerKlass = Phaser.GameObjects.Layer;
  var IsLayerGameObject = function IsLayerGameObject(gameObject) {
    return gameObject instanceof LayerKlass;
  };

  var GetValidChildren = function GetValidChildren(parent) {
    var children = parent.getAllChildren([parent]);
    children = children.filter(function (gameObject) {
      return !!gameObject.displayList ||
      // At scene's displayList or at a layer
      !!gameObject.parentContainer; // At a container
    });

    return children;
  };
  var AddToContainer = function AddToContainer(p3Container) {
    var gameObjects = GetValidChildren(this);
    SortGameObjectsByDepth(gameObjects);
    p3Container.add(gameObjects);
  };
  var RemoveFromContainer = function RemoveFromContainer(p3Container, descending, addToScene) {
    if (!this.scene) {
      // Destroyed
      return;
    }
    var gameObjects = GetValidChildren(this);
    SortGameObjectsByDepth(gameObjects, descending);
    p3Container.remove(gameObjects);
    if (addToScene) {
      gameObjects.forEach(function (gameObject) {
        gameObject.addToDisplayList();
      });
    }
  };
  var P3Container = {
    addToContainer: function addToContainer(p3Container) {
      if (!IsContainerGameObject(p3Container)) {
        return this;
      }
      this._setParentContainerFlag = true;
      AddToContainer.call(this, p3Container);
      this._setParentContainerFlag = false;
      return this;
    },
    addToLayer: function addToLayer(layer) {
      if (!IsLayerGameObject(layer)) {
        return this;
      }
      AddToContainer.call(this, layer);
      return this;
    },
    removeFromContainer: function removeFromContainer() {
      if (!this.parentContainer) {
        return this;
      }
      this._setParentContainerFlag = true;
      RemoveFromContainer.call(this, this.parentContainer, true, false);
      this._setParentContainerFlag = false;
      return this;
    },
    removeFromLayer: function removeFromLayer(addToScene) {
      if (addToScene === undefined) {
        addToScene = true;
      }
      if (!IsLayerGameObject(this.displayList)) {
        return this;
      }
      RemoveFromContainer.call(this, this.displayList, false, addToScene);
      return this;
    },
    getParentContainer: function getParentContainer() {
      if (this.parentContainer) {
        return this.parentContainer;
      }

      // One of parent container has a layer
      var parent = this.getParent();
      while (parent) {
        var p3Container = parent.parentContainer;
        if (p3Container) {
          return p3Container;
        }
        parent = parent.getParent();
      }
      return null;
    },
    addToParentContainer: function addToParentContainer(gameObject) {
      // Do nothing if gameObject is not in any displayList
      if (!gameObject.displayList) {
        return this;
      }
      var p3Container = this.getParentContainer();
      if (!p3Container) {
        return this;
      }
      if (gameObject.isRexContainerLite) {
        // Add containerLite and its children
        gameObject.addToContainer(p3Container);
      } else {
        // Add gameObject directly
        p3Container.add(gameObject);
      }
      return this;
    }
  };

  var RenderLayer = {
    hasLayer: function hasLayer() {
      return !!this.privateRenderLayer;
    },
    enableLayer: function enableLayer() {
      if (this.hasLayer()) {
        return this;
      }
      var layer = this.scene.add.layer();
      // layer.name = (this.name) ? `${this.name}.privateLayer` : 'privateLayer';

      this.moveDepthBelow(layer);
      this.addToLayer(layer);
      this.privateRenderLayer = layer;
      return this;
    },
    getLayer: function getLayer() {
      if (!this.hasLayer()) {
        this.enableLayer();
      }
      return this.privateRenderLayer;
    },
    getRenderLayer: function getRenderLayer() {
      // This containerLite has a layer
      if (this.hasLayer()) {
        return this.privateRenderLayer;
      }

      // One of parent container has a layer
      var parent = this.getParent();
      while (parent) {
        var layer = parent.privateRenderLayer;
        if (layer) {
          return layer;
        }
        parent = parent.getParent();
      }
      return null;
    },
    // Internal method for adding child
    addToRenderLayer: function addToRenderLayer(gameObject) {
      // Don't add to layer if gameObject is not in any displayList
      if (!gameObject.displayList) {
        return this;
      }

      // Move gameObject from scene to layer
      var layer = this.getRenderLayer();
      if (!layer) {
        return this;
      }
      if (gameObject.isRexContainerLite) {
        // Add containerLite and its children
        gameObject.addToLayer(layer);
      } else {
        // Add gameObject directly
        layer.add(gameObject);
      }
      var state = GetLocalState(gameObject);
      state.layer = layer;
      return this;
    },
    // Internal method for removing child
    removeFromRenderLayer: function removeFromRenderLayer(gameObject) {
      // Move gameObject from layer to scene
      var state = GetLocalState(gameObject);
      var layer = state.layer;
      if (!layer) {
        return this;
      }
      if (gameObject.isRexContainerLite) {
        // Remove containerLite and its children
        gameObject.removeFromLayer(true);
      } else {
        // Remove gameObject directly
        layer.remove(gameObject);
      }
      state.layer = null;
      return this;
    }
  };

  var GetDisplayWidth = function GetDisplayWidth(gameObject) {
    if (gameObject.displayWidth !== undefined) {
      return gameObject.displayWidth;
    } else {
      return gameObject.width;
    }
  };
  var GetDisplayHeight = function GetDisplayHeight(gameObject) {
    if (gameObject.displayHeight !== undefined) {
      return gameObject.displayHeight;
    } else {
      return gameObject.height;
    }
  };

  var Rectangle$3 = Phaser.Geom.Rectangle;
  var Vector2 = Phaser.Math.Vector2;
  var RotateAround$2 = Phaser.Math.RotateAround;
  var GetBounds = function GetBounds(gameObject, output) {
    if (output === undefined) {
      output = new Rectangle$3();
    } else if (output === true) {
      if (GlobRect$2 === undefined) {
        GlobRect$2 = new Rectangle$3();
      }
      output = GlobRect$2;
    }
    if (gameObject.getBounds) {
      return gameObject.getBounds(output);
    }

    //  We can use the output object to temporarily store the x/y coords in:

    var TLx, TLy, TRx, TRy, BLx, BLy, BRx, BRy;

    // Instead of doing a check if parent container is
    // defined per corner we only do it once.
    if (gameObject.parentContainer) {
      var parentMatrix = gameObject.parentContainer.getBoundsTransformMatrix();
      GetTopLeft(gameObject, output);
      parentMatrix.transformPoint(output.x, output.y, output);
      TLx = output.x;
      TLy = output.y;
      GetTopRight(gameObject, output);
      parentMatrix.transformPoint(output.x, output.y, output);
      TRx = output.x;
      TRy = output.y;
      GetBottomLeft(gameObject, output);
      parentMatrix.transformPoint(output.x, output.y, output);
      BLx = output.x;
      BLy = output.y;
      GetBottomRight(gameObject, output);
      parentMatrix.transformPoint(output.x, output.y, output);
      BRx = output.x;
      BRy = output.y;
    } else {
      GetTopLeft(gameObject, output);
      TLx = output.x;
      TLy = output.y;
      GetTopRight(gameObject, output);
      TRx = output.x;
      TRy = output.y;
      GetBottomLeft(gameObject, output);
      BLx = output.x;
      BLy = output.y;
      GetBottomRight(gameObject, output);
      BRx = output.x;
      BRy = output.y;
    }
    output.x = Math.min(TLx, TRx, BLx, BRx);
    output.y = Math.min(TLy, TRy, BLy, BRy);
    output.width = Math.max(TLx, TRx, BLx, BRx) - output.x;
    output.height = Math.max(TLy, TRy, BLy, BRy) - output.y;
    return output;
  };
  var GlobRect$2 = undefined;
  var GetTopLeft = function GetTopLeft(gameObject, output, includeParent) {
    if (output === undefined) {
      output = new Vector2();
    } else if (output === true) {
      if (GlobVector === undefined) {
        GlobVector = new Vector2();
      }
      output = GlobVector;
    }
    if (gameObject.getTopLeft) {
      return gameObject.getTopLeft(output);
    }
    output.x = gameObject.x - GetDisplayWidth(gameObject) * gameObject.originX;
    output.y = gameObject.y - GetDisplayHeight(gameObject) * gameObject.originY;
    return PrepareBoundsOutput(gameObject, output, includeParent);
  };
  var GetTopRight = function GetTopRight(gameObject, output, includeParent) {
    if (output === undefined) {
      output = new Vector2();
    } else if (output === true) {
      if (GlobVector === undefined) {
        GlobVector = new Vector2();
      }
      output = GlobVector;
    }
    if (gameObject.getTopRight) {
      return gameObject.getTopRight(output);
    }
    output.x = gameObject.x - GetDisplayWidth(gameObject) * gameObject.originX + GetDisplayWidth(gameObject);
    output.y = gameObject.y - GetDisplayHeight(gameObject) * gameObject.originY;
    return PrepareBoundsOutput(gameObject, output, includeParent);
  };
  var GetBottomLeft = function GetBottomLeft(gameObject, output, includeParent) {
    if (output === undefined) {
      output = new Vector2();
    } else if (output === true) {
      if (GlobVector === undefined) {
        GlobVector = new Vector2();
      }
      output = GlobVector;
    }
    if (gameObject.getBottomLeft) {
      return gameObject.getBottomLeft(output);
    }
    output.x = gameObject.x - GetDisplayWidth(gameObject) * gameObject.originX;
    output.y = gameObject.y - GetDisplayHeight(gameObject) * gameObject.originY + GetDisplayHeight(gameObject);
    return PrepareBoundsOutput(gameObject, output, includeParent);
  };
  var GetBottomRight = function GetBottomRight(gameObject, output, includeParent) {
    if (output === undefined) {
      output = new Vector2();
    } else if (output === true) {
      if (GlobVector === undefined) {
        GlobVector = new Vector2();
      }
      output = GlobVector;
    }
    if (gameObject.getBottomRight) {
      return gameObject.getBottomRight(output);
    }
    output.x = gameObject.x - GetDisplayWidth(gameObject) * gameObject.originX + GetDisplayWidth(gameObject);
    output.y = gameObject.y - GetDisplayHeight(gameObject) * gameObject.originY + GetDisplayHeight(gameObject);
    return PrepareBoundsOutput(gameObject, output, includeParent);
  };
  var GlobVector = undefined;
  var PrepareBoundsOutput = function PrepareBoundsOutput(gameObject, output, includeParent) {
    if (includeParent === undefined) {
      includeParent = false;
    }
    if (gameObject.rotation !== 0) {
      RotateAround$2(output, gameObject.x, gameObject.y, gameObject.rotation);
    }
    if (includeParent && gameObject.parentContainer) {
      var parentMatrix = gameObject.parentContainer.getBoundsTransformMatrix();
      parentMatrix.transformPoint(output.x, output.y, output);
    }
    return output;
  };

  var Rectangle$2 = Phaser.Geom.Rectangle;
  var Union = Phaser.Geom.Rectangle.Union;
  var GetBoundsOfGameObjects = function GetBoundsOfGameObjects(gameObjects, out) {
    if (out === undefined) {
      out = new Rectangle$2();
    } else if (out === true) {
      if (GlobRect$1 === undefined) {
        GlobRect$1 = new Rectangle$2();
      }
      out = GlobRect$1;
    }
    out.setTo(0, 0, 0, 0);
    var gameObject;
    var firstClone = true;
    for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
      gameObject = gameObjects[i];
      if (!gameObject.getBounds) {
        continue;
      }
      var boundsRect = GetBounds(gameObject, true);
      if (firstClone) {
        out.setTo(boundsRect.x, boundsRect.y, boundsRect.width, boundsRect.height);
        firstClone = false;
      } else {
        Union(boundsRect, out, out);
      }
    }
    return out;
  };
  var GlobRect$1;

  var Clear = function Clear(obj) {
    if (_typeof(obj) !== 'object' || obj === null) {
      return obj;
    }
    if (Array.isArray(obj)) {
      obj.length = 0;
    } else {
      for (var key in obj) {
        delete obj[key];
      }
    }
    return obj;
  };

  /**
   * Shallow Object Clone. Will not out nested objects.
   * @param {object} obj JSON object
   * @param {object} ret JSON object to return, set null to return a new object
   * @returns {object} this object
   */
  var Clone = function Clone(obj, out) {
    var objIsArray = Array.isArray(obj);
    if (out === undefined) {
      out = objIsArray ? [] : {};
    } else {
      Clear(out);
    }
    if (objIsArray) {
      out.length = obj.length;
      for (var i = 0, cnt = obj.length; i < cnt; i++) {
        out[i] = obj[i];
      }
    } else {
      for (var key in obj) {
        out[key] = obj[key];
      }
    }
    return out;
  };

  var GameObjectClass = Phaser.GameObjects.GameObject;
  var IsGameObject = function IsGameObject(object) {
    return object instanceof GameObjectClass;
  };

  var GetValue$16 = Phaser.Utils.Objects.GetValue;
  var DynamicTexture = Phaser.Textures.DynamicTexture;
  var UUID = Phaser.Utils.String.UUID;
  var Snapshot = function Snapshot(config) {
    if (!config) {
      return;
    }
    var gameObjects = config.gameObjects;
    var renderTexture = config.renderTexture; // renderTexture, or dynamicTexture
    var x = GetValue$16(config, 'x', undefined);
    var y = GetValue$16(config, 'y', undefined);
    var width = GetValue$16(config, 'width', undefined);
    var height = GetValue$16(config, 'height', undefined);
    var originX = GetValue$16(config, 'originX', 0);
    var originY = GetValue$16(config, 'originY', 0);
    var padding = GetValue$16(config, 'padding', 0);
    var scrollX, scrollY;
    if (width === undefined || height === undefined || x === undefined || y === undefined) {
      // Union bounds of gameObjects
      var bounds = GetBoundsOfGameObjects(gameObjects, true);
      var isCenterOrigin = x !== undefined && y !== undefined;
      if (isCenterOrigin) {
        width = Math.max(x - bounds.left, bounds.right - x) * 2;
        height = Math.max(y - bounds.top, bounds.bottom - y) * 2;
        originX = 0.5;
        originY = 0.5;
      } else {
        x = bounds.x;
        y = bounds.y;
        width = bounds.width;
        height = bounds.height;
        originX = 0;
        originY = 0;
      }
      scrollX = bounds.x;
      scrollY = bounds.y;
    } else {
      scrollX = x + (0 - originX) * width;
      scrollY = y + (0 - originY) * height;
    }
    scrollX -= padding;
    scrollY -= padding;
    width += padding * 2;
    height += padding * 2;
    var scene = gameObjects[0].scene;

    // Snapshot on dynamicTexture directly
    if (saveTexture && !renderTexture) {
      renderTexture = new DynamicTexture(scene.sys.textures, UUID(), width, height);
    }

    // Return a renderTexture
    if (!renderTexture) {
      renderTexture = scene.add.renderTexture(0, 0, width, height);
    }
    if (renderTexture.setPosition) {
      renderTexture.setPosition(x, y);
    }
    if (renderTexture.width !== width || renderTexture.height !== height) {
      renderTexture.setSize(width, height);
    }
    if (renderTexture.setOrigin) {
      renderTexture.setOrigin(originX, originY);
    }
    renderTexture.camera.setScroll(scrollX, scrollY);

    // Draw gameObjects
    gameObjects = SortGameObjectsByDepth(Clone(gameObjects));
    renderTexture.draw(gameObjects);

    // Save render result to texture    
    var saveTexture = config.saveTexture;
    if (saveTexture) {
      if (IsGameObject(renderTexture)) {
        renderTexture.saveTexture(saveTexture);
      } else {
        var dynamicTexture = renderTexture;
        var textureManager = dynamicTexture.manager;
        if (textureManager.exists(dynamicTexture.key)) {
          // Rename texture
          textureManager.renameTexture(dynamicTexture.key, key);
        } else {
          // Add texture to texture manager
          dynamicTexture.key = key;
          textureManager.list[key] = dynamicTexture;
          textureManager.emit('addtexture', key, dynamicTexture);
          textureManager.emit("addtexture-".concat(key), dynamicTexture);
        }
      }
    }
    return renderTexture;
  };

  var RenderTexture$1 = {
    snapshot: function snapshot(config) {
      // Save scale
      var scaleXSave = this.scaleX;
      var scaleYSave = this.scaleY;
      var scale1 = scaleXSave === 1 && scaleYSave === 1;
      if (!scale1) {
        this.setScale(1);
      }

      // Snapshot with scale = 1
      if (config === undefined) {
        config = {};
      }
      config.gameObjects = this.getAllVisibleChildren();
      config.x = this.x;
      config.y = this.y;
      config.originX = this.originX;
      config.originY = this.originY;
      var rt = Snapshot(config);
      var isValidRT = !!rt.scene;

      // Restore scale
      if (!scale1) {
        this.setScale(scaleXSave, scaleYSave);
        if (isValidRT) {
          rt.setScale(scaleXSave, scaleYSave);
        }
      }
      return isValidRT ? rt : this;
    }
  };

  var GetValue$15 = Phaser.Utils.Objects.GetValue;
  var DrawBounds$2 = function DrawBounds(gameObjects, graphics, config) {
    var strokeColor, lineWidth, fillColor, fillAlpha, padding;
    if (typeof config === 'number') {
      strokeColor = config;
    } else {
      strokeColor = GetValue$15(config, 'color');
      lineWidth = GetValue$15(config, 'lineWidth');
      fillColor = GetValue$15(config, 'fillColor');
      fillAlpha = GetValue$15(config, 'fillAlpha', 1);
      padding = GetValue$15(config, 'padding', 0);
    }
    if (Array.isArray(gameObjects)) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        Draw(gameObjects[i], graphics, strokeColor, lineWidth, fillColor, fillAlpha, padding);
      }
    } else {
      Draw(gameObjects, graphics, strokeColor, lineWidth, fillColor, fillAlpha, padding);
    }
  };
  var Draw = function Draw(gameObject, graphics, strokeColor, lineWidth, fillColor, fillAlpha, padding) {
    var canDrawBound = gameObject.getBounds || gameObject.width !== undefined && gameObject.height !== undefined;
    if (!canDrawBound) {
      return;
    }
    if (strokeColor === undefined) {
      strokeColor = 0xffffff;
    }
    if (lineWidth === undefined) {
      lineWidth = 1;
    }
    if (fillColor === undefined) {
      fillColor = null;
    }
    if (fillAlpha === undefined) {
      fillAlpha = 1;
    }
    if (padding === undefined) {
      padding = 0;
    }
    var p0 = GetTopLeft(gameObject, Points[0]);
    p0.x -= padding;
    p0.y -= padding;
    var p1 = GetTopRight(gameObject, Points[1]);
    p1.x += padding;
    p1.y -= padding;
    var p2 = GetBottomRight(gameObject, Points[2]);
    p2.x += padding;
    p2.y += padding;
    var p3 = GetBottomLeft(gameObject, Points[3]);
    p3.x -= padding;
    p3.y += padding;
    if (fillColor !== null) {
      graphics.fillStyle(fillColor, fillAlpha).fillPoints(Points, true, true);
    }
    if (strokeColor !== null) {
      graphics.lineStyle(lineWidth, strokeColor).strokePoints(Points, true, true);
    }
  };
  var Points = [{
    x: 0,
    y: 0
  }, {
    x: 0,
    y: 0
  }, {
    x: 0,
    y: 0
  }, {
    x: 0,
    y: 0
  }];

  var GetValue$14 = Phaser.Utils.Objects.GetValue;
  var DrawBounds$1 = function DrawBounds(graphics, config) {
    var drawContainer = GetValue$14(config, 'drawContainer', true);
    var gameObjects = GetValue$14(config, 'children');
    if (gameObjects === undefined) {
      gameObjects = this.getAllVisibleChildren([this]);
    }
    if (!drawContainer) {
      gameObjects = gameObjects.filter(function (gameObject) {
        return !gameObject.isRexContainerLite;
      });
    }
    DrawBounds$2(gameObjects, graphics, config);
    return this;
  };

  var RotateAround$1 = Phaser.Math.RotateAround;
  var ChangeOrigin$1 = function ChangeOrigin(gameObject, originX, originY) {
    if (originY === undefined) {
      originY = originX;
    }
    var deltaXY = {
      x: (originX - gameObject.originX) * gameObject.displayWidth,
      y: (originY - gameObject.originY) * gameObject.displayHeight
    };
    RotateAround$1(deltaXY, 0, 0, gameObject.rotation);
    gameObject.originX = originX;
    gameObject.originY = originY;
    gameObject.x = gameObject.x + deltaXY.x;
    gameObject.y = gameObject.y + deltaXY.y;
    return gameObject;
  };

  var ChangeOrigin = function ChangeOrigin(originX, originY) {
    this.syncChildrenEnable = false;
    ChangeOrigin$1(this, originX, originY);
    this.syncChildrenEnable = true;
    var children = this.getAllChildren();
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      this.resetChildPositionState(children[i]);
    }
    return this;
  };

  var methods$8 = {
    changeOrigin: ChangeOrigin,
    drawBounds: DrawBounds$1
  };
  Object.assign(methods$8, Parent, AddChild$2, RemoveChild$1, ChildState, Transform, Position, Rotation, Scale$1, Visible, Alpha, Active, ScrollFactor, Mask, Depth, Children, Tween, P3Container, RenderLayer, RenderTexture$1);

  var ContainerLite = /*#__PURE__*/function (_Base) {
    _inherits(ContainerLite, _Base);
    var _super = _createSuper(ContainerLite);
    function ContainerLite(scene, x, y, width, height, children) {
      var _this;
      _classCallCheck(this, ContainerLite);
      if (Array.isArray(width)) {
        children = width;
        width = undefined;
        height = undefined;
      }
      _this = _super.call(this, scene, x, y, width, height);
      _this.type = 'rexContainerLite';
      _this.isRexContainerLite = true;
      _this.syncChildrenEnable = true;
      _this._active = true;
      _this._mask = null;
      _this._scrollFactorX = 1;
      _this._scrollFactorY = 1;
      _this.privateRenderLayer = undefined;
      if (children) {
        _this.add(children);
      }
      return _this;
    }
    _createClass(ContainerLite, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene || this.ignoreDestroy) {
          return;
        }
        this.syncChildrenEnable = false; // Don't sync properties changing anymore
        _get(_getPrototypeOf(ContainerLite.prototype), "destroy", this).call(this, fromScene);
        if (this.privateRenderLayer) {
          this.privateRenderLayer.list.length = 0; // Remove all children without trigger callback
          this.privateRenderLayer.destroy();
        }
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        this.setSize(width, height);
        return this;
      }
    }, {
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(value) {
        if (this._x === value) {
          return;
        }
        this._x = value;
        this.syncPosition();
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(value) {
        if (this._y === value) {
          return;
        }
        this._y = value;
        this.syncPosition();
      }

      // Override
    }, {
      key: "rotation",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "rotation", this);
      },
      set: function set(value) {
        if (this.rotation === value) {
          return;
        }
        _set(_getPrototypeOf(ContainerLite.prototype), "rotation", value, this, true);
        this.syncPosition();
      }

      // Override
    }, {
      key: "scaleX",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "scaleX", this);
      },
      set: function set(value) {
        if (this.scaleX === value) {
          return;
        }
        _set(_getPrototypeOf(ContainerLite.prototype), "scaleX", value, this, true);
        this.syncPosition();
      }

      // Override
    }, {
      key: "scaleY",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "scaleY", this);
      },
      set: function set(value) {
        if (this.scaleY === value) {
          return;
        }
        _set(_getPrototypeOf(ContainerLite.prototype), "scaleY", value, this, true);
        this.syncPosition();
      }

      // Override
    }, {
      key: "scale",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "scale", this);
      },
      set: function set(value) {
        if (this.scale === value) {
          return;
        }
        _set(_getPrototypeOf(ContainerLite.prototype), "scale", value, this, true);
        this.syncPosition();
      }

      // Override
    }, {
      key: "visible",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "visible", this);
      },
      set: function set(value) {
        if (_get(_getPrototypeOf(ContainerLite.prototype), "visible", this) === value) {
          return;
        }
        _set(_getPrototypeOf(ContainerLite.prototype), "visible", value, this, true);
        this.syncVisible();
      }

      // Override
    }, {
      key: "alpha",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "alpha", this);
      },
      set: function set(value) {
        if (_get(_getPrototypeOf(ContainerLite.prototype), "alpha", this) === value) {
          return;
        }
        _set(_getPrototypeOf(ContainerLite.prototype), "alpha", value, this, true);
        this.syncAlpha();
      }

      // Override
    }, {
      key: "active",
      get: function get() {
        return this._active;
      },
      set: function set(value) {
        if (this._active === value) {
          return;
        }
        this._active = value;
        this.syncActive();
      }

      // Override
    }, {
      key: "mask",
      get: function get() {
        return this._mask;
      },
      set: function set(mask) {
        if (this._mask === mask) {
          return;
        }
        this._mask = mask;
        this.syncMask();
      }

      // Override
    }, {
      key: "scrollFactorX",
      get: function get() {
        return this._scrollFactorX;
      },
      set: function set(value) {
        if (this._scrollFactorX === value) {
          return;
        }
        this._scrollFactorX = value;
        this.syncScrollFactor();
      }
    }, {
      key: "scrollFactorY",
      get: function get() {
        return this._scrollFactorY;
      },
      set: function set(value) {
        if (this._scrollFactorY === value) {
          return;
        }
        this._scrollFactorY = value;
        this.syncScrollFactor();
      }

      // Compatiable with container plugin
    }, {
      key: "list",
      get: function get() {
        return this.children;
      }
    }, {
      key: "parentContainer",
      get:
      // For p3-container
      function get() {
        return this._parentContainer;
      },
      set: function set(value) {
        // Initialize
        if (!this._parentContainer && !value) {
          this._parentContainer = value;
          return;
        }

        // Set this._parentContainer only,
        // if under AddToContainer, or RemoveFromContainer methods
        if (this.setParentContainerFlag) {
          this._parentContainer = value;
          return;
        }
        // else if (!this.setParentContainerFlag)

        // Add itself and all children to container,
        // Or remove itseld and all children from container
        if (this._parentContainer && !value) {
          // Remove from container
          this.removeFromContainer();
          this._parentContainer = value;
        } else if (value) {
          // Add to container
          this._parentContainer = value;
          this.addToContainer(value);
        } else {
          this._parentContainer = value;
        }
      }
    }, {
      key: "setParentContainerFlag",
      get: function get() {
        if (this._setParentContainerFlag) {
          return true;
        }
        var parent = GetParent$1(this);
        return parent ? parent.setParentContainerFlag : false;
      }
    }], [{
      key: "GetParent",
      value: function GetParent(child) {
        return GetParent$1(child);
      }
    }]);
    return ContainerLite;
  }(Base$1);
  Object.assign(ContainerLite.prototype, methods$8);

  var GetSizerConfig$1 = function GetSizerConfig(gameObject) {
    if (!gameObject.hasOwnProperty('rexSizer')) {
      gameObject.rexSizer = {};
    }
    return gameObject.rexSizer;
  };

  function GetSizerConfig (gameObject) {
    if (gameObject === undefined) {
      gameObject = this;
    }
    return GetSizerConfig$1(gameObject);
  }

  var GetChildPrevState = function GetChildPrevState(child) {
    var childConfig = GetSizerConfig$1(child);
    if (!childConfig.hasOwnProperty('prevState')) {
      childConfig.prevState = {};
    }
    return childConfig.prevState;
  };

  var CameraClass = Phaser.Cameras.Scene2D.BaseCamera;
  var IsCameraObject = function IsCameraObject(object) {
    return object instanceof CameraClass;
  };

  var Rectangle$1 = Phaser.Geom.Rectangle;
  var GetViewport = function GetViewport(scene, camera, out) {
    if (!IsCameraObject(camera)) {
      out = camera;
      camera = undefined;
    }
    if (out === undefined) {
      out = new Rectangle$1();
    } else if (out === true) {
      out = globRect;
    }
    if (camera) {
      return scene.scale.getViewPort(camera, out);
    } else {
      return scene.scale.getViewPort(out);
    }
  };
  var globRect = new Rectangle$1();

  var PushIntoBounds = function PushIntoBounds(bounds) {
    if (bounds === undefined) {
      bounds = GetViewport(this.scene);
    }
    this.left = Math.max(this.left, bounds.left);
    this.right = Math.min(this.right, bounds.right);
    this.top = Math.max(this.top, bounds.top);
    this.bottom = Math.min(this.bottom, bounds.bottom);
    return this;
  };

  var ALIGN = Phaser.Display.Align;
  var AlignConst = {
    center: ALIGN.CENTER,
    left: ALIGN.LEFT_CENTER,
    right: ALIGN.RIGHT_CENTER,
    top: ALIGN.TOP_CENTER,
    bottom: ALIGN.BOTTOM_CENTER,
    'left-top': ALIGN.TOP_LEFT,
    'top-left': ALIGN.TOP_LEFT,
    'left-center': ALIGN.LEFT_CENTER,
    'center-left': ALIGN.LEFT_CENTER,
    'left-bottom': ALIGN.BOTTOM_LEFT,
    'bottom-left': ALIGN.BOTTOM_LEFT,
    'center-top': ALIGN.TOP_CENTER,
    'top-center': ALIGN.TOP_CENTER,
    'center-center': ALIGN.CENTER,
    'center-bottom': ALIGN.BOTTOM_CENTER,
    'bottom-center': ALIGN.BOTTOM_CENTER,
    'right-top': ALIGN.TOP_RIGHT,
    'top-right': ALIGN.TOP_RIGHT,
    'right-center': ALIGN.RIGHT_CENTER,
    'center-right': ALIGN.RIGHT_CENTER,
    'right-bottom': ALIGN.BOTTOM_RIGHT,
    'bottom-right': ALIGN.BOTTOM_RIGHT
  };

  var NOOP = function NOOP() {
    //  NOOP
  };

  var globZone = new Phaser.GameObjects.Zone({
    sys: {
      queueDepthSort: NOOP,
      events: {
        once: NOOP
      }
    }
  }, 0, 0, 1, 1);
  globZone.setOrigin(0);

  var ALIGN_CONST = {
    /**
    * A constant representing a top-left alignment or position.
    * @constant
    * @name Phaser.Display.Align.TOP_LEFT
    * @since 3.0.0
    * @type {integer}
    */
    TOP_LEFT: 0,
    /**
    * A constant representing a top-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.TOP_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    TOP_CENTER: 1,
    /**
    * A constant representing a top-right alignment or position.
    * @constant
    * @name Phaser.Display.Align.TOP_RIGHT
    * @since 3.0.0
    * @type {integer}
    */
    TOP_RIGHT: 2,
    /**
    * A constant representing a left-top alignment or position.
    * @constant
    * @name Phaser.Display.Align.LEFT_TOP
    * @since 3.0.0
    * @type {integer}
    */
    LEFT_TOP: 3,
    /**
    * A constant representing a left-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.LEFT_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    LEFT_CENTER: 4,
    /**
    * A constant representing a left-bottom alignment or position.
    * @constant
    * @name Phaser.Display.Align.LEFT_BOTTOM
    * @since 3.0.0
    * @type {integer}
    */
    LEFT_BOTTOM: 5,
    /**
    * A constant representing a center alignment or position.
    * @constant
    * @name Phaser.Display.Align.CENTER
    * @since 3.0.0
    * @type {integer}
    */
    CENTER: 6,
    /**
    * A constant representing a right-top alignment or position.
    * @constant
    * @name Phaser.Display.Align.RIGHT_TOP
    * @since 3.0.0
    * @type {integer}
    */
    RIGHT_TOP: 7,
    /**
    * A constant representing a right-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.RIGHT_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    RIGHT_CENTER: 8,
    /**
    * A constant representing a right-bottom alignment or position.
    * @constant
    * @name Phaser.Display.Align.RIGHT_BOTTOM
    * @since 3.0.0
    * @type {integer}
    */
    RIGHT_BOTTOM: 9,
    /**
    * A constant representing a bottom-left alignment or position.
    * @constant
    * @name Phaser.Display.Align.BOTTOM_LEFT
    * @since 3.0.0
    * @type {integer}
    */
    BOTTOM_LEFT: 10,
    /**
    * A constant representing a bottom-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.BOTTOM_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    BOTTOM_CENTER: 11,
    /**
    * A constant representing a bottom-right alignment or position.
    * @constant
    * @name Phaser.Display.Align.BOTTOM_RIGHT
    * @since 3.0.0
    * @type {integer}
    */
    BOTTOM_RIGHT: 12
  };

  var GetBottom = function GetBottom(gameObject) {
    var height = GetDisplayHeight(gameObject);
    return gameObject.y + height - height * gameObject.originY;
  };

  var GetCenterX = function GetCenterX(gameObject) {
    var width = GetDisplayWidth(gameObject);
    return gameObject.x - width * gameObject.originX + width * 0.5;
  };

  var SetBottom = function SetBottom(gameObject, value) {
    var height = GetDisplayHeight(gameObject);
    gameObject.y = value - height + height * gameObject.originY;
    return gameObject;
  };

  var SetCenterX = function SetCenterX(gameObject, x) {
    var width = GetDisplayWidth(gameObject);
    var offsetX = width * gameObject.originX;
    gameObject.x = x + offsetX - width * 0.5;
    return gameObject;
  };

  var BottomCenter = function BottomCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }
    if (offsetY === undefined) {
      offsetY = 0;
    }
    SetCenterX(gameObject, GetCenterX(alignIn) + offsetX);
    SetBottom(gameObject, GetBottom(alignIn) + offsetY);
    return gameObject;
  };

  var GetLeft = function GetLeft(gameObject) {
    var width = GetDisplayWidth(gameObject);
    return gameObject.x - width * gameObject.originX;
  };

  var SetLeft = function SetLeft(gameObject, value) {
    var width = GetDisplayWidth(gameObject);
    gameObject.x = value + width * gameObject.originX;
    return gameObject;
  };

  var BottomLeft = function BottomLeft(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }
    if (offsetY === undefined) {
      offsetY = 0;
    }
    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetBottom(gameObject, GetBottom(alignIn) + offsetY);
    return gameObject;
  };

  var GetRight = function GetRight(gameObject) {
    var width = GetDisplayWidth(gameObject);
    return gameObject.x + width - width * gameObject.originX;
  };

  var SetRight = function SetRight(gameObject, value) {
    var width = GetDisplayWidth(gameObject);
    gameObject.x = value - width + width * gameObject.originX;
    return gameObject;
  };

  var BottomRight = function BottomRight(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }
    if (offsetY === undefined) {
      offsetY = 0;
    }
    SetRight(gameObject, GetRight(alignIn) + offsetX);
    SetBottom(gameObject, GetBottom(alignIn) + offsetY);
    return gameObject;
  };

  var SetCenterY = function SetCenterY(gameObject, y) {
    var height = GetDisplayHeight(gameObject);
    var offsetY = height * gameObject.originY;
    gameObject.y = y + offsetY - height * 0.5;
    return gameObject;
  };

  var CenterOn = function CenterOn(gameObject, x, y) {
    SetCenterX(gameObject, x);
    return SetCenterY(gameObject, y);
  };

  var GetCenterY = function GetCenterY(gameObject) {
    var height = GetDisplayHeight(gameObject);
    return gameObject.y - height * gameObject.originY + height * 0.5;
  };

  var Center = function Center(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }
    if (offsetY === undefined) {
      offsetY = 0;
    }
    CenterOn(gameObject, GetCenterX(alignIn) + offsetX, GetCenterY(alignIn) + offsetY);
    return gameObject;
  };

  var LeftCenter = function LeftCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }
    if (offsetY === undefined) {
      offsetY = 0;
    }
    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetCenterY(gameObject, GetCenterY(alignIn) + offsetY);
    return gameObject;
  };

  var RightCenter = function RightCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }
    if (offsetY === undefined) {
      offsetY = 0;
    }
    SetRight(gameObject, GetRight(alignIn) + offsetX);
    SetCenterY(gameObject, GetCenterY(alignIn) + offsetY);
    return gameObject;
  };

  var GetTop = function GetTop(gameObject) {
    var height = GetDisplayHeight(gameObject);
    return gameObject.y - height * gameObject.originY;
  };

  var SetTop = function SetTop(gameObject, value) {
    var height = GetDisplayHeight(gameObject);
    gameObject.y = value + height * gameObject.originY;
    return gameObject;
  };

  var TopCenter = function TopCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }
    if (offsetY === undefined) {
      offsetY = 0;
    }
    SetCenterX(gameObject, GetCenterX(alignIn) + offsetX);
    SetTop(gameObject, GetTop(alignIn) - offsetY);
    return gameObject;
  };

  var TopLeft = function TopLeft(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }
    if (offsetY === undefined) {
      offsetY = 0;
    }
    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetTop(gameObject, GetTop(alignIn) - offsetY);
    return gameObject;
  };

  var TopRight = function TopRight(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }
    if (offsetY === undefined) {
      offsetY = 0;
    }
    SetRight(gameObject, GetRight(alignIn) + offsetX);
    SetTop(gameObject, GetTop(alignIn) - offsetY);
    return gameObject;
  };

  var AlignInMap = [];
  AlignInMap[ALIGN_CONST.BOTTOM_CENTER] = BottomCenter;
  AlignInMap[ALIGN_CONST.BOTTOM_LEFT] = BottomLeft;
  AlignInMap[ALIGN_CONST.BOTTOM_RIGHT] = BottomRight;
  AlignInMap[ALIGN_CONST.CENTER] = Center;
  AlignInMap[ALIGN_CONST.LEFT_CENTER] = LeftCenter;
  AlignInMap[ALIGN_CONST.RIGHT_CENTER] = RightCenter;
  AlignInMap[ALIGN_CONST.TOP_CENTER] = TopCenter;
  AlignInMap[ALIGN_CONST.TOP_LEFT] = TopLeft;
  AlignInMap[ALIGN_CONST.TOP_RIGHT] = TopRight;
  var QuickSet = function QuickSet(child, alignIn, position, offsetX, offsetY) {
    return AlignInMap[position](child, alignIn, offsetX, offsetY);
  };

  var AlignIn = function AlignIn(child, x, y, width, height, align) {
    globZone.setPosition(x, y).setSize(width, height);
    QuickSet(child, globZone, align);
  };

  var GetValue$13 = Phaser.Utils.Objects.GetValue;
  var Group$1 = Phaser.GameObjects.Group;
  var DrawBounds = function DrawBounds(graphics, config) {
    var scene = graphics.scene;
    var color, lineWidth;
    var createTextCallback, createTextCallbackScope, textAlign;
    if (typeof config === 'number') {
      color = config;
    } else {
      color = GetValue$13(config, 'color');
      lineWidth = GetValue$13(config, 'lineWidth');
      var nameTextConfig = GetValue$13(config, 'name', false);
      if (nameTextConfig) {
        createTextCallback = GetValue$13(nameTextConfig, 'createTextCallback', DefaultCreateTextCallback);
        createTextCallbackScope = GetValue$13(nameTextConfig, 'createTextCallbackScope', undefined);
        textAlign = GetValue$13(nameTextConfig, 'align', 'left-top');
        if (typeof textAlign === 'string') {
          textAlign = AlignConst[textAlign];
        }
      }
    }
    if (color === undefined) {
      color = 0xffffff;
    }
    if (lineWidth === undefined) {
      lineWidth = 1;
    }
    if (createTextCallback && !graphics.children) {
      graphics.children = new Group$1(scene);
      graphics.once('destroy', function (graphics, fromScene) {
        graphics.children.destroy(!fromScene);
        graphics.children = undefined;
      });
      var graphicsClear = graphics.clear.bind(graphics);
      graphics.clear = function () {
        graphicsClear();
        graphics.children.clear(false, true);
      };
    }
    var children = this.getAllShownChildren([this]),
      child;
    var nameText;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];
      if (child.getBounds || child.width !== undefined && child.height !== undefined) {
        GlobRect = GetBounds(child, GlobRect);
      } else {
        continue;
      }
      if (color != null) {
        graphics.lineStyle(lineWidth, color).strokeRectShape(GlobRect);
      }
      if (child.name && createTextCallback) {
        if (createTextCallbackScope) {
          nameText = createTextCallback.call(createTextCallbackScope, scene);
        } else {
          nameText = createTextCallback(scene);
        }
        if (nameText) {
          nameText.setText(child.name);
          graphics.children.add(nameText);
          AlignIn(nameText, GlobRect.x, GlobRect.y, GlobRect.width, GlobRect.height, textAlign);
        }
      }
    }
    return this;
  };
  var DefaultCreateTextCallback = function DefaultCreateTextCallback(scene, child, childBoundsRect) {
    return scene.add.text(0, 0, '');
  };
  var GlobRect = undefined;

  var GetValue$12 = Phaser.Utils.Objects.GetValue;
  var GetBoundsConfig = function GetBoundsConfig(config, out) {
    if (config === undefined) {
      config = 0;
    }
    if (out === undefined) {
      out = {};
    }
    if (typeof config === 'number') {
      out.left = config;
      out.right = config;
      out.top = config;
      out.bottom = config;
    } else {
      out.left = GetValue$12(config, 'left', 0);
      out.right = GetValue$12(config, 'right', 0);
      out.top = GetValue$12(config, 'top', 0);
      out.bottom = GetValue$12(config, 'bottom', 0);
    }
    return out;
  };

  var ContainerAdd = ContainerLite.prototype.add;
  var AddChild$1 = function AddChild(gameObject) {
    ContainerAdd.call(this, gameObject);
    if (this.sizerEventsEnable) {
      gameObject.emit('sizer.add', gameObject, this);
      this.emit('add', gameObject, this);
    }
    return this;
  };

  var AddChildMethods$2 = {
    addBackground: function addBackground(gameObject, paddingConfig, childKey) {
      if (this.backgroundChildren === undefined) {
        this.backgroundChildren = [];
      }
      if (typeof paddingConfig === 'string') {
        childKey = paddingConfig;
        paddingConfig = undefined;
      }
      if (paddingConfig === undefined) {
        paddingConfig = 0;
      }
      AddChild$1.call(this, gameObject);
      this.backgroundChildren.push(gameObject);
      var config = this.getSizerConfig(gameObject);
      config.padding = GetBoundsConfig(paddingConfig);
      if (childKey !== undefined) {
        this.addChildrenMap(childKey, gameObject);
      }
      return this;
    },
    isBackground: function isBackground(gameObject) {
      if (this.backgroundChildren === undefined) {
        return false;
      }
      return this.backgroundChildren.indexOf(gameObject) !== -1;
    }
  };

  var GetParent = function GetParent(gameObject, name) {
    var parent = null;
    if (name === undefined) {
      if (gameObject.hasOwnProperty('rexContainer')) {
        parent = gameObject.rexContainer.parent;
        if (parent) {
          if (!parent.isRexSizer) {
            // Try to get sizer parent
            parent = GetParent(parent);
          }
        } else {
          parent = null;
        }
      }
    } else {
      parent = GetParent(gameObject);
      while (parent) {
        if (parent.name === name) {
          break;
        }
        parent = GetParent(parent);
      }
    }
    return parent;
  };
  var GetTopmostParent = function GetTopmostParent(gameObject) {
    var parent = GetParent(gameObject);
    while (parent) {
      gameObject = parent;
      parent = GetParent(parent);
    }
    return gameObject;
  };
  var GetParentSizerMethods = {
    getParentSizer: function getParentSizer(gameObject, name) {
      if (typeof gameObject === 'string') {
        name = gameObject;
        gameObject = undefined;
      }
      if (gameObject === undefined) {
        gameObject = this;
      }
      return GetParent(gameObject, name);
    },
    getTopmostSizer: function getTopmostSizer(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }
      return GetTopmostParent(gameObject);
    },
    hasParentSizer: function hasParentSizer(parentGameObject, gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }
      var parent = GetParent(gameObject);
      while (parent) {
        if (parent === parentGameObject) {
          return true;
        }
        parent = GetParent(parent);
      }
      return false;
    },
    hasChild: function hasChild(child, gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }
      return this.hasParentSizer(gameObject, child);
    }
  };

  var RemoveItem$2 = Phaser.Utils.Array.Remove;
  var ContainerRemove = ContainerLite.prototype.remove;
  var GetParentSizer$1 = GetParentSizerMethods.getParentSizer;
  var RemoveChild = function RemoveChild(gameObject, destroyChild) {
    // Invoke parent's removeChildCallback method
    var parent = GetParentSizer$1(gameObject);
    while (parent) {
      if (parent.removeChildCallback) {
        parent.removeChildCallback(gameObject, destroyChild);
      }
      parent = GetParentSizer$1(parent);
    }
    if (this.isBackground(gameObject)) {
      RemoveItem$2(this.backgroundChildren, gameObject);
    }
    ContainerRemove.call(this, gameObject, destroyChild);
    if (!destroyChild && this.sizerEventsEnable) {
      gameObject.emit('sizer.remove', gameObject, this);
      this.emit('remove', gameObject, this);
    }
    return this;
  };

  var RemoveItem$1 = Phaser.Utils.Array.Remove;
  var GetParentSizer = GetParentSizerMethods.getParentSizer;
  var RemoveChildMethods$2 = {
    removeFromParentSizer: function removeFromParentSizer() {
      var parent = GetParentSizer(gameObject);
      if (parent) {
        parent.remove(this);
      }
      return this;
    },
    removeBackground: function removeBackground(gameObject, destroyChild) {
      if (this.backgroundChildren === undefined) {
        return this;
      }
      if (this.getParentSizer(gameObject) !== this) {
        return this;
      }
      RemoveItem$1(this.backgroundChildren, gameObject);
      RemoveChild.call(this, gameObject, destroyChild);
      return this;
    },
    removeAllBackgrounds: function removeAllBackgrounds(destroyChild) {
      if (this.backgroundChildren === undefined) {
        return this;
      }
      for (var i = this.backgroundChildren.length - 1; i >= 0; i--) {
        this.remove(this.backgroundChildren[i], destroyChild);
      }
      return this;
    }
  };

  var AddChildrenMap = function AddChildrenMap(key, gameObject) {
    if (typeof key === 'string') {
      this.childrenMap[key] = gameObject;
    } else {
      var config = key;
      for (key in config) {
        this.childrenMap[key] = config[key];
      }
    }
    return this;
  };

  var RemoveChildrenMap = function RemoveChildrenMap(key) {
    if (_typeof(key) === 'object') {
      var gameObject = key;
      for (var key in this.childrenMap) {
        if (this.childrenMap[key] === gameObject) {
          delete this.childrenMap[key];
          return this;
        }
      }
    }
    delete this.childrenMap[key];
    return this;
  };

  var GetElement = function GetElement(mapNameList, recursive) {
    if (typeof mapNameList === 'string') {
      mapNameList = mapNameList.split('.');
    }
    if (mapNameList.length === 0) {
      return undefined;
    }
    var name = mapNameList.shift(),
      element = null;
    if (name.charAt(0) === '#') {
      // Get element by name
      name = name.substring(1);
      element = this.getByName(name, recursive);
    } else if (name.indexOf('[') === -1) {
      // Get element by key
      if (this.childrenMap) {
        element = this.childrenMap[name];
      }
    } else {
      // Get element by key[]
      var innerMatch = name.match(RE_OBJ);
      if (innerMatch != null) {
        if (this.childrenMap) {
          var elements = this.childrenMap[innerMatch[1]];
          if (elements) {
            element = elements[innerMatch[2]];
          }
        }
      }
    }
    if (mapNameList.length === 0) {
      return element;
    } else if (element && element.childrenMap) {
      return element.getElement(mapNameList);
    } else {
      return null;
    }
  };
  var RE_OBJ = /(\S+)\[(\d+)\]/i;

  var GetChildIndex = function GetChildIndex(child) {
    if (Array.isArray(this.sizerChildren)) {
      var index = this.sizerChildren.indexOf(child);
      if (index === -1) {
        index = null;
      }
      return index;
    } else {
      if (this.getParentSizer(child) !== this) {
        return null;
      }
      for (var key in this.sizerChildren) {
        if (this.sizerChildre[key] === child) {
          return key;
        }
      }
      return null;
    }
  };

  var GetValue$11 = Phaser.Utils.Objects.GetValue;
  var GetPadding = function GetPadding(padding, key) {
    if (key === undefined) {
      return padding;
    }
    return padding[key];
  };
  var SetPadding = function SetPadding(padding, key, value) {
    if (padding === undefined) {
      padding = {};
    }
    if (key === undefined) {
      key = 0;
    }
    var keyType = _typeof(key);
    if (keyType === 'string') {
      padding[key] = value;
    } else if (keyType === 'number') {
      padding.left = key;
      padding.right = key;
      padding.top = key;
      padding.bottom = key;
    } else {
      padding.left = GetValue$11(key, 'left', 0);
      padding.right = GetValue$11(key, 'right', 0);
      padding.top = GetValue$11(key, 'top', 0);
      padding.bottom = GetValue$11(key, 'bottom', 0);
    }
    return padding;
  };

  var PaddingMethods = {
    getInnerPadding: function getInnerPadding(key) {
      return GetPadding(this.space, key);
    },
    setInnerPadding: function setInnerPadding(key, value) {
      SetPadding(this.space, key, value);
      return this;
    },
    getOuterPadding: function getOuterPadding(key) {
      return GetPadding(this.getSizerConfig(this).padding, key);
    },
    setOuterPadding: function setOuterPadding(key, value) {
      SetPadding(this.getSizerConfig(this).padding, key, value);
      return this;
    },
    getChildOuterPadding: function getChildOuterPadding(child, key) {
      if (typeof child === 'string') {
        child = this.getElement(child);
      }
      return GetPadding(this.getSizerConfig(child).padding, key);
    },
    setChildOuterPadding: function setChildOuterPadding(child, key, value) {
      if (typeof child === 'string') {
        child = this.getElement(child);
      }
      SetPadding(this.getSizerConfig(child).padding, key, value);
      return this;
    }
  };

  var ResolveWidth$2 = function ResolveWidth(width) {
    var childrenWidth = this.childrenWidth;
    var minWidth = this.minWidth !== undefined ? this.minWidth : 0;
    if (width === undefined) {
      width = Math.max(minWidth, childrenWidth);
      if (this.layoutWarnEnable) {
        if (minWidth > 0 && childrenWidth > minWidth) {
          console.warn("Layout width warn: ".concat(this.constructor.name, "'s minWidth (").concat(minWidth, ") < childrenWidth (").concat(childrenWidth, ")"));
        }
      }
    } else {
      if (this.layoutWarnEnable) {
        if (minWidth > width || childrenWidth > width) {
          console.warn("Layout width warn: ".concat(this.constructor.name, "'s minWidth (").concat(minWidth, ") or childrenWidth (").concat(childrenWidth, " > targetWidth ").concat(width, ")"));
        }
      }
    }
    return width;
  };

  var ResolveChildrenWidth$1 = function ResolveChildrenWidth(parentWidth) {
    // Resolve width of sizer children
    var child, childWidth;
    for (var i in this.sizerChildren) {
      child = this.sizerChildren[i];
      if (child && child.isRexSizer && !child.ignoreLayout) {
        childWidth = this.getExpandedChildWidth(child, parentWidth);
        childWidth = child.resolveWidth(childWidth);
        child.resolveChildrenWidth(childWidth);
      }
    }
  };

  var ResolveHeight$2 = function ResolveHeight(height) {
    var childrenHeight = this.childrenHeight;
    var minHeight = this.minHeight !== undefined ? this.minHeight : 0;
    if (height === undefined) {
      height = Math.max(minHeight, childrenHeight);
      if (this.layoutWarnEnable) {
        if (minHeight > 0 && childrenHeight > minHeight) {
          console.warn("Layout height warn: ".concat(this.constructor.name, "'s minHeight (").concat(minHeight, ") < childrenHeight (").concat(childrenHeight, ")"));
        }
      }
    } else {
      if (this.layoutWarnEnable) {
        if (minHeight > height || childrenHeight > height) {
          console.warn("Layout height warn: ".concat(this.constructor.name, "'s minHeight (").concat(minHeight, ") or childrenHeight (").concat(childrenHeight, ") > targetHeight (").concat(height, ")"));
        }
      }
    }
    return height;
  };

  var PostResolveSize$1 = function PostResolveSize(width, height) {};

  var GetChildWidth = function GetChildWidth(child) {
    var childWidth;
    if (child.isRexSizer) {
      // Sizer game object
      childWidth = Math.max(child.minWidth, child.childrenWidth);
    } else {
      // Normal game object
      if (child.minWidth !== undefined) {
        // Force minWidth
        childWidth = child.minWidth;
      } else {
        childWidth = GetDisplayWidth(child);
      }
    }
    return childWidth;
  };

  var GetChildHeight = function GetChildHeight(child) {
    var childHeight;
    if (child.isRexSizer) {
      // Sizer game object
      childHeight = Math.max(child.minHeight, child.childrenHeight);
    } else {
      // Normal game object
      if (child.minHeight !== undefined) {
        // Force minHeight
        childHeight = child.minHeight;
      } else {
        childHeight = GetDisplayHeight(child);
      }
    }
    return childHeight;
  };

  // Override
  var GetExpandedChildWidth$2 = function GetExpandedChildWidth(child, parentWidth) {
    return parentWidth;
  };

  // Override
  var GetExpandedChildHeight$2 = function GetExpandedChildHeight(child, parentHeight) {
    return parentHeight;
  };

  // Override
  var GetChildrenWidth$2 = function GetChildrenWidth() {
    return 0;
  };

  // Override
  var GetChildrenHeight$2 = function GetChildrenHeight() {
    return 0;
  };

  var GetAllChildrenSizers = function GetAllChildrenSizers(out) {
    if (out === undefined) {
      out = [];
    }
    var startIdx = out.length;
    var children = this.getChildrenSizers(out);
    var endIdx = out.length;
    for (var i = startIdx; i < endIdx; i++) {
      children[i].getAllChildrenSizers(out);
    }
    return out;
  };

  // Default method
  var GetChildrenSizers$2 = function GetChildrenSizers(out) {
    if (out === undefined) {
      out = [];
    }
    return out;
  };

  var GetShownChildrenMethods = {
    getShownChildren: function getShownChildren(out) {
      if (out === undefined) {
        out = [];
      }
      var children = this.children,
        child;
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];
        if (child.rexSizer && child.rexSizer.hidden) {
          // Don't add hidden child
          continue;
        }
        out.push(child);
      }
      return out;
    },
    getAllShownChildren: function getAllShownChildren(out) {
      if (out === undefined) {
        out = [];
      }
      var queue = [this];
      while (queue.length > 0) {
        var current = queue.shift();
        if (current.rexSizer && current.rexSizer.hidden) {
          continue;
        }
        if (current !== this) {
          out.push(current);
        }
        if (current.isRexContainerLite) {
          queue.push.apply(queue, _toConsumableArray(current.children));
        }
      }
      return out;
    }
  };

  var PreLayout$2 = function PreLayout() {
    this._childrenWidth = undefined;
    this._childrenHeight = undefined;
    var children = this.getChildrenSizers(),
      child;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];
      if (child.ignoreLayout) {
        continue;
      }
      child.preLayout();
    }
  };

  var Layout = function Layout() {
    // Save scale
    var scaleXSave = this.scaleX;
    var scaleYSave = this.scaleY;
    var scale1 = scaleXSave === 1 && scaleYSave === 1;
    if (!scale1) {
      this.setScale(1);
    }

    // Run layout with scale = 1
    this.runLayout();

    // Custom postLayout callback
    this.postLayout();
    this._postLayout();

    // Restore scale
    if (!scale1) {
      this.setScale(scaleXSave, scaleYSave);
    }
    return this;
  };

  // Override
  var RunLayout = function RunLayout(parent, newWidth, newHeight) {
    // Skip hidden or !dirty sizer
    if (this.ignoreLayout) {
      return this;
    }
    var isTopmostParent = !parent;
    // Preprocessor, top parent only
    if (isTopmostParent) {
      this.preLayout();
    }

    // Calculate parent width
    newWidth = this.resolveWidth(newWidth);
    // Calculate all children width, run width wrap
    if (isTopmostParent) {
      this.resolveChildrenWidth(newWidth);
      this.runWidthWrap(newWidth);
    }
    // Calculate parent height
    newHeight = this.resolveHeight(newHeight);
    // The last chance of resolving size
    this.postResolveSize(newWidth, newHeight);
    // Resize parent
    this.resize(newWidth, newHeight);
    if (this.sizerEventsEnable) {
      if (this.layoutedChildren === undefined) {
        this.layoutedChildren = [];
      }
    }

    // Layout children    
    this.layoutChildren();

    // Layout background children
    this.layoutBackgrounds();
    if (this.sizerEventsEnable) {
      this.emit('postlayout', this.layoutedChildren, this);
      this.layoutedChildren.length = 0;
    }
    return this;
  };

  // Override
  var LayoutChildren$2 = function LayoutChildren() {};

  var _PostLayout = function _PostLayout(parent, newWidth, newHeight) {
    if (this._anchor) {
      this._anchor.updatePosition();
    }
    return this;
  };

  // Override
  var PostLayout = function PostLayout(parent, newWidth, newHeight) {
    return this;
  };

  // Default method
  var RunWidthWrap$1 = function RunWidthWrap(parentWidth) {
    var child, childWidth;
    for (var i in this.sizerChildren) {
      child = this.sizerChildren[i];
      if (!child || child.isRexSizer && child.ignoreLayout || !child.runWidthWrap) {
        continue;
      }
      childWidth = this.getExpandedChildWidth(child, parentWidth);
      if (child.isRexSizer) {
        childWidth = child.resolveWidth(childWidth);
      }
      child.runWidthWrap(childWidth);
    }
    return this;
  };

  var EventEmitterMethods$1 = {
    setEventEmitter: function setEventEmitter(eventEmitter, EventEmitterClass) {
      if (EventEmitterClass === undefined) {
        EventEmitterClass = Phaser.Events.EventEmitter; // Use built-in EventEmitter class by default
      }

      this._privateEE = eventEmitter === true || eventEmitter === undefined;
      this._eventEmitter = this._privateEE ? new EventEmitterClass() : eventEmitter;
      return this;
    },
    destroyEventEmitter: function destroyEventEmitter() {
      if (this._eventEmitter && this._privateEE) {
        this._eventEmitter.shutdown();
      }
      return this;
    },
    getEventEmitter: function getEventEmitter() {
      return this._eventEmitter;
    },
    on: function on() {
      if (this._eventEmitter) {
        this._eventEmitter.on.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    once: function once() {
      if (this._eventEmitter) {
        this._eventEmitter.once.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    off: function off() {
      if (this._eventEmitter) {
        this._eventEmitter.off.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    emit: function emit(event) {
      if (this._eventEmitter && event) {
        this._eventEmitter.emit.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    addListener: function addListener() {
      if (this._eventEmitter) {
        this._eventEmitter.addListener.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    removeListener: function removeListener() {
      if (this._eventEmitter) {
        this._eventEmitter.removeListener.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    removeAllListeners: function removeAllListeners() {
      if (this._eventEmitter) {
        this._eventEmitter.removeAllListeners.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    listenerCount: function listenerCount() {
      if (this._eventEmitter) {
        return this._eventEmitter.listenerCount.apply(this._eventEmitter, arguments);
      }
      return 0;
    },
    listeners: function listeners() {
      if (this._eventEmitter) {
        return this._eventEmitter.listeners.apply(this._eventEmitter, arguments);
      }
      return [];
    },
    eventNames: function eventNames() {
      if (this._eventEmitter) {
        return this._eventEmitter.eventNames.apply(this._eventEmitter, arguments);
      }
      return [];
    }
  };

  var SceneClass = Phaser.Scene;
  var IsSceneObject = function IsSceneObject(object) {
    return object instanceof SceneClass;
  };

  var GetSceneObject = function GetSceneObject(object) {
    if (object == null || _typeof(object) !== 'object') {
      return null;
    } else if (IsSceneObject(object)) {
      // object = scene
      return object;
    } else if (object.scene && IsSceneObject(object.scene)) {
      // object = game object
      return object.scene;
    } else if (object.parent && object.parent.scene && IsSceneObject(object.parent.scene)) {
      // parent = bob object
      return object.parent.scene;
    } else {
      return null;
    }
  };

  var GameClass = Phaser.Game;
  var IsGame = function IsGame(object) {
    return object instanceof GameClass;
  };

  var GetGame = function GetGame(object) {
    if (object == null || _typeof(object) !== 'object') {
      return null;
    } else if (IsGame(object)) {
      return object;
    } else if (IsGame(object.game)) {
      return object.game;
    } else if (IsSceneObject(object)) {
      // object = scene object
      return object.sys.game;
    } else if (IsSceneObject(object.scene)) {
      // object = game object
      return object.scene.sys.game;
    }
  };

  var GetValue$10 = Phaser.Utils.Objects.GetValue;
  var ComponentBase = /*#__PURE__*/function () {
    function ComponentBase(parent, config) {
      _classCallCheck(this, ComponentBase);
      this.setParent(parent); // gameObject, scene, or game

      this.isShutdown = false;

      // Event emitter, default is private event emitter
      this.setEventEmitter(GetValue$10(config, 'eventEmitter', true));

      // Register callback of parent destroy event, also see `shutdown` method
      if (this.parent) {
        if (this.parent === this.scene) {
          // parent is a scene
          this.scene.sys.events.once('shutdown', this.onEnvDestroy, this);
        } else if (this.parent === this.game) {
          // parent is game
          this.game.events.once('shutdown', this.onEnvDestroy, this);
        } else if (this.parent.once) {
          // parent is game object or something else
          this.parent.once('destroy', this.onParentDestroy, this);
        }

        // bob object does not have event emitter
      }
    }
    _createClass(ComponentBase, [{
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        // parent might not be shutdown yet
        if (this.parent) {
          if (this.parent === this.scene) {
            // parent is a scene
            this.scene.sys.events.off('shutdown', this.onEnvDestroy, this);
          } else if (this.parent === this.game) {
            // parent is game
            this.game.events.off('shutdown', this.onEnvDestroy, this);
          } else if (this.parent.once) {
            // parent is game object or something else
            this.parent.off('destroy', this.onParentDestroy, this);
          }

          // bob object does not have event emitter
        }

        this.destroyEventEmitter();
        this.parent = undefined;
        this.scene = undefined;
        this.game = undefined;
        this.isShutdown = true;
      }
    }, {
      key: "destroy",
      value: function destroy(fromScene) {
        this.shutdown(fromScene);
      }
    }, {
      key: "onEnvDestroy",
      value: function onEnvDestroy() {
        this.destroy(true);
      }
    }, {
      key: "onParentDestroy",
      value: function onParentDestroy(parent, fromScene) {
        this.destroy(fromScene);
      }
    }, {
      key: "setParent",
      value: function setParent(parent) {
        this.parent = parent; // gameObject, scene, or game

        this.scene = GetSceneObject(parent);
        this.game = GetGame(parent);
        return this;
      }
    }]);
    return ComponentBase;
  }();
  Object.assign(ComponentBase.prototype, EventEmitterMethods$1);

  var ResizeGameObject = function ResizeGameObject(gameObject, newWidth, newHeight) {
    if (!gameObject || newWidth === undefined && newHeight === undefined) {
      return;
    }
    if (HasResizeMethod(gameObject)) {
      // Has `resize`, or `setSize` method
      if (newWidth === undefined) {
        newWidth = gameObject.width;
      }
      if (newHeight === undefined) {
        newHeight = gameObject.height;
      }
      if (gameObject.resize) {
        gameObject.resize(newWidth, newHeight);
      } else {
        gameObject.setSize(newWidth, newHeight);
      }
    } else {
      // Set display width/height
      if (newWidth !== undefined) {
        gameObject.displayWidth = newWidth;
      }
      if (newHeight !== undefined) {
        gameObject.displayHeight = newHeight;
      }
    }
  };
  var ExcludeClassList = [Phaser.GameObjects.Image, Phaser.GameObjects.Sprite, Phaser.GameObjects.Mesh, Phaser.GameObjects.Shader, Phaser.GameObjects.Video];
  var HasResizeMethod = function HasResizeMethod(gameObject) {
    // 1st pass : Has `resize` method?
    if (gameObject.resize) {
      return true;
    }

    // 2nd pass : Has `setSize` method?
    if (!gameObject.setSize) {
      return false;
    }
    for (var i = 0, cnt = ExcludeClassList.length; i < cnt; i++) {
      var excludeClass = ExcludeClassList[i];
      if (excludeClass && gameObject instanceof excludeClass) {
        return false;
      }
    }
    return true;
  };

  var DefaultResizeCallback = function DefaultResizeCallback(width, height, gameObject, anchor) {
    ResizeGameObject(gameObject, width, height);
  };

  var GetValue$$ = Phaser.Utils.Objects.GetValue;
  var Anchor = /*#__PURE__*/function (_ComponentBase) {
    _inherits(Anchor, _ComponentBase);
    var _super = _createSuper(Anchor);
    function Anchor(gameObject, config) {
      var _this;
      _classCallCheck(this, Anchor);
      _this = _super.call(this, gameObject, {
        eventEmitter: false
      });
      // No event emitter
      // this.parent = gameObject;

      _this.viewport = undefined;
      _this.resetFromJSON(config);
      return _this;
    }
    _createClass(Anchor, [{
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }
        this.autoAnchor(false);
        this.viewport = undefined;
        this.onUpdateViewportCallback = undefined;
        this.onUpdateViewportCallbackScope = undefined;
        this.onResizeCallback = undefined;
        this.onResizeCallbackScope = undefined;
        _get(_getPrototypeOf(Anchor.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        if (o === undefined) {
          o = {};
        }

        // Position
        var alignX, configX;
        if (o.x !== undefined) {
          alignX = null;
          configX = o.x;
        } else if (o.left !== undefined) {
          alignX = 0;
          configX = o.left;
        } else if (o.right !== undefined) {
          alignX = 1;
          configX = o.right;
        } else if (o.centerX !== undefined) {
          alignX = 0.5;
          configX = o.centerX;
        }
        var alignY, configY;
        if (o.y !== undefined) {
          alignY = null;
          configY = o.y;
        } else if (o.top !== undefined) {
          alignY = 0;
          configY = o.top;
        } else if (o.bottom !== undefined) {
          alignY = 1;
          configY = o.bottom;
        } else if (o.centerY !== undefined) {
          alignY = 0.5;
          configY = o.centerY;
        }
        var percentageX, offsetX;
        if (configX !== undefined) {
          configX = configX.replace('left', '0%').replace('right', '100%').replace('center', '50%').split('%');
          percentageX = parseFloat(configX[0]) / 100;
          offsetX = configX[1] === '' ? 0 : parseFloat(configX[1]);
        }
        var percentageY, offsetY;
        if (configY !== undefined) {
          configY = configY.replace('top', '0%').replace('bottom', '100%').replace('center', '50%').split('%');
          percentageY = parseFloat(configY[0]) / 100;
          offsetY = configY[1] === '' ? 0 : parseFloat(configY[1]);
        }

        // Size
        var configWidth = o.width;
        var percentageWidth, paddingWidth;
        if (configWidth !== undefined) {
          configWidth = configWidth.split('%');
          percentageWidth = parseFloat(configWidth[0]) / 100;
          paddingWidth = configWidth[1] === '' ? 0 : parseFloat(configWidth[1]);
        }
        var configHeight = o.height;
        var percentageHeight, paddingHeight;
        if (configHeight !== undefined) {
          configHeight = configHeight.split('%');
          percentageHeight = parseFloat(configHeight[0]) / 100;
          paddingHeight = configHeight[1] === '' ? 0 : parseFloat(configHeight[1]);
        }

        // Position
        this.setAlign(alignX, alignY);
        this.setPercentage(percentageX, percentageY);
        this.setOffset(offsetX, offsetY);
        // Size
        this.setSizePercentage(percentageWidth, percentageHeight);
        this.setSizePadding(paddingWidth, paddingHeight);
        var onResizeCallback = GetValue$$(o, 'onResizeCallback', DefaultResizeCallback);
        var onResizeCallbackScope = GetValue$$(o, 'onResizeCallbackScope');
        this.setResizeCallback(onResizeCallback, onResizeCallbackScope);
        var onUpdateViewportCallback = GetValue$$(o, 'onUpdateViewportCallback');
        var onUpdateViewportCallbackScope = GetValue$$(o, 'onUpdateViewportCallbackScope');
        this.setUpdateViewportCallback(onUpdateViewportCallback, onUpdateViewportCallbackScope);
        this.autoAnchor(o.enable);
        return this;
      }
    }, {
      key: "autoAnchor",
      value: function autoAnchor(enable) {
        if (enable === undefined) {
          enable = true;
        }
        enable = !!enable;
        if (this.autoAnchorEnable === enable) {
          return this;
        }
        if (enable) {
          this.scene.sys.scale.on('resize', this.anchor, this);
          this.anchor();
        } else {
          this.scene.sys.scale.off('resize', this.anchor, this);
        }
        this.autoAnchorEnable = enable;
        return this;
      }

      // Position
    }, {
      key: "setAlign",
      value: function setAlign(x, y) {
        this.alignX = x;
        this.alignY = y;
        return this;
      }
    }, {
      key: "setPercentage",
      value: function setPercentage(x, y) {
        this.percentageX = x;
        this.percentageY = y;
        return this;
      }
    }, {
      key: "setOffset",
      value: function setOffset(x, y) {
        this.offsetX = x;
        this.offsetY = y;
        return this;
      }

      // Size
    }, {
      key: "setSizePercentage",
      value: function setSizePercentage(width, height) {
        this.percentageWidth = width;
        this.percentageHeight = height;
        return this;
      }
    }, {
      key: "setSizePadding",
      value: function setSizePadding(width, height) {
        this.paddingWidth = width;
        this.paddingHeight = height;
        return this;
      }
    }, {
      key: "setResizeCallback",
      value: function setResizeCallback(callback, scope) {
        this.onResizeCallback = callback;
        this.onResizeCallbackScope = scope;
        return this;
      }
    }, {
      key: "setUpdateViewportCallback",
      value: function setUpdateViewportCallback(callback, scope) {
        this.onUpdateViewportCallback = callback;
        this.onUpdateViewportCallbackScope = scope;
        return this;
      }
    }, {
      key: "anchor",
      value: function anchor() {
        this.updateViewport();
        this.updateSize();
        this.updatePosition();
        return this;
      }
    }, {
      key: "updateSize",
      value: function updateSize() {
        var callback = this.onResizeCallback,
          scope = this.onResizeCallbackScope;
        var newWidth = this.anchorWidth,
          newHeight = this.anchorHeight;
        if (newWidth === undefined && newHeight === undefined || !callback) {
          return;
        }
        var gameObject = this.parent;
        if (newWidth === undefined) {
          newWidth = gameObject.width;
        }
        if (newHeight === undefined) {
          newHeight = gameObject.height;
        }
        if (scope) {
          callback.call(scope, newWidth, newHeight, gameObject, this);
        } else {
          callback(newWidth, newHeight, gameObject, this);
        }
      }
    }, {
      key: "updatePosition",
      value: function updatePosition() {
        var gameObject = this.parent;
        if (this.alignX === null) {
          gameObject.x = this.anchorX;
        } else if (this.alignX !== undefined) {
          gameObject.x = this.anchorX + gameObject.displayWidth * (gameObject.originX - this.alignX);
        }
        if (this.alignY === null) {
          gameObject.y = this.anchorY;
        } else if (this.alignY !== undefined) {
          gameObject.y = this.anchorY + gameObject.displayHeight * (gameObject.originY - this.alignY);
        }
        return this;
      }
    }, {
      key: "anchorX",
      get: function get() {
        return this.viewport.x + this.viewport.width * this.percentageX + this.offsetX;
      }
    }, {
      key: "anchorY",
      get: function get() {
        return this.viewport.y + this.viewport.height * this.percentageY + this.offsetY;
      }
    }, {
      key: "anchorWidth",
      get: function get() {
        if (this.percentageWidth === undefined) {
          return undefined;
        }
        return this.viewport.width * this.percentageWidth + this.paddingWidth;
      }
    }, {
      key: "anchorHeight",
      get: function get() {
        if (this.percentageHeight === undefined) {
          return undefined;
        }
        return this.viewport.height * this.percentageHeight + this.paddingHeight;
      }
    }, {
      key: "updateViewport",
      value: function updateViewport() {
        var camera = this.parent.scene.cameras.main;
        this.viewport = GetViewport(this.scene, camera, this.viewport);
        var viewport = this.viewport;
        var callback = this.onUpdateViewportCallback,
          scope = this.onUpdateViewportCallbackScope;
        if (callback) {
          if (scope) {
            callback.call(scope, viewport, this.parent, this);
          } else {
            callback(viewport, this.parent, this);
          }
        }
      }
    }]);
    return Anchor;
  }(ComponentBase);

  var SetAnchor = function SetAnchor(config) {
    if (config === undefined) {
      config = {};
    }

    // Assign default onResizeCallback if not given    
    var hasMinWidth = config.hasOwnProperty('width');
    var hasMinHeight = config.hasOwnProperty('height');
    var hasOnResizeCallback = config.hasOwnProperty('onResizeCallback');
    if ((hasMinWidth || hasMinHeight) && !hasOnResizeCallback) {
      config.onResizeCallback = function (width, height, sizer) {
        if (hasMinWidth) {
          sizer.setMinWidth(width);
        }
        if (hasMinHeight) {
          sizer.setMinHeight(height);
        }
        sizer.layout();
      };
    }
    if (this._anchor === undefined) {
      this._anchor = new Anchor(this, config);
    } else {
      this._anchor.resetFromJSON(config);
    }
    return this;
  };

  var GetValue$_ = Phaser.Utils.Objects.GetValue;
  var TickTask = /*#__PURE__*/function (_ComponentBase) {
    _inherits(TickTask, _ComponentBase);
    var _super = _createSuper(TickTask);
    function TickTask(parent, config) {
      var _this;
      _classCallCheck(this, TickTask);
      _this = _super.call(this, parent, config);
      _this._isRunning = false;
      _this.isPaused = false;
      _this.tickingState = false;
      _this.setTickingMode(GetValue$_(config, 'tickingMode', 1));
      // boot() later
      return _this;
    }

    // override
    _createClass(TickTask, [{
      key: "boot",
      value: function boot() {
        if (this.tickingMode === 2 && !this.tickingState) {
          this.startTicking();
        }
      }

      // override
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }
        this.stop();
        if (this.tickingState) {
          this.stopTicking();
        }
        _get(_getPrototypeOf(TickTask.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "setTickingMode",
      value: function setTickingMode(mode) {
        if (typeof mode === 'string') {
          mode = TICKINGMODE[mode];
        }
        this.tickingMode = mode;
      }

      // override
    }, {
      key: "startTicking",
      value: function startTicking() {
        this.tickingState = true;
      }

      // override
    }, {
      key: "stopTicking",
      value: function stopTicking() {
        this.tickingState = false;
      }
    }, {
      key: "isRunning",
      get: function get() {
        return this._isRunning;
      },
      set: function set(value) {
        if (this._isRunning === value) {
          return;
        }
        this._isRunning = value;
        if (this.tickingMode === 1 && value != this.tickingState) {
          if (value) {
            this.startTicking();
          } else {
            this.stopTicking();
          }
        }
      }
    }, {
      key: "start",
      value: function start() {
        this.isPaused = false;
        this.isRunning = true;
        return this;
      }
    }, {
      key: "pause",
      value: function pause() {
        // Only can ba paused in running state
        if (this.isRunning) {
          this.isPaused = true;
          this.isRunning = false;
        }
        return this;
      }
    }, {
      key: "resume",
      value: function resume() {
        // Only can ba resumed in paused state (paused from running state)
        if (this.isPaused) {
          this.isRunning = true;
        }
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.isPaused = false;
        this.isRunning = false;
        return this;
      }
    }, {
      key: "complete",
      value: function complete() {
        this.isPaused = false;
        this.isRunning = false;
        this.emit('complete', this.parent, this);
      }
    }]);
    return TickTask;
  }(ComponentBase);
  var TICKINGMODE = {
    'no': 0,
    'lazy': 1,
    'always': 2
  };

  var GetValue$Z = Phaser.Utils.Objects.GetValue;
  var SceneUpdateTickTask = /*#__PURE__*/function (_TickTask) {
    _inherits(SceneUpdateTickTask, _TickTask);
    var _super = _createSuper(SceneUpdateTickTask);
    function SceneUpdateTickTask(parent, config) {
      var _this;
      _classCallCheck(this, SceneUpdateTickTask);
      _this = _super.call(this, parent, config);

      // scene update : update, preupdate, postupdate, prerender, render
      // game update : step, poststep, 

      // If this.scene is not available, use game's 'step' event
      var defaultEventName = _this.scene ? 'update' : 'step';
      _this.tickEventName = GetValue$Z(config, 'tickEventName', defaultEventName);
      _this.isSceneTicker = !IsGameUpdateEvent(_this.tickEventName);
      return _this;
    }
    _createClass(SceneUpdateTickTask, [{
      key: "startTicking",
      value: function startTicking() {
        _get(_getPrototypeOf(SceneUpdateTickTask.prototype), "startTicking", this).call(this);
        if (this.isSceneTicker) {
          this.scene.sys.events.on(this.tickEventName, this.update, this);
        } else {
          this.game.events.on(this.tickEventName, this.update, this);
        }
      }
    }, {
      key: "stopTicking",
      value: function stopTicking() {
        _get(_getPrototypeOf(SceneUpdateTickTask.prototype), "stopTicking", this).call(this);
        if (this.isSceneTicker && this.scene) {
          // Scene might be destoryed
          this.scene.sys.events.off(this.tickEventName, this.update, this);
        } else if (this.game) {
          this.game.events.off(this.tickEventName, this.update, this);
        }
      }

      // update(time, delta) {
      //     
      // }
    }]);
    return SceneUpdateTickTask;
  }(TickTask);
  var IsGameUpdateEvent = function IsGameUpdateEvent(eventName) {
    return eventName === 'step' || eventName === 'poststep';
  };

  var GetValue$Y = Phaser.Utils.Objects.GetValue;
  var Clamp$5 = Phaser.Math.Clamp;
  var Timer = /*#__PURE__*/function () {
    function Timer(config) {
      _classCallCheck(this, Timer);
      this.resetFromJSON(config);
    }
    _createClass(Timer, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.state = GetValue$Y(o, 'state', IDLE$6);
        this.timeScale = GetValue$Y(o, 'timeScale', 1);
        this.delay = GetValue$Y(o, 'delay', 0);
        this.repeat = GetValue$Y(o, 'repeat', 0);
        this.repeatCounter = GetValue$Y(o, 'repeatCounter', 0);
        this.repeatDelay = GetValue$Y(o, 'repeatDelay', 0);
        this.duration = GetValue$Y(o, 'duration', 0);
        this.nowTime = GetValue$Y(o, 'nowTime', 0);
        this.justRestart = GetValue$Y(o, 'justRestart', false);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          state: this.state,
          timeScale: this.timeScale,
          delay: this.delay,
          repeat: this.repeat,
          repeatCounter: this.repeatCounter,
          repeatDelay: this.repeatDelay,
          duration: this.duration,
          nowTime: this.nowTime,
          justRestart: this.justRestart
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {}
    }, {
      key: "setTimeScale",
      value: function setTimeScale(timeScale) {
        this.timeScale = timeScale;
        return this;
      }
    }, {
      key: "setDelay",
      value: function setDelay(delay) {
        if (delay === undefined) {
          delay = 0;
        }
        this.delay = delay;
        return this;
      }
    }, {
      key: "setDuration",
      value: function setDuration(duration) {
        this.duration = duration;
        return this;
      }
    }, {
      key: "setRepeat",
      value: function setRepeat(repeat) {
        this.repeat = repeat;
        return this;
      }
    }, {
      key: "setRepeatInfinity",
      value: function setRepeatInfinity() {
        this.repeat = -1;
        return this;
      }
    }, {
      key: "setRepeatDelay",
      value: function setRepeatDelay(repeatDelay) {
        this.repeatDelay = repeatDelay;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        this.nowTime = this.delay > 0 ? -this.delay : 0;
        this.state = this.nowTime >= 0 ? COUNTDOWN : DELAY;
        this.repeatCounter = 0;
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.state = IDLE$6;
        return this;
      }
    }, {
      key: "update",
      value: function update(time, delta) {
        if (this.state === IDLE$6 || this.state === DONE || delta === 0 || this.timeScale === 0) {
          return;
        }
        this.nowTime += delta * this.timeScale;
        this.justRestart = false;
        if (this.nowTime >= this.duration) {
          if (this.repeat === -1 || this.repeatCounter < this.repeat) {
            this.repeatCounter++;
            this.justRestart = true;
            this.nowTime -= this.duration;
            if (this.repeatDelay > 0) {
              this.nowTime -= this.repeatDelay;
              this.state = REPEATDELAY;
            }
          } else {
            this.nowTime = this.duration;
            this.state = DONE;
          }
        } else if (this.nowTime >= 0) {
          this.state = COUNTDOWN;
        }
      }
    }, {
      key: "t",
      get: function get() {
        var t;
        switch (this.state) {
          case IDLE$6:
          case DELAY:
          case REPEATDELAY:
            t = 0;
            break;
          case COUNTDOWN:
            t = this.nowTime / this.duration;
            break;
          case DONE:
            t = 1;
            break;
        }
        return Clamp$5(t, 0, 1);
      },
      set: function set(value) {
        value = Clamp$5(value, -1, 1);
        if (value < 0) {
          this.state = DELAY;
          this.nowTime = -this.delay * value;
        } else {
          this.state = COUNTDOWN;
          this.nowTime = this.duration * value;
          if (value === 1 && this.repeat !== 0) {
            this.repeatCounter++;
          }
        }
      }
    }, {
      key: "setT",
      value: function setT(t) {
        this.t = t;
        return this;
      }
    }, {
      key: "isIdle",
      get: function get() {
        return this.state === IDLE$6;
      }
    }, {
      key: "isDelay",
      get: function get() {
        return this.state === DELAY;
      }
    }, {
      key: "isCountDown",
      get: function get() {
        return this.state === COUNTDOWN;
      }
    }, {
      key: "isRunning",
      get: function get() {
        return this.state === DELAY || this.state === COUNTDOWN;
      }
    }, {
      key: "isDone",
      get: function get() {
        return this.state === DONE;
      }
    }, {
      key: "isOddIteration",
      get: function get() {
        return (this.repeatCounter & 1) === 1;
      }
    }, {
      key: "isEvenIteration",
      get: function get() {
        return (this.repeatCounter & 1) === 0;
      }
    }]);
    return Timer;
  }();
  var IDLE$6 = 0;
  var DELAY = 1;
  var COUNTDOWN = 2;
  var REPEATDELAY = 3;
  var DONE = -1;

  var TimerTickTask = /*#__PURE__*/function (_TickTask) {
    _inherits(TimerTickTask, _TickTask);
    var _super = _createSuper(TimerTickTask);
    function TimerTickTask(parent, config) {
      var _this;
      _classCallCheck(this, TimerTickTask);
      _this = _super.call(this, parent, config);
      _this.timer = new Timer();
      // boot() later 
      return _this;
    }

    // override
    _createClass(TimerTickTask, [{
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }
        _get(_getPrototypeOf(TimerTickTask.prototype), "shutdown", this).call(this, fromScene);
        this.timer.destroy();
        this.timer = undefined;
      }
    }, {
      key: "start",
      value: function start() {
        this.timer.start();
        _get(_getPrototypeOf(TimerTickTask.prototype), "start", this).call(this);
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.timer.stop();
        _get(_getPrototypeOf(TimerTickTask.prototype), "stop", this).call(this);
        return this;
      }
    }, {
      key: "complete",
      value: function complete() {
        this.timer.stop();
        _get(_getPrototypeOf(TimerTickTask.prototype), "complete", this).call(this);
        return this;
      }
    }]);
    return TimerTickTask;
  }(SceneUpdateTickTask);

  var GetValue$X = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$3 = Phaser.Utils.Objects.GetAdvancedValue;
  var GetEaseFunction = Phaser.Tweens.Builders.GetEaseFunction;
  var EaseValueTaskBase = /*#__PURE__*/function (_TimerTask) {
    _inherits(EaseValueTaskBase, _TimerTask);
    var _super = _createSuper(EaseValueTaskBase);
    function EaseValueTaskBase() {
      _classCallCheck(this, EaseValueTaskBase);
      return _super.apply(this, arguments);
    }
    _createClass(EaseValueTaskBase, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.timer.resetFromJSON(GetValue$X(o, 'timer'));
        this.setEnable(GetValue$X(o, 'enable', true));
        this.setTarget(GetValue$X(o, 'target', this.parent));
        this.setDelay(GetAdvancedValue$3(o, 'delay', 0));
        this.setDuration(GetAdvancedValue$3(o, 'duration', 1000));
        this.setEase(GetValue$X(o, 'ease', 'Linear'));
        this.setRepeat(GetValue$X(o, 'repeat', 0));
        return this;
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e == undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "setTarget",
      value: function setTarget(target) {
        if (target === undefined) {
          target = this.parent;
        }
        this.target = target;
        return this;
      }
    }, {
      key: "setDelay",
      value: function setDelay(time) {
        this.delay = time;
        // Assign `this.timer.setRepeat(repeat)` manually
        return this;
      }
    }, {
      key: "setDuration",
      value: function setDuration(time) {
        this.duration = time;
        return this;
      }
    }, {
      key: "setRepeat",
      value: function setRepeat(repeat) {
        this.repeat = repeat;
        // Assign `this.timer.setRepeat(repeat)` manually
        return this;
      }
    }, {
      key: "setRepeatDelay",
      value: function setRepeatDelay(repeatDelay) {
        this.repeatDelay = repeatDelay;
        // Assign `this.timer.setRepeatDelay(repeatDelay)` manually
        return this;
      }
    }, {
      key: "setEase",
      value: function setEase(ease) {
        if (ease === undefined) {
          ease = 'Linear';
        }
        this.ease = ease;
        this.easeFn = GetEaseFunction(ease);
        return this;
      }

      // Override
    }, {
      key: "start",
      value: function start() {
        // Ignore start if timer is running, i.e. in DELAY, o RUN state
        if (this.timer.isRunning) {
          return this;
        }
        _get(_getPrototypeOf(EaseValueTaskBase.prototype), "start", this).call(this);
        return this;
      }
    }, {
      key: "restart",
      value: function restart() {
        this.timer.stop();
        this.start.apply(this, arguments);
        return this;
      }
    }, {
      key: "stop",
      value: function stop(toEnd) {
        if (toEnd === undefined) {
          toEnd = false;
        }
        _get(_getPrototypeOf(EaseValueTaskBase.prototype), "stop", this).call(this);
        if (toEnd) {
          this.timer.setT(1);
          this.updateGameObject(this.target, this.timer);
          this.complete();
        }
        return this;
      }
    }, {
      key: "update",
      value: function update(time, delta) {
        if (!this.isRunning || !this.enable || !this.parent.active) {
          return this;
        }
        var target = this.target,
          timer = this.timer;
        timer.update(time, delta);

        // isDelay, isCountDown, isDone
        if (!timer.isDelay) {
          this.updateGameObject(target, timer);
        }
        this.emit('update', target, this);
        if (timer.isDone) {
          this.complete();
        }
        return this;
      }

      // Override
    }, {
      key: "updateGameObject",
      value: function updateGameObject(target, timer) {}
    }]);
    return EaseValueTaskBase;
  }(TimerTickTask);

  var GetValue$W = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$2 = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear$5 = Phaser.Math.Linear;
  var Scale = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(Scale, _EaseValueTaskBase);
    var _super = _createSuper(Scale);
    function Scale(gameObject, config) {
      var _this;
      _classCallCheck(this, Scale);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;
      // this.timer

      _this.scaleStart = {};
      _this.scaleEnd = {};
      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(Scale, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(Scale.prototype), "resetFromJSON", this).call(this, o);
        this.setMode(GetValue$W(o, 'mode', 0));
        this.setScaleRange(GetAdvancedValue$2(o, 'start', undefined), GetAdvancedValue$2(o, 'end', 0));
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = MODE$3[m];
        }
        this.mode = m;
        return this;
      }
    }, {
      key: "setScaleRange",
      value: function setScaleRange(start, end) {
        if (typeof start === 'number') {
          this.startX = start;
          this.startY = start;
        } else {
          this.startX = GetAdvancedValue$2(start, 'x', this.parent.scaleX);
          this.startY = GetAdvancedValue$2(start, 'y', this.parent.scaleY);
        }
        if (typeof end === 'number') {
          this.endX = end;
          this.endY = end;
        } else {
          this.endX = GetAdvancedValue$2(end, 'x', undefined);
          this.endY = GetAdvancedValue$2(end, 'y', undefined);
        }
        this.hasScaleX = this.startX !== undefined && this.endX !== undefined;
        this.hasScaleY = this.startY !== undefined && this.endY !== undefined;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        if (this.timer.isRunning) {
          return this;
        }
        var gameObject = this.parent;
        if (this.hasScaleX) {
          gameObject.scaleX = this.startX;
        }
        if (this.hasScaleY) {
          gameObject.scaleY = this.startY;
        }
        var repeat = this.repeat;
        if (this.mode === 2) {
          // Yoyo
          if (repeat !== -1) {
            repeat = (repeat + 1) * 2 - 1;
          }
        }
        this.timer.setDelay(this.delay).setDuration(this.duration).setRepeat(repeat);
        _get(_getPrototypeOf(Scale.prototype), "start", this).call(this);
        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {
        var t = timer.t;
        if (timer.isOddIteration) {
          // Yoyo
          t = 1 - t;
        }
        t = this.easeFn(t);
        if (this.hasScaleX) {
          gameObject.scaleX = Linear$5(this.startX, this.endX, t);
        }
        if (this.hasScaleY) {
          gameObject.scaleY = Linear$5(this.startY, this.endY, t);
        }
      }
    }, {
      key: "complete",
      value: function complete() {
        _get(_getPrototypeOf(Scale.prototype), "complete", this).call(this);
        if (this.mode === 1) {
          this.parent.destroy();
          // Will also destroy this behavior
        }

        return this;
      }
    }]);
    return Scale;
  }(EaseValueTaskBase);
  var MODE$3 = {
    stop: 0,
    destroy: 1,
    yoyo: 2
  };

  var PopUp = function PopUp(gameObject, duration, orientation, ease, scale) {
    if (ease === undefined) {
      ease = 'Cubic';
    }

    // Ease scale from 0 to current scale
    var start, end;
    switch (orientation) {
      case 0:
      case 'x':
        start = {
          x: 0
        };
        end = {
          x: gameObject.scaleX
        };
        break;
      case 1:
      case 'y':
        start = {
          y: 0
        };
        end = {
          y: gameObject.scaleY
        };
        break;
      default:
        start = 0;
        end = gameObject.scale;
        break;
    }
    var config = {
      mode: 0,
      start: start,
      end: end,
      duration: duration,
      ease: ease
    };
    if (scale === undefined) {
      scale = new Scale(gameObject, config);
    } else {
      scale.resetFromJSON(config);
    }
    scale.restart();
    return scale;
  };

  var ScaleDownDestroy = function ScaleDownDestroy(gameObject, duration, orientation, ease, destroyMode, scale) {
    if (ease === undefined) {
      ease = 'Linear';
    }

    // Ease from current scale to 0
    if (destroyMode instanceof Scale) {
      scale = destroyMode;
      destroyMode = undefined;
    }
    if (destroyMode === undefined) {
      destroyMode = true;
    }
    var config = {};
    config.mode = destroyMode ? 1 : 0;
    switch (orientation) {
      case 0:
      case 'x':
        config.end = {
          x: 0
        };
        break;
      case 1:
      case 'y':
        config.end = {
          y: 0
        };
        break;
      default:
        config.end = 0;
        break;
    }
    config.duration = duration;
    config.ease = ease;
    if (scale === undefined) {
      scale = new Scale(gameObject, config);
    } else {
      scale.resetFromJSON(config);
    }
    scale.restart();
    return scale;
  };

  var Yoyo = function Yoyo(gameObject, duration, peakValue, repeat, orientation, ease, scale) {
    if (peakValue === undefined) {
      peakValue = 1.2;
    }
    if (repeat === undefined) {
      repeat = 0;
    }
    if (ease === undefined) {
      ease = 'Cubic';
    }

    // Ease scale from 0 to current scale
    var start, end;
    switch (orientation) {
      case 0:
      case 'x':
        start = {
          x: gameObject.scaleX
        };
        end = {
          x: peakValue
        };
        break;
      case 1:
      case 'y':
        start = {
          y: gameObject.scaleX
        };
        end = {
          y: peakValue
        };
        break;
      default:
        start = gameObject.scaleX;
        end = peakValue;
        break;
    }
    var config = {
      mode: 2,
      start: start,
      end: end,
      duration: duration / 2,
      ease: ease,
      repeat: repeat
    };
    if (scale === undefined) {
      scale = new Scale(gameObject, config);
    } else {
      scale.resetFromJSON(config);
    }
    scale.restart();
    return scale;
  };

  var WaitEvent = function WaitEvent(eventEmitter, eventName) {
    return new Promise(function (resolve, reject) {
      eventEmitter.once(eventName, function () {
        resolve();
      });
    });
  };
  var WaitComplete = function WaitComplete(eventEmitter) {
    return WaitEvent(eventEmitter, 'complete');
  };

  var IsPlainObject$f = Phaser.Utils.Objects.IsPlainObject;
  var OnInitScale = function OnInitScale(gameObject, scale) {
    // Route 'complete' of scale to gameObject
    scale.completeEventName = undefined;
    scale.on('complete', function () {
      if (scale.completeEventName) {
        gameObject.emit(scale.completeEventName, gameObject);
        scale.completeEventName = undefined;
      }
    });

    // Update local state
    scale.on('update', function () {
      var parent = GetParentSizerMethods.getParentSizer(gameObject);
      if (parent) {
        parent.resetChildPositionState(gameObject);
      }
    });
  };
  var ScaleMethods = {
    popUp: function popUp(duration, orientation, ease) {
      if (IsPlainObject$f(duration)) {
        var config = duration;
        duration = config.duration;
        orientation = config.orientation;
        ease = config.ease;
      }
      var isInit = this._scaleBehavior === undefined;
      this._scaleBehavior = PopUp(this, duration, orientation, ease, this._scaleBehavior);
      if (isInit) {
        OnInitScale(this, this._scaleBehavior);
      }
      this._scaleBehavior.completeEventName = 'popup.complete';
      return this;
    },
    popUpPromise: function popUpPromise(duration, orientation, ease) {
      this.popUp(duration, orientation, ease);
      return WaitComplete(this._scaleBehavior);
    },
    scaleDownDestroy: function scaleDownDestroy(duration, orientation, ease, destroyMode) {
      if (IsPlainObject$f(duration)) {
        var config = duration;
        duration = config.duration;
        orientation = config.orientation;
        ease = config.ease;
        destroyMode = config.destroy;
      }
      var isInit = this._scaleBehavior === undefined;
      this._scaleBehavior = ScaleDownDestroy(this, duration, orientation, ease, destroyMode, this._scaleBehavior);
      if (isInit) {
        OnInitScale(this, this._scaleBehavior);
      }
      this._scaleBehavior.completeEventName = 'scaledown.complete';
      return this;
    },
    scaleDownDestroyPromise: function scaleDownDestroyPromise(duration, orientation, ease, destroyMode) {
      this.scaleDownDestroy(duration, orientation, ease, destroyMode);
      return WaitComplete(this._scaleBehavior);
    },
    scaleDown: function scaleDown(duration, orientation, ease) {
      this.scaleDownDestroy(duration, orientation, ease, false);
      return this;
    },
    scaleDownPromise: function scaleDownPromise(duration, orientation, ease) {
      this.scaleDown(duration, orientation, ease);
      return WaitComplete(this._scaleBehavior);
    },
    scaleYoyo: function scaleYoyo(duration, peakValue, repeat, orientation, ease) {
      if (IsPlainObject$f(duration)) {
        var config = duration;
        duration = config.duration;
        peakValue = config.peakValue;
        repeat = config.repeat;
        orientation = config.orientation;
        ease = config.ease;
      }
      var isInit = this._scaleBehavior === undefined;
      this._scaleBehavior = Yoyo(this, duration, peakValue, repeat, orientation, ease, this._scaleBehavior);
      if (isInit) {
        OnInitScale(this, this._scaleBehavior);
      }
      this._scaleBehavior.completeEventName = 'scaleyoyo.complete';
      return this;
    },
    scaleYoyoPromise: function scaleYoyoPromise(duration, peakValue, repeat, orientation, ease) {
      this.scaleYoyo(duration, peakValue, repeat, orientation, ease);
      return WaitComplete(this._scaleBehavior);
    }
  };

  var GetValue$V = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$1 = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear$4 = Phaser.Math.Linear;
  var Fade = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(Fade, _EaseValueTaskBase);
    var _super = _createSuper(Fade);
    function Fade(gameObject, config) {
      var _this;
      _classCallCheck(this, Fade);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;
      // this.timer

      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(Fade, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(Fade.prototype), "resetFromJSON", this).call(this, o);
        this.setMode(GetValue$V(o, 'mode', 0));
        this.setAlphaRange(GetAdvancedValue$1(o, 'start', this.parent.alpha), GetAdvancedValue$1(o, 'end', 0));
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = MODE$2[m];
        }
        this.mode = m;
        return this;
      }
    }, {
      key: "setAlphaRange",
      value: function setAlphaRange(start, end) {
        this.alphaStart = start;
        this.alphaEnd = end;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        if (this.timer.isRunning) {
          return this;
        }
        var gameObject = this.parent;
        gameObject.setAlpha(this.alphaStart);
        this.timer.setDelay(this.delay).setDuration(this.duration).setRepeat(this.mode === 2 ? -1 : 0);
        _get(_getPrototypeOf(Fade.prototype), "start", this).call(this);
        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {
        var t = timer.t;
        if (timer.isOddIteration) {
          // Yoyo
          t = 1 - t;
        }
        gameObject.alpha = Linear$4(this.alphaStart, this.alphaEnd, t);
      }
    }, {
      key: "complete",
      value: function complete() {
        _get(_getPrototypeOf(Fade.prototype), "complete", this).call(this);
        if (this.mode === 1) {
          this.parent.destroy();
          // Will also destroy this behavior
        }

        return this;
      }
    }]);
    return Fade;
  }(EaseValueTaskBase);
  var MODE$2 = {
    stop: 0,
    destroy: 1,
    yoyo: 2
  };

  var IsPlainObject$e = Phaser.Utils.Objects.IsPlainObject;
  var FadeIn = function FadeIn(gameObject, duration, alpha, fade) {
    var startAlpha, endAlpha;
    if (IsPlainObject$e(alpha)) {
      startAlpha = alpha.start;
      endAlpha = alpha.end;
    } else {
      endAlpha = alpha;
    }
    if (startAlpha === undefined) {
      startAlpha = 0;
    }
    if (endAlpha === undefined) {
      endAlpha = 1;
    }
    var config = {
      mode: 0,
      start: startAlpha,
      end: endAlpha,
      duration: duration
    };
    if (fade === undefined) {
      fade = new Fade(gameObject, config);
    } else {
      fade.resetFromJSON(config);
    }
    fade.restart();
    return fade;
  };

  var FadeOutDestroy = function FadeOutDestroy(gameObject, duration, destroyMode, fade) {
    if (destroyMode instanceof Fade) {
      fade = destroyMode;
      destroyMode = undefined;
    }
    if (destroyMode === undefined) {
      destroyMode = true;
    }
    var config = {
      mode: destroyMode ? 1 : 0,
      end: 0,
      duration: duration
    };
    if (fade === undefined) {
      fade = new Fade(gameObject, config);
    } else {
      fade.resetFromJSON(config);
    }
    fade.restart();
    return fade;
  };

  var IsPlainObject$d = Phaser.Utils.Objects.IsPlainObject;
  var OnInitFade = function OnInitFade(gameObject, fade) {
    // Route 'complete' of fade to gameObject
    fade.completeEventName = undefined;
    fade.on('complete', function () {
      if (fade.completeEventName) {
        gameObject.emit(fade.completeEventName, gameObject);
        fade.completeEventName = undefined;
      }
    });

    // Update local state
    fade.on('update', function () {
      var parent = GetParentSizerMethods.getParentSizer(gameObject);
      if (parent) {
        parent.resetChildAlphaState(gameObject);
      }
    });
  };
  var FadeMethods = {
    fadeIn: function fadeIn(duration, alpha) {
      if (IsPlainObject$d(duration)) {
        var config = duration;
        duration = config.duration;
        alpha = config.alpha;
      }
      var isInit = this._fade === undefined;
      this._fade = FadeIn(this, duration, alpha, this._fade);
      if (isInit) {
        OnInitFade(this, this._fade);
      }
      this._fade.completeEventName = 'fadein.complete';
      return this;
    },
    fadeInPromise: function fadeInPromise(duration, alpha) {
      this.fadeIn(duration, alpha);
      return WaitComplete(this._fade);
    },
    fadeOutDestroy: function fadeOutDestroy(duration, destroyMode) {
      if (IsPlainObject$d(duration)) {
        var config = duration;
        duration = config.duration;
        destroyMode = config.destroy;
      }
      var isInit = this._fade === undefined;
      this._fade = FadeOutDestroy(this, duration, destroyMode, this._fade);
      if (isInit) {
        OnInitFade(this, this._fade);
      }
      this._fade.completeEventName = 'fadeout.complete';
      return this;
    },
    fadeOutDestroyPromise: function fadeOutDestroyPromise(duration, destroyMode) {
      this.fadeOutDestroy(duration, destroyMode);
      return WaitComplete(this._fade);
    },
    fadeOut: function fadeOut(duration) {
      this.fadeOutDestroy(duration, false);
      return this;
    },
    fadeOutPromise: function fadeOutPromise(duration) {
      this.fadeOut(duration);
      return WaitComplete(this._fade);
    }
  };

  var GetValue$U = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear$3 = Phaser.Math.Linear;
  var EaseMove = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(EaseMove, _EaseValueTaskBase);
    var _super = _createSuper(EaseMove);
    function EaseMove(gameObject, config) {
      var _this;
      _classCallCheck(this, EaseMove);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;
      // this.timer

      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(EaseMove, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(EaseMove.prototype), "resetFromJSON", this).call(this, o);
        this.setMode(GetValue$U(o, 'mode', 0));
        if (o && (o.hasOwnProperty('x') || o.hasOwnProperty('y'))) {
          var endX = GetAdvancedValue(o, 'x', undefined);
          var endY = GetAdvancedValue(o, 'y', undefined);
          this.setTargetPosition(endX, endY);
        } else {
          this.setTargetPosition(o);
        }
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = MODE$1[m];
        }
        this.mode = m;
        return this;
      }
    }, {
      key: "setTargetPosition",
      value: function setTargetPosition(x, y) {
        if (typeof x === 'number' || typeof y === 'number') {
          // endX, endY
          // x,y : a number, or undefined
          this.startX = this.parent.x;
          this.startY = this.parent.y;
          this.endX = x;
          this.endY = y;
        } else {
          var config = x;
          this.startX = GetAdvancedValue(config, 'startX', undefined);
          this.startY = GetAdvancedValue(config, 'startY', undefined);
          this.endX = GetAdvancedValue(config, 'endX', undefined);
          this.endY = GetAdvancedValue(config, 'endY', undefined);
        }
        this.hasMoveX = this.startX !== undefined && this.endX !== undefined;
        this.hasMoveY = this.startY !== undefined && this.endY !== undefined;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        if (this.timer.isRunning) {
          return this;
        }
        var gameObject = this.parent;
        if (this.hasMoveX) {
          gameObject.x = this.startX;
        }
        if (this.hasMoveY) {
          gameObject.y = this.startY;
        }
        this.timer.setDelay(this.delay).setDuration(this.duration).setRepeat(this.mode === 2 ? -1 : 0);
        _get(_getPrototypeOf(EaseMove.prototype), "start", this).call(this);
        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {
        var t = timer.t;
        if (timer.isOddIteration) {
          // Yoyo
          t = 1 - t;
        }
        t = this.easeFn(t);
        if (this.hasMoveX) {
          gameObject.x = Linear$3(this.startX, this.endX, t);
        }
        if (this.hasMoveY) {
          gameObject.y = Linear$3(this.startY, this.endY, t);
        }
      }
    }, {
      key: "complete",
      value: function complete() {
        _get(_getPrototypeOf(EaseMove.prototype), "complete", this).call(this);
        if (this.mode === 1) {
          this.parent.destroy();
          // Will also destroy this behavior
        }

        return this;
      }
    }]);
    return EaseMove;
  }(EaseValueTaskBase);
  var MODE$1 = {
    stop: 0,
    destroy: 1,
    yoyo: 2
  };

  var ParseValue = function ParseValue(propertyValue, startValue) {
    // propertyValue : number or string
    if (typeof propertyValue === 'number') {
      return propertyValue;
    } else {
      var op = propertyValue[0];
      var num = parseFloat(propertyValue.substr(2));
      switch (op) {
        case '+':
          return startValue + num;
        case '-':
          return startValue - num;
        case '*':
          return startValue * num;
        case '/':
          return startValue / num;
      }
    }
  };

  var EaseMoveTo = function EaseMoveTo(gameObject, duration, endX, endY, ease, destroyMode, easeMove) {
    if (destroyMode instanceof EaseMove) {
      easeMove = destroyMode;
      destroyMode = undefined;
    }
    if (destroyMode === undefined) {
      destroyMode = false;
    }
    var config = {};
    config.mode = destroyMode ? 1 : 0;
    if (endX !== undefined) {
      config.startX = gameObject.x;
      config.endX = ParseValue(endX, gameObject.x);
    }
    if (endY !== undefined) {
      config.startY = gameObject.y;
      config.endY = ParseValue(endY, gameObject.y);
    }
    config.duration = duration;
    config.ease = ease === undefined ? 'Linear' : ease;
    if (easeMove === undefined) {
      easeMove = new EaseMove(gameObject, config);
    } else {
      easeMove.resetFromJSON(config);
    }
    easeMove.restart();
    return easeMove;
  };

  var EaseMoveFrom = function EaseMoveFrom(gameObject, duration, startX, startY, ease, destroyMode, easeMove) {
    if (destroyMode instanceof EaseMove) {
      easeMove = destroyMode;
      destroyMode = undefined;
    }
    if (destroyMode === undefined) {
      destroyMode = false;
    }
    var config = {};
    config.mode = destroyMode ? 1 : 0;
    if (startX !== undefined) {
      config.startX = ParseValue(startX, gameObject.x);
      config.endX = gameObject.x;
    }
    if (startY !== undefined) {
      config.startY = ParseValue(startY, gameObject.y);
      config.endY = gameObject.y;
    }
    config.duration = duration;
    config.ease = ease === undefined ? 'Linear' : ease;
    if (easeMove === undefined) {
      easeMove = new EaseMove(gameObject, config);
    } else {
      easeMove.resetFromJSON(config);
    }
    easeMove.restart();
    return easeMove;
  };

  var IsPlainObject$c = Phaser.Utils.Objects.IsPlainObject;
  var DistanceBetween$4 = Phaser.Math.Distance.Between;
  var OnInitEaseMove = function OnInitEaseMove(gameObject, easeMove) {
    // Route 'complete' of easeMove to gameObject
    easeMove.completeEventName = undefined;
    easeMove.on('complete', function () {
      if (easeMove.completeEventName) {
        gameObject.emit(easeMove.completeEventName, gameObject);
        easeMove.completeEventName = undefined;
      }
    });

    // Update local state
    easeMove.on('update', function () {
      var parent = GetParentSizerMethods.getParentSizer(gameObject);
      if (parent) {
        parent.resetChildPositionState(gameObject);
      }
    });
  };
  var EaseMoveMethods = {
    moveFrom: function moveFrom(duration, x, y, ease, destroyMode) {
      if (IsPlainObject$c(duration)) {
        var config = duration;
        x = config.x;
        y = config.y;
        if (config.hasOwnProperty('speed')) {
          duration = DistanceBetween$4(x, y, this.x, this.y) * 1000 / config.speed;
        } else {
          duration = config.duration;
        }
        ease = config.ease;
      }
      var isInit = this._easeMove === undefined;
      this._easeMove = EaseMoveFrom(this, duration, x, y, ease, destroyMode, this._easeMove);
      if (isInit) {
        OnInitEaseMove(this, this._easeMove);
      }
      this._easeMove.completeEventName = 'movefrom.complete';
      return this;
    },
    moveFromPromise: function moveFromPromise(duration, x, y, ease, destroyMode) {
      this.moveFrom(duration, x, y, ease, destroyMode);
      return WaitComplete(this._easeMove);
    },
    moveFromDestroy: function moveFromDestroy(duration, x, y, ease) {
      this.moveFrom(duration, x, y, ease, true);
      return this;
    },
    moveFromDestroyPromise: function moveFromDestroyPromise(duration, x, y, ease) {
      this.moveFromDestroy(duration, x, y, ease);
      return WaitComplete(this._easeMove);
    },
    moveTo: function moveTo(duration, x, y, ease, destroyMode) {
      if (IsPlainObject$c(duration)) {
        var config = duration;
        x = config.x;
        y = config.y;
        if (config.hasOwnProperty('speed')) {
          duration = DistanceBetween$4(x, y, this.x, this.y) * 1000 / config.speed;
        } else {
          duration = config.duration;
        }
        ease = config.ease;
      }
      var isInit = this._easeMove === undefined;
      this._easeMove = EaseMoveTo(this, duration, x, y, ease, destroyMode, this._easeMove);
      if (isInit) {
        OnInitEaseMove(this, this._easeMove);
      }
      this._easeMove.completeEventName = 'moveto.complete';
      return this;
    },
    moveToPromise: function moveToPromise(duration, x, y, ease, destroyMode) {
      this.moveTo(duration, x, y, ease, destroyMode);
      return WaitComplete(this._easeMove);
    },
    moveToDestroy: function moveToDestroy(duration, x, y, ease) {
      this.moveTo(duration, x, y, ease, true);
      return this;
    },
    moveToDestroyPromise: function moveToDestroyPromise(duration, x, y, ease) {
      this.moveToDestroy(duration, x, y, ease, true);
      return WaitComplete(this._easeMove);
    },
    moveStop: function moveStop(toEnd) {
      if (!this._easeMove) {
        return this;
      }
      this._easeMove.stop(toEnd);
      return this;
    }
  };

  var GetValue$T = Phaser.Utils.Objects.GetValue;
  var ShakePosition = /*#__PURE__*/function (_TickTask) {
    _inherits(ShakePosition, _TickTask);
    var _super = _createSuper(ShakePosition);
    function ShakePosition(gameObject, config) {
      var _this;
      _classCallCheck(this, ShakePosition);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;

      _this.timer = new Timer();
      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(ShakePosition, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.timer.resetFromJSON(GetValue$T(o, 'timer'));
        this.setEnable(GetValue$T(o, 'enable', true));
        this.setMode(GetValue$T(o, 'mode', 1));
        this.isRunning = GetValue$T(o, 'isRunning', false);
        this.setMagnitudeMode(GetValue$T(o, 'magnitudeMode', 1));
        this.setAxisMode(GetValue$T(o, "axis", 0));
        this.setDuration(GetValue$T(o, 'duration', 500));
        this.setMagnitude(GetValue$T(o, 'magnitude', 10));
        this.ox = GetValue$T(o, 'ox', undefined);
        this.oy = GetValue$T(o, 'oy', undefined);
        return this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          timer: this.timer.toJSON(),
          enable: this.enable,
          mode: this.mode,
          isRunning: this.isRunning,
          magnitudeMode: magnitudeMode,
          duration: this.duration,
          magnitude: this.magnitude,
          ox: this.ox,
          oy: this.oy
        };
      }

      // override
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }
        _get(_getPrototypeOf(ShakePosition.prototype), "shutdown", this).call(this, fromScene);
        this.timer.destroy();
        this.timer = undefined;
      }
    }, {
      key: "startTicking",
      value: function startTicking() {
        _get(_getPrototypeOf(ShakePosition.prototype), "startTicking", this).call(this);
        if (this.mode === 0) {
          // Effect mode
          this.scene.game.events.on('poststep', this.update, this);
          this.scene.game.events.on('prestep', this.backToOrigin, this);
        } else {
          // Behavior Mode
          this.scene.sys.events.on('preupdate', this.update, this);
        }
      }
    }, {
      key: "stopTicking",
      value: function stopTicking() {
        _get(_getPrototypeOf(ShakePosition.prototype), "stopTicking", this).call(this);
        if (this.scene) {
          // Scene might be destoryed
          if (this.mode === 0) {
            // Effect mode
            this.scene.game.events.off('poststep', this.update, this);
            this.scene.game.events.off('prestep', this.backToOrigin, this);
          } else {
            // Behavior Mode
            this.scene.sys.events.off('preupdate', this.update, this);
          }
        }
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e == undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(mode) {
        if (typeof mode === 'string') {
          mode = MODE[mode];
        }
        this.mode = mode;
        return this;
      }
    }, {
      key: "setMagnitudeMode",
      value: function setMagnitudeMode(magnitudeMode) {
        if (typeof magnitudeMode === 'string') {
          magnitudeMode = MANITUDEMODE[magnitudeMode];
        }
        this.magnitudeMode = magnitudeMode;
        return this;
      }
    }, {
      key: "setAxisMode",
      value: function setAxisMode(m) {
        if (typeof m === 'string') {
          m = DIRECTIONNODE[m];
        }
        this.axisMode = m;
        return this;
      }
    }, {
      key: "setDuration",
      value: function setDuration(duration) {
        this.duration = duration;
        return this;
      }
    }, {
      key: "setMagnitude",
      value: function setMagnitude(magnitude) {
        this.magnitude = magnitude;
        return this;
      }
    }, {
      key: "start",
      value: function start(duration, magnitude) {
        if (typeof duration !== 'number') {
          var config = duration;
          magnitude = GetValue$T(config, 'magnitude', undefined);
          duration = GetValue$T(config, 'duration', undefined);
        }
        if (magnitude !== undefined) {
          this.setMagnitude(magnitude);
        }
        if (duration !== undefined) {
          this.setDuration(duration);
        }
        this.timer.setDuration(this.duration).start();
        _get(_getPrototypeOf(ShakePosition.prototype), "start", this).call(this);
        return this;
      }
    }, {
      key: "shake",
      value: function shake(duration, magnitude) {
        this.start(duration, magnitude);
        return this;
      }
    }, {
      key: "update",
      value: function update(time, delta) {
        if (!this.isRunning || !this.enable) {
          return this;
        }
        var gameObject = this.parent;
        if (!gameObject.active) {
          return this;
        }
        this.timer.update(time, delta);
        if (this.timer.isDone) {
          this.backToOrigin();
          this.complete();
        } else {
          if (this.ox === undefined) {
            this.ox = gameObject.x;
            this.oy = gameObject.y;
          }
          var magnitude = this.magnitude;
          if (this.magnitudeMode === 1)
            // decay
            {
              magnitude *= 1 - this.timer.t;
            }
          var a = Math.random() * Math.PI * 2;
          var x = this.ox + Math.cos(a) * magnitude;
          var y = this.oy + Math.sin(a) * magnitude;
          switch (this.axisMode) {
            case 1:
              gameObject.x = x;
              break;
            case 2:
              gameObject.y = y;
              break;
            default:
              gameObject.x = x;
              gameObject.y = y;
              break;
          }
        }
        return this;
      }
    }, {
      key: "backToOrigin",
      value: function backToOrigin() {
        if (!this.isRunning || !this.enable) {
          return this;
        }
        if (this.ox === undefined) {
          return this;
        }
        var gameObject = this.parent;
        switch (this.axisMode) {
          case 1:
            gameObject.x = this.ox;
            break;
          case 2:
            gameObject.y = this.oy;
            break;
          default:
            gameObject.x = this.ox;
            gameObject.y = this.oy;
            break;
        }
        this.ox = undefined;
        this.oy = undefined;
        return this;
      }
    }]);
    return ShakePosition;
  }(TickTask);
  var MODE = {
    effect: 0,
    behavior: 1
  };
  var DIRECTIONNODE = {
    'both': 0,
    'h&v': 0,
    'x&y': 0,
    'horizontal': 1,
    'h': 1,
    'x': 1,
    'vertical': 2,
    'v': 2,
    'y': 2
  };
  var MANITUDEMODE = {
    constant: 0,
    decay: 1
  };

  var IsPlainObject$b = Phaser.Utils.Objects.IsPlainObject;
  var OnInitShake = function OnInitShake(gameObject, shake) {
    // Route 'complete' of shake to gameObject
    shake.on('complete', function () {
      gameObject.emit('shake.complete', gameObject);
    });

    // Shake effect won't change position
  };

  var ShakeMethods = {
    shake: function shake(duration, magnitude, magnitudeMode) {
      if (IsPlainObject$b(duration)) {
        var config = duration;
        duration = config.duration;
        magnitude = config.magnitude;
        magnitudeMode = config.magnitudeMode;
      }
      if (this._shake === undefined) {
        this._shake = new ShakePosition(this, {
          mode: 0,
          magnitudeMode: 1
        });
        OnInitShake(this, this._shake);
      }
      if (duration !== undefined) {
        this._shake.setDuration(duration);
      }
      if (magnitude !== undefined) {
        this._shake.setMagnitude(magnitude);
      }
      if (magnitudeMode !== undefined) {
        this._shake.setMagnitudeMode(magnitudeMode);
      }
      this._shake.shake();
      return this;
    },
    shakePromise: function shakePromise(duration, alpha) {
      this.shake(duration, alpha);
      return WaitComplete(this._shake);
    }
  };

  var GetValue$S = Phaser.Utils.Objects.GetValue;
  var Linear$2 = Phaser.Math.Linear;
  var EaseValueTask = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(EaseValueTask, _EaseValueTaskBase);
    var _super = _createSuper(EaseValueTask);
    function EaseValueTask(gameObject, config) {
      var _this;
      _classCallCheck(this, EaseValueTask);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;
      // this.timer

      _this.resetFromJSON();
      _this.boot();
      return _this;
    }
    _createClass(EaseValueTask, [{
      key: "start",
      value: function start(config) {
        if (this.timer.isRunning) {
          return this;
        }
        var target = this.target;
        this.propertyKey = GetValue$S(config, 'key', 'value');
        var currentValue = target[this.propertyKey];
        this.fromValue = GetValue$S(config, 'from', currentValue);
        this.toValue = GetValue$S(config, 'to', currentValue);
        this.setEase(GetValue$S(config, 'ease', this.ease));
        this.setDuration(GetValue$S(config, 'duration', this.duration));
        this.setRepeat(GetValue$S(config, 'repeat', 0));
        this.setDelay(GetValue$S(config, 'delay', 0));
        this.setRepeatDelay(GetValue$S(config, 'repeatDelay', 0));
        this.timer.setDuration(this.duration).setRepeat(this.repeat).setDelay(this.delay).setRepeatDelay(this.repeatDelay);
        target[this.propertyKey] = this.fromValue;
        _get(_getPrototypeOf(EaseValueTask.prototype), "start", this).call(this);
        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(target, timer) {
        var t = timer.t;
        t = this.easeFn(t);
        target[this.propertyKey] = Linear$2(this.fromValue, this.toValue, t);
      }
    }]);
    return EaseValueTask;
  }(EaseValueTaskBase);

  var IsPlainObject$a = Phaser.Utils.Objects.IsPlainObject;
  var EaseData = /*#__PURE__*/function (_ComponentBase) {
    _inherits(EaseData, _ComponentBase);
    var _super = _createSuper(EaseData);
    function EaseData(parent, config) {
      var _this;
      _classCallCheck(this, EaseData);
      _this = _super.call(this, parent, config);
      _this.parent.setDataEnabled();
      _this.easeTasks = {};
      return _this;
    }
    _createClass(EaseData, [{
      key: "complete",
      value: function complete(key) {
        this.emit("complete-".concat(key), this.parent, this);
        this.emit('complete', key, this.parent, this);
      }
    }, {
      key: "getEaseTask",
      value: function getEaseTask(key) {
        var easeTask = this.easeTasks[key];
        if (easeTask === undefined) {
          easeTask = new EaseValueTask(this.parent);
          this.easeTasks[key] = easeTask;
          easeTask.setTarget(this.parent.data.values).on('complete', function () {
            this.complete(key);
          }, this);
        }
        return easeTask;
      }
    }, {
      key: "easeTo",
      value: function easeTo(key, value, duration, ease) {
        if (IsPlainObject$a(key)) {
          var config = key;
          key = config.key;
          value = config.value;
          duration = config.duration;
          ease = config.ease;
          var speed = config.speed;
          if (duration === undefined && speed !== undefined) {
            duration = Math.abs(value - this.parent.data.values[key]) / speed * 1000;
          }
        }
        if (duration === undefined) {
          duration = 1000;
        }
        if (ease === undefined) {
          ease = 'Linear';
        }
        var easeTask = this.getEaseTask(key);
        easeTask.restart({
          key: key,
          to: value,
          duration: duration,
          ease: ease
        });
        return this;
      }
    }, {
      key: "easeFrom",
      value: function easeFrom(key, value, duration, ease) {
        if (IsPlainObject$a(key)) {
          var config = key;
          key = config.key;
          value = config.value;
          duration = config.duration;
          ease = config.ease;
          var speed = config.speed;
          if (duration === undefined && speed !== undefined) {
            duration = Math.abs(value - this.parent.data.values[key]) / speed * 1000;
          }
        }
        if (duration === undefined) {
          duration = 1000;
        }
        if (ease === undefined) {
          ease = 'Linear';
        }
        var easeTask = this.getEaseTask(key);
        easeTask.restart({
          key: key,
          from: value,
          duration: duration,
          ease: ease
        });
        return this;
      }
    }, {
      key: "stopEase",
      value: function stopEase(key, toEnd) {
        if (toEnd === undefined) {
          toEnd = true;
        }
        var easeTask = this.easeTasks[key];
        if (easeTask) {
          easeTask.stop(toEnd);
        }
        return this;
      }
    }, {
      key: "stopAll",
      value: function stopAll(toEnd) {
        if (toEnd === undefined) {
          toEnd = true;
        }
        for (var key in this.easeTasks) {
          this.stopEase(key, toEnd);
        }
        return this;
      }
    }]);
    return EaseData;
  }(ComponentBase);

  var OnInitEaseData = function OnInitEaseData(gameObject, easeData) {
    // Route 'complete' of easeData to gameObject
    easeData.on('complete', function (key) {
      gameObject.emit("easedata.".concat(key, ".complete"), gameObject);
      gameObject.emit('easedata.complete', key, gameObject);
    });
  };
  var EaseDataMethods = {
    easeDataTo: function easeDataTo(key, value, duration, ease) {
      if (!this._easeData) {
        this._easeData = new EaseData(this);
        OnInitEaseData(this, this._easeData);
      }
      this._easeData.easeTo(key, value, duration, ease);
      return this;
    },
    easeDataToPromise: function easeDataToPromise(key, value, duration, ease) {
      this.easeDataTo(key, value, duration, ease);
      return WaitEvent(this._easeData, "complete-".concat(key));
    },
    stopEaseData: function stopEaseData(key, toEnd) {
      if (!this._easeData) {
        return this;
      }
      this._easeData.stopEase(key, toEnd);
      return this;
    },
    stopAllEaseData: function stopAllEaseData(toEnd) {
      if (!this._easeData) {
        return this;
      }
      this._easeData.stopAll(toEnd);
      return this;
    }
  };

  var Show = function Show(gameObject) {
    _hide(gameObject, false);
  };
  var Hide = function Hide(gameObject) {
    _hide(gameObject, true);
  };
  var IsShown = function IsShown(gameObject) {
    if (!gameObject) {
      return false;
    }
    var config = GetSizerConfig$1(gameObject);
    return !config.hidden;
  };
  var _hide = function _hide(gameObject, hidden) {
    if (!gameObject) {
      return;
    }
    var config = GetSizerConfig$1(gameObject);
    config.hidden = hidden;
    var parent = GetParent$1(gameObject);
    if (parent) {
      parent.setChildVisible(gameObject, !hidden);
    } else {
      gameObject.setVisible(!hidden);
    }
  };

  var HideMethods = {
    show: function show(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }
      Show(gameObject);
      return this;
    },
    hide: function hide(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }
      Hide(gameObject);
      return this;
    },
    isShow: function isShow(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }
      return IsShown(gameObject);
    }
  };

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var eventemitter3 = {exports: {}};

  (function (module) {

  	var has = Object.prototype.hasOwnProperty
  	  , prefix = '~';

  	/**
  	 * Constructor to create a storage for our `EE` objects.
  	 * An `Events` instance is a plain object whose properties are event names.
  	 *
  	 * @constructor
  	 * @private
  	 */
  	function Events() {}

  	//
  	// We try to not inherit from `Object.prototype`. In some engines creating an
  	// instance in this way is faster than calling `Object.create(null)` directly.
  	// If `Object.create(null)` is not supported we prefix the event names with a
  	// character to make sure that the built-in object properties are not
  	// overridden or used as an attack vector.
  	//
  	if (Object.create) {
  	  Events.prototype = Object.create(null);

  	  //
  	  // This hack is needed because the `__proto__` property is still inherited in
  	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  	  //
  	  if (!new Events().__proto__) prefix = false;
  	}

  	/**
  	 * Representation of a single event listener.
  	 *
  	 * @param {Function} fn The listener function.
  	 * @param {*} context The context to invoke the listener with.
  	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
  	 * @constructor
  	 * @private
  	 */
  	function EE(fn, context, once) {
  	  this.fn = fn;
  	  this.context = context;
  	  this.once = once || false;
  	}

  	/**
  	 * Add a listener for a given event.
  	 *
  	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
  	 * @param {(String|Symbol)} event The event name.
  	 * @param {Function} fn The listener function.
  	 * @param {*} context The context to invoke the listener with.
  	 * @param {Boolean} once Specify if the listener is a one-time listener.
  	 * @returns {EventEmitter}
  	 * @private
  	 */
  	function addListener(emitter, event, fn, context, once) {
  	  if (typeof fn !== 'function') {
  	    throw new TypeError('The listener must be a function');
  	  }

  	  var listener = new EE(fn, context || emitter, once)
  	    , evt = prefix ? prefix + event : event;

  	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  	  else emitter._events[evt] = [emitter._events[evt], listener];

  	  return emitter;
  	}

  	/**
  	 * Clear event by name.
  	 *
  	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
  	 * @param {(String|Symbol)} evt The Event name.
  	 * @private
  	 */
  	function clearEvent(emitter, evt) {
  	  if (--emitter._eventsCount === 0) emitter._events = new Events();
  	  else delete emitter._events[evt];
  	}

  	/**
  	 * Minimal `EventEmitter` interface that is molded against the Node.js
  	 * `EventEmitter` interface.
  	 *
  	 * @constructor
  	 * @public
  	 */
  	function EventEmitter() {
  	  this._events = new Events();
  	  this._eventsCount = 0;
  	}

  	/**
  	 * Return an array listing the events for which the emitter has registered
  	 * listeners.
  	 *
  	 * @returns {Array}
  	 * @public
  	 */
  	EventEmitter.prototype.eventNames = function eventNames() {
  	  var names = []
  	    , events
  	    , name;

  	  if (this._eventsCount === 0) return names;

  	  for (name in (events = this._events)) {
  	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  	  }

  	  if (Object.getOwnPropertySymbols) {
  	    return names.concat(Object.getOwnPropertySymbols(events));
  	  }

  	  return names;
  	};

  	/**
  	 * Return the listeners registered for a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @returns {Array} The registered listeners.
  	 * @public
  	 */
  	EventEmitter.prototype.listeners = function listeners(event) {
  	  var evt = prefix ? prefix + event : event
  	    , handlers = this._events[evt];

  	  if (!handlers) return [];
  	  if (handlers.fn) return [handlers.fn];

  	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
  	    ee[i] = handlers[i].fn;
  	  }

  	  return ee;
  	};

  	/**
  	 * Return the number of listeners listening to a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @returns {Number} The number of listeners.
  	 * @public
  	 */
  	EventEmitter.prototype.listenerCount = function listenerCount(event) {
  	  var evt = prefix ? prefix + event : event
  	    , listeners = this._events[evt];

  	  if (!listeners) return 0;
  	  if (listeners.fn) return 1;
  	  return listeners.length;
  	};

  	/**
  	 * Calls each of the listeners registered for a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @returns {Boolean} `true` if the event had listeners, else `false`.
  	 * @public
  	 */
  	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  	  var evt = prefix ? prefix + event : event;

  	  if (!this._events[evt]) return false;

  	  var listeners = this._events[evt]
  	    , len = arguments.length
  	    , args
  	    , i;

  	  if (listeners.fn) {
  	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

  	    switch (len) {
  	      case 1: return listeners.fn.call(listeners.context), true;
  	      case 2: return listeners.fn.call(listeners.context, a1), true;
  	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
  	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
  	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
  	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
  	    }

  	    for (i = 1, args = new Array(len -1); i < len; i++) {
  	      args[i - 1] = arguments[i];
  	    }

  	    listeners.fn.apply(listeners.context, args);
  	  } else {
  	    var length = listeners.length
  	      , j;

  	    for (i = 0; i < length; i++) {
  	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

  	      switch (len) {
  	        case 1: listeners[i].fn.call(listeners[i].context); break;
  	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
  	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
  	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
  	        default:
  	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
  	            args[j - 1] = arguments[j];
  	          }

  	          listeners[i].fn.apply(listeners[i].context, args);
  	      }
  	    }
  	  }

  	  return true;
  	};

  	/**
  	 * Add a listener for a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @param {Function} fn The listener function.
  	 * @param {*} [context=this] The context to invoke the listener with.
  	 * @returns {EventEmitter} `this`.
  	 * @public
  	 */
  	EventEmitter.prototype.on = function on(event, fn, context) {
  	  return addListener(this, event, fn, context, false);
  	};

  	/**
  	 * Add a one-time listener for a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @param {Function} fn The listener function.
  	 * @param {*} [context=this] The context to invoke the listener with.
  	 * @returns {EventEmitter} `this`.
  	 * @public
  	 */
  	EventEmitter.prototype.once = function once(event, fn, context) {
  	  return addListener(this, event, fn, context, true);
  	};

  	/**
  	 * Remove the listeners of a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @param {Function} fn Only remove the listeners that match this function.
  	 * @param {*} context Only remove the listeners that have this context.
  	 * @param {Boolean} once Only remove one-time listeners.
  	 * @returns {EventEmitter} `this`.
  	 * @public
  	 */
  	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  	  var evt = prefix ? prefix + event : event;

  	  if (!this._events[evt]) return this;
  	  if (!fn) {
  	    clearEvent(this, evt);
  	    return this;
  	  }

  	  var listeners = this._events[evt];

  	  if (listeners.fn) {
  	    if (
  	      listeners.fn === fn &&
  	      (!once || listeners.once) &&
  	      (!context || listeners.context === context)
  	    ) {
  	      clearEvent(this, evt);
  	    }
  	  } else {
  	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
  	      if (
  	        listeners[i].fn !== fn ||
  	        (once && !listeners[i].once) ||
  	        (context && listeners[i].context !== context)
  	      ) {
  	        events.push(listeners[i]);
  	      }
  	    }

  	    //
  	    // Reset the array, or remove it completely if we have no more listeners.
  	    //
  	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
  	    else clearEvent(this, evt);
  	  }

  	  return this;
  	};

  	/**
  	 * Remove all listeners, or those of the specified event.
  	 *
  	 * @param {(String|Symbol)} [event] The event name.
  	 * @returns {EventEmitter} `this`.
  	 * @public
  	 */
  	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  	  var evt;

  	  if (event) {
  	    evt = prefix ? prefix + event : event;
  	    if (this._events[evt]) clearEvent(this, evt);
  	  } else {
  	    this._events = new Events();
  	    this._eventsCount = 0;
  	  }

  	  return this;
  	};

  	//
  	// Alias methods names because people roll like that.
  	//
  	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  	//
  	// Expose the prefix.
  	//
  	EventEmitter.prefixed = prefix;

  	//
  	// Allow `EventEmitter` to be imported as module namespace.
  	//
  	EventEmitter.EventEmitter = EventEmitter;

  	//
  	// Expose the module.
  	//
  	{
  	  module.exports = EventEmitter;
  	} 
  } (eventemitter3));

  var eventemitter3Exports = eventemitter3.exports;
  var EE = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

  var EventEmitter = /*#__PURE__*/function (_EE) {
    _inherits(EventEmitter, _EE);
    var _super = _createSuper(EventEmitter);
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);
      return _super.apply(this, arguments);
    }
    _createClass(EventEmitter, [{
      key: "shutdown",
      value: function shutdown() {
        this.removeAllListeners();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.removeAllListeners();
      }
    }]);
    return EventEmitter;
  }(EE);

  var EventEmitterMethods = {
    setEventEmitter: function setEventEmitter(eventEmitter, EventEmitterClass) {
      if (EventEmitterClass === undefined) {
        EventEmitterClass = EventEmitter;
      }
      this._privateEE = eventEmitter === true || eventEmitter === undefined;
      this._eventEmitter = this._privateEE ? new EventEmitterClass() : eventEmitter;
      return this;
    },
    destroyEventEmitter: function destroyEventEmitter() {
      if (this._eventEmitter && this._privateEE) {
        this._eventEmitter.shutdown();
      }
      return this;
    },
    getEventEmitter: function getEventEmitter() {
      return this._eventEmitter;
    },
    on: function on() {
      if (this._eventEmitter) {
        this._eventEmitter.on.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    once: function once() {
      if (this._eventEmitter) {
        this._eventEmitter.once.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    off: function off() {
      if (this._eventEmitter) {
        this._eventEmitter.off.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    emit: function emit(event) {
      if (this._eventEmitter && event) {
        this._eventEmitter.emit.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    addListener: function addListener() {
      if (this._eventEmitter) {
        this._eventEmitter.addListener.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    removeListener: function removeListener() {
      if (this._eventEmitter) {
        this._eventEmitter.removeListener.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    removeAllListeners: function removeAllListeners() {
      if (this._eventEmitter) {
        this._eventEmitter.removeAllListeners.apply(this._eventEmitter, arguments);
      }
      return this;
    },
    listenerCount: function listenerCount() {
      if (this._eventEmitter) {
        return this._eventEmitter.listenerCount.apply(this._eventEmitter, arguments);
      }
      return 0;
    },
    listeners: function listeners() {
      if (this._eventEmitter) {
        return this._eventEmitter.listeners.apply(this._eventEmitter, arguments);
      }
      return [];
    },
    eventNames: function eventNames() {
      if (this._eventEmitter) {
        return this._eventEmitter.eventNames.apply(this._eventEmitter, arguments);
      }
      return [];
    }
  };

  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2019 Photon Storm Ltd.
   * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
   */

  //  Source object
  //  The key as a string, or an array of keys, i.e. 'banner', or 'banner.hideBanner'
  //  The default value to use if the key doesn't exist

  /**
   * Retrieves a value from an object.
   *
   * @function Phaser.Utils.Objects.GetValue
   * @since 3.0.0
   *
   * @param {object} source - The object to retrieve the value from.
   * @param {string} key - The name of the property to retrieve from the object. If a property is nested, the names of its preceding properties should be separated by a dot (`.`) - `banner.hideBanner` would return the value of the `hideBanner` property from the object stored in the `banner` property of the `source` object.
   * @param {*} defaultValue - The value to return if the `key` isn't found in the `source` object.
   *
   * @return {*} The value of the requested key.
   */
  var GetValue$R = function GetValue(source, key, defaultValue) {
    if (!source || typeof source === 'number') {
      return defaultValue;
    } else if (source.hasOwnProperty(key)) {
      return source[key];
    } else if (key.indexOf('.') !== -1) {
      var keys = key.split('.');
      var parent = source;
      var value = defaultValue;

      //  Use for loop here so we can break early
      for (var i = 0; i < keys.length; i++) {
        if (parent.hasOwnProperty(keys[i])) {
          //  Yes it has a key property, let's carry on down
          value = parent[keys[i]];
          parent = parent[keys[i]];
        } else {
          //  Can't go any further, so reset to default
          value = defaultValue;
          break;
        }
      }
      return value;
    } else {
      return defaultValue;
    }
  };

  var StateProperties$1 = ['next', 'exit', 'enter'];
  var FSM$1 = /*#__PURE__*/function () {
    /*
    var config = {
        start: 'A',   // default: undefined
        states: {
            A: {
                next: 'B',  // function() { return 'B'; }
                enter: function() {},
                exit: function() {},
            },
            // ...
        },        
        extend: {
            i: 0,
            name: 'abc'
            // ...
        },
        init: function() {},
        enable: true,
        eventEmitter: true,
    };
    */
    function FSM(config) {
      _classCallCheck(this, FSM);
      // Attach get-next-state function
      var states = GetValue$R(config, 'states', undefined);
      if (states) {
        this.addStates(states);
      }

      // Attach extend members
      var extend = GetValue$R(config, 'extend', undefined);
      if (extend) {
        for (var name in extend) {
          if (!this.hasOwnProperty(name) || this[name] === undefined) {
            this[name] = extend[name];
          }
        }
      }

      // Event emitter
      var eventEmitter = GetValue$R(config, 'eventEmitter', undefined);
      var EventEmitterClass = GetValue$R(config, 'EventEmitterClass', undefined);
      this.setEventEmitter(eventEmitter, EventEmitterClass);
      this._stateLock = false;
      this.resetFromJSON(config);
    }
    _createClass(FSM, [{
      key: "shutdown",
      value: function shutdown() {
        this.destroyEventEmitter();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.shutdown();
      }
    }, {
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.setEnable(GetValue$R(o, 'enable', true));
        this.start(GetValue$R(o, 'start', undefined));
        var init = GetValue$R(o, 'init', undefined);
        if (init) {
          init.call(this);
        }
        return this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          curState: this.state,
          prevState: this.prevState,
          enable: this.enable,
          start: this._start
        };
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "toggleEnable",
      value: function toggleEnable() {
        this.setEnable(!this.enable);
        return this;
      }
    }, {
      key: "state",
      get: function get() {
        return this._state;
      },
      set: function set(newState) {
        if (!this.enable || this._stateLock) {
          return;
        }
        if (this._state === newState) {
          return;
        }
        this._prevState = this._state;
        this._state = newState;
        this._stateLock = true; // lock state

        this.emit('statechange', this);
        if (this._prevState != null) {
          var exitEventName = 'exit_' + this._prevState;
          var exitCallback = this[exitEventName];
          if (exitCallback) {
            exitCallback.call(this);
          }
          this.emit(exitEventName, this);
        }
        this._stateLock = false;
        if (this._state != null) {
          var enterEventName = 'enter_' + this._state;
          var enterCallback = this[enterEventName];
          if (enterCallback) {
            enterCallback.call(this);
          }
          this.emit(enterEventName, this);
        }
      }
    }, {
      key: "prevState",
      get: function get() {
        return this._prevState;
      }
    }, {
      key: "start",
      value: function start(state) {
        this._start = state;
        this._prevState = undefined;
        this._state = state; // Won't fire statechange events
        return this;
      }
    }, {
      key: "goto",
      value: function goto(nextState) {
        if (nextState != null) {
          this.state = nextState;
        }
        return this;
      }
    }, {
      key: "next",
      value: function next() {
        var nextState;
        var getNextState = this['next_' + this.state];
        if (getNextState) {
          if (typeof getNextState === 'string') {
            nextState = getNextState;
          } else {
            nextState = getNextState.call(this);
          }
        }
        this["goto"](nextState);
        return this;
      }
    }, {
      key: "stateProperties",
      get: function get() {
        return StateProperties$1;
      }
    }, {
      key: "addState",
      value: function addState(name, state) {
        if (typeof name !== 'string') {
          state = name;
          name = state.name;
        }
        var stateProperties = this.stateProperties;
        for (var i = 0, cnt = stateProperties.length; i < cnt; i++) {
          var propertyName = stateProperties[i];
          var propertyValue = state[propertyName];
          if (propertyValue) {
            this["".concat(propertyName, "_").concat(name)] = propertyValue;
          }
        }
        return this;
      }
    }, {
      key: "addStates",
      value: function addStates(states) {
        if (Array.isArray(states)) {
          for (var i = 0, cnt = states.length; i < cnt; i++) {
            this.addState(states[i]);
          }
        } else {
          for (var name in states) {
            this.addState(name, states[name]);
          }
        }
        return this;
      }
    }, {
      key: "runMethod",
      value: function runMethod(methodName, a1, a2, a3, a4, a5) {
        var fn = this[methodName + '_' + this.state];
        if (!fn) {
          return undefined;
        }

        // Copy from eventemitter3
        var len = arguments.length;
        switch (len) {
          case 1:
            return fn.call(this);
          case 2:
            return fn.call(this, a1);
          case 3:
            return fn.call(this, a1, a2);
          case 4:
            return fn.call(this, a1, a2, a3);
          case 5:
            return fn.call(this, a1, a2, a3, a4);
          case 6:
            return fn.call(this, a1, a2, a3, a4, a5);
        }
        var args = new Array(len - 1);
        for (var i = 1; i < len; i++) {
          args[i - 1] = arguments[i];
        }
        return fn.apply(this, args);
      }
    }]);
    return FSM;
  }();
  Object.assign(FSM$1.prototype, EventEmitterMethods);

  var HasListener = function HasListener(eventEmitter, eventName, fn, context, once) {
    if (once === undefined) {
      once = false;
    }
    var listeners = eventEmitter._events[eventName];
    if (!listeners) {
      return false;
    }
    for (var i = 0, cnt = listeners.length; i < cnt; i++) {
      var listener = listeners[i];
      if (listener.fn === fn && listener.context === context && listener.once === once) {
        return true;
      }
    }
    return false;
  };

  var StateProperties = ['next', 'exit', 'enter', 'update', 'preupdate', 'postupdate'];
  var FSM = /*#__PURE__*/function (_FSMBase) {
    _inherits(FSM, _FSMBase);
    var _super = _createSuper(FSM);
    function FSM() {
      _classCallCheck(this, FSM);
      return _super.apply(this, arguments);
    }
    _createClass(FSM, [{
      key: "shutdown",
      value:
      /*
      var config = {
          start: 'A',   // default: undefined
          states: {
              A: {
                  next: 'B',  // function() { return 'B'; }
                  enter: function() {},
                  exit: function() {},
                  update: function(time, delta) {},
                  preupdate: function(time, delta) {},
                  postupdate: function(time, delta) {},
              },
              // ...
          },        
          extend: {
              i: 0,
              name: 'abc'
              // ...
          },
          init: function() {},
          enable: true,
          scene: undefined,
          eventEmitter: true,
      };
      */
      function shutdown() {
        this.stopUpdate();
        this.stopPreUpdate();
        this.stopPostUpdate();
        this._scene = undefined;
        _get(_getPrototypeOf(FSM.prototype), "shutdown", this).call(this);
      }
    }, {
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(FSM.prototype), "resetFromJSON", this).call(this, o);
        this._scene = GetValue$R(o, 'scene', undefined);
        return this;
      }
    }, {
      key: "stateProperties",
      get: function get() {
        return StateProperties;
      }
    }, {
      key: "update",
      value: function update(time, delta) {
        this.runMethod('update', time, delta);
      }
    }, {
      key: "preupdate",
      value: function preupdate(time, delta) {
        this.runMethod('preupdate', time, delta);
      }
    }, {
      key: "postupdate",
      value: function postupdate(time, delta) {
        this.runMethod('postupdate', time, delta);
      }
    }, {
      key: "startUpdate",
      value: function startUpdate(scene) {
        if (!scene) {
          scene = this._scene;
        }
        var eventEmitter = scene.sys.events;
        if (HasListener(eventEmitter, 'update', this.update, this)) {
          return this;
        }
        this._scene = scene;
        eventEmitter.on('update', this.update, this);
        return this;
      }
    }, {
      key: "stopUpdate",
      value: function stopUpdate() {
        if (!this._scene) {
          return this;
        }
        this._scene.sys.events.off('update', this.update, this);
        return this;
      }
    }, {
      key: "startPreUpdate",
      value: function startPreUpdate(scene) {
        if (!scene) {
          scene = this._scene;
        }
        var eventEmitter = scene.sys.events;
        if (HasListener(eventEmitter, 'preupdate', this.preupdate, this)) {
          return this;
        }
        this._scene = scene;
        eventEmitter.on('preupdate', this.preupdate, this);
        return this;
      }
    }, {
      key: "stopPreUpdate",
      value: function stopPreUpdate() {
        if (!this._scene) {
          return this;
        }
        this._scene.sys.events.off('preupdate', this.preupdate, this);
        return this;
      }
    }, {
      key: "startPostUpdate",
      value: function startPostUpdate(scene) {
        if (!scene) {
          scene = this._scene;
        }
        var eventEmitter = scene.sys.events;
        if (HasListener(eventEmitter, 'postupdate', this.postupdate, this)) {
          return this;
        }
        this._scene = scene;
        eventEmitter.on('postupdate', this.postupdate, this);
        return this;
      }
    }, {
      key: "stopPostUpdate",
      value: function stopPostUpdate() {
        if (!this._scene) {
          return this;
        }
        this._scene.sys.events.off('postupdate', this.postupdate, this);
        return this;
      }
    }]);
    return FSM;
  }(FSM$1);

  /*
  graph TD

  IDLE --> |"requestOpen()"| TRANS_OPNE["TRAN_OPEN<br>runTransitionInCallback()"]
  TRANS_OPNE --> |transitInTime| OPEN
  OPEN --> |"requestClose()"| TRANS_CLOSE["TRANS_CLOSE<br>runTransitionOutCallback()"]
  TRANS_CLOSE --> |transitOutTime| CLOSE
  CLOSE --> |"requestOpen()"| TRANS_OPNE
  */
  var State$1 = /*#__PURE__*/function (_FSM) {
    _inherits(State, _FSM);
    var _super = _createSuper(State);
    function State(parent, config) {
      var _this;
      _classCallCheck(this, State);
      _this = _super.call(this, config);
      _this.parent = parent;
      var initState = config.initState || 'IDLE';
      _this.start(initState);
      return _this;
    }
    _createClass(State, [{
      key: "init",
      value: function init() {
        this.start('IDLE');
      }

      // IDLE -> TRANS_OPNE
    }, {
      key: "next_IDLE",
      value: function next_IDLE() {
        return 'TRANS_OPNE';
      }
      // IDLE

      // TRANS_OPNE -> OPEN
    }, {
      key: "next_TRANS_OPNE",
      value: function next_TRANS_OPNE() {
        return 'OPEN';
      }
    }, {
      key: "enter_TRANS_OPNE",
      value: function enter_TRANS_OPNE() {
        var transitionBehavior = this.parent;
        if (transitionBehavior.transitInTime > 0) {
          var delay = transitionBehavior.runTransitionInCallback();
          transitionBehavior.delayCall(delay, this.next, this);
        } else {
          this.next();
        }
      }
    }, {
      key: "exit_TRANS_OPNE",
      value: function exit_TRANS_OPNE() {
        var transitionBehavior = this.parent;
        transitionBehavior.removeDelayCall();
      }
      // TRANS_OPNE

      // OPEN -> TRANS_CLOSE
    }, {
      key: "next_OPEN",
      value: function next_OPEN() {
        return 'TRANS_CLOSE';
      }
    }, {
      key: "enter_OPEN",
      value: function enter_OPEN() {
        var transitionBehavior = this.parent;
        transitionBehavior.onOpen();
      }
    }, {
      key: "exit_OPEN",
      value: function exit_OPEN() {
        var transitionBehavior = this.parent;
        transitionBehavior.removeDelayCall();
      }
      // OPEN

      // TRANS_CLOSE -> CLOSE
    }, {
      key: "next_TRANS_CLOSE",
      value: function next_TRANS_CLOSE() {
        return 'CLOSE';
      }
    }, {
      key: "enter_TRANS_CLOSE",
      value: function enter_TRANS_CLOSE() {
        var transitionBehavior = this.parent;
        if (transitionBehavior.transitOutTime > 0) {
          var delay = transitionBehavior.runTransitionOutCallback();
          transitionBehavior.delayCall(delay, this.next, this);
        } else {
          this.next();
        }
      }
    }, {
      key: "exit_TRANS_CLOSE",
      value: function exit_TRANS_CLOSE() {
        var transitionBehavior = this.parent;
        transitionBehavior.removeDelayCall();
      }
      // TRANS_CLOSE

      // CLOSE -> TRANS_OPNE
    }, {
      key: "next_CLOSE",
      value: function next_CLOSE() {
        return 'TRANS_OPNE';
      }
    }, {
      key: "enter_CLOSE",
      value: function enter_CLOSE() {
        var transitionBehavior = this.parent;
        transitionBehavior.onClose();
      }
    }, {
      key: "exit_CLOSE",
      value: function exit_CLOSE() {}
      // CLOSE
    }, {
      key: "canOpen",
      value: function canOpen() {
        return this.state === 'IDLE' || this.state === 'CLOSE';
      }
    }, {
      key: "canClose",
      value: function canClose() {
        return this.state === 'IDLE' || this.state === 'OPEN';
      }
    }]);
    return State;
  }(FSM);

  var PostStepDelayCall = function PostStepDelayCall(gameObject, delay, callback, scope, args) {
    // Invoke callback under game's 'poststep' event
    var scene = GetSceneObject(gameObject);
    var timer = scene.time.delayedCall(delay, function () {
      scene.game.events.once('poststep', function () {
        callback.call(scope, args);
      });
    });
    return timer;
  };

  var DelayCallMethods = {
    delayCall: function delayCall(delay, callback, scope) {
      // Invoke callback under scene's 'postupdate' event
      this.delayCallTimer = PostStepDelayCall(this, delay, callback, scope);
      return this;
    },
    removeDelayCall: function removeDelayCall() {
      if (this.delayCallTimer) {
        this.delayCallTimer.remove(false);
        this.delayCallTimer = undefined;
      }
      return this;
    }
  };

  var ConfigurationMethods = {
    setTransitInTime: function setTransitInTime(time) {
      this.transitInTime = time;
      return this;
    },
    setTransitOutTime: function setTransitOutTime(time) {
      this.transitOutTime = time;
      return this;
    },
    setTransitInCallback: function setTransitInCallback(callback) {
      if (!callback) {
        callback = NOOP;
      }
      this.transitInCallback = callback;
      // callback = function(gameObject, duration) {}
      return this;
    },
    setTransitOutCallback: function setTransitOutCallback(callback) {
      if (!callback) {
        callback = NOOP;
      }
      this.transitOutCallback = callback;
      // callback = function(gameObject, duration) {}
      return this;
    }
  };

  var OpenMethods = {
    // Override
    runTransitionInCallback: function runTransitionInCallback() {
      this.transitInCallback(this.parent, this.transitInTime);
      return this.transitInTime;
    },
    // Override
    onOpen: function onOpen() {},
    requestOpen: function requestOpen(openEventData, duration) {
      if (!this._state.canOpen()) {
        return this;
      }
      this.openEventData = arguments.length > 0 ? openEventData : this.parent;
      var transitionTimeSave = this.transitInTime;
      if (duration !== undefined) {
        this.transitInTime = duration;
      }
      this._state["goto"]('TRANS_OPNE');
      this.transitInTime = transitionTimeSave;
      return this;
    }
  };

  var CloseMethods = {
    // Override
    runTransitionOutCallback: function runTransitionOutCallback() {
      this.transitOutCallback(this.parent, this.transitOutTime);
      return this.transitOutTime;
    },
    // Override
    onClose: function onClose() {
      // Destroy parent and this behavior
      if (this.oneShotMode) {
        this.parent.destroy();
        // Will invoke `this.destroy()`
      }
    },
    requestClose: function requestClose(closeEventData, duration) {
      if (!this._state.canClose) {
        return this;
      }
      this.closeEventData = arguments.length > 0 ? closeEventData : this.parent;
      var transitionTimeSave = this.transitOutTime;
      if (duration !== undefined) {
        this.transitOutTime = duration;
      }
      this._state["goto"]('TRANS_CLOSE');
      this.transitOutTime = transitionTimeSave;
      return this;
    }
  };

  var methods$7 = {};
  Object.assign(methods$7, DelayCallMethods, ConfigurationMethods, OpenMethods, CloseMethods);

  var GetValue$Q = Phaser.Utils.Objects.GetValue;
  var OpenCloseTransition = /*#__PURE__*/function (_ComponentBase) {
    _inherits(OpenCloseTransition, _ComponentBase);
    var _super = _createSuper(OpenCloseTransition);
    function OpenCloseTransition(gameObject, config) {
      var _this;
      _classCallCheck(this, OpenCloseTransition);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;
      // this.scene

      _this.setTransitInTime(GetValue$Q(config, 'duration.in', 200));
      _this.setTransitOutTime(GetValue$Q(config, 'duration.out', 200));
      _this.setTransitInCallback(GetValue$Q(config, 'transitIn'));
      _this.setTransitOutCallback(GetValue$Q(config, 'transitOut'));
      _this.oneShotMode = GetValue$Q(config, 'destroy', false);
      _this.delayCallTimer = undefined;
      _this._state = new State$1(_assertThisInitialized(_this), {
        eventEmitter: false,
        initState: GetValue$Q(config, 'initState', 'IDLE')
      });
      _this.openEventData = undefined;
      _this.closeEventData = undefined;
      return _this;
    }
    _createClass(OpenCloseTransition, [{
      key: "state",
      get: function get() {
        return this._state.state;
      }
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }
        this.transitInCallback = undefined;
        this.transitOutCallback = undefined;
        this.openEventData = undefined;
        this.closeEventData = undefined;
        this.removeDelayCall();
        _get(_getPrototypeOf(OpenCloseTransition.prototype), "shutdown", this).call(this, fromScene);
      }
    }]);
    return OpenCloseTransition;
  }(ComponentBase);
  Object.assign(OpenCloseTransition.prototype, methods$7);

  var Rectangle = Phaser.GameObjects.Rectangle;
  var FullWindowRectangle = /*#__PURE__*/function (_Rectangle) {
    _inherits(FullWindowRectangle, _Rectangle);
    var _super = _createSuper(FullWindowRectangle);
    function FullWindowRectangle(scene, color, alpha) {
      var _this;
      _classCallCheck(this, FullWindowRectangle);
      _this = _super.call(this, scene, 0, 0, 2, 2, color, 1);
      _this.setAlpha(alpha);
      _this.setScrollFactor(0);
      _this.boot();
      return _this;
    }
    _createClass(FullWindowRectangle, [{
      key: "boot",
      value: function boot() {
        var scene = this.scene;
        scene.sys.events.on('prerender', this.resize, this);
      }
    }, {
      key: "destroy",
      value: function destroy(fromScene) {
        // preDestroy method does not have fromScene parameter
        //  This Game Object has already been destroyed
        if (!this.scene || this.ignoreDestroy) {
          return;
        }
        this.scene.sys.events.off('prerender', this.resize, this);
        _get(_getPrototypeOf(FullWindowRectangle.prototype), "destroy", this).call(this, fromScene);
      }
    }, {
      key: "tint",
      get: function get() {
        return this.fillColor;
      },
      set: function set(value) {
        this.setFillStyle(value, this.fillAlpha);
      }
    }, {
      key: "resize",
      value: function resize() {
        var scene = this.scene;
        var gameSize = scene.sys.scale.gameSize;
        var camera = scene.sys.cameras.main;
        var gameWidth = gameSize.width,
          gameHeight = gameSize.height,
          scale = 1 / camera.zoom;
        var x = gameWidth / 2,
          y = gameHeight / 2,
          width = gameWidth * scale,
          height = gameHeight * scale;
        if (this.x !== x || this.y !== y) {
          this.setPosition(x, y);
        }
        if (this.width !== width || this.height !== height) {
          this.setSize(width, height).setOrigin(0.5);
        }
      }
    }]);
    return FullWindowRectangle;
  }(Rectangle);

  var GetValue$P = Phaser.Utils.Objects.GetValue;
  var TouchEventStop = /*#__PURE__*/function (_ComponentBase) {
    _inherits(TouchEventStop, _ComponentBase);
    var _super = _createSuper(TouchEventStop);
    function TouchEventStop(gameObject, config) {
      var _this;
      _classCallCheck(this, TouchEventStop);
      _this = _super.call(this, gameObject, {
        eventEmitter: false
      });
      // No event emitter
      // this.parent = gameObject;

      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(TouchEventStop, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.setHitAreaMode(GetValue$P(o, 'hitAreaMode', 0));
        this.setEnable(GetValue$P(o, 'enable', true));
        this.setStopMode(GetValue$P(o, 'stopAllLevels', true));
        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        this.parent.on('pointerdown', function (pointer, localX, localY, event) {
          if (this.stopAllLevels) {
            event.stopPropagation();
          }
        }, this).on('pointerup', function (pointer, localX, localY, event) {
          if (this.stopAllLevels) {
            event.stopPropagation();
          }
        }, this).on('pointermove', function (pointer, localX, localY, event) {
          if (this.stopAllLevels) {
            event.stopPropagation();
          }
        }, this).on('pointerover', function (pointer, localX, localY, event) {
          if (this.stopAllLevels) {
            event.stopPropagation();
          }
        }, this).on('pointerout', function (pointer, event) {
          if (this.stopAllLevels) {
            event.stopPropagation();
          }
        }, this);
      }
    }, {
      key: "setHitAreaMode",
      value: function setHitAreaMode(mode) {
        if (typeof mode === 'string') {
          mode = HitAreaMode[mode];
        }
        var gameObject = this.parent;
        if (gameObject.input) {
          gameObject.removeInteractive();
        }
        if (mode === 0) {
          gameObject.setInteractive();
        } else {
          gameObject.setInteractive({
            hitArea: {},
            hitAreaCallback: function hitAreaCallback() {
              return true;
            }
          });
        }
        return this;
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }
        if (e) {
          this.parent.setInteractive();
        } else {
          this.parent.disableInteractive();
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "setStopMode",
      value: function setStopMode(allLevels) {
        if (allLevels === undefined) {
          allLevels = true;
        }
        this.stopAllLevels = allLevels;
        return this;
      }
    }, {
      key: "toggleEnable",
      value: function toggleEnable() {
        this.setEnable(!this.enable);
        return this;
      }
    }]);
    return TouchEventStop;
  }(ComponentBase);
  var HitAreaMode = {
    "default": 0,
    fullWindow: 1
  };

  var GetValue$O = Phaser.Utils.Objects.GetValue;
  var Cover = /*#__PURE__*/function (_FullWindowRectangle) {
    _inherits(Cover, _FullWindowRectangle);
    var _super = _createSuper(Cover);
    function Cover(scene, config) {
      var _this;
      _classCallCheck(this, Cover);
      var fillColor = GetValue$O(config, 'color', 0x0);
      var fillAlpha = GetValue$O(config, 'alpha', 0.8);
      _this = _super.call(this, scene, fillColor, fillAlpha);
      _this.touchEventStop = new TouchEventStop(_assertThisInitialized(_this), {
        hitAreaMode: 1
      });
      return _this;
    }
    return _createClass(Cover);
  }(FullWindowRectangle);

  var CreateCover = function CreateCover(gameObject, config) {
    var scene = gameObject.scene;
    var cover = new Cover(scene, config);
    scene.add.existing(cover);

    // Put cover behind game object
    if (gameObject.isRexContainerLite) {
      gameObject.pin(cover, {
        syncPosition: false,
        syncRotation: false,
        syncScale: false,
        syncAlpha: false,
        syncScrollFactor: false
      });
      gameObject.moveDepthBelow(cover);
    } else {
      scene.children.moveBelow(cover, gameObject);
    }
    return cover;
  };

  var DefaultTransitCallbacks = {
    popUp: function popUp(gameObject, duration) {
      if (gameObject._modalScaleSave !== undefined) {
        gameObject.scaleX = gameObject._modalScaleSave;
        gameObject.scaleY = gameObject._modalScaleSave;
      } else {
        gameObject._modalScaleSave = gameObject.scaleX;
      }
      PopUp(gameObject, duration);
    },
    scaleDown: function scaleDown(gameObject, duration) {
      // Don't destroy here
      ScaleDownDestroy(gameObject, duration, undefined, undefined, false);
    },
    fadeIn: function fadeIn(gameObject, duration) {
      if (gameObject._modalAlphaSave !== undefined) {
        gameObject.alpha = gameObject._modalAlphaSave;
      } else {
        gameObject._modalAlphaSave = gameObject.alpha;
      }
      FadeIn(gameObject, duration);
    },
    fadeOut: function fadeOut(gameObject, duration) {
      // Don't destroy here
      FadeOutDestroy(gameObject, duration, false);
    }
  };

  var DefaultCoverTransitInCallback = function DefaultCoverTransitInCallback(cover, duration) {
    if (cover._modalAlphaSave !== undefined) {
      cover.alpha = cover._modalAlphaSave;
    } else {
      cover._modalAlphaSave = cover.alpha;
    }
    FadeIn(cover, duration, cover.alpha);
  };
  var DefaultCoverTransitOutCallback = function DefaultCoverTransitOutCallback(cover, duration) {
    FadeOutDestroy(cover, duration, false);
  };

  var IsPointInBounds = function IsPointInBounds(gameObject, x, y, preTest, postTest) {
    // Can't get bounds
    if (!gameObject) {
      return false;
    }
    if (preTest && !preTest(gameObject, x, y)) {
      return false;
    }
    var boundsRect = GetBounds(gameObject, true);
    if (!boundsRect.contains(x, y)) {
      return false;
    }
    if (postTest && !postTest(gameObject, x, y)) {
      return false;
    }
    return true;
  };

  var GetValue$N = Phaser.Utils.Objects.GetValue;
  var Modal$1 = /*#__PURE__*/function (_OpenCloseTransition) {
    _inherits(Modal, _OpenCloseTransition);
    var _super = _createSuper(Modal);
    function Modal(gameObject, config) {
      var _this;
      _classCallCheck(this, Modal);
      if (config === undefined) {
        config = {};
      }
      if (config.transitIn == null) {
        config.transitIn = TransitionMode.popUp;
      }
      if (config.transitOut == null) {
        config.transitOut = TransitionMode.scaleDown;
      }
      config.destroy = GetValue$N(config, 'destroy', true);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;
      // this.scene

      // Cover : key of modal, to block touch input        
      var coverConfig = GetValue$N(config, 'cover');
      _this.cover = coverConfig !== false ? CreateCover(gameObject, coverConfig) : undefined;
      if (_this.cover) {
        _this.setCoverTransitInCallback(GetValue$N(coverConfig, 'transitIn', DefaultCoverTransitInCallback));
        _this.setCoverTransitOutCallback(GetValue$N(coverConfig, 'transitOut', DefaultCoverTransitOutCallback));
      }

      // Close conditions:
      var touchOutsideClose = GetValue$N(config, 'touchOutsideClose', false);
      var timeOutDuration = GetValue$N(config, 'duration.hold', -1);
      var timeOutClose = GetValue$N(config, 'timeOutClose', timeOutDuration >= 0);
      var anyTouchClose = GetValue$N(config, 'anyTouchClose', false);
      var manualClose = GetValue$N(config, 'manualClose', false);
      if (manualClose) {
        touchOutsideClose = false;
        anyTouchClose = false;
        timeOutClose = false;
      }
      if (anyTouchClose) {
        touchOutsideClose = false;
      }
      if (timeOutClose) {
        _this.setDisplayTime(timeOutDuration);
      } else {
        _this.setDisplayTime(-1);
      }

      // Registet touch-close event after opened
      if (anyTouchClose) {
        _this.once('open', _this.anyTouchClose, _assertThisInitialized(_this));
      } else if (touchOutsideClose) {
        _this.once('open', _this.touchOutsideClose, _assertThisInitialized(_this));
      }
      if (GetValue$N(config, 'openOnStart', true)) {
        // Run this.requestOpen() next tick
        // User can register events before this.requestOpen()
        _this.delayCall(0, _this.requestOpen, _assertThisInitialized(_this));
      }
      return _this;
    }
    _createClass(Modal, [{
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        // Registered in touchOutsideClose(), or anyTouchClose()
        if (!this.cover) {
          this.scene.input.off('pointerup', this.touchCloseCallback, this);
        }
        if (this.cover && !fromScene) {
          this.cover.destroy();
          this.cover = undefined;
        }
        _get(_getPrototypeOf(Modal.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "touchOutsideClose",
      value: function touchOutsideClose() {
        if (this.cover) {
          this.cover.on('pointerup', this.touchCloseCallback, this);
        } else {
          this.scene.input.on('pointerup', this.touchCloseCallback, this);
        }
        this.clickOutsideTest = true;
        return this;
      }
    }, {
      key: "anyTouchClose",
      value: function anyTouchClose() {
        if (this.cover) {
          this.cover.once('pointerup', this.touchCloseCallback, this);
        } else {
          this.scene.input.once('pointerup', this.touchCloseCallback, this);
        }
        return this;
      }
    }, {
      key: "touchCloseCallback",
      value: function touchCloseCallback(pointer) {
        if (this.clickOutsideTest && IsPointInBounds(this.parent, pointer.worldX, pointer.worldY)) {
          return;
        }
        this.requestClose();
      }
    }, {
      key: "runTransitionInCallback",
      value: function runTransitionInCallback() {
        var duration = _get(_getPrototypeOf(Modal.prototype), "runTransitionInCallback", this).call(this);
        var cover = this.cover;
        if (cover && this.coverTransitInCallback) {
          this.coverTransitInCallback(cover, duration);
        }
        return duration;
      }
    }, {
      key: "runTransitionOutCallback",
      value: function runTransitionOutCallback() {
        var duration = _get(_getPrototypeOf(Modal.prototype), "runTransitionOutCallback", this).call(this);
        var cover = this.cover;
        if (cover && this.coverTransitOutCallback) {
          this.coverTransitOutCallback(cover, duration);
        }
        return duration;
      }
    }, {
      key: "onOpen",
      value: function onOpen() {
        var duration = this.displayTime;
        if (duration >= 0) {
          this.delayCall(duration, this.requestClose,
          // callback
          this // scope
          );
        }

        this.emit('open', this.parent, this);
        _get(_getPrototypeOf(Modal.prototype), "onOpen", this).call(this);
      }
    }, {
      key: "onClose",
      value: function onClose() {
        this.emit('close', this.closeEventData);
        _get(_getPrototypeOf(Modal.prototype), "onClose", this).call(this);
      }
    }, {
      key: "setDisplayTime",
      value: function setDisplayTime(time) {
        this.displayTime = time;
        return this;
      }
    }, {
      key: "setTransitInCallback",
      value: function setTransitInCallback(callback) {
        if (typeof callback === 'string') {
          callback = TransitionMode[callback];
        }
        switch (callback) {
          case TransitionMode.popUp:
            callback = DefaultTransitCallbacks.popUp;
            break;
          case TransitionMode.fadeIn:
            callback = DefaultTransitCallbacks.fadeIn;
            break;
        }
        _get(_getPrototypeOf(Modal.prototype), "setTransitInCallback", this).call(this, callback);
        // callback = function(gameObject, duration) {}
        return this;
      }
    }, {
      key: "setTransitOutCallback",
      value: function setTransitOutCallback(callback) {
        if (typeof callback === 'string') {
          callback = TransitionMode[callback];
        }
        switch (callback) {
          case TransitionMode.scaleDown:
            callback = DefaultTransitCallbacks.scaleDown;
            break;
          case TransitionMode.fadeOut:
            callback = DefaultTransitCallbacks.fadeOut;
            break;
        }
        _get(_getPrototypeOf(Modal.prototype), "setTransitOutCallback", this).call(this, callback);
        // callback = function(gameObject, duration) {}
        return this;
      }
    }, {
      key: "setCoverTransitInCallback",
      value: function setCoverTransitInCallback(callback) {
        this.coverTransitInCallback = callback;
        return this;
      }
    }, {
      key: "setCoverTransitOutCallback",
      value: function setCoverTransitOutCallback(callback) {
        this.coverTransitOutCallback = callback;
        return this;
      }
    }]);
    return Modal;
  }(OpenCloseTransition);
  var TransitionMode = {
    popUp: 0,
    fadeIn: 1,
    scaleDown: 0,
    fadeOut: 1
  };

  var Modal = function Modal(gameObject, config) {
    var modalBehavior = new Modal$1(gameObject, config);

    // Route modal's 'open', 'close' event
    modalBehavior.on('open', function () {
      gameObject.emit('modal.open', modalBehavior);
    });
    modalBehavior.on('close', function (closeEventData) {
      gameObject.emit('modal.close', closeEventData, modalBehavior);
    });

    // Reigster 'modal.requestClose' event for invoking modalBehavior.requestClose() method
    gameObject.on('modal.requestClose', modalBehavior.requestClose, modalBehavior);
    /*
    It is not necessary to turn off gameObject's 'modal.requestClose' event because that :
      - If `config.destroy` is `undefined` (or `true), gameObject and modalBehavior will be destroyed
    - If `config.destroy` is `false` (for reusing dialog), keeping gameObject and modalBehavior 
    */

    return modalBehavior;
  };
  var ModalClose = function ModalClose(gameObject, closeEventData) {
    gameObject.emit('modal.requestClose', closeEventData);
  };

  var IsFunction = function IsFunction(obj) {
    return obj && typeof obj === 'function';
  };

  var ModalMethods = {
    // Override
    // onCreateModalBehavior(self, config) { },
    modal: function modal(config, onClose) {
      if (IsFunction(config)) {
        onClose = config;
        config = undefined;
      }
      if (this._modalBehavior === undefined) {
        if (this.onCreateModalBehavior) {
          this.onCreateModalBehavior(this, config);
        }
        this._modalBehavior = Modal(this, config);
      }
      if (onClose) {
        this._modalBehavior.once('close', onClose);
      }
      this._modalBehavior.requestOpen();
      return this;
    },
    modalPromise: function modalPromise(config) {
      var self = this;
      return new Promise(function (resolve, reject) {
        self.modal(config, resolve);
      });
    },
    modalClose: function modalClose(closeEventData) {
      ModalClose(this, closeEventData);
      return this;
    }
  };

  var IsPointerInBounds = function IsPointerInBounds(gameObject, pointer, preTest, postTest) {
    if (pointer) {
      return IsPointInBounds(gameObject, pointer.worldX, pointer.worldY, preTest, postTest);
    } else {
      var inputManager = gameObject.scene.input.manager;
      var pointersTotal = inputManager.pointersTotal;
      var pointers = inputManager.pointers;
      for (var i = 0; i < pointersTotal; i++) {
        pointer = pointers[i];
        if (IsPointInBounds(gameObject, pointer.worldX, pointer.worldY, preTest, postTest)) {
          return true;
        }
      }
      return false;
    }
  };

  var IsInTouching = function IsInTouching(pointer, gameObject) {
    if (IsGameObject(pointer) || typeof pointer === 'string') {
      gameObject = pointer;
      pointer = undefined;
    }
    if (gameObject === undefined) {
      gameObject = this;
    } else if (typeof gameObject === 'string') {
      gameObject = this.getElement(gameObject);
    }
    return IsPointerInBounds(gameObject, pointer);
  };

  var IsArray = function IsArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var ContainsPoint = function ContainsPoint(gameObject, x, y, preTest, postTest) {
    return IsPointInBounds(gameObject, x, y, GetPreTestCallback(preTest), GetPostTestCallback(postTest));
  };
  var IsNotHiddenSizer = function IsNotHiddenSizer(gameObject) {
    var isHiddenSizer = gameObject.rexSizer && gameObject.rexSizer.hidden;
    return !isHiddenSizer;
  };
  var GetPreTestCallback = function GetPreTestCallback(preTest) {
    if (!preTest) {
      return IsNotHiddenSizer;
    }
    return function (gameObject, x, y) {
      if (!IsNotHiddenSizer(gameObject)) {
        return false;
      }
      preTest(gameObject, x, y);
      return true;
    };
  };
  var GetPostTestCallback = function GetPostTestCallback(postTest) {
    return postTest;
  };

  var PointToChild$1 = function PointToChild(x, y, preTest, postTest, children) {
    if (!IsFunction(preTest)) {
      children = preTest;
      preTest = undefined;
      postTest = undefined;
    }
    if (children === undefined) {
      if (this.sizerChildren) {
        children = this.sizerChildren;
      } else {
        children = this.children;
      }
    }
    if (IsArray(children)) {
      var child;
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];
        if (ContainsPoint(child, x, y, preTest, postTest)) {
          return child;
        }
      }
    } else {
      var child;
      for (var key in children) {
        child = children[key];
        if (ContainsPoint(child, x, y, preTest, postTest)) {
          return child;
        }
      }
    }
    return null;
  };

  var CopyState = function CopyState(gamObject, out) {
    if (out === undefined) {
      out = {};
    } else if (out === true) {
      out = GlobState;
    }
    out.x = gamObject.x;
    out.y = gamObject.y;
    out.scaleX = gamObject.scaleX;
    out.scaleY = gamObject.scaleY;
    out.width = gamObject.width;
    out.height = gamObject.height;
    out.displayWidth = gamObject.displayWidth;
    out.displayHeight = gamObject.displayHeight;
    return out;
  };
  var GlobState = {};

  var PreLayoutChild = function PreLayoutChild(child) {
    if (this.sizerEventsEnable) {
      CopyState(child, this.getChildPrevState(child));
      this.layoutedChildren.push(child);
    }
  };

  var LayoutChild = function LayoutChild(child, x, y, width, height, align, offsetX, offsetY) {
    AlignIn(child, x, y, width, height, align);
    if (offsetX !== undefined) {
      child.x += offsetX;
    }
    if (offsetY !== undefined) {
      child.y += offsetY;
    }
    this.resetChildPositionState(child);
    if (this.sizerEventsEnable) {
      child.emit('sizer.postlayout', child, this);
    }
  };

  var ALIGN_CENTER$2 = Phaser.Display.Align.CENTER;
  var LayoutBackgrounds = function LayoutBackgrounds() {
    if (this.backgroundChildren === undefined) {
      return;
    }
    var backgrounds = this.backgroundChildren;
    var startX = this.left,
      startY = this.top;
    var parentWidth = this.width,
      parentHeight = this.height;
    var child, childConfig, padding, x, y, width, height;
    for (var i = 0, cnt = backgrounds.length; i < cnt; i++) {
      child = backgrounds[i];
      childConfig = child.rexSizer;
      if (childConfig.hidden) {
        continue;
      }
      padding = childConfig.padding;
      PreLayoutChild.call(this, child);
      x = startX + padding.left;
      y = startY + padding.top;
      width = parentWidth - padding.left - padding.right;
      height = parentHeight - padding.top - padding.bottom;
      ResizeGameObject(child, width, height);
      LayoutChild.call(this, child, x, y, width, height, ALIGN_CENTER$2);
    }
  };

  var IsPlainObject$9 = Phaser.Utils.Objects.IsPlainObject;
  var SetDraggable = function SetDraggable(sensor, draggable, dragTarget) {
    if (IsPlainObject$9(sensor)) {
      var config = sensor;
      sensor = config.sensor;
      dragTarget = config.target;
      draggable = config.draggable;
    } else {
      if (typeof draggable !== 'boolean') {
        dragTarget = draggable;
        draggable = undefined;
      }
    }
    var sensorType = _typeof(sensor);
    if (sensorType === 'string') {
      var sensorName = sensor;
      sensor = this.getElement(sensorName);
      if (!sensor) {
        console.error("Can get element '".concat(sensorName, "'"));
        return this;
      }
    } else if (sensor === undefined || sensorType != 'object') {
      draggable = sensor;
      sensor = this;
    }
    if (draggable === undefined) {
      draggable = true;
    }
    if (sensor.input && sensor.input._rexUIDragSizer) {
      // Draggable is already registered
      sensor.input.draggable = draggable;
    } else if (draggable) {
      // Register draggable
      sensor.setInteractive();
      sensor.scene.input.setDraggable(sensor);
      sensor.on('drag', function (pointer, dragX, dragY) {
        var currentDragTarget = dragTarget === undefined ? this.getTopmostSizer() : dragTarget;
        currentDragTarget.x += dragX - sensor.x;
        currentDragTarget.y += dragY - sensor.y;
        currentDragTarget.emit('sizer.drag', pointer, dragX, dragY);
      }, this).on('dragstart', function (pointer, dragX, dragY) {
        var currentDragTarget = dragTarget === undefined ? this.getTopmostSizer() : dragTarget;
        currentDragTarget.emit('sizer.dragstart', pointer, dragX, dragY);
      }, this).on('dragend', function (pointer, dragX, dragY, dropped) {
        var currentDragTarget = dragTarget === undefined ? this.getTopmostSizer() : dragTarget;
        currentDragTarget.emit('sizer.dragend', pointer, dragX, dragY, dropped);
      }, this).on('drop', function (pointer, dropZone) {
        var currentDragTarget = dragTarget === undefined ? this.getTopmostSizer() : dragTarget;
        currentDragTarget.emit('sizer.drop', pointer, dropZone);
      });
      sensor.input._rexUIDragSizer = true;
    } else ;
    return this;
  };

  var GetValue$M = Phaser.Utils.Objects.GetValue;
  var Button = /*#__PURE__*/function (_ComponentBase) {
    _inherits(Button, _ComponentBase);
    var _super = _createSuper(Button);
    function Button(gameObject, config) {
      var _this;
      _classCallCheck(this, Button);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;

      _this._enable = undefined;
      gameObject.setInteractive(GetValue$M(config, "inputConfig", undefined));
      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(Button, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.pointer = undefined;
        this.lastClickTime = undefined;
        this.setEnable(GetValue$M(o, "enable", true));
        this.setMode(GetValue$M(o, "mode", 1));
        this.setClickInterval(GetValue$M(o, "clickInterval", 100));
        this.setDragThreshold(GetValue$M(o, 'threshold', undefined));
        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        var gameObject = this.parent;
        gameObject.on('pointerdown', this.onPress, this);
        gameObject.on('pointerup', this.onRelease, this);
        gameObject.on('pointerout', this.onPointOut, this);
        gameObject.on('pointermove', this.onMove, this);
        gameObject.on('pointerover', this.onOver, this);
        gameObject.on('pointerout', this.onOut, this);
      }
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        // GameObject events will be removed when this gameObject destroyed 
        // this.parent.on('pointerdown', this.onPress, this);
        // this.parent.on('pointerup', this.onRelease, this);
        // this.parent.on('pointerout', this.onPointOut, this);
        // this.parent.on('pointermove', this.onMove, this);
        this.pointer = null;
        _get(_getPrototypeOf(Button.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "enable",
      get: function get() {
        return this._enable;
      },
      set: function set(e) {
        if (this._enable === e) {
          return;
        }
        if (!e) {
          this.cancel();
        }
        this._enable = e;
        var eventName = e ? 'enable' : 'disable';
        this.emit(eventName, this, this.parent);
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "toggleEnable",
      value: function toggleEnable() {
        this.setEnable(!this.enable);
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = CLICKMODE$1[m];
        }
        this.mode = m;
        return this;
      }
    }, {
      key: "setClickInterval",
      value: function setClickInterval(interval) {
        this.clickInterval = interval; // ms
        return this;
      }
    }, {
      key: "setDragThreshold",
      value: function setDragThreshold(distance) {
        this.dragThreshold = distance;
        return this;
      }

      // internal
    }, {
      key: "onPress",
      value: function onPress(pointer, localX, localY, event) {
        if (this.pointer !== undefined) {
          return;
        }
        this.pointer = pointer;
        this.emit('down', this, this.parent, pointer, event);
        if (this.mode === 0) {
          this.click(pointer.downTime, pointer, event);
        }
      }
    }, {
      key: "onRelease",
      value: function onRelease(pointer, localX, localY, event) {
        if (this.pointer !== pointer) {
          return;
        }
        this.emit('up', this, this.parent, pointer, event);
        if (this.mode === 1) {
          this.click(pointer.upTime, pointer, event);
        }
        this.pointer = undefined;
      }
    }, {
      key: "onPointOut",
      value: function onPointOut(pointer, event) {
        if (this.pointer !== pointer) {
          return;
        }
        this.cancel();
      }
    }, {
      key: "onMove",
      value: function onMove(pointer, localX, localY, event) {
        if (this.pointer !== pointer) {
          return;
        }
        if (this.dragThreshold === undefined) {
          return;
        }
        if (this.mode === 1) {
          if (pointer.getDistance() >= this.dragThreshold) {
            this.cancel();
          }
        }
      }
    }, {
      key: "click",
      value: function click(nowTime, pointer, event) {
        if (!this.enable) {
          return this;
        }
        if (nowTime === undefined) {
          // fires 'click' event manually
          this.emit('click', this, this.parent, pointer, event);
          return this;
        }
        this.pointer = undefined;
        var lastClickTime = this.lastClickTime;
        if (lastClickTime !== undefined && nowTime - lastClickTime <= this.clickInterval) {
          return this;
        }
        this.lastClickTime = nowTime;
        this.emit('click', this, this.parent, pointer, event);
        return this;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.pointer = undefined;
        return this;
      }
    }, {
      key: "onOver",
      value: function onOver(pointer, localX, localY, event) {
        if (!this.enable) {
          return this;
        }
        this.emit('over', this, this.parent, pointer, event);
        return this;
      }
    }, {
      key: "onOut",
      value: function onOut(pointer, event) {
        if (!this.enable) {
          return this;
        }
        this.emit('out', this, this.parent, pointer, event);
        return this;
      }
    }]);
    return Button;
  }(ComponentBase);
  var CLICKMODE$1 = {
    press: 0,
    pointerdown: 0,
    release: 1,
    pointerup: 1
  };

  var ClickMethods = {
    onClick: function onClick(gameObject, callback, scope, config) {
      if (!gameObject) {
        return this;
      }
      if (typeof gameObject === 'function') {
        config = scope;
        scope = callback;
        callback = gameObject;
        gameObject = this;
      }
      if (gameObject._click === undefined) {
        gameObject._click = new Button(gameObject, config);
      }
      gameObject._click.on('click', callback, scope);
      return this;
    },
    offClick: function offClick(gameObject, callback, scope) {
      if (typeof gameObject === 'function') {
        scope = callback;
        callback = gameObject;
        gameObject = this;
      }
      if (gameObject._click === undefined) {
        return this;
      }
      gameObject._click.off('click', callback, scope);
      return this;
    },
    enableClick: function enableClick(gameObject, enabled) {
      if (gameObject && _typeof(gameObject) !== 'object') {
        enabled = gameObject;
        gameObject = this;
      }
      if (gameObject._click === undefined) {
        return this;
      }
      gameObject._click.setEnable(enabled);
      return this;
    },
    disableClick: function disableClick(gameObject) {
      if (gameObject && _typeof(gameObject) !== 'object') {
        gameObject = this;
      }
      if (gameObject._click === undefined) {
        return this;
      }
      gameObject._click.setEnable(false);
      return this;
    }
  };

  var IsPointerInHitArea = function IsPointerInHitArea(gameObject, pointer, preTest, postTest) {
    if (pointer) {
      if (preTest && !preTest(gameObject, pointer)) {
        return false;
      }
      if (!HitTest(gameObject, pointer)) {
        return false;
      }
      if (postTest && !postTest(gameObject, pointer)) {
        return false;
      }
      return true;
    } else {
      var inputManager = gameObject.scene.input.manager;
      var pointersTotal = inputManager.pointersTotal;
      var pointers = inputManager.pointers,
        pointer;
      for (var i = 0; i < pointersTotal; i++) {
        pointer = pointers[i];
        if (preTest && !preTest(gameObject, pointer)) {
          continue;
        }
        if (!HitTest(gameObject, pointer)) {
          continue;
        }
        if (postTest && !postTest(gameObject, pointer)) {
          continue;
        }
        return true;
      }
      return false;
    }
  };
  var HitTest = function HitTest(gameObject, pointer) {
    var scene = gameObject.scene;
    var cameras = scene.input.cameras.getCamerasBelowPointer(pointer);
    var inputManager = scene.input.manager;
    var gameObjects = [gameObject];
    for (var i = 0, len = cameras.length; i < len; i++) {
      inputManager.hitTest(pointer, gameObjects, cameras[i], HitTestResult);
      if (HitTestResult.length > 0) {
        HitTestResult.length = 0;
        return true;
      }
    }
    HitTestResult.length = 0;
    return false;
  };
  var HitTestResult = [];

  var GetValue$L = Phaser.Utils.Objects.GetValue;
  var ClickOutside = /*#__PURE__*/function (_ComponentBase) {
    _inherits(ClickOutside, _ComponentBase);
    var _super = _createSuper(ClickOutside);
    function ClickOutside(gameObject, config) {
      var _this;
      _classCallCheck(this, ClickOutside);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;

      _this._enable = undefined;
      var inputConfig = GetValue$L(config, "inputConfig", undefined);
      if (inputConfig) {
        gameObject.setInteractive(inputConfig);
      }
      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(ClickOutside, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.pointer = undefined;
        this.lastClickTime = undefined;
        this.setEnable(GetValue$L(o, "enable", true));
        this.setMode(GetValue$L(o, "mode", 1));
        this.setClickInterval(GetValue$L(o, "clickInterval", 100));
        this.setDragThreshold(GetValue$L(o, 'threshold', undefined));
        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        var scene = this.parent.scene;
        scene.input.on('pointerdown', this.onPress, this);
        scene.input.on('pointerup', this.onRelease, this);
        scene.input.on('pointermove', this.onMove, this);
      }
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }
        var scene = this.parent.scene;
        scene.input.off('pointerdown', this.onPress, this);
        scene.input.off('pointerup', this.onRelease, this);
        scene.input.off('pointermove', this.onMove, this);
        this.pointer = null;
        _get(_getPrototypeOf(ClickOutside.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "enable",
      get: function get() {
        return this._enable;
      },
      set: function set(e) {
        if (this._enable === e) {
          return;
        }
        if (!e) {
          this.cancel();
        }
        this._enable = e;
        var eventName = e ? 'enable' : 'disable';
        this.emit(eventName, this, this.parent);
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "toggleEnable",
      value: function toggleEnable() {
        this.setEnable(!this.enable);
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = CLICKMODE[m];
        }
        this.mode = m;
        return this;
      }
    }, {
      key: "setClickInterval",
      value: function setClickInterval(interval) {
        this.clickInterval = interval; // ms
        return this;
      }
    }, {
      key: "setDragThreshold",
      value: function setDragThreshold(distance) {
        this.dragThreshold = distance;
        return this;
      }
    }, {
      key: "isPointerInside",
      value: function isPointerInside(pointer) {
        var gameObject = this.parent;
        var isInsideCallback = gameObject.input ? IsPointerInHitArea : IsPointerInBounds;
        return isInsideCallback(gameObject, pointer);
      }

      // internal
    }, {
      key: "onPress",
      value: function onPress(pointer) {
        // Do nothing if game object is not visible
        if (!this.parent.willRender(pointer.camera)) {
          return;
        }
        if (this.pointer !== undefined) {
          return;
        }
        this.pointer = pointer;
        if (this.mode === 0) {
          if (!this.isPointerInside(pointer)) {
            this.click(pointer.downTime, pointer);
          }
        }
      }
    }, {
      key: "onRelease",
      value: function onRelease(pointer) {
        // Do nothing if game object is not visible
        if (!this.parent.willRender(pointer.camera)) {
          return;
        }
        if (this.pointer !== pointer) {
          return;
        }
        if (this.mode === 1) {
          if (!this.isPointerInside(pointer)) {
            this.click(pointer.upTime, pointer);
          }
        }
        this.pointer = undefined;
      }
    }, {
      key: "onMove",
      value: function onMove(pointer, localX, localY, event) {
        if (this.pointer !== pointer) {
          return;
        }
        if (this.dragThreshold === undefined) {
          return;
        }
        if (this.mode === 1) {
          if (pointer.getDistance() >= this.dragThreshold || this.isPointerInside(pointer)) {
            this.cancel();
          }
        }
      }
    }, {
      key: "click",
      value: function click(nowTime, pointer) {
        if (!this.enable) {
          return this;
        }
        if (nowTime === undefined) {
          // fires 'clickoutside' event manually
          this.emit('clickoutside', this, this.parent, pointer);
          return this;
        }
        this.pointer = undefined;
        var lastClickTime = this.lastClickTime;
        if (lastClickTime !== undefined && nowTime - lastClickTime <= this.clickInterval) {
          return this;
        }
        this.lastClickTime = nowTime;
        this.emit('clickoutside', this, this.parent, pointer);
        return this;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.pointer = undefined;
        return this;
      }
    }]);
    return ClickOutside;
  }(ComponentBase);
  var CLICKMODE = {
    press: 0,
    pointerdown: 0,
    release: 1,
    pointerup: 1
  };

  var ClickOutsideMethods = {
    onClickOutside: function onClickOutside(gameObject, callback, scope, config) {
      if (!gameObject) {
        return this;
      }
      if (typeof gameObject === 'function') {
        config = scope;
        scope = callback;
        callback = gameObject;
        gameObject = this;
      }
      if (gameObject._clickOutside === undefined) {
        gameObject._clickOutside = new ClickOutside(gameObject, config);
      }
      gameObject._clickOutside.on('clickoutside', callback, scope);
      return this;
    },
    offClickOutside: function offClickOutside(gameObject, callback, scope) {
      if (typeof gameObject === 'function') {
        scope = callback;
        callback = gameObject;
        gameObject = this;
      }
      if (gameObject._clickOutside === undefined) {
        return this;
      }
      gameObject._clickOutside.off('clickoutside', callback, scope);
      return this;
    },
    enableClickOutside: function enableClickOutside(gameObject, enabled) {
      if (gameObject && _typeof(gameObject) !== 'object') {
        enabled = gameObject;
        gameObject = this;
      }
      if (gameObject._clickOutside === undefined) {
        return this;
      }
      gameObject._clickOutside.setEnable(enabled);
      return this;
    },
    disableClickOutside: function disableClickOutside(gameObject) {
      if (gameObject && _typeof(gameObject) !== 'object') {
        gameObject = this;
      }
      if (gameObject._clickOutside === undefined) {
        return this;
      }
      gameObject._clickOutside.setEnable(false);
      return this;
    }
  };

  var Cooldown = /*#__PURE__*/function (_FSM) {
    _inherits(Cooldown, _FSM);
    var _super = _createSuper(Cooldown);
    function Cooldown() {
      var _this;
      _classCallCheck(this, Cooldown);
      _this = _super.call(this, {
        eventEmitter: false
      });
      _this["goto"]('IDLE');
      return _this;
    }
    _createClass(Cooldown, [{
      key: "setCooldownTime",
      value: function setCooldownTime(time) {
        this.cooldownTime = time;
        this.cooldownMode = time !== undefined;
        return this;
      }
    }, {
      key: "request",
      value: function request() {
        return this.runMethod('request');
      }

      // IDLE state
    }, {
      key: "update_IDLE",
      value: function update_IDLE() {
        this.compensationTime = 0;
      }
    }, {
      key: "request_IDLE",
      value: function request_IDLE() {
        this.next();
        return true;
      }
    }, {
      key: "next_IDLE",
      value: function next_IDLE() {
        if (this.cooldownMode) {
          return 'COOLDOWN';
        }
      }

      // COOLDOWN state
    }, {
      key: "enter_COOLDOWN",
      value: function enter_COOLDOWN() {
        this.remainderTime = this.cooldownTime + this.compensationTime;
      }
    }, {
      key: "update_COOLDOWN",
      value: function update_COOLDOWN(time, delta) {
        this.remainderTime -= delta;
        if (this.remainderTime < 0) {
          this.compensationTime = this.cooldownTime > delta ? -this.remainderTime : 0;
          this["goto"]('IDLE');
        }
      }
    }, {
      key: "request_COOLDOWN",
      value: function request_COOLDOWN() {
        return false;
      }
    }]);
    return Cooldown;
  }(FSM);

  var GetValue$K = Phaser.Utils.Objects.GetValue;
  var InTouching = /*#__PURE__*/function (_ComponentBase) {
    _inherits(InTouching, _ComponentBase);
    var _super = _createSuper(InTouching);
    function InTouching(gameObject, config) {
      var _this;
      _classCallCheck(this, InTouching);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;

      _this._enable = undefined;
      _this.cooldown = new Cooldown();
      _this.parent.setInteractive(GetValue$K(config, 'inputConfig', undefined));
      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(InTouching, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.pointer = undefined;
        this.prevIsInTouch = false;
        this.isInTouching = false;
        this.setEnable(GetValue$K(o, 'enable', true));
        this.setCooldown(GetValue$K(o, 'cooldown', undefined));
        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        var gameObject = this.parent;
        gameObject.on('pointerdown', this.onPointIn, this);
        gameObject.on('pointerover', this.onPointIn, this);
        gameObject.on('pointerup', this.onPointOut, this);
        gameObject.on('pointerout', this.onPointOut, this);
        this.scene.sys.events.on('preupdate', this.preupdate, this);
      }
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        // GameObject events will be removed when this gameObject destroyed 
        // this.parent.off('pointerdown', this.onPointIn, this);
        // this.parent.off('pointerover', this.onPointIn, this);
        // this.parent.off('pointerup', this.onPointOut, this);
        // this.parent.off('pointerout', this.onPointOut, this);
        this.scene.sys.events.off('preupdate', this.preupdate, this);
        this.pointer = undefined;
        _get(_getPrototypeOf(InTouching.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "enable",
      get: function get() {
        return this._enable;
      },
      set: function set(e) {
        if (this._enable === e) {
          return;
        }
        if (!e) {
          this.prevIsInTouch = false;
          this.isInTouching = false;
          this.pointer = undefined;
        }
        this._enable = e;
        return this;
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "cooldownTime",
      get: function get() {
        return this.cooldown.cooldownTime;
      },
      set: function set(time) {
        this.cooldown.setCooldownTime(time);
      }
    }, {
      key: "setCooldown",
      value: function setCooldown(time) {
        this.cooldownTime = time;
        return this;
      }
    }, {
      key: "toggleEnable",
      value: function toggleEnable() {
        this.setEnable(!this.enable);
        return this;
      }

      // internal
    }, {
      key: "onPointIn",
      value: function onPointIn(pointer, localX, localY) {
        if (!this.enable || !pointer.isDown || this.pointer !== undefined) {
          return;
        }
        this.pointer = pointer;
        this.isInTouching = true;
      }
    }, {
      key: "onPointOut",
      value: function onPointOut(pointer) {
        if (!this.enable || this.pointer !== pointer) {
          return;
        }
        this.pointer = undefined;
        this.isInTouching = false;
      }
    }, {
      key: "preupdate",
      value: function preupdate(time, delta) {
        this.cooldown.update(time, delta);
        if (!this.prevIsInTouch && this.isInTouching) {
          this.emit('touchstart', this, this.parent);
        }
        if (this.isInTouching && this.cooldown.request()) {
          this.emit('intouch', this, this.parent, this.pointer);
        }
        if (this.prevIsInTouch && !this.isInTouching) {
          this.emit('touchend', this, this.parent);
        }
        this.prevIsInTouch = this.isInTouching;
      }
    }]);
    return InTouching;
  }(ComponentBase);

  var TouchingMethods = {
    isPointerInBounds: function isPointerInBounds(target) {
      if (target === undefined) {
        target = this;
      } else if (typeof target === 'string') {
        target = this.getElement(target);
      }
      if (!target) {
        return false;
      }
      return IsPointerInBounds(target);
    },
    onTouching: function onTouching(gameObject, callback, scope, config) {
      if (!gameObject) {
        return this;
      }
      if (typeof gameObject === 'function') {
        config = scope;
        scope = callback;
        callback = gameObject;
        gameObject = this;
      }
      if (gameObject._inTouching === undefined) {
        gameObject._inTouching = new InTouching(gameObject, config);
      }
      gameObject._inTouching.on('intouch', callback, scope);
      return this;
    },
    offTouching: function offTouching(gameObject, callback, scope) {
      if (typeof gameObject === 'function') {
        scope = callback;
        callback = gameObject;
        gameObject = this;
      }
      if (gameObject._inTouching === undefined) {
        return this;
      }
      gameObject._inTouching.off('intouch', callback, scope);
      return this;
    },
    onTouchingEnd: function onTouchingEnd(gameObject, callback, scope, config) {
      if (!gameObject) {
        return this;
      }
      if (typeof gameObject === 'function') {
        config = scope;
        scope = callback;
        callback = gameObject;
        gameObject = this;
      }
      if (gameObject._inTouching === undefined) {
        gameObject._inTouching = new InTouching(gameObject, config);
      }
      gameObject._inTouching.on('touchend', callback, scope);
      return this;
    },
    offTouchingEnd: function offTouchingEnd(gameObject, callback, scope) {
      if (typeof gameObject === 'function') {
        scope = callback;
        callback = gameObject;
        gameObject = this;
      }
      if (gameObject._inTouching === undefined) {
        return this;
      }
      gameObject._inTouching.off('touchend', callback, scope);
      return this;
    },
    enableTouching: function enableTouching(gameObject, enabled) {
      if (gameObject && _typeof(gameObject) !== 'object') {
        enabled = gameObject;
        gameObject = this;
      }
      if (gameObject._inTouching === undefined) {
        return this;
      }
      gameObject._inTouching.setEnable(enabled);
      return this;
    },
    disableTouching: function disableTouching(gameObject) {
      if (gameObject && _typeof(gameObject) !== 'object') {
        gameObject = this;
      }
      if (gameObject._inTouching === undefined) {
        return this;
      }
      gameObject._inTouching.setEnable(false);
      return this;
    }
  };

  var PointToChild = function PointToChild(parents, x, y) {
    var parent;
    for (var i = 0, cnt = parents.length; i < cnt; i++) {
      parent = parents[i];
      if (!ContainsPoint(parent, x, y)) {
        continue;
      }
      return parent.pointToChild(x, y);
    }
    return null;
  };

  var EmitChildEvent = function EmitChildEvent(eventEmitter, eventName, parents, x, y, pointer, event) {
    var child;
    if (y === undefined) {
      child = x;
    } else {
      child = PointToChild(parents, x, y);
    }
    if (!child) {
      return;
    }
    eventEmitter.emit(eventName, child, pointer, event);
  };

  var GetValue$J = Phaser.Utils.Objects.GetValue;
  var DownChild = function DownChild(config) {
    var downConfig = GetValue$J(config, 'down', undefined);
    if (downConfig === false) {
      return;
    } else if (downConfig === true) {
      downConfig = undefined;
    }
    this.on('pointerdown', OnDown, this);
  };
  var OnDown = function OnDown(pointer, localX, localY, event) {
    var childrenInteractive = this._childrenInteractive;
    EmitChildEvent(childrenInteractive.eventEmitter, "".concat(childrenInteractive.eventNamePrefix, "down"), childrenInteractive.targetSizers, pointer.worldX, pointer.worldY, pointer, event);
  };

  var GetValue$I = Phaser.Utils.Objects.GetValue;
  var UpChild = function UpChild(config) {
    var upConfig = GetValue$I(config, 'up', undefined);
    if (upConfig === false) {
      return;
    } else if (upConfig === true) {
      upConfig = undefined;
    }
    this.on('pointerup', OnUp, this);
  };
  var OnUp = function OnUp(pointer, localX, localY, event) {
    var childrenInteractive = this._childrenInteractive;
    EmitChildEvent(childrenInteractive.eventEmitter, "".concat(childrenInteractive.eventNamePrefix, "up"), childrenInteractive.targetSizers, pointer.worldX, pointer.worldY, pointer, event);
  };

  var GetValue$H = Phaser.Utils.Objects.GetValue;
  var OverChild = function OverChild(config) {
    var overConfig = GetValue$H(config, 'over', undefined);
    if (overConfig === false) {
      return;
    } else if (overConfig === true) {
      overConfig = undefined;
    }
    this.on('pointermove', OnMove$1, this).on('pointerover', OnMove$1, this).on('pointerout', OnOut$1, this); // pointer-up is included too
  };

  var OnMove$1 = function OnMove(pointer, localX, localY, event) {
    var childrenInteractive = this._childrenInteractive;
    var child = PointToChild(childrenInteractive.targetSizers, pointer.worldX, pointer.worldY);
    var preChild = childrenInteractive.lastOverChild;
    if (child && preChild && child === preChild) {
      return;
    }
    childrenInteractive.lastOverChild = child;
    EmitChildEvent(childrenInteractive.eventEmitter, "".concat(childrenInteractive.eventNamePrefix, "out"), childrenInteractive.targetSizers, preChild, undefined, pointer, event);
    EmitChildEvent(childrenInteractive.eventEmitter, "".concat(childrenInteractive.eventNamePrefix, "over"), childrenInteractive.targetSizers, child, undefined, pointer, event);
  };
  var OnOut$1 = function OnOut(pointer, event) {
    var childrenInteractive = this._childrenInteractive;
    var child = childrenInteractive.lastOverChild;
    childrenInteractive.lastOverChild = null;
    EmitChildEvent(childrenInteractive.eventEmitter, "".concat(childrenInteractive.eventNamePrefix, "out"), childrenInteractive.targetSizers, child, undefined, pointer, event);
  };

  var GetValue$G = Phaser.Utils.Objects.GetValue;
  var ClickChild = function ClickChild(config) {
    var clickConfig = GetValue$G(config, 'click', undefined);
    if (clickConfig === false) {
      return;
    } else if (clickConfig === true) {
      clickConfig = undefined;
    }
    if (clickConfig === undefined) {
      clickConfig = {};
    }
    if (!clickConfig.hasOwnProperty('threshold')) {
      clickConfig.threshold = 10;
    }
    var childrenInteractive = this._childrenInteractive;
    this._click = new Button(this, clickConfig);
    this._click.on('click', function (button, gameObject, pointer, event) {
      EmitChildEvent(childrenInteractive.eventEmitter, "".concat(childrenInteractive.eventNamePrefix, "click"), childrenInteractive.targetSizers, pointer.worldX, pointer.worldY, pointer, event);
    }, this);
  };

  var GetValue$F = Phaser.Utils.Objects.GetValue;
  var OnePointerTracer = /*#__PURE__*/function (_TickTask) {
    _inherits(OnePointerTracer, _TickTask);
    var _super = _createSuper(OnePointerTracer);
    function OnePointerTracer(gameObject, config) {
      var _this;
      _classCallCheck(this, OnePointerTracer);
      var scene = GetSceneObject(gameObject);
      if (scene === gameObject) {
        gameObject = undefined;
      }
      _this = _super.call(this, scene, config);
      _this.gameObject = gameObject;
      if (gameObject) {
        gameObject.setInteractive(GetValue$F(config, 'inputConfig', undefined));
      }
      _this._enable = undefined;
      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(OnePointerTracer, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.setEnable(GetValue$F(o, 'enable', true));
        this.setDetectBounds();
        if (this.gameObject === undefined) {
          this.setDetectBounds(GetValue$F(o, 'bounds', undefined));
        } else {
          this.setDetectBounds();
        }
        this.tracerState = TOUCH0$1;
        // this.recongizedState = new stateClass(this);
        this.pointer = undefined;
        this.lastPointer = undefined; // Last catched pointer
        this.movedState = false;
        this.isTouchingAnyObject = false;
        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        _get(_getPrototypeOf(OnePointerTracer.prototype), "boot", this).call(this);
        if (this.gameObject) {
          this.gameObject.on('pointerdown', this.onPointerDown, this);
        } else {
          this.scene.input.on('pointerdown', this.onPointerDown, this);
        }
        this.scene.input.on('pointerup', this.onPointerUp, this);
        this.scene.input.on('gameout', this.dragCancel, this);
        this.scene.input.on('pointermove', this.onPointerMove, this);
        this.scene.sys.events.once('shutdown', this.destroy, this);
      }
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        if (!this.scene) {
          return;
        }
        if (this.gameObject) ; else {
          this.scene.input.off('pointerdown', this.onPointerDown, this);
        }
        this.scene.input.off('pointerup', this.onPointerUp, this);
        this.scene.input.off('gameout', this.dragCancel, this);
        this.scene.input.off('pointermove', this.onPointerMove, this);
        this.scene.sys.events.off('shutdown', this.destroy, this);
        this.gameObject = undefined;
        this.bounds = undefined;
        this.pointer = undefined;
        this.lastPointer = undefined; // Last catched pointer
        this.movedState = false;
        _get(_getPrototypeOf(OnePointerTracer.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "enable",
      get: function get() {
        return this._enable;
      },
      set: function set(e) {
        if (this._enable === e) {
          return;
        }
        if (!e) {
          this.dragCancel();
        }
        this._enable = e;
        return this;
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "setDetectBounds",
      value: function setDetectBounds(bounds) {
        this.bounds = bounds;
        return this;
      }
    }, {
      key: "toggleEnable",
      value: function toggleEnable() {
        this.setEnable(!this.enable);
        return this;
      }
    }, {
      key: "onPointerDown",
      value: function onPointerDown(pointer, gameObjects) {
        if (!this.enable) {
          return;
        }
        if (this.pointer !== undefined) {
          return;
        }
        var isInsideBounds = this.bounds ? this.bounds.contains(pointer.x, pointer.y) : true;
        if (!isInsideBounds) {
          return;
        }
        if (this.pointer === pointer) {
          return;
        }
        this.pointer = pointer;
        this.lastPointer = pointer;
        this.movedState = false;
        this.tracerState = TOUCH1$1;
        if (this.gameObject === undefined) {
          this.isTouchingAnyObject = gameObjects.length > 0;
        }
        this.onDragStart();
      }
    }, {
      key: "onPointerUp",
      value: function onPointerUp(pointer) {
        if (!this.enable) {
          return;
        }
        var isInsideBounds = this.bounds ? this.bounds.contains(pointer.x, pointer.y) : true;
        if (!isInsideBounds) {
          return;
        }
        if (this.pointer !== pointer) {
          return;
        }
        this.pointer = undefined;
        this.movedState = false;
        this.tracerState = TOUCH0$1;
        this.onDragEnd();
      }
    }, {
      key: "onPointerMove",
      value: function onPointerMove(pointer) {
        if (!this.enable) {
          return;
        }
        if (pointer.isDown) {
          var isInsideBounds = this.bounds ? this.bounds.contains(pointer.x, pointer.y) : true;
          var isCatchedPointer = this.pointer === pointer;
          if (!isCatchedPointer && isInsideBounds) ; else if (isCatchedPointer && !isInsideBounds) {
            // Pointer moves out of bounds
            this.onPointerUp(pointer);
          } else {
            // Pointer drags in bounds
            if (!this.movedState) {
              this.movedState = pointer.x !== pointer.downX || pointer.y !== pointer.downY;
            }
            if (this.movedState) {
              this.onDrag();
            }
          }
        }
      }
    }, {
      key: "dragCancel",
      value: function dragCancel() {
        if (this.tracerState === TOUCH1$1) {
          this.onDragEnd();
        }
        this.pointer = undefined;
        this.tracerState = TOUCH0$1;
        return this;
      }
    }, {
      key: "onDragStart",
      value: function onDragStart() {
        this.emit('dragstart', this);
      }
    }, {
      key: "onDragEnd",
      value: function onDragEnd() {
        this.emit('dragend', this);
      }
    }, {
      key: "onDrag",
      value: function onDrag() {
        this.emit('drag', this);
      }

      // onLastPointerMove() { }
    }, {
      key: "preUpdate",
      value: function preUpdate(time, delta) {}
    }, {
      key: "postUpdate",
      value: function postUpdate(time, delta) {}
    }, {
      key: "startTicking",
      value: function startTicking() {
        _get(_getPrototypeOf(OnePointerTracer.prototype), "startTicking", this).call(this);
        this.scene.sys.events.on('preupdate', this.preUpdate, this);
        this.scene.sys.events.on('postupdate', this.postUpdate, this);
      }
    }, {
      key: "stopTicking",
      value: function stopTicking() {
        _get(_getPrototypeOf(OnePointerTracer.prototype), "stopTicking", this).call(this);
        if (this.scene) {
          // Scene might be destoryed
          this.scene.sys.events.off('preupdate', this.preUpdate, this);
          this.scene.sys.events.off('postupdate', this.postUpdate, this);
        }
      }
    }, {
      key: "setRecongizedStateObject",
      value: function setRecongizedStateObject(stateObject) {
        this.recongizedState = stateObject;
        return this;
      }
    }, {
      key: "state",
      get: function get() {
        return this.recongizedState.state;
      },
      set: function set(newState) {
        this.recongizedState.state = newState;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.state = IDLE$5;
        return this;
      }
    }]);
    return OnePointerTracer;
  }(TickTask);
  var TOUCH0$1 = 0;
  var TOUCH1$1 = 1;
  var IDLE$5 = 'IDLE';

  var GetValue$E = Phaser.Utils.Objects.GetValue;
  var DistanceBetween$3 = Phaser.Math.Distance.Between;
  var Tap = /*#__PURE__*/function (_OnePointerTracer) {
    _inherits(Tap, _OnePointerTracer);
    var _super = _createSuper(Tap);
    function Tap(gameObject, config) {
      var _this;
      _classCallCheck(this, Tap);
      _this = _super.call(this, gameObject, config);
      var self = _assertThisInitialized(_this);
      var stateConfig = {
        states: {
          IDLE: {
            enter: function enter() {
              self.stop();
              self.tapsCount = 0;
              self.x = 0;
              self.y = 0;
              self.worldX = 0;
              self.worldY = 0;
            },
            exit: function exit() {
              var pointer = self.lastPointer;
              self.x = pointer.x;
              self.y = pointer.y;
              self.worldX = pointer.worldX;
              self.worldY = pointer.worldY;
            }
          },
          BEGIN: {
            enter: function enter() {
              self.start();
              self.tapsCount = 0;
              self.emit('tappingstart', self, self.gameObject, self.lastPointer);
            }
          },
          RECOGNIZED: {
            enter: function enter() {
              self.start();
              self.emit('tap', self, self.gameObject, self.lastPointer);
              self.emit("".concat(self.tapsCount, "tap"), self, self.gameObject, self.lastPointer);
            }
          }
        },
        init: function init() {
          this.state = IDLE$4;
        },
        eventEmitter: false
      };
      _this.setRecongizedStateObject(new FSM(stateConfig));
      return _this;
    }
    _createClass(Tap, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(Tap.prototype), "resetFromJSON", this).call(this, o);
        this.setHoldTime(GetValue$E(o, 'time', 250)); // min-hold-time of Press is 251
        this.setTapInterval(GetValue$E(o, 'tapInterval', 200));
        this.setDragThreshold(GetValue$E(o, 'threshold', 9));
        this.setTapOffset(GetValue$E(o, 'tapOffset', 10));
        var taps = GetValue$E(o, 'taps', undefined);
        if (taps !== undefined) {
          this.setTaps(taps);
        } else {
          this.setMaxTaps(GetValue$E(o, 'maxTaps', undefined));
          this.setMinTaps(GetValue$E(o, 'minTaps', undefined));
        }
        return this;
      }
    }, {
      key: "onDragStart",
      value: function onDragStart() {
        switch (this.state) {
          case IDLE$4:
            this.state = BEGIN$3;
            break;
          case BEGIN$3:
            var pointer = this.lastPointer;
            var tapsOffset = DistanceBetween$3(pointer.upX, pointer.upY, pointer.x, pointer.y);
            if (tapsOffset > this.tapOffset) {
              // Can't recognize next level, restart here
              this.state = RECOGNIZED$3;
              this.state = BEGIN$3;
            }
            break;
          case RECOGNIZED$3:
            this.state = BEGIN$3;
            break;
        }
      }
    }, {
      key: "onDragEnd",
      value: function onDragEnd() {
        if (this.state === BEGIN$3) {
          this.tapsCount++; // Try recognize next level
          this.emit('tapping', this, this.gameObject, this.lastPointer);
          if (this.maxTaps !== undefined && this.tapsCount === this.maxTaps) {
            // Reach to maxTaps, stop here                
            this.state = RECOGNIZED$3;
          }
        }
      }
    }, {
      key: "onDrag",
      value: function onDrag() {
        if (this.state === IDLE$4) {
          return;
        }
        if (this.pointer.getDistance() > this.dragThreshold) {
          // Cancel
          this.state = IDLE$4;
        }
      }
    }, {
      key: "preUpdate",
      value: function preUpdate(time, delta) {
        if (!this.isRunning || !this.enable) {
          return;
        }
        if (this.state === BEGIN$3) {
          var pointer = this.lastPointer;
          if (pointer.isDown) {
            var holdTime = time - pointer.downTime;
            if (holdTime > this.holdTime) {
              this.state = IDLE$4;
            }
          } else {
            // isUp
            var releasedTime = time - pointer.upTime;
            if (releasedTime > this.tapInterval) {
              if (this.minTaps === undefined || this.tapsCount >= this.minTaps) {
                this.state = RECOGNIZED$3;
              } else {
                this.state = IDLE$4;
              }
            }
          }
        }
      }
    }, {
      key: "postUpdate",
      value: function postUpdate(time, delta) {
        if (!this.isRunning || !this.enable) {
          return;
        }
        // Clear RECOGNIZED after update()
        if (this.state === RECOGNIZED$3) {
          this.state = IDLE$4;
        }
      }
    }, {
      key: "isTapped",
      get: function get() {
        return this.state === RECOGNIZED$3;
      }
    }, {
      key: "setHoldTime",
      value: function setHoldTime(time) {
        this.holdTime = time; // ms
        return this;
      }
    }, {
      key: "setTapInterval",
      value: function setTapInterval(time) {
        this.tapInterval = time; // ms
        return this;
      }
    }, {
      key: "setDragThreshold",
      value: function setDragThreshold(distance) {
        this.dragThreshold = distance;
        return this;
      }
    }, {
      key: "setTapOffset",
      value: function setTapOffset(distance) {
        this.tapOffset = distance;
        return this;
      }
    }, {
      key: "setMaxTaps",
      value: function setMaxTaps(taps) {
        this.maxTaps = taps;
        return this;
      }
    }, {
      key: "setMinTaps",
      value: function setMinTaps(taps) {
        this.minTaps = taps;
        return this;
      }
    }, {
      key: "setTaps",
      value: function setTaps(minTaps, maxTaps) {
        if (maxTaps === undefined) {
          maxTaps = minTaps;
        }
        this.setMinTaps(minTaps).setMaxTaps(maxTaps);
        return this;
      }
    }]);
    return Tap;
  }(OnePointerTracer);
  var IDLE$4 = 'IDLE';
  var BEGIN$3 = 'BEGIN';
  var RECOGNIZED$3 = 'RECOGNIZED';

  var GetValue$D = Phaser.Utils.Objects.GetValue;
  var Press = /*#__PURE__*/function (_OnePointerTracer) {
    _inherits(Press, _OnePointerTracer);
    var _super = _createSuper(Press);
    function Press(gameObject, config) {
      var _this;
      _classCallCheck(this, Press);
      _this = _super.call(this, gameObject, config);
      var self = _assertThisInitialized(_this);
      var stateConfig = {
        states: {
          IDLE: {
            enter: function enter() {
              self.x = 0;
              self.y = 0;
              self.worldX = 0;
              self.worldY = 0;
            },
            exit: function exit() {
              var pointer = self.lastPointer;
              self.x = pointer.x;
              self.y = pointer.y;
              self.worldX = pointer.worldX;
              self.worldY = pointer.worldY;
            }
          },
          BEGIN: {
            enter: function enter() {
              self.start();
            },
            exit: function exit() {
              self.stop();
            }
          },
          RECOGNIZED: {
            enter: function enter() {
              self.emit('pressstart', self, self.gameObject, self.lastPointer);
            },
            exit: function exit() {
              self.emit('pressend', self, self.gameObject, self.lastPointer);
            }
          }
        },
        init: function init() {
          this.state = IDLE$3;
        },
        eventEmitter: false
      };
      _this.setRecongizedStateObject(new FSM(stateConfig));
      return _this;
    }
    _createClass(Press, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(Press.prototype), "resetFromJSON", this).call(this, o);
        this.setDragThreshold(GetValue$D(o, 'threshold', 9));
        this.setHoldTime(GetValue$D(o, 'time', 251));
        return this;
      }
    }, {
      key: "onDragStart",
      value: function onDragStart() {
        this.state = BEGIN$2;
        if (this.holdTime === 0) {
          this.state = RECOGNIZED$2;
        }
      }
    }, {
      key: "onDragEnd",
      value: function onDragEnd() {
        this.state = IDLE$3;
      }
    }, {
      key: "onDrag",
      value: function onDrag() {
        if (this.state === IDLE$3) {
          return;
        }
        if (this.pointer.getDistance() > this.dragThreshold) {
          this.state = IDLE$3;
        }
      }
    }, {
      key: "preUpdate",
      value: function preUpdate(time, delta) {
        if (!this.isRunning || !this.enable) {
          return;
        }
        if (this.state === BEGIN$2) {
          var holdTime = time - this.pointer.downTime;
          if (holdTime >= this.holdTime) {
            this.state = RECOGNIZED$2;
          }
        }
      }
    }, {
      key: "isPressed",
      get: function get() {
        return this.state === RECOGNIZED$2;
      }
    }, {
      key: "setHoldTime",
      value: function setHoldTime(time) {
        this.holdTime = time; // ms
        return this;
      }
    }, {
      key: "setDragThreshold",
      value: function setDragThreshold(distance) {
        this.dragThreshold = distance;
        return this;
      }
    }]);
    return Press;
  }(OnePointerTracer);
  var IDLE$3 = 'IDLE';
  var BEGIN$2 = 'BEGIN';
  var RECOGNIZED$2 = 'RECOGNIZED';

  Phaser.Utils.Objects.GetValue;

  var GetTickDelta = function GetTickDelta(game) {
    return GetGame(game).loop.delta;
  };

  var DistanceBetween$2 = Phaser.Math.Distance.Between;
  var AngleBetween$1 = Phaser.Math.Angle.Between;
  var VelocityMethods = {
    getDt: function getDt() {
      var dt = GetTickDelta(this.scene);
      return dt;
    },
    getVelocity: function getVelocity() {
      var p1 = this.pointer.position;
      var p0 = this.pointer.prevPosition;
      var d = DistanceBetween$2(p0.x, p0.y, p1.x, p1.y);
      var velocity = d / (this.getDt() * 0.001);
      return velocity;
    },
    getVelocityX: function getVelocityX() {
      var p1 = this.pointer.position;
      var p0 = this.pointer.prevPosition;
      var d = Math.abs(p1.x - p0.x);
      var velocity = d / (this.getDt() * 0.001);
      return velocity;
    },
    getVelocityY: function getVelocityY() {
      var p1 = this.pointer.position;
      var p0 = this.pointer.prevPosition;
      var d = Math.abs(p1.y - p0.y);
      var velocity = d / (this.getDt() * 0.001);
      return velocity;
    },
    getVelocityAngle: function getVelocityAngle() {
      var p1 = this.pointer.position;
      var p0 = this.pointer.prevPosition;
      var angle = AngleBetween$1(p0.x, p0.y, p1.x, p1.y);
      return angle;
    }
  };

  var DIRMODE = {
    'up&down': 0,
    'left&right': 1,
    '4dir': 2,
    '8dir': 3
  };

  var AngleToDirections = function AngleToDirections(angle, dirMode, out) {
    if (out === undefined) {
      out = {};
    } else if (out === true) {
      out = globOut;
    }
    out.left = false;
    out.right = false;
    out.up = false;
    out.down = false;
    angle = (angle + 360) % 360;
    switch (dirMode) {
      case 0:
        // up & down
        if (angle < 180) {
          out.down = true;
        } else {
          out.up = true;
        }
        break;
      case 1:
        // left & right
        if (angle > 90 && angle <= 270) {
          out.left = true;
        } else {
          out.right = true;
        }
        break;
      case 2:
        // 4 dir
        if (angle > 45 && angle <= 135) {
          out.down = true;
        } else if (angle > 135 && angle <= 225) {
          out.left = true;
        } else if (angle > 225 && angle <= 315) {
          out.up = true;
        } else {
          out.right = true;
        }
        break;
      case 3:
        // 8 dir
        if (angle > 22.5 && angle <= 67.5) {
          out.down = true;
          out.right = true;
        } else if (angle > 67.5 && angle <= 112.5) {
          out.down = true;
        } else if (angle > 112.5 && angle <= 157.5) {
          out.down = true;
          out.left = true;
        } else if (angle > 157.5 && angle <= 202.5) {
          out.left = true;
        } else if (angle > 202.5 && angle <= 247.5) {
          out.left = true;
          out.up = true;
        } else if (angle > 247.5 && angle <= 292.5) {
          out.up = true;
        } else if (angle > 292.5 && angle <= 337.5) {
          out.up = true;
          out.right = true;
        } else {
          out.right = true;
        }
        break;
    }
    return out;
  };
  var globOut = {};

  var GetValue$C = Phaser.Utils.Objects.GetValue;
  var RadToDeg$1 = Phaser.Math.RadToDeg;
  var Swipe = /*#__PURE__*/function (_OnePointerTracer) {
    _inherits(Swipe, _OnePointerTracer);
    var _super = _createSuper(Swipe);
    function Swipe(gameObject, config) {
      var _this;
      _classCallCheck(this, Swipe);
      _this = _super.call(this, gameObject, config);
      var self = _assertThisInitialized(_this);
      var stateConfig = {
        states: {
          IDLE: {
            enter: function enter() {
              self.x = 0;
              self.y = 0;
              self.worldX = 0;
              self.worldY = 0;
            },
            exit: function exit() {
              var pointer = self.lastPointer;
              self.x = pointer.x;
              self.y = pointer.y;
              self.worldX = pointer.worldX;
              self.worldY = pointer.worldY;
            }
          },
          BEGIN: {
            enter: function enter() {
              self.validDrag = false;
            }
          },
          RECOGNIZED: {
            enter: function enter() {
              self.start();
              self.updateDirectionStates();
              self.emit('swipe', self, self.gameObject, self.lastPointer);
            },
            exit: function exit() {
              self.stop();
              self.clearDirectionStates();
            }
          }
        },
        init: function init() {
          this.state = IDLE$2;
        },
        eventEmitter: false
      };
      _this.setRecongizedStateObject(new FSM(stateConfig));
      _this.clearDirectionStates();
      return _this;
    }
    _createClass(Swipe, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(Swipe.prototype), "resetFromJSON", this).call(this, o);
        this.setDragThreshold(GetValue$C(o, 'threshold', 10));
        this.setVelocityThreshold(GetValue$C(o, 'velocityThreshold', 1000));
        this.setDirectionMode(GetValue$C(o, 'dir', '8dir'));
        return this;
      }
    }, {
      key: "onDragStart",
      value: function onDragStart() {
        this.state = BEGIN$1;
      }
    }, {
      key: "onDragEnd",
      value: function onDragEnd() {
        this.state = IDLE$2;
      }
    }, {
      key: "onDrag",
      value: function onDrag() {
        if (this.state === BEGIN$1) {
          if (!this.validDrag) {
            this.validDrag = this.dragThreshold === 0 || this.pointer.getDistance() >= this.dragThreshold;
          }
          if (this.validDrag && this.dragVelocity > this.velocityThreshold) {
            this.state = RECOGNIZED$1;
          }
        }
      }
    }, {
      key: "postUpdate",
      value: function postUpdate(time, delta) {
        if (!this.isRunning || !this.enable) {
          return;
        }
        // Clear RECOGNIZED after update()
        if (this.state === RECOGNIZED$1) {
          this.state = IDLE$2;
        }
      }
    }, {
      key: "isSwiped",
      get: function get() {
        return this.state === RECOGNIZED$1;
      }
    }, {
      key: "dragVelocity",
      get: function get() {
        var velocity;
        switch (this.dirMode) {
          case 0:
            velocity = this.getVelocityY();
            break;
          // up & down
          case 1:
            velocity = this.getVelocityX();
            break;
          // left & right
          default:
            velocity = this.getVelocity();
            break;
          // 4 dir, 8 dir
        }

        return velocity;
      }
    }, {
      key: "setDragThreshold",
      value: function setDragThreshold(distance) {
        this.dragThreshold = distance;
        return this;
      }
    }, {
      key: "setVelocityThreshold",
      value: function setVelocityThreshold(velocity) {
        this.velocityThreshold = velocity;
        return this;
      }
    }, {
      key: "setDirectionMode",
      value: function setDirectionMode(m) {
        if (typeof m === 'string') {
          m = DIRMODE[m];
        }
        this.dirMode = m;
        return this;
      }
    }, {
      key: "updateDirectionStates",
      value: function updateDirectionStates() {
        var angle = RadToDeg$1(this.getVelocityAngle());
        AngleToDirections(angle, this.dirMode, this);
        return this;
      }
    }, {
      key: "clearDirectionStates",
      value: function clearDirectionStates() {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        return this;
      }
    }]);
    return Swipe;
  }(OnePointerTracer);
  Object.assign(Swipe.prototype, VelocityMethods);
  var IDLE$2 = 'IDLE';
  var BEGIN$1 = 'BEGIN';
  var RECOGNIZED$1 = 'RECOGNIZED';

  var GetValue$B = Phaser.Utils.Objects.GetValue;
  var SpliceOne$1 = Phaser.Utils.Array.SpliceOne;
  var DistanceBetween$1 = Phaser.Math.Distance.Between;
  var AngleBetween = Phaser.Math.Angle.Between;
  var TwoPointersTracer = /*#__PURE__*/function () {
    function TwoPointersTracer(gameObject, config) {
      _classCallCheck(this, TwoPointersTracer);
      var scene = GetSceneObject(gameObject);
      if (scene === gameObject) {
        gameObject = undefined;
      }
      var amount = scene.input.manager.pointersTotal - 1;
      if (amount < 2) {
        scene.input.addPointer(2 - amount);
      }
      this.scene = scene;
      this.gameObject = gameObject;
      if (gameObject) {
        gameObject.setInteractive(GetValue$B(config, 'inputConfig', undefined));
      }

      // Event emitter
      this.setEventEmitter(GetValue$B(config, 'eventEmitter', undefined));
      this._enable = undefined;
      this.pointers = [];
      this.movedState = {};
      this.resetFromJSON(config);
      this.boot();
    }
    _createClass(TwoPointersTracer, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.setEnable(GetValue$B(o, "enable", true));
        this.bounds = GetValue$B(o, 'bounds', undefined);
        this.tracerState = TOUCH0;
        this.pointers.length = 0;
        Clear(this.movedState);
        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        if (this.gameObject) {
          this.gameObject.on('pointerdown', this.onPointerDown, this);
        } else {
          this.scene.input.on('pointerdown', this.onPointerDown, this);
        }
        this.scene.input.on('pointerup', this.onPointerUp, this);
        this.scene.input.on('gameout', this.dragCancel, this);
        this.scene.input.on('pointermove', this.onPointerMove, this);
        this.scene.sys.events.once('shutdown', this.destroy, this);
      }
    }, {
      key: "shutdown",
      value: function shutdown() {
        if (!this.scene) {
          return;
        }
        this.destroyEventEmitter();
        this.pointers.length = 0;
        Clear(this.movedState);
        if (this.gameObject) ; else {
          this.scene.input.off('pointerdown', this.onPointerDown, this);
        }
        this.scene.input.off('pointerup', this.onPointerUp, this);
        this.scene.input.off('gameout', this.dragCancel, this);
        this.scene.input.off('pointermove', this.onPointerMove, this);
        this.scene.sys.events.off('shutdown', this.destroy, this);
        this.scene = undefined;
        this.gameObject = undefined;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.shutdown();
      }
    }, {
      key: "enable",
      get: function get() {
        return this._enable;
      },
      set: function set(e) {
        if (this._enable === e) {
          return;
        }
        if (!e) {
          this.dragCancel();
        }
        this._enable = e;
        return this;
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "toggleEnable",
      value: function toggleEnable() {
        this.setEnable(!this.enable);
        return this;
      }
    }, {
      key: "onPointerDown",
      value: function onPointerDown(pointer) {
        if (!this.enable) {
          return;
        }
        if (this.pointers.length === 2) {
          return;
        }
        var isInsideBounds = this.bounds ? this.bounds.contains(pointer.x, pointer.y) : true;
        if (!isInsideBounds) {
          return;
        }
        var index = this.pointers.indexOf(pointer);
        if (index !== -1) {
          // Already in catched pointers
          return;
        }
        this.movedState[pointer.id] = false;
        this.pointers.push(pointer);
        switch (this.tracerState) {
          case TOUCH0:
            this.tracerState = TOUCH1;
            this.onDrag1Start();
            break;
          case TOUCH1:
            this.tracerState = TOUCH2;
            this.onDrag2Start();
            break;
        }
      }
    }, {
      key: "onPointerUp",
      value: function onPointerUp(pointer) {
        if (!this.enable) {
          return;
        }
        var isInsideBounds = this.bounds ? this.bounds.contains(pointer.x, pointer.y) : true;
        if (!isInsideBounds) {
          return;
        }
        var index = this.pointers.indexOf(pointer);
        if (index === -1) {
          // Not in catched pointers
          return;
        } else {
          delete this.movedState[pointer.id];
          SpliceOne$1(this.pointers, index);
        }
        switch (this.tracerState) {
          case TOUCH1:
            this.tracerState = TOUCH0;
            this.onDrag1End();
            break;
          case TOUCH2:
            this.tracerState = TOUCH1;
            this.onDrag2End();
            this.onDrag1Start();
            break;
        }
      }
    }, {
      key: "onPointerMove",
      value: function onPointerMove(pointer) {
        if (!this.enable) {
          return;
        }
        if (pointer.isDown) {
          var isInsideBounds = this.bounds ? this.bounds.contains(pointer.x, pointer.y) : true;
          var isCatchedPointer = this.pointers.indexOf(pointer) !== -1;
          if (!isCatchedPointer && isInsideBounds) ; else if (isCatchedPointer && !isInsideBounds) {
            // Pointer moves out of bounds, lose pointer
            this.onPointerUp(pointer);
          } else {
            // Pointer drags in bounds
            if (!this.movedState[pointer.id]) {
              this.movedState[pointer.id] = pointer.x !== pointer.downX || pointer.y !== pointer.downY;
            }
            if (this.movedState[pointer.id]) {
              switch (this.tracerState) {
                case TOUCH1:
                  this.onDrag1();
                  break;
                case TOUCH2:
                  this.onDrag2();
                  break;
              }
            }
          }
        }
      }
    }, {
      key: "dragCancel",
      value: function dragCancel() {
        if (this.tracerState === TOUCH2) {
          this.onDrag2End();
        }
        this.pointers.length = 0;
        Clear(this.movedState);
        this.tracerState = TOUCH0;
        return this;
      }
    }, {
      key: "onDrag1Start",
      value: function onDrag1Start() {
        this.emit('drag1start', this);
      }
    }, {
      key: "onDrag1End",
      value: function onDrag1End() {
        this.emit('drag1end', this);
      }
    }, {
      key: "onDrag1",
      value: function onDrag1() {
        this.emit('drag1', this);
      }
    }, {
      key: "onDrag2Start",
      value: function onDrag2Start() {
        this.emit('drag2start', this);
      }
    }, {
      key: "onDrag2End",
      value: function onDrag2End() {
        this.emit('drag2end', this);
      }
    }, {
      key: "onDrag2",
      value: function onDrag2() {
        this.emit('drag2', this);
      }
    }, {
      key: "distanceBetween",
      get: function get() {
        if (this.tracerState !== TOUCH2) {
          return 0;
        }
        var p0 = this.pointers[0],
          p1 = this.pointers[1];
        return DistanceBetween$1(p0.x, p0.y, p1.x, p1.y);
      }
    }, {
      key: "angleBetween",
      get: function get() {
        if (this.tracerState !== TOUCH2) {
          return 0;
        }
        var p0 = this.pointers[0],
          p1 = this.pointers[1];
        return AngleBetween(p0.x, p0.y, p1.x, p1.y);
      }
    }, {
      key: "drag1Vector",
      get: function get() {
        var pointer = this.pointers[0];
        if (pointer && this.movedState[pointer.id]) {
          var p1 = pointer.position;
          var p0 = pointer.prevPosition;
          tmpDragVector.x = p1.x - p0.x;
          tmpDragVector.y = p1.y - p0.y;
        } else {
          tmpDragVector.x = 0;
          tmpDragVector.y = 0;
        }
        return tmpDragVector;
      }
    }, {
      key: "centerX",
      get: function get() {
        if (this.tracerState !== TOUCH2) {
          return 0;
        }
        var p0 = this.pointers[0].position;
        var p1 = this.pointers[1].position;
        return (p0.x + p1.x) / 2;
      }
    }, {
      key: "centerY",
      get: function get() {
        if (this.tracerState !== TOUCH2) {
          return 0;
        }
        var p0 = this.pointers[0].position;
        var p1 = this.pointers[1].position;
        return (p0.y + p1.y) / 2;
      }
    }, {
      key: "prevCenterX",
      get: function get() {
        if (this.tracerState !== TOUCH2) {
          return 0;
        }
        var preP0 = this.movedState[this.pointers[0].id] ? this.pointers[0].prevPosition : this.pointers[0].position;
        var preP1 = this.movedState[this.pointers[1].id] ? this.pointers[1].prevPosition : this.pointers[1].position;
        return (preP0.x + preP1.x) / 2;
      }
    }, {
      key: "prevCenterY",
      get: function get() {
        if (this.tracerState !== TOUCH2) {
          return 0;
        }
        var preP0 = this.movedState[this.pointers[0].id] ? this.pointers[0].prevPosition : this.pointers[0].position;
        var preP1 = this.movedState[this.pointers[1].id] ? this.pointers[1].prevPosition : this.pointers[1].position;
        return (preP0.y + preP1.y) / 2;
      }
    }, {
      key: "movementCenterX",
      get: function get() {
        return this.centerX - this.prevCenterX;
      }
    }, {
      key: "movementCenterY",
      get: function get() {
        return this.centerY - this.prevCenterY;
      }
    }, {
      key: "setRecongizedStateObject",
      value: function setRecongizedStateObject(stateObject) {
        this.recongizedState = stateObject;
        return this;
      }
    }, {
      key: "state",
      get: function get() {
        return this.recongizedState.state;
      },
      set: function set(newState) {
        this.recongizedState.state = newState;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.state = IDLE$1;
        return this;
      }
    }]);
    return TwoPointersTracer;
  }();
  Object.assign(TwoPointersTracer.prototype, EventEmitterMethods$1);
  var tmpDragVector = {};
  var TOUCH0 = 0;
  var TOUCH1 = 1;
  var TOUCH2 = 2;
  var IDLE$1 = 'IDLE';

  Phaser.Utils.Objects.GetValue;

  var RotateAround = Phaser.Math.RotateAround;
  var RotateObjectAround = function RotateObjectAround(gameObject, x, y, angle) {
    RotateAround(gameObject, x, y, angle);
    gameObject.rotation += angle;
    return gameObject;
  };

  var ScreenXYToWorldXY = function ScreenXYToWorldXY(screenX, screenY, camera, out) {
    if (out === undefined) {
      out = {};
    } else if (out === true) {
      out = globalOut;
    }
    camera.getWorldPoint(screenX, screenY, out);
    return out;
  };
  var globalOut = {};

  var SpinObject = function SpinObject(gameObject, camera) {
    if (!this.isRotation) {
      return this;
    }
    if (camera === undefined) {
      camera = this.pointers[0].camera;
    }
    var movementX = this.movementCenterX,
      movementY = this.movementCenterY;
    var worldXY = ScreenXYToWorldXY(this.centerX, this.centerY, camera, true);
    var centerWorldX = worldXY.x;
    var centerWorldY = worldXY.y;
    var angle = this.rotation;
    if (Array.isArray(gameObject)) {
      var gameObjects = gameObject;
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        gameObject = gameObjects[i];
        gameObject.x += movementX;
        gameObject.y += movementY;
        RotateObjectAround(gameObject, centerWorldX, centerWorldY, angle);
      }
    } else {
      gameObject.x += movementX;
      gameObject.y += movementY;
      RotateObjectAround(gameObject, centerWorldX, centerWorldY, angle);
    }
    return this;
  };

  var GetValue$A = Phaser.Utils.Objects.GetValue;
  var WrapDegrees = Phaser.Math.Angle.WrapDegrees; // Wrap degrees: -180 to 180 
  var ShortestBetween = Phaser.Math.Angle.ShortestBetween;
  var RadToDeg = Phaser.Math.RadToDeg;
  var DegToRad$1 = Phaser.Math.DegToRad;
  var Rotate = /*#__PURE__*/function (_TwoPointersTracer) {
    _inherits(Rotate, _TwoPointersTracer);
    var _super = _createSuper(Rotate);
    function Rotate(gameObject, config) {
      var _this;
      _classCallCheck(this, Rotate);
      _this = _super.call(this, gameObject, config);
      var self = _assertThisInitialized(_this);
      var stateConfig = {
        states: {
          IDLE: {
            enter: function enter() {
              self.prevAngle = undefined;
              self.angle = 0;
            }
          },
          BEGIN: {},
          RECOGNIZED: {
            enter: function enter() {
              self.emit('rotatestart', self);
            },
            exit: function exit() {
              self.emit('rotateend', self);
            }
          }
        },
        init: function init() {
          this.state = IDLE;
        },
        eventEmitter: false
      };
      _this.setRecongizedStateObject(new FSM(stateConfig));
      return _this;
    }
    _createClass(Rotate, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(Rotate.prototype), "resetFromJSON", this).call(this, o);
        this.setDragThreshold(GetValue$A(o, 'threshold', 0));
        return this;
      }
    }, {
      key: "onDrag2Start",
      value: function onDrag2Start() {
        this.prevAngle = WrapDegrees(RadToDeg(this.angleBetween)); // Degrees
        this.state = BEGIN;
        if (this.dragThreshold === 0) {
          this.state = RECOGNIZED;
        }
      }
    }, {
      key: "onDrag2End",
      value: function onDrag2End() {
        this.state = IDLE;
      }
    }, {
      key: "onDrag2",
      value: function onDrag2() {
        switch (this.state) {
          case BEGIN:
            if (this.pointers[0].getDistance() >= this.dragThreshold && this.pointers[1].getDistance() >= this.dragThreshold) {
              var curAngle = WrapDegrees(RadToDeg(this.angleBetween));
              this.angle = ShortestBetween(this.prevAngle, curAngle);
              this.prevAngle = curAngle;
              this.state = RECOGNIZED;
            }
            break;
          case RECOGNIZED:
            var curAngle = WrapDegrees(RadToDeg(this.angleBetween));
            this.angle = ShortestBetween(this.prevAngle, curAngle);
            this.prevAngle = curAngle;
            this.emit('rotate', this);
            break;
        }
      }
    }, {
      key: "isRotated",
      get: function get() {
        return this.state === RECOGNIZED;
      }
    }, {
      key: "rotation",
      get: function get() {
        return DegToRad$1(this.angle);
      }
    }, {
      key: "setDragThreshold",
      value: function setDragThreshold(distance) {
        this.dragThreshold = distance;
        return this;
      }
    }]);
    return Rotate;
  }(TwoPointersTracer);
  var methods$6 = {
    spinObject: SpinObject
  };
  Object.assign(Rotate.prototype, methods$6);
  var IDLE = 'IDLE';
  var BEGIN = 'BEGIN';
  var RECOGNIZED = 'RECOGNIZED';

  var GetValue$z = Phaser.Utils.Objects.GetValue;
  var TapChild = function TapChild(config) {
    var tapConfig = GetValue$z(config, 'tap', undefined);
    if (tapConfig === false) {
      return;
    } else if (tapConfig === true) {
      tapConfig = undefined;
    }
    var childrenInteractive = this._childrenInteractive;
    this._tap = new Tap(this, tapConfig);
    this._tap.on('tap', function (tap, gameObject, lastPointer) {
      EmitChildEvent(childrenInteractive.eventEmitter, "".concat(childrenInteractive.eventNamePrefix).concat(tap.tapsCount, "tap"), childrenInteractive.targetSizers, tap.worldX, tap.worldY, lastPointer);
    }, this);
  };

  var GetValue$y = Phaser.Utils.Objects.GetValue;
  var PressChild = function PressChild(config) {
    var pressConfig = GetValue$y(config, 'press', undefined);
    if (pressConfig === false) {
      return;
    } else if (pressConfig === true) {
      pressConfig = undefined;
    }
    var childrenInteractive = this._childrenInteractive;
    this._press = new Press(this, pressConfig);
    this._press.on('pressstart', function (press, gameObject, lastPointer) {
      EmitChildEvent(childrenInteractive.eventEmitter, "".concat(childrenInteractive.eventNamePrefix, "pressstart"), childrenInteractive.targetSizers, press.worldX, press.worldY, lastPointer);
    }, this).on('pressend', function (press, gameObject, lastPointer) {
      EmitChildEvent(childrenInteractive.eventEmitter, "".concat(childrenInteractive.eventNamePrefix, "pressend"), childrenInteractive.targetSizers, press.worldX, press.worldY, lastPointer);
    }, this);
  };

  var GetValue$x = Phaser.Utils.Objects.GetValue;
  var SwipeChild = function SwipeChild(config) {
    var swipeConfig = GetValue$x(config, 'swipe', undefined);
    if (swipeConfig === false) {
      return;
    } else if (swipeConfig === true) {
      swipeConfig = undefined;
    }
    if (swipeConfig === undefined) {
      swipeConfig = {};
    }
    if (!swipeConfig.hasOwnProperty('dir')) {
      swipeConfig.dir = '4dir';
    }
    var childrenInteractive = this._childrenInteractive;
    this._swipe = new Swipe(this, swipeConfig);
    this._swipe.on('swipe', function (swipe, gameObject, lastPointer) {
      var dirName = swipe.left ? 'left' : swipe.right ? 'right' : swipe.up ? 'up' : 'down';
      EmitChildEvent(childrenInteractive.eventEmitter, "".concat(childrenInteractive.eventNamePrefix, "swipe").concat(dirName), childrenInteractive.targetSizers, swipe.worldX, swipe.worldY, lastPointer);
    }, this);
  };

  var GetValue$w = Phaser.Utils.Objects.GetValue;
  var SetChildrenInteractive = function SetChildrenInteractive(gameObject, config) {
    gameObject.setInteractive();
    if (GetValue$w(config, 'dropZone', false)) {
      gameObject.input.dropZone = true;
    }
    gameObject._childrenInteractive = {
      targetSizers: GetValue$w(config, 'targets', [gameObject]),
      eventEmitter: GetValue$w(config, 'eventEmitter', gameObject),
      eventNamePrefix: GetValue$w(config, 'inputEventPrefix', 'child.')
    };
    DownChild.call(gameObject, config);
    UpChild.call(gameObject, config);
    OverChild.call(gameObject, config);
    ClickChild.call(gameObject, config);
    TapChild.call(gameObject, config);
    PressChild.call(gameObject, config);
    SwipeChild.call(gameObject, config);
    return gameObject;
  };

  var SetChildrenInteractiveWrap = function SetChildrenInteractiveWrap(config) {
    SetChildrenInteractive(this, config);
    return this;
  };

  var BroadcastEvent = function BroadcastEvent() {
    var gameObjects = this.getAllChildren([this]);
    for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
      var gameObject = gameObjects[i];
      gameObject.emit.apply(gameObject, arguments);
    }
    return this;
  };

  var methods$5 = {
    getSizerConfig: GetSizerConfig,
    getChildPrevState: GetChildPrevState,
    pushIntoBounds: PushIntoBounds,
    drawBounds: DrawBounds,
    resolveWidth: ResolveWidth$2,
    resolveChildrenWidth: ResolveChildrenWidth$1,
    resolveHeight: ResolveHeight$2,
    postResolveSize: PostResolveSize$1,
    getChildWidth: GetChildWidth,
    getChildHeight: GetChildHeight,
    getExpandedChildWidth: GetExpandedChildWidth$2,
    getExpandedChildHeight: GetExpandedChildHeight$2,
    getChildrenWidth: GetChildrenWidth$2,
    getChildrenHeight: GetChildrenHeight$2,
    addChildrenMap: AddChildrenMap,
    addElement: AddChildrenMap,
    removeChildrenMap: RemoveChildrenMap,
    getElement: GetElement,
    getChildIndex: GetChildIndex,
    getAllChildrenSizers: GetAllChildrenSizers,
    getChildrenSizers: GetChildrenSizers$2,
    preLayout: PreLayout$2,
    layout: Layout,
    runLayout: RunLayout,
    layoutChildren: LayoutChildren$2,
    runWidthWrap: RunWidthWrap$1,
    layoutBackgrounds: LayoutBackgrounds,
    postLayout: PostLayout,
    _postLayout: _PostLayout,
    setAnchor: SetAnchor,
    isInTouching: IsInTouching,
    pointToChild: PointToChild$1,
    setDraggable: SetDraggable,
    setChildrenInteractive: SetChildrenInteractiveWrap,
    broadcastEvent: BroadcastEvent
  };
  Object.assign(methods$5, PaddingMethods, AddChildMethods$2, RemoveChildMethods$2, GetParentSizerMethods, ScaleMethods, FadeMethods, EaseMoveMethods, ShakeMethods, EaseDataMethods, ClickMethods, ClickOutsideMethods, TouchingMethods, HideMethods, ModalMethods, GetShownChildrenMethods);

  var GetValue$v = Phaser.Utils.Objects.GetValue;
  var Base = /*#__PURE__*/function (_Container) {
    _inherits(Base, _Container);
    var _super = _createSuper(Base);
    function Base(scene, x, y, minWidth, minHeight, config) {
      var _this;
      _classCallCheck(this, Base);
      _this = _super.call(this, scene, x, y, 1, 1);
      _this.isRexSizer = true;
      _this.setMinSize(minWidth, minHeight);
      _this.setName(GetValue$v(config, 'name', ''));
      _this.rexSizer = {};
      _this.space = {};
      _this.backgroundChildren = undefined;
      _this.sizerChildren = undefined; // [] or {}
      _this.childrenMap = {};
      _this.layoutedChildren = undefined;
      _this.enableLayoutWarn();
      var anchorConfig = GetValue$v(config, 'anchor', undefined);
      if (anchorConfig) {
        _this.setAnchor(anchorConfig);
      }
      _this.setInnerPadding(GetValue$v(config, 'space', 0));
      var draggable = GetValue$v(config, 'draggable', false);
      if (draggable) {
        _this.setDraggable(draggable);
      }
      _this.setSizerEventsEnable(GetValue$v(config, 'sizerEvents', false));
      _this.setDirty(true);
      if (GetValue$v(config, 'enableLayer', false)) {
        _this.enableLayer();
      }
      return _this;
    }
    _createClass(Base, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene || this.ignoreDestroy) {
          return;
        }
        if (fromScene) {
          // In this case, children will be cleared and destroy in scene level
          var sizers = this.getAllChildrenSizers([this]);
          for (var i = 0, cnt = sizers.length; i < cnt; i++) {
            sizers[i].sizerEventsEnable = false;
          }
        }
        _get(_getPrototypeOf(Base.prototype), "destroy", this).call(this, fromScene);
        Clear(this.backgroundChildren);
        Clear(this.sizerChildren);
        this.childrenMap = undefined;
        this.space = undefined;
        this.rexSizer = undefined;
        this.layoutedChildren = undefined;
      }
    }, {
      key: "setMinSize",
      value: function setMinSize(minWidth, minHeight) {
        this.setMinWidth(minWidth).setMinHeight(minHeight);
        return this;
      }
    }, {
      key: "setMinWidth",
      value: function setMinWidth(minWidth) {
        if (minWidth == null) {
          minWidth = 0;
        }
        this.minWidth = minWidth;
        return this;
      }
    }, {
      key: "setMinHeight",
      value: function setMinHeight(minHeight) {
        if (minHeight == null) {
          minHeight = 0;
        }
        this.minHeight = minHeight;
        return this;
      }
    }, {
      key: "setDirty",
      value: function setDirty(dirty) {
        if (dirty === undefined) {
          dirty = true;
        }
        this.dirty = dirty;
        return this;
      }
    }, {
      key: "setSizerEventsEnable",
      value: function setSizerEventsEnable(enable) {
        if (enable === undefined) {
          enable = true;
        }
        this.sizerEventsEnable = enable;
        return this;
      }
    }, {
      key: "enableLayoutWarn",
      value: function enableLayoutWarn(enable) {
        if (enable === undefined) {
          enable = true;
        }
        this.layoutWarnEnable = enable;
        return this;
      }
    }, {
      key: "ignoreLayout",
      get: function get() {
        // Skip hidden or !dirty sizer
        return this.rexSizer.hidden || !this.dirty;
      }
    }, {
      key: "childrenWidth",
      get: function get() {
        if (this._childrenWidth === undefined) {
          this._childrenWidth = this.getChildrenWidth();
        }
        return this._childrenWidth;
      }
    }, {
      key: "childrenHeight",
      get: function get() {
        if (this._childrenHeight === undefined) {
          this._childrenHeight = this.getChildrenHeight();
        }
        return this._childrenHeight;
      }
    }, {
      key: "left",
      get: function get() {
        return this.x - GetDisplayWidth(this) * this.originX;
      },
      set: function set(value) {
        this.x += value - this.left;
      }
    }, {
      key: "alignLeft",
      value: function alignLeft(value) {
        this.left = value;
        return this;
      }
    }, {
      key: "right",
      get: function get() {
        return this.left + GetDisplayWidth(this);
      },
      set: function set(value) {
        this.x += value - this.right;
      }
    }, {
      key: "alignRight",
      value: function alignRight(value) {
        this.right = value;
        return this;
      }
    }, {
      key: "centerX",
      get: function get() {
        return this.left + GetDisplayWidth(this) / 2;
      },
      set: function set(value) {
        this.x += value - this.centerX;
      }
    }, {
      key: "alignCenterX",
      value: function alignCenterX(value) {
        this.centerX = value;
        return this;
      }
    }, {
      key: "top",
      get: function get() {
        return this.y - GetDisplayHeight(this) * this.originY;
      },
      set: function set(value) {
        this.y += value - this.top;
      }
    }, {
      key: "alignTop",
      value: function alignTop(value) {
        this.top = value;
        return this;
      }
    }, {
      key: "bottom",
      get: function get() {
        return this.top + GetDisplayHeight(this);
      },
      set: function set(value) {
        this.y += value - this.bottom;
      }
    }, {
      key: "alignBottom",
      value: function alignBottom(value) {
        this.bottom = value;
        return this;
      }
    }, {
      key: "centerY",
      get: function get() {
        return this.top + GetDisplayHeight(this) / 2;
      },
      set: function set(value) {
        this.y += value - this.centerY;
      }
    }, {
      key: "alignCenterY",
      value: function alignCenterY(value) {
        this.centerY = value;
        return this;
      }
    }, {
      key: "innerLeft",
      get: function get() {
        return this.left + this.space.left * this.scaleX;
      }
    }, {
      key: "innerRight",
      get: function get() {
        return this.right - this.space.right * this.scaleX;
      }
    }, {
      key: "innerTop",
      get: function get() {
        return this.top + this.space.top * this.scaleY;
      }
    }, {
      key: "innerBottom",
      get: function get() {
        return this.bottom - this.space.bottom * this.scaleY;
      }
    }, {
      key: "innerWidth",
      get: function get() {
        return (this.width - this.space.left - this.space.right) * this.scaleX;
      }
    }, {
      key: "innerHeight",
      get: function get() {
        return (this.height - this.space.top - this.space.bottom) * this.scaleY;
      }
    }, {
      key: "minInnerWidth",
      get: function get() {
        var result = (this.minWidth - this.space.left - this.space.right) * this.scaleX;
        return Math.max(result, 0);
      }
    }, {
      key: "minInnerHeight",
      get: function get() {
        var result = (this.minHeight - this.space.top - this.space.bottom) * this.scaleY;
        return Math.max(result, 0);
      }
    }]);
    return Base;
  }(ContainerLite);
  Object.assign(Base.prototype, methods$5);

  var GetChildrenWidth$1 = function GetChildrenWidth(minimumMode) {
    if (this.rexSizer.hidden) {
      return 0;
    }
    if (minimumMode === undefined) {
      minimumMode = true;
    }
    var result = 0;
    var children = this.sizerChildren;
    var child, padding, childWidth;
    if (this.orientation === 0) {
      // x
      // Get summation of minimum width
      var itemSpace = this.space.item;
      var isFirstChild = true;
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];
        if (child.rexSizer.hidden) {
          continue;
        }
        if (child.rexSizer.proportion === 0 || minimumMode) {
          childWidth = this.getChildWidth(child);
        } else {
          childWidth = 0;
        }
        padding = child.rexSizer.padding;
        childWidth += padding.left + padding.right;
        if (isFirstChild) {
          isFirstChild = false;
        } else {
          childWidth += itemSpace;
        }
        result += childWidth;
      }
    } else {
      // Get maximun width
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];
        if (!child.hasOwnProperty('rexSizer')) {
          continue;
        }
        if (child.rexSizer.hidden) {
          continue;
        }
        padding = child.rexSizer.padding;
        childWidth = this.getChildWidth(child) + padding.left + padding.right;
        result = Math.max(childWidth, result);
      }
    }
    return result + this.space.left + this.space.right;
  };

  var GetChildrenHeight$1 = function GetChildrenHeight(minimumMode) {
    if (this.rexSizer.hidden) {
      return 0;
    }
    if (minimumMode === undefined) {
      minimumMode = true;
    }
    var result = 0;
    var children = this.sizerChildren;
    var child, padding, childHeight;
    if (this.orientation === 0) {
      // x
      // Get maximun height
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];
        if (child.rexSizer.hidden) {
          continue;
        }
        padding = child.rexSizer.padding;
        childHeight = this.getChildHeight(child) + padding.top + padding.bottom;
        result = Math.max(childHeight, result);
      }
    } else {
      // Get summation of minimum height
      var itemSpace = this.space.item;
      var isFirstChild = true;
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];
        if (!child.hasOwnProperty('rexSizer')) {
          continue;
        }
        if (child.rexSizer.hidden) {
          continue;
        }
        if (child.rexSizer.proportion === 0 || minimumMode) {
          childHeight = this.getChildHeight(child);
        } else {
          childHeight = 0;
        }
        padding = child.rexSizer.padding;
        childHeight += padding.top + padding.bottom;
        if (isFirstChild) {
          isFirstChild = false;
        } else {
          childHeight += itemSpace;
        }
        result += childHeight;
      }
    }
    return result + this.space.top + this.space.bottom;
  };

  var GetExpandedChildWidth$1 = function GetExpandedChildWidth(child, parentWidth) {
    if (parentWidth === undefined) {
      parentWidth = this.width;
    }
    var childWidth;
    var childConfig = child.rexSizer;
    var padding = childConfig.padding;
    if (this.orientation === 0) {
      // x
      if (childConfig.proportion > 0 && this.proportionLength > 0) {
        childWidth = childConfig.proportion * this.proportionLength;
      }
    } else {
      // y
      if (childConfig.expand) {
        var innerWidth = parentWidth - this.space.left - this.space.right;
        childWidth = innerWidth - padding.left - padding.right;
      }
    }
    return childWidth;
  };

  var GetExpandedChildHeight$1 = function GetExpandedChildHeight(child, parentHeight) {
    if (parentHeight === undefined) {
      parentHeight = this.height;
    }
    var childHeight;
    var childConfig = child.rexSizer;
    var padding = childConfig.padding;
    if (this.orientation === 0) {
      // x
      if (childConfig.expand) {
        var innerHeight = parentHeight - this.space.top - this.space.bottom;
        childHeight = innerHeight - padding.top - padding.bottom;
      }
    } else {
      // y
      if (childConfig.proportion > 0 && this.proportionLength > 0) {
        childHeight = childConfig.proportion * this.proportionLength;
      }
    }
    return childHeight;
  };

  var GetChildrenSizers$1 = function GetChildrenSizers(out) {
    if (out === undefined) {
      out = [];
    }
    var children = this.sizerChildren,
      child;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];
      if (child.isRexSizer) {
        out.push(child);
      }
    }
    return out;
  };

  var PreLayout$1 = function PreLayout() {
    // Resize child to 1x1 for ratio-fit 
    this.hasRatioFitChild = false;
    var children = this.sizerChildren;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var child = children[i];
      if (child.rexSizer.hidden) {
        continue;
      }
      if (!child.rexSizer.fitRatio) {
        continue;
      }
      ResizeGameObject(child, 1, 1);
      this.hasRatioFitChild = true;
    }
    this._childrenProportion = undefined;
    this.proportionLength = undefined;
    PreLayout$2.call(this);
    return this;
  };

  var PostResolveSize = function PostResolveSize(width, height) {
    if (this.hasRatioFitChild) {
      // Resize child for ratio-fit 
      var innerHeight;
      if (this.orientation === 0) {
        innerHeight = height - this.getInnerPadding('top') - this.getInnerPadding('bottom');
      } else {
        width - this.getInnerPadding('left') - this.getInnerPadding('right');
      }
      var children = this.sizerChildren,
        childWidth,
        childHeight;
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        var child = children[i];
        if (child.rexSizer.hidden) {
          continue;
        }
        var fitRatio = child.rexSizer.fitRatio;
        if (!fitRatio) {
          continue;
        }
        if (this.orientation === 0) {
          childHeight = innerHeight - this.getChildOuterPadding(child, 'top') - this.getChildOuterPadding(child, 'bottom');
          childWidth = childHeight * fitRatio;
        } else {
          childWidth = innerHeight - this.getChildOuterPadding(child, 'top') - this.getChildOuterPadding(child, 'bottom');
          childHeight = childWidth / fitRatio;
        }
        ResizeGameObject(child, childWidth, childHeight);
        if (child.isRexSizer) {
          child.setMinSize(childWidth, childHeight);
        }
      }
      this.proportionLength = undefined;
      this._childrenWidth = undefined;
      this.resolveWidth(width, true);
    }
  };

  var CheckSize = function CheckSize(child, parent) {
    if (child.width < child.childrenWidth) {
      // Warning
      console.warn("Layout width error: Parent=".concat(parent.constructor.name, ", Child=").concat(child.constructor.name));
    }
    if (child.height < child.childrenHeight) {
      // Warning
      console.warn("Layout height error: Parent=".concat(parent.constructor.name, ", Child=").concat(child.constructor.name));
    }
  };

  var Wrap = Phaser.Math.Wrap;
  var LayoutChildren$1 = function LayoutChildren() {
    var children = this.sizerChildren;
    var child, childConfig, padding;
    var startX = this.innerLeft,
      startY = this.innerTop;
    var innerWidth = this.innerWidth;
    var innerHeight = this.innerHeight;
    var itemX = startX,
      itemY = startY;
    var x, y, width, height; // Align zone
    var childWidth, childHeight;
    var childIndex,
      startChildIndex = this.startChildIndex;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      if (startChildIndex === 0) {
        childIndex = i;
      } else {
        childIndex = Wrap(i + startChildIndex, 0, cnt);
      }
      if (this.rtl) {
        childIndex = cnt - childIndex - 1;
      }
      child = children[childIndex];
      if (child.rexSizer.hidden) {
        continue;
      }
      childConfig = child.rexSizer;
      padding = childConfig.padding;
      PreLayoutChild.call(this, child);

      // Set size
      if (child.isRexSpace) {
        childWidth = 0;
        childHeight = 0;
      } else {
        childWidth = this.getExpandedChildWidth(child);
        childHeight = this.getExpandedChildHeight(child);
      }
      if (child.isRexSizer) {
        child.runLayout(this, childWidth, childHeight);
        CheckSize(child, this);
      } else {
        ResizeGameObject(child, childWidth, childHeight);
      }
      if (childWidth === undefined) {
        childWidth = GetDisplayWidth(child);
      }
      if (childHeight === undefined) {
        childHeight = GetDisplayHeight(child);
      }

      // Set position
      if (this.orientation === 0) {
        // x
        x = itemX + padding.left;
        if (childConfig.proportion === 0 || this.proportionLength === 0) {
          width = childWidth;
        } else {
          width = childConfig.proportion * this.proportionLength;
        }
        y = itemY + padding.top;
        height = innerHeight - padding.top - padding.bottom;
      } else {
        // y
        x = itemX + padding.left;
        width = innerWidth - padding.left - padding.right;
        y = itemY + padding.top;
        if (childConfig.proportion === 0 || this.proportionLength === 0) {
          height = childHeight;
        } else {
          height = childConfig.proportion * this.proportionLength;
        }
      }
      LayoutChild.call(this, child, x, y, width, height, childConfig.align);
      if (this.orientation === 0) {
        // x
        itemX += width + padding.left + padding.right + this.space.item;
      } else {
        // y
        itemY += height + padding.top + padding.bottom + this.space.item;
      }
    }
  };

  var ResolveWidth$1 = function ResolveWidth(width) {
    var width = ResolveWidth$2.call(this, width);

    // Calculate proportionLength
    if (this.proportionLength === undefined && this.orientation === 0) {
      var remainder = width - this.childrenWidth;
      if (remainder > 0) {
        remainder = width - this.getChildrenWidth(false);
        this.proportionLength = remainder / this.childrenProportion;
      } else {
        this.proportionLength = 0;
      }
    }
    return width;
  };

  var ResolveHeight$1 = function ResolveHeight(height) {
    var height = ResolveHeight$2.call(this, height);

    // Get proportionLength
    if (this.proportionLength === undefined && this.orientation === 1) {
      var remainder = height - this.childrenHeight;
      if (remainder > 0) {
        remainder = height - this.getChildrenHeight(false);
        this.proportionLength = remainder / this.childrenProportion;
      } else {
        this.proportionLength = 0;
      }
    }
    return height;
  };

  var Zone = Phaser.GameObjects.Zone;
  var Space = /*#__PURE__*/function (_Zone) {
    _inherits(Space, _Zone);
    var _super = _createSuper(Space);
    function Space(scene) {
      var _this;
      _classCallCheck(this, Space);
      _this = _super.call(this, scene, 0, 0, 1, 1);
      // Don't add Zone into scene
      _this.isRexSpace = true;
      return _this;
    }
    return _createClass(Space);
  }(Zone);

  var GetNearestChildIndex = function GetNearestChildIndex(x, y) {
    var children = this.sizerChildren;
    if (children.length === 0) {
      return -1;
    }
    var nearestIndex = -1,
      minDistance = Infinity;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var child = children[i];
      var distance;
      if (this.orientation === 0) {
        // x
        distance = Math.abs(child.left - x);
      } else {
        distance = Math.abs(child.top - y);
      }
      if (minDistance > distance) {
        minDistance = distance;
        nearestIndex = i;
      }
    }

    // Check right bound of last child
    var child = children[children.length - 1];
    var distance;
    if (this.orientation === 0) {
      // x
      distance = Math.abs(child.right - x);
    } else {
      distance = Math.abs(child.bottom - y);
    }
    if (minDistance > distance) {
      minDistance = distance;
      nearestIndex = i + 1;
    }
    return nearestIndex;
  };

  var IsPlainObject$8 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$u = Phaser.Utils.Objects.GetValue;
  var ALIGN_CENTER$1 = Phaser.Display.Align.CENTER;
  var PROPORTIONMODE = {
    min: 0,
    full: -1
  };
  var Add$2 = function Add(gameObject, proportion, align, paddingConfig, expand, childKey, index, minWidth, minHeight, fitRatio) {
    AddChild$1.call(this, gameObject);
    var isRexSpace = gameObject.isRexSpace;
    var proportionType = _typeof(proportion);
    if (proportion === null) {
      return this;
    } else if (proportionType === 'number') ; else if (proportionType === 'string') {
      proportion = PROPORTIONMODE[proportion];
    } else if (IsPlainObject$8(proportion)) {
      var config = proportion;
      proportion = GetValue$u(config, 'proportion', undefined);
      align = GetValue$u(config, 'align', ALIGN_CENTER$1);
      paddingConfig = GetValue$u(config, 'padding', 0);
      expand = GetValue$u(config, 'expand', false);
      childKey = GetValue$u(config, 'key', undefined);
      index = GetValue$u(config, 'index', undefined);
      if (!gameObject.isRexSizer) {
        minWidth = GetValue$u(config, 'minWidth', undefined);
        minHeight = GetValue$u(config, 'minHeight', undefined);
      }
      fitRatio = GetValue$u(config, 'fitRatio', 0); // width/height
    }

    if (typeof align === 'string') {
      align = AlignConst[align];
    }
    if (proportion === undefined) {
      proportion = isRexSpace ? 1 : 0;
    }
    if (align === undefined) {
      align = ALIGN_CENTER$1;
    }
    if (paddingConfig === undefined) {
      paddingConfig = 0;
    }
    if (expand === undefined) {
      expand = false;
    }
    if (minWidth === undefined) {
      if (isRexSpace) {
        minWidth = 0;
      } else if (!gameObject.isRexSizer) {
        minWidth = gameObject._minWidth;
      }
    }
    if (minHeight === undefined) {
      if (isRexSpace) {
        minHeight = 0;
      } else if (!gameObject.isRexSizer) {
        minHeight = gameObject._minHeight;
      }
    }
    if (fitRatio === undefined) {
      fitRatio = 0;
    }
    var config = this.getSizerConfig(gameObject);
    config.proportion = proportion;
    config.align = align;
    config.padding = GetBoundsConfig(paddingConfig);
    config.expand = expand;
    config.fitRatio = proportion === 0 ? fitRatio : 0;
    if (index === undefined || index >= this.sizerChildren.length) {
      this.sizerChildren.push(gameObject);
    } else {
      this.sizerChildren.splice(index, 0, gameObject);
    }
    if (!gameObject.isRexSizer) {
      // Expand normal game object
      if (proportion > 0) {
        if (this.orientation === 0) {
          // x
          // minWidth is still undefined, uses current display width
          gameObject.minWidth = minWidth === undefined ? GetDisplayWidth(gameObject) : minWidth;
        } else {
          // minHeight is still undefined, uses current display height
          gameObject.minHeight = minHeight === undefined ? GetDisplayHeight(gameObject) : minHeight;
        }
      }
      if (expand) {
        if (this.orientation === 0) {
          // x
          // Might have minHeight value, or still undefined
          gameObject.minHeight = minHeight;
        } else {
          // Might have minWidth value, or still undefined
          gameObject.minWidth = minWidth;
        }
      }
    }
    if (childKey !== undefined) {
      this.addChildrenMap(childKey, gameObject);
    }
    return this;
  };
  var AddChildMethods$1 = {
    add: Add$2,
    // sizer.add could be override
    addSpace: function addSpace(proportion) {
      this.insertSpace(undefined, proportion);
      return this;
    },
    insertSpace: function insertSpace(index, proportion) {
      if (proportion === undefined) {
        proportion = 1;
      }
      Add$2.call(this, new Space(this.scene), {
        proportion: proportion,
        minWidth: 0,
        minHeight: 0,
        index: index
      });
      // No problem if sizer.add is override
      return this;
    },
    insert: function insert(index, gameObject, proportion, align, paddingConfig, expand, childKey, minSize) {
      if (IsPlainObject$8(proportion)) {
        proportion.index = index;
      }
      Add$2.call(this, gameObject, proportion, align, paddingConfig, expand, childKey, index, minSize);
      // No problem if sizer.add is override
      return this;
    },
    insertAtPosition: function insertAtPosition(x, y, gameObject, proportion, align, paddingConfig, expand, childKey, minSize) {
      var index = GetNearestChildIndex.call(this, x, y);
      if (index === -1) {
        index = undefined;
      }
      this.insert(index, gameObject, proportion, align, paddingConfig, expand, childKey, minSize);
      return this;
    }
  };

  var ContainerClear = ContainerLite.prototype.clear;
  var ClearChildren = function ClearChildren(destroyChild) {
    if (this.backgroundChildren) {
      this.backgroundChildren.length = 0;
    }
    var fireRemoveEvent = !destroyChild && this.sizerEventsEnable;
    var children;
    if (fireRemoveEvent) {
      children = this.getChildren([]);
    }
    ContainerClear.call(this, destroyChild);
    if (fireRemoveEvent) {
      var gameObject;
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        gameObject = children[i];
        gameObject.emit('sizer.remove', gameObject, this);
        this.emit('remove', gameObject, this);
      }
    }
    return this;
  };

  var RemoveItem = Phaser.Utils.Array.Remove;
  var RemoveChildMethods$1 = {
    remove: function remove(gameObject, destroyChild) {
      if (this.getParentSizer(gameObject) !== this) {
        return this;
      }
      RemoveItem(this.sizerChildren, gameObject);
      RemoveChild.call(this, gameObject, destroyChild);
      return this;
    },
    removeAll: function removeAll(destroyChild) {
      for (var i = this.sizerChildren.length - 1; i >= 0; i--) {
        this.remove(this.sizerChildren[i], destroyChild);
      }
      return this;
    },
    clear: function clear(destroyChild) {
      this.sizerChildren.length = 0;
      ClearChildren.call(this, destroyChild);
      return this;
    }
  };

  var AlignMethods = {
    getChildAlign: function getChildAlign(gameObject) {
      return this.getSizerConfig(gameObject).align;
    },
    setChildAlign: function setChildAlign(gameObject, align) {
      if (typeof align === 'string') {
        align = AlignConst[align];
      }
      this.getSizerConfig(gameObject).align = align;
      return this;
    }
  };

  var ProportionMethods = {
    getChildProportion: function getChildProportion(gameObject) {
      return this.getSizerConfig(gameObject).proportion;
    },
    setChildProportion: function setChildProportion(gameObject, proportion) {
      this.getSizerConfig(gameObject).proportion = proportion;
      return this;
    }
  };

  var ExpandMethods = {
    getChildExpand: function getChildExpand(gameObject) {
      return this.getSizerConfig(gameObject).expand;
    },
    setChildExpand: function setChildExpand(gameObject, expand) {
      this.getSizerConfig(gameObject).expand = expand;
      return this;
    }
  };

  var methods$4 = {
    getChildrenWidth: GetChildrenWidth$1,
    getChildrenHeight: GetChildrenHeight$1,
    getExpandedChildWidth: GetExpandedChildWidth$1,
    getExpandedChildHeight: GetExpandedChildHeight$1,
    getChildrenSizers: GetChildrenSizers$1,
    preLayout: PreLayout$1,
    postResolveSize: PostResolveSize,
    layoutChildren: LayoutChildren$1,
    resolveWidth: ResolveWidth$1,
    resolveHeight: ResolveHeight$1
  };
  Object.assign(methods$4, AddChildMethods$1, RemoveChildMethods$1, AlignMethods, ProportionMethods, ExpandMethods);

  var GetChildrenProportion = function GetChildrenProportion() {
    var result = 0;
    var children = this.sizerChildren;
    var child, proportion;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];
      if (child.rexSizer.hidden) {
        continue;
      }
      proportion = child.rexSizer.proportion;
      if (proportion > 0) {
        result += proportion;
      }
    }
    return result;
  };

  var OrientationMode = {
    x: 0,
    h: 0,
    horizontal: 0,
    'left-to-right': 0,
    y: 1,
    v: 1,
    vertical: 1,
    'top-to-bottom': 1
  };
  var GetOrientationMode = function GetOrientationMode(orientation) {
    if (typeof orientation === 'string') {
      orientation = OrientationMode[orientation];
    }
    return orientation;
  };

  var IsPlainObject$7 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$t = Phaser.Utils.Objects.GetValue;
  var Sizer = /*#__PURE__*/function (_BaseSizer) {
    _inherits(Sizer, _BaseSizer);
    var _super = _createSuper(Sizer);
    function Sizer(scene, x, y, minWidth, minHeight, orientation, config) {
      var _this;
      _classCallCheck(this, Sizer);
      if (IsPlainObject$7(x)) {
        config = x;
        x = GetValue$t(config, 'x', 0);
        y = GetValue$t(config, 'y', 0);
        minWidth = GetValue$t(config, 'width', undefined);
        minHeight = GetValue$t(config, 'height', undefined);
        orientation = GetValue$t(config, 'orientation', 0);
      } else if (IsPlainObject$7(minWidth)) {
        config = minWidth;
        minWidth = GetValue$t(config, 'width', undefined);
        minHeight = GetValue$t(config, 'height', undefined);
        orientation = GetValue$t(config, 'orientation', 0);
      } else if (IsPlainObject$7(orientation)) {
        config = orientation;
        orientation = GetValue$t(config, 'orientation', 0);
      }
      if (orientation === undefined) {
        orientation = 0;
      }
      _this = _super.call(this, scene, x, y, minWidth, minHeight, config);
      _this.type = 'rexSizer';
      _this.sizerChildren = [];
      _this.setOrientation(orientation);
      _this.setItemSpacing(GetValue$t(config, 'space.item', 0));
      _this.setStartChildIndex(GetValue$t(config, 'startChildIndex', 0));
      _this.setRTL(GetValue$t(config, 'rtl', false));
      _this.addChildrenMap('items', _this.sizerChildren);
      return _this;
    }
    _createClass(Sizer, [{
      key: "setOrientation",
      value: function setOrientation(orientation) {
        this.orientation = GetOrientationMode(orientation);
        return this;
      }
    }, {
      key: "setItemSpacing",
      value: function setItemSpacing(space) {
        this.space.item = space;
        return this;
      }
    }, {
      key: "setStartChildIndex",
      value: function setStartChildIndex(index) {
        this.startChildIndex = index;
        return this;
      }
    }, {
      key: "setRTL",
      value: function setRTL(enable) {
        if (enable === undefined) {
          enable = true;
        }
        this.rtl = enable;
        return this;
      }
    }, {
      key: "childrenProportion",
      get: function get() {
        if (this._childrenProportion === undefined) {
          this._childrenProportion = GetChildrenProportion.call(this);
        }
        return this._childrenProportion;
      }
    }]);
    return Sizer;
  }(Base);
  Object.assign(Sizer.prototype, methods$4);

  var SCROLLMODE$1 = {
    v: 0,
    vertical: 0,
    y: 0,
    h: 1,
    horizontal: 1,
    x: 1,
    xy: 2,
    vh: 2
  };

  var GetScrollMode = function GetScrollMode(config, key) {
    if (key === undefined) {
      key = 'scrollMode';
    }
    if (!config.hasOwnProperty(key)) {
      config[key] = GetDefaultScrollMode(config);
    }
    var scrollMode = config[key];
    if (typeof scrollMode === 'string') {
      scrollMode = SCROLLMODE$1[scrollMode];
    }
    return scrollMode;
  };
  var GetDefaultScrollMode = function GetDefaultScrollMode(config) {
    var hasSliderY = !!config.sliderY || !!config.scrollerY;
    var hasSliderX = !!config.sliderX || !!config.scrollerX;
    var scrollMode;
    if (hasSliderY && hasSliderX) {
      scrollMode = 2;
    } else if (hasSliderY) {
      scrollMode = 0;
    } else if (hasSliderX) {
      scrollMode = 1;
    } else {
      scrollMode = 0;
    }
    return scrollMode;
  };

  var Sum = function Sum() {
    return Array.prototype.reduce.call(arguments, Add$1, 0);
  };
  var Add$1 = function Add(a, b) {
    return a + b;
  };

  var GetChildrenWidth = function GetChildrenWidth(minimumMode) {
    if (this.rexSizer.hidden) {
      return 0;
    }
    if (minimumMode === undefined) {
      minimumMode = true;
    }
    var result = 0,
      columnWidth;
    var children = this.sizerChildren;
    var child, padding, childWidth, proportion;
    for (var i = 0; i < this.columnCount; i++) {
      proportion = this.columnProportions[i];
      columnWidth = 0;
      if (proportion === 0 || minimumMode) {
        for (var j = 0; j < this.rowCount; j++) {
          child = children[j * this.columnCount + i];
          if (!child) {
            continue;
          }
          if (child.rexSizer.hidden) {
            continue;
          }
          padding = child.rexSizer.padding;
          childWidth = this.getChildWidth(child) + padding.left + padding.right;
          columnWidth = Math.max(columnWidth, childWidth);
        }
        result += columnWidth;
      }
      // else,(proportion > 0) : columnWidth is 0
      this.columnWidth[i] = columnWidth;
    }
    var space = this.space;
    var indentLeft = Math.max(space.indentLeftOdd, space.indentLeftEven);
    return result + Sum.apply(void 0, [space.left, indentLeft].concat(_toConsumableArray(space.column), [space.right]));
  };

  var GetChildrenHeight = function GetChildrenHeight(minimumMode) {
    if (this.rexSizer.hidden) {
      return 0;
    }
    if (minimumMode === undefined) {
      minimumMode = true;
    }
    var result = 0,
      rowHeight;
    var children = this.sizerChildren;
    var child, padding, childHeight, proportion;
    for (var i = 0; i < this.rowCount; i++) {
      proportion = this.rowProportions[i];
      rowHeight = 0;
      if (proportion === 0 || minimumMode) {
        for (var j = 0; j < this.columnCount; j++) {
          child = children[i * this.columnCount + j];
          if (!child) {
            continue;
          }
          if (child.rexSizer.hidden) {
            continue;
          }
          childHeight = child.isRexSizer ? Math.max(child.minHeight, child.childrenHeight) : child.hasOwnProperty('minHeight') ? child.minHeight : GetDisplayHeight(child);
          padding = child.rexSizer.padding;
          childHeight += padding.top + padding.bottom;
          rowHeight = Math.max(rowHeight, childHeight);
        }
        result += rowHeight;
      }
      // else,(proportion > 0) : rowHeight is 0
      this.rowHeight[i] = rowHeight;
    }
    var space = this.space;
    var indentTop = Math.max(space.indentTopOdd, space.indentTopEven);
    return result + Sum.apply(void 0, [space.top, indentTop].concat(_toConsumableArray(space.row), [space.bottom]));
  };

  var GetExpandedChildWidth = function GetExpandedChildWidth(child, colWidth) {
    var childWidth;
    var childConfig = child.rexSizer;
    if (childConfig.expandWidth) {
      var padding = childConfig.padding;
      childWidth = colWidth - padding.left - padding.right;
    }
    return childWidth;
  };

  var GetExpandedChildHeight = function GetExpandedChildHeight(child, rowHeight) {
    var childHeight;
    var childConfig = child.rexSizer;
    if (childConfig.expandHeight) {
      var padding = childConfig.padding;
      childHeight = rowHeight - padding.top - padding.bottom;
    }
    return childHeight;
  };

  var GetChildrenSizers = function GetChildrenSizers(out) {
    if (out === undefined) {
      out = [];
    }
    var children = this.sizerChildren,
      child;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];
      if (child && child.isRexSizer) {
        out.push(child);
      }
    }
    return out;
  };

  var PreLayout = function PreLayout() {
    this._totalColumnProportions = undefined;
    this._totalRowProportions = undefined;
    this.proportionWidthLength = undefined;
    this.proportionHeightLength = undefined;
    PreLayout$2.call(this);
    return this;
  };

  var LayoutChildren = function LayoutChildren() {
    var child, childConfig, padding;
    var startX = this.innerLeft,
      startY = this.innerTop;
    var itemX,
      itemY = startY;
    var x, y, width, height; // Align zone
    var childWidth, childHeight;
    // Layout grid children
    var columnSpace = this.space.column,
      rowSpace = this.space.row,
      indentLeftOdd = this.space.indentLeftOdd,
      indentLeftEven = this.space.indentLeftEven,
      indentTopOdd = this.space.indentTopOdd,
      indentTopEven = this.space.indentTopEven;
    var colWidth, rowHeight;
    var indentLeft, indentTop;
    for (var rowIndex = 0; rowIndex < this.rowCount; rowIndex++) {
      rowHeight = this.getRowHeight(rowIndex);
      indentLeft = rowIndex % 2 ? indentLeftEven : indentLeftOdd;
      itemX = startX + indentLeft;
      for (var columnIndex = 0; columnIndex < this.columnCount; columnIndex++) {
        colWidth = this.getColumnWidth(columnIndex);
        child = this.getChildAt(columnIndex, rowIndex);
        if (!child || child.rexSizer.hidden) {
          itemX += colWidth + columnSpace[columnIndex];
          continue;
        }
        PreLayoutChild.call(this, child);
        childWidth = this.getExpandedChildWidth(child, colWidth);
        childHeight = this.getExpandedChildHeight(child, rowHeight);
        if (child.isRexSizer) {
          child.runLayout(this, childWidth, childHeight);
          CheckSize(child, this);
        } else {
          ResizeGameObject(child, childWidth, childHeight);
        }
        childConfig = child.rexSizer;
        padding = childConfig.padding;
        x = itemX + padding.left;
        width = colWidth - padding.left - padding.right;
        indentTop = columnIndex % 2 ? indentTopEven : indentTopOdd;
        y = itemY + indentTop + padding.top;
        height = rowHeight - padding.top - padding.bottom;
        LayoutChild.call(this, child, x, y, width, height, childConfig.align);
        itemX += colWidth + columnSpace[columnIndex];
      }
      itemY += rowHeight + rowSpace[rowIndex];
    }
  };

  var ResolveWidth = function ResolveWidth(width) {
    var width = ResolveWidth$2.call(this, width);

    // Get proportionLength
    if (this.proportionWidthLength === undefined) {
      var totalColumnProportions = this.totalColumnProportions;
      if (totalColumnProportions > 0) {
        var remainder = width - this.getChildrenWidth(false);
        if (remainder >= 0) {
          this.proportionWidthLength = remainder / totalColumnProportions;
        }
      } else {
        this.proportionWidthLength = 0;
      }
    }
    return width;
  };

  var ResolveHeight = function ResolveHeight(height) {
    var height = ResolveHeight$2.call(this, height);

    // Get proportionLength    
    if (this.proportionHeightLength === undefined) {
      var totalRowProportions = this.totalRowProportions;
      if (totalRowProportions > 0) {
        var remainder = height - this.getChildrenHeight(false);
        if (remainder >= 0) {
          this.proportionHeightLength = remainder / totalRowProportions;
        }
      } else {
        this.proportionHeightLength = 0;
      }
    }
    return height;
  };

  var ResolveChildrenWidth = function ResolveChildrenWidth(parentWidth) {
    // Resolve width of sizer children
    var child, childWidth;
    var colWidth;
    for (var i in this.sizerChildren) {
      child = this.sizerChildren[i];
      if (child && child.isRexSizer && !child.ignoreLayout) {
        colWidth = this.getColumnWidth(parseInt(i) % this.columnCount);
        childWidth = this.getExpandedChildWidth(child, colWidth);
        childWidth = child.resolveWidth(childWidth);
        child.resolveChildrenWidth(childWidth);
      }
    }
  };

  // Default method
  var RunWidthWrap = function RunWidthWrap(width) {
    var child, childWidth;
    var colWidth;
    for (var i in this.sizerChildren) {
      child = this.sizerChildren[i];
      if (!child || child.isRexSizer && child.ignoreLayout || !child.runWidthWrap) {
        continue;
      }
      colWidth = this.getColumnWidth(parseInt(i) % this.columnCount);
      childWidth = this.getExpandedChildWidth(child, colWidth);
      if (child.isRexSizer) {
        childWidth = child.resolveWidth(childWidth);
      }
      child.runWidthWrap(childWidth);
    }
    return this;
  };

  var IsPlainObject$6 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$s = Phaser.Utils.Objects.GetValue;
  var ALIGN_CENTER = Phaser.Display.Align.CENTER;
  var GetEmptyCellIndex = function GetEmptyCellIndex(columnIndex, rowIndex, cells, columnCount, rowCount) {
    if (typeof columnIndex === 'number' || typeof rowIndex === 'number') {
      if (columnIndex === undefined) {
        var idx;
        for (var i = 0; i < columnCount; i++) {
          idx = rowIndex * columnCount + i;
          if (!cells[idx]) {
            return idx;
          }
        }
      } else if (rowIndex === undefined) {
        var idx;
        for (var i = 0; i < rowCount; i++) {
          idx = i * columnCount + columnIndex;
          if (!cells[idx]) {
            return idx;
          }
        }
      } else {
        var idx = rowIndex * columnCount + columnIndex;
        if (!cells[idx]) {
          return idx;
        }
      }
    } else if (rowIndex === true) {
      var idx;
      for (var i = 0; i < columnCount; i++) {
        for (var j = 0; j < rowCount; j++) {
          idx = j * columnCount + i;
          if (!cells[idx]) {
            return idx;
          }
        }
      }
    } else {
      for (var i = 0, cnt = cells.length; i < cnt; i++) {
        if (!cells[i]) {
          return i;
        }
      }
    }
    return null;
  };
  var Add = function Add(gameObject, columnIndex, rowIndex, align, paddingConfig, expand, childKey) {
    AddChild$1.call(this, gameObject);
    if (IsPlainObject$6(columnIndex)) {
      var config = columnIndex;
      columnIndex = GetValue$s(config, 'column', undefined);
      rowIndex = GetValue$s(config, 'row', undefined);
      align = GetValue$s(config, 'align', ALIGN_CENTER);
      paddingConfig = GetValue$s(config, 'padding', 0);
      expand = GetValue$s(config, 'expand', false);
      childKey = GetValue$s(config, 'key', undefined);
    }

    // Get insert index
    var itemIndex = GetEmptyCellIndex(columnIndex, rowIndex, this.sizerChildren, this.columnCount, this.rowCount);
    if (itemIndex === null) {
      // Specific index mode
      if (typeof columnIndex === 'number' && typeof rowIndex === 'number') {
        return this;
      }
      if (rowIndex === true || typeof rowIndex === 'number') {
        this.addEmptyColumn();
      } else {
        this.addEmptyRow();
      }

      // Get insert index again
      itemIndex = GetEmptyCellIndex(columnIndex, rowIndex, this.sizerChildren, this.columnCount, this.rowCount);
    }
    if (typeof align === 'string') {
      align = AlignConst[align];
    }
    if (align === undefined) {
      align = ALIGN_CENTER;
    }
    if (paddingConfig === undefined) {
      paddingConfig = 0;
    }
    if (expand === undefined) {
      expand = true;
    }
    var config = this.getSizerConfig(gameObject);
    config.align = align;
    config.padding = GetBoundsConfig(paddingConfig);
    if (IsPlainObject$6(expand)) {
      config.expandWidth = GetValue$s(expand, 'width', false);
      config.expandHeight = GetValue$s(expand, 'height', false);
    } else {
      config.expandWidth = expand;
      config.expandHeight = expand;
    }
    this.sizerChildren[itemIndex] = gameObject;
    if (childKey !== undefined) {
      this.addChildrenMap(childKey, gameObject);
    }
    return this;
  };
  var AddChildMethods = {
    add: Add
  };

  var Fill = function Fill(arr, value, startIdx, endIdx) {
    if (startIdx === undefined) {
      startIdx = 0;
    }
    if (endIdx === undefined) {
      endIdx = arr.length - 1;
    }
    for (var i = startIdx; i <= endIdx; i++) {
      arr[i] = value;
    }
    return arr;
  };

  var RemoveChildMethods = {
    remove: function remove(gameObject, destroyChild) {
      if (this.getParentSizer(gameObject) !== this) {
        return this;
      }
      var idx = this.sizerChildren.indexOf(gameObject);
      if (idx !== -1) {
        this.sizerChildren[idx] = null;
      }
      RemoveChild.call(this, gameObject, destroyChild);
      return this;
    },
    removeAt: function removeAt(columnIndex, rowIndex, destroyChild) {
      var child = this.getChildAt(columnIndex, rowIndex);
      if (child) {
        this.remove(child, destroyChild);
      }
      return this;
    },
    removeAll: function removeAll(destroyChild) {
      for (var i = this.sizerChildren.length - 1; i >= 0; i--) {
        var child = this.sizerChildren[i];
        if (!child) {
          continue;
        }
        this.remove(child, destroyChild);
      }
      return this;
    },
    clear: function clear(destroyChild) {
      Fill(this.sizerChildren, null);
      ClearChildren.call(this, destroyChild);
      return this;
    }
  };

  var SetSpaceMethods = {
    setColumnSpace: function setColumnSpace(columnSpace) {
      if (!this.space.column) {
        this.space.column = [];
      }
      this.space.column.length = this.columnCount - 1;
      if (typeof columnSpace === 'number') {
        Fill(this.space.column, columnSpace);
      } else {
        for (var i = 0, cnt = this.columnCount - 1; i < cnt; i++) {
          this.space.column[i] = columnSpace[i] || 0;
        }
      }
      return this;
    },
    setRowSpace: function setRowSpace(rowSpace) {
      if (!this.space.row) {
        this.space.row = [];
      }
      this.space.row.length = this.rowCount - 1;
      if (typeof rowSpace === 'number') {
        Fill(this.space.row, rowSpace);
      } else {
        for (var i = 0, cnt = this.rowCount - 1; i < cnt; i++) {
          this.space.row[i] = rowSpace[i] || 0;
        }
      }
      return this;
    },
    setIndentLeft: function setIndentLeft(odd, even) {
      this.space.indentLeftOdd = odd;
      this.space.indentLeftEven = even;
      return this;
    },
    setIndentTop: function setIndentTop(odd, even) {
      this.space.indentTopOdd = odd;
      this.space.indentTopEven = even;
      return this;
    }
  };

  var GetValue$r = Phaser.Utils.Objects.GetValue;
  var ResetGrid = function ResetGrid(columnCount, rowCount, columnProportions, rowProportions, space) {
    if (columnProportions === undefined) {
      columnProportions = 0;
    }
    if (rowProportions === undefined) {
      rowProportions = 0;
    }
    this.columnCount = columnCount;
    this.rowCount = rowCount;
    this.gridCount = columnCount * rowCount;

    // children
    this.removeAll();
    this.sizerChildren.length = columnCount * rowCount;
    Fill(this.sizerChildren, null);

    // proportions
    this.columnProportions = [];
    this.columnProportions.length = columnCount;
    if (typeof columnProportions === 'number') {
      Fill(this.columnProportions, columnProportions);
    } else {
      for (var i = 0; i < columnCount; i++) {
        this.columnProportions[i] = columnProportions[i] || 0;
      }
    }
    this.rowProportions = [];
    this.rowProportions.length = rowCount;
    if (typeof rowProportions === 'number') {
      Fill(this.rowProportions, rowProportions);
    } else {
      for (var i = 0; i < rowCount; i++) {
        this.rowProportions[i] = rowProportions[i] || 0;
      }
    }

    // width & height
    this.columnWidth = [];
    this.columnWidth.length = columnCount;
    this.rowHeight = [];
    this.rowHeight.length = rowCount;

    // space
    this.setColumnSpace(GetValue$r(space, 'column', 0));
    this.setRowSpace(GetValue$r(space, 'row', 0));
    var scene = this.scene;
    var createCellContainerCallback = this.createCellContainerCallback;
    if (createCellContainerCallback) {
      for (var y = 0, ycnt = this.rowCount; y < ycnt; y++) {
        for (var x = 0, xcnt = this.columnCount; x < xcnt; x++) {
          var addConfig = {
            column: x,
            row: y
          };
          var child = createCellContainerCallback(scene, x, y, addConfig);
          if (child) {
            this.add(child, addConfig);
          }
        }
      }
    }
    return this;
  };

  var InseryEmptyRow = function InseryEmptyRow(rowIndex, proportion, space) {
    if (proportion === undefined) {
      proportion = this.rowProportions[0] || 0;
    }
    if (space === undefined) {
      space = this.space.row[0] || 0;
    }
    this.rowCount += 1;
    this.gridCount += this.columnCount;
    var args = [rowIndex * this.columnCount, 0];
    for (var i = 0; i < this.columnCount; i++) {
      args.push(null);
    }
    this.sizerChildren.splice.apply(this.sizerChildren, args);
    this.rowProportions.push(proportion);
    this.rowHeight.length += 1; // this.rowHeight will be recalculated when layout()    

    this.space.row.splice(rowIndex, 0, space);
    return this;
  };
  var AddEmptyRow = function AddEmptyRow(proportion, space) {
    InseryEmptyRow.call(this, this.rowCount, proportion, space);
    return this;
  };

  var InsertEmptyColumn = function InsertEmptyColumn(colIndex, proportion, space) {
    if (proportion === undefined) {
      proportion = this.columnProportions[0] || 0;
    }
    if (space === undefined) {
      space = this.space.column[0] || 0;
    }
    this.columnCount += 1;
    this.gridCount += this.rowCount;
    for (var i = this.rowCount - 1; i >= 0; i--) {
      var insertIndex = i * this.columnCount + colIndex;
      this.sizerChildren.splice(insertIndex, 0, null);
    }
    this.columnProportions.push(proportion);
    this.columnWidth.length += 1; // this.columnWidth will be recalculated when layout()    

    this.space.column.splice(colIndex, 0, space);
    return this;
  };
  var AddEmptyColumn = function AddEmptyColumn(proportion, space) {
    InsertEmptyColumn.call(this, this.columnCount, proportion, space);
    return this;
  };

  var methods$3 = {
    getChildrenWidth: GetChildrenWidth,
    getChildrenHeight: GetChildrenHeight,
    getExpandedChildWidth: GetExpandedChildWidth,
    getExpandedChildHeight: GetExpandedChildHeight,
    getChildrenSizers: GetChildrenSizers,
    preLayout: PreLayout,
    layoutChildren: LayoutChildren,
    resolveWidth: ResolveWidth,
    resolveHeight: ResolveHeight,
    resolveChildrenWidth: ResolveChildrenWidth,
    runWidthWrap: RunWidthWrap,
    resetGrid: ResetGrid,
    inseryEmptyRow: InseryEmptyRow,
    addEmptyRow: AddEmptyRow,
    insertEmptyColumn: InsertEmptyColumn,
    addEmptyColumn: AddEmptyColumn
  };
  Object.assign(methods$3, AddChildMethods, RemoveChildMethods, SetSpaceMethods);

  var GetTotalColumnProportions = function GetTotalColumnProportions() {
    var result = 0,
      proportion;
    for (var i = 0; i < this.columnCount; i++) {
      proportion = this.columnProportions[i];
      if (proportion > 0) {
        result += proportion;
      }
    }
    return result;
  };

  var GetTotalRowProportions = function GetTotalRowProportions() {
    var result = 0,
      proportion;
    for (var i = 0; i < this.rowCount; i++) {
      proportion = this.rowProportions[i];
      if (proportion > 0) {
        result += proportion;
      }
    }
    return result;
  };

  var IsPlainObject$5 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$q = Phaser.Utils.Objects.GetValue;
  var GridSizer = /*#__PURE__*/function (_BaseSizer) {
    _inherits(GridSizer, _BaseSizer);
    var _super = _createSuper(GridSizer);
    function GridSizer(scene, x, y, minWidth, minHeight, columnCount, rowCount, columnProportions, rowProportions, config) {
      var _this;
      _classCallCheck(this, GridSizer);
      if (IsPlainObject$5(x)) {
        config = x;
        x = GetValue$q(config, 'x', 0);
        y = GetValue$q(config, 'y', 0);
        minWidth = GetValue$q(config, 'width', undefined);
        minHeight = GetValue$q(config, 'height', undefined);
        columnCount = GetValue$q(config, 'column', config.col || 0);
        rowCount = GetValue$q(config, 'row', 0);
        columnProportions = GetValue$q(config, 'columnProportions', 0);
        rowProportions = GetValue$q(config, 'rowProportions', 0);
      } else if (IsPlainObject$5(minWidth)) {
        config = minWidth;
        minWidth = GetValue$q(config, 'width', undefined);
        minHeight = GetValue$q(config, 'height', undefined);
        columnCount = GetValue$q(config, 'column', config.col || 0);
        rowCount = GetValue$q(config, 'row', 0);
        columnProportions = GetValue$q(config, 'columnProportions', 0);
        rowProportions = GetValue$q(config, 'rowProportions', 0);
      } else if (IsPlainObject$5(columnCount)) {
        config = columnCount;
        columnCount = GetValue$q(config, 'column', config.col || 0);
        rowCount = GetValue$q(config, 'row', 0);
        columnProportions = GetValue$q(config, 'columnProportions', 0);
        rowProportions = GetValue$q(config, 'rowProportions', 0);
      } else if (IsPlainObject$5(columnProportions)) {
        config = columnProportions;
        columnProportions = GetValue$q(config, 'columnProportions', 0);
        rowProportions = GetValue$q(config, 'rowProportions', 0);
      }
      _this = _super.call(this, scene, x, y, minWidth, minHeight, config);
      _this.type = 'rexGridSizer';
      _this.sizerChildren = [];
      _this.addChildrenMap('items', _this.sizerChildren);
      _this.setCreateCellContainerCallback(GetValue$q(config, 'createCellContainerCallback'));
      _this.setIndentLeft(GetValue$q(config, 'space.indentLeftOdd', 0), GetValue$q(config, 'space.indentLeftEven', 0));
      _this.setIndentTop(GetValue$q(config, 'space.indentTopOdd', 0), GetValue$q(config, 'space.indentTopEven', 0));
      _this.resetGrid(columnCount, rowCount, columnProportions, rowProportions, GetValue$q(config, 'space', undefined));
      return _this;
    }
    _createClass(GridSizer, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene || this.ignoreDestroy) {
          return;
        }
        _get(_getPrototypeOf(GridSizer.prototype), "destroy", this).call(this, fromScene);

        // More free resources
        this.columnProportions = undefined;
        this.rowProportions = undefined;
        this.columnWidth = undefined;
        this.rowHeight = undefined;
        this.createCellContainerCallback = undefined;
      }
    }, {
      key: "setColumnProportion",
      value: function setColumnProportion(columnIndex, proportion) {
        if (columnIndex >= this.columnProportions.length) {
          return this;
        }
        this.columnProportions[columnIndex] = proportion;
        return this;
      }
    }, {
      key: "setRowProportion",
      value: function setRowProportion(rowIndex, proportion) {
        if (rowIndex >= this.rowProportions.length) {
          return this;
        }
        this.rowProportions[rowIndex] = proportion;
        return this;
      }
    }, {
      key: "totalColumnProportions",
      get: function get() {
        if (this._totalColumnProportions === undefined) {
          this._totalColumnProportions = GetTotalColumnProportions.call(this);
        }
        return this._totalColumnProportions;
      }
    }, {
      key: "totalRowProportions",
      get: function get() {
        if (this._totalRowProportions === undefined) {
          this._totalRowProportions = GetTotalRowProportions.call(this);
        }
        return this._totalRowProportions;
      }
    }, {
      key: "getChildAt",
      value: function getChildAt(columnIndex, rowIndex) {
        return this.sizerChildren[rowIndex * this.columnCount + columnIndex];
      }
    }, {
      key: "childToGridIndex",
      value: function childToGridIndex(child, out) {
        if (!child) {
          return null;
        }
        var index = this.sizerChildren.indexOf(child);
        if (index === -1) {
          return null;
        }
        if (out === undefined) {
          out = {};
        }
        out.x = index % this.columnCount;
        out.y = Math.floor(index / this.columnCount);
        return out;
      }
    }, {
      key: "getColumnWidth",
      value: function getColumnWidth(columnIndex) {
        var colProportion = this.columnProportions[columnIndex];
        var colWidth = colProportion === 0 ? this.columnWidth[columnIndex] : colProportion * this.proportionWidthLength;
        return colWidth;
      }
    }, {
      key: "getRowHeight",
      value: function getRowHeight(rowIndex) {
        var rowProportion = this.rowProportions[rowIndex];
        var rowHeight = rowProportion === 0 ? this.rowHeight[rowIndex] : rowProportion * this.proportionHeightLength;
        return rowHeight;
      }
    }, {
      key: "setCreateCellContainerCallback",
      value: function setCreateCellContainerCallback(callback) {
        this.createCellContainerCallback = callback;
        return this;
      }
    }]);
    return GridSizer;
  }(Base);
  Object.assign(GridSizer.prototype, methods$3);

  var GetValue$p = Phaser.Utils.Objects.GetValue;
  var AddChild = function AddChild(topPatent, childParent, config) {
    var childConfig = GetValue$p(config, 'child');
    var child = GetValue$p(childConfig, 'gameObject', undefined);
    if (child) {
      var childSpace = GetValue$p(config, 'space.child', 0);
      topPatent.childMargin = {};
      var childMargin = topPatent.childMargin;
      var childPadding = {};
      if (typeof childSpace === 'number') {
        // Legacy, add childSpace to slider
        switch (topPatent.scrollMode) {
          case 0:
          case 1:
            childMargin.top = 0;
            childMargin.bottom = 0;
            childMargin.left = 0;
            childMargin.right = 0;
            break;
          default:
            childMargin.top = childSpace;
            childMargin.bottom = childSpace;
            childMargin.left = childSpace;
            childMargin.right = childSpace;
            break;
        }
      } else {
        switch (topPatent.scrollMode) {
          case 0:
            childMargin.top = GetValue$p(childSpace, 'top', 0);
            childMargin.bottom = GetValue$p(childSpace, 'bottom', 0);
            childPadding.left = GetValue$p(childSpace, 'left', 0);
            childPadding.right = GetValue$p(childSpace, 'right', 0);
            break;
          case 1:
            childMargin.top = GetValue$p(childSpace, 'left', 0);
            childMargin.bottom = GetValue$p(childSpace, 'right', 0);
            childPadding.top = GetValue$p(childSpace, 'top', 0);
            childPadding.bottom = GetValue$p(childSpace, 'bottom', 0);
            break;
          default:
            // 2
            childMargin.top = GetValue$p(childSpace, 'top', 0);
            childMargin.bottom = GetValue$p(childSpace, 'bottom', 0);
            childMargin.left = GetValue$p(childSpace, 'left', 0);
            childMargin.right = GetValue$p(childSpace, 'right', 0);
            break;
        }
      }
      childParent.add(child, {
        column: 1,
        row: 1,
        align: GetValue$p(childConfig, 'align', 'center'),
        padding: childPadding,
        expand: {
          width: GetValue$p(childConfig, 'expandWidth', true),
          // Private
          height: GetValue$p(childConfig, 'expandHeight', true) // Private
        }
      });
    }

    topPatent.addChildrenMap('child', child);
  };

  var GetValue$o = Phaser.Utils.Objects.GetValue;
  var RoundRectangle$1 = /*#__PURE__*/function () {
    function RoundRectangle(x, y, width, height, radiusConfig) {
      _classCallCheck(this, RoundRectangle);
      if (x === undefined) {
        x = 0;
      }
      if (y === undefined) {
        y = x;
      }
      if (width === undefined) {
        width = 0;
      }
      if (height === undefined) {
        height = 0;
      }
      if (radiusConfig === undefined) {
        radiusConfig = 0;
      }
      this.cornerRadius = {};
      this._width = 0;
      this._height = 0;
      this.setTo(x, y, width, height, radiusConfig);
    }
    _createClass(RoundRectangle, [{
      key: "setTo",
      value: function setTo(x, y, width, height, radiusConfig) {
        this.setPosition(x, y);
        this.setRadius(radiusConfig);
        this.setSize(width, height);
        return this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(x, y) {
        this.x = x;
        this.y = y;
        return this;
      }
    }, {
      key: "setRadius",
      value: function setRadius(value) {
        if (value === undefined) {
          value = 0;
        }
        this.radius = value;
        return this;
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        this.width = width;
        this.height = height;
        return this;
      }
    }, {
      key: "minWidth",
      get: function get() {
        var radius = this.cornerRadius;
        return Math.max(radius.tl.x + radius.tr.x, radius.bl.x + radius.br.x);
      }
    }, {
      key: "minHeight",
      get: function get() {
        var radius = this.cornerRadius;
        return Math.max(radius.tl.y + radius.bl.y, radius.tr.y + radius.br.y);
      }
    }, {
      key: "width",
      get: function get() {
        return this._width;
      },
      set: function set(value) {
        if (value == null) {
          value = 0;
        }
        this._width = Math.max(value, this.minWidth);
      }
    }, {
      key: "height",
      get: function get() {
        return this._height;
      },
      set: function set(value) {
        if (value == null) {
          value = 0;
        }
        this._height = Math.max(value, this.minHeight);
      }
    }, {
      key: "radius",
      get: function get() {
        var radius = this.cornerRadius;
        return Math.max(radius.tl.x, radius.tl.y, radius.tr.x, radius.tr.y, radius.bl.x, radius.bl.y, radius.br.x, radius.br.y);
      },
      set: function set(value) {
        var defaultRadiusX, defaultRadiusY;
        if (typeof value === 'number') {
          defaultRadiusX = value;
          defaultRadiusY = value;
        } else {
          defaultRadiusX = GetValue$o(value, 'x', 0);
          defaultRadiusY = GetValue$o(value, 'y', 0);
        }
        var radius = this.cornerRadius;
        radius.tl = GetRadius(GetValue$o(value, 'tl', undefined), defaultRadiusX, defaultRadiusY);
        radius.tr = GetRadius(GetValue$o(value, 'tr', undefined), defaultRadiusX, defaultRadiusY);
        radius.bl = GetRadius(GetValue$o(value, 'bl', undefined), defaultRadiusX, defaultRadiusY);
        radius.br = GetRadius(GetValue$o(value, 'br', undefined), defaultRadiusX, defaultRadiusY);
      }
    }, {
      key: "radiusTL",
      get: function get() {
        var radius = this.cornerRadius.tl;
        return Math.max(radius.x, radius.y);
      },
      set: function set(value) {
        SetRadius(this.cornerRadius.tl, value);
      }
    }, {
      key: "radiusTR",
      get: function get() {
        var radius = this.cornerRadius.tr;
        return Math.max(radius.x, radius.y);
      },
      set: function set(value) {
        SetRadius(this.cornerRadius.tr, value);
      }
    }, {
      key: "radiusBL",
      get: function get() {
        var radius = this.cornerRadius.bl;
        return Math.max(radius.x, radius.y);
      },
      set: function set(value) {
        SetRadius(this.cornerRadius.bl, value);
      }
    }, {
      key: "radiusBR",
      get: function get() {
        var radius = this.cornerRadius.br;
        return Math.max(radius.x, radius.y);
      },
      set: function set(value) {
        SetRadius(this.cornerRadius.br, value);
      }
    }]);
    return RoundRectangle;
  }();
  var GetRadius = function GetRadius(radius, defaultRadiusX, defaultRadiusY) {
    if (radius === undefined) {
      radius = {
        x: defaultRadiusX,
        y: defaultRadiusY
      };
    } else if (typeof radius === 'number') {
      radius = {
        x: radius,
        y: radius
      };
    }
    SetConvex(radius);
    return radius;
  };
  var SetRadius = function SetRadius(radius, value) {
    if (typeof value === 'number') {
      radius.x = value;
      radius.y = value;
    } else {
      radius.x = GetValue$o(value, 'x', 0);
      radius.y = GetValue$o(value, 'y', 0);
    }
    SetConvex(radius);
  };
  var SetConvex = function SetConvex(radius) {
    radius.convex = radius.x >= 0 || radius.y >= 0;
    radius.x = Math.abs(radius.x);
    radius.y = Math.abs(radius.y);
  };

  var LineTo = function LineTo(x, y, pathData) {
    var cnt = pathData.length;
    if (cnt >= 2) {
      var lastX = pathData[cnt - 2];
      var lastY = pathData[cnt - 1];
      if (x === lastX && y === lastY) {
        return pathData;
      }
    }
    pathData.push(x, y);
    return pathData;
  };

  var DegToRad = Phaser.Math.DegToRad;
  var ArcTo = function ArcTo(centerX, centerY, radiusX, radiusY, startAngle, endAngle, antiClockWise, iteration, pathData) {
    // startAngle, endAngle: 0 ~ 360
    if (antiClockWise && endAngle > startAngle) {
      endAngle -= 360;
    } else if (!antiClockWise && endAngle < startAngle) {
      endAngle += 360;
    }
    var deltaAngle = endAngle - startAngle;
    var step = DegToRad(deltaAngle) / iteration;
    startAngle = DegToRad(startAngle);
    for (var i = 0; i <= iteration; i++) {
      var angle = startAngle + step * i;
      var x = centerX + radiusX * Math.cos(angle);
      var y = centerY + radiusY * Math.sin(angle);
      LineTo(x, y, pathData);
    }
    return pathData;
  };

  /*
  src: {
      fillColor, 
      fillAlpha, 
      pathData, 
      pathIndexes  // Earcut(pathData)
  }
  */

  var Utils$1 = Phaser.Renderer.WebGL.Utils;
  var FillPathWebGL = function FillPathWebGL(pipeline, calcMatrix, src, alpha, dx, dy) {
    var fillTintColor = Utils$1.getTintAppendFloatAlpha(src.fillColor, src.fillAlpha * alpha);
    var path = src.pathData;
    var pathIndexes = src.pathIndexes;
    for (var i = 0; i < pathIndexes.length; i += 3) {
      var p0 = pathIndexes[i] * 2;
      var p1 = pathIndexes[i + 1] * 2;
      var p2 = pathIndexes[i + 2] * 2;
      var x0 = path[p0 + 0] - dx;
      var y0 = path[p0 + 1] - dy;
      var x1 = path[p1 + 0] - dx;
      var y1 = path[p1 + 1] - dy;
      var x2 = path[p2 + 0] - dx;
      var y2 = path[p2 + 1] - dy;
      var tx0 = calcMatrix.getX(x0, y0);
      var ty0 = calcMatrix.getY(x0, y0);
      var tx1 = calcMatrix.getX(x1, y1);
      var ty1 = calcMatrix.getY(x1, y1);
      var tx2 = calcMatrix.getX(x2, y2);
      var ty2 = calcMatrix.getY(x2, y2);
      pipeline.batchTri(src, tx0, ty0, tx1, ty1, tx2, ty2, 0, 0, 1, 1, fillTintColor, fillTintColor, fillTintColor, 2);
    }
  };

  /*
  src: {
      strokeColor,
      strokeAlpha,
      pathData,
      lineWidth,
      closePath
  }
  */
  var Utils = Phaser.Renderer.WebGL.Utils;
  var StrokePathWebGL = function StrokePathWebGL(pipeline, src, alpha, dx, dy) {
    var strokeTint = pipeline.strokeTint;
    var strokeTintColor = Utils.getTintAppendFloatAlpha(src.strokeColor, src.strokeAlpha * alpha);
    strokeTint.TL = strokeTintColor;
    strokeTint.TR = strokeTintColor;
    strokeTint.BL = strokeTintColor;
    strokeTint.BR = strokeTintColor;
    var path = src.pathData;
    var pathLength = path.length - 1;
    var lineWidth = src.lineWidth;
    var halfLineWidth = lineWidth / 2;
    var px1 = path[0] - dx;
    var py1 = path[1] - dy;
    if (!src.closePath) {
      pathLength -= 2;
    }
    for (var i = 2; i < pathLength; i += 2) {
      var px2 = path[i] - dx;
      var py2 = path[i + 1] - dy;
      pipeline.batchLine(px1, py1, px2, py2, halfLineWidth, halfLineWidth, lineWidth, i - 2, src.closePath ? i === pathLength - 1 : false);
      px1 = px2;
      py1 = py2;
    }
  };

  var GetCalcMatrix = Phaser.GameObjects.GetCalcMatrix;
  var PolygonWebGLRenderer = function PolygonWebGLRenderer(renderer, src, camera, parentMatrix) {
    if (src.dirty) {
      src.updateData();
      src.dirty = false;
    }
    camera.addToRenderList(src);
    var pipeline = renderer.pipelines.set(src.pipeline);
    var result = GetCalcMatrix(src, camera, parentMatrix);
    var calcMatrix = pipeline.calcMatrix.copyFrom(result.calc);
    var dx = src._displayOriginX;
    var dy = src._displayOriginY;
    var alpha = camera.alpha * src.alpha;
    renderer.pipelines.preBatch(src);
    if (src.isFilled) {
      FillPathWebGL(pipeline, calcMatrix, src, alpha, dx, dy);
    }
    if (src.isStroked) {
      StrokePathWebGL(pipeline, src, alpha, dx, dy);
    }
    renderer.pipelines.postBatch(src);
  };

  var FillStyleCanvas = function FillStyleCanvas(ctx, src, altColor, altAlpha) {
    var fillColor = altColor ? altColor : src.fillColor;
    var fillAlpha = altAlpha ? altAlpha : src.fillAlpha;
    var red = (fillColor & 0xFF0000) >>> 16;
    var green = (fillColor & 0xFF00) >>> 8;
    var blue = fillColor & 0xFF;
    ctx.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + fillAlpha + ')';
  };

  var LineStyleCanvas = function LineStyleCanvas(ctx, src, altColor, altAlpha) {
    var strokeColor = altColor ? altColor : src.strokeColor;
    var strokeAlpha = altAlpha ? altAlpha : src.strokeAlpha;
    var red = (strokeColor & 0xFF0000) >>> 16;
    var green = (strokeColor & 0xFF00) >>> 8;
    var blue = strokeColor & 0xFF;
    ctx.strokeStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + strokeAlpha + ')';
    ctx.lineWidth = src.lineWidth;
  };

  var SetTransform = Phaser.Renderer.Canvas.SetTransform;
  var PolygonCanvasRenderer = function PolygonCanvasRenderer(renderer, src, camera, parentMatrix) {
    if (src.dirty) {
      src.updateData();
      src.dirty = false;
    }
    camera.addToRenderList(src);
    var ctx = renderer.currentContext;
    if (SetTransform(renderer, ctx, src, camera, parentMatrix)) {
      var dx = src._displayOriginX;
      var dy = src._displayOriginY;
      var path = src.pathData;
      var pathLength = path.length - 1;
      var px1 = path[0] - dx;
      var py1 = path[1] - dy;
      ctx.beginPath();
      ctx.moveTo(px1, py1);
      if (!src.closePath) {
        pathLength -= 2;
      }
      for (var i = 2; i < pathLength; i += 2) {
        var px2 = path[i] - dx;
        var py2 = path[i + 1] - dy;
        ctx.lineTo(px2, py2);
      }
      ctx.closePath();
      if (src.isFilled) {
        FillStyleCanvas(ctx, src);
        ctx.fill();
      }
      if (src.isStroked) {
        LineStyleCanvas(ctx, src);
        ctx.stroke();
      }

      //  Restore the context saved in SetTransform
      ctx.restore();
    }
  };

  var Render = {
    renderWebGL: PolygonWebGLRenderer,
    renderCanvas: PolygonCanvasRenderer
  };

  var Shape = Phaser.GameObjects.Shape;
  var IsPlainObject$4 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$n = Phaser.Utils.Objects.GetValue;
  var Earcut = Phaser.Geom.Polygon.Earcut;
  var RoundRectangle = /*#__PURE__*/function (_Shape) {
    _inherits(RoundRectangle, _Shape);
    var _super = _createSuper(RoundRectangle);
    function RoundRectangle(scene, x, y, width, height, radiusConfig, fillColor, fillAlpha) {
      var _this;
      _classCallCheck(this, RoundRectangle);
      var strokeColor, strokeAlpha, strokeWidth, shapeType;
      if (IsPlainObject$4(x)) {
        var config = x;
        x = config.x;
        y = config.y;
        width = config.width;
        height = config.height;
        radiusConfig = config.radius;
        fillColor = config.color;
        fillAlpha = config.alpha;
        strokeColor = config.strokeColor;
        strokeAlpha = config.strokeAlpha;
        strokeWidth = config.strokeWidth;
        shapeType = config.shape;
      }
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
        height = width;
      }
      if (radiusConfig === undefined) {
        radiusConfig = 0;
      }
      if (shapeType === undefined) {
        shapeType = 0;
      }
      var geom = new RoundRectangle$1(); // Configurate it later
      _this = _super.call(this, scene, 'rexRoundRectangleShape', geom);
      _this.setShapeType(shapeType);
      if (_this.shapeType === 0) {
        var radius = GetValue$n(radiusConfig, 'radius', radiusConfig);
        geom.setTo(0, 0, width, height, radius);
      } else {
        var radius = {
          x: width / 2,
          y: height / 2
        };
        geom.setTo(0, 0, width, height, radius);
      }
      var iteration = GetValue$n(radiusConfig, 'iteration', undefined);
      _this.setIteration(iteration);
      _this.setPosition(x, y);
      _this.setFillStyle(fillColor, fillAlpha);
      if (strokeColor !== undefined && strokeWidth === undefined) {
        strokeWidth = 2;
      }
      _this.setStrokeStyle(strokeWidth, strokeColor, strokeAlpha);
      _this.updateDisplayOrigin();
      _this.dirty = true;
      return _this;
    }
    _createClass(RoundRectangle, [{
      key: "fillColor",
      get: function get() {
        return this._fillColor;
      },
      set: function set(value) {
        this._fillColor = value;
        this.isFilled = value != null && this._fillAlpha > 0;
      }
    }, {
      key: "fillAlpha",
      get: function get() {
        return this._fillAlpha;
      },
      set: function set(value) {
        this._fillAlpha = value;
        this.isFilled = value > 0 && this._fillColor != null;
      }

      // Fully override setFillStyle method
    }, {
      key: "setFillStyle",
      value: function setFillStyle(color, alpha) {
        if (alpha === undefined) {
          alpha = 1;
        }
        this.fillColor = color;
        this.fillAlpha = alpha;
        return this;
      }
    }, {
      key: "strokeColor",
      get: function get() {
        return this._strokeColor;
      },
      set: function set(value) {
        this._strokeColor = value;
        this.isStroked = value != null && this._strokeAlpha > 0 && this._lineWidth > 0;
      }
    }, {
      key: "strokeAlpha",
      get: function get() {
        return this._strokeAlpha;
      },
      set: function set(value) {
        this._strokeAlpha = value;
        this.isStroked = value > 0 && this._strokeColor != null && this._lineWidth > 0;
      }
    }, {
      key: "lineWidth",
      get: function get() {
        return this._lineWidth;
      },
      set: function set(value) {
        this._lineWidth = value;
        this.isStroked = value > 0 && this._strokeColor != null;
      }

      // Fully override setStrokeStyle method
    }, {
      key: "setStrokeStyle",
      value: function setStrokeStyle(lineWidth, color, alpha) {
        if (alpha === undefined) {
          alpha = 1;
        }
        this.lineWidth = lineWidth;
        this.strokeColor = color;
        this.strokeAlpha = alpha;
        return this;
      }
    }, {
      key: "updateData",
      value: function updateData() {
        var geom = this.geom;
        var pathData = this.pathData;
        pathData.length = 0;
        var width = geom.width,
          height = geom.height,
          cornerRadius = geom.cornerRadius,
          radius,
          iteration = this.iteration + 1;

        // Top-left
        radius = cornerRadius.tl;
        if (IsArcCorner(radius)) {
          if (radius.convex) {
            var centerX = radius.x;
            var centerY = radius.y;
            ArcTo(centerX, centerY, radius.x, radius.y, 180, 270, false, iteration, pathData);
          } else {
            var centerX = 0;
            var centerY = 0;
            ArcTo(centerX, centerY, radius.x, radius.y, 90, 0, true, iteration, pathData);
          }
        } else {
          LineTo(0, 0, pathData);
        }

        // Top-right
        radius = cornerRadius.tr;
        if (IsArcCorner(radius)) {
          if (radius.convex) {
            var centerX = width - radius.x;
            var centerY = radius.y;
            ArcTo(centerX, centerY, radius.x, radius.y, 270, 360, false, iteration, pathData);
          } else {
            var centerX = width;
            var centerY = 0;
            ArcTo(centerX, centerY, radius.x, radius.y, 180, 90, true, iteration, pathData);
          }
        } else {
          LineTo(width, 0, pathData);
        }

        // Bottom-right
        radius = cornerRadius.br;
        if (IsArcCorner(radius)) {
          if (radius.convex) {
            var centerX = width - radius.x;
            var centerY = height - radius.y;
            ArcTo(centerX, centerY, radius.x, radius.y, 0, 90, false, iteration, pathData);
          } else {
            var centerX = width;
            var centerY = height;
            ArcTo(centerX, centerY, radius.x, radius.y, 270, 180, true, iteration, pathData);
          }
        } else {
          LineTo(width, height, pathData);
        }

        // Bottom-left
        radius = cornerRadius.bl;
        if (IsArcCorner(radius)) {
          if (radius.convex) {
            var centerX = radius.x;
            var centerY = height - radius.y;
            ArcTo(centerX, centerY, radius.x, radius.y, 90, 180, false, iteration, pathData);
          } else {
            var centerX = 0;
            var centerY = height;
            ArcTo(centerX, centerY, radius.x, radius.y, 360, 270, true, iteration, pathData);
          }
        } else {
          LineTo(0, height, pathData);
        }
        pathData.push(pathData[0], pathData[1]); // Repeat first point to close curve
        this.pathIndexes = Earcut(pathData);
        return this;
      }
    }, {
      key: "setShapeType",
      value: function setShapeType(shapeType) {
        if (typeof shapeType === 'string') {
          shapeType = ShapeTypeMap[shapeType];
        }
        this.shapeType = shapeType;
        return this;
      }
    }, {
      key: "width",
      get: function get() {
        return this.geom.width;
      },
      set: function set(value) {
        this.resize(value, this.height);
      }
    }, {
      key: "height",
      get: function get() {
        return this.geom.height;
      },
      set: function set(value) {
        this.resize(this.width, value);
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        // Override Shape's setSize method
        if (height === undefined) {
          height = width;
        }
        if (this.geom.width === width && this.geom.height === height) {
          return this;
        }
        this.geom.setSize(width, height);
        if (this.shapeType === 1) {
          this.setRadius({
            x: width / 2,
            y: height / 2
          });
        }
        this.updateDisplayOrigin();
        this.dirty = true;
        var input = this.input;
        if (input && !input.customHitArea) {
          input.hitArea.width = width;
          input.hitArea.height = height;
        }
        return this;
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        this.setSize(width, height);
        return this;
      }
    }, {
      key: "radius",
      get: function get() {
        return this.geom.radius;
      },
      set: function set(value) {
        this.geom.setRadius(value);
        this.updateDisplayOrigin();
        this.dirty = true;
      }
    }, {
      key: "radiusTL",
      get: function get() {
        return this.geom.radiusTL;
      },
      set: function set(value) {
        this.geom.radiusTL = value;
        this.dirty = true;
      }
    }, {
      key: "radiusTR",
      get: function get() {
        return this.geom.radiusTR;
      },
      set: function set(value) {
        this.geom.radiusTR = value;
        this.dirty = true;
      }
    }, {
      key: "radiusBL",
      get: function get() {
        return this.geom.radiusBL;
      },
      set: function set(value) {
        this.geom.radiusBL = value;
        this.dirty = true;
      }
    }, {
      key: "radiusBR",
      get: function get() {
        return this.geom.radiusBR;
      },
      set: function set(value) {
        this.geom.radiusBR = value;
        this.dirty = true;
      }
    }, {
      key: "setRadius",
      value: function setRadius(value) {
        if (value === undefined) {
          value = 0;
        }
        this.radius = value;
        return this;
      }
    }, {
      key: "setRadiusTL",
      value: function setRadiusTL(value) {
        if (value === undefined) {
          value = 0;
        }
        this.radiusTL = value;
        return this;
      }
    }, {
      key: "setRadiusTR",
      value: function setRadiusTR(value) {
        if (value === undefined) {
          value = 0;
        }
        this.radiusTR = value;
        return this;
      }
    }, {
      key: "setRadiusBL",
      value: function setRadiusBL(value) {
        if (value === undefined) {
          value = 0;
        }
        this.radiusBL = value;
        return this;
      }
    }, {
      key: "setRadiusBR",
      value: function setRadiusBR(value) {
        if (value === undefined) {
          value = 0;
        }
        this.radiusBR = value;
        return this;
      }
    }, {
      key: "cornerRadius",
      get: function get() {
        return this.geom.cornerRadius;
      },
      set: function set(value) {
        this.radius = value;
      }
    }, {
      key: "setCornerRadius",
      value: function setCornerRadius(value) {
        return this.setRadius(value);
      }
    }, {
      key: "iteration",
      get: function get() {
        return this._iteration;
      },
      set: function set(value) {
        // Set iteration first time
        if (this._iteration === undefined) {
          this._iteration = value;
          return;
        }

        // Change iteration value
        if (this._iteration === value) {
          return;
        }
        this._iteration = value;
        this.dirty = true;
      }
    }, {
      key: "setIteration",
      value: function setIteration(iteration) {
        if (iteration === undefined) {
          iteration = 6;
        }
        this.iteration = iteration;
        return this;
      }
    }]);
    return RoundRectangle;
  }(Shape);
  var IsArcCorner = function IsArcCorner(radius) {
    return radius.x > 0 && radius.y > 0;
  };
  var ShapeTypeMap = {
    rectangle: 0,
    circle: 1
  };
  Object.assign(RoundRectangle.prototype, Render);

  var ExtractByPrefix = function ExtractByPrefix(obj, prefix, delimiter, out) {
    if (delimiter === undefined) {
      delimiter = '.';
    }
    if (out === undefined) {
      out = {};
    }
    if (!obj) {
      return out;
    }
    if (prefix in obj) {
      return Object.assign(out, obj[prefix]);
    }
    prefix += delimiter;
    for (var key in obj) {
      if (!key.startsWith(prefix)) {
        continue;
      }
      out[key.replace(prefix, '')] = obj[key];
    }
    return out;
  };

  var GetPartialData = function GetPartialData(obj, keys, out) {
    if (out === undefined) {
      out = {};
    }
    if (Array.isArray(keys)) {
      var key;
      for (var i = 0, cnt = keys.length; i < cnt; i++) {
        key = keys[i];
        out[key] = obj[key];
      }
    } else {
      for (var key in keys) {
        out[key] = obj[key];
      }
    }
    return out;
  };

  var IsKeyValueEqual = function IsKeyValueEqual(objA, objB) {
    for (var key in objA) {
      if (!(key in objB)) {
        return false;
      }
      if (objA[key] !== objB[key]) {
        return false;
      }
    }
    for (var key in objB) {
      if (!(key in objA)) {
        return false;
      }
    }
    return true;
  };

  var GetValue$m = Phaser.Utils.Objects.GetValue;
  var StyleManager = /*#__PURE__*/function (_ComponentBase) {
    _inherits(StyleManager, _ComponentBase);
    var _super = _createSuper(StyleManager);
    function StyleManager(gameObject, config) {
      var _this;
      _classCallCheck(this, StyleManager);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;

      _this.style = GetValue$m(config, 'style', _assertThisInitialized(_this));
      var propertiesMap = GetValue$m(config, 'propertiesMap');
      _this.activeStyle = ExtractStyle(config, 'active', propertiesMap);
      _this.hoverStyle = ExtractStyle(config, 'hover', propertiesMap);
      _this.disableStyle = ExtractStyle(config, 'disable', propertiesMap);
      _this.onModifyStyle = GetValue$m(config, 'onModifyStyle');
      return _this;
    }
    _createClass(StyleManager, [{
      key: "getStyle",
      value: function getStyle(keys) {
        return GetPartialData(this.style, keys);
      }
    }, {
      key: "modifyStyle",
      value: function modifyStyle(style) {
        for (var key in style) {
          this.style[key] = style[key];
        }
        if (this.onModifyStyle) {
          this.onModifyStyle(this.parent, style);
        }
        return this;
      }
    }, {
      key: "applyStyle",
      value: function applyStyle(newStyle) {
        if (!newStyle) {
          return undefined;
        }
        var currentStyle = this.getStyle(newStyle);
        if (!IsKeyValueEqual(currentStyle, newStyle)) {
          this.modifyStyle(newStyle);
          return currentStyle;
        } else {
          return undefined;
        }
      }
    }, {
      key: "setActiveState",
      value: function setActiveState(enable) {
        SetStateEnableMethod.call(this, 'active', enable);
        return this;
      }
    }, {
      key: "setHoverState",
      value: function setHoverState(enable) {
        SetStateEnableMethod.call(this, 'hover', enable);
        return this;
      }
    }, {
      key: "setDisableState",
      value: function setDisableState(enable) {
        SetStateEnableMethod.call(this, 'disable', enable);
        return this;
      }
    }]);
    return StyleManager;
  }(ComponentBase);
  var ExtractStyle = function ExtractStyle(config, prefix, propertiesMap) {
    var result = ExtractByPrefix(config, prefix);
    if (propertiesMap) {
      for (var name in result) {
        if (propertiesMap.hasOwnProperty(name)) {
          result[propertiesMap[name]] = result[name];
          delete result[name];
        }
      }
    }
    return result;
  };
  var SetStateEnableMethod = function SetStateEnableMethod(stateName, enable) {
    if (enable === undefined) {
      enable = true;
    }
    var stateVarName = "".concat(stateName, "State");
    var styleVarName = "".concat(stateName, "Style");
    var styleSaveVarName = "".concat(stateName, "StyleSave");
    if (this[stateVarName] === enable) {
      return;
    }
    this[stateVarName] = enable;
    if (enable) {
      this[styleSaveVarName] = this.applyStyle(this[styleVarName]);
    } else {
      this.applyStyle(this[styleSaveVarName]);
      this[styleSaveVarName] = undefined;
    }
  };

  var HelperMethods = {
    addStyleManager: function addStyleManager(config) {
      this.styleManager = new StyleManager(this, config);
      return this;
    },
    setActiveState: function setActiveState(enable) {
      this.styleManager.setActiveState(enable);
      return this;
    },
    setHoverState: function setHoverState(enable) {
      this.styleManager.setHoverState(enable);
      return this;
    },
    setDisableState: function setDisableState(enable) {
      this.styleManager.setDisableState(enable);
      return this;
    }
  };

  var StatesRoundRectangle = /*#__PURE__*/function (_RoundRectangle) {
    _inherits(StatesRoundRectangle, _RoundRectangle);
    var _super = _createSuper(StatesRoundRectangle);
    function StatesRoundRectangle(scene, config) {
      var _this;
      _classCallCheck(this, StatesRoundRectangle);
      if (config === undefined) {
        config = {};
      }
      _this = _super.call(this, scene, config);
      _this.type = 'rexStatesRoundRectangleShape';
      config.style = _assertThisInitialized(_this);
      config.propertiesMap = PropertiesMap;
      _this.addStyleManager(config);
      delete config.style;
      delete config.propertiesMap;
      return _this;
    }
    return _createClass(StatesRoundRectangle);
  }(RoundRectangle);
  var PropertiesMap = {
    color: 'fillColor',
    alpha: 'fillAlpha',
    // strokeColor: 'strokeColor',
    // strokeAlpha: 'strokeAlpha',
    strokeWidth: 'lineWidth'
  };
  Object.assign(StatesRoundRectangle.prototype, HelperMethods);

  var HasProperty = function HasProperty(obj, prop) {
    if (!obj) {
      return false;
    }
    if (obj.hasOwnProperty(prop)) {
      return true;
    }
    while (obj) {
      if (Object.getOwnPropertyDescriptor(obj, prop)) {
        return true;
      }
      obj = obj.__proto__;
    }
    return false;
  };

  var GetFXFactory = function GetFXFactory(gameObject) {
    if (gameObject.preFX) {
      return gameObject.preFX;
    }
    if (gameObject.postFX) {
      return gameObject.postFX;
    }
    return null;
  };

  var AddClearEffectCallback = function AddClearEffectCallback(gameObject, effectSwitchName) {
    if (!gameObject._effectSwitchNames) {
      gameObject._effectSwitchNames = [];
      gameObject.clearAllEffects = function () {
        var effectSwitchNames = gameObject._effectSwitchNames;
        for (var i = 0, cnt = effectSwitchNames.length; i < cnt; i++) {
          gameObject[effectSwitchNames[i]] = null;
        }
        return gameObject;
      };
      gameObject.on('destroy', gameObject.clearAllEffects, gameObject);
    }
    gameObject._effectSwitchNames.push(effectSwitchName);
  };

  var AddBarrelProperties = function AddBarrelProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'barrel')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var barrel;
    Object.defineProperty(gameObject, 'barrel', {
      get: function get() {
        return barrel;
      },
      set: function set(value) {
        if (barrel === value) {
          return;
        }
        barrel = value;
        if (barrel === null || barrel === false) {
          if (gameObject._barrelEffect) {
            fxFactory.remove(gameObject._barrelEffect);
            gameObject._barrelEffect = undefined;
          }
        } else {
          if (!gameObject._barrelEffect) {
            gameObject._barrelEffect = fxFactory.addBarrel();
          }
          gameObject._barrelEffect.amount = barrel;
        }
      }
    });
    gameObject.barrel = null;
    AddClearEffectCallback(gameObject, 'barrel');
    return gameObject;
  };

  var AddColorMatrixEffectPropertiesBase = function AddColorMatrixEffectPropertiesBase(gameObject, effectName, inputMode) {
    // Don't attach properties again
    if (HasProperty(gameObject, effectName)) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var EffectInstancePropertyName = "_".concat(effectName, "Effect");
    var currentValue;
    Object.defineProperty(gameObject, effectName, {
      get: function get() {
        return currentValue;
      },
      set: function set(value) {
        if (currentValue === value) {
          return;
        }
        currentValue = value;
        if (currentValue === null || currentValue === false) {
          if (gameObject[EffectInstancePropertyName]) {
            fxFactory.remove(gameObject[EffectInstancePropertyName]);
            gameObject[EffectInstancePropertyName] = undefined;
          }
        } else {
          if (!gameObject[EffectInstancePropertyName]) {
            gameObject[EffectInstancePropertyName] = fxFactory.addColorMatrix();
          }
          var effectInstance = gameObject[EffectInstancePropertyName];
          effectInstance[effectName](inputMode === 1 ? value : undefined);
        }
      }
    });
    gameObject[effectName] = null;
    AddClearEffectCallback(gameObject, effectName);
    return gameObject;
  };

  var AddBlackWhiteProperties = function AddBlackWhiteProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'blackWhite');
    return gameObject;
  };

  var AddBloomProperties = function AddBloomProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'bloomColor')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var bloomColor,
      bloomOffsetX = 1,
      bloomOffsetY = 1,
      bloomBlurStrength = 1,
      bloomStrength = 1,
      bloomSteps = 4;
    Object.defineProperty(gameObject, 'bloomColor', {
      get: function get() {
        return bloomColor;
      },
      set: function set(value) {
        if (bloomColor === value) {
          return;
        }
        bloomColor = value;
        if (bloomColor === null || bloomColor === false) {
          if (gameObject._bloom) {
            fxFactory.remove(gameObject._bloom);
            gameObject._bloom = undefined;
            fxFactory.setPadding(0);
          }
        } else {
          if (!gameObject._bloom) {
            gameObject._bloom = fxFactory.addBloom(bloomColor, bloomOffsetX, bloomOffsetY, bloomBlurStrength, bloomStrength, bloomSteps);
            fxFactory.setPadding(Math.max(bloomOffsetX, bloomOffsetY) + 1);
          }
          gameObject._bloom.color = bloomColor;
        }
      }
    });
    Object.defineProperty(gameObject, 'bloomOffsetX', {
      get: function get() {
        return bloomOffsetX;
      },
      set: function set(value) {
        if (bloomOffsetX === value) {
          return;
        }
        bloomOffsetX = value;
        if (gameObject._bloom) {
          var offset = Math.max(bloomOffsetX, bloomOffsetY);
          fxFactory.setPadding(offset + 1);
          gameObject._bloom.offsetX = bloomOffsetX;
        }
      }
    });
    Object.defineProperty(gameObject, 'bloomOffsetY', {
      get: function get() {
        return bloomOffsetY;
      },
      set: function set(value) {
        if (bloomOffsetY === value) {
          return;
        }
        bloomOffsetY = value;
        if (gameObject._bloom) {
          var offset = Math.max(bloomOffsetX, bloomOffsetY);
          fxFactory.setPadding(offset + 1);
          gameObject._bloom.offsetY = bloomOffsetY;
        }
      }
    });
    Object.defineProperty(gameObject, 'bloomBlurStrength', {
      get: function get() {
        return bloomBlurStrength;
      },
      set: function set(value) {
        if (bloomBlurStrength === value) {
          return;
        }
        bloomBlurStrength = value;
        if (gameObject._bloom) {
          gameObject._bloom.blurStrength = bloomBlurStrength;
        }
      }
    });
    Object.defineProperty(gameObject, 'bloomStrength', {
      get: function get() {
        return bloomStrength;
      },
      set: function set(value) {
        if (bloomStrength === value) {
          return;
        }
        bloomStrength = value;
        if (gameObject._bloom) {
          gameObject._bloom.strength = bloomStrength;
        }
      }
    });
    Object.defineProperty(gameObject, 'bloomSteps', {
      get: function get() {
        return bloomSteps;
      },
      set: function set(value) {
        if (bloomSteps === value) {
          return;
        }
        bloomSteps = value;
        if (gameObject._bloom) {
          gameObject._bloom.steps = bloomSteps;
        }
      }
    });
    gameObject.bloomColor = null;
    AddClearEffectCallback(gameObject, 'bloomColor');
    return gameObject;
  };

  var AddBlurProperties = function AddBlurProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'blurColor')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var blurColor,
      blurQuality = 0,
      blurX = 1,
      blurY = 1,
      blurStrength = 1,
      blurSteps = 4;
    Object.defineProperty(gameObject, 'blurColor', {
      get: function get() {
        return blurColor;
      },
      set: function set(value) {
        if (blurColor === value) {
          return;
        }
        blurColor = value;
        if (blurColor === null || blurColor === false) {
          if (gameObject._blur) {
            fxFactory.remove(gameObject._blur);
            gameObject._blur = undefined;
            fxFactory.setPadding(0);
          }
        } else {
          if (!gameObject._blur) {
            gameObject._blur = fxFactory.addBlur(blurQuality, blurX, blurY, blurStrength, blurColor, blurSteps);
            fxFactory.setPadding(Math.max(blurX, blurY) + 1);
          }
          gameObject._blur.color = blurColor;
        }
      }
    });
    Object.defineProperty(gameObject, 'blurQuality', {
      get: function get() {
        return blurQuality;
      },
      set: function set(value) {
        if (blurQuality === value) {
          return;
        }
        blurQuality = value;
        if (gameObject._blur) {
          gameObject._blur.quality = blurQuality;
        }
      }
    });
    Object.defineProperty(gameObject, 'blurX', {
      get: function get() {
        return blurX;
      },
      set: function set(value) {
        if (blurX === value) {
          return;
        }
        blurX = value;
        if (gameObject._blur) {
          var offset = Math.max(blurX, blurY);
          fxFactory.setPadding(offset + 1);
          gameObject._blur.x = blurX;
        }
      }
    });
    Object.defineProperty(gameObject, 'blurY', {
      get: function get() {
        return blurY;
      },
      set: function set(value) {
        if (blurY === value) {
          return;
        }
        blurY = value;
        if (gameObject._blur) {
          var offset = Math.max(blurX, blurY);
          fxFactory.setPadding(offset + 1);
          gameObject._blur.y = blurY;
        }
      }
    });
    Object.defineProperty(gameObject, 'blurStrength', {
      get: function get() {
        return blurStrength;
      },
      set: function set(value) {
        if (blurStrength === value) {
          return;
        }
        blurStrength = value;
        if (gameObject._blur) {
          gameObject._blur.strength = blurStrength;
        }
      }
    });
    Object.defineProperty(gameObject, 'blurSteps', {
      get: function get() {
        return blurSteps;
      },
      set: function set(value) {
        if (blurSteps === value) {
          return;
        }
        blurSteps = value;
        if (gameObject._blur) {
          gameObject._blur.steps = blurSteps;
        }
      }
    });
    gameObject.blurColor = null;
    AddClearEffectCallback(gameObject, 'blurColor');
    return gameObject;
  };

  var AddBokehProperties = function AddBokehProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'bokehRadius')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var bokehRadius,
      bokehAmount = 1,
      bokehContrast = 0.2;
    Object.defineProperty(gameObject, 'bokehRadius', {
      get: function get() {
        return bokehRadius;
      },
      set: function set(value) {
        if (bokehRadius === value) {
          return;
        }
        bokehRadius = value;
        if (bokehRadius === null || bokehRadius === false) {
          if (gameObject._bokeh) {
            fxFactory.remove(gameObject._bokeh);
            gameObject._bokeh = undefined;
          }
        } else {
          if (!gameObject._bokeh) {
            gameObject._bokeh = fxFactory.addBokeh(bokehRadius, bokehAmount, bokehContrast);
          }
          gameObject._bokeh.radius = bokehRadius;
        }
      }
    });
    Object.defineProperty(gameObject, 'bokehAmount', {
      get: function get() {
        return bokehAmount;
      },
      set: function set(value) {
        if (bokehAmount === value) {
          return;
        }
        bokehAmount = value;
        if (gameObject._bokeh) {
          gameObject._bokeh.amount = bokehAmount;
        }
      }
    });
    Object.defineProperty(gameObject, 'bokehContrast', {
      get: function get() {
        return bokehContrast;
      },
      set: function set(value) {
        if (bokehContrast === value) {
          return;
        }
        bokehContrast = value;
        if (gameObject._bokeh) {
          gameObject._bokeh.contrast = bokehContrast;
        }
      }
    });
    gameObject.bokehRadius = null;
    AddClearEffectCallback(gameObject, 'bokehRadius');
    return gameObject;
  };

  var AddBrightnessProperties = function AddBrightnessProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'brightness', 1);
    return gameObject;
  };

  var AddBrownProperties = function AddBrownProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'brown');
    return gameObject;
  };

  var AddCircleProperties = function AddCircleProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'circleColor')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var circleColor,
      circleThickness = 8,
      circleBackgroundColor = 0x000000,
      circleBackgroundAlpha = 0.4,
      circleScale = 1,
      circleFeather = 0.005;
    Object.defineProperty(gameObject, 'circleColor', {
      get: function get() {
        return circleColor;
      },
      set: function set(value) {
        if (circleColor === value) {
          return;
        }
        circleColor = value;
        if (circleColor === null || circleColor === false) {
          if (gameObject._circle) {
            fxFactory.remove(gameObject._circle);
            gameObject._circle = undefined;
          }
        } else {
          if (!gameObject._circle) {
            gameObject._circle = fxFactory.addCircle(circleThickness, circleColor, circleBackgroundColor, circleScale, circleFeather);
            gameObject.circleBackgroundAlpha = circleBackgroundAlpha;
          }
          gameObject._circle.color = circleColor;
        }
      }
    });
    Object.defineProperty(gameObject, 'circleThickness', {
      get: function get() {
        return circleThickness;
      },
      set: function set(value) {
        if (circleThickness === value) {
          return;
        }
        circleThickness = value;
        if (gameObject._circle) {
          gameObject._circle.thickness = circleThickness;
        }
      }
    });
    Object.defineProperty(gameObject, 'circleBackgroundColor', {
      get: function get() {
        return circleBackgroundColor;
      },
      set: function set(value) {
        if (circleBackgroundColor === value) {
          return;
        }
        circleBackgroundColor = value;
        if (gameObject._circle) {
          gameObject._circle.backgroundColor = circleBackgroundColor;
        }
      }
    });
    Object.defineProperty(gameObject, 'circleBackgroundAlpha', {
      get: function get() {
        return circleBackgroundAlpha;
      },
      set: function set(value) {
        if (circleBackgroundAlpha === value) {
          return;
        }
        circleBackgroundAlpha = value;
        if (gameObject._circle) {
          gameObject._circle.glcolor2[3] = circleBackgroundAlpha;
        }
      }
    });
    Object.defineProperty(gameObject, 'circleScale', {
      get: function get() {
        return circleScale;
      },
      set: function set(value) {
        if (circleScale === value) {
          return;
        }
        circleScale = value;
        if (gameObject._circle) {
          gameObject._circle.scale = circleScale;
        }
      }
    });
    Object.defineProperty(gameObject, 'circleFeather', {
      get: function get() {
        return circleFeather;
      },
      set: function set(value) {
        if (circleFeather === value) {
          return;
        }
        circleFeather = value;
        if (gameObject._circle) {
          gameObject._circle.feather = circleFeather;
        }
      }
    });
    gameObject.circleColor = null;
    AddClearEffectCallback(gameObject, 'circleColor');
    return gameObject;
  };

  var AddContrastProperties = function AddContrastProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'contrast', 1);
    return gameObject;
  };

  var AddDesaturateProperties = function AddDesaturateProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'desaturate', 1);
    return gameObject;
  };

  var AddDesaturateLuminanceProperties = function AddDesaturateLuminanceProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'desaturateLuminance');
    return gameObject;
  };

  var AddDisplacementProperties = function AddDisplacementProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'displacementKey')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var displacementKey,
      displacementX = 0.005,
      displacementY = 0.005;
    Object.defineProperty(gameObject, 'displacementKey', {
      get: function get() {
        return displacementKey;
      },
      set: function set(value) {
        if (displacementKey === value) {
          return;
        }
        displacementKey = value;
        if (displacementKey === null || displacementKey === false) {
          if (gameObject._displacement) {
            fxFactory.remove(gameObject._displacement);
            gameObject._displacement = undefined;
          }
        } else {
          if (!gameObject._displacement) {
            gameObject._displacement = fxFactory.addDisplacement(displacementKey, displacementX, displacementY);
          }
          gameObject._displacement.setTexture(displacementKey);
        }
      }
    });
    Object.defineProperty(gameObject, 'displacementX', {
      get: function get() {
        return displacementX;
      },
      set: function set(value) {
        if (displacementX === value) {
          return;
        }
        displacementX = value;
        if (gameObject._displacement) {
          gameObject._displacement.x = displacementX;
        }
      }
    });
    Object.defineProperty(gameObject, 'displacementY', {
      get: function get() {
        return displacementY;
      },
      set: function set(value) {
        if (displacementY === value) {
          return;
        }
        displacementY = value;
        if (gameObject._displacement) {
          gameObject._displacement.y = displacementY;
        }
      }
    });
    gameObject.displacementKey = null;
    AddClearEffectCallback(gameObject, 'displacementKey');
    return gameObject;
  };

  var AddGlowProperties = function AddGlowProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'glowColor')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var glowColor,
      glowOuterStrength = 4,
      glowInnerStrength = 0;
    Object.defineProperty(gameObject, 'glowColor', {
      get: function get() {
        return glowColor;
      },
      set: function set(value) {
        if (glowColor === value) {
          return;
        }
        glowColor = value;
        if (glowColor === null || glowColor === false) {
          if (gameObject._glow) {
            fxFactory.remove(gameObject._glow);
            gameObject._glow = undefined;
            fxFactory.setPadding(0);
          }
        } else {
          if (!gameObject._glow) {
            gameObject._glow = fxFactory.addGlow(glowColor, glowOuterStrength, glowInnerStrength);
            fxFactory.setPadding(glowOuterStrength + 1);
          }
          gameObject._glow.color = glowColor;
        }
      }
    });
    Object.defineProperty(gameObject, 'glowOuterStrength', {
      get: function get() {
        return glowOuterStrength;
      },
      set: function set(value) {
        if (glowOuterStrength === value) {
          return;
        }
        glowOuterStrength = value;
        if (gameObject._glow) {
          fxFactory.setPadding(glowOuterStrength + 1);
          gameObject._glow.outerStrength = glowOuterStrength;
        }
      }
    });
    Object.defineProperty(gameObject, 'glowInnerStrength', {
      get: function get() {
        return glowInnerStrength;
      },
      set: function set(value) {
        if (glowInnerStrength === value) {
          return;
        }
        glowInnerStrength = value;
        if (gameObject._glow) {
          gameObject._glow.innerStrength = glowInnerStrength;
        }
      }
    });
    gameObject.glowColor = null;
    AddClearEffectCallback(gameObject, 'glowColor');
    return gameObject;
  };

  var AddGradientProperties = function AddGradientProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'gradientColor')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var gradientColor1,
      gradientColor2,
      gradientAlpha = 0.5,
      gradientFromX = 0,
      gradientFromY = 0,
      gradientToX = 0,
      gradientToY = 1,
      gradientSize = 0;
    Object.defineProperty(gameObject, 'gradientColor', {
      get: function get() {
        return [gradientColor1, gradientColor2];
      },
      set: function set(value) {
        var color1, color2;
        if (value === null || value === false) {
          color1 = null;
          color2 = null;
        } else {
          color1 = value[0];
          color2 = value[1];
        }
        if (gradientColor1 === color1 && gradientColor2 === color2) {
          return;
        }
        gradientColor1 = color1;
        gradientColor2 = color2;
        if (gradientColor1 === null || gradientColor1 === false) {
          if (gameObject._gradient) {
            fxFactory.remove(gameObject._gradient);
            gameObject._gradient = undefined;
          }
        } else {
          if (!gameObject._gradient) {
            gameObject._gradient = fxFactory.addGradient(gradientColor1, gradientColor2, gradientAlpha, gradientFromX, gradientFromY, gradientToX, gradientToY, gradientSize);
          }
          gameObject._gradient.color1 = gradientColor1;
          gameObject._gradient.color2 = gradientColor2;
        }
      }
    });
    Object.defineProperty(gameObject, 'gradientColor1', {
      get: function get() {
        return gradientColor1;
      },
      set: function set(value) {
        if (value === null || value === false) {
          gameObject.gradientColor = value;
          return;
        }
        if (gradientColor1 === value) {
          return;
        }
        gradientColor1 = value;
        if (gameObject._gradient) {
          gameObject._gradient.color1 = gradientColor1;
        }
      }
    });
    Object.defineProperty(gameObject, 'gradientColor2', {
      get: function get() {
        return gradientColor2;
      },
      set: function set(value) {
        if (value === null || value === false) {
          gameObject.gradientColor = value;
          return;
        }
        if (gradientColor2 === value) {
          return;
        }
        gradientColor2 = value;
        if (gameObject._gradient) {
          gameObject._gradient.color2 = gradientColor2;
        }
      }
    });
    Object.defineProperty(gameObject, 'gradientAlpha', {
      get: function get() {
        return gradientAlpha;
      },
      set: function set(value) {
        if (gradientAlpha === value) {
          return;
        }
        gradientAlpha = value;
        if (gameObject._gradient) {
          gameObject._gradient.alpha = gradientAlpha;
        }
      }
    });
    Object.defineProperty(gameObject, 'gradientFromX', {
      get: function get() {
        return gradientFromX;
      },
      set: function set(value) {
        if (gradientFromX === value) {
          return;
        }
        gradientFromX = value;
        if (gameObject._gradient) {
          gameObject._gradient.fromX = gradientFromX;
        }
      }
    });
    Object.defineProperty(gameObject, 'gradientFromY', {
      get: function get() {
        return gradientFromY;
      },
      set: function set(value) {
        if (gradientFromY === value) {
          return;
        }
        gradientFromY = value;
        if (gameObject._gradient) {
          gameObject._gradient.fromY = gradientFromY;
        }
      }
    });
    Object.defineProperty(gameObject, 'gradientToX', {
      get: function get() {
        return gradientToX;
      },
      set: function set(value) {
        if (gradientToX === value) {
          return;
        }
        gradientToX = value;
        if (gameObject._gradient) {
          gameObject._gradient.toX = gradientToX;
        }
      }
    });
    Object.defineProperty(gameObject, 'gradientToY', {
      get: function get() {
        return gradientToY;
      },
      set: function set(value) {
        if (gradientToY === value) {
          return;
        }
        gradientToY = value;
        if (gameObject._gradient) {
          gameObject._gradient.toY = gradientToY;
        }
      }
    });
    Object.defineProperty(gameObject, 'gradientSize', {
      get: function get() {
        return gradientSize;
      },
      set: function set(value) {
        if (gradientSize === value) {
          return;
        }
        gradientSize = value;
        if (gameObject._gradient) {
          gameObject._gradient.size = gradientSize;
        }
      }
    });
    gameObject.gradientColor = null;
    AddClearEffectCallback(gameObject, 'gradientColor');
    return gameObject;
  };

  var AddGrayscaleProperties = function AddGrayscaleProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'grayscale', 1);
    return gameObject;
  };

  var AddHueProperties = function AddHueProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'hue', 1);
    return gameObject;
  };

  var AddKodachromeProperties = function AddKodachromeProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'kodachrome');
    return gameObject;
  };

  var AddLSDProperties = function AddLSDProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'lsd');
    return gameObject;
  };

  var AddNegativeProperties = function AddNegativeProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'negative');
    return gameObject;
  };

  var AddPixelateProperties = function AddPixelateProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'pixelate')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var pixelate;
    Object.defineProperty(gameObject, 'pixelate', {
      get: function get() {
        return pixelate;
      },
      set: function set(value) {
        if (pixelate === value) {
          return;
        }
        pixelate = value;
        if (pixelate === null || pixelate === false) {
          if (gameObject._pixelateEffect) {
            fxFactory.remove(gameObject._pixelateEffect);
            gameObject._pixelateEffect = undefined;
          }
        } else {
          if (!gameObject._pixelateEffect) {
            gameObject._pixelateEffect = fxFactory.addPixelate();
          }
          gameObject._pixelateEffect.amount = pixelate;
        }
      }
    });
    gameObject.pixelate = null;
    AddClearEffectCallback(gameObject, 'pixelate');
    return gameObject;
  };

  var AddPolaroidProperties = function AddPolaroidProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'polaroid');
    return gameObject;
  };

  var AddRevealProperties = function AddRevealProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'revealLeft')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var revealLeft,
      revealRight,
      revealUp,
      revealDown,
      revealWidth = 0.1;
    var ClearRevealFlags = function ClearRevealFlags() {
      revealLeft = null;
      revealRight = null;
      revealUp = null;
      revealDown = null;
    };
    var RemoveEffect = function RemoveEffect(gameObject) {
      if (gameObject._revealEffect) {
        fxFactory.remove(gameObject._revealEffect);
        gameObject._revealEffect = undefined;
      }
    };
    Object.defineProperty(gameObject, 'revealLeft', {
      get: function get() {
        return revealLeft;
      },
      set: function set(value) {
        if (revealLeft === value) {
          return;
        }
        ClearRevealFlags();
        revealLeft = value;
        if (revealLeft === null || revealLeft === false) {
          RemoveEffect(gameObject);
        } else {
          if (!gameObject._revealEffect) {
            gameObject._revealEffect = fxFactory.addReveal(revealWidth, 0, 0);
          }
          gameObject._revealEffect.direction = 1;
          gameObject._revealEffect.axis = 0;
          gameObject._revealEffect.progress = revealLeft;
        }
      }
    });
    Object.defineProperty(gameObject, 'revealRight', {
      get: function get() {
        return revealRight;
      },
      set: function set(value) {
        if (revealRight === value) {
          return;
        }
        ClearRevealFlags();
        revealRight = value;
        if (revealRight === null || revealRight === false) {
          RemoveEffect(gameObject);
        } else {
          if (!gameObject._revealEffect) {
            gameObject._revealEffect = fxFactory.addReveal(revealWidth, 0, 0);
          }
          gameObject._revealEffect.direction = 0;
          gameObject._revealEffect.axis = 0;
          gameObject._revealEffect.progress = revealRight;
        }
      }
    });
    Object.defineProperty(gameObject, 'revealUp', {
      get: function get() {
        return revealUp;
      },
      set: function set(value) {
        if (revealUp === value) {
          return;
        }
        ClearRevealFlags();
        revealUp = value;
        if (revealUp === null || revealUp === false) {
          RemoveEffect(gameObject);
        } else {
          if (!gameObject._revealEffect) {
            gameObject._revealEffect = fxFactory.addReveal(revealWidth, 0, 0);
          }
          gameObject._revealEffect.direction = 1;
          gameObject._revealEffect.axis = 1;
          gameObject._revealEffect.progress = revealUp;
        }
      }
    });
    Object.defineProperty(gameObject, 'revealDown', {
      get: function get() {
        return revealDown;
      },
      set: function set(value) {
        if (revealDown === value) {
          return;
        }
        ClearRevealFlags();
        revealDown = value;
        if (revealDown === null || revealDown === false) {
          RemoveEffect(gameObject);
        } else {
          if (!gameObject._revealEffect) {
            gameObject._revealEffect = fxFactory.addReveal(revealWidth, 0, 0);
          }
          gameObject._revealEffect.direction = 0;
          gameObject._revealEffect.axis = 1;
          gameObject._revealEffect.progress = revealDown;
        }
      }
    });
    Object.defineProperty(gameObject, 'revealWidth', {
      get: function get() {
        return revealWidth;
      },
      set: function set(value) {
        if (revealWidth === value) {
          return;
        }
        revealWidth = value;
        if (gameObject._revealEffect) {
          gameObject._revealEffect.wipeWidth = revealWidth;
        }
      }
    });
    gameObject.revealLeft = null;
    AddClearEffectCallback(gameObject, 'revealLeft');
    AddClearEffectCallback(gameObject, 'revealRight');
    AddClearEffectCallback(gameObject, 'revealUp');
    AddClearEffectCallback(gameObject, 'revealDown');
    return gameObject;
  };

  var AddSaturateProperties = function AddSaturateProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'saturate', 1);
    return gameObject;
  };

  var AddSepiaProperties = function AddSepiaProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'sepia');
    return gameObject;
  };

  var AddShadowProperties = function AddShadowProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'shadowColor')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var shadowColor,
      shadowX = 0,
      shadowY = 0,
      shadowDecay = 0.1,
      shadowPower = 1,
      shadowSamples = 6,
      shadowIntensity = 1;
    Object.defineProperty(gameObject, 'shadowColor', {
      get: function get() {
        return shadowColor;
      },
      set: function set(value) {
        if (shadowColor === value) {
          return;
        }
        shadowColor = value;
        if (shadowColor === null || shadowColor === false) {
          if (gameObject._shadow) {
            fxFactory.remove(gameObject._shadow);
            gameObject._shadow = undefined;
          }
        } else {
          if (!gameObject._shadow) {
            gameObject._shadow = fxFactory.addShadow(shadowX, shadowY, shadowDecay, shadowPower, shadowColor, shadowSamples, shadowIntensity);
          }
          gameObject._shadow.color = shadowColor;
        }
      }
    });
    Object.defineProperty(gameObject, 'shadowX', {
      get: function get() {
        return shadowX;
      },
      set: function set(value) {
        if (shadowX === value) {
          return;
        }
        shadowX = value;
        if (gameObject._shadow) {
          gameObject._shadow.x = shadowX;
        }
      }
    });
    Object.defineProperty(gameObject, 'shadowY', {
      get: function get() {
        return shadowY;
      },
      set: function set(value) {
        if (shadowY === value) {
          return;
        }
        shadowY = value;
        if (gameObject._shadow) {
          gameObject._shadow.y = shadowY;
        }
      }
    });
    Object.defineProperty(gameObject, 'decay', {
      get: function get() {
        return shadowDecay;
      },
      set: function set(value) {
        if (shadowDecay === value) {
          return;
        }
        shadowDecay = value;
        if (gameObject._shadow) {
          gameObject._shadow.decay = shadowDecay;
        }
      }
    });
    Object.defineProperty(gameObject, 'shadowPower', {
      get: function get() {
        return shadowPower;
      },
      set: function set(value) {
        if (shadowPower === value) {
          return;
        }
        shadowPower = value;
        if (gameObject._shadow) {
          gameObject._shadow.power = shadowPower;
        }
      }
    });
    Object.defineProperty(gameObject, 'shadowSamples', {
      get: function get() {
        return shadowSamples;
      },
      set: function set(value) {
        if (shadowSamples === value) {
          return;
        }
        shadowSamples = value;
        if (gameObject._shadow) {
          gameObject._shadow.samples = shadowSamples;
        }
      }
    });
    Object.defineProperty(gameObject, 'shadowIntensity', {
      get: function get() {
        return shadowIntensity;
      },
      set: function set(value) {
        if (shadowIntensity === value) {
          return;
        }
        shadowIntensity = value;
        if (gameObject._shadow) {
          gameObject._shadow.intensity = shadowIntensity;
        }
      }
    });
    gameObject.shadowColor = null;
    AddClearEffectCallback(gameObject, 'shadowColor');
    return gameObject;
  };

  var AddShiftToBGRProperties = function AddShiftToBGRProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'shiftToBGR');
    return gameObject;
  };

  var AddShineProperties = function AddShineProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'shineSpeed')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var shineSpeed,
      shineLineWidth = 0.5,
      shineGradient = 3;
    Object.defineProperty(gameObject, 'shineSpeed', {
      get: function get() {
        return shineSpeed;
      },
      set: function set(value) {
        if (shineSpeed === value) {
          return;
        }
        shineSpeed = value;
        if (shineSpeed === null || shineSpeed === false) {
          if (gameObject._shine) {
            fxFactory.remove(gameObject._shine);
            gameObject._shine = undefined;
          }
        } else {
          if (!gameObject._shine) {
            gameObject._shine = fxFactory.addShine(shineSpeed, shineLineWidth, shineGradient);
          }
          gameObject._shine.speed = shineSpeed;
        }
      }
    });
    Object.defineProperty(gameObject, 'shineLineWidth', {
      get: function get() {
        return shineLineWidth;
      },
      set: function set(value) {
        if (shineLineWidth === value) {
          return;
        }
        shineLineWidth = value;
        if (gameObject._shine) {
          gameObject._shine.lineWidth = shineLineWidth;
        }
      }
    });
    Object.defineProperty(gameObject, 'shineGradient', {
      get: function get() {
        return shineGradient;
      },
      set: function set(value) {
        if (shineGradient === value) {
          return;
        }
        shineGradient = value;
        if (gameObject._shine) {
          gameObject._shine.gradient = shineGradient;
        }
      }
    });
    gameObject.shineSpeed = null;
    AddClearEffectCallback(gameObject, 'shineSpeed');
    return gameObject;
  };

  var AddTechnicolorProperties = function AddTechnicolorProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'technicolor');
    return gameObject;
  };

  var AddTiltShiftProperties = function AddTiltShiftProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'tiltShiftRadius')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var tiltShiftRadius,
      tiltShiftAmount = 1,
      tiltShiftContrast = 0.2,
      tiltShiftBlurX = 1,
      tiltShiftBlurY = 1,
      tiltShiftStrength = 1;
    Object.defineProperty(gameObject, 'tiltShiftRadius', {
      get: function get() {
        return tiltShiftRadius;
      },
      set: function set(value) {
        if (tiltShiftRadius === value) {
          return;
        }
        tiltShiftRadius = value;
        if (tiltShiftRadius === null || tiltShiftRadius === false) {
          if (gameObject._tiltShift) {
            fxFactory.remove(gameObject._tiltShift);
            gameObject._tiltShift = undefined;
          }
        } else {
          if (!gameObject._tiltShift) {
            gameObject._tiltShift = fxFactory.addTiltShift(tiltShiftRadius, tiltShiftAmount, tiltShiftContrast, tiltShiftBlurX, tiltShiftBlurY, tiltShiftStrength);
          }
          gameObject._tiltShift.radius = tiltShiftRadius;
        }
      }
    });
    Object.defineProperty(gameObject, 'tiltShiftAmount', {
      get: function get() {
        return tiltShiftAmount;
      },
      set: function set(value) {
        if (tiltShiftAmount === value) {
          return;
        }
        tiltShiftAmount = value;
        if (gameObject._tiltShift) {
          gameObject._tiltShift.amount = tiltShiftAmount;
        }
      }
    });
    Object.defineProperty(gameObject, 'tiltShiftContrast', {
      get: function get() {
        return tiltShiftContrast;
      },
      set: function set(value) {
        if (tiltShiftContrast === value) {
          return;
        }
        tiltShiftContrast = value;
        if (gameObject._tiltShift) {
          gameObject._tiltShift.contrast = tiltShiftContrast;
        }
      }
    });
    Object.defineProperty(gameObject, 'tiltShiftBlurX', {
      get: function get() {
        return tiltShiftBlurX;
      },
      set: function set(value) {
        if (tiltShiftBlurX === value) {
          return;
        }
        tiltShiftBlurX = value;
        if (gameObject._tiltShift) {
          gameObject._tiltShift.blurX = tiltShiftBlurX;
        }
      }
    });
    Object.defineProperty(gameObject, 'tiltShiftBlurY', {
      get: function get() {
        return tiltShiftBlurY;
      },
      set: function set(value) {
        if (tiltShiftBlurY === value) {
          return;
        }
        tiltShiftBlurY = value;
        if (gameObject._tiltShift) {
          gameObject._tiltShift.blurY = tiltShiftBlurY;
        }
      }
    });
    Object.defineProperty(gameObject, 'tiltShiftStrength', {
      get: function get() {
        return tiltShiftStrength;
      },
      set: function set(value) {
        if (tiltShiftStrength === value) {
          return;
        }
        tiltShiftStrength = value;
        if (gameObject._tiltShift) {
          gameObject._tiltShift.strength = tiltShiftStrength;
        }
      }
    });
    gameObject.tiltShiftRadius = null;
    AddClearEffectCallback(gameObject, 'tiltShiftRadius');
    return gameObject;
  };

  var AddVignetteProperties = function AddVignetteProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'vignetteColor')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var vignetteRadius,
      vignetteX = 0.5,
      vignetteY = 0.5,
      vignetteStrength = 0.5;
    Object.defineProperty(gameObject, 'vignetteRadius', {
      get: function get() {
        return vignetteRadius;
      },
      set: function set(value) {
        if (vignetteRadius === value) {
          return;
        }
        vignetteRadius = value;
        if (vignetteRadius === null || vignetteRadius === false) {
          if (gameObject._vignette) {
            fxFactory.remove(gameObject._vignette);
            gameObject._vignette = undefined;
          }
        } else {
          if (!gameObject._vignette) {
            gameObject._vignette = fxFactory.addVignette(vignetteX, vignetteY, vignetteRadius, vignetteStrength);
          }
          gameObject._vignette.radius = vignetteRadius;
        }
      }
    });
    Object.defineProperty(gameObject, 'vignetteX', {
      get: function get() {
        return vignetteX;
      },
      set: function set(value) {
        if (vignetteX === value) {
          return;
        }
        vignetteX = value;
        if (gameObject._vignette) {
          gameObject._vignette.x = vignetteX;
        }
      }
    });
    Object.defineProperty(gameObject, 'vignetteY', {
      get: function get() {
        return vignetteY;
      },
      set: function set(value) {
        if (vignetteY === value) {
          return;
        }
        vignetteY = value;
        if (gameObject._vignette) {
          gameObject._vignette.y = vignetteY;
        }
      }
    });
    Object.defineProperty(gameObject, 'vignetteStrength', {
      get: function get() {
        return vignetteStrength;
      },
      set: function set(value) {
        if (vignetteStrength === value) {
          return;
        }
        vignetteStrength = value;
        if (gameObject._vignette) {
          gameObject._vignette.strength = vignetteStrength;
        }
      }
    });
    gameObject.vignetteRadius = null;
    AddClearEffectCallback(gameObject, 'vignetteRadius');
    return gameObject;
  };

  var AddVintagePinholeProperties = function AddVintagePinholeProperties(gameObject) {
    AddColorMatrixEffectPropertiesBase(gameObject, 'vintagePinhole');
    return gameObject;
  };

  var AddWipeProperties = function AddWipeProperties(gameObject) {
    // Don't attach properties again
    if (HasProperty(gameObject, 'wipeLeft')) {
      return gameObject;
    }
    var fxFactory = GetFXFactory(gameObject);
    if (!fxFactory) {
      return gameObject;
    }
    var wipeLeft,
      wipeRight,
      wipeUp,
      wipeDown,
      wipeWidth = 0.1;
    var ClearWipeFlags = function ClearWipeFlags() {
      wipeLeft = null;
      wipeRight = null;
      wipeUp = null;
      wipeDown = null;
    };
    var RemoveEffect = function RemoveEffect(gameObject) {
      if (gameObject._wipeEffect) {
        fxFactory.remove(gameObject._wipeEffect);
        gameObject._wipeEffect = undefined;
      }
    };
    Object.defineProperty(gameObject, 'wipeLeft', {
      get: function get() {
        return wipeLeft;
      },
      set: function set(value) {
        if (wipeLeft === value) {
          return;
        }
        ClearWipeFlags();
        wipeLeft = value;
        if (wipeLeft === null || wipeLeft === false) {
          RemoveEffect(gameObject);
        } else {
          if (!gameObject._wipeEffect) {
            gameObject._wipeEffect = fxFactory.addWipe(wipeWidth, 0, 0);
          }
          gameObject._wipeEffect.direction = 1;
          gameObject._wipeEffect.axis = 0;
          gameObject._wipeEffect.progress = wipeLeft;
        }
      }
    });
    Object.defineProperty(gameObject, 'wipeRight', {
      get: function get() {
        return wipeRight;
      },
      set: function set(value) {
        if (wipeRight === value) {
          return;
        }
        ClearWipeFlags();
        wipeRight = value;
        if (wipeRight === null || wipeRight === false) {
          RemoveEffect(gameObject);
        } else {
          if (!gameObject._wipeEffect) {
            gameObject._wipeEffect = fxFactory.addWipe(wipeWidth, 0, 0);
          }
          gameObject._wipeEffect.direction = 0;
          gameObject._wipeEffect.axis = 0;
          gameObject._wipeEffect.progress = wipeRight;
        }
      }
    });
    Object.defineProperty(gameObject, 'wipeUp', {
      get: function get() {
        return wipeUp;
      },
      set: function set(value) {
        if (wipeUp === value) {
          return;
        }
        ClearWipeFlags();
        wipeUp = value;
        if (wipeUp === null || wipeUp === false) {
          RemoveEffect(gameObject);
        } else {
          if (!gameObject._wipeEffect) {
            gameObject._wipeEffect = fxFactory.addWipe(wipeWidth, 0, 0);
          }
          gameObject._wipeEffect.direction = 1;
          gameObject._wipeEffect.axis = 1;
          gameObject._wipeEffect.progress = wipeUp;
        }
      }
    });
    Object.defineProperty(gameObject, 'wipeDown', {
      get: function get() {
        return wipeDown;
      },
      set: function set(value) {
        if (wipeDown === value) {
          return;
        }
        ClearWipeFlags();
        wipeDown = value;
        if (wipeDown === null || wipeDown === false) {
          RemoveEffect(gameObject);
        } else {
          if (!gameObject._wipeEffect) {
            gameObject._wipeEffect = fxFactory.addWipe(wipeWidth, 0, 0);
          }
          gameObject._wipeEffect.direction = 0;
          gameObject._wipeEffect.axis = 1;
          gameObject._wipeEffect.progress = wipeDown;
        }
      }
    });
    Object.defineProperty(gameObject, 'wipeWidth', {
      get: function get() {
        return wipeWidth;
      },
      set: function set(value) {
        if (wipeWidth === value) {
          return;
        }
        wipeWidth = value;
        if (gameObject._wipeEffect) {
          gameObject._wipeEffect.wipeWidth = wipeWidth;
        }
      }
    });
    gameObject.wipeLeft = null;
    AddClearEffectCallback(gameObject, 'wipeLeft');
    AddClearEffectCallback(gameObject, 'wipeRight');
    AddClearEffectCallback(gameObject, 'wipeUp');
    AddClearEffectCallback(gameObject, 'wipeDown');
    return gameObject;
  };

  var EffectMap = {
    barrel: AddBarrelProperties,
    blackWhite: AddBlackWhiteProperties,
    bloom: AddBloomProperties,
    blur: AddBlurProperties,
    bokeh: AddBokehProperties,
    brightness: AddBrightnessProperties,
    brown: AddBrownProperties,
    circle: AddCircleProperties,
    contrast: AddContrastProperties,
    desaturate: AddDesaturateProperties,
    desaturateLuminance: AddDesaturateLuminanceProperties,
    displacement: AddDisplacementProperties,
    glow: AddGlowProperties,
    gradient: AddGradientProperties,
    grayscale: AddGrayscaleProperties,
    hue: AddHueProperties,
    kodachrome: AddKodachromeProperties,
    lsd: AddLSDProperties,
    negative: AddNegativeProperties,
    pixelate: AddPixelateProperties,
    polaroid: AddPolaroidProperties,
    reveal: AddRevealProperties,
    saturate: AddSaturateProperties,
    sepia: AddSepiaProperties,
    shadow: AddShadowProperties,
    shiftToBGR: AddShiftToBGRProperties,
    shine: AddShineProperties,
    technicolor: AddTechnicolorProperties,
    tiltShift: AddTiltShiftProperties,
    vignette: AddVignetteProperties,
    vintagePinhole: AddVintagePinholeProperties,
    wipe: AddWipeProperties
  };

  var AddEffectProperties = function AddEffectProperties(gameObject, config) {
    if (config === undefined) {
      config = true;
    } else if (typeof config === 'string') {
      config = {
        config: true
      };
    } else if (Array.isArray(config)) {
      var nameList = config;
      var config = {};
      for (var i = 0, cnt = nameList.length; i < cnt; i++) {
        config[nameList[i]] = true;
      }
    }
    if (config === true) {
      // Enable all effect properties
      for (var name in EffectMap) {
        EffectMap[name](gameObject);
      }
    } else {
      for (var name in config) {
        if (config[name] && EffectMap[name]) {
          EffectMap[name](gameObject);
        }
      }
    }
    return gameObject;
  };

  var Style$1 = /*#__PURE__*/function (_ComponentBase) {
    _inherits(Style, _ComponentBase);
    var _super = _createSuper(Style);
    function Style(gameObject, style) {
      var _this;
      _classCallCheck(this, Style);
      _this = _super.call(this, gameObject);
      // this.parent = gameObject;

      return _possibleConstructorReturn(_this, new Proxy(_assertThisInitialized(_this), _assertThisInitialized(_this)));
    }
    _createClass(Style, [{
      key: "get",
      value: function get(target, prop) {
        if (HasProperty(target, prop)) {
          return target[prop];
        }
        var gameObject = target.parent;
        if (HasProperty(gameObject, prop)) {
          return gameObject[prop];
        }
      }
    }, {
      key: "set",
      value: function set(target, prop, value) {
        if (HasProperty(target, prop)) {
          target[prop] = value;
        } else if (HasProperty(target.parent, prop)) {
          target.parent[prop] = value;
        }
        return true;
      }
    }, {
      key: "key",
      get: function get() {
        return this.parent.texture.key;
      },
      set: function set(value) {
        this.parent.setTexture(value, this.frame);
      }
    }, {
      key: "frame",
      get: function get() {
        return this.parent.frame.name;
      },
      set: function set(value) {
        this.parent.setFrame(value);
      }
    }, {
      key: "leftWidth",
      get: function get() {
        return this.parent.leftWidth;
      },
      set: function set(value) {
        var gameObject = this.parent;
        parent.setSlices(gameObject.width, gameObject.height, value, gameObject.rightWidth, gameObject.topHeight, gameObject.bottomHeight);
      }
    }, {
      key: "rightWidth",
      get: function get() {
        return this.parent.rightWidth;
      },
      set: function set(value) {
        var gameObject = this.parent;
        parent.setSlices(gameObject.width, gameObject.height, gameObject.leftWidth, value, gameObject.topHeight, gameObject.bottomHeight);
      }
    }, {
      key: "topHeight",
      get: function get() {
        return this.parent.topHeight;
      },
      set: function set(value) {
        var gameObject = this.parent;
        parent.setSlices(gameObject.width, gameObject.height, gameObject.leftWidth, gameObject.rightWidth, value, gameObject.bottomHeight);
      }
    }, {
      key: "bottomHeight",
      get: function get() {
        return this.parent.bottomHeight;
      },
      set: function set(value) {
        var gameObject = this.parent;
        parent.setSlices(gameObject.width, gameObject.height, gameObject.leftWidth, gameObject.rightWidth, gameObject.topHeight, value);
      }
    }]);
    return Style;
  }(ComponentBase);

  var PhaserNineSlice = Phaser.GameObjects.NineSlice;
  var GetValue$l = Phaser.Utils.Objects.GetValue;
  var StatesNineSlice = /*#__PURE__*/function (_PhaserNineSlice) {
    _inherits(StatesNineSlice, _PhaserNineSlice);
    var _super = _createSuper(StatesNineSlice);
    function StatesNineSlice(scene, config) {
      var _this;
      _classCallCheck(this, StatesNineSlice);
      if (config === undefined) {
        config = {};
      }
      var x = GetValue$l(config, 'x', 0);
      var y = GetValue$l(config, 'y', 0);
      var key = GetValue$l(config, 'key', null);
      var frame = GetValue$l(config, 'frame', null);
      var width = GetValue$l(config, 'width', 0);
      var height = GetValue$l(config, 'height', 0);
      var leftWidth = GetValue$l(config, 'leftWidth', 0);
      var rightWidth = GetValue$l(config, 'rightWidth', 0);
      var topHeight = GetValue$l(config, 'topHeight', 0);
      var bottomHeight = GetValue$l(config, 'bottomHeight', 0);
      _this = _super.call(this, scene, x, y, key, frame, width, height, leftWidth, rightWidth, topHeight, bottomHeight);
      _this.type = 'rexStatesNineSlice';
      var effectConfig = GetValue$l(config, 'effects', true);
      if (effectConfig) {
        AddEffectProperties(_assertThisInitialized(_this), effectConfig);
      }
      _this.style = new Style$1(_assertThisInitialized(_this), config);
      config.style = _this.style;
      _this.addStyleManager(config);
      delete config.style;
      return _this;
    }
    return _createClass(StatesNineSlice);
  }(PhaserNineSlice);
  Object.assign(StatesNineSlice.prototype, HelperMethods);

  var Style = /*#__PURE__*/function (_ComponentBase) {
    _inherits(Style, _ComponentBase);
    var _super = _createSuper(Style);
    function Style(gameObject, style) {
      var _this;
      _classCallCheck(this, Style);
      _this = _super.call(this, gameObject);
      // this.parent = gameObject;

      return _possibleConstructorReturn(_this, new Proxy(_assertThisInitialized(_this), _assertThisInitialized(_this)));
    }
    _createClass(Style, [{
      key: "get",
      value: function get(target, prop) {
        if (HasProperty(target, prop)) {
          return target[prop];
        }
        var gameObject = target.parent;
        if (HasProperty(gameObject, prop)) {
          return gameObject[prop];
        }
      }
    }, {
      key: "set",
      value: function set(target, prop, value) {
        if (HasProperty(target, prop)) {
          target[prop] = value;
        } else if (HasProperty(target.parent, prop)) {
          target.parent[prop] = value;
        }
        return true;
      }
    }, {
      key: "key",
      get: function get() {
        return this.parent.texture.key;
      },
      set: function set(value) {
        this.parent.setTexture(value, this.frame);
      }
    }, {
      key: "frame",
      get: function get() {
        return this.parent.frame.name;
      },
      set: function set(value) {
        this.parent.setFrame(value);
      }
    }, {
      key: "scale",
      get: function get() {
        return this.parent.scaleX;
      },
      set: function set(value) {
        this.parent.setScale(value);
      }
    }]);
    return Style;
  }(ComponentBase);

  var PhaserImage = Phaser.GameObjects.Image;
  var GetValue$k = Phaser.Utils.Objects.GetValue;
  var StatesImage = /*#__PURE__*/function (_PhaserImage) {
    _inherits(StatesImage, _PhaserImage);
    var _super = _createSuper(StatesImage);
    function StatesImage(scene, config) {
      var _this;
      _classCallCheck(this, StatesImage);
      if (config === undefined) {
        config = {};
      }
      var x = GetValue$k(config, 'x', 0);
      var y = GetValue$k(config, 'y', 0);
      var key = GetValue$k(config, 'key', '');
      var frame = GetValue$k(config, 'frame', undefined);
      _this = _super.call(this, scene, x, y, key, frame);
      _this.type = 'rexStatesImage';
      var effectConfig = GetValue$k(config, 'effects', true);
      if (effectConfig) {
        AddEffectProperties(_assertThisInitialized(_this), effectConfig);
      }
      _this.style = new Style(_assertThisInitialized(_this), config);
      config.style = _this.style;
      _this.addStyleManager(config);
      delete config.style;
      return _this;
    }
    return _createClass(StatesImage);
  }(PhaserImage);
  Object.assign(StatesImage.prototype, HelperMethods);

  var SetGetFrameNameCallback = function SetGetFrameNameCallback(callback) {
    if (callback === undefined) {
      callback = DefaultGetFrameNameCallback;
    }
    this.getFrameNameCallback = callback;
    return this;
  };
  var DefaultGetFrameNameCallback = function DefaultGetFrameNameCallback(colIndex, rowIndex, baseFrameName) {
    if (baseFrameName === '__BASE') {
      return "".concat(colIndex, ",").concat(rowIndex);
    } else {
      return "".concat(baseFrameName, "_").concat(colIndex, ",").concat(rowIndex);
    }
  };

  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2018 Photon Storm Ltd.
   * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
   */

  /**
   * This is a slightly modified version of jQuery.isPlainObject.
   * A plain object is an object whose internal class property is [object Object].
   *
   * @function Phaser.Utils.Objects.IsPlainObject
   * @since 3.0.0
   *
   * @param {object} obj - The object to inspect.
   *
   * @return {boolean} `true` if the object is plain, otherwise `false`.
   */
  var IsPlainObject$3 = function IsPlainObject(obj) {
    // Not plain objects:
    // - Any object or value whose internal [[Class]] property is not "[object Object]"
    // - DOM nodes
    // - window
    if (_typeof(obj) !== 'object' || obj.nodeType || obj === obj.window) {
      return false;
    }

    // Support: Firefox <20
    // The try/catch suppresses exceptions thrown when attempting to access
    // the "constructor" property of certain host objects, ie. |window.location|
    // https://bugzilla.mozilla.org/show_bug.cgi?id=814622
    try {
      if (obj.constructor && !{}.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
        return false;
      }
    } catch (e) {
      return false;
    }

    // If the function hasn't returned already, we're confident that
    // |obj| is a plain object, created by {} or constructed with new Object
    return true;
  };

  var DeepClone = function DeepClone(inObject) {
    var outObject;
    var value;
    var key;
    if (inObject == null || _typeof(inObject) !== 'object') {
      //  inObject is not an object
      return inObject;
    }

    //  Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {};
    if (IsPlainObject$3(inObject)) {
      for (key in inObject) {
        value = inObject[key];

        //  Recursively (deep) copy for nested objects, including arrays
        outObject[key] = DeepClone(value);
      }
    } else {
      outObject = inObject;
    }
    return outObject;
  };

  var SetBaseTexture = function SetBaseTexture(key, baseFrameName, columns, rows) {
    if (Array.isArray(baseFrameName)) {
      rows = columns;
      columns = baseFrameName;
      baseFrameName = undefined;
    }
    if (baseFrameName == null) {
      baseFrameName = '__BASE';
    }
    if (typeof columns === 'number' && arguments.length >= 6) {
      columns = [arguments[2], undefined, arguments[3]];
      rows = [arguments[4], undefined, arguments[5]];
    } else {
      columns = DeepClone(columns);
      rows = DeepClone(rows);
    }
    this.textureKey = key;
    this.baseFrameName = baseFrameName;
    this.columns.data = columns;
    this.columns.count = columns ? columns.length : 0;
    this.columns.stretch = 0;
    this.columns.minWidth = 0;
    this.columns.scale = 1;
    this.rows.data = rows;
    this.rows.count = rows ? rows.length : 0;
    this.rows.stretch = 0;
    this.rows.minHeight = 0;
    this.rows.scale = 1;
    var texture = this.scene.sys.textures.get(key);
    if (!texture) {
      this.clear();
      return this;
    }
    if (!columns || !rows) {
      this.clear();
      return this;
    }

    // Get remainder width/height for unknown width/height
    var baseFrame = texture.get(baseFrameName);
    var remainderTextureWidth = baseFrame.width;
    var unknownColumnWidthCount = 0;
    for (var i = 0, cnt = columns.length; i < cnt; i++) {
      if (columns[i] === undefined) {
        unknownColumnWidthCount++;
      } else if (typeof columns[i] === 'number') {
        remainderTextureWidth -= columns[i];
      } else {
        remainderTextureWidth -= columns[i].width;
      }
    }
    var unknownColumnWidth = remainderTextureWidth / unknownColumnWidthCount;
    var remainderTextureHeight = baseFrame.height;
    var unknownRowHeightCount = 0;
    for (var i = 0, cnt = rows.length; i < cnt; i++) {
      if (rows[i] === undefined) {
        unknownRowHeightCount++;
      } else if (typeof rows[i] === 'number') {
        remainderTextureHeight -= rows[i];
      } else {
        remainderTextureHeight -= rows[i].width;
      }
    }
    var unknownRowHeight = remainderTextureHeight / unknownRowHeightCount;
    var row, col, rowHeight, colWidth, frameName;
    var offsetX = 0,
      offsetY = 0;
    for (var j = 0, jcnt = rows.length; j < jcnt; j++) {
      // Unknown height
      if (rows[j] === undefined) {
        rows[j] = unknownRowHeight;
      }
      if (typeof rows[j] === 'number') {
        rows[j] = {
          height: rows[j],
          stretch: j % 2
        };
      }
      row = rows[j];
      rowHeight = row.height;
      this.rows.stretch += row.stretch | 0;
      this.rows.minHeight += row.stretch > 0 ? 0 : rowHeight;
      offsetX = 0;
      for (var i = 0, icnt = columns.length; i < icnt; i++) {
        // Unknown width
        if (columns[i] === undefined) {
          columns[i] = unknownColumnWidth;
        }
        if (typeof columns[i] === 'number') {
          columns[i] = {
            width: columns[i],
            stretch: i % 2
          };
        }
        col = columns[i];
        colWidth = col.width;
        if (j === 0) {
          this.columns.stretch += col.stretch | 0;
          this.columns.minWidth += col.stretch > 0 ? 0 : colWidth;
        }
        if (colWidth >= 1 && rowHeight >= 1) {
          frameName = this.getFrameNameCallback(i, j, baseFrameName);
          var frameNameType = _typeof(frameName);
          if (frameNameType === 'string' || frameNameType === 'number') {
            texture.add(frameName, 0, offsetX + baseFrame.cutX, offsetY + baseFrame.cutY, colWidth, rowHeight);
            // Do nothing if frameName is existed
          }
        }
        offsetX += colWidth;
      }
      offsetY += rowHeight;
    }
    this.updateTexture();
    return this;
  };

  var UpdateTexture = function UpdateTexture() {
    this.clear();
    if (this.textureKey === undefined) {
      return this;
    }
    var texture = this.scene.sys.textures.get(this.textureKey);
    if (!texture) {
      return this;
    }
    var minWidth = this.columns.minWidth * this.maxFixedPartScaleX; // Fixed-part width
    var minHeight = this.rows.minHeight * this.maxFixedPartScaleY; // Fixed-part height
    var stretchWidth = this.width - minWidth;
    var stretchHeight = this.height - minHeight;
    var fixedPartScaleX = stretchWidth >= 0 ? this.maxFixedPartScaleX : this.width / minWidth;
    var fixedPartScaleY = stretchHeight >= 0 ? this.maxFixedPartScaleY : this.height / minHeight;
    if (this.preserveRatio) {
      var minScale = Math.min(fixedPartScaleX, fixedPartScaleY);
      if (fixedPartScaleX > minScale) {
        var compensationWidth = (fixedPartScaleX - minScale) * minWidth;
        if (stretchWidth >= 0) {
          stretchWidth += compensationWidth;
        } else {
          stretchWidth = compensationWidth;
        }
        fixedPartScaleX = minScale;
      }
      if (fixedPartScaleY > minScale) {
        var compensationHeight = (fixedPartScaleY - minScale) * minHeight;
        if (stretchHeight >= 0) {
          stretchHeight += compensationHeight;
        } else {
          stretchHeight = compensationHeight;
        }
        fixedPartScaleY = minScale;
      }
    }
    this.columns.scale = fixedPartScaleX;
    this.rows.scale = fixedPartScaleY;
    var proportionWidth;
    if (stretchWidth > 0) {
      proportionWidth = this.columns.stretch > 0 ? stretchWidth / this.columns.stretch : 0;
    } else {
      proportionWidth = 0;
    }
    var proportionHeight;
    if (stretchHeight > 0) {
      proportionHeight = this.rows.stretch > 0 ? stretchHeight / this.rows.stretch : 0;
    } else {
      proportionHeight = 0;
    }
    var frameName, col, row, colWidth, rowHeight;
    var offsetX = 0,
      offsetY = 0;
    var imageType;
    this._beginDraw();
    for (var j = 0, jcnt = this.rows.count; j < jcnt; j++) {
      row = this.rows.data[j];
      rowHeight = row.stretch === 0 ? row.height * fixedPartScaleY : proportionHeight * row.stretch;
      offsetX = 0;
      for (var i = 0, icnt = this.columns.count; i < icnt; i++) {
        col = this.columns.data[i];
        colWidth = col.stretch === 0 ? col.width * fixedPartScaleX : proportionWidth * col.stretch;
        frameName = this.getFrameNameCallback(i, j, this.baseFrameName);
        if (texture.has(frameName) && colWidth > 0 && rowHeight > 0) {
          if (row.stretch === 0 && col.stretch === 0) {
            // Fixed parts
            imageType = 0; // Draw image
          } else {
            // Stretchable parts
            if (this.getStretchMode(i, j) === 0) {
              // Scaled image
              imageType = 0; // Draw scaled image
            } else {
              // Repeat tile-sprite
              imageType = 1; // Draw tile-sprite
            }
          }

          if (imageType === 0) {
            this._drawImage(this.textureKey, frameName, offsetX, offsetY, colWidth, rowHeight);
          } else {
            this._drawTileSprite(this.textureKey, frameName, offsetX, offsetY, colWidth, rowHeight);
          }
        }
        offsetX += colWidth;
      }
      offsetY += rowHeight;
    }
    this._endDraw();
  };

  var IsPlainObject$2 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$j = Phaser.Utils.Objects.GetValue;
  var SetStretchMode = function SetStretchMode(mode) {
    if (IsPlainObject$2(mode)) {
      this.stretchMode.edge = parseMode(GetValue$j(mode, 'edge', 0));
      this.stretchMode.internal = parseMode(GetValue$j(mode, 'internal', 0));
    } else {
      mode = parseMode(mode);
      this.stretchMode.edge = mode;
      this.stretchMode.internal = mode;
    }
    return this;
  };
  var parseMode = function parseMode(mode) {
    if (typeof mode === 'string') {
      mode = EXTENDMODE[mode];
    }
    return mode;
  };
  var EXTENDMODE = {
    scale: 0,
    repeat: 1
  };

  var IsEdge = function IsEdge(colIndex, rowIndex) {
    return colIndex === 0 || colIndex === this.columns.count - 1 || rowIndex === 0 || rowIndex === this.rows.count - 1;
  };

  var GetStretchMode = function GetStretchMode(colIndex, rowIndex) {
    return IsEdge.call(this, colIndex, rowIndex) ? this.stretchMode.edge : this.stretchMode.internal;
  };

  var SetPreserveRatio = function SetPreserveRatio(enable) {
    if (enable == undefined) {
      enable = true;
    }
    this.preserveRatio = enable;
    return this;
  };

  var SetMaxFixedPartScale = function SetMaxFixedPartScale(scaleX, scaleY) {
    if (scaleY === undefined) {
      scaleY = scaleX;
    }
    this.maxFixedPartScaleX = scaleX;
    this.maxFixedPartScaleY = scaleY;
    return this;
  };

  var Methods$2 = {
    _beginDraw: NOOP,
    _drawImage: NOOP,
    _drawTileSprite: NOOP,
    _endDraw: NOOP,
    setGetFrameNameCallback: SetGetFrameNameCallback,
    setBaseTexture: SetBaseTexture,
    updateTexture: UpdateTexture,
    setStretchMode: SetStretchMode,
    getStretchMode: GetStretchMode,
    setPreserveRatio: SetPreserveRatio,
    setMaxFixedPartScale: SetMaxFixedPartScale
  };

  var IsPlainObject$1 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$i = Phaser.Utils.Objects.GetValue;
  var NinePatchBase = function NinePatchBase(GOClass, type) {
    var NinePatch = /*#__PURE__*/function (_GOClass) {
      _inherits(NinePatch, _GOClass);
      var _super = _createSuper(NinePatch);
      function NinePatch(scene, x, y, width, height, key, baseFrame, columns, rows, config) {
        var _this;
        _classCallCheck(this, NinePatch);
        if (IsPlainObject$1(x)) {
          config = x;
          x = GetValue$i(config, 'x', 0);
          y = GetValue$i(config, 'y', 0);
          width = GetValue$i(config, 'width', 1);
          height = GetValue$i(config, 'height', 1);
          key = GetValue$i(config, 'key', undefined);
          baseFrame = GetValue$i(config, 'baseFrame', undefined);
          columns = GetValue$i(config, 'columns', undefined);
          rows = GetValue$i(config, 'rows', undefined);
        } else if (IsPlainObject$1(width)) {
          config = width;
          width = GetValue$i(config, 'width', 1);
          height = GetValue$i(config, 'height', 1);
          key = GetValue$i(config, 'key', undefined);
          baseFrame = GetValue$i(config, 'baseFrame', undefined);
          columns = GetValue$i(config, 'columns', undefined);
          rows = GetValue$i(config, 'rows', undefined);
        } else if (IsPlainObject$1(key)) {
          config = key;
          key = GetValue$i(config, 'key', undefined);
          baseFrame = GetValue$i(config, 'baseFrame', undefined);
          columns = GetValue$i(config, 'columns', undefined);
          rows = GetValue$i(config, 'rows', undefined);
        } else if (IsPlainObject$1(baseFrame)) {
          config = baseFrame;
          baseFrame = GetValue$i(config, 'baseFrame', undefined);
          columns = GetValue$i(config, 'columns', undefined);
          rows = GetValue$i(config, 'rows', undefined);
        } else if (Array.isArray(baseFrame)) {
          config = rows;
          rows = columns;
          columns = baseFrame;
          baseFrame = GetValue$i(config, 'baseFrame', undefined);
        } else if (IsPlainObject$1(columns)) {
          config = columns;
          columns = GetValue$i(config, 'columns', undefined);
          rows = GetValue$i(config, 'rows', undefined);
        }
        if (columns === undefined) {
          var leftWidth = GetValue$i(config, 'leftWidth', undefined);
          var rightWidth = GetValue$i(config, 'rightWidth', undefined);
          if (leftWidth !== undefined && rightWidth !== undefined) {
            columns = [leftWidth, undefined, rightWidth];
          }
        }
        if (rows === undefined) {
          var topHeight = GetValue$i(config, 'topHeight', undefined);
          var bottomHeight = GetValue$i(config, 'bottomHeight', undefined);
          if (topHeight !== undefined && bottomHeight !== undefined) {
            rows = [topHeight, undefined, bottomHeight];
          }
        }
        _this = _super.call(this, scene);
        _this.type = type;
        _this.setPosition(x, y).setSize(width, height).setOrigin(0.5, 0.5);
        _this.columns = {};
        _this.rows = {};
        _this.stretchMode = {};
        _this._tileSprite = undefined; // Reserved for drawing image
        _this._image = undefined; // Reserved for drawing image

        _this.setGetFrameNameCallback(GetValue$i(config, 'getFrameNameCallback', undefined));
        _this.setStretchMode(GetValue$i(config, 'stretchMode', 0));
        _this.setPreserveRatio(GetValue$i(config, 'preserveRatio', true));
        var maxFixedPartScale = GetValue$i(config, 'maxFixedPartScale', 1);
        var maxFixedPartScaleX = GetValue$i(config, 'maxFixedPartScaleX', maxFixedPartScale);
        var maxFixedPartScaleY = GetValue$i(config, 'maxFixedPartScaleY', undefined);
        _this.setMaxFixedPartScale(maxFixedPartScaleX, maxFixedPartScaleY);
        _this.setBaseTexture(key, baseFrame, columns, rows);
        return _this;
      }
      _createClass(NinePatch, [{
        key: "minWidth",
        get: function get() {
          return this.columns.minWidth;
        }
      }, {
        key: "minHeight",
        get: function get() {
          return this.rows.minHeight;
        }
      }, {
        key: "fixedPartScaleX",
        get: function get() {
          return this.columns.scale;
        }
      }, {
        key: "fixedPartScaleY",
        get: function get() {
          return this.rows.scale;
        }
      }, {
        key: "resize",
        value: function resize(width, height) {
          if (this.width === width && this.height === height) {
            return this;
          }
          if (_get(_getPrototypeOf(NinePatch.prototype), "resize", this)) {
            _get(_getPrototypeOf(NinePatch.prototype), "resize", this).call(this, width, height);
          } else {
            // Use setSize method for alternative 
            _get(_getPrototypeOf(NinePatch.prototype), "setSize", this).call(this, width, height);
          }
          this.updateTexture();
          return this;
        }
      }]);
      return NinePatch;
    }(GOClass);
    Object.assign(NinePatch.prototype, Methods$2);
    return NinePatch;
  };

  var GameObjectClasses = Phaser.GameObjects;
  var GameObjects = undefined;
  var GetStampGameObject = function GetStampGameObject(gameObject, className) {
    if (!GameObjects) {
      GameObjects = {};
      GetGame(gameObject).events.once('destroy', function () {
        for (var name in GameObjects) {
          GameObjects[name].destroy();
        }
        GameObjects = undefined;
      });
    }
    if (!GameObjects.hasOwnProperty(className)) {
      var scene = GetGame(gameObject).scene.systemScene;
      var gameObject = new GameObjectClasses[className](scene);
      gameObject.setOrigin(0);
      GameObjects[className] = gameObject;
    }
    return GameObjects[className];
  };

  var DrawImage = function DrawImage(key, frame, x, y, width, height) {
    var gameObject = GetStampGameObject(this, 'Image').setTexture(key, frame).setDisplaySize(width, height);
    this.draw(gameObject, x, y);
  };

  var DrawTileSprite = function DrawTileSprite(key, frame, x, y, width, height) {
    var gameObject = GetStampGameObject(this, 'TileSprite').setTexture(key, frame).setSize(width, height);
    this.draw(gameObject, x, y);
  };

  var RenderTexture = Phaser.GameObjects.RenderTexture;
  var NinePatch = /*#__PURE__*/function (_NinePatchBase) {
    _inherits(NinePatch, _NinePatchBase);
    var _super = _createSuper(NinePatch);
    function NinePatch() {
      _classCallCheck(this, NinePatch);
      return _super.apply(this, arguments);
    }
    return _createClass(NinePatch);
  }(NinePatchBase(RenderTexture, 'rexNinePatch'));
  var Methods$1 = {
    _drawImage: DrawImage,
    _drawTileSprite: DrawTileSprite
  };
  Object.assign(NinePatch.prototype, Methods$1);

  var CreateBackground = function CreateBackground(scene, config) {
    var gameObjectType;
    if (config) {
      if (config.hasOwnProperty('type')) {
        gameObjectType = config.type;
      } else {
        if (config.hasOwnProperty('leftWidth')) {
          gameObjectType = 'nineSlice';
        } else if (config.hasOwnProperty('key')) {
          gameObjectType = 'image';
        }
      }
    }
    var gameObject;
    switch (gameObjectType) {
      case 'image':
        gameObject = new StatesImage(scene, config);
        break;
      case 'nineSlice':
        if (!config.hasOwnProperty('stretchMode')) {
          gameObject = new StatesNineSlice(scene, config);
        } else {
          gameObject = new NinePatch(scene, config);
        }
        break;
      default:
        gameObject = new StatesRoundRectangle(scene, config);
        break;
    }
    scene.add.existing(gameObject);
    return gameObject;
  };

  var Linear$1 = Phaser.Math.Linear;
  var Percent$2 = Phaser.Math.Percent;
  var ProgressValueMethods = {
    setValue: function setValue(value, min, max) {
      if (value === undefined || value === null) {
        return this;
      }
      if (min !== undefined) {
        value = Percent$2(value, min, max);
      }
      this.value = value;
      return this;
    },
    addValue: function addValue(inc, min, max) {
      if (min !== undefined) {
        inc = Percent$2(inc, min, max);
      }
      this.value += inc;
      return this;
    },
    getValue: function getValue(min, max) {
      var value = this.value;
      if (min !== undefined) {
        value = Linear$1(min, max, value);
      }
      return value;
    }
  };

  var Percent$1 = Phaser.Math.Percent;
  var SetEaseValuePropName = function SetEaseValuePropName(name) {
    this.easeValuePropName = name;
    return this;
  };
  var SetEaseValueDuration = function SetEaseValueDuration(duration) {
    this.easeValueDuration = duration;
    return this;
  };
  var SetEaseValueFunction = function SetEaseValueFunction(ease) {
    this.easeFunction = ease;
    return this;
  };
  var StopEaseValue = function StopEaseValue() {
    if (this.easeValueTask) {
      this.easeValueTask.stop();
    }
    return this;
  };
  var EaseValueTo = function EaseValueTo(value, min, max) {
    if (value === undefined || value === null) {
      return this;
    }
    if (min !== undefined) {
      value = Percent$1(value, min, max);
    }
    if (this.easeValueTask === undefined) {
      this.easeValueTask = new EaseValueTask(this, {
        eventEmitter: null
      });
    }
    this.easeValueTask.restart({
      key: this.easeValuePropName,
      to: value,
      duration: this.easeValueDuration,
      ease: this.easeFunction
    });
    return this;
  };
  var EaseValueRepeat = function EaseValueRepeat(from, to, repeat, repeatDelay) {
    if (repeat === undefined) {
      repeat = -1;
    }
    if (repeatDelay === undefined) {
      repeatDelay = 0;
    }
    if (this.easeValueTask === undefined) {
      this.easeValueTask = new EaseValueTask(this, {
        eventEmitter: null
      });
    }
    this.easeValueTask.restart({
      key: this.easeValuePropName,
      from: from,
      to: to,
      duration: this.easeValueDuration,
      ease: this.easeFunction,
      repeat: repeat,
      repeatDelay: repeatDelay
    });
    return this;
  };
  var EaseValueMethods = {
    setEaseValuePropName: SetEaseValuePropName,
    setEaseValueDuration: SetEaseValueDuration,
    setEaseValueFunction: SetEaseValueFunction,
    stopEaseValue: StopEaseValue,
    easeValueTo: EaseValueTo,
    easeValueRepeat: EaseValueRepeat
  };

  var GetValue$h = Phaser.Utils.Objects.GetValue;
  var Clamp$4 = Phaser.Math.Clamp;
  function ProgressBase (BaseClass) {
    var ProgressBase = /*#__PURE__*/function (_BaseClass) {
      _inherits(ProgressBase, _BaseClass);
      var _super = _createSuper(ProgressBase);
      function ProgressBase() {
        _classCallCheck(this, ProgressBase);
        return _super.apply(this, arguments);
      }
      _createClass(ProgressBase, [{
        key: "bootProgressBase",
        value: function bootProgressBase(config) {
          this.eventEmitter = GetValue$h(config, 'eventEmitter', this);
          var callback = GetValue$h(config, 'valuechangeCallback', null);
          if (callback !== null) {
            var scope = GetValue$h(config, 'valuechangeCallbackScope', undefined);
            this.eventEmitter.on('valuechange', callback, scope);
          }
          this.setEaseValuePropName('value').setEaseValueDuration(GetValue$h(config, 'easeValue.duration', 0)).setEaseValueFunction(GetValue$h(config, 'easeValue.ease', 'Linear'));
          return this;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(value) {
          value = Clamp$4(value, 0, 1);
          var oldValue = this._value;
          var valueChanged = oldValue != value;
          this.dirty = this.dirty || valueChanged;
          this._value = value;
          if (valueChanged) {
            this.eventEmitter.emit('valuechange', this._value, oldValue, this.eventEmitter);
          }
        }
      }]);
      return ProgressBase;
    }(BaseClass);
    Object.assign(ProgressBase.prototype, ProgressValueMethods, EaseValueMethods);
    return ProgressBase;
  }

  var Percent = Phaser.Math.Percent;
  var PositionToPercent = function PositionToPercent(startPoint, endPoint, currentPoint) {
    var value;
    if (startPoint.y === endPoint.y) {
      value = Percent(currentPoint.x, startPoint.x, endPoint.x);
    } else if (startPoint.x === endPoint.x) {
      value = Percent(currentPoint.y, startPoint.y, endPoint.y);
    }
    return value;
  };

  var OnDragThumb = function OnDragThumb(pointer, dragX, dragY) {
    if (!this.enable) {
      return;
    }
    tmpPoint$4.x = dragX;
    tmpPoint$4.y = dragY;
    var startPoint, endPoint;
    if (!this.reverseAxis) {
      startPoint = this.getStartPoint();
      endPoint = this.getEndPoint();
    } else {
      startPoint = this.getEndPoint();
      endPoint = this.getStartPoint();
    }
    this.value = PositionToPercent(startPoint, endPoint, tmpPoint$4);
  };
  var tmpPoint$4 = {};

  var OnTouchTrack = function OnTouchTrack(pointer, localX, localY) {
    if (!this.enable) {
      return;
    }
    if (!pointer.isDown) {
      return;
    }
    tmpPoint$3.x = pointer.worldX;
    tmpPoint$3.y = pointer.worldY;
    var startPoint, endPoint;
    if (!this.reverseAxis) {
      startPoint = this.getStartPoint();
      endPoint = this.getEndPoint();
    } else {
      startPoint = this.getEndPoint();
      endPoint = this.getStartPoint();
    }
    var value = PositionToPercent(startPoint, endPoint, tmpPoint$3);
    this.stopEaseValue();
    if (this.easeValueDuration === 0 || Math.abs(this.value - value) < 0.1) {
      this.value = value;
    } else {
      this.easeValueTo(value);
    }
  };
  var tmpPoint$3 = {};

  var GetThumbAlignPoint = function GetThumbAlignPoint(align, out) {
    if (out === undefined) {
      out = tmpPoint$2;
    }
    var thumb = this.childrenMap.thumb;
    var currentX = thumb.x;
    var currentY = thumb.y;
    AlignIn(thumb, this.innerLeft, this.innerTop, this.innerWidth, this.innerHeight, align);
    out.x = thumb.x;
    out.y = thumb.y;
    thumb.x = currentX;
    thumb.y = currentY;
    return out;
  };
  var tmpPoint$2 = {};

  var AlignLeft$1 = Phaser.Display.Align.LEFT_CENTER;
  var AlignTop$1 = Phaser.Display.Align.TOP_CENTER;
  var GetStartPoint = function GetStartPoint(out) {
    if (out === undefined) {
      out = tmpPoint$1;
    }
    if (this.childrenMap.thumb) {
      var align = this.orientation === 0 ? AlignLeft$1 : AlignTop$1;
      GetThumbAlignPoint.call(this, align, out);
    } else {
      if (this.orientation === 0) {
        out.x = this.innerLeft + 1; // Add 1 pixel margin
        out.y = this.centerY;
      } else {
        out.x = this.centerX;
        out.y = this.innerTop + 1; // Add 1 pixel margin
      }
    }

    return out;
  };
  var tmpPoint$1 = {};

  var AlignRight$1 = Phaser.Display.Align.RIGHT_CENTER;
  var AlignBottom$1 = Phaser.Display.Align.BOTTOM_CENTER;
  var GetEndoint = function GetEndoint(out) {
    if (out === undefined) {
      out = tmpPoint;
    }
    if (this.childrenMap.thumb) {
      var align = this.orientation === 0 ? AlignRight$1 : AlignBottom$1;
      GetThumbAlignPoint.call(this, align, out);
    } else {
      if (this.orientation === 0) {
        out.x = this.innerRight - 1; // Add 1 pixel margin
        out.y = this.centerY;
      } else {
        out.x = this.centerX;
        out.y = this.innerBottom - 1; // Add 1 pixel margin
      }
    }

    return out;
  };
  var tmpPoint = {};

  var Linear = Phaser.Math.Linear;
  var PercentToPosition = function PercentToPosition(t, startPoint, endPoint, out) {
    if (out === undefined) {
      out = tmpOut;
    }
    out.x = Linear(startPoint.x, endPoint.x, t);
    out.y = Linear(startPoint.y, endPoint.y, t);
    return out;
  };
  var tmpOut = {};

  var UpdateThumb = function UpdateThumb(t) {
    var thumb = this.childrenMap.thumb;
    if (thumb === undefined) {
      return this;
    }
    if (t === undefined) {
      t = this.value;
    }
    var startPoint, endPoint;
    if (!this.reverseAxis) {
      startPoint = this.getStartPoint();
      endPoint = this.getEndPoint();
    } else {
      startPoint = this.getEndPoint();
      endPoint = this.getStartPoint();
    }
    PercentToPosition(t, startPoint, endPoint, thumb);
    this.resetChildPositionState(thumb);
    return this;
  };

  var AlignLeft = Phaser.Display.Align.LEFT_CENTER;
  var AlignTop = Phaser.Display.Align.TOP_CENTER;
  var AlignRight = Phaser.Display.Align.RIGHT_CENTER;
  var AlignBottom = Phaser.Display.Align.BOTTOM_CENTER;
  var UpdateIndicator = function UpdateIndicator(t) {
    var indicator = this.childrenMap.indicator;
    if (indicator === undefined) {
      return this;
    }
    if (t === undefined) {
      t = this.value;
    }
    var reverseAxis = this.reverseAxis;
    var newWidth, newHeight;
    var thumb = this.childrenMap.thumb;
    if (thumb) {
      if (this.orientation === 0) {
        // x, extend width
        var thumbWidth = GetDisplayWidth(thumb);
        if (!reverseAxis) {
          var thumbLeft = thumb.x - thumbWidth * thumb.originX;
          var thumbRight = thumbLeft + thumbWidth;
          newWidth = thumbRight - this.left;
        } else {
          var thumbLeft = thumb.x - thumbWidth * thumb.originX;
          newWidth = this.right - thumbLeft;
        }
      } else {
        // y, extend height
        var thumbHeight = GetDisplayHeight(thumb);
        if (!reverseAxis) {
          var thumbTop = thumb.y - thumbHeight * thumb.originY;
          var thumbBottom = thumbTop + thumbHeight;
          newHeight = thumbBottom - this.top;
        } else {
          var thumbTop = thumb.y - thumbHeight * thumb.originY;
          newHeight = this.bottom - thumbTop;
        }
      }
    } else {
      if (this.orientation === 0) {
        // x, extend width
        newWidth = this.width * t;
      } else {
        // y, extend eight
        newHeight = this.height * t;
      }
    }
    ResizeGameObject(indicator, newWidth, newHeight);
    var align;
    if (!reverseAxis) {
      align = this.orientation === 0 ? AlignLeft : AlignTop;
    } else {
      align = this.orientation === 0 ? AlignRight : AlignBottom;
    }
    QuickSet(indicator, this, align);
    this.resetChildPositionState(indicator);
  };

  var GetValue$g = Phaser.Utils.Objects.GetValue;
  var IsPlainObject = Phaser.Utils.Objects.IsPlainObject;
  var Clamp$3 = Phaser.Math.Clamp;
  var SnapTo = Phaser.Math.Snap.To;
  var Slider = /*#__PURE__*/function (_ProgressBase) {
    _inherits(Slider, _ProgressBase);
    var _super = _createSuper(Slider);
    function Slider(scene, config) {
      var _this;
      _classCallCheck(this, Slider);
      // Create sizer
      _this = _super.call(this, scene, config);
      _this.type = 'rexSlider';
      _this.bootProgressBase(config);
      _this.reverseAxis = GetValue$g(config, 'reverseAxis', false);

      // Add elements
      var background = GetValue$g(config, 'background', undefined);
      var track = GetValue$g(config, 'track', undefined);
      var indicator = GetValue$g(config, 'indicator', undefined);
      var thumb = GetValue$g(config, 'thumb', undefined);
      if (background) {
        if (IsPlainObject(background)) {
          background = CreateBackground(scene, background);
        }
        _this.addBackground(background);
      }
      if (track) {
        if (IsPlainObject(track)) {
          track = CreateBackground(scene, track);
        }
        _this.add(track, {
          proportion: 1,
          expand: true,
          minWidth: _this.orientation === 0 ? 0 : undefined,
          minHeight: _this.orientation === 1 ? 0 : undefined
        });
      }
      if (indicator) {
        if (IsPlainObject(indicator)) {
          indicator = CreateBackground(scene, indicator);
        }
        _this.pin(indicator); // Put into container but not layout it
      }

      if (thumb) {
        if (IsPlainObject(thumb)) {
          thumb = CreateBackground(scene, thumb);
        }
        _this.pin(thumb); // Put into container but not layout it
      }

      // Input
      var inputMode = GetValue$g(config, 'input', 0);
      if (typeof inputMode === 'string') {
        inputMode = INPUTMODE[inputMode];
      }
      switch (inputMode) {
        case 0:
          // 'drag'
          if (thumb) {
            thumb.setInteractive();
            _this.scene.input.setDraggable(thumb);
            thumb.on('drag', OnDragThumb, _assertThisInitialized(_this)).on('dragstart', function (pointer) {
              this.eventEmitter.emit('inputstart', pointer);
            }, _assertThisInitialized(_this)).on('dragend', function (pointer) {
              this.eventEmitter.emit('inputend', pointer);
            }, _assertThisInitialized(_this));
          }
          break;
        case 1:
          // 'click'
          _this.on('pointerdown', OnTouchTrack, _assertThisInitialized(_this)).on('pointermove', OnTouchTrack, _assertThisInitialized(_this)).on('pointerdown', function (pointer) {
            this.eventEmitter.emit('inputstart', pointer);
          }, _assertThisInitialized(_this)).on('pointerup', function (pointer) {
            this.eventEmitter.emit('inputend', pointer);
          }, _assertThisInitialized(_this)).on('pointerover', function (pointer) {
            if (pointer.isDown) {
              this.eventEmitter.emit('inputstart', pointer);
            }
          }, _assertThisInitialized(_this)).on('pointerout', function (pointer) {
            if (pointer.isDown) {
              this.eventEmitter.emit('inputend', pointer);
            }
          }, _assertThisInitialized(_this)).setInteractive();
          break;
      }
      _this.addChildrenMap('background', background);
      _this.addChildrenMap('track', track);
      _this.addChildrenMap('indicator', indicator);
      _this.addChildrenMap('thumb', thumb);
      _this.setEnable(GetValue$g(config, 'enable', undefined));
      _this.setGap(GetValue$g(config, 'gap', undefined));
      _this.setValue(GetValue$g(config, 'value', 0), GetValue$g(config, 'min', undefined), GetValue$g(config, 'max', undefined));
      return _this;
    }
    _createClass(Slider, [{
      key: "setEnable",
      value: function setEnable(enable) {
        if (enable === undefined) {
          enable = true;
        }
        this.enable = enable;
        return this;
      }
    }, {
      key: "setGap",
      value: function setGap(gap, min, max) {
        if (gap && min !== undefined) {
          gap = gap / (max - min);
        }
        this.gap = gap;
        return this;
      }

      // Override
    }, {
      key: "value",
      get: function get() {
        return this._value;
      }

      // Override
      ,
      set: function set(value) {
        if (this.gap !== undefined) {
          value = SnapTo(value, this.gap);
        }
        var oldValue = this._value;
        this._value = Clamp$3(value, 0, 1);
        if (oldValue !== this._value) {
          this.updateThumb(this._value);
          this.updateIndicator(this._value);
          this.eventEmitter.emit('valuechange', this._value, oldValue, this.eventEmitter);
        }
      }
    }, {
      key: "postLayout",
      value: function postLayout(parent, newWidth, newHeight) {
        this.updateThumb();
        this.updateIndicator();
        return this;
      }
    }]);
    return Slider;
  }(ProgressBase(Sizer));
  var INPUTMODE = {
    pan: 0,
    drag: 0,
    click: 1,
    none: -1
  };
  var methods$2 = {
    getStartPoint: GetStartPoint,
    getEndPoint: GetEndoint,
    updateThumb: UpdateThumb,
    updateIndicator: UpdateIndicator
  };
  Object.assign(Slider.prototype, methods$2);

  var GetValue$f = Phaser.Utils.Objects.GetValue;
  var ScrollBar = /*#__PURE__*/function (_Sizer) {
    _inherits(ScrollBar, _Sizer);
    var _super = _createSuper(ScrollBar);
    function ScrollBar(scene, config) {
      var _this;
      _classCallCheck(this, ScrollBar);
      // Create sizer
      _this = _super.call(this, scene, config);
      _this.type = 'rexScrollBar';

      // Add elements
      var background = GetValue$f(config, 'background', undefined);
      var buttonsConfig = GetValue$f(config, 'buttons', undefined);
      var button0 = GetValue$f(buttonsConfig, 'top', GetValue$f(buttonsConfig, 'left', undefined));
      var button1 = GetValue$f(buttonsConfig, 'bottom', GetValue$f(buttonsConfig, 'right', undefined));
      var slider,
        sliderConfig = GetValue$f(config, 'slider', undefined);
      if (background) {
        _this.addBackground(background);
      }
      if (button0) {
        _this.add(button0);
        var inTouching = new InTouching(button0);
        inTouching.on('intouch', function () {
          if (!this.enable) {
            return;
          }
          var step = !slider.reverseAxis ? -this.scrollStep : this.scrollStep;
          this.value += step;
        }, _assertThisInitialized(_this));
      }
      if (sliderConfig) {
        sliderConfig.orientation = _this.orientation;
        sliderConfig.eventEmitter = _assertThisInitialized(_this);
        sliderConfig.value = null;
        var proportion;
        if (_this.orientation === 0) {
          var sliderWidth = GetValue$f(sliderConfig, 'width', undefined);
          proportion = sliderWidth === undefined ? 1 : 0;
        } else {
          var sliderHeight = GetValue$f(sliderConfig, 'height', undefined);
          proportion = sliderHeight === undefined ? 1 : 0;
        }
        slider = new Slider(scene, sliderConfig);
        scene.add.existing(slider);
        _this.add(slider, {
          proportion: proportion
        });
      }
      if (button1) {
        _this.add(button1);
        var inTouching = new InTouching(button1);
        inTouching.on('intouch', function () {
          if (!this.enable) {
            return;
          }
          var step = !slider.reverseAxis ? this.scrollStep : -this.scrollStep;
          this.value += step;
        }, _assertThisInitialized(_this));
      }
      var buttons = [button0, button1];
      _this.addChildrenMap('background', background);
      _this.addChildrenMap('slider', slider);
      _this.addChildrenMap('buttons', buttons);
      var callback = GetValue$f(config, 'valuechangeCallback', null);
      if (callback !== null) {
        var scope = GetValue$f(config, 'valuechangeCallbackScope', undefined);
        _this.on('valuechange', callback, scope);
      }
      _this.setEnable(GetValue$f(config, 'enable', undefined));
      _this.setValue(GetValue$f(config, 'value', 0));
      _this.setScrollStep(GetValue$f(buttonsConfig, 'step', 0.01));
      return _this;
    }
    _createClass(ScrollBar, [{
      key: "setScrollStep",
      value: function setScrollStep(value) {
        this.scrollStep = value;
        return this;
      }
    }, {
      key: "enable",
      get: function get() {
        if (this.childrenMap.slider) {
          return this.childrenMap.slider.enable;
        } else {
          return false;
        }
      },
      set: function set(value) {
        if (this.childrenMap.slider) {
          this.childrenMap.slider.setEnable(value);
        }
      }
    }, {
      key: "setEnable",
      value: function setEnable(enable) {
        if (enable === undefined) {
          enable = true;
        }
        this.enable = enable;
        return this;
      }
    }, {
      key: "value",
      get: function get() {
        if (this.childrenMap.slider) {
          return this.childrenMap.slider.value;
        } else {
          return 0;
        }
      },
      set: function set(value) {
        if (!this.childrenMap.slider) {
          return;
        }
        this.childrenMap.slider.value = value;
      }
    }, {
      key: "setValue",
      value: function setValue(value, min, max) {
        if (this.childrenMap.slider) {
          this.childrenMap.slider.setValue(value, min, max);
        }
        return this;
      }
    }, {
      key: "addValue",
      value: function addValue(inc, min, max) {
        if (this.childrenMap.slider) {
          this.childrenMap.slider.addValue(inc, min, max);
        }
        return this;
      }
    }, {
      key: "getValue",
      value: function getValue(min, max) {
        if (this.childrenMap.slider) {
          return this.childrenMap.slider.getValue(min, max);
        } else {
          return 0;
        }
      }
    }, {
      key: "easeValueTo",
      value: function easeValueTo(value, min, max) {
        if (this.childrenMap.slider) {
          this.childrenMap.slider.easeValueTo(value, min, max);
        }
        return this;
      }
    }, {
      key: "stopEaseValue",
      value: function stopEaseValue() {
        if (this.childrenMap.slider) {
          this.childrenMap.slider.stopEaseValue();
        }
        return this;
      }
    }, {
      key: "setEaseValueDuration",
      value: function setEaseValueDuration(duration) {
        if (this.childrenMap.slider) {
          this.childrenMap.slider.setEaseValueDuration(duration);
        }
        return this;
      }
    }, {
      key: "setEaseValueFunction",
      value: function setEaseValueFunction(ease) {
        if (this.childrenMap.slider) {
          this.childrenMap.slider.setEaseValueFunction(ease);
        }
        return this;
      }
    }]);
    return ScrollBar;
  }(Sizer);

  var CreateScrollbar = function CreateScrollbar(scene, config) {
    if (config === undefined) {
      config = {};
    }
    var sliderConfig = Clone(config);
    config = {
      slider: sliderConfig
    };

    // Move orientation parameter from sliderConfig to config
    config.orientation = sliderConfig.orientation;
    delete sliderConfig.orientation;

    // Move background parameter from sliderConfig to config
    config.background = sliderConfig.background;
    delete sliderConfig.background;

    // Move buttons parameter from sliderConfig to config
    config.buttons = sliderConfig.buttons;
    delete sliderConfig.buttons;
    var scrollBar = new ScrollBar(scene, config);
    scene.add.existing(scrollBar);
    var slider = scrollBar.childrenMap.slider;
    scrollBar.addChildrenMap('track', slider.childrenMap.track);
    scrollBar.addChildrenMap('indicator', slider.childrenMap.indicator);
    scrollBar.addChildrenMap('thumb', slider.childrenMap.thumb);
    return scrollBar;
  };

  var State = /*#__PURE__*/function (_FSM) {
    _inherits(State, _FSM);
    var _super = _createSuper(State);
    function State(parent, config) {
      var _this;
      _classCallCheck(this, State);
      _this = _super.call(this, config);
      _this.parent = parent;
      _this.init();
      return _this;
    }
    _createClass(State, [{
      key: "init",
      value: function init() {
        this.start('IDLE');
      }

      // IDLE -> DRAGBEGIN|DRAG
    }, {
      key: "next_IDLE",
      value: function next_IDLE() {
        var nextState,
          parent = this.parent,
          dragState = parent.dragState;
        if (dragState.isDown) {
          nextState = parent.dragThreshold === 0 ? 'DRAG' : 'DRAGBEGIN';
        }
        return nextState;
      }
    }, {
      key: "update_IDLE",
      value: function update_IDLE(time, delta) {
        this.next();
      }
      // IDLE

      // DRAGBEGIN -> DRAG|IDLE
    }, {
      key: "next_DRAGBEGIN",
      value: function next_DRAGBEGIN() {
        var nextState,
          parent = this.parent,
          dragState = parent.dragState;
        if (dragState.isDown) {
          nextState = dragState.pointer.getDistance() >= parent.dragThreshold ? 'DRAG' : 'DRAGBEGIN';
        } else {
          // dragState.isUp
          nextState = 'IDLE';
        }
        return nextState;
      }
    }, {
      key: "update_DRAGBEGIN",
      value: function update_DRAGBEGIN(time, delta) {
        this.next();
      }
      // DRAGBEGIN

      // DRAG -> BACK|SLIDE|IDLE
    }, {
      key: "next_DRAG",
      value: function next_DRAG() {
        var nextState,
          parent = this.parent,
          dragState = parent.dragState;
        if (dragState.isUp) {
          if (parent.outOfBounds) {
            nextState = 'BACK';
          } else if (parent.slidingEnable) {
            nextState = 'SLIDE';
          } else {
            nextState = 'IDLE';
          }
        }
        return nextState;
      }
    }, {
      key: "update_DRAG",
      value: function update_DRAG(time, delta) {
        var parent = this.parent,
          dragState = parent.dragState;
        if (dragState.justMoved) {
          parent.dragging();
        }
        this.next();
      }
    }, {
      key: "enter_DRAG",
      value: function enter_DRAG() {
        this.parent.onDragStart();
      }
    }, {
      key: "exit_DRAG",
      value: function exit_DRAG() {
        this.parent.onDragEnd();
      }
      // DRAG    

      // SLIDE -> DRAG|IDLE
    }, {
      key: "next_SLIDE",
      value: function next_SLIDE() {
        var nextState,
          parent = this.parent,
          dragState = parent.dragState;
        if (dragState.isDown) {
          nextState = 'DRAG';
        } else if (!parent.isSliding) {
          nextState = 'IDLE';
        }
        return nextState;
      }
    }, {
      key: "enter_SLIDE",
      value: function enter_SLIDE() {
        this.parent.onSliding();
      }
    }, {
      key: "exit_SLIDE",
      value: function exit_SLIDE() {
        this.parent.stop();
      }
    }, {
      key: "update_SLIDE",
      value: function update_SLIDE(time, delta) {
        this.parent.sliding(time, delta);
        this.next();
      }
      // SLIDE    

      // BACK -> DRAG|IDLE
    }, {
      key: "next_BACK",
      value: function next_BACK() {
        var nextState,
          parent = this.parent,
          dragState = parent.dragState;
        if (dragState.isDown) {
          nextState = 'DRAG';
        } else if (!parent.isPullBack) {
          nextState = 'IDLE';
        }
        return nextState;
      }
    }, {
      key: "enter_BACK",
      value: function enter_BACK() {
        this.parent.onPullBack();
      }
    }, {
      key: "exit_BACK",
      value: function exit_BACK() {
        this.parent.stop();
      }
    }, {
      key: "update_BACK",
      value: function update_BACK(time, delta) {
        this.parent.pullBack(time, delta);
        this.next();
      }
      // BACK
    }]);
    return State;
  }(FSM);

  var GetValue$e = Phaser.Utils.Objects.GetValue;
  var DistanceBetween = Phaser.Math.Distance.Between;
  var DragSpeed = /*#__PURE__*/function (_ComponentBase) {
    _inherits(DragSpeed, _ComponentBase);
    var _super = _createSuper(DragSpeed);
    function DragSpeed(gameObject, config) {
      var _this;
      _classCallCheck(this, DragSpeed);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;

      _this._enable = undefined;
      gameObject.setInteractive(GetValue$e(config, "inputConfig", undefined));
      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(DragSpeed, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.pointer = undefined;
        this.isInTouched = false;
        this.holdStartTime = undefined;
        this.x = undefined;
        this.y = undefined;
        this.preX = undefined;
        this.preY = undefined;
        this.localX = undefined;
        this.localY = undefined;
        this.justMoved = false;
        this.setEnable(GetValue$e(o, 'enable', true));
        this.holdThreshold = GetValue$e(o, 'holdThreshold', 50); // ms
        this.pointerOutReleaseEnable = GetValue$e(o, 'pointerOutRelease', true);
        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        // Drag start only when pointer down
        this.parent.on('pointerdown', this.onPointIn, this);
        // this.parent.on('pointerover', this.onPointIn, this);

        this.parent.on('pointerup', this.onPointOut, this);
        if (this.pointerOutReleaseEnable) {
          this.parent.on('pointerout', this.onPointOut, this);
        }
        this.parent.on('pointermove', this.onPointerMove, this);
        this.scene.sys.events.on('preupdate', this.preupdate, this);
      }
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        // GameObject events will be removed when this gameObject destroyed 
        // this.parent.off('pointerdown', this.onPointIn, this);
        // this.parent.off('pointerup', this.onPointOut, this);
        // this.parent.off('pointerout', this.onPointOut, this);
        // this.parent.off('pointermove', this.onPointerMove, this);

        this.scene.sys.events.off('preupdate', this.preupdate, this);
        this.pointer = undefined;
        _get(_getPrototypeOf(DragSpeed.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "enable",
      get: function get() {
        return this._enable;
      },
      set: function set(e) {
        if (this._enable === e) {
          return;
        }
        if (!e) {
          this.isInTouched = false;
          this.pointer = undefined;
        }
        this._enable = e;
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "toggleEnable",
      value: function toggleEnable() {
        this.setEnable(!this.enable);
        return this;
      }
    }, {
      key: "setPointerOutReleaseEnable",
      value: function setPointerOutReleaseEnable(enable) {
        if (enable === undefined) {
          enable = true;
        }
        this.pointerOutReleaseEnable = enable;
        return this;
      }
    }, {
      key: "isDown",
      get: function get() {
        return this.pointer && this.pointer.isDown;
      }
    }, {
      key: "isUp",
      get: function get() {
        return !this.isDown;
      }
    }, {
      key: "dx",
      get: function get() {
        return this.x - this.preX;
      }
    }, {
      key: "dy",
      get: function get() {
        return this.y - this.preY;
      }
    }, {
      key: "dt",
      get: function get() {
        var delta = GetTickDelta(this.scene);
        return delta;
      }
    }, {
      key: "speed",
      get: function get() {
        if (this.x === this.preX && this.y === this.preY) {
          return 0;
        }
        var d = DistanceBetween(this.preX, this.preY, this.x, this.y);
        var speed = d / (this.dt * 0.001);
        return speed;
      }
    }, {
      key: "speedX",
      get: function get() {
        return this.dx / (this.dt * 0.001);
      }
    }, {
      key: "speedY",
      get: function get() {
        return this.dy / (this.dt * 0.001);
      }

      // internal
    }, {
      key: "onPointIn",
      value: function onPointIn(pointer, localX, localY) {
        if (!this.enable || !pointer.isDown || this.pointer !== undefined) {
          return;
        }
        this.pointer = pointer;
        this.localX = localX;
        this.localY = localY;
      }
    }, {
      key: "onPointOut",
      value: function onPointOut(pointer) {
        if (!this.enable || this.pointer !== pointer) {
          return;
        }
        this.pointer = undefined;
      }
    }, {
      key: "onPointerMove",
      value: function onPointerMove(pointer, localX, localY) {
        if (!this.enable || !pointer.isDown || this.pointer !== pointer) {
          return;
        }
        this.localX = localX;
        this.localY = localY;
      }
    }, {
      key: "preupdate",
      value: function preupdate(time, delta) {
        if (!this.enable) {
          return;
        }
        var pointer = this.pointer;
        this.justMoved = false;
        if (pointer && !this.isInTouched) {
          // Touch start
          this.x = pointer.worldX;
          this.y = pointer.worldY;
          this.preX = pointer.worldX;
          this.preY = pointer.worldY;
          this.isInTouched = true;
          this.holdStartTime = undefined;
          this.emit('touchstart', pointer, this.localX, this.localY);
        } else if (pointer && this.isInTouched) {
          // In touch
          if (this.x === pointer.x && this.y === pointer.y) {
            // Hold
            if (this.holdStartTime === undefined) {
              this.holdStartTime = time;
            } else if (time - this.holdStartTime > this.holdThreshold) {
              this.preX = this.x;
              this.preY = this.y;
            }
          } else {
            // Move
            this.preX = this.x;
            this.preY = this.y;
            this.x = pointer.worldX;
            this.y = pointer.worldY;
            this.holdStartTime = undefined;
            this.justMoved = true;
            this.emit('touchmove', pointer, this.localX, this.localY);
          }
        } else if (!pointer && this.isInTouched) {
          // Touch end
          this.isInTouched = false;
          this.holdStartTime = undefined;
          this.emit('touchend', pointer);
        }
      }
    }]);
    return DragSpeed;
  }(ComponentBase);

  var GetValue$d = Phaser.Utils.Objects.GetValue;
  var Movement = /*#__PURE__*/function () {
    function Movement(config) {
      _classCallCheck(this, Movement);
      this.resetFromJSON(config);
    }
    _createClass(Movement, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.setValue(GetValue$d(o, 'value', 0));
        this.setSpeed(GetValue$d(o, 'speed', 0));
        this.setAcceleration(GetValue$d(o, 'acceleration', 0));
        return this;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.setValue(0);
        this.setSpeed(0);
        this.setAcceleration(0);
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.value = value;
        return this;
      }
    }, {
      key: "setSpeed",
      value: function setSpeed(speed) {
        // speed == 0 : stop
        // speed  > 0 : move
        this.speed = speed;
        return this;
      }
    }, {
      key: "setAcceleration",
      value: function setAcceleration(acc) {
        // acc == 0 : constant speed
        // acc  > 0 : acceleration
        // acc  < 0 : deceleration
        this.acceleration = acc;
        return this;
      }
    }, {
      key: "updateSpeed",
      value: function updateSpeed(delta) {
        // delta in sec
        if (this.acceleration !== 0) {
          this.speed += this.acceleration * delta;
          if (this.speed < 0) {
            this.speed = 0;
          }
        }
        return this;
      }
    }, {
      key: "getDeltaValue",
      value: function getDeltaValue(delta) {
        // delta in sec
        this.updateSpeed(delta);
        if (this.speed <= 0) {
          return 0;
        }
        return this.speed * delta;
      }
    }, {
      key: "update",
      value: function update(delta) {
        // delta in sec
        this.updateSpeed(delta);
        if (this.speed > 0) {
          this.value += this.getDeltaValue(delta);
        }
        return this;
      }
    }, {
      key: "isMoving",
      get: function get() {
        return this.speed > 0;
      }
    }]);
    return Movement;
  }();

  var SlowDown = /*#__PURE__*/function () {
    function SlowDown() {
      _classCallCheck(this, SlowDown);
      this.value;
      this.dir; // true:+, false:-
      this.movement = new Movement();
    }
    _createClass(SlowDown, [{
      key: "init",
      value: function init(start, dir, speed, dec, end) {
        this.value = start;
        this.end = end;
        if (end !== undefined) {
          this.dir = start < end;
        } else {
          this.dir = dir;
        }
        this.movement.setSpeed(speed).setAcceleration(-dec);
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.movement.reset();
      }
    }, {
      key: "update",
      value: function update(delta) {
        // delta in sec
        var d = this.movement.getDeltaValue(delta);
        if (!this.dir) {
          d = -d;
        }
        if (this.end === undefined) {
          this.value += d;
        } else {
          if (d === 0) {
            this.value = this.end;
          } else {
            this.value += d;
            if (this.dir) {
              // +
              if (this.value > this.end) {
                this.value = this.end;
              }
            } else {
              // -
              if (this.value < this.end) {
                this.value = this.end;
              }
            }
          }
        }
        return this;
      }
    }, {
      key: "isMoving",
      get: function get() {
        return this.movement.isMoving;
      }
    }]);
    return SlowDown;
  }();

  var GetValue$c = Phaser.Utils.Objects.GetValue;
  var Clamp$2 = Phaser.Math.Clamp;
  var Scroller = /*#__PURE__*/function (_ComponentBase) {
    _inherits(Scroller, _ComponentBase);
    var _super = _createSuper(Scroller);
    function Scroller(gameObject, config) {
      var _this;
      _classCallCheck(this, Scroller);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;

      var enable = GetValue$c(config, 'enable', true);
      _this._state = new State(_assertThisInitialized(_this), {
        enable: enable,
        eventEmitter: false
      });
      var drapSpeedConfig = {
        inputConfig: GetValue$c(config, 'inputConfig', undefined),
        enable: enable,
        pointerOutRelease: GetValue$c(config, 'pointerOutRelease', true),
        eventEmitter: false
      };
      _this.dragState = new DragSpeed(gameObject, drapSpeedConfig);
      _this._enable = undefined;
      _this._value = undefined;
      _this._slowDown = new SlowDown();
      var callback = GetValue$c(config, 'valuechangeCallback', null);
      if (callback !== null) {
        var scope = GetValue$c(config, 'valuechangeCallbackScope', undefined);
        _this.on('valuechange', callback, scope);
      }
      callback = GetValue$c(config, 'overmaxCallback', null);
      if (callback !== null) {
        var scope = GetValue$c(config, 'overmaxCallbackScope', undefined);
        _this.on('overmax', callback, scope);
      }
      callback = GetValue$c(config, 'overminCallback', null);
      if (callback !== null) {
        var scope = GetValue$c(config, 'overminCallbackScope', undefined);
        _this.on('overmin', callback, scope);
      }
      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(Scroller, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.setOrientationMode(GetValue$c(o, 'orientation', 0));
        this.setDragThreshold(GetValue$c(o, 'threshold', 10));
        this.setSlidingDeceleration(GetValue$c(o, 'slidingDeceleration', 5000));
        this.setBackDeceleration(GetValue$c(o, 'backDeceleration', 2000));
        var dragRate = GetValue$c(o, 'dragRate', 1);
        dragRate = dragRate * (GetValue$c(o, 'dragReverse', false) ? -1 : 1);
        this.setDragRate(dragRate);
        var bounds = GetValue$c(o, 'bounds', undefined);
        if (bounds) {
          this.setBounds(bounds);
        } else {
          this.setBounds(GetValue$c(o, 'max', 0), GetValue$c(o, 'min', 0));
        }
        this.setValue(GetValue$c(o, 'value', this.maxValue || 0));
        this.setEnable(GetValue$c(o, "enable", true));
        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        this.scene.sys.events.on('preupdate', this._state.update, this._state);
      }
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }
        this.scene.sys.events.off('preupdate', this._state.update, this._state);
        this._state.destroy(fromScene);
        this.dragState.destroy(fromScene);
        this._state = undefined;
        this.dragState = undefined;
        _get(_getPrototypeOf(Scroller.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "enable",
      get: function get() {
        return this._enable;
      },
      set: function set(e) {
        if (this._enable === e) {
          return;
        }
        this._enable = e;
        this._state.setEnable(e);
        this.dragState.setEnable(e);
        return this;
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "toggleEnable",
      value: function toggleEnable() {
        this.setEnable(!this.enable);
        return this;
      }
    }, {
      key: "setOrientationMode",
      value: function setOrientationMode(m) {
        if (typeof m === 'string') {
          m = ORIENTATIONMODE[m];
        }
        this.orientationMode = m;
        return this;
      }
    }, {
      key: "setDragThreshold",
      value: function setDragThreshold(distance) {
        this.dragThreshold = distance;
        return this;
      }
    }, {
      key: "setSlidingDeceleration",
      value: function setSlidingDeceleration(dec) {
        this.slidingDeceleration = dec;
        return this;
      }
    }, {
      key: "setBackDeceleration",
      value: function setBackDeceleration(dec) {
        this.backDeceleration = dec;
        return this;
      }
    }, {
      key: "setDragRate",
      value: function setDragRate(ratio) {
        this.dragRate = ratio;
        return this;
      }
    }, {
      key: "setBounds",
      value: function setBounds(value0, value1) {
        if (Array.isArray(value0)) {
          var bounds = value0;
          value0 = bounds[0];
          value1 = bounds[1];
        }
        if (value0 < value1) {
          this.minValue = value0;
          this.maxValue = value1;
        } else {
          this.minValue = value1;
          this.maxValue = value0;
        }
        return this;
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(value) {
        if (value === this._value) {
          return;
        }
        var oldValue = this._value;
        var isOverMax = this.overMax(value);
        var isOverMin = this.overMin(value);
        if (isOverMax) {
          this.emit('overmax', value, oldValue);
        }
        if (isOverMin) {
          this.emit('overmin', value, oldValue);
        }
        if (!this.backEnable) {
          if (isOverMax) {
            value = this.maxValue;
          }
          if (isOverMin) {
            value = this.minValue;
          }
        }
        this._value = value;
        this.emit('valuechange', value, oldValue);
      }
    }, {
      key: "setValue",
      value: function setValue(value, clamp) {
        if (clamp === undefined) {
          clamp = false;
        }
        if (clamp) {
          value = Clamp$2(value, this.minValue, this.maxValue);
        }
        this.value = value;
        return this;
      }
    }, {
      key: "addValue",
      value: function addValue(inc, clamp) {
        this.setValue(this.value + inc, clamp);
        return this;
      }
    }, {
      key: "state",
      get: function get() {
        return this._state.state;
      }
    }, {
      key: "isDragging",
      get: function get() {
        return this.dragState.isInTouched;
      }
    }, {
      key: "outOfMaxBound",
      get: function get() {
        return this.overMax(this.value);
      }
    }, {
      key: "outOfMinBound",
      get: function get() {
        return this.overMin(this.value);
      }
    }, {
      key: "outOfBounds",
      get: function get() {
        return this.outOfMinBound || this.outOfMaxBound;
      }

      // internal
    }, {
      key: "overMax",
      value: function overMax(value) {
        return this.maxValue != null && value > this.maxValue;
      }
    }, {
      key: "overMin",
      value: function overMin(value) {
        return this.minValue != null && value < this.minValue;
      }
    }, {
      key: "backEnable",
      get: function get() {
        return typeof this.backDeceleration === 'number';
      }
    }, {
      key: "isPullBack",
      get: function get() {
        return this._slowDown.isMoving;
      }
    }, {
      key: "slidingEnable",
      get: function get() {
        return typeof this.slidingDeceleration === 'number';
      }
    }, {
      key: "isSliding",
      get: function get() {
        return this._slowDown.isMoving;
      }
    }, {
      key: "dragDelta",
      get: function get() {
        var delta;
        if (this.orientationMode === 0) {
          // y
          delta = this.dragState.dy;
        } else if (this.orientationMode === 1) {
          // x
          delta = this.dragState.dx;
        } else {
          delta = 0;
        }
        delta *= this.dragRate;
        return delta;
      }
    }, {
      key: "dragSpeed",
      get: function get() {
        var speed;
        if (this.orientationMode === 0) {
          // y
          speed = this.dragState.speedY;
        } else if (this.orientationMode === 1) {
          // x
          speed = this.dragState.speedX;
        } else {
          speed = 0;
        }
        speed *= this.dragRate;
        return speed;
      }

      // enter_DRAG
    }, {
      key: "onDragStart",
      value: function onDragStart() {
        this.emit('dragstart');
      }

      // exit_DRAG
    }, {
      key: "onDragEnd",
      value: function onDragEnd() {
        this.emit('dragend');
      }

      // everyTick_DRAG
    }, {
      key: "dragging",
      value: function dragging() {
        this.value += this.dragDelta;
      }

      // enter_SLIDE 
    }, {
      key: "onSliding",
      value: function onSliding() {
        var start = this.value;
        var speed = this.dragSpeed;
        if (speed === 0) {
          this._slowDown.stop();
          this._state.next();
          return;
        }
        var dec = this.slidingDeceleration;
        this._slowDown.init(start, speed > 0, Math.abs(speed), dec);
      }

      // everyTick_SLIDE
    }, {
      key: "sliding",
      value: function sliding(time, delta) {
        delta *= 0.001;
        var newValue = this._slowDown.update(delta).value;
        if (this.overMax(newValue)) {
          this.value = this.maxValue;
          this._slowDown.stop();
        } else if (this.overMin(newValue)) {
          this.value = this.minValue;
          this._slowDown.stop();
        } else {
          this.value = newValue;
        }
      }

      // enter_BACK
    }, {
      key: "onPullBack",
      value: function onPullBack() {
        var start = this.value;
        var end = this.outOfMinBound ? this.minValue : this.maxValue;
        var dist = Math.abs(end - start);
        var dec = this.backDeceleration;
        var speed = Math.sqrt(2 * dec * dist);
        this._slowDown.init(start, undefined, speed, dec, end);
      }

      // everyTick_BACK
    }, {
      key: "pullBack",
      value: function pullBack(time, delta) {
        delta *= 0.001;
        this.value = this._slowDown.update(delta).value;
        if (!this._slowDown.isMoving) {
          this._state.next();
        }
      }

      // exit_SLIDE, exit_BACK
    }, {
      key: "stop",
      value: function stop() {
        this._slowDown.stop();
      }
    }]);
    return Scroller;
  }(ComponentBase);
  var ORIENTATIONMODE = {
    y: 0,
    v: 0,
    vertical: 0,
    x: 1,
    h: 1,
    horizontal: 1
  };

  var GetValue$b = Phaser.Utils.Objects.GetValue;
  var MouseWheelScroller = /*#__PURE__*/function (_ComponentBase) {
    _inherits(MouseWheelScroller, _ComponentBase);
    var _super = _createSuper(MouseWheelScroller);
    function MouseWheelScroller(gameObject, config) {
      var _this;
      _classCallCheck(this, MouseWheelScroller);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;

      if (_this.parent !== _this.scene) {
        _this.focusMode = GetValue$b(config, 'focus', true);
      } else {
        _this.focusMode = false;
      }
      _this.setSpeed(GetValue$b(config, 'speed', 0.1));
      _this.setEnable(GetValue$b(config, 'enable', true));
      if (!_this.focusMode) {
        // Register on scene
        _this.scene.input.on('wheel', _this.onSceneScroll, _assertThisInitialized(_this));
      } else {
        var gameObject = _this.parent;
        gameObject.setInteractive(GetValue$b(config, "inputConfig", undefined)).on('wheel', function (pointer, dx, dy, dz, event) {
          if (!this.enable) {
            return;
          }
          this.scroll(dy);
        }, _assertThisInitialized(_this));
      }
      return _this;
    }
    _createClass(MouseWheelScroller, [{
      key: "destroy",
      value: function destroy() {
        if (!this.focusMode) {
          this.scene.input.off('wheel', this.onSceneScroll, this);
        }
      }
    }, {
      key: "onSceneScroll",
      value: function onSceneScroll(pointer, currentlyOver, dx, dy, dz, event) {
        if (!this.enable) {
          return;
        }
        this.scroll(dy);
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }
        this.enable = e;
        return this;
      }
    }, {
      key: "setSpeed",
      value: function setSpeed(speed) {
        this.speed = speed;
        return this;
      }
    }, {
      key: "scroll",
      value: function scroll(dy) {
        dy *= this.speed;
        this.emit('scroll', dy, this.parent, this);
      }
    }]);
    return MouseWheelScroller;
  }(ComponentBase);

  var GetValue$a = Phaser.Utils.Objects.GetValue;
  var AddSlider = function AddSlider(topPatent, sliderParent, axis, config) {
    axis = axis.toUpperCase();
    var isAxisY = axis === 'Y';
    var isScrollXYMode = topPatent.scrollMode === 2;
    var child = topPatent.childrenMap.child;
    var sliderConfig, slider;
    var sliderConfigKey = "slider".concat(axis);
    if (isScrollXYMode) {
      sliderConfig = GetValue$a(config, sliderConfigKey, undefined);
    } else {
      if (config.hasOwnProperty(sliderConfigKey)) {
        sliderConfig = GetValue$a(config, sliderConfigKey, undefined);
      } else {
        sliderConfig = GetValue$a(config, 'slider', undefined);
      }
    }
    if (sliderConfig) {
      if (sliderConfig === true) {
        sliderConfig = {};
      }
      sliderConfig.orientation = isAxisY ? 1 : 0;
      slider = CreateScrollbar(topPatent.scene, sliderConfig);
      var column, row, padding;
      var sliderPosition = GetValue$a(sliderConfig, 'position', 0);
      if (typeof sliderPosition === 'string') {
        sliderPosition = SLIDER_POSITION_MAP[sliderPosition];
      }

      /*
      1. space.sliderX, space.sliderY
      2. space.slider
      3. space.child
      */
      var sliderPadding = GetValue$a(config, "space.slider".concat(axis), undefined);
      if (sliderPadding === undefined) {
        sliderPadding = GetValue$a(config, 'space.slider', undefined);
        if (sliderPadding === undefined) {
          if (isScrollXYMode) {
            sliderPadding = 0;
          } else {
            // Legacy
            sliderPadding = GetValue$a(config, 'space.child', 0);
          }
        }
      }
      var isNumberSliderPadding = typeof sliderPadding === 'number';
      if (isAxisY) {
        if (sliderPosition === 0) {
          // right
          column = 2;
          row = 1;
          padding = isNumberSliderPadding ? {
            left: sliderPadding
          } : sliderPadding;
        } else {
          // left
          column = 0;
          row = 1;
          padding = isNumberSliderPadding ? {
            right: sliderPadding
          } : sliderPadding;
        }
      } else {
        if (sliderPosition === 0) {
          // bottom
          column = 1;
          row = 2;
          padding = isNumberSliderPadding ? {
            top: sliderPadding
          } : sliderPadding;
        } else {
          // top
          column = 1;
          row = 0;
          padding = isNumberSliderPadding ? {
            bottom: sliderPadding
          } : sliderPadding;
        }
      }
      sliderParent.add(slider, {
        column: column,
        row: row,
        align: 'center',
        padding: padding,
        expand: true
      });
      topPatent["hideUnscrollableSlider".concat(axis)] = GetValue$a(sliderConfig, 'hideUnscrollableSlider', false);
      topPatent["adaptThumb".concat(axis, "SizeMode")] = GetValue$a(sliderConfig, 'adaptThumbSize', false);
      topPatent["minThumb".concat(axis, "Size")] = GetValue$a(sliderConfig, 'minThumbSize', undefined);
    } else {
      topPatent["hideUnscrollableSlider".concat(axis)] = false;
      topPatent["adaptThumb".concat(axis, "SizeMode")] = false;
      topPatent["minThumb".concat(axis, "Size")] = undefined;
    }
    var scrollerConfig, scroller;
    var scrollerConfigKey = "scroller".concat(axis);
    if (isScrollXYMode) {
      scrollerConfig = GetValue$a(config, scrollerConfigKey, true);
    } else {
      if (config.hasOwnProperty(scrollerConfigKey)) {
        scrollerConfig = GetValue$a(config, scrollerConfigKey, true);
      } else {
        scrollerConfig = GetValue$a(config, 'scroller', true);
      }
    }
    if (scrollerConfig && child) {
      if (scrollerConfig === true) {
        scrollerConfig = {};
      }
      scrollerConfig.orientation = isAxisY ? 0 : 1;
      scroller = new Scroller(child, scrollerConfig);
    }
    var mouseWheelScrollerConfig = GetValue$a(config, isScrollXYMode ? "mouseWheelScroller".concat(axis) : 'mouseWheelScroller', false),
      mouseWheelScroller;
    if (mouseWheelScrollerConfig && child) {
      mouseWheelScroller = new MouseWheelScroller(child, mouseWheelScrollerConfig);
    }
    topPatent.addChildrenMap("slider".concat(axis), slider);
    topPatent.addChildrenMap("scroller".concat(axis), scroller);
    topPatent.addChildrenMap("mouseWheelScroller".concat(axis), mouseWheelScroller);
    if (!isScrollXYMode || isAxisY) {
      topPatent['hideUnscrollableSlider'] = topPatent["hideUnscrollableSlider".concat(axis)];
      topPatent['adaptThumbSizeMode'] = topPatent["adaptThumb".concat(axis, "SizeMode")];
      topPatent['minThumbSize'] = topPatent["minThumb".concat(axis, "Size")];
      topPatent.addChildrenMap('slider', slider);
      topPatent.addChildrenMap('scroller', scroller);
      topPatent.addChildrenMap('mouseWheelScroller', mouseWheelScroller);
    }

    // Control
    if (slider) {
      var keyST, eventName;
      if (isScrollXYMode) {
        keyST = isAxisY ? 't' : 's';
        eventName = "scroll".concat(axis);
      } else {
        keyST = 't';
        eventName = 'scroll';
      }
      slider.on('valuechange', function (newValue) {
        topPatent[keyST] = newValue;
        topPatent.emit(eventName, topPatent);
      });
    }
    if (scroller) {
      var keyChildOXY, eventName;
      if (isScrollXYMode) {
        keyChildOXY = "childO".concat(axis);
        eventName = "scroll".concat(axis);
      } else {
        keyChildOXY = 'childOY';
        eventName = 'scroll';
      }
      scroller.on('valuechange', function (newValue) {
        topPatent[keyChildOXY] = newValue;
        topPatent.emit(eventName, topPatent);
      });
    }
    if (mouseWheelScroller) {
      var methodAddChildOXY = "addChildO".concat(axis);
      mouseWheelScroller.on('scroll', function (incValue) {
        topPatent[methodAddChildOXY](-incValue, true);
      });
    }
  };
  var SLIDER_POSITION_MAP = {
    right: 0,
    left: 1,
    bottom: 0,
    top: 1
  };

  var GetValue$9 = Phaser.Utils.Objects.GetValue;
  var CreateScrollableSizer = function CreateScrollableSizer(parent, config) {
    var scene = parent.scene;
    var columnProportions = [0, 1, 0],
      rowProportions = [0, 1, 0];
    var parentMinWidth = GetValue$9(config, 'width');
    var parentMinHeight = GetValue$9(config, 'height');
    if (!parentMinWidth) {
      var expandChildWidth = GetValue$9(config, 'child.expandWidth', true);
      if (!expandChildWidth) {
        columnProportions[1] = 0; // Calculate parent's width by child's width
      }
    }

    if (!parentMinHeight) {
      var expandChildHeight = GetValue$9(config, 'child.expandHeight', true);
      if (!expandChildHeight) {
        rowProportions[1] = 0; // Calculate parent's height by child's height
      }
    }

    var scrollableSizer = new GridSizer(scene, {
      column: 3,
      row: 3,
      columnProportions: columnProportions,
      rowProportions: rowProportions
    });
    AddChild(parent, scrollableSizer, config);
    switch (parent.scrollMode) {
      case 0:
        // y
        AddSlider(parent, scrollableSizer, 'y', config);
        break;
      case 1:
        // x
        AddSlider(parent, scrollableSizer, 'x', config);
        break;
      default:
        // xy
        AddSlider(parent, scrollableSizer, 'y', config);
        AddSlider(parent, scrollableSizer, 'x', config);
        break;
    }
    return scrollableSizer;
  };

  var ResizeController = function ResizeController() {
    switch (this.scrollMode) {
      case 0:
      case 1:
        SetControllerBounds.call(this);
        this.updateController();
        HideUnscrollableSlider.call(this);
        AdaptThumbSize.call(this);
        break;
      default:
        // 2
        SetControllerBounds.call(this, 'y');
        SetControllerBounds.call(this, 'x');
        this.updateController();
        HideUnscrollableSlider.call(this, 'y');
        HideUnscrollableSlider.call(this, 'x');
        AdaptThumbSize.call(this, 'y');
        AdaptThumbSize.call(this, 'x');
        break;
    }
    return this;
  };
  var SetControllerBounds = function SetControllerBounds(axis) {
    var bound0, bound1;
    var scroller, slider;
    switch (this.scrollMode) {
      case 0:
      case 1:
        bound0 = this.topChildOY;
        bound1 = this.bottomChildOY;
        scroller = this.childrenMap.scroller;
        slider = this.childrenMap.slider;
        break;
      default:
        // 2
        axis = axis.toUpperCase();
        if (axis === 'Y') {
          bound0 = this.topChildOY;
          bound1 = this.bottomChildOY;
        } else {
          bound0 = this.leftChildOX;
          bound1 = this.rightChildOX;
        }
        scroller = this.childrenMap["scroller".concat(axis)];
        slider = this.childrenMap["slider".concat(axis)];
    }
    if (scroller) {
      scroller.setBounds(bound0, bound1);
    }
    if (slider) {
      slider.setEnable(bound0 !== bound1);
    }
  };
  var HideUnscrollableSlider = function HideUnscrollableSlider(axis) {
    switch (this.scrollMode) {
      case 0:
      case 1:
        var slider = this.childrenMap.slider;
        if (slider && this.hideUnscrollableSlider) {
          this.setChildVisible(slider, this.isOverflow);
        }
        break;
      default:
        axis = axis.toUpperCase();
        var slider = this.childrenMap["slider".concat(axis)];
        var hideUnscrollableSlider = this["hideUnscrollableSlider".concat(axis)];
        var isOverflow = this["isOverflow".concat(axis)];
        if (slider && hideUnscrollableSlider) {
          this.setChildVisible(slider, isOverflow);
        }
        break;
    }
  };
  var AdaptThumbSize = function AdaptThumbSize(axis) {
    switch (this.scrollMode) {
      case 0:
      case 1:
        if (!this.adaptThumbSizeMode) {
          return;
        }
        var slider = this.childrenMap.slider;
        if (!slider) {
          return;
        }

        // Change slider size according to visible ratio
        var ratio = Math.min(this.childVisibleHeight / this.childHeight, 1);
        var track = slider.childrenMap.track;
        var thumb = slider.childrenMap.thumb;
        var minThumbSize = this.minThumbSize;
        if (this.scrollMode === 0) {
          var newHeight = track.displayHeight * ratio;
          if (minThumbSize !== undefined && newHeight < minThumbSize) {
            newHeight = minThumbSize;
          }
          ResizeGameObject(thumb, undefined, newHeight);
        } else {
          var newWidth = track.displayWidth * ratio;
          if (minThumbSize !== undefined && newWidth < minThumbSize) {
            newWidth = minThumbSize;
          }
          ResizeGameObject(thumb, newWidth, undefined);
        }
        LayoutSlider(slider);
        break;
      default:
        // TODO
        axis = axis.toUpperCase();
        var adaptThumbSizeMode = this["adaptThumb".concat(axis, "SizeMode")];
        if (!adaptThumbSizeMode) {
          return;
        }
        var slider = this.childrenMap["slider".concat(axis)];
        if (!slider) {
          return;
        }

        // Change slider size according to visible ratio            
        var track = slider.childrenMap.track;
        var thumb = slider.childrenMap.thumb;
        var minThumbSize = this["minThumb".concat(axis, "Size")];
        if (axis === 'Y') {
          var ratio = Math.min(this.childVisibleHeight / this.childHeight, 1);
          var newHeight = track.displayHeight * ratio;
          if (minThumbSize !== undefined && newHeight < minThumbSize) {
            newHeight = minThumbSize;
          }
          ResizeGameObject(thumb, undefined, newHeight);
        } else {
          var ratio = Math.min(this.childVisibleWidth / this.childWidth, 1);
          var newWidth = track.displayWidth * ratio;
          if (minThumbSize !== undefined && newWidth < minThumbSize) {
            newWidth = minThumbSize;
          }
          ResizeGameObject(thumb, newWidth, undefined);
        }
        LayoutSlider(slider);
        break;
    }
  };
  var LayoutSlider = function LayoutSlider(slider) {
    // Save minSize
    var minWidthSave = slider.minWidth;
    var minHeightSave = slider.minHeight;
    // Set minSize to current size
    slider.minWidth = slider.width;
    slider.minHeight = slider.height;
    // Layout slider
    slider.layout();
    // Restore minSize
    slider.minWidth = minWidthSave;
    slider.minHeight = minHeightSave;
  };

  var UpdateController = function UpdateController() {
    switch (this.scrollMode) {
      case 0:
      case 1:
        var scroller = this.childrenMap.scroller;
        var slider = this.childrenMap.slider;
        if (scroller) {
          scroller.setValue(this.childOY);
        }
        if (slider) {
          slider.setValue(this.t);
        }
        break;
      default:
        var scrollerY = this.childrenMap.scrollerY;
        var sliderY = this.childrenMap.sliderY;
        var scrollerX = this.childrenMap.scrollerX;
        var sliderX = this.childrenMap.sliderX;
        if (scrollerY) {
          scrollerY.setValue(this.childOY);
        }
        if (sliderY) {
          sliderY.setValue(this.t);
        }
        if (scrollerX) {
          scrollerX.setValue(this.childOX);
        }
        if (sliderX) {
          sliderX.setValue(this.s);
        }
        break;
    }
  };

  var GetValue$8 = Phaser.Utils.Objects.GetValue;
  var Clamp$1 = Phaser.Math.Clamp;
  var Scrollable = /*#__PURE__*/function (_Sizer) {
    _inherits(Scrollable, _Sizer);
    var _super = _createSuper(Scrollable);
    function Scrollable(scene, config) {
      var _this;
      _classCallCheck(this, Scrollable);
      if (config === undefined) {
        config = {};
      }
      var scrollMode = GetScrollMode(config); // 0:y, 1:x, 2:xy
      // Create sizer
      var isRevererXY = scrollMode === 1;
      config.orientation = !isRevererXY ? 1 : 0;
      _this = _super.call(this, scene, config);
      _this.type = GetValue$8(config, 'type', 'rexScrollable');
      _this.scrollMode = scrollMode;

      // Add elements
      // Background
      var background = GetValue$8(config, 'background', undefined);
      if (background) {
        _this.addBackground(background);
      }
      var header = GetValue$8(config, 'header', undefined);
      if (header) {
        var align = GetValue$8(config, 'align.header', 'center');
        var headerSpace = GetValue$8(config, 'space.header', 0);
        var padding;
        if (!isRevererXY) {
          padding = {
            bottom: headerSpace
          };
        } else {
          padding = {
            right: headerSpace
          };
        }
        _this.add(header, {
          proportion: 0,
          align: align,
          padding: padding,
          expand: GetValue$8(config, 'expand.header', true)
        });
      }
      var scrollableSizer = CreateScrollableSizer(_assertThisInitialized(_this), config);
      if (scrollableSizer) {
        _this.add(scrollableSizer, {
          proportion: 1,
          align: 'center',
          padding: 0,
          expand: true
        });
      }
      var footer = GetValue$8(config, 'footer', undefined);
      if (footer) {
        var align = GetValue$8(config, 'align.footer', 'center');
        var footerSpace = GetValue$8(config, 'space.footer', 0);
        var padding;
        if (!isRevererXY) {
          padding = {
            top: footerSpace
          };
        } else {
          padding = {
            left: footerSpace
          };
        }
        _this.add(footer, {
          proportion: 0,
          align: align,
          padding: padding,
          expand: GetValue$8(config, 'expand.footer', true)
        });
      }
      _this.addChildrenMap('background', background);
      _this.addChildrenMap('header', header);
      _this.addChildrenMap('footer', footer);
      _this.runLayoutFlag = false;

      /* 
      Necessary properties of child object :
        - child.t (RW), 
      - child.childOY (RW)        
      - child.topChildOY (R)
      - child.bottomChildOY (R)
      - child.childVisibleHeight (R)
      - child.childHeight (R)
        - child.s (RW), 
      - child.childOX (RW)
      - child.leftChildOX (R)
      - child.rightChildOX (R)
      - child.childVisibleWidth (R)
      - child.childWidth (R)        
      */
      return _this;
    }
    _createClass(Scrollable, [{
      key: "postLayout",
      value: function postLayout(parent, newWidth, newHeight) {
        this.resizeController();

        // Set t, s to 0 at first runLayout()
        if (!this.runLayoutFlag) {
          this.runLayoutFlag = true;
          this.setT(0);
          if (this.scrollMode === 2) {
            this.setS(0);
          }
        }
        return this;
      }
    }, {
      key: "t",
      get: function get() {
        var t = this.childrenMap.child.t;

        // Get outer childT
        var childMargin = this.childMargin;
        if (childMargin.top !== 0 || childMargin.bottom !== 0) {
          var child = this.childrenMap.child;
          var innerHeight = child.topChildOY - child.bottomChildOY;
          var outerHeight = innerHeight + childMargin.top + childMargin.bottom;
          var outerChildOY = innerHeight * t + childMargin.top;
          t = outerHeight !== 0 ? outerChildOY / outerHeight : 0;
        }
        return t;
      },
      set: function set(value) {
        // Get inner childT
        var childMargin = this.childMargin;
        if (childMargin.top !== 0 || childMargin.bottom !== 0) {
          var child = this.childrenMap.child;
          var innerHeight = child.topChildOY - child.bottomChildOY;
          var outerHeight = innerHeight + childMargin.top + childMargin.bottom;
          var innerChildOY = outerHeight * value - childMargin.top;
          value = innerHeight !== 0 ? innerChildOY / innerHeight : 0;
        }
        this.childrenMap.child.t = value;
        this.updateController();
      }
    }, {
      key: "s",
      get: function get() {
        var s = this.childrenMap.child.s;

        // Get outer childT
        var childMargin = this.childMargin;
        if (childMargin.left !== 0 || childMargin.right !== 0) {
          var child = this.childrenMap.child;
          var innerWidth = child.leftChildOX - child.rightChildOX;
          var outerWidth = innerWidth + childMargin.left + childMargin.right;
          var outerChildOX = innerWidth * s + childMargin.left;
          s = outerWidth !== 0 ? outerChildOX / outerWidth : 0;
        }
        return s;
      },
      set: function set(value) {
        // Get inner childS
        var childMargin = this.childMargin;
        if (childMargin.left !== 0 || childMargin.right !== 0) {
          var child = this.childrenMap.child;
          var innerWidth = child.leftChildOX - child.rightChildOX;
          var outerWidth = innerWidth + childMargin.left + childMargin.right;
          var innerChildOX = outerWidth * value - childMargin.left;
          value = innerWidth !== 0 ? innerChildOX / innerWidth : 0;
        }
        this.childrenMap.child.s = value;
        this.updateController();
      }
    }, {
      key: "childOY",
      get: function get() {
        return this.childrenMap.child.childOY;
      },
      set: function set(value) {
        this.childrenMap.child.childOY = value;
        this.updateController();
      }
    }, {
      key: "childOX",
      get: function get() {
        return this.childrenMap.child.childOX;
      },
      set: function set(value) {
        this.childrenMap.child.childOX = value;
        this.updateController();
      }
    }, {
      key: "topChildOY",
      get: function get() {
        return this.childrenMap.child.topChildOY + this.childMargin.top;
      }
    }, {
      key: "bottomChildOY",
      get: function get() {
        return this.childrenMap.child.bottomChildOY - this.childMargin.bottom;
      }
    }, {
      key: "leftChildOX",
      get: function get() {
        return this.childrenMap.child.leftChildOX + this.childMargin.left;
      }
    }, {
      key: "rightChildOX",
      get: function get() {
        return this.childrenMap.child.rightChildOX - this.childMargin.right;
      }
    }, {
      key: "childVisibleHeight",
      get: function get() {
        return this.childrenMap.child.childVisibleHeight;
      }
    }, {
      key: "childHeight",
      get: function get() {
        return this.childrenMap.child.childHeight;
      }
    }, {
      key: "childVisibleWidth",
      get: function get() {
        return this.childrenMap.child.childVisibleWidth;
      }
    }, {
      key: "childWidth",
      get: function get() {
        return this.childrenMap.child.childWidth;
      }
    }, {
      key: "isOverflow",
      get: function get() {
        var child = this.childrenMap.child;
        return child.topChildOY !== child.bottomChildOY;
      }
    }, {
      key: "isOverflowY",
      get: function get() {
        return this.isOverflow;
      }
    }, {
      key: "isOverflowX",
      get: function get() {
        var child = this.childrenMap.child;
        return child.leftChildOX !== child.rightChildOX;
      }
    }, {
      key: "setChildOY",
      value: function setChildOY(value, clamp) {
        if (clamp === undefined) {
          clamp = false;
        }
        if (clamp) {
          value = Clamp$1(value, this.bottomChildOY, this.topChildOY);
        }
        this.childOY = value;
        return this;
      }
    }, {
      key: "addChildOY",
      value: function addChildOY(inc, clamp) {
        this.setChildOY(this.childOY + inc, clamp);
        return this;
      }
    }, {
      key: "setT",
      value: function setT(value, clamp) {
        if (clamp === undefined) {
          clamp = false;
        }
        if (clamp) {
          value = Clamp$1(value, 0, 1);
        }
        this.t = value;
        return this;
      }
    }, {
      key: "addT",
      value: function addT(inc, clamp) {
        this.setT(this.t + inc, clamp);
        return this;
      }
    }, {
      key: "scrollToTop",
      value: function scrollToTop() {
        this.t = 0;
        return this;
      }
    }, {
      key: "scrollToBottom",
      value: function scrollToBottom() {
        this.t = 1;
        // t will be 0 if panel/table does not exceed visible area
        if (this.t === 0) {
          return this;
        }

        // Panel/Table height might be expanded while cells are visible        
        do {
          this.t = 1;
        } while (this.t !== 1);
        return this;
      }
    }, {
      key: "setChildOX",
      value: function setChildOX(value, clamp) {
        if (clamp === undefined) {
          clamp = false;
        }
        if (clamp) {
          value = Clamp$1(value, this.leftChildOX, this.rightChildOX);
        }
        this.childOX = value;
        return this;
      }
    }, {
      key: "addChildOX",
      value: function addChildOX(inc, clamp) {
        this.setChildOX(this.childOX + inc, clamp);
        return this;
      }
    }, {
      key: "setS",
      value: function setS(value, clamp) {
        if (clamp === undefined) {
          clamp = false;
        }
        if (clamp) {
          value = Clamp$1(value, 0, 1);
        }
        this.s = value;
        return this;
      }
    }, {
      key: "addS",
      value: function addS(inc, clamp) {
        this.setS(this.s + inc, clamp);
        return this;
      }
    }, {
      key: "scrollToLeft",
      value: function scrollToLeft() {
        this.s = 0;
        return this;
      }
    }, {
      key: "scrollToRight",
      value: function scrollToRight() {
        this.s = 1;
        // s will be 0 if panel/table does not exceed visible area
        if (this.s === 0) {
          return this;
        }

        // Panel/Table height might be expanded while cells are visible        
        do {
          this.s = 1;
        } while (this.s !== 1);
        return this;
      }
    }, {
      key: "sliderEnable",
      get: function get() {
        var slider = this.childrenMap.slider;
        if (!slider) {
          return false;
        }
        return slider.enable;
      },
      set: function set(value) {
        var slider = this.childrenMap.slider;
        if (!slider) {
          return;
        }
        slider.setEnable(value);
      }
    }, {
      key: "setSliderEnable",
      value: function setSliderEnable(enabled) {
        if (enabled === undefined) {
          enabled = true;
        }
        this.sliderEnable = enabled;
        return this;
      }
    }, {
      key: "sliderYEnable",
      get: function get() {
        return this.sliderEnable;
      },
      set: function set(value) {
        this.sliderEnable = value;
      }
    }, {
      key: "setSliderYEnable",
      value: function setSliderYEnable(enabled) {
        this.setSliderEnable(enabled);
        return this;
      }
    }, {
      key: "sliderXEnable",
      get: function get() {
        var slider = this.childrenMap.sliderX;
        if (!slider) {
          return false;
        }
        return slider.enable;
      },
      set: function set(value) {
        var slider = this.childrenMap.sliderX;
        if (!slider) {
          return;
        }
        slider.setEnable(value);
      }
    }, {
      key: "setSliderXEnable",
      value: function setSliderXEnable(enabled) {
        if (enabled === undefined) {
          enabled = true;
        }
        this.sliderXEnable = enabled;
        return this;
      }
    }, {
      key: "scrollerEnable",
      get: function get() {
        var scroller = this.childrenMap.scroller;
        if (!scroller) {
          return false;
        }
        return scroller.enable;
      },
      set: function set(value) {
        var scroller = this.childrenMap.scroller;
        if (!scroller) {
          return;
        }
        scroller.setEnable(value);
      }
    }, {
      key: "setScrollerEnable",
      value: function setScrollerEnable(enabled) {
        if (enabled === undefined) {
          enabled = true;
        }
        this.scrollerEnable = enabled;
        return this;
      }
    }, {
      key: "scrollerYEnable",
      get: function get() {
        return this.scrollerEnable;
      },
      set: function set(value) {
        this.scrollerEnable = value;
      }
    }, {
      key: "setScrollerYEnable",
      value: function setScrollerYEnable(enabled) {
        this.setScrollerEnable(enabled);
        return this;
      }
    }, {
      key: "scrollerXEnable",
      get: function get() {
        var scroller = this.childrenMap.scrollerX;
        if (!scroller) {
          return false;
        }
        return scroller.enable;
      },
      set: function set(value) {
        var scroller = this.childrenMap.scrollerX;
        if (!scroller) {
          return;
        }
        scroller.setEnable(value);
      }
    }, {
      key: "setScrollerXEnable",
      value: function setScrollerXEnable(enabled) {
        if (enabled === undefined) {
          enabled = true;
        }
        this.scrollerXEnable = enabled;
        return this;
      }
    }, {
      key: "mouseWheelScrollerEnable",
      get: function get() {
        var mouseWheelScroller = this.childrenMap.mouseWheelScroller;
        if (!mouseWheelScroller) {
          return false;
        }
        return mouseWheelScroller.enable;
      },
      set: function set(value) {
        var mouseWheelScroller = this.childrenMap.mouseWheelScroller;
        if (!mouseWheelScroller) {
          return;
        }
        mouseWheelScroller.setEnable(value);
      }
    }, {
      key: "setMouseWheelScrollerEnable",
      value: function setMouseWheelScrollerEnable(enabled) {
        if (enabled === undefined) {
          enabled = true;
        }
        this.mouseWheelScrollerEnable = enabled;
        return this;
      }
    }, {
      key: "mouseWheelScrollerYEnable",
      get: function get() {
        return this.mouseWheelScrollerEnable;
      },
      set: function set(value) {
        this.mouseWheelScrollerEnable = value;
      }
    }, {
      key: "setMouseWheelScrollerYEnable",
      value: function setMouseWheelScrollerYEnable(enabled) {
        this.setMouseWheelScrollerEnable(enabled);
        return this;
      }
    }, {
      key: "mouseWheelScrollerXEnable",
      get: function get() {
        var mouseWheelScroller = this.childrenMap.mouseWheelScrollerX;
        if (!mouseWheelScroller) {
          return false;
        }
        return mouseWheelScroller.enable;
      },
      set: function set(value) {
        var mouseWheelScroller = this.childrenMap.mouseWheelScrollerX;
        if (!mouseWheelScroller) {
          return;
        }
        mouseWheelScroller.setEnable(value);
      }
    }, {
      key: "setMouseWheelScrollerXEnable",
      value: function setMouseWheelScrollerXEnable(enabled) {
        if (enabled === undefined) {
          enabled = true;
        }
        this.mouseWheelScrollerXEnable = enabled;
        return this;
      }
    }, {
      key: "setDropZoneEnable",
      value: function setDropZoneEnable(enable) {
        if (enable === undefined) {
          enable = true;
        }
        var child = this.childrenMap.child;
        child.setInteractive();
        child.input.dropZone = enable;
        return this;
      }
    }]);
    return Scrollable;
  }(Sizer);
  var Methods = {
    resizeController: ResizeController,
    updateController: UpdateController
  };

  // mixin
  Object.assign(Scrollable.prototype, Methods);

  var DataMethods = {
    enableData: function enableData() {
      if (this.data === undefined) {
        this.data = {};
      }
      return this;
    },
    setData: function setData(key, value) {
      this.enableData();
      if (arguments.length === 1) {
        var data = key;
        for (key in data) {
          this.data[key] = data[key];
        }
      } else {
        this.data[key] = value;
      }
      return this;
    },
    getData: function getData(key, defaultValue) {
      this.enableData();
      return key === undefined ? this.data : GetValue$R(this.data, key, defaultValue);
    },
    incData: function incData(key, inc, defaultValue) {
      if (defaultValue === undefined) {
        defaultValue = 0;
      }
      this.enableData();
      this.setData(key, this.getData(key, defaultValue) + inc);
      return this;
    },
    mulData: function mulData(key, mul, defaultValue) {
      if (defaultValue === undefined) {
        defaultValue = 0;
      }
      this.enableData();
      this.setData(key, this.getData(key, defaultValue) * mul);
      return this;
    },
    clearData: function clearData() {
      if (this.data) {
        Clear(this.data);
      }
      return this;
    }
  };

  var Cell = /*#__PURE__*/function () {
    function Cell(parent, config) {
      _classCallCheck(this, Cell);
      this.container = null;
      this._deltaHeight = 0;
      this.setParent(parent);
      // this.resetFromJSON(config);
    }
    _createClass(Cell, [{
      key: "setParent",
      value: function setParent(parent) {
        this.parent = parent; // parent: table
        this.parentContainer = parent.getParentContainer();
      }

      // resetFromJSON(o) {
      //     return this;
      // }
    }, {
      key: "destroy",
      value: function destroy(fromScene) {
        if (fromScene === undefined) {
          fromScene = false;
        }
        if (!fromScene) {
          this.destroyContainer();
        }
        this.deltaHeight = 0;
        this.data = undefined;
        this.container = null;
        this.parent = undefined;
        this.parentContainer = undefined;
      }
    }, {
      key: "table",
      get: function get() {
        return this.parent;
      }
    }, {
      key: "scrollMode",
      get: function get() {
        return this.parentContainer.scrollMode;
      }
    }, {
      key: "colIndx",
      get: function get() {
        return this.parent.cellIndxeToColIndex(this.index);
      }
    }, {
      key: "rowIndx",
      get: function get() {
        return this.parent.cellIndxeToRowIndex(this.index);
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        return this.container;
      }
    }, {
      key: "setContainer",
      value: function setContainer(container) {
        if (!container) {
          this.destroyContainer();
          return this;
        }
        if (this.container) {
          this.container.destroy();
        }
        this.container = container;
        this.parentContainer.add(container);
        return this;
      }
    }, {
      key: "destroyContainer",
      value: function destroyContainer() {
        if (this.container) {
          this.container.destroy();
          this.container = null;
        }
        return this;
      }
    }, {
      key: "popContainer",
      value: function popContainer() {
        if (this.container) {
          var container = this.container;
          this.container = null;
          this.parentContainer.remove(container);
          return container;
        } else {
          return null;
        }
      }
    }, {
      key: "setXY",
      value: function setXY(x, y) {
        if (this.container) {
          this.parentContainer.setChildLocalPosition(this.container, x, y);
        }
        return this;
      }
    }, {
      key: "setCellContainerAlign",
      value: function setCellContainerAlign(align) {
        if (typeof align === 'string') {
          align = AlignConst[align];
        }
        this.cellContainerAlign = align;
        return this;
      }
    }, {
      key: "deltaHeight",
      get: function get() {
        return this._deltaHeight;
      },
      set: function set(deltaHeight) {
        if (deltaHeight == null) {
          deltaHeight = 0;
        }
        var table = this.parent;
        if (this._deltaHeight === 0 && deltaHeight !== 0) {
          table.nonZeroDeltaHeightCount++;
        } else if (this._deltaHeight !== 0 && deltaHeight === 0) {
          table.nonZeroDeltaHeightCount--;
        }
        var isTableHeightChanged = this._deltaHeight !== deltaHeight;
        this._deltaHeight = deltaHeight;
        if (isTableHeightChanged) {
          table.resetTotalRowsHeight();
          var eventName = this.scrollMode === 0 ? 'cellheightchange' : 'cellwidthchange';
          this.parentContainer.emit(eventName, this, this.container, this.parentContainer);
        }
      }
    }, {
      key: "deltaWidth",
      get: function get() {
        return this.deltaHeight;
      },
      set: function set(deltaWidth) {
        this.deltaHeight = deltaWidth;
      }
    }, {
      key: "setDeltaHeight",
      value: function setDeltaHeight(deltaHeight) {
        this.deltaHeight = deltaHeight;
        return this;
      }
    }, {
      key: "setDeltaWidth",
      value: function setDeltaWidth(deltaWidth) {
        this.deltaHeight = deltaWidth;
        return this;
      }
    }, {
      key: "height",
      get: function get() {
        if (this.scrollMode === 0) {
          return this.deltaHeight + this.parent.defaultCellHeight;
        } else {
          return this.parent.defaultCellWidth;
        }
      },
      set: function set(height) {
        // Only worked when scrollMode is 0
        if (this.scrollMode === 1) {
          return;
        }
        this.setDeltaHeight(height - this.parent.defaultCellHeight);
      }
    }, {
      key: "setHeight",
      value: function setHeight(height) {
        // Only worked when scrollMode is 0
        this.height = height;
        return this;
      }
    }, {
      key: "width",
      get: function get() {
        if (this.scrollMode === 0) {
          return this.parent.defaultCellWidth;
        } else {
          return this.deltaHeight + this.parent.defaultCellHeight;
        }
      },
      set: function set(width) {
        // Only worked when scrollMode is 1
        if (this.scrollMode === 0) {
          return;
        }
        this.setDeltaHeight(width - this.parent.defaultCellHeight);
      }
    }, {
      key: "setWidth",
      value: function setWidth(width) {
        this.width = width;
        return this;
      }
    }, {
      key: "scene",
      get: function get() {
        return this.parentContainer.scene;
      }
    }]);
    return Cell;
  }();
  Object.assign(Cell.prototype, DataMethods);

  var Stack = /*#__PURE__*/function () {
    function Stack() {
      _classCallCheck(this, Stack);
      this.items = [];
    }
    _createClass(Stack, [{
      key: "destroy",
      value: function destroy() {
        this.clear();
        this.items = undefined;
      }
    }, {
      key: "pop",
      value: function pop() {
        return this.items.length > 0 ? this.items.pop() : null;
      }
    }, {
      key: "push",
      value: function push(l) {
        this.items.push(l);
        return this;
      }
    }, {
      key: "pushMultiple",
      value: function pushMultiple(arr) {
        this.items.push.apply(this.items, arr);
        arr.length = 0;
        return this;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.items.length = 0;
        return this;
      }
    }]);
    return Stack;
  }();

  var GetValue$7 = Phaser.Utils.Objects.GetValue;
  var SpliceOne = Phaser.Utils.Array.SpliceOne;
  var Table = /*#__PURE__*/function () {
    function Table(parent, config) {
      _classCallCheck(this, Table);
      this.parent = parent; // parent: GridTable game object (Container)
      this.cells = [];
      this.cellPool = new Stack();
      this.resetFromJSON(config);
    }
    _createClass(Table, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        if (o === undefined) {
          o = {};
        }
        this.colCount = undefined;
        this.nonZeroDeltaHeightCount = 0;
        this.resetTotalRowsHeight();
        var cellHeight = o.cellHeight;
        if (cellHeight === undefined) {
          cellHeight = 30;
        }
        var cellWidth = o.cellWidth;
        if (cellWidth === undefined) {
          cellWidth = 30;
        }
        this.setDefaultCellHeight(cellHeight);
        this.setDefaultCellWidth(cellWidth);
        this.initCells(GetValue$7(o, 'cellsCount', 0));
        this.setColumnCount(GetValue$7(o, 'columns', 1));
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy(fromScene) {
        // GridTable is destroyed, all cell containers will also be destroyed too
        // Don't have to freeCell
        this.cellPool.destroy();
        this.cells = undefined;
        this.parent = undefined;
      }
    }, {
      key: "defaultCellHeightMode",
      get: function get() {
        return this.nonZeroDeltaHeightCount === 0;
      }
    }, {
      key: "setDefaultCellHeight",
      value: function setDefaultCellHeight(height) {
        this.defaultCellHeight = height;
        return this;
      }
    }, {
      key: "setDefaultCellWidth",
      value: function setDefaultCellWidth(width) {
        this.defaultCellWidth = width;
        return this;
      }
    }, {
      key: "initCells",
      value: function initCells(size) {
        var cells = this.cells;
        cells.length = size;
        for (var i = 0; i < size; i++) {
          cells[i] = null;
        }
        return this;
      }
    }, {
      key: "insertNewCells",
      value: function insertNewCells(cellIdx, count) {
        var cells = this.cells;
        if (cellIdx === cells.length) {
          // append at end of array
          var endIdx = cellIdx + count;
          cells.legth = endIdx;
          for (var i = cellIdx; i < endIdx; i++) {
            cells[i] = null;
          }
        } else {
          var _this$cells;
          var newCells = [];
          newCells.length = count;
          for (var i = 0; i < count; i++) {
            newCells[i] = null;
          }
          (_this$cells = this.cells).splice.apply(_this$cells, [cellIdx, 0].concat(newCells));
        }
        this.resetTotalRowsHeight();
        return this;
      }
    }, {
      key: "removeCells",
      value: function removeCells(cellIdx, count) {
        var endIdx = cellIdx + count;
        for (var i = cellIdx; i < endIdx; i++) {
          this.freeCell(i);
        }
        if (endIdx === this.cells.length) {
          // remove until end of array
          this.cells.length = cellIdx;
        } else {
          if (count === 1) {
            SpliceOne(this.cells, cellIdx);
          } else {
            this.cells.splice(cellIdx, count);
          }
          this.buildCellIndex(cellIdx);
        }
        this.resetTotalRowsHeight();
        return this;
      }
    }, {
      key: "setColumnCount",
      value: function setColumnCount(cnt) {
        this.colCount = cnt;
        this.resetTotalRowsHeight();
        return this;
      }
    }, {
      key: "rowCount",
      get: function get() {
        return Math.ceil(this.cells.length / this.colCount);
      }
    }, {
      key: "cellsCount",
      get: function get() {
        return this.cells.length;
      }
    }, {
      key: "isValidCellIdx",
      value: function isValidCellIdx(idx) {
        return idx >= 0 && idx < this.cells.length;
      }
    }, {
      key: "heightToRowIndex",
      value: function heightToRowIndex(height, roundMode) {
        if (roundMode === undefined) {
          roundMode = 0;
        }
        /*
        roundMode:
        - 0 : floor
        - 1 : ceil
        - 2 :             
            - Default : floor
            - Vary : plus one if rowIdx is an integer, else floor
        */

        if (height === 0) {
          return 0;
        }

        // defaultCellHeightMode
        if (this.defaultCellHeightMode) {
          var rowIdx = height / this.defaultCellHeight;
          switch (roundMode) {
            case 1:
              rowIdx = Math.ceil(rowIdx);
              break;
            default:
              // 0, 2
              rowIdx = Math.floor(rowIdx);
              break;
          }
          return rowIdx;
        }

        // count cell height one by one
        var rowCount = this.rowCount;
        var remainder = height,
          isValidIdx;
        var rowHeight,
          rowIdx = 0;
        while (1) {
          rowHeight = this.getRowHeight(rowIdx);
          remainder -= rowHeight;
          isValidIdx = rowIdx >= 0 && rowIdx < rowCount;
          if (remainder > 0 && isValidIdx) {
            rowIdx += 1;
          } else if (remainder === 0) {
            if (roundMode === 2) {
              rowIdx += 1;
            }
            return rowIdx;
          } else {
            if (roundMode === 1) {
              var preRowIdx = rowIdx;
              rowIdx += 1;
              isValidIdx = rowIdx >= 0 && rowIdx < rowCount;
              if (!isValidIdx) {
                rowIdx = preRowIdx;
              }
            }
            return rowIdx;
          }
        }
      }
    }, {
      key: "widthToColIndex",
      value: function widthToColIndex(width, isCeil) {
        if (width === 0) {
          return 0;
        }
        var colIdx = width / this.defaultCellWidth;
        if (isCeil) {
          colIdx = Math.ceil(colIdx);
        } else {
          colIdx = Math.floor(colIdx);
        }
        return colIdx;
      }
    }, {
      key: "colRowToCellIndex",
      value: function colRowToCellIndex(colIdx, rowIdx) {
        if (colIdx >= this.colCount) {
          return null;
        }
        return rowIdx * this.colCount + colIdx;
      }
    }, {
      key: "rowIndexToHeight",
      value: function rowIndexToHeight(start, end) {
        // defaultCellHeightMode
        if (this.defaultCellHeightMode) {
          return (end - start + 1) * this.defaultCellHeight;
        }
        var h,
          sum = 0;
        for (var i = start; i <= end; i++) {
          h = this.getRowHeight(i);
          sum += h;
        }
        return sum;
      }
    }, {
      key: "colIndexToWidth",
      value: function colIndexToWidth(start, end) {
        return (end - start + 1) * this.defaultCellWidth;
      }
    }, {
      key: "getRowHeight",
      value: function getRowHeight(rowIdx) {
        var cnt = this.colCount;
        // single column
        if (cnt <= 1) {
          return this.getCellHeight(this.colRowToCellIndex(0, rowIdx));
        }

        // multiple columns, get the maximum height
        var maxHeight = 0,
          cellHeight;
        for (var i = 0; i < cnt; i++) {
          cellHeight = this.getCellHeight(this.colRowToCellIndex(i, rowIdx));
          if (maxHeight < cellHeight) maxHeight = cellHeight;
        }
        return maxHeight;
      }
    }, {
      key: "getColWidth",
      value: function getColWidth(idx) {
        return this.defaultCellWidth;
      }
    }, {
      key: "getCellHeight",
      value: function getCellHeight(cellIdx) {
        if (!this.isValidCellIdx(cellIdx)) {
          return 0;
        }
        var cellHeight;
        if (this.defaultCellHeightMode) cellHeight = this.defaultCellHeight;else {
          var cell = this.getCell(cellIdx, false);
          var deltaHeight = cell ? cell.deltaHeight : 0;
          cellHeight = this.defaultCellHeight + deltaHeight;
        }
        return cellHeight;
      }
    }, {
      key: "resetTotalRowsHeight",
      value: function resetTotalRowsHeight() {
        this._totalRowsHeight = null;
      }
    }, {
      key: "totalRowsHeight",
      get: function get() {
        if (this._totalRowsHeight === null) {
          this._totalRowsHeight = this.rowIndexToHeight(0, this.rowCount - 1);
        }
        return this._totalRowsHeight;
      }
    }, {
      key: "totalColumnWidth",
      get: function get() {
        return this.colCount * this.defaultCellWidth;
      }
    }, {
      key: "cellIndxeToColIndex",
      value: function cellIndxeToColIndex(cellIdx) {
        return cellIdx % this.colCount;
      }
    }, {
      key: "cellIndxeToRowIndex",
      value: function cellIndxeToRowIndex(cellIdx) {
        return Math.floor(cellIdx / this.colCount);
      }
    }, {
      key: "getCell",
      value: function getCell(cellIdx, createNewCell) {
        if (!this.isValidCellIdx(cellIdx)) {
          return null;
        }
        if (createNewCell === undefined) {
          createNewCell = true;
        }
        if (this.cells[cellIdx] === null && createNewCell) {
          var cell = this.newCell(cellIdx);
          this.cells[cellIdx] = cell;
        }
        return this.cells[cellIdx];
      }
    }, {
      key: "newCell",
      value: function newCell(cellIdx) {
        var cell = this.cellPool.pop();
        if (cell === null) {
          cell = new Cell(this);
        } else {
          cell.setParent(this);
        }
        cell.index = cellIdx;
        return cell;
      }
    }, {
      key: "buildCellIndex",
      value: function buildCellIndex(startIdx) {
        if (startIdx === undefined) {
          startIdx = 0;
        }
        var cells = this.cells,
          cell;
        for (var i = startIdx, len = cells.length; i < len; i++) {
          cell = cells[i];
          if (cell) {
            cell.index = i;
          }
        }
        return this;
      }
    }, {
      key: "getParentContainer",
      value: function getParentContainer() {
        return this.parent;
      }
    }, {
      key: "freeCell",
      value: function freeCell(cell) {
        if (typeof cell === 'number') {
          cell = this.cells[cell];
        }
        if (!cell) {
          return this;
        }
        cell.destroy();
        this.cellPool.push(cell);
        return this;
      }
    }]);
    return Table;
  }();

  var SetTableOY = function SetTableOY(oy) {
    var table = this.table;
    var topTableOY = this.topTableOY;
    var bottomTableOY = this.bottomTableOY;
    var tableOYExceedTop = oy > this.topTableOY;
    var tableOYExeceedBottom = oy < this.bottomTableOY;
    if (this.clampTableOXY) {
      var rowCount = table.rowCount;
      var visibleRowCount = table.heightToRowIndex(this.instHeight, 1);

      // less then 1 page
      if (rowCount < visibleRowCount) {
        oy = 0;
      } else if (tableOYExceedTop) {
        oy = topTableOY;
      } else if (tableOYExeceedBottom) {
        oy = bottomTableOY;
      }
    }
    if (this._tableOY !== oy) {
      this._tableOY = oy;
    }
    if (tableOYExceedTop) {
      if (!this.execeedTopState) {
        this.emit('execeedtop', this, oy, topTableOY);
      }
    }
    this.execeedTopState = tableOYExceedTop;
    if (tableOYExeceedBottom) {
      if (!this.execeedBottomState) {
        this.emit('execeedbottom', this, oy, bottomTableOY);
      }
    }
    this.execeedBottomState = tableOYExeceedBottom;
    return this;
  };

  var SetTableOX = function SetTableOX(ox) {
    var table = this.table;
    var leftTableOX = this.leftTableOX;
    var rightTableOX = this.rightTableOX;
    var tableOXExeceedLeft = ox > this.leftTableOX;
    var tableOXExeceedRight = ox < this.rightTableOX;
    if (this.clampTableOXY) {
      var colCount = table.colCount;
      var visibleColCount = table.widthToColIndex(this.instWidth, true);

      // less then 1 page            
      if (colCount < visibleColCount) {
        ox = 0;
      } else if (tableOXExeceedLeft) {
        ox = leftTableOX;
      } else {
        // var tableVisibleWidth = this.tableVisibleWidth;
        if (tableOXExeceedRight) ox = rightTableOX;
      }
    }
    if (this._tableOX !== ox) {
      this._tableOX = ox;
    }
    if (tableOXExeceedLeft) {
      if (!this.execeedLeftState) {
        this.emit('execeedleft', this, ox, leftTableOX);
      }
    }
    this.execeedLeftState = tableOXExeceedLeft;
    if (tableOXExeceedRight) {
      if (!this.execeedRightState) {
        this.emit('execeedright', this, ox, rightTableOX);
      }
    }
    this.execeedRightState = tableOXExeceedRight;
    return this;
  };

  var MaskToGameObject = function MaskToGameObject(mask) {
    return mask.hasOwnProperty('geometryMask') ? mask.geometryMask : mask.bitmapMask;
  };

  var Intersects = Phaser.Geom.Intersects.RectangleToRectangle;
  var Overlaps = Phaser.Geom.Rectangle.Overlaps;
  var MaskChildren = function MaskChildren(parent, mask, children) {
    if (!mask) {
      return;
    }
    if (children === undefined) {
      children = parent.getAllChildren();
    }
    var parentBounds = parent.getBounds();
    var maskGameObject = MaskToGameObject(mask);
    var child, childBounds, visiblePointsNumber;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];
      if (child === maskGameObject) {
        continue;
      }
      if (!IsVisible(child)) {
        // Child is invisible before masking
        continue;
      }
      if (child.getBounds) {
        childBounds = child.getBounds(childBounds);
        visiblePointsNumber = ContainsPoints(parentBounds, childBounds);
        switch (visiblePointsNumber) {
          case 4:
            // 4 points are all inside visible window, set visible
            ShowAll(parent, child);
            break;
          case 0:
            // No point is inside visible window
            // Parent intersects with child, or parent is inside child, set visible, and apply mask
            if (Intersects(parentBounds, childBounds) || Overlaps(parentBounds, childBounds)) {
              ShowSome(parent, child, mask);
            } else {
              // Set invisible
              ShowNone(parent, child);
            }
            break;
          default:
            // Part of points are inside visible window, set visible, and apply mask
            ShowSome(parent, child, mask);
            break;
        }
      } else {
        ShowSome(parent, child, mask);
      }
    }
  };
  var IsVisible = function IsVisible(gameObject) {
    if (!gameObject.displayList) {
      return false;
    }
    while (1) {
      var localState = gameObject.rexContainer;
      if (!localState) {
        // Top game object
        return gameObject.visible;
      } else if (localState.visible) {
        var parent = localState.parent;
        if (parent) {
          // Test parent's visible
          gameObject = parent;
          continue;
        } else {
          // Top visible game object
          return true;
        }
      } else {
        // Current game object is invisible
        return false;
      }
    }
  };
  var ContainsPoints = function ContainsPoints(rectA, rectB) {
    var top = rectB.top,
      bottom = rectB.bottom,
      left = rectB.left,
      right = rectB.right;
    var result = 0;
    result += rectA.contains(left, top) ? 1 : 0;
    result += rectA.contains(left, bottom) ? 1 : 0;
    result += rectA.contains(right, top) ? 1 : 0;
    result += rectA.contains(right, bottom) ? 1 : 0;
    return result;
  };
  var ShowAll = function ShowAll(parent, child, mask) {
    if (!child.hasOwnProperty('isRexContainerLite')) {
      if (child.clearMask) {
        child.clearMask();
      }
      parent.setChildMaskVisible(child, true);
    } else {
      child.syncChildrenEnable = false;
      parent.setChildMaskVisible(child, true);
      child.syncChildrenEnable = true;
    }
  };
  var ShowSome = function ShowSome(parent, child, mask) {
    if (!child.hasOwnProperty('isRexContainerLite')) {
      if (child.setMask) {
        child.setMask(mask);
      }
      parent.setChildMaskVisible(child, true);
    } else {
      child.syncChildrenEnable = false;
      parent.setChildMaskVisible(child, true);
      child.syncChildrenEnable = true;
    }
  };
  var ShowNone = function ShowNone(parent, child, mask) {
    if (!child.hasOwnProperty('isRexContainerLite')) {
      if (child.clearMask) {
        child.clearMask();
      }
      parent.setChildMaskVisible(child, false);
    } else {
      child.syncChildrenEnable = false;
      parent.setChildMaskVisible(child, false);
      child.syncChildrenEnable = true;
    }
  };

  var DrawShape = function DrawShape(width, height, padding, originX, originY) {
    this.clear().fillStyle(0xffffff);
    switch (this.shapeType) {
      case 1:
        // circle
        // Assume that all padding are the same value in this circle shape
        padding = padding.left;
        var radius = Math.min(width, height) / 2;
        this.fillCircle(-width * (originX - 0.5),
        // centerX
        -height * (originY - 0.5),
        // centerY
        radius + padding // radius
        );

        break;
      default:
        // 0|'rectangle'
        this.fillRect(-(width * originX) - padding.left,
        // x
        -(height * originY) - padding.top,
        // y
        width + padding.left + padding.right,
        // width
        height + padding.top + padding.bottom // height
        );

        break;
    }
  };

  var Graphics = Phaser.GameObjects.Graphics;
  var DefaultMaskGraphics = /*#__PURE__*/function (_Graphics) {
    _inherits(DefaultMaskGraphics, _Graphics);
    var _super = _createSuper(DefaultMaskGraphics);
    function DefaultMaskGraphics(parent, shapeType, padding) {
      var _this;
      _classCallCheck(this, DefaultMaskGraphics);
      if (shapeType === undefined) {
        shapeType = 0;
      }
      if (typeof shapeType === 'string') {
        shapeType = SHAPEMODE[shapeType];
      }
      _this = _super.call(this, parent.scene);
      _this.parent = parent;
      _this.shapeType = shapeType;
      _this.padding = GetBoundsConfig(padding);
      _this.setPosition().resize().setVisible(false);
      // Don't add it to display list
      return _this;
    }
    _createClass(DefaultMaskGraphics, [{
      key: "destroy",
      value: function destroy() {
        this.parent = undefined;
        _get(_getPrototypeOf(DefaultMaskGraphics.prototype), "destroy", this).call(this);
        return this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(x, y) {
        var parent = this.parent;
        if (x === undefined) {
          x = parent.x;
        }
        if (y === undefined) {
          y = parent.y;
        }
        _get(_getPrototypeOf(DefaultMaskGraphics.prototype), "setPosition", this).call(this, x, y);
        return this;
      }
    }, {
      key: "resize",
      value: function resize(width, height, padding) {
        var parent = this.parent;
        if (width === undefined) {
          width = parent.width;
        }
        if (height === undefined) {
          height = parent.height;
        }
        if (padding === undefined) {
          padding = this.padding;
        } else if (typeof padding === 'number') {
          padding = GetBoundsConfig(padding);
        }
        var isSizeChanged = this.width !== width || this.height !== height;
        var isPaddingChanged = this.padding !== padding && !IsKeyValueEqual(this.padding, padding);
        if (!isSizeChanged && !isPaddingChanged) {
          return this;
        }
        this.width = width;
        this.height = height;
        if (isPaddingChanged) {
          Clone(padding, this.padding);
        }

        // Graphics does not have originX, originY properties
        this.originX = parent.originX;
        this.originY = parent.originY;
        DrawShape.call(this, width, height, padding, parent.originX, parent.originY);
        return this;
      }
    }, {
      key: "setOrigin",
      value: function setOrigin(originX, originY) {
        if (originY === undefined) {
          originY = originX;
        }
        var parent = this.parent;
        if (originX === undefined) {
          originX = parent.originX;
        }
        if (originY === undefined) {
          originY = parent.originY;
        }
        if (this.originX === originX && this.originY === originY) {
          return this;
        }
        this.originX = originX;
        this.originY = originY;
        DrawShape.call(this, this.width, this.height, this.padding, originX, originY);
        return this;
      }
    }]);
    return DefaultMaskGraphics;
  }(Graphics);
  var SHAPEMODE = {
    rectangle: 0,
    circle: 1
  };

  var AddChildMask = function AddChildMask(maskTarget, sizeTarget, shape, padding) {
    var maskGameObject = new DefaultMaskGraphics(sizeTarget, shape, padding); // A Graphics game object
    if (maskTarget && !maskTarget.isRexSizer) {
      // Sizer game object can't apply mask
      var mask = maskGameObject.createGeometryMask();
      maskTarget.setMask(mask);
      this.once('destroy', function () {
        maskTarget.setMask();
        mask.destroy();
      });
    }
    this.pin(maskGameObject);
    return maskGameObject;
  };

  var GetValue$6 = Phaser.Utils.Objects.GetValue;
  var MASKUPDATEMODE = {
    update: 0,
    everyTick: 1
  };
  var ChildrenMaskMethods = {
    setupChildrenMask: function setupChildrenMask(config) {
      if (config === false) {
        // No children mask
        return this;
      }
      this.setMaskUpdateMode(GetValue$6(config, 'updateMode', 0));
      this.enableChildrenMask(GetValue$6(config, 'padding', 0));
      this.setMaskLayer(GetValue$6(config, 'layer', undefined));
      this.startMaskUpdate();
      return this;
    },
    destroyChildrenMask: function destroyChildrenMask() {
      if (!this.childrenMask) {
        return this;
      }
      this.stopMaskUpdate();
      this.childrenMask.destroy();
      this.childrenMask = undefined;
      return this;
    },
    setMaskUpdateMode: function setMaskUpdateMode(mode) {
      if (typeof mode === 'string') {
        mode = MASKUPDATEMODE[mode];
      }
      this.maskUpdateMode = mode;
      return this;
    },
    startMaskUpdate: function startMaskUpdate() {
      this.scene.game.events.on('poststep', this.maskChildren, this);
    },
    stopMaskUpdate: function stopMaskUpdate() {
      this.scene.game.events.off('poststep', this.maskChildren, this);
    },
    enableChildrenMask: function enableChildrenMask(maskPadding) {
      var maskGameObject = AddChildMask.call(this, null, this, 0, maskPadding);
      this.childrenMask = maskGameObject.createGeometryMask();
      // this.childrenMask is a mask object, not a (Graphics) game object
      return this;
    },
    setMaskChildrenFlag: function setMaskChildrenFlag(value) {
      if (value === undefined) {
        value = true;
      }
      this.maskChildrenFlag = value;
      return this;
    },
    setMaskLayer: function setMaskLayer(layer) {
      // To reduce amount of masked game object
      this.maskLayer = layer;
      return this;
    },
    maskChildren: function maskChildren() {
      if (!this.childrenMask ||
      // No childrenMask
      !this.maskChildrenFlag ||
      // No maskChildrenFlag set
      this.alpha === 0 || !this.visible // Parent is not visible
      ) {
        return this;
      }
      if (this.privateRenderLayer) {
        this.privateRenderLayer.setMask(this.childrenMask);
      } else if (this.maskLayer) {
        // 1. Add parent and children into layer
        this.addToLayer(this.maskLayer);
        // 2. Mask this layer
        this.maskLayer.setMask(this.childrenMask);
      } else {
        MaskChildren(this, this.childrenMask);
      }
      if (this.maskUpdateMode === 0) {
        this.maskChildrenFlag = false;
      }
      return this;
    },
    layoutChildrenMask: function layoutChildrenMask() {
      if (!this.childrenMask) {
        return this;
      }
      var maskGameObject = MaskToGameObject(this.childrenMask);
      maskGameObject.setPosition().resize();
      this.resetChildPositionState(maskGameObject);
      return this;
    }
  };

  var ShowCells = function ShowCells() {
    if (this.cellsCount === 0) {
      return;
    }
    var table = this.table;
    this.startRowIndex = Math.max(table.heightToRowIndex(-this.tableOY, 2), 0);
    var rowIndex = this.startRowIndex;
    var startColumnIndex = Math.max(table.widthToColIndex(-this.tableOX), 0);
    var columnIndex = startColumnIndex;
    var cellIdx = table.colRowToCellIndex(columnIndex, rowIndex);
    var bottomBound = this.bottomBound;
    var rightBound = this.rightBound;
    var lastIdx = table.cellsCount - 1;
    var lastColIdx = table.colCount - 1;
    var startCellTLX = this.getCellTLX(columnIndex),
      cellTLX = startCellTLX;
    var cellTLY = this.getCellTLY(rowIndex);
    while (cellTLY < bottomBound && cellIdx <= lastIdx) {
      if (this.table.isValidCellIdx(cellIdx)) {
        var cell = table.getCell(cellIdx, true);
        this.visibleCells.set(cell);
        if (!this.preVisibleCells.contains(cell)) {
          this.showCell(cell);
        }
        var x, y;
        if (this.scrollMode === 0) {
          x = cellTLX;
          y = cellTLY;
        } else {
          x = cellTLY;
          y = cellTLX;
        }
        if (cell.cellContainerAlign == null) {
          cell.setXY(x, y);
        } else {
          var cellContainer = cell.getContainer();
          AlignIn(cellContainer, x, y, cell.width, cell.height, cell.cellContainerAlign);
          cell.setXY(cellContainer.x, cellContainer.y);
        }
      }
      if (cellTLX < rightBound && columnIndex < lastColIdx) {
        cellTLX += table.getColWidth(columnIndex);
        columnIndex += 1;
      } else {
        cellTLX = startCellTLX;
        cellTLY += table.getRowHeight(rowIndex);
        columnIndex = startColumnIndex;
        rowIndex += 1;
      }
      cellIdx = table.colRowToCellIndex(columnIndex, rowIndex);
    }
  };

  var ShowCell = function ShowCell(cell) {
    // Attach container to cell by cell.setContainer(container) under this event
    var reusedCellContainer = null;
    var cellContainer = cell.getContainer();
    if (cellContainer) {
      reusedCellContainer = cellContainer;
      cell.popContainer();
    } else if (this.cellContainersPool) {
      reusedCellContainer = this.cellContainersPool.getFirstDead();
      if (reusedCellContainer !== null) {
        // Reuse this game object
        reusedCellContainer.setActive(true).setVisible(true);
      }
    }
    this.emit('cellvisible', cell, reusedCellContainer, this);
    if (this.cellContainersPool) {
      var cellContainer = cell.getContainer();
      if (cellContainer) {
        if (reusedCellContainer === null) {
          this.cellContainersPool.add(cellContainer); // New cell container, add to pool
        } else if (reusedCellContainer !== cellContainer) {
          // Why reusedCellContainer is not equal to cellContainer?
          this.cellContainersPool.add(cellContainer); // New cell container, add to pool
          this.cellContainersPool.killAndHide(reusedCellContainer); // Unused cell container, put back to pool
        }
      } else {
        // No cell container added
        if (reusedCellContainer !== null) {
          this.cellContainersPool.killAndHide(reusedCellContainer); // Unused cell container, put back to pool
        }
      }
    }
  };

  var GetCellTLX = function GetCellTLX(colIdx) {
    var ox = this.scrollMode === 0 ? this.topLeftX : this.topLeftY;
    var x = this.tableOX + this.table.colIndexToWidth(0, colIdx - 1) + ox;
    return x;
  };

  var GetCellTLY = function GetCellTLY(rowIdx) {
    var oy = this.scrollMode === 0 ? this.topLeftY : this.topLeftX;
    var y = this.tableOY + this.table.rowIndexToHeight(0, rowIdx - 1) + oy;
    return y;
  };

  var HideCells = function HideCells() {
    var preList = this.preVisibleCells;
    var curList = this.visibleCells;
    preList.iterate(function (cell) {
      if (!curList.contains(cell)) {
        this.hideCell(cell);
      }
    }, this);
  };

  var HideCell = function HideCell(cell) {
    // Option: pop container of cell by cell.popContainer() under this event 
    this.emit('cellinvisible', cell);
    if (this.cellContainersPool) {
      var cellContainer = cell.popContainer(); // null if already been removed
      if (cellContainer) {
        this.cellContainersPool.killAndHide(cellContainer);
      }
    }
    cell.destroyContainer(); // Destroy container of cell
  };

  var UpdateTable = function UpdateTable(refresh) {
    if (refresh === undefined) {
      refresh = false;
    }
    if (refresh) {
      ClearVisibleCellIndexes.call(this);
      this.hideCells();
    }
    ClearVisibleCellIndexes.call(this);
    this.showCells();
    this.hideCells();
    this.setMaskChildrenFlag();
    return this;
  };
  var ClearVisibleCellIndexes = function ClearVisibleCellIndexes() {
    var tmp = this.preVisibleCells;
    this.preVisibleCells = this.visibleCells;
    this.visibleCells = tmp;
    this.visibleCells.clear();
  };

  var IsCellVisible = function IsCellVisible(cellIdx) {
    var cell = this.table.getCell(cellIdx, false);
    return cell && this.visibleCells.contains(cell);
  };

  var PointToCellIndex = function PointToCellIndex(x, y) {
    y -= this.y + this.topLeftY;
    x -= this.x + this.topLeftX;
    var offsetTableOY = this.tableOY - (this.scrollMode === 0 ? y : x);
    var offsetTableOX = this.tableOX - (this.scrollMode === 0 ? x : y);
    var table = this.table;
    var rowIdx = table.heightToRowIndex(-offsetTableOY, 0);
    var colIdx = table.widthToColIndex(-offsetTableOX);
    var cellIdx = table.colRowToCellIndex(colIdx, rowIdx);
    if (cellIdx === null) {
      return null;
    }
    if (!this.isCellVisible(cellIdx)) {
      return null;
    }
    return cellIdx;
  };
  var PointToCellContainer = function PointToCellContainer(x, y) {
    var cellIdx = PointToCellIndex.call(this, x, y);
    if (cellIdx === null) {
      return undefined;
    }
    return this.getCellContainer(cellIdx);
  };

  // For when you know this Set will be modified during the iteration
  var EachVisibleCell = function EachVisibleCell(callback, scope) {
    this.visibleCells.each(callback, scope);
    return this;
  };

  // For when you absolutely know this Set won't be modified during the iteration
  var IterateVisibleCell = function IterateVisibleCell(callback, scope) {
    this.visibleCells.iterate(callback, scope);
    return this;
  };
  var EachCell = function EachCell(callback, scope) {
    this.table.cells.slice().forEach(callback, scope);
    return this;
  };
  var IterateCell = function IterateCell(callback, scope) {
    this.table.cells.forEach(callback, scope);
    return this;
  };

  var SetCellsCount = function SetCellsCount(count) {
    var cellsCount = this.cellsCount;
    if (cellsCount === count) {
      return this;
    }
    if (cellsCount > count) {
      this.removeCells(count, cellsCount - count);
    } else {
      // cellsCount < count
      this.insertNewCells(cellsCount, count - cellsCount);
    }
    return this;
  };

  var Clamp = Phaser.Math.Clamp;
  var InsertNewCells = function InsertNewCells(cellIdx, count) {
    if (_typeof(cellIdx) === 'object') {
      cellIdx = cellIdx.index;
    }
    if (count === undefined) {
      count = 1;
    }
    if (count <= 0) {
      return this;
    }
    cellIdx = Clamp(cellIdx, 0, this.cellsCount);
    this.table.insertNewCells(cellIdx, count);
    return this;
  };

  var RemoveCells = function RemoveCells(cellIdx, count) {
    if (_typeof(cellIdx) === 'object') {
      cellIdx = cellIdx.index;
    }
    if (count === undefined) {
      count = 1;
    }
    if (cellIdx < 0) {
      count += cellIdx;
      cellIdx = 0;
    }
    if (count <= 0) {
      return this;
    }
    // out-of-range
    if (cellIdx > this.cellsCount) {
      return this;
    }
    var cell;
    for (var i = cellIdx, endIdx = cellIdx + count; i < endIdx; i++) {
      cell = this.getCell(i, false);
      if (cell) {
        if (this.visibleCells.contains(cell)) {
          HideCell.call(this, cell);
          this.visibleCells["delete"](cell);
        }
        this.preVisibleCells["delete"](cell);
      }
    }
    this.table.removeCells(cellIdx, count);
    return this;
  };

  var SetColumnCount = function SetColumnCount(count) {
    if (this.table.colCount === count) {
      return this;
    }
    this.table.setColumnCount(count);
    return this;
  };

  var SetGridSize = function SetGridSize(colCount, rowCount) {
    this.setCellsCount(colCount * rowCount);
    this.table.setColumnCount(colCount);
    return this;
  };

  var UpdateVisibleCell = function UpdateVisibleCell(cellIdx) {
    var cell = this.table.getCell(cellIdx, false);
    if (!cell || !cell.container) {
      return this;
    }
    ShowCell.call(this, cell);
    return this;
  };

  var methods$1 = {
    setTableOY: SetTableOY,
    setTableOX: SetTableOX,
    showCells: ShowCells,
    showCell: ShowCell,
    getCellTLX: GetCellTLX,
    getCellTLY: GetCellTLY,
    hideCells: HideCells,
    hideCell: HideCell,
    updateTable: UpdateTable,
    isCellVisible: IsCellVisible,
    pointToCellIndex: PointToCellIndex,
    pointToCellContainer: PointToCellContainer,
    eachVisibleCell: EachVisibleCell,
    iterateVisibleCell: IterateVisibleCell,
    eachCell: EachCell,
    iterateCell: IterateCell,
    setCellsCount: SetCellsCount,
    insertNewCells: InsertNewCells,
    removeCells: RemoveCells,
    setColumnCount: SetColumnCount,
    setGridSize: SetGridSize,
    updateVisibleCell: UpdateVisibleCell
  };
  Object.assign(methods$1, ChildrenMaskMethods);

  var Group = Phaser.GameObjects.Group;
  var Set = Phaser.Structs.Set;
  var GetValue$5 = Phaser.Utils.Objects.GetValue;
  var GridTable$1 = /*#__PURE__*/function (_ContainerLite) {
    _inherits(GridTable, _ContainerLite);
    var _super = _createSuper(GridTable);
    function GridTable(scene, x, y, width, height, config) {
      var _this;
      _classCallCheck(this, GridTable);
      if (config === undefined) {
        config = {};
      }
      _this = _super.call(this, scene, x, y, width, height);
      _this.type = 'rexGridTable';
      _this._tableOX = 0;
      _this._tableOY = 0;
      _this.visibleCells = new Set();
      _this.preVisibleCells = new Set();
      _this.execeedTopState = false;
      _this.execeedBottomState = false;
      _this.execeedLeftState = false;
      _this.execeedRightState = false;
      var reuseCellContainer = GetValue$5(config, 'reuseCellContainer', false);
      if (reuseCellContainer) {
        _this.cellContainersPool = new Group(scene); // Don't add Group into update list, I will destroy it manually
      }

      var callback = GetValue$5(config, 'cellVisibleCallback', null);
      if (callback !== null) {
        var scope = GetValue$5(config, 'cellVisibleCallbackScope', undefined);
        _this.on('cellvisible', callback, scope);
      }
      callback = GetValue$5(config, 'cellInvisibleCallback', null);
      if (callback !== null) {
        var scope = GetValue$5(config, 'cellInvisibleCallbackScope', undefined);
        _this.on('cellinvisible', callback, scope);
      }
      if (GetValue$5(config, 'enableLayer', false)) {
        _this.enableLayer();
      }
      _this.setupChildrenMask(GetValue$5(config, 'mask', undefined));
      _this.setScrollMode(GetValue$5(config, 'scrollMode', 0));
      _this.setClampMode(GetValue$5(config, 'clamplTableOXY', true));

      // Pre-process cell size
      var cellWidth, cellHeight, columns;
      var scrollY = _this.scrollMode === 0;
      if (scrollY) {
        // scroll y
        cellWidth = config.cellWidth;
        cellHeight = config.cellHeight;
        columns = config.columns;
      } else {
        // scroll x
        cellWidth = config.cellHeight;
        cellHeight = config.cellWidth;
        columns = GetValue$5(config, 'rows', config.columns);
      }
      if (!columns) {
        columns = 1; // Default columns
      }

      _this.expandCellSize = cellWidth === undefined;
      if (_this.expandCellSize) {
        var width = scrollY ? _this.width : _this.height;
        cellWidth = width / columns;
      }
      config.cellWidth = cellWidth;
      config.cellHeight = cellHeight;
      config.columns = columns;
      _this.table = new Table(_assertThisInitialized(_this), config);
      _this.updateTable();
      return _this;
    }
    _createClass(GridTable, [{
      key: "destroy",
      value: function destroy(fromScene) {
        // preDestroy method does not have fromScene parameter
        //  This Game Object has already been destroyed
        if (!this.scene || this.ignoreDestroy) {
          return;
        }
        this.destroyChildrenMask();
        this.table.destroy(fromScene);
        this.table = undefined;
        if (this.cellContainersPool) {
          this.cellContainersPool.destroy(true);
          this.cellContainersPool = undefined;
        }
        _get(_getPrototypeOf(GridTable.prototype), "destroy", this).call(this, fromScene);
      }
    }, {
      key: "setScrollMode",
      value: function setScrollMode(mode) {
        if (typeof mode === 'string') {
          mode = SCROLLMODE[mode.toLowerCase()];
        }
        this.scrollMode = mode;
        return this;
      }
    }, {
      key: "setClampMode",
      value: function setClampMode(mode) {
        if (mode === undefined) {
          mode = true;
        }
        this.clampTableOXY = mode;
        return this;
      }
    }, {
      key: "tableOY",
      get: function get() {
        return this._tableOY;
      },
      set: function set(oy) {
        this.setTableOY(oy).updateTable();
      }
    }, {
      key: "tableOX",
      get: function get() {
        return this._tableOX;
      },
      set: function set(ox) {
        this.setTableOX(ox).updateTable();
      }
    }, {
      key: "setTableOXY",
      value: function setTableOXY(ox, oy) {
        this.setTableOY(oy).setTableOX(ox);
        return this;
      }
    }, {
      key: "addTableOY",
      value: function addTableOY(dy) {
        this.setTableOY(this.tableOY + dy);
        return this;
      }
    }, {
      key: "addTableOX",
      value: function addTableOX(dx) {
        this.setTableOX(this.tableOX + dx);
        return this;
      }
    }, {
      key: "addTableOXY",
      value: function addTableOXY(dx, dy) {
        this.addTableOY(dy).addTableOX(dx);
        return this;
      }
    }, {
      key: "setTableOYByPercentage",
      value: function setTableOYByPercentage(percentage) {
        this.setTableOY(-this.tableVisibleHeight * percentage);
        return this;
      }
    }, {
      key: "getTableOYPercentage",
      value: function getTableOYPercentage() {
        var tableVisibleHeight = this.tableVisibleHeight;
        if (tableVisibleHeight === 0) {
          return 0;
        }
        return this.tableOY / -tableVisibleHeight;
      }
    }, {
      key: "setTableOXByPercentage",
      value: function setTableOXByPercentage(percentage) {
        this.setTableOX(-this.tableVisibleWidth * percentage);
        return this;
      }
    }, {
      key: "getTableOXPercentage",
      value: function getTableOXPercentage() {
        var tableVisibleWidth = this.tableVisibleWidth;
        if (tableVisibleWidth === 0) {
          return 0;
        }
        return this.tableOX / -tableVisibleWidth;
      }
    }, {
      key: "t",
      get: function get() {
        return this.getTableOYPercentage();
      },
      set: function set(value) {
        this.setTableOYByPercentage(value).updateTable();
      }
    }, {
      key: "s",
      get: function get() {
        return this.getTableOXPercentage();
      },
      set: function set(value) {
        this.setTableOXByPercentage(value).updateTable();
      }
    }, {
      key: "scrollToBottom",
      value: function scrollToBottom() {
        this.t = 1;
        // t will be 0 if table does not exceed visible area
        if (this.t === 0) {
          return this;
        }

        // Table height might be expanded while cells are visible        
        do {
          this.t = 1;
        } while (this.t !== 1);
        return this;
      }
    }, {
      key: "scrollToRow",
      value: function scrollToRow(rowIndex) {
        // To get all height of cells
        this.scrollToBottom();
        var height = this.table.rowIndexToHeight(0, rowIndex - 1);
        this.setTableOY(-height).updateTable();
        return this;
      }
    }, {
      key: "scrollToNextRow",
      value: function scrollToNextRow(rowCount) {
        if (rowCount === undefined) {
          rowCount = 1;
        }
        this.scrollToRow(this.startRowIndex + rowCount);
        return this;
      }
    }, {
      key: "getCell",
      value: function getCell(cellIdx) {
        return this.table.getCell(cellIdx, true);
      }
    }, {
      key: "getCellContainer",
      value: function getCellContainer(cellIdx) {
        var cell = this.table.getCell(cellIdx, false);
        var container;
        if (cell) {
          container = cell.getContainer();
        }
        return container;
      }
    }, {
      key: "cellsCount",
      get: function get() {
        return this.table.cellsCount;
      }
    }, {
      key: "columnCount",
      get: function get() {
        return this.table.colCount;
      }
    }, {
      key: "setCellHeight",
      value: function setCellHeight(cellIdx, height) {
        var cell;
        if (typeof cellIdx === 'number') {
          cell = this.table.getCell(cellIdx, true);
        } else {
          cell = cellIdx;
        }
        cell.height = height; // Only worked when scrollMode is 0
        return this;
      }
    }, {
      key: "setCellWidth",
      value: function setCellWidth(cellIdx, width) {
        var cell;
        if (typeof cellIdx === 'number') {
          cell = this.table.getCell(cellIdx, true);
        } else {
          cell = cellIdx;
        }
        cell.width = width; // Only worked when scrollMode is 1
        return this;
      }
    }, {
      key: "instHeight",
      get: function get() {
        return this.scrollMode === 0 ? this.height : this.width;
      }
    }, {
      key: "instWidth",
      get: function get() {
        return this.scrollMode === 0 ? this.width : this.height;
      }
    }, {
      key: "tableHeight",
      get: function get() {
        return this.table.totalRowsHeight;
      }
    }, {
      key: "tableWidth",
      get: function get() {
        return this.table.totalColumnWidth;
      }
    }, {
      key: "topTableOY",
      get: function get() {
        return 0;
      }
    }, {
      key: "bottomTableOY",
      get: function get() {
        return -this.tableVisibleHeight;
      }
    }, {
      key: "leftTableOX",
      get: function get() {
        return 0;
      }
    }, {
      key: "rightTableOX",
      get: function get() {
        return -this.tableVisibleWidth;
      }
    }, {
      key: "tableVisibleHeight",
      get: function get() {
        var h = this.tableHeight - this.instHeight;
        if (h < 0) {
          h = 0;
        }
        return h;
      }
    }, {
      key: "tableVisibleWidth",
      get: function get() {
        var w = this.tableWidth - this.instWidth;
        if (w < 0) {
          w = 0;
        }
        return w;
      }
    }, {
      key: "bottomLeftY",
      get: function get() {
        return -(this.displayHeight * this.originY) + this.displayHeight;
      }
    }, {
      key: "topRightX",
      get: function get() {
        return -(this.displayWidth * this.originX) + this.displayWidth;
      }
    }, {
      key: "topLeftX",
      get: function get() {
        return -(this.displayWidth * this.originX);
      }
    }, {
      key: "topLeftY",
      get: function get() {
        return -(this.displayHeight * this.originY);
      }
    }, {
      key: "bottomBound",
      get: function get() {
        if (this.scrollMode === 0) {
          return this.bottomLeftY;
        } else {
          return this.topRightX;
        }
      }
    }, {
      key: "rightBound",
      get: function get() {
        if (this.scrollMode === 0) {
          return this.topRightX;
        } else {
          return this.bottomLeftY;
        }
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        if (this.width === width && this.height === height) {
          return this;
        }
        _get(_getPrototypeOf(GridTable.prototype), "resize", this).call(this, width, height);
        if (this.expandCellSize) {
          this.table.setDefaultCellWidth(this.instWidth / this.table.colCount);
        }
        this.updateTable(true);

        // Layout children-mask
        this.layoutChildrenMask();
        // Re-mask children
        this.maskChildren();
        return this;
      }
    }]);
    return GridTable;
  }(ContainerLite);

  // mixin
  Object.assign(GridTable$1.prototype, methods$1);
  var SCROLLMODE = {
    v: 0,
    vertical: 0,
    h: 1,
    horizontal: 1
  };

  var InjectProperties = function InjectProperties(table) {
    Object.defineProperty(table, 'childOY', {
      configurable: true,
      get: function get() {
        return table.tableOY;
      },
      set: function set(value) {
        table.tableOY = value;
      }
    });
    Object.defineProperty(table, 'childOX', {
      configurable: true,
      get: function get() {
        return table.tableOX;
      },
      set: function set(value) {
        table.tableOX = value;
      }
    });
    Object.defineProperty(table, 'topChildOY', {
      get: function get() {
        return table.topTableOY;
      }
    });
    Object.defineProperty(table, 'bottomChildOY', {
      get: function get() {
        return table.bottomTableOY;
      }
    });
    Object.defineProperty(table, 'leftChildOX', {
      get: function get() {
        return table.leftTableOX;
      }
    });
    Object.defineProperty(table, 'rightChildOX', {
      get: function get() {
        return table.rightTableOX;
      }
    });
    Object.defineProperty(table, 'childVisibleHeight', {
      get: function get() {
        return table.instHeight;
      }
    });
    Object.defineProperty(table, 'childHeight', {
      get: function get() {
        return table.tableHeight;
      }
    });
    Object.defineProperty(table, 'childVisibleWidth', {
      get: function get() {
        return table.instWidth;
      }
    });
    Object.defineProperty(table, 'childWidth', {
      get: function get() {
        return table.tableWidth;
      }
    });
  };

  var TableOnCellVisible = function TableOnCellVisible(table) {
    table.on('cellvisible', function (cell, cellContainer, table) {
      var callback = this.createCellContainerCallback;
      var scope = this.createCellContainerCallbackScope;
      cell.item = this.items[cell.index];
      cell.items = this.items;
      var cellContainer;
      if (scope) {
        cellContainer = callback.call(scope, cell, cellContainer, table);
      } else {
        cellContainer = callback(cell, cellContainer, table);
      }
      if (cellContainer) {
        if (cell.cellContainerAlign == null && cellContainer.setOrigin) {
          cellContainer.setOrigin(0);
        }
        if (cellContainer.isRexSizer) {
          cellContainer.layout(); // Use original size
        }
      }

      cell.item = undefined;
      cell.items = undefined;
      cell.setContainer(cellContainer);
    }, this);
  };

  var EmitCellEvent = function EmitCellEvent(eventEmitter, eventName, table, x, y, pointer, event) {
    var cellIndex;
    if (y === undefined) {
      cellIndex = x;
    } else {
      cellIndex = table.pointToCellIndex(x, y);
    }
    if (cellIndex === null || cellIndex === undefined) {
      return;
    }
    var cellContainer = table.getCellContainer(cellIndex);
    if (cellContainer) {
      eventEmitter.emit(eventName, cellContainer, cellIndex, pointer, event);
    }
  };

  var PointerUpDownCell = function PointerUpDownCell(table, tableConfig) {
    table.on('pointerdown', function (pointer, localX, localY, event) {
      EmitCellEvent(this.eventEmitter, 'cell.down', table, pointer.worldX, pointer.worldY, pointer, event);
    }, this).on('pointerup', function (pointer, localX, localY, event) {
      EmitCellEvent(this.eventEmitter, 'cell.up', table, pointer.worldX, pointer.worldY, pointer, event);
    }, this);
  };

  var OverCell = function OverCell(table, tableConfig) {
    table.on('pointermove', OnMove, this).on('pointerover', OnMove, this).on('pointerout', OnOut, this); // pointer-up is included too
  };

  var OnMove = function OnMove(pointer, localX, localY, event) {
    var table = this.childrenMap.child;
    var cellIndex = table.pointToCellIndex(pointer.worldX, pointer.worldY);
    if (cellIndex === table.input.lastOverCellIndex) {
      return;
    }
    var preCellIndex = table.input.lastOverCellIndex;
    table.input.lastOverCellIndex = cellIndex;
    EmitCellEvent(this.eventEmitter, 'cell.out', table, preCellIndex, undefined, pointer, event);
    EmitCellEvent(this.eventEmitter, 'cell.over', table, cellIndex, undefined, pointer, event);
  };
  var OnOut = function OnOut(pointer, event) {
    var table = this.childrenMap.child;
    var cellIndex = table.input.lastOverCellIndex;
    table.input.lastOverCellIndex = undefined;
    EmitCellEvent(this.eventEmitter, 'cell.out', table, cellIndex, undefined, pointer, event);
  };

  var GetValue$4 = Phaser.Utils.Objects.GetValue;
  var ClickCell = function ClickCell(table, tableConfig) {
    var buttonConfig = GetValue$4(tableConfig, 'click', undefined);
    if (buttonConfig === false) {
      return;
    } else if (buttonConfig === undefined) {
      buttonConfig = {};
    }
    buttonConfig.threshold = 10;
    table._click = new Button(table, buttonConfig);
    table._click.on('click', function (button, gameObject, pointer, event) {
      EmitCellEvent(this.eventEmitter, 'cell.click', gameObject, pointer.worldX, pointer.worldY, pointer, event);
    }, this);
  };

  var GetValue$3 = Phaser.Utils.Objects.GetValue;
  var TapCell = function TapCell(table, tableConfig) {
    var tapConfig = GetValue$3(tableConfig, 'tap', undefined);
    if (tapConfig === false) {
      return;
    }
    table._tap = new Tap(table, tapConfig);
    table._tap.on('tap', function (tap, gameObject, lastPointer) {
      var eventName = "cell.".concat(tap.tapsCount, "tap");
      EmitCellEvent(this.eventEmitter, eventName, tap.gameObject, tap.worldX, tap.worldY, lastPointer);
    }, this);
  };

  var GetValue$2 = Phaser.Utils.Objects.GetValue;
  var PressCell = function PressCell(table, tableConfig) {
    var pressConfig = GetValue$2(tableConfig, 'press', undefined);
    if (pressConfig === false) {
      return;
    }
    table._press = new Press(table, pressConfig);
    table._press.on('pressstart', function (press, gameObject, lastPointer) {
      EmitCellEvent(this.eventEmitter, 'cell.pressstart', table, press.worldX, press.worldY, lastPointer);
    }, this).on('pressend', function (press, gameObject, lastPointer) {
      EmitCellEvent(this.eventEmitter, 'cell.pressend', table, press.worldX, press.worldY, lastPointer);
    }, this);
  };

  var GetValue$1 = Phaser.Utils.Objects.GetValue;
  var SwipeCell = function SwipeCell(table, tableConfig) {
    var swipeConfig = GetValue$1(tableConfig, 'swipe', undefined);
    if (swipeConfig === false) {
      return;
    } else if (swipeConfig === undefined) {
      swipeConfig = {};
    }
    swipeConfig.dir = '4dir';
    table._swipe = new Swipe(table, swipeConfig);
    table._swipe.on('swipe', function (swipe, gameObject, lastPointer) {
      var dirName = swipe.left ? 'left' : swipe.right ? 'right' : swipe.up ? 'up' : 'down';
      EmitCellEvent(this.eventEmitter, "cell.swipe".concat(dirName), table, swipe.worldX, swipe.worldY, lastPointer);
    }, this);
  };

  var TableSetInteractive = function TableSetInteractive(table, tableConfig) {
    table.setInteractive();
    PointerUpDownCell.call(this, table, tableConfig);
    OverCell.call(this, table, tableConfig);
    ClickCell.call(this, table, tableConfig);
    TapCell.call(this, table, tableConfig);
    PressCell.call(this, table, tableConfig);
    SwipeCell.call(this, table, tableConfig);
  };

  var SetItems = function SetItems(items) {
    if (items === undefined) {
      this.items = [];
    } else {
      this.items = items;
    }
    var table = this.childrenMap.child;
    table.setCellsCount(this.items.length);
    table.updateTable(true);
    this.resizeController();
    return this;
  };

  var ScrollMethods = {
    scrollToRow: function scrollToRow(rowIndex) {
      var table = this.childrenMap.child;
      table.scrollToRow(rowIndex);
      return this;
    },
    scrollToNextRow: function scrollToNextRow(rowCount) {
      var table = this.childrenMap.child;
      table.scrollToNextRow(rowCount);
      return this;
    }
  };

  var GetValue = Phaser.Utils.Objects.GetValue;
  var GridTable = /*#__PURE__*/function (_Scrollable) {
    _inherits(GridTable, _Scrollable);
    var _super = _createSuper(GridTable);
    function GridTable(scene, config) {
      var _this;
      _classCallCheck(this, GridTable);
      if (config === undefined) {
        config = {};
      }

      // Create grid table core
      var scrollMode = GetScrollMode(config);
      var tableConfig = GetValue(config, 'table', undefined);
      if (tableConfig === undefined) {
        tableConfig = {};
      }
      tableConfig.scrollMode = scrollMode === 2 ? 0 : scrollMode;
      tableConfig.clamplTableOXY = GetValue(config, 'clamplChildOY', false);
      var tableWidth = GetValue(tableConfig, 'width', undefined);
      var tableHeight = GetValue(tableConfig, 'height', undefined);
      var table = new GridTable$1(scene, 0, 0, tableWidth, tableHeight, tableConfig);
      scene.add.existing(table); // Important: Add to display list for touch detecting
      var expandWidth, expandHeight;
      if (tableConfig.scrollMode === 0) {
        expandWidth = tableWidth === undefined;
        expandHeight = tableHeight === undefined;
      } else {
        expandWidth = tableHeight === undefined;
        expandHeight = tableWidth === undefined;
      }
      // Inject properties for scrollable interface
      InjectProperties(table);
      // Set minWidth/minHeight to 0 if tableWidth/tableHeight is undefined
      table._minWidth = tableWidth === undefined ? 0 : undefined;
      table._minHeight = tableHeight === undefined ? 0 : undefined;

      // Fill config of scrollable
      config.type = 'rexGridTable';
      config.child = {
        gameObject: table,
        expandWidth: expandWidth,
        expandHeight: expandHeight
      };
      var spaceConfig = GetValue(config, 'space', undefined);
      if (spaceConfig) {
        spaceConfig.child = GetValue(spaceConfig, 'table', 0);
      }
      _this = _super.call(this, scene, config);
      _this.addChildrenMap('table', table);
      _this.addChildrenMap('tableLayer', table.maskLayer);
      _this.eventEmitter = GetValue(config, 'eventEmitter', _assertThisInitialized(_this));
      var callback = GetValue(config, 'createCellContainerCallback', NOOP);
      var scope = GetValue(config, 'createCellContainerCallbackScope', undefined);
      _this.setCreateCellContainerCallback(callback, scope);
      TableOnCellVisible.call(_assertThisInitialized(_this), table);
      _this.resizeControllerFlag = false;
      var eventName = scrollMode === 0 ? 'cellheightchange' : 'cellwidthchange';
      table.on(eventName, function () {
        this.resizeControllerFlag = true;
      }, _assertThisInitialized(_this));
      if (GetValue(tableConfig, 'interactive', true)) {
        TableSetInteractive.call(_assertThisInitialized(_this), table, tableConfig);
      }
      _this.setItems(GetValue(config, 'items', []));
      scene.game.events.on('poststep', _this.onPostStep, _assertThisInitialized(_this));
      return _this;
    }
    _createClass(GridTable, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene || this.ignoreDestroy) {
          return;
        }
        this.scene.game.events.off('poststep', this.onPostStep, this);
        _get(_getPrototypeOf(GridTable.prototype), "destroy", this).call(this, fromScene);
      }
    }, {
      key: "setCreateCellContainerCallback",
      value: function setCreateCellContainerCallback(callback, scope) {
        this.createCellContainerCallback = callback;
        this.createCellContainerCallbackScope = scope;
        return this;
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this.setItems(this.items);
        return this;
      }
    }, {
      key: "getCell",
      value: function getCell(cellIdx) {
        var table = this.childrenMap.child;
        return table.getCell(cellIdx);
      }
    }, {
      key: "getCellContainer",
      value: function getCellContainer(cellIdx) {
        var table = this.childrenMap.child;
        return table.getCellContainer(cellIdx);
      }
    }, {
      key: "updateVisibleCell",
      value: function updateVisibleCell(cellIdx) {
        var table = this.childrenMap.child;
        return table.updateVisibleCell(cellIdx);
      }
    }, {
      key: "onPostStep",
      value: function onPostStep() {
        if (this.resizeControllerFlag) {
          this.resizeController();
          this.resizeControllerFlag = false;
        }
      }
    }, {
      key: "startRowIndex",
      get: function get() {
        var table = this.childrenMap.child;
        return table.startRowIndex;
      }
    }]);
    return GridTable;
  }(Scrollable);
  var methods = {
    setItems: SetItems
  };
  Object.assign(GridTable.prototype, ScrollMethods, methods);

  return GridTable;

}));
