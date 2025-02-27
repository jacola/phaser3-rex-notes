(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rexsimplelabel = factory());
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
  var RemoveItem$5 = Phaser.Utils.Array.Remove;
  var Base$2 = /*#__PURE__*/function (_Zone) {
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
        RemoveItem$5(this.children, gameObjects,
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
  var Components$3 = Phaser.GameObjects.Components;
  Phaser.Class.mixin(Base$2, [Components$3.Alpha, Components$3.Flip]);

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

  var DegToRad$5 = Phaser.Math.DegToRad;
  var RadToDeg$3 = Phaser.Math.RadToDeg;
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
          return RadToDeg$3(this.rotation);
        },
        set: function set(value) {
          this.rotation = DegToRad$5(value);
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

  var GetValue$13 = Phaser.Utils.Objects.GetValue;
  var BaseAdd = Base$2.prototype.add;
  var Add$1 = function Add(gameObject, config) {
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
      state.syncPosition = GetValue$13(config, 'syncPosition', true);
      state.syncRotation = GetValue$13(config, 'syncRotation', true);
      state.syncScale = GetValue$13(config, 'syncScale', true);
      state.syncAlpha = GetValue$13(config, 'syncAlpha', true);
      state.syncScrollFactor = GetValue$13(config, 'syncScrollFactor', true);
    }
  };
  var AddChild$2 = {
    // Can override this method
    add: function add(gameObject) {
      if (Array.isArray(gameObject)) {
        this.addMultiple(gameObject);
      } else {
        Add$1.call(this, gameObject);
      }
      return this;
    },
    // Don't override this method
    pin: function pin(gameObject, config) {
      if (Array.isArray(gameObject)) {
        this.addMultiple(gameObject, config);
      } else {
        Add$1.call(this, gameObject, config);
      }
      return this;
    },
    addMultiple: function addMultiple(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        Add$1.call(this, gameObjects[i]);
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

  var BaseRemove = Base$2.prototype.remove;
  var BaseClear = Base$2.prototype.clear;
  var RemoveChild$2 = {
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

  var RotateAround$5 = Phaser.Math.RotateAround;
  var Transform = {
    worldToLocal: function worldToLocal(point) {
      // Transform
      point.x -= this.x;
      point.y -= this.y;
      // Rotate
      RotateAround$5(point, 0, 0, -this.rotation);
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
      RotateAround$5(point, 0, 0, this.rotation);
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

  var DegToRad$4 = Phaser.Math.DegToRad;
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
      state.rotation = DegToRad$4(angle);
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

  var Rectangle$5 = Phaser.Geom.Rectangle;
  var Vector2 = Phaser.Math.Vector2;
  var RotateAround$4 = Phaser.Math.RotateAround;
  var GetBounds = function GetBounds(gameObject, output) {
    if (output === undefined) {
      output = new Rectangle$5();
    } else if (output === true) {
      if (GlobRect$2 === undefined) {
        GlobRect$2 = new Rectangle$5();
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
      RotateAround$4(output, gameObject.x, gameObject.y, gameObject.rotation);
    }
    if (includeParent && gameObject.parentContainer) {
      var parentMatrix = gameObject.parentContainer.getBoundsTransformMatrix();
      parentMatrix.transformPoint(output.x, output.y, output);
    }
    return output;
  };

  var Rectangle$4 = Phaser.Geom.Rectangle;
  var Union = Phaser.Geom.Rectangle.Union;
  var GetBoundsOfGameObjects = function GetBoundsOfGameObjects(gameObjects, out) {
    if (out === undefined) {
      out = new Rectangle$4();
    } else if (out === true) {
      if (GlobRect$1 === undefined) {
        GlobRect$1 = new Rectangle$4();
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

  var GetValue$12 = Phaser.Utils.Objects.GetValue;
  var DynamicTexture = Phaser.Textures.DynamicTexture;
  var UUID = Phaser.Utils.String.UUID;
  var Snapshot = function Snapshot(config) {
    if (!config) {
      return;
    }
    var gameObjects = config.gameObjects;
    var renderTexture = config.renderTexture; // renderTexture, or dynamicTexture
    var x = GetValue$12(config, 'x', undefined);
    var y = GetValue$12(config, 'y', undefined);
    var width = GetValue$12(config, 'width', undefined);
    var height = GetValue$12(config, 'height', undefined);
    var originX = GetValue$12(config, 'originX', 0);
    var originY = GetValue$12(config, 'originY', 0);
    var padding = GetValue$12(config, 'padding', 0);
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

  var GetValue$11 = Phaser.Utils.Objects.GetValue;
  var DrawBounds$2 = function DrawBounds(gameObjects, graphics, config) {
    var strokeColor, lineWidth, fillColor, fillAlpha, padding;
    if (typeof config === 'number') {
      strokeColor = config;
    } else {
      strokeColor = GetValue$11(config, 'color');
      lineWidth = GetValue$11(config, 'lineWidth');
      fillColor = GetValue$11(config, 'fillColor');
      fillAlpha = GetValue$11(config, 'fillAlpha', 1);
      padding = GetValue$11(config, 'padding', 0);
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

  var GetValue$10 = Phaser.Utils.Objects.GetValue;
  var DrawBounds$1 = function DrawBounds(graphics, config) {
    var drawContainer = GetValue$10(config, 'drawContainer', true);
    var gameObjects = GetValue$10(config, 'children');
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

  var RotateAround$3 = Phaser.Math.RotateAround;
  var ChangeOrigin$1 = function ChangeOrigin(gameObject, originX, originY) {
    if (originY === undefined) {
      originY = originX;
    }
    var deltaXY = {
      x: (originX - gameObject.originX) * gameObject.displayWidth,
      y: (originY - gameObject.originY) * gameObject.displayHeight
    };
    RotateAround$3(deltaXY, 0, 0, gameObject.rotation);
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

  var methods$9 = {
    changeOrigin: ChangeOrigin,
    drawBounds: DrawBounds$1
  };
  Object.assign(methods$9, Parent, AddChild$2, RemoveChild$2, ChildState, Transform, Position, Rotation, Scale$1, Visible, Alpha, Active, ScrollFactor, Mask, Depth, Children, Tween, P3Container, RenderLayer, RenderTexture$1);

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
  }(Base$2);
  Object.assign(ContainerLite.prototype, methods$9);

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

  var Rectangle$3 = Phaser.Geom.Rectangle;
  var GetViewport = function GetViewport(scene, camera, out) {
    if (!IsCameraObject(camera)) {
      out = camera;
      camera = undefined;
    }
    if (out === undefined) {
      out = new Rectangle$3();
    } else if (out === true) {
      out = globRect;
    }
    if (camera) {
      return scene.scale.getViewPort(camera, out);
    } else {
      return scene.scale.getViewPort(out);
    }
  };
  var globRect = new Rectangle$3();

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

  var GetValue$$ = Phaser.Utils.Objects.GetValue;
  var Group = Phaser.GameObjects.Group;
  var DrawBounds = function DrawBounds(graphics, config) {
    var scene = graphics.scene;
    var color, lineWidth;
    var createTextCallback, createTextCallbackScope, textAlign;
    if (typeof config === 'number') {
      color = config;
    } else {
      color = GetValue$$(config, 'color');
      lineWidth = GetValue$$(config, 'lineWidth');
      var nameTextConfig = GetValue$$(config, 'name', false);
      if (nameTextConfig) {
        createTextCallback = GetValue$$(nameTextConfig, 'createTextCallback', DefaultCreateTextCallback);
        createTextCallbackScope = GetValue$$(nameTextConfig, 'createTextCallbackScope', undefined);
        textAlign = GetValue$$(nameTextConfig, 'align', 'left-top');
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
      graphics.children = new Group(scene);
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

  var GetValue$_ = Phaser.Utils.Objects.GetValue;
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
      out.left = GetValue$_(config, 'left', 0);
      out.right = GetValue$_(config, 'right', 0);
      out.top = GetValue$_(config, 'top', 0);
      out.bottom = GetValue$_(config, 'bottom', 0);
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

  var AddChildMethods$1 = {
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

  var RemoveItem$4 = Phaser.Utils.Array.Remove;
  var ContainerRemove = ContainerLite.prototype.remove;
  var GetParentSizer$1 = GetParentSizerMethods.getParentSizer;
  var RemoveChild$1 = function RemoveChild(gameObject, destroyChild) {
    // Invoke parent's removeChildCallback method
    var parent = GetParentSizer$1(gameObject);
    while (parent) {
      if (parent.removeChildCallback) {
        parent.removeChildCallback(gameObject, destroyChild);
      }
      parent = GetParentSizer$1(parent);
    }
    if (this.isBackground(gameObject)) {
      RemoveItem$4(this.backgroundChildren, gameObject);
    }
    ContainerRemove.call(this, gameObject, destroyChild);
    if (!destroyChild && this.sizerEventsEnable) {
      gameObject.emit('sizer.remove', gameObject, this);
      this.emit('remove', gameObject, this);
    }
    return this;
  };

  var RemoveItem$3 = Phaser.Utils.Array.Remove;
  var GetParentSizer = GetParentSizerMethods.getParentSizer;
  var RemoveChildMethods$1 = {
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
      RemoveItem$3(this.backgroundChildren, gameObject);
      RemoveChild$1.call(this, gameObject, destroyChild);
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

  var GetValue$Z = Phaser.Utils.Objects.GetValue;
  var GetPadding$1 = function GetPadding(padding, key) {
    if (key === undefined) {
      return padding;
    }
    return padding[key];
  };
  var SetPadding$1 = function SetPadding(padding, key, value) {
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
      padding.left = GetValue$Z(key, 'left', 0);
      padding.right = GetValue$Z(key, 'right', 0);
      padding.top = GetValue$Z(key, 'top', 0);
      padding.bottom = GetValue$Z(key, 'bottom', 0);
    }
    return padding;
  };

  var PaddingMethods = {
    getInnerPadding: function getInnerPadding(key) {
      return GetPadding$1(this.space, key);
    },
    setInnerPadding: function setInnerPadding(key, value) {
      SetPadding$1(this.space, key, value);
      return this;
    },
    getOuterPadding: function getOuterPadding(key) {
      return GetPadding$1(this.getSizerConfig(this).padding, key);
    },
    setOuterPadding: function setOuterPadding(key, value) {
      SetPadding$1(this.getSizerConfig(this).padding, key, value);
      return this;
    },
    getChildOuterPadding: function getChildOuterPadding(child, key) {
      if (typeof child === 'string') {
        child = this.getElement(child);
      }
      return GetPadding$1(this.getSizerConfig(child).padding, key);
    },
    setChildOuterPadding: function setChildOuterPadding(child, key, value) {
      if (typeof child === 'string') {
        child = this.getElement(child);
      }
      SetPadding$1(this.getSizerConfig(child).padding, key, value);
      return this;
    }
  };

  var ResolveWidth$1 = function ResolveWidth(width) {
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

  var ResolveChildrenWidth = function ResolveChildrenWidth(parentWidth) {
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

  var ResolveHeight$1 = function ResolveHeight(height) {
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
  var GetExpandedChildWidth$1 = function GetExpandedChildWidth(child, parentWidth) {
    return parentWidth;
  };

  // Override
  var GetExpandedChildHeight$1 = function GetExpandedChildHeight(child, parentHeight) {
    return parentHeight;
  };

  // Override
  var GetChildrenWidth$1 = function GetChildrenWidth() {
    return 0;
  };

  // Override
  var GetChildrenHeight$1 = function GetChildrenHeight() {
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
  var GetChildrenSizers$1 = function GetChildrenSizers(out) {
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

  var PreLayout$1 = function PreLayout() {
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
  var LayoutChildren$1 = function LayoutChildren() {};

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
  var RunWidthWrap = function RunWidthWrap(parentWidth) {
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

  var GetValue$Y = Phaser.Utils.Objects.GetValue;
  var ComponentBase = /*#__PURE__*/function () {
    function ComponentBase(parent, config) {
      _classCallCheck(this, ComponentBase);
      this.setParent(parent); // gameObject, scene, or game

      this.isShutdown = false;

      // Event emitter, default is private event emitter
      this.setEventEmitter(GetValue$Y(config, 'eventEmitter', true));

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

  var GetValue$X = Phaser.Utils.Objects.GetValue;
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
        var onResizeCallback = GetValue$X(o, 'onResizeCallback', DefaultResizeCallback);
        var onResizeCallbackScope = GetValue$X(o, 'onResizeCallbackScope');
        this.setResizeCallback(onResizeCallback, onResizeCallbackScope);
        var onUpdateViewportCallback = GetValue$X(o, 'onUpdateViewportCallback');
        var onUpdateViewportCallbackScope = GetValue$X(o, 'onUpdateViewportCallbackScope');
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

  var GetValue$W = Phaser.Utils.Objects.GetValue;
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
      _this.setTickingMode(GetValue$W(config, 'tickingMode', 1));
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

  var GetValue$V = Phaser.Utils.Objects.GetValue;
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
      _this.tickEventName = GetValue$V(config, 'tickEventName', defaultEventName);
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

  var GetValue$U = Phaser.Utils.Objects.GetValue;
  var Clamp = Phaser.Math.Clamp;
  var Timer = /*#__PURE__*/function () {
    function Timer(config) {
      _classCallCheck(this, Timer);
      this.resetFromJSON(config);
    }
    _createClass(Timer, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.state = GetValue$U(o, 'state', IDLE$6);
        this.timeScale = GetValue$U(o, 'timeScale', 1);
        this.delay = GetValue$U(o, 'delay', 0);
        this.repeat = GetValue$U(o, 'repeat', 0);
        this.repeatCounter = GetValue$U(o, 'repeatCounter', 0);
        this.repeatDelay = GetValue$U(o, 'repeatDelay', 0);
        this.duration = GetValue$U(o, 'duration', 0);
        this.nowTime = GetValue$U(o, 'nowTime', 0);
        this.justRestart = GetValue$U(o, 'justRestart', false);
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
        return Clamp(t, 0, 1);
      },
      set: function set(value) {
        value = Clamp(value, -1, 1);
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

  var GetValue$T = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$4 = Phaser.Utils.Objects.GetAdvancedValue;
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
        this.timer.resetFromJSON(GetValue$T(o, 'timer'));
        this.setEnable(GetValue$T(o, 'enable', true));
        this.setTarget(GetValue$T(o, 'target', this.parent));
        this.setDelay(GetAdvancedValue$4(o, 'delay', 0));
        this.setDuration(GetAdvancedValue$4(o, 'duration', 1000));
        this.setEase(GetValue$T(o, 'ease', 'Linear'));
        this.setRepeat(GetValue$T(o, 'repeat', 0));
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

  var GetValue$S = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$3 = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear$3 = Phaser.Math.Linear;
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
        this.setMode(GetValue$S(o, 'mode', 0));
        this.setScaleRange(GetAdvancedValue$3(o, 'start', undefined), GetAdvancedValue$3(o, 'end', 0));
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
          this.startX = GetAdvancedValue$3(start, 'x', this.parent.scaleX);
          this.startY = GetAdvancedValue$3(start, 'y', this.parent.scaleY);
        }
        if (typeof end === 'number') {
          this.endX = end;
          this.endY = end;
        } else {
          this.endX = GetAdvancedValue$3(end, 'x', undefined);
          this.endY = GetAdvancedValue$3(end, 'y', undefined);
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
          gameObject.scaleX = Linear$3(this.startX, this.endX, t);
        }
        if (this.hasScaleY) {
          gameObject.scaleY = Linear$3(this.startY, this.endY, t);
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

  var GetValue$R = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$2 = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear$2 = Phaser.Math.Linear;
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
        this.setMode(GetValue$R(o, 'mode', 0));
        this.setAlphaRange(GetAdvancedValue$2(o, 'start', this.parent.alpha), GetAdvancedValue$2(o, 'end', 0));
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
        gameObject.alpha = Linear$2(this.alphaStart, this.alphaEnd, t);
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

  var GetValue$Q = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$1 = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear$1 = Phaser.Math.Linear;
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
        this.setMode(GetValue$Q(o, 'mode', 0));
        if (o && (o.hasOwnProperty('x') || o.hasOwnProperty('y'))) {
          var endX = GetAdvancedValue$1(o, 'x', undefined);
          var endY = GetAdvancedValue$1(o, 'y', undefined);
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
          this.startX = GetAdvancedValue$1(config, 'startX', undefined);
          this.startY = GetAdvancedValue$1(config, 'startY', undefined);
          this.endX = GetAdvancedValue$1(config, 'endX', undefined);
          this.endY = GetAdvancedValue$1(config, 'endY', undefined);
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
          gameObject.x = Linear$1(this.startX, this.endX, t);
        }
        if (this.hasMoveY) {
          gameObject.y = Linear$1(this.startY, this.endY, t);
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
  var DistanceBetween$3 = Phaser.Math.Distance.Between;
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
          duration = DistanceBetween$3(x, y, this.x, this.y) * 1000 / config.speed;
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
          duration = DistanceBetween$3(x, y, this.x, this.y) * 1000 / config.speed;
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

  var GetValue$P = Phaser.Utils.Objects.GetValue;
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
        this.timer.resetFromJSON(GetValue$P(o, 'timer'));
        this.setEnable(GetValue$P(o, 'enable', true));
        this.setMode(GetValue$P(o, 'mode', 1));
        this.isRunning = GetValue$P(o, 'isRunning', false);
        this.setMagnitudeMode(GetValue$P(o, 'magnitudeMode', 1));
        this.setAxisMode(GetValue$P(o, "axis", 0));
        this.setDuration(GetValue$P(o, 'duration', 500));
        this.setMagnitude(GetValue$P(o, 'magnitude', 10));
        this.ox = GetValue$P(o, 'ox', undefined);
        this.oy = GetValue$P(o, 'oy', undefined);
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
          magnitude = GetValue$P(config, 'magnitude', undefined);
          duration = GetValue$P(config, 'duration', undefined);
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

  var GetValue$O = Phaser.Utils.Objects.GetValue;
  var Linear = Phaser.Math.Linear;
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
        this.propertyKey = GetValue$O(config, 'key', 'value');
        var currentValue = target[this.propertyKey];
        this.fromValue = GetValue$O(config, 'from', currentValue);
        this.toValue = GetValue$O(config, 'to', currentValue);
        this.setEase(GetValue$O(config, 'ease', this.ease));
        this.setDuration(GetValue$O(config, 'duration', this.duration));
        this.setRepeat(GetValue$O(config, 'repeat', 0));
        this.setDelay(GetValue$O(config, 'delay', 0));
        this.setRepeatDelay(GetValue$O(config, 'repeatDelay', 0));
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
        target[this.propertyKey] = Linear(this.fromValue, this.toValue, t);
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
  var GetValue$N = function GetValue(source, key, defaultValue) {
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
      var states = GetValue$N(config, 'states', undefined);
      if (states) {
        this.addStates(states);
      }

      // Attach extend members
      var extend = GetValue$N(config, 'extend', undefined);
      if (extend) {
        for (var name in extend) {
          if (!this.hasOwnProperty(name) || this[name] === undefined) {
            this[name] = extend[name];
          }
        }
      }

      // Event emitter
      var eventEmitter = GetValue$N(config, 'eventEmitter', undefined);
      var EventEmitterClass = GetValue$N(config, 'EventEmitterClass', undefined);
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
        this.setEnable(GetValue$N(o, 'enable', true));
        this.start(GetValue$N(o, 'start', undefined));
        var init = GetValue$N(o, 'init', undefined);
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
        this._scene = GetValue$N(o, 'scene', undefined);
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
  var State = /*#__PURE__*/function (_FSM) {
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

  var methods$8 = {};
  Object.assign(methods$8, DelayCallMethods, ConfigurationMethods, OpenMethods, CloseMethods);

  var GetValue$M = Phaser.Utils.Objects.GetValue;
  var OpenCloseTransition = /*#__PURE__*/function (_ComponentBase) {
    _inherits(OpenCloseTransition, _ComponentBase);
    var _super = _createSuper(OpenCloseTransition);
    function OpenCloseTransition(gameObject, config) {
      var _this;
      _classCallCheck(this, OpenCloseTransition);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;
      // this.scene

      _this.setTransitInTime(GetValue$M(config, 'duration.in', 200));
      _this.setTransitOutTime(GetValue$M(config, 'duration.out', 200));
      _this.setTransitInCallback(GetValue$M(config, 'transitIn'));
      _this.setTransitOutCallback(GetValue$M(config, 'transitOut'));
      _this.oneShotMode = GetValue$M(config, 'destroy', false);
      _this.delayCallTimer = undefined;
      _this._state = new State(_assertThisInitialized(_this), {
        eventEmitter: false,
        initState: GetValue$M(config, 'initState', 'IDLE')
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
  Object.assign(OpenCloseTransition.prototype, methods$8);

  var Rectangle$2 = Phaser.GameObjects.Rectangle;
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
  }(Rectangle$2);

  var GetValue$L = Phaser.Utils.Objects.GetValue;
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
        this.setHitAreaMode(GetValue$L(o, 'hitAreaMode', 0));
        this.setEnable(GetValue$L(o, 'enable', true));
        this.setStopMode(GetValue$L(o, 'stopAllLevels', true));
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

  var GetValue$K = Phaser.Utils.Objects.GetValue;
  var Cover = /*#__PURE__*/function (_FullWindowRectangle) {
    _inherits(Cover, _FullWindowRectangle);
    var _super = _createSuper(Cover);
    function Cover(scene, config) {
      var _this;
      _classCallCheck(this, Cover);
      var fillColor = GetValue$K(config, 'color', 0x0);
      var fillAlpha = GetValue$K(config, 'alpha', 0.8);
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

  var GetValue$J = Phaser.Utils.Objects.GetValue;
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
      config.destroy = GetValue$J(config, 'destroy', true);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;
      // this.scene

      // Cover : key of modal, to block touch input        
      var coverConfig = GetValue$J(config, 'cover');
      _this.cover = coverConfig !== false ? CreateCover(gameObject, coverConfig) : undefined;
      if (_this.cover) {
        _this.setCoverTransitInCallback(GetValue$J(coverConfig, 'transitIn', DefaultCoverTransitInCallback));
        _this.setCoverTransitOutCallback(GetValue$J(coverConfig, 'transitOut', DefaultCoverTransitOutCallback));
      }

      // Close conditions:
      var touchOutsideClose = GetValue$J(config, 'touchOutsideClose', false);
      var timeOutDuration = GetValue$J(config, 'duration.hold', -1);
      var timeOutClose = GetValue$J(config, 'timeOutClose', timeOutDuration >= 0);
      var anyTouchClose = GetValue$J(config, 'anyTouchClose', false);
      var manualClose = GetValue$J(config, 'manualClose', false);
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
      if (GetValue$J(config, 'openOnStart', true)) {
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

  var ALIGN_CENTER$1 = Phaser.Display.Align.CENTER;
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
      LayoutChild.call(this, child, x, y, width, height, ALIGN_CENTER$1);
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

  var GetValue$I = Phaser.Utils.Objects.GetValue;
  var Button = /*#__PURE__*/function (_ComponentBase) {
    _inherits(Button, _ComponentBase);
    var _super = _createSuper(Button);
    function Button(gameObject, config) {
      var _this;
      _classCallCheck(this, Button);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;

      _this._enable = undefined;
      gameObject.setInteractive(GetValue$I(config, "inputConfig", undefined));
      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(Button, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.pointer = undefined;
        this.lastClickTime = undefined;
        this.setEnable(GetValue$I(o, "enable", true));
        this.setMode(GetValue$I(o, "mode", 1));
        this.setClickInterval(GetValue$I(o, "clickInterval", 100));
        this.setDragThreshold(GetValue$I(o, 'threshold', undefined));
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

  var GetValue$H = Phaser.Utils.Objects.GetValue;
  var ClickOutside = /*#__PURE__*/function (_ComponentBase) {
    _inherits(ClickOutside, _ComponentBase);
    var _super = _createSuper(ClickOutside);
    function ClickOutside(gameObject, config) {
      var _this;
      _classCallCheck(this, ClickOutside);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;

      _this._enable = undefined;
      var inputConfig = GetValue$H(config, "inputConfig", undefined);
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
        this.setEnable(GetValue$H(o, "enable", true));
        this.setMode(GetValue$H(o, "mode", 1));
        this.setClickInterval(GetValue$H(o, "clickInterval", 100));
        this.setDragThreshold(GetValue$H(o, 'threshold', undefined));
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

  var GetValue$G = Phaser.Utils.Objects.GetValue;
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
      _this.parent.setInteractive(GetValue$G(config, 'inputConfig', undefined));
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
        this.setEnable(GetValue$G(o, 'enable', true));
        this.setCooldown(GetValue$G(o, 'cooldown', undefined));
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

  var GetValue$F = Phaser.Utils.Objects.GetValue;
  var DownChild = function DownChild(config) {
    var downConfig = GetValue$F(config, 'down', undefined);
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

  var GetValue$E = Phaser.Utils.Objects.GetValue;
  var UpChild = function UpChild(config) {
    var upConfig = GetValue$E(config, 'up', undefined);
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

  var GetValue$D = Phaser.Utils.Objects.GetValue;
  var OverChild = function OverChild(config) {
    var overConfig = GetValue$D(config, 'over', undefined);
    if (overConfig === false) {
      return;
    } else if (overConfig === true) {
      overConfig = undefined;
    }
    this.on('pointermove', OnMove, this).on('pointerover', OnMove, this).on('pointerout', OnOut, this); // pointer-up is included too
  };

  var OnMove = function OnMove(pointer, localX, localY, event) {
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
  var OnOut = function OnOut(pointer, event) {
    var childrenInteractive = this._childrenInteractive;
    var child = childrenInteractive.lastOverChild;
    childrenInteractive.lastOverChild = null;
    EmitChildEvent(childrenInteractive.eventEmitter, "".concat(childrenInteractive.eventNamePrefix, "out"), childrenInteractive.targetSizers, child, undefined, pointer, event);
  };

  var GetValue$C = Phaser.Utils.Objects.GetValue;
  var ClickChild = function ClickChild(config) {
    var clickConfig = GetValue$C(config, 'click', undefined);
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

  var GetValue$B = Phaser.Utils.Objects.GetValue;
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
        gameObject.setInteractive(GetValue$B(config, 'inputConfig', undefined));
      }
      _this._enable = undefined;
      _this.resetFromJSON(config);
      _this.boot();
      return _this;
    }
    _createClass(OnePointerTracer, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.setEnable(GetValue$B(o, 'enable', true));
        this.setDetectBounds();
        if (this.gameObject === undefined) {
          this.setDetectBounds(GetValue$B(o, 'bounds', undefined));
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

  var GetValue$A = Phaser.Utils.Objects.GetValue;
  var DistanceBetween$2 = Phaser.Math.Distance.Between;
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
        this.setHoldTime(GetValue$A(o, 'time', 250)); // min-hold-time of Press is 251
        this.setTapInterval(GetValue$A(o, 'tapInterval', 200));
        this.setDragThreshold(GetValue$A(o, 'threshold', 9));
        this.setTapOffset(GetValue$A(o, 'tapOffset', 10));
        var taps = GetValue$A(o, 'taps', undefined);
        if (taps !== undefined) {
          this.setTaps(taps);
        } else {
          this.setMaxTaps(GetValue$A(o, 'maxTaps', undefined));
          this.setMinTaps(GetValue$A(o, 'minTaps', undefined));
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
            var tapsOffset = DistanceBetween$2(pointer.upX, pointer.upY, pointer.x, pointer.y);
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

  var GetValue$z = Phaser.Utils.Objects.GetValue;
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
        this.setDragThreshold(GetValue$z(o, 'threshold', 9));
        this.setHoldTime(GetValue$z(o, 'time', 251));
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

  var DistanceBetween$1 = Phaser.Math.Distance.Between;
  var AngleBetween$1 = Phaser.Math.Angle.Between;
  var VelocityMethods = {
    getDt: function getDt() {
      var dt = GetTickDelta(this.scene);
      return dt;
    },
    getVelocity: function getVelocity() {
      var p1 = this.pointer.position;
      var p0 = this.pointer.prevPosition;
      var d = DistanceBetween$1(p0.x, p0.y, p1.x, p1.y);
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
      out = globOut$1;
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
  var globOut$1 = {};

  var GetValue$y = Phaser.Utils.Objects.GetValue;
  var RadToDeg$2 = Phaser.Math.RadToDeg;
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
        this.setDragThreshold(GetValue$y(o, 'threshold', 10));
        this.setVelocityThreshold(GetValue$y(o, 'velocityThreshold', 1000));
        this.setDirectionMode(GetValue$y(o, 'dir', '8dir'));
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
        var angle = RadToDeg$2(this.getVelocityAngle());
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

  var GetValue$x = Phaser.Utils.Objects.GetValue;
  var SpliceOne = Phaser.Utils.Array.SpliceOne;
  var DistanceBetween = Phaser.Math.Distance.Between;
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
        gameObject.setInteractive(GetValue$x(config, 'inputConfig', undefined));
      }

      // Event emitter
      this.setEventEmitter(GetValue$x(config, 'eventEmitter', undefined));
      this._enable = undefined;
      this.pointers = [];
      this.movedState = {};
      this.resetFromJSON(config);
      this.boot();
    }
    _createClass(TwoPointersTracer, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.setEnable(GetValue$x(o, "enable", true));
        this.bounds = GetValue$x(o, 'bounds', undefined);
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
          SpliceOne(this.pointers, index);
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
        return DistanceBetween(p0.x, p0.y, p1.x, p1.y);
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

  var RotateAround$2 = Phaser.Math.RotateAround;
  var RotateObjectAround = function RotateObjectAround(gameObject, x, y, angle) {
    RotateAround$2(gameObject, x, y, angle);
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

  var GetValue$w = Phaser.Utils.Objects.GetValue;
  var WrapDegrees = Phaser.Math.Angle.WrapDegrees; // Wrap degrees: -180 to 180 
  var ShortestBetween = Phaser.Math.Angle.ShortestBetween;
  var RadToDeg$1 = Phaser.Math.RadToDeg;
  var DegToRad$3 = Phaser.Math.DegToRad;
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
        this.setDragThreshold(GetValue$w(o, 'threshold', 0));
        return this;
      }
    }, {
      key: "onDrag2Start",
      value: function onDrag2Start() {
        this.prevAngle = WrapDegrees(RadToDeg$1(this.angleBetween)); // Degrees
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
              var curAngle = WrapDegrees(RadToDeg$1(this.angleBetween));
              this.angle = ShortestBetween(this.prevAngle, curAngle);
              this.prevAngle = curAngle;
              this.state = RECOGNIZED;
            }
            break;
          case RECOGNIZED:
            var curAngle = WrapDegrees(RadToDeg$1(this.angleBetween));
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
        return DegToRad$3(this.angle);
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
  var methods$7 = {
    spinObject: SpinObject
  };
  Object.assign(Rotate.prototype, methods$7);
  var IDLE = 'IDLE';
  var BEGIN = 'BEGIN';
  var RECOGNIZED = 'RECOGNIZED';

  var GetValue$v = Phaser.Utils.Objects.GetValue;
  var TapChild = function TapChild(config) {
    var tapConfig = GetValue$v(config, 'tap', undefined);
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

  var GetValue$u = Phaser.Utils.Objects.GetValue;
  var PressChild = function PressChild(config) {
    var pressConfig = GetValue$u(config, 'press', undefined);
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

  var GetValue$t = Phaser.Utils.Objects.GetValue;
  var SwipeChild = function SwipeChild(config) {
    var swipeConfig = GetValue$t(config, 'swipe', undefined);
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

  var GetValue$s = Phaser.Utils.Objects.GetValue;
  var SetChildrenInteractive$1 = function SetChildrenInteractive(gameObject, config) {
    gameObject.setInteractive();
    if (GetValue$s(config, 'dropZone', false)) {
      gameObject.input.dropZone = true;
    }
    gameObject._childrenInteractive = {
      targetSizers: GetValue$s(config, 'targets', [gameObject]),
      eventEmitter: GetValue$s(config, 'eventEmitter', gameObject),
      eventNamePrefix: GetValue$s(config, 'inputEventPrefix', 'child.')
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
    SetChildrenInteractive$1(this, config);
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

  var methods$6 = {
    getSizerConfig: GetSizerConfig,
    getChildPrevState: GetChildPrevState,
    pushIntoBounds: PushIntoBounds,
    drawBounds: DrawBounds,
    resolveWidth: ResolveWidth$1,
    resolveChildrenWidth: ResolveChildrenWidth,
    resolveHeight: ResolveHeight$1,
    postResolveSize: PostResolveSize$1,
    getChildWidth: GetChildWidth,
    getChildHeight: GetChildHeight,
    getExpandedChildWidth: GetExpandedChildWidth$1,
    getExpandedChildHeight: GetExpandedChildHeight$1,
    getChildrenWidth: GetChildrenWidth$1,
    getChildrenHeight: GetChildrenHeight$1,
    addChildrenMap: AddChildrenMap,
    addElement: AddChildrenMap,
    removeChildrenMap: RemoveChildrenMap,
    getElement: GetElement,
    getChildIndex: GetChildIndex,
    getAllChildrenSizers: GetAllChildrenSizers,
    getChildrenSizers: GetChildrenSizers$1,
    preLayout: PreLayout$1,
    layout: Layout,
    runLayout: RunLayout,
    layoutChildren: LayoutChildren$1,
    runWidthWrap: RunWidthWrap,
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
  Object.assign(methods$6, PaddingMethods, AddChildMethods$1, RemoveChildMethods$1, GetParentSizerMethods, ScaleMethods, FadeMethods, EaseMoveMethods, ShakeMethods, EaseDataMethods, ClickMethods, ClickOutsideMethods, TouchingMethods, HideMethods, ModalMethods, GetShownChildrenMethods);

  var GetValue$r = Phaser.Utils.Objects.GetValue;
  var Base$1 = /*#__PURE__*/function (_Container) {
    _inherits(Base, _Container);
    var _super = _createSuper(Base);
    function Base(scene, x, y, minWidth, minHeight, config) {
      var _this;
      _classCallCheck(this, Base);
      _this = _super.call(this, scene, x, y, 1, 1);
      _this.isRexSizer = true;
      _this.setMinSize(minWidth, minHeight);
      _this.setName(GetValue$r(config, 'name', ''));
      _this.rexSizer = {};
      _this.space = {};
      _this.backgroundChildren = undefined;
      _this.sizerChildren = undefined; // [] or {}
      _this.childrenMap = {};
      _this.layoutedChildren = undefined;
      _this.enableLayoutWarn();
      var anchorConfig = GetValue$r(config, 'anchor', undefined);
      if (anchorConfig) {
        _this.setAnchor(anchorConfig);
      }
      _this.setInnerPadding(GetValue$r(config, 'space', 0));
      var draggable = GetValue$r(config, 'draggable', false);
      if (draggable) {
        _this.setDraggable(draggable);
      }
      _this.setSizerEventsEnable(GetValue$r(config, 'sizerEvents', false));
      _this.setDirty(true);
      if (GetValue$r(config, 'enableLayer', false)) {
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
  Object.assign(Base$1.prototype, methods$6);

  var GetChildrenWidth = function GetChildrenWidth(minimumMode) {
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

  var GetChildrenHeight = function GetChildrenHeight(minimumMode) {
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

  var GetExpandedChildWidth = function GetExpandedChildWidth(child, parentWidth) {
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

  var GetExpandedChildHeight = function GetExpandedChildHeight(child, parentHeight) {
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

  var GetChildrenSizers = function GetChildrenSizers(out) {
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

  var PreLayout = function PreLayout() {
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
    PreLayout$1.call(this);
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
  var LayoutChildren = function LayoutChildren() {
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

  var ResolveWidth = function ResolveWidth(width) {
    var width = ResolveWidth$1.call(this, width);

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

  var ResolveHeight = function ResolveHeight(height) {
    var height = ResolveHeight$1.call(this, height);

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
  var Space$1 = /*#__PURE__*/function (_Zone) {
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
  var GetValue$q = Phaser.Utils.Objects.GetValue;
  var ALIGN_CENTER = Phaser.Display.Align.CENTER;
  var PROPORTIONMODE = {
    min: 0,
    full: -1
  };
  var Add = function Add(gameObject, proportion, align, paddingConfig, expand, childKey, index, minWidth, minHeight, fitRatio) {
    AddChild$1.call(this, gameObject);
    var isRexSpace = gameObject.isRexSpace;
    var proportionType = _typeof(proportion);
    if (proportion === null) {
      return this;
    } else if (proportionType === 'number') ; else if (proportionType === 'string') {
      proportion = PROPORTIONMODE[proportion];
    } else if (IsPlainObject$8(proportion)) {
      var config = proportion;
      proportion = GetValue$q(config, 'proportion', undefined);
      align = GetValue$q(config, 'align', ALIGN_CENTER);
      paddingConfig = GetValue$q(config, 'padding', 0);
      expand = GetValue$q(config, 'expand', false);
      childKey = GetValue$q(config, 'key', undefined);
      index = GetValue$q(config, 'index', undefined);
      if (!gameObject.isRexSizer) {
        minWidth = GetValue$q(config, 'minWidth', undefined);
        minHeight = GetValue$q(config, 'minHeight', undefined);
      }
      fitRatio = GetValue$q(config, 'fitRatio', 0); // width/height
    }

    if (typeof align === 'string') {
      align = AlignConst[align];
    }
    if (proportion === undefined) {
      proportion = isRexSpace ? 1 : 0;
    }
    if (align === undefined) {
      align = ALIGN_CENTER;
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
  var AddChildMethods = {
    add: Add,
    // sizer.add could be override
    addSpace: function addSpace(proportion) {
      this.insertSpace(undefined, proportion);
      return this;
    },
    insertSpace: function insertSpace(index, proportion) {
      if (proportion === undefined) {
        proportion = 1;
      }
      Add.call(this, new Space$1(this.scene), {
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
      Add.call(this, gameObject, proportion, align, paddingConfig, expand, childKey, index, minSize);
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

  var RemoveItem$2 = Phaser.Utils.Array.Remove;
  var RemoveChildMethods = {
    remove: function remove(gameObject, destroyChild) {
      if (this.getParentSizer(gameObject) !== this) {
        return this;
      }
      RemoveItem$2(this.sizerChildren, gameObject);
      RemoveChild$1.call(this, gameObject, destroyChild);
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

  var methods$5 = {
    getChildrenWidth: GetChildrenWidth,
    getChildrenHeight: GetChildrenHeight,
    getExpandedChildWidth: GetExpandedChildWidth,
    getExpandedChildHeight: GetExpandedChildHeight,
    getChildrenSizers: GetChildrenSizers,
    preLayout: PreLayout,
    postResolveSize: PostResolveSize,
    layoutChildren: LayoutChildren,
    resolveWidth: ResolveWidth,
    resolveHeight: ResolveHeight
  };
  Object.assign(methods$5, AddChildMethods, RemoveChildMethods, AlignMethods, ProportionMethods, ExpandMethods);

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
  var GetValue$p = Phaser.Utils.Objects.GetValue;
  var Sizer = /*#__PURE__*/function (_BaseSizer) {
    _inherits(Sizer, _BaseSizer);
    var _super = _createSuper(Sizer);
    function Sizer(scene, x, y, minWidth, minHeight, orientation, config) {
      var _this;
      _classCallCheck(this, Sizer);
      if (IsPlainObject$7(x)) {
        config = x;
        x = GetValue$p(config, 'x', 0);
        y = GetValue$p(config, 'y', 0);
        minWidth = GetValue$p(config, 'width', undefined);
        minHeight = GetValue$p(config, 'height', undefined);
        orientation = GetValue$p(config, 'orientation', 0);
      } else if (IsPlainObject$7(minWidth)) {
        config = minWidth;
        minWidth = GetValue$p(config, 'width', undefined);
        minHeight = GetValue$p(config, 'height', undefined);
        orientation = GetValue$p(config, 'orientation', 0);
      } else if (IsPlainObject$7(orientation)) {
        config = orientation;
        orientation = GetValue$p(config, 'orientation', 0);
      }
      if (orientation === undefined) {
        orientation = 0;
      }
      _this = _super.call(this, scene, x, y, minWidth, minHeight, config);
      _this.type = 'rexSizer';
      _this.sizerChildren = [];
      _this.setOrientation(orientation);
      _this.setItemSpacing(GetValue$p(config, 'space.item', 0));
      _this.setStartChildIndex(GetValue$p(config, 'startChildIndex', 0));
      _this.setRTL(GetValue$p(config, 'rtl', false));
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
  }(Base$1);
  Object.assign(Sizer.prototype, methods$5);

  var SetDisplaySize = function SetDisplaySize(gameObject, width, height) {
    if (!gameObject) {
      return;
    }
    var unknownWidth = width == null;
    var unknownHeight = height == null;
    if (unknownWidth && unknownHeight) {
      return gameObject;
    }
    if (!unknownWidth) {
      gameObject.displayWidth = width;
    }
    if (!unknownHeight) {
      gameObject.displayHeight = height;
    }
    if (unknownWidth) {
      gameObject.scaleX = gameObject.scaleY;
    }
    if (unknownHeight) {
      gameObject.scaleY = gameObject.scaleX;
    }
    return gameObject;
  };

  var AppendText$1 = function AppendText(value, addCR) {
    if (!value && value !== 0) {
      value = '';
    }
    if (addCR === undefined) {
      addCR = true;
    }
    if (Array.isArray(value)) {
      value = value.join('\n');
    }
    var newText;
    if (addCR) {
      newText = "".concat(this.text, "\n").concat(value);
    } else {
      newText = "".concat(this.text).concat(value);
    }
    if (newText != this.text) {
      this.setText(newText);
    }
    return this;
  };

  var ResetDisplayContent = function ResetDisplayContent(config) {
    if (config === undefined) {
      config = {};
    } else if (typeof config === 'string') {
      config = {
        text: config
      };
    }
    var text = config.text || '';
    this.setText(text);
    var iconGameObjct = this.childrenMap.icon;
    if (iconGameObjct) {
      if (!config.icon) {
        this.hide(iconGameObjct);
      } else {
        this.show(iconGameObjct);
      }
      var iconSize = config.iconSize;
      if (iconSize) {
        this.setChildDisplaySize(iconGameObjct, iconSize, iconSize);
        if (this.iconWidth !== undefined) {
          this.setIconSize(iconSize);
        }
      }
      if (config.icon !== true) {
        this.setIconTexture(config.icon, config.iconFrame);
      }
    }
    var actionGameObjct = this.childrenMap.action;
    if (actionGameObjct) {
      if (!config.action) {
        this.hide(actionGameObjct);
      } else {
        this.show(actionGameObjct);
      }
      var actionSize = config.actionSize;
      if (actionSize) {
        this.setChildDisplaySize(actionGameObjct, actionSize, actionSize);
        if (this.actionWidth !== undefined) {
          this.setActionSize(actionSize);
        }
      }
      if (config.action !== true) {
        this.setActionTexture(config.action, config.actionFrame);
      }
    }
    return this;
  };

  var methods$4 = {
    appendText: AppendText$1,
    resetDisplayContent: ResetDisplayContent
  };

  var LabelBase = /*#__PURE__*/function (_Sizer) {
    _inherits(LabelBase, _Sizer);
    var _super = _createSuper(LabelBase);
    function LabelBase() {
      _classCallCheck(this, LabelBase);
      return _super.apply(this, arguments);
    }
    _createClass(LabelBase, [{
      key: "text",
      get:
      /*
      Elements in childrenMap: 
      
      - background
      - icon, iconMask
      - text, 
      - action, actionMask
      */

      // Access text game object
      function get() {
        var textObject = this.childrenMap.text;
        if (!textObject) {
          return '';
        }
        return textObject.text;
      },
      set: function set(value) {
        var textObject = this.childrenMap.text;
        if (!textObject) {
          return;
        }
        textObject.setText(value);
      }
    }, {
      key: "setText",
      value: function setText(value) {
        this.text = value;
        return this;
      }

      // Access icon game object
    }, {
      key: "setIconTexture",
      value: function setIconTexture(key, frame) {
        var imageObject = this.childrenMap.icon;
        if (!imageObject) {
          return this;
        }
        imageObject.setTexture(key, frame);
        if (this.iconWidth !== undefined && this.iconHeight !== undefined) {
          SetDisplaySize(imageObject, this.iconWidth, this.iconHeight);
          this.resetChildScaleState(imageObject);
        }
        return this;
      }
    }, {
      key: "setTexture",
      value: function setTexture(key, frame) {
        this.setIconTexture(key, frame);
        return this;
      }
    }, {
      key: "setIconSize",
      value: function setIconSize(width, height) {
        if (height === undefined) {
          height = width;
        }
        this.iconWidth = width;
        this.iconHeight = height;
        return this;
      }
    }, {
      key: "texture",
      get: function get() {
        var imageObject = this.childrenMap.icon;
        if (!imageObject) {
          return undefined;
        }
        return imageObject.texture;
      }
    }, {
      key: "frame",
      get: function get() {
        var imageObject = this.childrenMap.icon;
        if (!imageObject) {
          return undefined;
        }
        return imageObject.frame;
      }
    }, {
      key: "setActionTexture",
      value: function setActionTexture(key, frame) {
        var imageObject = this.childrenMap.action;
        if (imageObject === undefined) {
          return this;
        }
        imageObject.setTexture(key, frame);
        if (this.actionWidth !== undefined && this.actionHeight !== undefined) {
          SetDisplaySize(imageObject, this.actionWidth, this.actionHeight);
          this.resetChildScaleState(imageObject);
        }
        return this;
      }
    }, {
      key: "actionTexture",
      get: function get() {
        var imageObject = this.childrenMap.action;
        if (!imageObject) {
          return undefined;
        }
        return imageObject.texture;
      }
    }, {
      key: "actionFrame",
      get: function get() {
        var imageObject = this.childrenMap.action;
        if (!imageObject) {
          return undefined;
        }
        return imageObject.frame;
      }
    }, {
      key: "setActionSize",
      value: function setActionSize(width, height) {
        if (height === undefined) {
          height = width;
        }
        this.actionWidth = width;
        this.actionHeight = height;
        return this;
      }
    }, {
      key: "preLayout",
      value: function preLayout() {
        var icon = this.childrenMap.icon;
        if (icon && this.iconWidth !== undefined && this.iconHeight !== undefined) {
          SetDisplaySize(icon, this.iconWidth, this.iconHeight);
        }
        var action = this.childrenMap.action;
        if (action && this.actionWidth !== undefined && this.actionHeight !== undefined) {
          SetDisplaySize(action, this.actionWidth, this.actionHeight);
        }
        _get(_getPrototypeOf(LabelBase.prototype), "preLayout", this).call(this);
      }
    }, {
      key: "postLayout",
      value: function postLayout(parent, newWidth, newHeight) {
        // Pin icon-mask to icon game object
        var iconMask = this.childrenMap.iconMask;
        if (iconMask) {
          iconMask.setPosition();
          this.resetChildPositionState(iconMask);
        }
        // Pin action-mask to action game object
        var actionMask = this.childrenMap.actionMask;
        if (actionMask) {
          actionMask.setPosition();
          this.resetChildPositionState(actionMask);
        }
        return this;
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        _get(_getPrototypeOf(LabelBase.prototype), "resize", this).call(this, width, height);
        // Resize icon-mask to icon game object
        var iconMask = this.childrenMap.iconMask;
        if (iconMask) {
          iconMask.resize();
        }
        // Resize action-mask to icon game object
        var actionMask = this.childrenMap.actionMask;
        if (actionMask) {
          actionMask.resize();
        }
        return this;
      }
    }]);
    return LabelBase;
  }(Sizer);
  Object.assign(LabelBase.prototype, methods$4);

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

  var GetValue$o = Phaser.Utils.Objects.GetValue;
  var Label = /*#__PURE__*/function (_LabelBase) {
    _inherits(Label, _LabelBase);
    var _super = _createSuper(Label);
    function Label(scene, config) {
      var _this;
      _classCallCheck(this, Label);
      // Create sizer
      _this = _super.call(this, scene, config);
      _this.type = 'rexLabel';

      // Add elements
      var background = GetValue$o(config, 'background', undefined);
      var icon = GetValue$o(config, 'icon', undefined);
      var iconMask = GetValue$o(config, 'iconMask', undefined);
      var text = GetValue$o(config, 'text', undefined);
      var action = GetValue$o(config, 'action', undefined);
      var actionMask = GetValue$o(config, 'actionMask', undefined);
      // Align
      var align = GetValue$o(config, 'align', undefined); // undefined/left/top: no space

      if (background) {
        _this.addBackground(background);
      }

      // Add space
      if (align === 'right' || align === 'bottom' || align === 'center') {
        _this.addSpace();
      }
      if (icon) {
        var padding;
        if (_this.orientation === 0) {
          if (text || action) {
            padding = {
              right: GetValue$o(config, 'space.icon', 0),
              top: GetValue$o(config, 'space.iconTop', 0),
              bottom: GetValue$o(config, 'space.iconBottom', 0),
              left: GetValue$o(config, 'space.iconLeft', 0)
            };
          }
        } else {
          if (text || action) {
            padding = {
              bottom: GetValue$o(config, 'space.icon', 0),
              left: GetValue$o(config, 'space.iconLeft', 0),
              right: GetValue$o(config, 'space.iconRight', 0),
              top: GetValue$o(config, 'space.iconTop', 0)
            };
          }
        }
        var fitRatio = GetValue$o(config, 'squareFitIcon', false) ? 1 : 0;
        _this.add(icon, {
          proportion: 0,
          padding: padding,
          fitRatio: fitRatio
        });
        if (iconMask) {
          iconMask = AddChildMask.call(_assertThisInitialized(_this), icon, icon, 1); // Circle mask
        }

        if (!fitRatio) {
          var iconSize = GetValue$o(config, 'iconSize', undefined);
          _this.setIconSize(GetValue$o(config, 'iconWidth', iconSize), GetValue$o(config, 'iconHeight', iconSize));
        }
      }
      if (text) {
        var textSpace = GetValue$o(config, 'space.text', 0);
        var expandTextWidth = GetValue$o(config, 'expandTextWidth', false);
        var expandTextHeight = GetValue$o(config, 'expandTextHeight', false);
        var proportion, padding, expand;
        if (_this.orientation === 0) {
          proportion = expandTextWidth ? 1 : 0;
          if (action) {
            padding = {
              right: textSpace
            };
          }
          expand = expandTextHeight;
        } else {
          proportion = expandTextHeight ? 1 : 0;
          if (action) {
            padding = {
              bottom: textSpace
            };
          }
          expand = expandTextWidth;
        }
        _this.add(text, {
          proportion: proportion,
          expand: expand,
          padding: padding
        });
      }
      if (action) {
        var padding;
        if (_this.orientation === 0) {
          padding = {
            top: GetValue$o(config, 'space.actionTop', 0),
            bottom: GetValue$o(config, 'space.actionBottom', 0),
            right: GetValue$o(config, 'space.actionRight', 0)
          };
        } else {
          padding = {
            left: GetValue$o(config, 'space.actionLeft', 0),
            right: GetValue$o(config, 'space.actionRight', 0),
            bottom: GetValue$o(config, 'space.actionBottom', 0)
          };
        }
        var fitRatio = GetValue$o(config, 'squareFitAction', false) ? 1 : 0;
        _this.add(action, {
          proportion: 0,
          padding: padding,
          fitRatio: fitRatio
        });
        if (actionMask) {
          actionMask = AddChildMask.call(_assertThisInitialized(_this), action, action, 1); // Circle mask
        }

        if (!fitRatio) {
          var actionSize = GetValue$o(config, 'actionSize');
          _this.setActionSize(GetValue$o(config, 'actionWidth', actionSize), GetValue$o(config, 'actionHeight', actionSize));
        }
      }

      // Add space
      if (align === 'center') {
        _this.addSpace();
      }
      _this.addChildrenMap('background', background);
      _this.addChildrenMap('icon', icon);
      _this.addChildrenMap('iconMask', iconMask);
      _this.addChildrenMap('text', text);
      _this.addChildrenMap('action', action);
      _this.addChildrenMap('actionMask', actionMask);
      return _this;
    }
    return _createClass(Label);
  }(LabelBase);

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
  var IsPlainObject$6 = function IsPlainObject(obj) {
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
    if (IsPlainObject$6(inObject)) {
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

  var GetValue$n = Phaser.Utils.Objects.GetValue;
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
          defaultRadiusX = GetValue$n(value, 'x', 0);
          defaultRadiusY = GetValue$n(value, 'y', 0);
        }
        var radius = this.cornerRadius;
        radius.tl = GetRadius(GetValue$n(value, 'tl', undefined), defaultRadiusX, defaultRadiusY);
        radius.tr = GetRadius(GetValue$n(value, 'tr', undefined), defaultRadiusX, defaultRadiusY);
        radius.bl = GetRadius(GetValue$n(value, 'bl', undefined), defaultRadiusX, defaultRadiusY);
        radius.br = GetRadius(GetValue$n(value, 'br', undefined), defaultRadiusX, defaultRadiusY);
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
      radius.x = GetValue$n(value, 'x', 0);
      radius.y = GetValue$n(value, 'y', 0);
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

  var DegToRad$2 = Phaser.Math.DegToRad;
  var ArcTo$1 = function ArcTo(centerX, centerY, radiusX, radiusY, startAngle, endAngle, antiClockWise, iteration, pathData) {
    // startAngle, endAngle: 0 ~ 360
    if (antiClockWise && endAngle > startAngle) {
      endAngle -= 360;
    } else if (!antiClockWise && endAngle < startAngle) {
      endAngle += 360;
    }
    var deltaAngle = endAngle - startAngle;
    var step = DegToRad$2(deltaAngle) / iteration;
    startAngle = DegToRad$2(startAngle);
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

  var Utils$3 = Phaser.Renderer.WebGL.Utils;
  var FillPathWebGL = function FillPathWebGL(pipeline, calcMatrix, src, alpha, dx, dy) {
    var fillTintColor = Utils$3.getTintAppendFloatAlpha(src.fillColor, src.fillAlpha * alpha);
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
  var Utils$2 = Phaser.Renderer.WebGL.Utils;
  var StrokePathWebGL = function StrokePathWebGL(pipeline, src, alpha, dx, dy) {
    var strokeTint = pipeline.strokeTint;
    var strokeTintColor = Utils$2.getTintAppendFloatAlpha(src.strokeColor, src.strokeAlpha * alpha);
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

  var Render$2 = {
    renderWebGL: PolygonWebGLRenderer,
    renderCanvas: PolygonCanvasRenderer
  };

  var Shape = Phaser.GameObjects.Shape;
  var IsPlainObject$5 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$m = Phaser.Utils.Objects.GetValue;
  var Earcut = Phaser.Geom.Polygon.Earcut;
  var RoundRectangle = /*#__PURE__*/function (_Shape) {
    _inherits(RoundRectangle, _Shape);
    var _super = _createSuper(RoundRectangle);
    function RoundRectangle(scene, x, y, width, height, radiusConfig, fillColor, fillAlpha) {
      var _this;
      _classCallCheck(this, RoundRectangle);
      var strokeColor, strokeAlpha, strokeWidth, shapeType;
      if (IsPlainObject$5(x)) {
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
        var radius = GetValue$m(radiusConfig, 'radius', radiusConfig);
        geom.setTo(0, 0, width, height, radius);
      } else {
        var radius = {
          x: width / 2,
          y: height / 2
        };
        geom.setTo(0, 0, width, height, radius);
      }
      var iteration = GetValue$m(radiusConfig, 'iteration', undefined);
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
        if (IsArcCorner$1(radius)) {
          if (radius.convex) {
            var centerX = radius.x;
            var centerY = radius.y;
            ArcTo$1(centerX, centerY, radius.x, radius.y, 180, 270, false, iteration, pathData);
          } else {
            var centerX = 0;
            var centerY = 0;
            ArcTo$1(centerX, centerY, radius.x, radius.y, 90, 0, true, iteration, pathData);
          }
        } else {
          LineTo(0, 0, pathData);
        }

        // Top-right
        radius = cornerRadius.tr;
        if (IsArcCorner$1(radius)) {
          if (radius.convex) {
            var centerX = width - radius.x;
            var centerY = radius.y;
            ArcTo$1(centerX, centerY, radius.x, radius.y, 270, 360, false, iteration, pathData);
          } else {
            var centerX = width;
            var centerY = 0;
            ArcTo$1(centerX, centerY, radius.x, radius.y, 180, 90, true, iteration, pathData);
          }
        } else {
          LineTo(width, 0, pathData);
        }

        // Bottom-right
        radius = cornerRadius.br;
        if (IsArcCorner$1(radius)) {
          if (radius.convex) {
            var centerX = width - radius.x;
            var centerY = height - radius.y;
            ArcTo$1(centerX, centerY, radius.x, radius.y, 0, 90, false, iteration, pathData);
          } else {
            var centerX = width;
            var centerY = height;
            ArcTo$1(centerX, centerY, radius.x, radius.y, 270, 180, true, iteration, pathData);
          }
        } else {
          LineTo(width, height, pathData);
        }

        // Bottom-left
        radius = cornerRadius.bl;
        if (IsArcCorner$1(radius)) {
          if (radius.convex) {
            var centerX = radius.x;
            var centerY = height - radius.y;
            ArcTo$1(centerX, centerY, radius.x, radius.y, 90, 180, false, iteration, pathData);
          } else {
            var centerX = 0;
            var centerY = height;
            ArcTo$1(centerX, centerY, radius.x, radius.y, 360, 270, true, iteration, pathData);
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
  var IsArcCorner$1 = function IsArcCorner(radius) {
    return radius.x > 0 && radius.y > 0;
  };
  var ShapeTypeMap = {
    rectangle: 0,
    circle: 1
  };
  Object.assign(RoundRectangle.prototype, Render$2);

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

  var GetValue$l = Phaser.Utils.Objects.GetValue;
  var StyleManager = /*#__PURE__*/function (_ComponentBase) {
    _inherits(StyleManager, _ComponentBase);
    var _super = _createSuper(StyleManager);
    function StyleManager(gameObject, config) {
      var _this;
      _classCallCheck(this, StyleManager);
      _this = _super.call(this, gameObject, config);
      // this.parent = gameObject;

      _this.style = GetValue$l(config, 'style', _assertThisInitialized(_this));
      var propertiesMap = GetValue$l(config, 'propertiesMap');
      _this.activeStyle = ExtractStyle(config, 'active', propertiesMap);
      _this.hoverStyle = ExtractStyle(config, 'hover', propertiesMap);
      _this.disableStyle = ExtractStyle(config, 'disable', propertiesMap);
      _this.onModifyStyle = GetValue$l(config, 'onModifyStyle');
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
  var GetValue$k = Phaser.Utils.Objects.GetValue;
  var StatesNineSlice = /*#__PURE__*/function (_PhaserNineSlice) {
    _inherits(StatesNineSlice, _PhaserNineSlice);
    var _super = _createSuper(StatesNineSlice);
    function StatesNineSlice(scene, config) {
      var _this;
      _classCallCheck(this, StatesNineSlice);
      if (config === undefined) {
        config = {};
      }
      var x = GetValue$k(config, 'x', 0);
      var y = GetValue$k(config, 'y', 0);
      var key = GetValue$k(config, 'key', null);
      var frame = GetValue$k(config, 'frame', null);
      var width = GetValue$k(config, 'width', 0);
      var height = GetValue$k(config, 'height', 0);
      var leftWidth = GetValue$k(config, 'leftWidth', 0);
      var rightWidth = GetValue$k(config, 'rightWidth', 0);
      var topHeight = GetValue$k(config, 'topHeight', 0);
      var bottomHeight = GetValue$k(config, 'bottomHeight', 0);
      _this = _super.call(this, scene, x, y, key, frame, width, height, leftWidth, rightWidth, topHeight, bottomHeight);
      _this.type = 'rexStatesNineSlice';
      var effectConfig = GetValue$k(config, 'effects', true);
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
  var GetValue$j = Phaser.Utils.Objects.GetValue;
  var StatesImage = /*#__PURE__*/function (_PhaserImage) {
    _inherits(StatesImage, _PhaserImage);
    var _super = _createSuper(StatesImage);
    function StatesImage(scene, config) {
      var _this;
      _classCallCheck(this, StatesImage);
      if (config === undefined) {
        config = {};
      }
      var x = GetValue$j(config, 'x', 0);
      var y = GetValue$j(config, 'y', 0);
      var key = GetValue$j(config, 'key', '');
      var frame = GetValue$j(config, 'frame', undefined);
      _this = _super.call(this, scene, x, y, key, frame);
      _this.type = 'rexStatesImage';
      var effectConfig = GetValue$j(config, 'effects', true);
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

  var IsPlainObject$4 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$i = Phaser.Utils.Objects.GetValue;
  var SetStretchMode = function SetStretchMode(mode) {
    if (IsPlainObject$4(mode)) {
      this.stretchMode.edge = parseMode(GetValue$i(mode, 'edge', 0));
      this.stretchMode.internal = parseMode(GetValue$i(mode, 'internal', 0));
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

  var Methods$3 = {
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

  var IsPlainObject$3 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$h = Phaser.Utils.Objects.GetValue;
  var NinePatchBase = function NinePatchBase(GOClass, type) {
    var NinePatch = /*#__PURE__*/function (_GOClass) {
      _inherits(NinePatch, _GOClass);
      var _super = _createSuper(NinePatch);
      function NinePatch(scene, x, y, width, height, key, baseFrame, columns, rows, config) {
        var _this;
        _classCallCheck(this, NinePatch);
        if (IsPlainObject$3(x)) {
          config = x;
          x = GetValue$h(config, 'x', 0);
          y = GetValue$h(config, 'y', 0);
          width = GetValue$h(config, 'width', 1);
          height = GetValue$h(config, 'height', 1);
          key = GetValue$h(config, 'key', undefined);
          baseFrame = GetValue$h(config, 'baseFrame', undefined);
          columns = GetValue$h(config, 'columns', undefined);
          rows = GetValue$h(config, 'rows', undefined);
        } else if (IsPlainObject$3(width)) {
          config = width;
          width = GetValue$h(config, 'width', 1);
          height = GetValue$h(config, 'height', 1);
          key = GetValue$h(config, 'key', undefined);
          baseFrame = GetValue$h(config, 'baseFrame', undefined);
          columns = GetValue$h(config, 'columns', undefined);
          rows = GetValue$h(config, 'rows', undefined);
        } else if (IsPlainObject$3(key)) {
          config = key;
          key = GetValue$h(config, 'key', undefined);
          baseFrame = GetValue$h(config, 'baseFrame', undefined);
          columns = GetValue$h(config, 'columns', undefined);
          rows = GetValue$h(config, 'rows', undefined);
        } else if (IsPlainObject$3(baseFrame)) {
          config = baseFrame;
          baseFrame = GetValue$h(config, 'baseFrame', undefined);
          columns = GetValue$h(config, 'columns', undefined);
          rows = GetValue$h(config, 'rows', undefined);
        } else if (Array.isArray(baseFrame)) {
          config = rows;
          rows = columns;
          columns = baseFrame;
          baseFrame = GetValue$h(config, 'baseFrame', undefined);
        } else if (IsPlainObject$3(columns)) {
          config = columns;
          columns = GetValue$h(config, 'columns', undefined);
          rows = GetValue$h(config, 'rows', undefined);
        }
        if (columns === undefined) {
          var leftWidth = GetValue$h(config, 'leftWidth', undefined);
          var rightWidth = GetValue$h(config, 'rightWidth', undefined);
          if (leftWidth !== undefined && rightWidth !== undefined) {
            columns = [leftWidth, undefined, rightWidth];
          }
        }
        if (rows === undefined) {
          var topHeight = GetValue$h(config, 'topHeight', undefined);
          var bottomHeight = GetValue$h(config, 'bottomHeight', undefined);
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

        _this.setGetFrameNameCallback(GetValue$h(config, 'getFrameNameCallback', undefined));
        _this.setStretchMode(GetValue$h(config, 'stretchMode', 0));
        _this.setPreserveRatio(GetValue$h(config, 'preserveRatio', true));
        var maxFixedPartScale = GetValue$h(config, 'maxFixedPartScale', 1);
        var maxFixedPartScaleX = GetValue$h(config, 'maxFixedPartScaleX', maxFixedPartScale);
        var maxFixedPartScaleY = GetValue$h(config, 'maxFixedPartScaleY', undefined);
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
    Object.assign(NinePatch.prototype, Methods$3);
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

  var DrawImage$1 = function DrawImage(key, frame, x, y, width, height) {
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
  var Methods$2 = {
    _drawImage: DrawImage$1,
    _drawTileSprite: DrawTileSprite
  };
  Object.assign(NinePatch.prototype, Methods$2);

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

  var PhaserText = Phaser.GameObjects.Text;
  var GetValue$g = Phaser.Utils.Objects.GetValue;
  var StatesText = /*#__PURE__*/function (_PhaserText) {
    _inherits(StatesText, _PhaserText);
    var _super = _createSuper(StatesText);
    function StatesText(scene, config) {
      var _this;
      _classCallCheck(this, StatesText);
      if (config === undefined) {
        config = {};
      }
      var x = GetValue$g(config, 'x', 0);
      var y = GetValue$g(config, 'y', 0);
      var text = GetValue$g(config, 'text', '');
      _this = _super.call(this, scene, x, y, text, config);
      _this.type = 'rexStatesText';
      config.style = _this.style;
      config.onModifyStyle = function (gameObject, style) {
        var recalculateMetrics = style.hasOwnProperty('fontStyle') || style.hasOwnProperty('fontSize') || style.hasOwnProperty('fontFamily');
        gameObject.style.update(recalculateMetrics);
      };
      _this.addStyleManager(config);
      delete config.style;
      return _this;
    }
    return _createClass(StatesText);
  }(PhaserText);
  Object.assign(StatesText.prototype, HelperMethods);

  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2019 Photon Storm Ltd.
   * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
   */

  var Utils$1 = Phaser.Renderer.WebGL.Utils;

  /**
   * Renders this Game Object with the WebGL Renderer to the given Camera.
   * The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
   * This method should not be called directly. It is a utility function of the Render module.
   *
   * @method Phaser.GameObjects.Text#renderWebGL
   * @since 3.0.0
   * @private
   *
   * @param {Phaser.Renderer.WebGL.WebGLRenderer} renderer - A reference to the current active WebGL renderer.
   * @param {Phaser.GameObjects.Text} src - The Game Object being rendered in this call.
   * @param {number} interpolationPercentage - Reserved for future use and custom pipelines.
   * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera that is rendering the Game Object.
   * @param {Phaser.GameObjects.Components.TransformMatrix} parentMatrix - This transform matrix is defined if the game object is nested
   */
  var WebGLRenderer$1 = function WebGLRenderer(renderer, src, camera, parentMatrix) {
    if (src.width === 0 || src.height === 0) {
      return;
    }
    camera.addToRenderList(src);
    var frame = src.frame;
    var width = frame.width;
    var height = frame.height;
    var getTint = Utils$1.getTintAppendFloatAlpha;
    var pipeline = renderer.pipelines.set(src.pipeline, src);
    var textureUnit = pipeline.setTexture2D(frame.glTexture, src);
    renderer.pipelines.preBatch(src);
    pipeline.batchTexture(src, frame.glTexture, width, height, src.x, src.y, width / src.style.resolution, height / src.style.resolution, src.scaleX, src.scaleY, src.rotation, src.flipX, src.flipY, src.scrollFactorX, src.scrollFactorY, src.displayOriginX, src.displayOriginY, 0, 0, width, height, getTint(src.tintTopLeft, camera.alpha * src._alphaTL), getTint(src.tintTopRight, camera.alpha * src._alphaTR), getTint(src.tintBottomLeft, camera.alpha * src._alphaBL), getTint(src.tintBottomRight, camera.alpha * src._alphaBR), src.tintFill, 0, 0, camera, parentMatrix, false, textureUnit);
    renderer.pipelines.postBatch(src);
  };

  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2019 Photon Storm Ltd.
   * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
   */

  /**
   * Renders this Game Object with the Canvas Renderer to the given Camera.
   * The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
   * This method should not be called directly. It is a utility function of the Render module.
   *
   * @method Phaser.GameObjects.Text#renderCanvas
   * @since 3.0.0
   * @private
   *
   * @param {Phaser.Renderer.Canvas.CanvasRenderer} renderer - A reference to the current active Canvas renderer.
   * @param {Phaser.GameObjects.Text} src - The Game Object being rendered in this call.
   * @param {number} interpolationPercentage - Reserved for future use and custom pipelines.
   * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera that is rendering the Game Object.
   * @param {Phaser.GameObjects.Components.TransformMatrix} parentMatrix - This transform matrix is defined if the game object is nested
   */
  var CanvasRenderer$1 = function CanvasRenderer(renderer, src, camera, parentMatrix) {
    if (src.width === 0 || src.height === 0) {
      return;
    }
    camera.addToRenderList(src);
    renderer.batchSprite(src, src.frame, camera, parentMatrix);
  };

  var Render$1 = {
    renderWebGL: WebGLRenderer$1,
    renderCanvas: CanvasRenderer$1
  };

  var CanvasPool$4 = Phaser.Display.Canvas.CanvasPool;
  var MeasureTextMargins = function MeasureTextMargins(textStyle, testString, out) {
    if (out === undefined) {
      out = {};
    }
    var canvas = CanvasPool$4.create(this);
    var context = canvas.getContext('2d', {
      willReadFrequently: true
    });
    textStyle.syncFont(canvas, context);
    var metrics = context.measureText(testString);
    var width = Math.ceil(metrics.width * textStyle.baselineX);
    var baseline = width;
    var height = 2 * baseline;
    baseline = baseline * textStyle.baselineY | 0;
    canvas.width = width;
    canvas.height = height;
    context.fillStyle = '#f00';
    context.fillRect(0, 0, width, height);
    context.font = textStyle._font;
    context.textBaseline = 'alphabetic';
    context.fillStyle = '#000';
    context.fillText(textStyle.testString, 0, baseline);
    out.left = 0;
    if (width === 0 || height === 0 || !context.getImageData(0, 0, width, height)) {
      CanvasPool$4.remove(canvas);
      return out;
    }
    var imagedata = context.getImageData(0, 0, width, height).data;
    var stop = false;
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var idx = (y * width + x) * 4;
        if (imagedata[idx] !== 255) {
          out.left = x;
          stop = true;
          break;
        }
      }
      if (stop) {
        break;
      }
    }
    CanvasPool$4.remove(canvas);
    return out;
  };

  CheckP3Version();
  var GameObject$3 = Phaser.GameObjects.GameObject;
  var TextBase = /*#__PURE__*/function (_GameObject) {
    _inherits(TextBase, _GameObject);
    var _super = _createSuper(TextBase);
    function TextBase() {
      _classCallCheck(this, TextBase);
      return _super.apply(this, arguments);
    }
    _createClass(TextBase, [{
      key: "setStyle",
      value: function setStyle(style) {
        return this.style.setStyle(style);
      }
    }, {
      key: "setFont",
      value: function setFont(font) {
        return this.style.setFont(font);
      }
    }, {
      key: "setFontFamily",
      value: function setFontFamily(family) {
        return this.style.setFontFamily(family);
      }
    }, {
      key: "setFontSize",
      value: function setFontSize(size) {
        return this.style.setFontSize(size);
      }
    }, {
      key: "setFontStyle",
      value: function setFontStyle(style) {
        return this.style.setFontStyle(style);
      }
    }, {
      key: "setTestString",
      value: function setTestString(string) {
        return this.style.setTestString(string);
      }
    }, {
      key: "setFixedSize",
      value: function setFixedSize(width, height) {
        return this.style.setFixedSize(width, height);
      }
    }, {
      key: "setBackgroundColor",
      value: function setBackgroundColor(color, color2, isHorizontalGradient) {
        return this.style.setBackgroundColor(color, color2, isHorizontalGradient);
      }
    }, {
      key: "setBackgroundStrokeColor",
      value: function setBackgroundStrokeColor(color, lineWidth) {
        return this.style.setBackgroundStrokeColor(color, lineWidth);
      }
    }, {
      key: "setBackgroundCornerRadius",
      value: function setBackgroundCornerRadius(radius, iteration) {
        return this.style.setBackgroundCornerRadius(radius, iteration);
      }
    }, {
      key: "setFill",
      value: function setFill(color) {
        return this.style.setFill(color);
      }
    }, {
      key: "setColor",
      value: function setColor(color) {
        return this.style.setColor(color);
      }
    }, {
      key: "setStroke",
      value: function setStroke(color, thickness) {
        return this.style.setStroke(color, thickness);
      }
    }, {
      key: "setShadow",
      value: function setShadow(x, y, color, blur, shadowStroke, shadowFill) {
        return this.style.setShadow(x, y, color, blur, shadowStroke, shadowFill);
      }
    }, {
      key: "setShadowOffset",
      value: function setShadowOffset(x, y) {
        return this.style.setShadowOffset(x, y);
      }
    }, {
      key: "setShadowColor",
      value: function setShadowColor(color) {
        return this.style.setShadowColor(color);
      }
    }, {
      key: "setShadowBlur",
      value: function setShadowBlur(blur) {
        return this.style.setShadowBlur(blur);
      }
    }, {
      key: "setShadowStroke",
      value: function setShadowStroke(enabled) {
        return this.style.setShadowStroke(enabled);
      }
    }, {
      key: "setShadowFill",
      value: function setShadowFill(enabled) {
        return this.style.setShadowFill(enabled);
      }
    }, {
      key: "setWrapMode",
      value: function setWrapMode(mode) {
        return this.style.setWrapMode(mode);
      }
    }, {
      key: "setWrapWidth",
      value: function setWrapWidth(width) {
        return this.style.setWrapWidth(width);
      }

      // Align with built-in text game object
    }, {
      key: "setWordWrapWidth",
      value: function setWordWrapWidth(width) {
        return this.style.setWrapWidth(width);
      }
    }, {
      key: "setAlign",
      value: function setAlign(align) {
        return this.style.setHAlign(align);
      }
    }, {
      key: "setHAlign",
      value: function setHAlign(align) {
        return this.style.setHAlign(align);
      }
    }, {
      key: "setVAlign",
      value: function setVAlign(align) {
        return this.style.setVAlign(align);
      }
    }, {
      key: "setLineSpacing",
      value: function setLineSpacing(value) {
        this.lineSpacing = value;
        this.updateText(false);
        return this;
      }
    }, {
      key: "setXOffset",
      value: function setXOffset(value) {
        return this.style.setXOffset(value);
      }
    }, {
      key: "setMaxLines",
      value: function setMaxLines(max) {
        return this.style.setMaxLines(max);
      }
    }, {
      key: "setResolution",
      value: function setResolution(value) {
        return this.style.setResolution(value);
      }
    }, {
      key: "getTextMetrics",
      value: function getTextMetrics() {
        return this.style.getTextMetrics();
      }
    }, {
      key: "setTextMetrics",
      value: function setTextMetrics(metrics, font) {
        return this.style.setTextMetrics(metrics, font);
      }
    }, {
      key: "measureTextMargins",
      value: function measureTextMargins(testString, out) {
        return MeasureTextMargins(this.style, testString, out);
      }
    }]);
    return TextBase;
  }(GameObject$3);
  var Components$2 = Phaser.GameObjects.Components;
  Phaser.Class.mixin(TextBase, [Components$2.Alpha, Components$2.BlendMode, Components$2.ComputedSize, Components$2.Crop, Components$2.Depth, Components$2.Flip, Components$2.GetBounds, Components$2.Mask, Components$2.Origin, Components$2.Pipeline, Components$2.PostPipeline, Components$2.ScrollFactor, Components$2.Tint, Components$2.Transform, Components$2.Visible, Render$1]);

  var Pad = Phaser.Utils.String.Pad;
  var GetStyle = function GetStyle(style, canvas, context) {
    if (style == null) {
      return style;
    }
    switch (_typeof(style)) {
      case 'string':
        return style;
      case 'number':
        return "#".concat(Pad(Math.floor(style).toString(16), 6, '0', 1));
      case 'function':
        return style(canvas, context);
      case 'object':
        if (style.hasOwnProperty('r')) {
          if (style.hasOwnProperty('a')) {
            // rgba
            return "rgba(".concat(style.r, ",").concat(style.g, ",").concat(style.b, ",").concat(style.a, ")");
          } else {
            // rgb
            return "rgb(".concat(style.r, ",").concat(style.g, ",").concat(style.b, ")");
          }
        } else if (style.hasOwnProperty('h')) {
          if (style.hasOwnProperty('a')) {
            // hsla
            return "hsla(".concat(style.h, ",").concat(style.s, ",").concat(style.l, ",").concat(style.a, ")");
          } else {
            // hsl
            return "hsl(".concat(style.h, ",").concat(style.s, ",").concat(style.l, ")");
          }
        } else {
          return style; // Not a valid input
        }

      default:
        return style;
    }
  };

  //  Key: [ Object Key, Default Value, postCallback ]

  var PropertyMap = {
    // background
    backgroundColor: ['backgroundColor', null, GetStyle],
    backgroundColor2: ['backgroundColor2', null, GetStyle],
    backgroundHorizontalGradient: ['backgroundHorizontalGradient', true, null],
    backgroundStrokeColor: ['backgroundStrokeColor', null, GetStyle],
    backgroundStrokeLineWidth: ['backgroundStrokeLineWidth', 2, null],
    backgroundCornerRadius: ['backgroundCornerRadius', 0, null],
    backgroundCornerIteration: ['backgroundCornerIteration', null, null],
    // font
    fontFamily: ['fontFamily', 'Courier', null],
    fontSize: ['fontSize', '16px', null],
    fontStyle: ['fontStyle', '', null],
    color: ['color', '#fff', GetStyle],
    stroke: ['stroke', '#fff', GetStyle],
    strokeThickness: ['strokeThickness', 0, null],
    shadowOffsetX: ['shadow.offsetX', 0, null],
    shadowOffsetY: ['shadow.offsetY', 0, null],
    shadowColor: ['shadow.color', '#000', GetStyle],
    shadowBlur: ['shadow.blur', 0, null],
    shadowStroke: ['shadow.stroke', false, null],
    shadowFill: ['shadow.fill', false, null],
    // underline
    underlineColor: ['underline.color', '#000', GetStyle],
    underlineThickness: ['underline.thickness', 0, null],
    underlineOffset: ['underline.offset', 0, null],
    // strikethrough
    strikethroughColor: ['strikethrough.color', '#000', GetStyle],
    strikethroughThickness: ['strikethrough.thickness', 0, null],
    strikethroughOffset: ['strikethrough.offset', 0, null],
    // align
    halign: ['halign', 'left', null],
    valign: ['valign', 'top', null],
    // size
    maxLines: ['maxLines', 0, null],
    fixedWidth: ['fixedWidth', 0, null],
    fixedHeight: ['fixedHeight', 0, null],
    resolution: ['resolution', 0, null],
    lineSpacing: ['lineSpacing', 0, null],
    xOffset: ['xOffset', 0, null],
    rtl: ['rtl', false, null],
    testString: ['testString', '|MÃ‰qgy', null],
    baselineX: ['baselineX', 1.2, null],
    baselineY: ['baselineY', 1.4, null],
    // wrap
    wrapMode: ['wrap.mode', 0, null],
    wrapWidth: ['wrap.width', 0, null],
    wrapCallback: ['wrap.callback', null],
    wrapCallbackScope: ['wrap.callbackScope', null]
  };

  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2018 Photon Storm Ltd.
   * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
   */

  var CanvasPool$3 = Phaser.Display.Canvas.CanvasPool;

  /**
   * Calculates the ascent, descent and fontSize of a given font style.
   *
   * @function Phaser.GameObjects.MeasureText
   * @since 3.0.0
   *
   * @param {Phaser.GameObjects.Text.TextStyle} textStyle - The TextStyle object to measure.
   *
   * @return {object} An object containing the ascent, descent and fontSize of the TextStyle.
   */
  var MeasureText = function MeasureText(textStyle) {
    // @property {HTMLCanvasElement} canvas - The canvas element that the text is rendered.
    var canvas = CanvasPool$3.create(this);

    // @property {HTMLCanvasElement} context - The context of the canvas element that the text is rendered to.
    var context = canvas.getContext('2d', {
      willReadFrequently: true
    });
    textStyle.syncFont(canvas, context);
    var metrics = context.measureText(textStyle.testString);
    if ('actualBoundingBoxAscent' in metrics) {
      var ascent = metrics.actualBoundingBoxAscent;
      var descent = metrics.actualBoundingBoxDescent;
      var output = {
        ascent: ascent,
        descent: descent,
        fontSize: ascent + descent
      };
      CanvasPool$3.remove(canvas);
      return output;
    }
    var width = Math.ceil(metrics.width * textStyle.baselineX);
    var baseline = width;
    var height = 2 * baseline;
    baseline = baseline * textStyle.baselineY | 0;
    canvas.width = width;
    canvas.height = height;
    context.fillStyle = '#f00';
    context.fillRect(0, 0, width, height);
    context.font = textStyle._font;
    context.textBaseline = 'alphabetic';
    context.fillStyle = '#000';
    context.fillText(textStyle.testString, 0, baseline);
    var output = {
      ascent: 0,
      descent: 0,
      fontSize: 0
    };
    if (!context.getImageData(0, 0, width, height)) {
      output.ascent = baseline;
      output.descent = baseline + 6;
      output.fontSize = output.ascent + output.descent;
      CanvasPool$3.remove(canvas);
      return output;
    }
    var imagedata = context.getImageData(0, 0, width, height).data;
    var pixels = imagedata.length;
    var line = width * 4;
    var i;
    var j;
    var idx = 0;
    var stop = false;

    // ascent. scan from top to bottom until we find a non red pixel
    for (i = 0; i < baseline; i++) {
      for (j = 0; j < line; j += 4) {
        if (imagedata[idx + j] !== 255) {
          stop = true;
          break;
        }
      }
      if (!stop) {
        idx += line;
      } else {
        break;
      }
    }
    output.ascent = baseline - i;
    idx = pixels - line;
    stop = false;

    // descent. scan from bottom to top until we find a non red pixel
    for (i = height; i > baseline; i--) {
      for (j = 0; j < line; j += 4) {
        if (imagedata[idx + j] !== 255) {
          stop = true;
          break;
        }
      }
      if (!stop) {
        idx -= line;
      } else {
        break;
      }
    }
    output.descent = i - baseline;
    output.fontSize = output.ascent + output.descent;
    CanvasPool$3.remove(canvas);
    return output;
  };

  var CONST = {
    // new line mode
    NO_NEWLINE: 0,
    RAW_NEWLINE: 1,
    WRAPPED_NEWLINE: 2,
    // wrap mode
    NO_WRAP: 0,
    WORD_WRAP: 1,
    CHAR_WRAP: 2,
    // split lines
    SPLITREGEXP: /(?:\r\n|\r|\n)/
  };

  var GetAdvancedValue = Phaser.Utils.Objects.GetAdvancedValue;
  var GetValue$f = Phaser.Utils.Objects.GetValue;
  var TextStyle$1 = /*#__PURE__*/function () {
    function TextStyle(text, style, propertyMap) {
      _classCallCheck(this, TextStyle);
      this.parent = text;
      // parent.updateText()
      // parent.width, parent.height

      if (propertyMap === undefined) {
        propertyMap = PropertyMap;
      }
      this.propertyMap = propertyMap;
      this.backgroundColor;
      this.backgroundColor2;
      this.backgroundHorizontalGradient;
      this.backgroundStrokeColor;
      this.backgroundStrokeLineWidth;
      this.backgroundCornerRadius;
      this.backgroundCornerIteration;
      this.fontFamily;
      this.fontSize;
      this.fontStyle;
      this.color;
      this.stroke;
      this.strokeThickness;
      this.shadowOffsetX;
      this.shadowOffsetY;
      this.shadowColor;
      this.shadowBlur;
      this.shadowStroke;
      this.shadowFill;
      this.underlineColor;
      this.underlineThickness;
      this.underlineOffset;
      this.strikethroughColor;
      this.strikethroughThickness;
      this.strikethroughOffset;
      this.halign;
      this.valign;
      this.maxLines;
      this.fixedWidth;
      this.fixedHeight;
      this.resolution;
      this.xOffset;
      this.rtl;
      this.testString;
      this.baselineX;
      this.baselineY;
      this.wrapMode;
      this.wrapWidth;
      this.wrapCallback;
      this.wrapCallbackScope;
      this._font;

      //  Set to defaults + user style
      this.setStyle(style, false, true);
    }
    _createClass(TextStyle, [{
      key: "isWrapFitMode",
      get: function get() {
        return this.fixedWidth > 0 && this.wrapMode !== CONST.NO_WRAP && this.wrapWidth === 0;
      }
    }, {
      key: "setStyle",
      value: function setStyle(style, updateText, setDefaults) {
        if (updateText === undefined) {
          updateText = true;
        }
        if (setDefaults === undefined) {
          setDefaults = false;
        }

        // Compatible with Text game object
        if (style && style.hasOwnProperty('wordWrap')) {
          var wordWrap = style.wordWrap;
          if (wordWrap.hasOwnProperty('width')) {
            style.wrap = {
              mode: 'word',
              width: wordWrap.width
            };
          }
        }
        if (style && style.hasOwnProperty('wrap')) {
          var wrap = style.wrap;
          if (wrap.hasOwnProperty('mode')) {
            var mode = wrap.mode;
            if (typeof mode === 'string') {
              wrap.mode = WRAPMODE[mode];
            }
          } else {
            if (wrap.hasOwnProperty('width')) {
              wrap.mode = 1;
            }
          }
        }

        // default halign of RTL is 'right'
        if (style && style.rtl && setDefaults && !style.hasOwnProperty('halign')) {
          style.halign = 'right';
        }

        //  Avoid type mutation
        if (style && style.hasOwnProperty('fontSize') && typeof style.fontSize === 'number') {
          style.fontSize = style.fontSize.toString() + 'px';
        }
        var propertyMap = this.propertyMap;
        for (var key in propertyMap) {
          var prop = propertyMap[key]; // [ Object Key, Default Value, preCallback ]
          var objKey = prop[0];
          var defaultValue = setDefaults ? prop[1] : this[key];
          var postCallback = prop[2];
          if (key === 'wrapCallback' || key === 'wrapCallbackScope') {
            // Callback & scope should be set without processing the values
            this[key] = GetValue$f(style, objKey, defaultValue);
          } else {
            var value = GetAdvancedValue(style, objKey, defaultValue);
            if (postCallback) {
              value = postCallback(value);
            }
            this[key] = value;
          }
        }

        //  Allow for 'font' override
        var font = GetValue$f(style, 'font', null);
        if (font === null) {
          this._font = this.fontStyle + ' ' + this.fontSize + ' ' + this.fontFamily;
        } else {
          this._font = font;
        }

        //  Allow for 'fill' to be used in place of 'color'
        var fill = GetValue$f(style, 'fill', null);
        if (fill !== null) {
          this.color = GetStyle(fill);
        }
        var metrics = GetValue$f(style, 'metrics', false);

        //  Provide optional TextMetrics in the style object to avoid the canvas look-up / scanning
        //  Doing this is reset if you then change the font of this TextStyle after creation
        if (metrics) {
          this.metrics = {
            ascent: GetValue$f(metrics, 'ascent', 0),
            descent: GetValue$f(metrics, 'descent', 0),
            fontSize: GetValue$f(metrics, 'fontSize', 0)
          };
        } else if (updateText || !this.metrics) {
          this.metrics = MeasureText(this);
        }
        if (updateText) {
          return this.parent.updateText();
        } else {
          return this.parent;
        }
      }
    }, {
      key: "syncFont",
      value: function syncFont(canvas, context) {
        context.font = this._font;
      }
    }, {
      key: "syncStyle",
      value: function syncStyle(canvas, context) {
        context.textBaseline = 'alphabetic';
        context.fillStyle = this.color;
        context.strokeStyle = this.stroke;
        context.lineWidth = this.strokeThickness;
        context.lineCap = 'round';
        context.lineJoin = 'round';
      }
    }, {
      key: "syncShadow",
      value: function syncShadow(context, enabled) {
        if (enabled) {
          context.shadowOffsetX = this.shadowOffsetX;
          context.shadowOffsetY = this.shadowOffsetY;
          context.shadowColor = this.shadowColor;
          context.shadowBlur = this.shadowBlur;
        } else {
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 0;
          context.shadowColor = 0;
          context.shadowBlur = 0;
        }
      }
    }, {
      key: "update",
      value: function update(recalculateMetrics) {
        if (recalculateMetrics) {
          this._font = "".concat(this.fontStyle, " ").concat(this.fontSize, " ").concat(this.fontFamily).trim();
          this.metrics = MeasureText(this);
        }
        return this.parent.updateText(recalculateMetrics);
      }
    }, {
      key: "buildFont",
      value: function buildFont() {
        var newFont = "".concat(this.fontStyle, " ").concat(this.fontSize, " ").concat(this.fontFamily).trim();
        if (newFont !== this._font) {
          this._font = newFont;
          //this.metrics = MeasureText(this);
        }

        return this;
      }
    }, {
      key: "setFont",
      value: function setFont(font) {
        if (typeof font === 'string') {
          this.fontFamily = font;
          this.fontSize = '';
          this.fontStyle = '';
        } else {
          this.fontFamily = GetValue$f(font, 'fontFamily', 'Courier');
          this.fontSize = GetValue$f(font, 'fontSize', '16px');
          this.fontStyle = GetValue$f(font, 'fontStyle', '');
        }
        return this.update(true);
      }
    }, {
      key: "setFontFamily",
      value: function setFontFamily(family) {
        this.fontFamily = family;
        return this.update(true);
      }
    }, {
      key: "setFontStyle",
      value: function setFontStyle(style) {
        this.fontStyle = style;
        return this.update(true);
      }
    }, {
      key: "setFontSize",
      value: function setFontSize(size) {
        if (typeof size === 'number') {
          size = size.toString() + 'px';
        }
        this.fontSize = size;
        return this.update(true);
      }
    }, {
      key: "setTestString",
      value: function setTestString(string) {
        this.testString = string;
        return this.update(true);
      }
    }, {
      key: "setFixedSize",
      value: function setFixedSize(width, height) {
        this.fixedWidth = width;
        this.fixedHeight = height;
        if (width) {
          this.parent.width = width;
        }
        if (height) {
          this.parent.height = height;
        }
        return this.update(this.isWrapFitMode);
      }
    }, {
      key: "setResolution",
      value: function setResolution(value) {
        this.resolution = value;
        return this.update(false);
      }
    }, {
      key: "setXOffset",
      value: function setXOffset(value) {
        this.xOffset = value;
        return this.update(false);
      }
    }, {
      key: "setBackgroundColor",
      value: function setBackgroundColor(color, color2, isHorizontalGradient) {
        if (isHorizontalGradient === undefined) {
          isHorizontalGradient = true;
        }
        this.backgroundColor = GetStyle(color, this.parent.canvas, this.parent.context);
        this.backgroundColor2 = GetStyle(color2, this.parent.canvas, this.parent.context);
        this.backgroundHorizontalGradient = isHorizontalGradient;
        return this.update(false);
      }
    }, {
      key: "setBackgroundStrokeColor",
      value: function setBackgroundStrokeColor(color, lineWidth) {
        this.backgroundStrokeColor = GetStyle(color, this.parent.canvas, this.parent.context);
        this.backgroundStrokeLineWidth = lineWidth;
        return this.update(false);
      }
    }, {
      key: "setBackgroundCornerRadius",
      value: function setBackgroundCornerRadius(radius, iteration) {
        this.backgroundCornerRadius = radius;
        this.backgroundCornerIteration = iteration;
        return this.update(false);
      }
    }, {
      key: "setFill",
      value: function setFill(color) {
        this.color = GetStyle(color, this.parent.canvas, this.parent.context);
        return this.update(false);
      }
    }, {
      key: "setColor",
      value: function setColor(color) {
        this.color = GetStyle(color, this.parent.canvas, this.parent.context);
        return this.update(false);
      }
    }, {
      key: "setStroke",
      value: function setStroke(color, thickness) {
        if (color === undefined) {
          //  Reset the stroke to zero (disabling it)
          this.strokeThickness = 0;
        } else {
          if (thickness === undefined) {
            thickness = this.strokeThickness;
          }
          this.stroke = GetStyle(color, this.parent.canvas, this.parent.context);
          this.strokeThickness = thickness;
        }
        return this.update(true);
      }
    }, {
      key: "setShadow",
      value: function setShadow(x, y, color, blur, shadowStroke, shadowFill) {
        if (x === undefined) {
          x = 0;
        }
        if (y === undefined) {
          y = 0;
        }
        if (color === undefined) {
          color = '#000';
        }
        if (blur === undefined) {
          blur = 0;
        }
        if (shadowStroke === undefined) {
          shadowStroke = false;
        }
        if (shadowFill === undefined) {
          shadowFill = true;
        }
        this.shadowOffsetX = x;
        this.shadowOffsetY = y;
        this.shadowColor = GetStyle(color, this.parent.canvas, this.parent.context);
        this.shadowBlur = blur;
        this.shadowStroke = shadowStroke;
        this.shadowFill = shadowFill;
        return this.update(false);
      }
    }, {
      key: "setShadowOffset",
      value: function setShadowOffset(x, y) {
        if (x === undefined) {
          x = 0;
        }
        if (y === undefined) {
          y = x;
        }
        this.shadowOffsetX = x;
        this.shadowOffsetY = y;
        return this.update(false);
      }
    }, {
      key: "setShadowColor",
      value: function setShadowColor(color) {
        if (color === undefined) {
          color = '#000';
        }
        this.shadowColor = GetStyle(color, this.parent.canvas, this.parent.context);
        return this.update(false);
      }
    }, {
      key: "setShadowBlur",
      value: function setShadowBlur(blur) {
        if (blur === undefined) {
          blur = 0;
        }
        this.shadowBlur = blur;
        return this.update(false);
      }
    }, {
      key: "setShadowStroke",
      value: function setShadowStroke(enabled) {
        this.shadowStroke = enabled;
        return this.update(false);
      }
    }, {
      key: "setShadowFill",
      value: function setShadowFill(enabled) {
        this.shadowFill = enabled;
        return this.update(false);
      }
    }, {
      key: "setUnderline",
      value: function setUnderline(color, thickness, offset) {
        if (color === undefined) {
          color = '#000';
        }
        if (thickness === undefined) {
          thickness = 0;
        }
        if (offset === undefined) {
          offset = 0;
        }
        this.underlineColor = GetStyle(color, this.parent.canvas, this.parent.context);
        this.underlineThickness = thickness;
        this.underlineOffset = offset;
        return this.update(false);
      }
    }, {
      key: "setUnderlineColor",
      value: function setUnderlineColor(color) {
        if (color === undefined) {
          color = '#000';
        }
        this.underlineColor = GetStyle(color, this.parent.canvas, this.parent.context);
        return this.update(false);
      }
    }, {
      key: "setUnderlineThickness",
      value: function setUnderlineThickness(thickness) {
        if (thickness === undefined) {
          thickness = 0;
        }
        this.underlineThickness = thickness;
        return this.update(false);
      }
    }, {
      key: "setUnderlineOffset",
      value: function setUnderlineOffset(offset) {
        if (offset === undefined) {
          offset = 0;
        }
        this.underlineOffset = offset;
        return this.update(false);
      }
    }, {
      key: "setStrikethrough",
      value: function setStrikethrough(color, thickness, offset) {
        if (color === undefined) {
          color = '#000';
        }
        if (thickness === undefined) {
          thickness = 0;
        }
        if (offset === undefined) {
          offset = 0;
        }
        this.strikethroughColor = GetStyle(color, this.parent.canvas, this.parent.context);
        this.strikethroughThickness = thickness;
        this.strikethroughOffset = offset;
        return this.update(false);
      }
    }, {
      key: "setStrikethroughColor",
      value: function setStrikethroughColor(color) {
        if (color === undefined) {
          color = '#000';
        }
        this.strikethroughColor = GetStyle(color, this.parent.canvas, this.parent.context);
        return this.update(false);
      }
    }, {
      key: "setStrikethroughThickness",
      value: function setStrikethroughThickness(thickness) {
        if (thickness === undefined) {
          thickness = 0;
        }
        this.strikethroughThickness = thickness;
        return this.update(false);
      }
    }, {
      key: "setStrikethroughOffset",
      value: function setStrikethroughOffset(offset) {
        if (offset === undefined) {
          offset = 0;
        }
        this.strikethroughOffset = offset;
        return this.update(false);
      }
    }, {
      key: "setWrapMode",
      value: function setWrapMode(mode) {
        if (typeof mode === 'string') {
          mode = WRAPMODE[mode.toLowerCase()] || 0;
        }
        this.wrapMode = mode;
        return this.update(true);
      }
    }, {
      key: "setWrapWidth",
      value: function setWrapWidth(width) {
        this.wrapWidth = width;
        return this.update(false);
      }
    }, {
      key: "setAlign",
      value: function setAlign(halign, valign) {
        if (halign === undefined) {
          halign = 'left';
        }
        if (valign === undefined) {
          valign = 'top';
        }
        this.halign = halign;
        this.valign = valign;
        return this.update(false);
      }
    }, {
      key: "setHAlign",
      value: function setHAlign(halign) {
        if (halign === undefined) {
          halign = 'left';
        }
        this.halign = halign;
        return this.update(false);
      }
    }, {
      key: "setVAlign",
      value: function setVAlign(valign) {
        if (valign === undefined) {
          valign = 'top';
        }
        this.valign = valign;
        return this.update(false);
      }
    }, {
      key: "setMaxLines",
      value: function setMaxLines(max) {
        if (max === undefined) {
          max = 0;
        }
        this.maxLines = max;
        return this.update(false);
      }
    }, {
      key: "getTextMetrics",
      value: function getTextMetrics() {
        var metrics = this.metrics;
        return {
          ascent: metrics.ascent,
          descent: metrics.descent,
          fontSize: metrics.fontSize
        };
      }
    }, {
      key: "setTextMetrics",
      value: function setTextMetrics(metrics, font) {
        this.metrics.ascent = metrics.ascent;
        this.metrics.descent = metrics.descent;
        this.metrics.fontSize = metrics.fontSize;
        if (font) {
          if (typeof font === 'string') {
            this.fontFamily = font;
            this.fontSize = '';
            this.fontStyle = '';
          } else {
            this.fontFamily = GetValue$f(font, 'fontFamily', this.fontFamily);
            this.fontSize = GetValue$f(font, 'fontSize', this.fontSize);
            this.fontStyle = GetValue$f(font, 'fontStyle', this.fontStyle);
          }
        }
        return this.parent.updateText(true);
      }
    }, {
      key: "lineHeight",
      get: function get() {
        return this.metrics.fontSize + this.strokeThickness + this.parent.lineSpacing;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var output = {};
        var propertyMap = this.propertyMap;
        for (var key in propertyMap) {
          output[key] = this[key];
        }
        output.metrics = this.getTextMetrics();
        return output;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.parent = undefined;
      }
    }]);
    return TextStyle;
  }();
  var WRAPMODE = {
    none: CONST.NO_WRAP,
    word: CONST.WORD_WRAP,
    "char": CONST.CHAR_WRAP,
    character: CONST.CHAR_WRAP
  };

  var DegToRad$1 = Phaser.Math.DegToRad;
  var AddRoundRectanglePath = function AddRoundRectanglePath(context, x, y, width, height, radiusConfig, iteration) {
    var geom = new RoundRectangle$1(x, y, width, height, radiusConfig),
      minWidth = geom.minWidth,
      minHeight = geom.minHeight,
      scaleRX = width >= minWidth ? 1 : width / minWidth,
      scaleRY = height >= minHeight ? 1 : height / minHeight;
    var cornerRadius = geom.cornerRadius;
    var radius, radiusX, radiusY, centerX, centerY;
    var startX, startY;
    context.save();
    context.beginPath();
    context.translate(x, y);

    // Top-left
    radius = cornerRadius.tl;
    if (IsArcCorner(radius)) {
      radiusX = radius.x * scaleRX;
      radiusY = radius.y * scaleRY;
      if (IsConvexArc(radius)) {
        centerX = radiusX;
        centerY = radiusY;
        ArcTo(context, centerX, centerY, radiusX, radiusY, 180, 270, false, iteration);
      } else {
        centerX = 0;
        centerY = 0;
        ArcTo(context, centerX, centerY, radiusX, radiusY, 90, 0, true, iteration);
      }
      startX = 0;
      startY = radiusY;
    } else {
      context.lineTo(0, 0);
      startX = 0;
      startY = 0;
    }

    // Top-right
    radius = cornerRadius.tr;
    if (IsArcCorner(radius)) {
      radiusX = radius.x * scaleRX;
      radiusY = radius.y * scaleRY;
      if (IsConvexArc(radius)) {
        centerX = width - radiusX;
        centerY = radiusY;
        ArcTo(context, centerX, centerY, radiusX, radiusY, 270, 360, false, iteration);
      } else {
        centerX = width;
        centerY = 0;
        ArcTo(context, centerX, centerY, radiusX, radiusY, 180, 90, true, iteration);
      }
    } else {
      context.lineTo(width, 0);
    }

    // Bottom-right
    radius = cornerRadius.br;
    if (IsArcCorner(radius)) {
      radiusX = radius.x * scaleRX;
      radiusY = radius.y * scaleRY;
      if (IsConvexArc(radius)) {
        centerX = width - radiusX;
        centerY = height - radiusY;
        ArcTo(context, centerX, centerY, radiusX, radiusY, 0, 90, false, iteration);
      } else {
        centerX = width;
        centerY = height;
        ArcTo(context, centerX, centerY, radiusX, radiusY, 270, 180, true, iteration);
      }
    } else {
      context.lineTo(width, height);
    }

    // Bottom-left
    radius = cornerRadius.bl;
    if (IsArcCorner(radius)) {
      radiusX = radius.x * scaleRX;
      radiusY = radius.y * scaleRY;
      if (IsConvexArc(radius)) {
        centerX = radiusX;
        centerY = height - radiusY;
        ArcTo(context, centerX, centerY, radiusX, radiusY, 90, 180, false, iteration);
      } else {
        centerX = 0;
        centerY = height;
        ArcTo(context, centerX, centerY, radiusX, radiusY, 360, 270, true, iteration);
      }
    } else {
      context.lineTo(0, height);
    }
    context.lineTo(startX, startY);
    context.closePath();
    context.restore();
  };
  var IsConvexArc = function IsConvexArc(radius) {
    return !radius.hasOwnProperty('convex') ||
    // radius does not have convex property
    radius.convex;
  };
  var IsArcCorner = function IsArcCorner(radius) {
    return radius.x > 0 && radius.y > 0;
  };
  var ArcTo = function ArcTo(context, centerX, centerY, radiusX, radiusY, startAngle, endAngle, antiClockWise, iteration) {
    // startAngle, endAngle: 0 ~ 360
    if (antiClockWise && endAngle > startAngle) {
      endAngle -= 360;
    } else if (!antiClockWise && endAngle < startAngle) {
      endAngle += 360;
    }
    startAngle = DegToRad$1(startAngle);
    endAngle = DegToRad$1(endAngle);
    if (iteration == null) {
      // undefined, or null
      context.ellipse(centerX, centerY, radiusX, radiusY, 0, startAngle, endAngle, antiClockWise);
    } else {
      iteration += 1;
      var x, y, angle;
      var step = (endAngle - startAngle) / iteration;
      for (var i = 0; i <= iteration; i++) {
        angle = startAngle + step * i;
        x = centerX + radiusX * Math.cos(angle);
        y = centerY + radiusY * Math.sin(angle);
        context.lineTo(x, y);
      }
    }
  };

  var DrawRoundRectangle = function DrawRoundRectangle(canvas, context, x, y, width, height, radiusConfig, fillStyle, strokeStyle, lineWidth, fillColor2, isHorizontalGradient, iteration) {
    AddRoundRectanglePath(context, x, y, width, height, radiusConfig, iteration);
    if (fillStyle != null) {
      if (fillColor2 != null) {
        var grd;
        if (isHorizontalGradient) {
          grd = context.createLinearGradient(0, 0, width, 0);
        } else {
          grd = context.createLinearGradient(0, 0, 0, height);
        }
        grd.addColorStop(0, fillStyle);
        grd.addColorStop(1, fillColor2);
        fillStyle = grd;
      }
      context.fillStyle = fillStyle;
      context.fill();
    }
    if (strokeStyle != null && lineWidth > 0) {
      context.strokeStyle = strokeStyle;
      context.lineWidth = lineWidth;
      context.stroke();
    }
  };

  var DrawRoundRectangleBackground = function DrawRoundRectangleBackground(canvasObject, color, strokeColor, strokeLineWidth, radius, color2, isHorizontalGradient, iteration) {
    if (color == null && strokeColor == null) {
      return;
    }
    var width = canvasObject.canvas.width,
      height = canvasObject.canvas.height;
    if (strokeColor == null) {
      strokeLineWidth = 0;
    }
    var x = strokeLineWidth / 2;
    width = Math.max(1, width - strokeLineWidth); // Min width is 1
    height = Math.max(1, height - strokeLineWidth); // Min height is 1
    DrawRoundRectangle(canvasObject.canvas, canvasObject.context, x, x, width, height, radius, color, strokeColor, strokeLineWidth, color2, isHorizontalGradient, iteration);
  };

  var DrawMethods = {
    draw: function draw(startX, startY, textWidth, textHeight) {
      var penManager = this.penManager;
      this.hitAreaManager.clear();
      var context = this.context;
      context.save();
      var defaultStyle = this.defaultStyle;
      this.clear();
      DrawRoundRectangleBackground(this, defaultStyle.backgroundColor, defaultStyle.backgroundStrokeColor, defaultStyle.backgroundStrokeLineWidth, defaultStyle.backgroundCornerRadius, defaultStyle.backgroundColor2, defaultStyle.backgroundHorizontalGradient, defaultStyle.backgroundCornerIteration);

      // draw lines
      startX += this.startXOffset;
      startY += this.startYOffset;
      var defaultHalign = defaultStyle.halign,
        valign = defaultStyle.valign;
      var lineWidth,
        lineHeight = defaultStyle.lineHeight;
      var lines = penManager.lines;
      var totalLinesNum = lines.length,
        maxLines = defaultStyle.maxLines;
      var drawLinesNum, drawLineStartIdx, drawLineEndIdx;
      if (maxLines > 0 && totalLinesNum > maxLines) {
        drawLinesNum = maxLines;
        if (valign === 'center') {
          // center
          drawLineStartIdx = Math.floor((totalLinesNum - drawLinesNum) / 2);
        } else if (valign === 'bottom') {
          // bottom
          drawLineStartIdx = totalLinesNum - drawLinesNum;
        } else {
          drawLineStartIdx = 0;
        }
      } else {
        drawLinesNum = totalLinesNum;
        drawLineStartIdx = 0;
      }
      drawLineEndIdx = drawLineStartIdx + drawLinesNum;
      var offsetX, offsetY;
      var rtl = this.rtl,
        rtlOffset = rtl ? this.parent.width : undefined;
      if (valign === 'center') {
        // center
        offsetY = Math.max((textHeight - drawLinesNum * lineHeight) / 2, 0);
      } else if (valign === 'bottom') {
        // bottom
        offsetY = Math.max(textHeight - drawLinesNum * lineHeight - 2, 0);
      } else {
        offsetY = 0;
      }
      offsetY += startY;
      for (var lineIdx = drawLineStartIdx; lineIdx < drawLineEndIdx; lineIdx++) {
        lineWidth = penManager.getLineWidth(lineIdx);
        if (lineWidth === 0) {
          continue;
        }
        var pens = lines[lineIdx],
          penCount = pens.length;
        var halign = defaultHalign;
        // Seek if there has algin tag
        for (var penIdx = 0; penIdx < penCount; penIdx++) {
          var penAlign = pens[penIdx].prop.align;
          if (penAlign !== undefined) {
            halign = penAlign;
            break;
          }
        }
        if (halign === 'center') {
          // center
          offsetX = (textWidth - lineWidth) / 2;
        } else if (halign === 'right') {
          // right
          offsetX = !rtl ? textWidth - lineWidth : 0;
        } else {
          offsetX = !rtl ? 0 : textWidth - lineWidth;
        }
        offsetX += startX;
        for (var penIdx = 0; penIdx < penCount; penIdx++) {
          this.drawPen(pens[penIdx], offsetX, offsetY, rtlOffset);
        }
      }
      context.restore();
    },
    drawPen: function drawPen(pen, offsetX, offsetY, rtlOffset) {
      offsetX += pen.x;
      offsetY += pen.y + (pen.prop.y || 0);
      if (rtlOffset !== undefined) {
        offsetX = rtlOffset - offsetX;
      }
      var canvas = this.canvas;
      var context = this.context;
      context.save();
      var curStyle = this.parser.propToContextStyle(this.defaultStyle, pen.prop);
      curStyle.buildFont();
      curStyle.syncFont(canvas, context);
      curStyle.syncStyle(canvas, context);

      // Underline
      if (curStyle.underlineThickness > 0 && pen.width > 0) {
        var lineOffsetY = offsetY + curStyle.underlineOffset - curStyle.underlineThickness / 2;
        this.drawLine(offsetX, lineOffsetY, pen.width, curStyle.underlineThickness, curStyle.underlineColor, curStyle);
      }

      // Text
      if (pen.isTextPen) {
        this.drawText(offsetX, offsetY, pen.text, curStyle);
      }

      // Image
      if (pen.isImagePen) {
        this.drawImage(offsetX, offsetY, pen.prop.img, pen.prop.color, curStyle);
      }

      // Strikethrough
      if (curStyle.strikethroughThickness > 0 && pen.width > 0) {
        var lineOffsetY = offsetY + curStyle.strikethroughOffset - curStyle.strikethroughThickness / 2;
        this.drawLine(offsetX, lineOffsetY, pen.width, curStyle.strikethroughThickness, curStyle.strikethroughColor, curStyle);
      }
      context.restore();
      if (pen.hasAreaMarker && pen.width > 0) {
        var data;
        var areaKey = pen.prop.area;
        if (areaKey) {
          data = {
            key: areaKey
          };
        } else {
          var url = pen.prop.url;
          data = {
            key: "url:".concat(url),
            url: url
          };
        }
        this.hitAreaManager.add(offsetX,
        // x
        offsetY - this.startYOffset,
        // y
        pen.width,
        // width
        this.defaultStyle.lineHeight,
        // height
        data);
      }
    },
    clear: function clear() {
      var canvas = this.canvas;
      this.context.clearRect(0, 0, canvas.width, canvas.height);
    },
    drawLine: function drawLine(x, y, width, height, color, style) {
      if (this.autoRound) {
        x = Math.round(x);
        y = Math.round(y);
      }
      var context = this.context;
      style.syncShadow(context, style.shadowStroke);
      var savedLineCap = context.lineCap;
      context.lineCap = 'butt';
      context.strokeStyle = color;
      context.lineWidth = height;
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + width, y);
      context.stroke();
      context.lineCap = savedLineCap;
    },
    drawText: function drawText(x, y, text, style) {
      if (this.autoRound) {
        x = Math.round(x);
        y = Math.round(y);
      }
      var context = this.context;
      if (style.stroke && style.stroke !== 'none' && style.strokeThickness > 0) {
        style.syncShadow(context, style.shadowStroke);
        context.strokeText(text, x, y);
      }
      if (style.color && style.color !== 'none') {
        style.syncShadow(context, style.shadowFill);
        context.fillText(text, x, y);
      }
    },
    drawImage: function drawImage(x, y, imgKey, color, style) {
      y -= this.startYOffset;
      this.parent.imageManager.draw(imgKey, this.context, x, y, color, this.autoRound);
    }
  };

  var GetValue$e = Phaser.Utils.Objects.GetValue;
  var NO_NEWLINE$3 = CONST.NO_NEWLINE;
  var RAW_NEWLINE$1 = CONST.RAW_NEWLINE;
  var Pen = /*#__PURE__*/function () {
    function Pen(config) {
      _classCallCheck(this, Pen);
      this.prop = {};
      this.resetFromJSON(config);
    }
    _createClass(Pen, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        // (txt, x, y, width, prop, newLineMode, startIndex)
        this.text = GetValue$e(o, 'text', '');
        this.x = GetValue$e(o, 'x', 0);
        this.y = GetValue$e(o, 'y', 0);
        this.width = GetValue$e(o, 'width', 0);
        var prop = GetValue$e(o, 'prop', null);
        if (prop === null) {
          prop = {};
        }
        this.prop = prop;
        this.newLineMode = GetValue$e(o, 'newLineMode', 0);
        this.startIndex = GetValue$e(o, 'startIndex', 0);
      }
    }, {
      key: "plainText",
      get: function get() {
        var txt = this.text;
        if (this.newLineMode === RAW_NEWLINE$1) {
          txt += "\n";
        }
        return txt;
      }
    }, {
      key: "wrapText",
      get: function get() {
        var txt = this.text;
        if (this.newLineMode !== NO_NEWLINE$3) {
          txt += "\n";
        }
        return txt;
      }
    }, {
      key: "rawTextLength",
      get: function get() {
        var len = this.text.length;
        if (this.newLineMode === RAW_NEWLINE$1) {
          len += 1;
        }
        return len;
      }
    }, {
      key: "endIndex",
      get: function get() {
        return this.startIndex + this.rawTextLength;
      }
    }, {
      key: "lastX",
      get: function get() {
        return this.x + this.width;
      }
    }, {
      key: "isTextPen",
      get: function get() {
        return this.text !== '';
      }
    }, {
      key: "isImagePen",
      get: function get() {
        return !!this.prop.img;
      }
    }, {
      key: "hasAreaMarker",
      get: function get() {
        return !!this.prop.area || !!this.prop.url;
      }
    }]);
    return Pen;
  }();

  var GetFastValue$1 = Phaser.Utils.Objects.GetFastValue;
  var NO_NEWLINE$2 = CONST.NO_NEWLINE;
  var WRAPPED_NEWLINE$1 = CONST.WRAPPED_NEWLINE;
  var PenManager = /*#__PURE__*/function () {
    function PenManager(config) {
      _classCallCheck(this, PenManager);
      this.pens = []; // all pens
      this.lines = []; // pens in lines [ [],[],[],.. ]
      this.maxLinesWidth = undefined;
      this.pensPool = config.pensPool; // Required
      this.linesPool = config.linesPool; // Required
      this.tagToText = GetFastValue$1(config, 'tagToText', NOOP);
      this.tagToTextScope = GetFastValue$1(config, 'tagToTextScope', undefined);
    }
    _createClass(PenManager, [{
      key: "destroy",
      value: function destroy() {
        this.clear();
        this.tagToText = undefined;
        this.tagToTextScope = undefined;
      }
    }, {
      key: "clear",
      value: function clear() {
        for (var i = 0, len = this.lines.length; i < len; i++) {
          this.lines[i].length = 0;
        }
        this.pensPool.pushMultiple(this.pens);
        this.linesPool.pushMultiple(this.lines);
        this.maxLinesWidth = undefined;
      }
    }, {
      key: "addTextPen",
      value: function addTextPen(text, x, y, width, prop, newLineMode) {
        var pen = this.pensPool.pop();
        if (pen == null) {
          pen = new Pen();
        }
        PEN_CONFIG.text = text;
        PEN_CONFIG.x = x;
        PEN_CONFIG.y = y;
        PEN_CONFIG.width = width;
        PEN_CONFIG.prop = prop;
        PEN_CONFIG.newLineMode = newLineMode;
        pen.resetFromJSON(PEN_CONFIG);
        this.addPen(pen);
        return this;
      }
    }, {
      key: "addImagePen",
      value: function addImagePen(x, y, width, prop) {
        this.addTextPen('', x, y, width, prop, NO_NEWLINE$2);
        return this;
      }
    }, {
      key: "addNewLinePen",
      value: function addNewLinePen() {
        var previousPen = this.lastPen;
        var x = previousPen ? previousPen.lastX : 0;
        var y = previousPen ? previousPen.y : 0;
        var prop = previousPen ? Clone(previousPen.prop) : null;
        this.addTextPen('', x, y, 0, prop, WRAPPED_NEWLINE$1);
        return this;
      }
    }, {
      key: "addPen",
      value: function addPen(pen) {
        var previousPen = this.lastPen;
        if (previousPen == null) {
          pen.startIndex = 0;
        } else {
          pen.startIndex = previousPen.endIndex;
        }
        this.pens.push(pen);

        // maintan lines
        var line = this.lastLine;
        if (line == null) {
          line = this.linesPool.pop() || [];
          this.lines.push(line);
        }
        line.push(pen);

        // new line, add an empty line
        if (pen.newLineMode !== NO_NEWLINE$2) {
          line = this.linesPool.pop() || [];
          this.lines.push(line);
        }
        this.maxLinesWidth = undefined;
      }
    }, {
      key: "clone",
      value: function clone(targetPenManager) {
        if (targetPenManager == null) targetPenManager = new PenManager();
        targetPenManager.clear();
        for (var li = 0, llen = this.lines.length; li < llen; li++) {
          var pens = this.lines[li];
          for (var pi = 0, plen = pens.length; pi < plen; pi++) {
            var pen = pens[pi];
            targetPenManager.addPen(pen.text, pen.x, pen.y, pen.width, Clone(pen.prop), pen.newLineMode);
          }
        }
        return targetPenManager;
      }
    }, {
      key: "lastPen",
      get: function get() {
        return this.pens[this.pens.length - 1];
      }
    }, {
      key: "lastLine",
      get: function get() {
        return this.lines[this.lines.length - 1];
      }
    }, {
      key: "getLineStartIndex",
      value: function getLineStartIndex(i) {
        if (i >= this.lines.length) {
          return this.getLineEndIndex(i);
        } else {
          var line = this.lines[i];
          return line && line[0] ? line[0].startIndex : 0;
        }
      }
    }, {
      key: "getLineEndIndex",
      value: function getLineEndIndex(i) {
        if (i >= this.lines.length) {
          i = this.lines.length - 1;
        }
        var li,
          hasLastPen = false,
          line;
        for (li = i; li >= 0; li--) {
          line = this.lines[li];
          hasLastPen = line != null && line.length > 0;
          if (hasLastPen) {
            break;
          }
        }
        if (!hasLastPen) {
          return 0;
        }
        var lastPen = line[line.length - 1];
        return lastPen.endIndex;
      }
    }, {
      key: "getLineWidth",
      value: function getLineWidth(i) {
        var line = this.lines[i];
        if (!line) {
          return 0;
        }
        var lastPen = line[line.length - 1];
        if (lastPen == null) {
          return 0;
        }
        var lineWidth = lastPen.lastX; // start from 0
        return lineWidth;
      }
    }, {
      key: "getMaxLineWidth",
      value: function getMaxLineWidth() {
        if (this.maxLinesWidth !== undefined) {
          return this.maxLinesWidth;
        }
        var w,
          maxW = 0;
        for (var i = 0, len = this.lines.length; i < len; i++) {
          w = this.getLineWidth(i);
          if (w > maxW) {
            maxW = w;
          }
        }
        this.maxLinesWidth = maxW;
        return maxW;
      }
    }, {
      key: "getLineWidths",
      value: function getLineWidths() {
        var result = [];
        for (var i = 0, len = this.lines.length; i < len; i++) {
          result.push(this.getLineWidth(i));
        }
        return result;
      }
    }, {
      key: "linesCount",
      get: function get() {
        return this.lines.length;
      }
    }, {
      key: "plainText",
      get: function get() {
        var txt = "",
          pens = this.pens;
        for (var i = 0, len = pens.length; i < len; i++) {
          txt += pens[i].plainText;
        }
        return txt;
      }
    }, {
      key: "rawTextLength",
      get: function get() {
        var l = 0,
          pens = this.pens;
        for (var i = 0, len = this.pens.length; i < len; i++) {
          l += pens[i].rawTextLength;
        }
        return l;
      }
    }, {
      key: "getSliceTagText",
      value: function getSliceTagText(start, end, wrap) {
        var lastPen = this.lastPen;
        if (lastPen == null) {
          return '';
        }
        var lastPenEnd = lastPen.endIndex;
        if (start === undefined || start === 0) {
          // Image pen before first character
          start = -1;
        }
        if (end === undefined || end === lastPenEnd) {
          // Image pen after last character
          end = lastPenEnd + 1;
        }
        if (wrap === undefined) {
          wrap = false;
        }
        var txt = "",
          pen,
          penTxt,
          penStartIdx,
          penEndIdx,
          isInRange;
        var currentProp, previousProp;
        for (var i = 0, len = this.pens.length; i < len; i++) {
          pen = this.pens[i];
          penEndIdx = pen.endIndex;
          if (penEndIdx <= start) {
            continue;
          }
          pen = this.pens[i];
          penTxt = !wrap ? pen.plainText : pen.wrapText;
          currentProp = pen.prop;
          penStartIdx = pen.startIndex;
          isInRange = penStartIdx >= start && penEndIdx <= end;
          if (!isInRange) {
            penTxt = penTxt.substring(start - penStartIdx, end - penStartIdx);
          }
          if (this.tagToTextScope) {
            txt += this.tagToText.call(this.tagToTextScope, penTxt, currentProp, previousProp);
          } else {
            txt += this.tagToText(penTxt, currentProp, previousProp);
          }
          previousProp = currentProp;
          if (penEndIdx >= end) {
            break;
          }
        }
        return txt;
      }
    }, {
      key: "length",
      get: function get() {
        return this.lines.length;
      },
      set: function set(value) {
        // Only for set length to 0 (clear)
        this.clear();
      }
    }]);
    return PenManager;
  }();
  var PEN_CONFIG = {};

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

  var Rectangle$1 = Phaser.Geom.Rectangle;
  var RectanglePool = new Stack();
  var HitAreaManager = /*#__PURE__*/function () {
    function HitAreaManager() {
      _classCallCheck(this, HitAreaManager);
      this.hitAreas = [];
    }
    _createClass(HitAreaManager, [{
      key: "destroy",
      value: function destroy() {
        this.clear();
      }
    }, {
      key: "clear",
      value: function clear() {
        // Reuse hitArea(rectangle) later
        for (var i = 0, cnt = this.hitAreas.length; i < cnt; i++) {
          Clear(this.hitAreas[i].data);
        }
        RectanglePool.pushMultiple(this.hitAreas);
        return this;
      }
    }, {
      key: "add",
      value: function add(x, y, width, height, data) {
        var rectangle = RectanglePool.pop();
        if (rectangle === null) {
          rectangle = new Rectangle$1(x, y, width, height);
        } else {
          rectangle.setTo(x, y, width, height);
        }
        rectangle.data = data;
        this.hitAreas.push(rectangle);
        return this;
      }
    }, {
      key: "getFirst",
      value: function getFirst(x, y) {
        for (var i = 0, cnt = this.hitAreas.length; i < cnt; i++) {
          var hitArea = this.hitAreas[i];
          if (hitArea.contains(x, y)) {
            return hitArea;
          }
        }
        return null;
      }
    }, {
      key: "getByKey",
      value: function getByKey(key) {
        for (var i = 0, cnt = this.hitAreas.length; i < cnt; i++) {
          var hitArea = this.hitAreas[i];
          if (hitArea.data.key === key) {
            return hitArea;
          }
        }
        return null;
      }
    }, {
      key: "drawBounds",
      value: function drawBounds(graphics, color, parent) {
        if (color === undefined) {
          color = 0xffffff;
        }
        if (parent) {
          graphics.save().scaleCanvas(parent.scaleX, parent.scaleY).rotateCanvas(parent.rotation).translateCanvas(parent.x, parent.y);
        }
        for (var i = 0, cnt = this.hitAreas.length; i < cnt; i++) {
          var hitArea = this.hitAreas[i];
          graphics.lineStyle(1, color).strokeRect(hitArea.x, hitArea.y, hitArea.width, hitArea.height);
        }
        if (parent) {
          graphics.restore();
        }
        return this;
      }
    }]);
    return HitAreaManager;
  }();

  var SetInteractive$1 = function SetInteractive() {
    this.parent.on('pointerdown', OnAreaDown, this).on('pointerup', OnAreaUp, this).on('pointermove', OnAreaOverOut, this).on('pointerover', OnAreaOverOut, this).on('pointerout', function (pointer, event) {
      OnAreaOverOut.call(this, pointer, null, null, event);
    }, this);
  };
  var OnAreaDown = function OnAreaDown(pointer, localX, localY, event) {
    var area = this.hitAreaManager.getFirst(localX, localY);
    if (area === null) {
      return;
    }
    var key = area.data.key;
    FireEvent.call(this, 'areadown', key, pointer, localX, localY, event);
    area.data.isDown = true;
  };
  var OnAreaUp = function OnAreaUp(pointer, localX, localY, event) {
    var area = this.hitAreaManager.getFirst(localX, localY);
    if (area === null) {
      return;
    }
    var areaData = area.data;
    var key = areaData.key;
    FireEvent.call(this, 'areaup', key, pointer, localX, localY, event);
    if (areaData.isDown) {
      FireEvent.call(this, 'areaclick', key, pointer, localX, localY, event);
      var url = areaData.url;
      if (url) {
        window.open(url, '_blank');
      }
    }
    areaData.isDown = false;
  };
  var OnAreaOverOut = function OnAreaOverOut(pointer, localX, localY, event) {
    if (localX === null) {
      // Case of pointerout
      if (this.lastHitAreaKey !== null) {
        FireEvent.call(this, 'areaout', this.lastHitAreaKey, pointer, localX, localY, event);
        this.hitAreaManager.getByKey(this.lastHitAreaKey).isDown = false;
        this.lastHitAreaKey = null;
      }
      return;
    }
    var area = this.hitAreaManager.getFirst(localX, localY);
    var key = area ? area.data.key : null;
    if (this.lastHitAreaKey === key) {
      return;
    }
    if (this.lastHitAreaKey !== null) {
      FireEvent.call(this, 'areaout', this.lastHitAreaKey, pointer, localX, localY, event);
      var prevHitArea = this.hitAreaManager.getByKey(this.lastHitAreaKey);
      if (this.urlTagCursorStyle && !!prevHitArea.data.url) {
        this.scene.input.manager.canvas.style.cursor = '';
      }
      prevHitArea.isDown = false;
    }
    if (key !== null) {
      FireEvent.call(this, 'areaover', key, pointer, localX, localY, event);
      if (this.urlTagCursorStyle && !!area.data.url) {
        this.scene.input.manager.canvas.style.cursor = this.urlTagCursorStyle;
      }
    }
    this.lastHitAreaKey = key;
  };
  var FireEvent = function FireEvent(eventName, key, pointer, localX, localY, event) {
    this.parent.emit("".concat(eventName, "-").concat(key), pointer, localX, localY, event);
    this.parent.emit(eventName, key, pointer, localX, localY, event);
  };

  var NO_NEWLINE$1 = CONST.NO_NEWLINE;
  var RAW_NEWLINE = CONST.RAW_NEWLINE;
  var WRAPPED_NEWLINE = CONST.WRAPPED_NEWLINE;
  var NO_WRAP$1 = CONST.NO_WRAP;
  var WORD_WRAP = CONST.WORD_WRAP;
  var CHAR_WRAP = CONST.CHAR_WRAP;
  var splitRegExp = CONST.SPLITREGEXP;
  var WrapText = function WrapText(text, getTextWidth, wrapMode, wrapWidth, offset, wrapTextLinesPool) {
    if (wrapWidth <= 0) {
      wrapMode = NO_WRAP$1;
    }
    var retLines = [];
    if (!text || !text.length) {
      return retLines;
    }
    var isNoWrap = wrapMode === NO_WRAP$1;
    var isWordWrap = wrapMode === WORD_WRAP;
    var lines = text.split(splitRegExp),
      line,
      remainWidth,
      newLineMode;
    for (var i = 0, linesLen = lines.length; i < linesLen; i++) {
      line = lines[i];
      newLineMode = i === linesLen - 1 ? NO_NEWLINE$1 : RAW_NEWLINE;
      if (isNoWrap) {
        var textWidth = getTextWidth(line);
        retLines.push(wrapTextLinesPool.getLine(line, textWidth, newLineMode));
        continue;
      }
      remainWidth = i === 0 ? wrapWidth - offset : wrapWidth;

      // short string testing
      if (line.length <= 100) {
        var textWidth = getTextWidth(line);
        if (textWidth <= remainWidth) {
          retLines.push(wrapTextLinesPool.getLine(line, textWidth, newLineMode));
          continue;
        }
      }
      var tokenArray, isSpaceCharacterEnd;
      if (isWordWrap) {
        // word mode
        tokenArray = line.split(' ');
        isSpaceCharacterEnd = tokenArray[tokenArray.length - 1] === '';
        if (isSpaceCharacterEnd) {
          tokenArray.length -= 1;
        }
      } else {
        tokenArray = line;
      }
      var token, tokenWidth, isLastToken;
      var lineText = '',
        lineWidth = 0;
      var currLineWidth;
      var whiteSpaceWidth = isWordWrap ? getTextWidth(' ') : undefined;
      for (var j = 0, tokenLen = tokenArray.length; j < tokenLen; j++) {
        token = tokenArray[j];
        tokenWidth = getTextWidth(token);
        isLastToken = j === tokenLen - 1;
        if (isWordWrap && (!isLastToken || isSpaceCharacterEnd)) {
          token += ' ';
          tokenWidth += whiteSpaceWidth;
        }

        // Text width of single token is larger than a line width
        if (isWordWrap && tokenWidth > wrapWidth) {
          if (lineText !== '') {
            // Has pending lineText, flush it out
            retLines.push(wrapTextLinesPool.getLine(lineText, lineWidth, WRAPPED_NEWLINE));
          } else if (j === 0 && offset > 0) {
            // No pending lineText, but has previous text. Append a newline
            retLines.push(wrapTextLinesPool.getLine('', 0, WRAPPED_NEWLINE));
          }

          // Word break
          retLines.push.apply(retLines, _toConsumableArray(WrapText(token, getTextWidth, CHAR_WRAP, wrapWidth, 0, wrapTextLinesPool)));
          // Continue at last-wordBreak-line
          var lastwordBreakLine = retLines.pop();
          lineText = lastwordBreakLine.text;
          lineWidth = lastwordBreakLine.width;
          // Free this line
          wrapTextLinesPool.freeLine(lastwordBreakLine);

          // Special case : Start at a space character, discard it
          if (lineText === ' ') {
            lineText = '';
            lineWidth = 0;
          }
          continue;
        }
        currLineWidth = lineWidth + tokenWidth;
        if (currLineWidth > remainWidth) {
          // New line
          retLines.push(wrapTextLinesPool.getLine(lineText, lineWidth, WRAPPED_NEWLINE));
          lineText = token;
          lineWidth = tokenWidth;
          remainWidth = wrapWidth;
        } else {
          // Append token, continue
          lineText += token;
          lineWidth = currLineWidth;
        }
        if (isLastToken) {
          // Flush remain text
          retLines.push(wrapTextLinesPool.getLine(lineText, lineWidth, newLineMode));
        }
      } // for token in tokenArray
    } // for each line in lines

    return retLines;
  };

  var GetValue$d = Phaser.Utils.Objects.GetValue;
  var NO_WRAP = CONST.NO_WRAP;
  var NO_NEWLINE = CONST.NO_NEWLINE;
  var CanvasText = /*#__PURE__*/function () {
    function CanvasText(config) {
      _classCallCheck(this, CanvasText);
      this.parent = config.parent;
      this.scene = this.parent.scene;
      this.context = GetValue$d(config, 'context', null);
      this.canvas = this.context.canvas;
      this.parser = GetValue$d(config, 'parser', null);
      this.defaultStyle = GetValue$d(config, 'style', null);
      this.autoRound = true;
      this.pensPool = config.pensPool; // Required
      this.linesPool = config.linesPool; // Required
      this.wrapTextLinesPool = config.wrapTextLinesPool; // Required

      this.penManager = this.newPenManager();
      this._tmpPenManager = null;
      this.hitAreaManager = new HitAreaManager();
      this.lastHitAreaKey = null;
      this.urlTagCursorStyle = null;
      var context = this.context;
      this.getTextWidth = function (text) {
        return context.measureText(text).width;
      };
    }
    _createClass(CanvasText, [{
      key: "destroy",
      value: function destroy() {
        this.parent = undefined;
        this.scene = undefined;
        this.context = undefined;
        this.canvas = undefined;
        this.parser = undefined;
        this.defaultStyle = undefined;
        if (this.penManager) {
          this.penManager.destroy();
          this.penManager = undefined;
        }
        if (this._tmpPenManager) {
          this._tmpPenManager.destroy();
          this._tmpPenManager = undefined;
        }
        if (this.hitAreaManager) {
          this.hitAreaManager.destroy();
          this.hitAreaManager = undefined;
        }
        this.pensPool = undefined;
        this.linesPool = undefined;
        this.wrapTextLinesPool = undefined;
      }
    }, {
      key: "updatePenManager",
      value: function updatePenManager(text, wrapMode, wrapWidth, lineHeight, penManager) {
        if (penManager === undefined) {
          penManager = this.penManager;
        }
        penManager.clear();
        if (text === "") {
          return penManager;
        }
        var textStyle = this.parent.style;
        if (textStyle.isWrapFitMode) {
          var padding = this.parent.padding;
          wrapWidth = textStyle.fixedWidth - padding.left - padding.right;
        }
        var canvas = this.canvas;
        var context = this.context;
        var MeasureText = function MeasureText(text) {
          return context.measureText(text).width;
        };
        var cursorX = 0,
          cursorY = 0;
        var customTextWrapCallback = textStyle.wrapCallback,
          customTextWrapCallbackScope = textStyle.wrapCallbackScope;
        var reuseLines = true;
        var plainText, curProp, curStyle;
        var match = this.parser.splitText(text),
          result,
          wrapLines,
          wrapTextLinesPool = this.wrapTextLinesPool;
        for (var i = 0, len = match.length; i < len; i++) {
          result = this.parser.tagTextToProp(match[i], curProp);
          plainText = result.plainText;
          curProp = result.prop;
          if (curProp.img) {
            // Image tag                
            var imgWidth = this.imageManager.getOuterWidth(curProp.img);
            if (wrapWidth > 0 && wrapMode !== NO_WRAP) {
              // Wrap mode
              if (wrapWidth < cursorX + imgWidth) {
                penManager.addNewLinePen();
                cursorY += lineHeight;
                cursorX = 0;
              }
            }
            penManager.addImagePen(cursorX, cursorY, imgWidth, Clone(curProp));
            cursorX += imgWidth;
          } else if (plainText !== '') {
            // wrap text to lines
            // Save the current context.
            context.save();
            curStyle = this.parser.propToContextStyle(this.defaultStyle, curProp);
            curStyle.buildFont();
            curStyle.syncFont(canvas, context);
            curStyle.syncStyle(canvas, context);
            if (!customTextWrapCallback) {
              wrapLines = WrapText(plainText, MeasureText, wrapMode, wrapWidth, cursorX, wrapTextLinesPool);
            } else {
              // customTextWrapCallback
              wrapLines = customTextWrapCallback.call(customTextWrapCallbackScope, plainText, MeasureText, wrapWidth, cursorX);
              if (typeof wrapLines === 'string') {
                wrapLines = wrapLines.split('\n');
              }
              var n;
              for (var j = 0, jLen = wrapLines.length; j < jLen; j++) {
                n = wrapLines[j];
                if (typeof n === 'string') {
                  wrapLines[j] = wrapTextLinesPool.getLine(n, MeasureText(n), j < jLen - 1 ? 2 : 0);
                } else {
                  reuseLines = false;
                }
              }
            } // customTextWrapCallback

            // add pens
            var n;
            for (var j = 0, jLen = wrapLines.length; j < jLen; j++) {
              n = wrapLines[j];
              penManager.addTextPen(n.text, cursorX, cursorY, n.width, Clone(curProp), n.newLineMode);
              if (n.newLineMode !== NO_NEWLINE) {
                cursorX = 0;
                cursorY += lineHeight;
              } else {
                cursorX += n.width;
              }
            }
            if (reuseLines) {
              wrapTextLinesPool.freeLines(wrapLines);
            }
            wrapLines = null;
            context.restore();
          }
        }

        // Add strokeThinkness to last pen of each line
        for (var i = 0, len = this.lines.length; i < len; i++) {
          var line = this.lines[i];
          var lastPen = line[line.length - 1];
          if (lastPen) {
            lastPen.width += this.parser.getStrokeThinkness(this.defaultStyle, lastPen.prop);
          }
        }
        return penManager;
      }
    }, {
      key: "startXOffset",
      get: function get() {
        var defaultStyle = this.defaultStyle;
        return defaultStyle.strokeThickness / 2 + defaultStyle.xOffset;
      }
    }, {
      key: "startYOffset",
      get: function get() {
        var defaultStyle = this.defaultStyle;
        return defaultStyle.strokeThickness / 2 + defaultStyle.metrics.ascent;
      }
    }, {
      key: "lines",
      get: function get() {
        return this.penManager.lines;
      }
    }, {
      key: "desplayLinesCount",
      get: function get() {
        var linesCount = this.penManager.linesCount,
          maxLines = this.defaultStyle.maxLines;
        if (maxLines > 0 && linesCount > maxLines) {
          linesCount = maxLines;
        }
        return linesCount;
      }
    }, {
      key: "linesWidth",
      get: function get() {
        return Math.ceil(this.penManager.getMaxLineWidth());
      }
    }, {
      key: "linesHeight",
      get: function get() {
        var linesCount = this.desplayLinesCount;
        var linesHeight = this.defaultStyle.lineHeight * linesCount;
        if (linesCount > 0) {
          linesHeight -= this.defaultStyle.lineSpacing;
        }
        return linesHeight;
      }
    }, {
      key: "imageManager",
      get: function get() {
        return this.parent.imageManager;
      }
    }, {
      key: "rtl",
      get: function get() {
        return this.parent.style.rtl;
      }
    }, {
      key: "newPenManager",
      value: function newPenManager() {
        return new PenManager({
          pensPool: this.pensPool,
          linesPool: this.linesPool,
          tagToText: this.parser.propToTagText,
          tagToTextScope: this.parser
        });
      }
    }, {
      key: "tmpPenManager",
      get: function get() {
        if (this._tmpPenManager === null) {
          this._tmpPenManager = this.newPenManager();
        }
        return this._tmpPenManager;
      }
    }, {
      key: "getPlainText",
      value: function getPlainText(text, start, end) {
        var plainText;
        if (text == null) {
          plainText = this.penManager.plainText;
        } else {
          var match = this.parser.splitText(text, 1); // PLAINTEXTONLY_MODE
          plainText = "";
          for (var i = 0, len = match.length; i < len; i++) {
            plainText += match[i];
          }
        }
        if (start != null || end != null) {
          if (start == null) {
            start = 0;
          }
          if (end == null) {
            end = plainText.length;
          }
          plainText = plainText.substring(start, end);
        }
        return plainText;
      }
    }, {
      key: "getPenManager",
      value: function getPenManager(text, retPenManager) {
        if (text === undefined) {
          return this.copyPenManager(retPenManager, this.penManager);
        }
        if (retPenManager === undefined) {
          retPenManager = this.newPenManager();
        }
        var defaultStyle = this.defaultStyle;
        this.updatePenManager(text, defaultStyle.wrapMode, defaultStyle.wrapWidth, defaultStyle.lineHeight, retPenManager);
        return retPenManager;
      }
    }, {
      key: "getText",
      value: function getText(text, start, end, wrap) {
        if (text == null) {
          return this.penManager.getSliceTagText(start, end, wrap);
        }
        var penManager = this.tmpPenManager;
        var defaultStyle = this.defaultStyle;
        this.updatePenManager(text, defaultStyle.wrapMode, defaultStyle.wrapWidth, defaultStyle.lineHeight, penManager);
        return penManager.getSliceTagText(start, end, wrap);
      }
    }, {
      key: "copyPenManager",
      value: function copyPenManager(ret, src) {
        if (src === undefined) {
          src = this.penManager;
        }
        return src.copy(ret);
      }
    }, {
      key: "getTextWidth",
      value: function getTextWidth(penManager) {
        if (penManager === undefined) {
          penManager = this.penManager;
        }
        return penManager.getMaxLineWidth();
      }
    }, {
      key: "getLastPen",
      value: function getLastPen(penManager) {
        if (penManager === undefined) {
          penManager = this.penManager;
        }
        return penManager.lastPen;
      }
    }]);
    return CanvasText;
  }();
  var methods$3 = {
    setInteractive: SetInteractive$1
  };
  Object.assign(CanvasText.prototype, DrawMethods, methods$3);

  var WrapTextLinesPool = /*#__PURE__*/function (_Pool) {
    _inherits(WrapTextLinesPool, _Pool);
    var _super = _createSuper(WrapTextLinesPool);
    function WrapTextLinesPool() {
      _classCallCheck(this, WrapTextLinesPool);
      return _super.apply(this, arguments);
    }
    _createClass(WrapTextLinesPool, [{
      key: "freeLine",
      value: function freeLine(line) {
        if (!line) {
          return;
        }
        this.push(line);
        return this;
      }
    }, {
      key: "freeLines",
      value: function freeLines(lines) {
        if (!lines) {
          return;
        }
        this.pushMultiple(lines);
        return this;
      }
    }, {
      key: "getLine",
      value: function getLine(text, width, newLineMode) {
        var l = this.pop();
        if (l === null) {
          l = {};
        }
        l.text = text;
        l.width = width;
        l.newLineMode = newLineMode;
        return l;
      }
    }]);
    return WrapTextLinesPool;
  }(Stack);

  var IsPlainObject$2 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$c = Phaser.Utils.Objects.GetValue;
  var AddImage = function AddImage(key, config) {
    if (IsPlainObject$2(key)) {
      config = key;
      key = config.key;
    } else if (config === undefined) {
      config = {
        key: key
      };
    }
    if (!config.hasOwnProperty('key')) {
      config.key = key;
    }
    var textureKey = config.key,
      frameKey = config.frame;
    var width = config.width,
      height = config.height;
    if (width === undefined || height === undefined) {
      var frame = this.textureManager.getFrame(textureKey, frameKey);
      var frameWidth = frame ? frame.cutWidth : 0;
      var frameHeight = frame ? frame.cutHeight : 0;
      if (width === undefined && height === undefined) {
        width = frameWidth;
        height = frameHeight;
      } else if (width === undefined) {
        width = frameWidth * (height / frameHeight);
      } else if (height === undefined) {
        height = frameHeight * (width / frameWidth);
      }
    }
    this.images[key] = {
      key: textureKey,
      frame: frameKey,
      width: width,
      height: height,
      y: GetValue$c(config, 'y', 0),
      left: GetValue$c(config, 'left', 0),
      right: GetValue$c(config, 'right', 0),
      originX: GetValue$c(config, 'originX', 0),
      originY: GetValue$c(config, 'originY', 0),
      tintFill: GetValue$c(config, 'tintFill', false)
    };
  };

  var CanvasPool$2 = Phaser.Display.Canvas.CanvasPool;
  var DrawFrameToCanvas = function DrawFrameToCanvas(frame, canvas, x, y, width, height, color, autoRound) {
    if (x === undefined) {
      x = 0;
    }
    if (y === undefined) {
      y = 0;
    }
    if (width === undefined) {
      width = frame.cutWidth;
    }
    if (height === undefined) {
      height = frame.cutHeight;
    }
    if (autoRound === undefined) {
      autoRound = false;
    }
    if (autoRound) {
      x = Math.round(x);
      y = Math.round(y);
    }
    var context = canvas.getContext('2d', {
      willReadFrequently: true
    });
    if (color) {
      // Draw image at tempCanvas

      // Get tempCanvas
      var tempCanvas = CanvasPool$2.create(null, width, height, Phaser.CANVAS, true);
      var tempContext = tempCanvas.getContext('2d', {
        willReadFrequently: true
      });
      tempContext.drawImage(frame.source.image, frame.cutX, frame.cutY, frame.cutWidth, frame.cutHeight, 0, 0, width, height);

      // Tint-fill
      tempContext.globalCompositeOperation = 'source-in';
      tempContext.fillStyle = color;
      tempContext.fillRect(0, 0, width, height);

      // Draw tempCanvas at context
      context.drawImage(tempCanvas, 0, 0, width, height, x, y, width, height);

      // Release tempCanvas
      CanvasPool$2.remove(tempCanvas);
    } else {
      context.drawImage(frame.source.image, frame.cutX, frame.cutY, frame.cutWidth, frame.cutHeight, x, y, width, height);
    }
  };

  var DrawImage = function DrawImage(key, context, x, y, color, autoRound) {
    var imgData = this.get(key);
    var frame = this.textureManager.getFrame(imgData.key, imgData.frame);
    var width = imgData.width,
      height = imgData.height;
    x += imgData.left - imgData.originX * width;
    y += imgData.y - imgData.originY * height;
    if (!imgData.tintFill) {
      color = undefined;
    }
    DrawFrameToCanvas(frame, context.canvas, x, y, width, height, color, autoRound);
  };

  var ImageManager = /*#__PURE__*/function () {
    function ImageManager(scene) {
      _classCallCheck(this, ImageManager);
      this.textureManager = scene.sys.textures;
      this.images = {};
    }
    _createClass(ImageManager, [{
      key: "destroy",
      value: function destroy() {
        this.textureManager = undefined;
        this.images = undefined;
      }
    }, {
      key: "add",
      value: function add(key, config) {
        if (typeof key === 'string') {
          AddImage.call(this, key, config);
        } else if (Array.isArray(key)) {
          var data = key;
          for (var i = 0, cnt = data.length; i < cnt; i++) {
            AddImage.call(this, data[i]);
          }
        } else {
          var data = key;
          for (var key in data) {
            AddImage.call(this, key, data[key]);
          }
        }
        return this;
      }
    }, {
      key: "has",
      value: function has(key) {
        return this.images.hasOwnProperty(key);
      }
    }, {
      key: "remove",
      value: function remove(key) {
        if (this.has(key)) {
          delete this.images[key];
        }
        return this;
      }
    }, {
      key: "get",
      value: function get(key) {
        if (!this.has(key)) {
          if (this.textureManager.exists(key)) {
            this.add(key);
          }
        }
        return this.images[key];
      }
    }, {
      key: "getOuterWidth",
      value: function getOuterWidth(key) {
        var data = this.get(key);
        return data ? data.width + data.left + data.right : 0;
      }
    }, {
      key: "getFrame",
      value: function getFrame(key) {
        var data = this.get(key);
        return data ? this.textureManager.getFrame(data.key, data.frame) : undefined;
      }
    }, {
      key: "hasTexture",
      value: function hasTexture(key) {
        return !!this.getFrame(key);
      }
    }]);
    return ImageManager;
  }();
  var methods$2 = {
    draw: DrawImage
  };
  Object.assign(ImageManager.prototype, methods$2);

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

  var IsPlainObject$1 = Phaser.Utils.Objects.IsPlainObject;
  var AddToDOM = Phaser.DOM.AddToDOM;
  var CanvasPool$1 = Phaser.Display.Canvas.CanvasPool;
  var GameObject$2 = Phaser.GameObjects.GameObject;
  var GetValue$b = Phaser.Utils.Objects.GetValue;
  var RemoveFromDOM = Phaser.DOM.RemoveFromDOM;
  var SPLITREGEXP = CONST.SPLITREGEXP;

  // Reuse objects can increase performance
  var SharedPensPools = null;
  var SharedLinesPool = null;
  var SharedWrapTextLinesPool = null;
  var Text = /*#__PURE__*/function (_TextBase) {
    _inherits(Text, _TextBase);
    var _super = _createSuper(Text);
    function Text(scene, x, y, text, style, type, parser) {
      var _this;
      _classCallCheck(this, Text);
      if (IsPlainObject$1(x)) {
        var config = x;
        x = GetValue$b(config, 'x', 0);
        y = GetValue$b(config, 'y', 0);
        text = GetValue$b(config, 'text', '');
        style = GetValue$b(config, 'style');
      }
      if (x === undefined) {
        x = 0;
      }
      if (y === undefined) {
        y = 0;
      }
      _this = _super.call(this, scene, type);
      _this.renderer = scene.sys.game.renderer;
      _this.setPosition(x, y);
      _this.setOrigin(0, 0);
      _this.initPipeline();
      _this.initPostPipeline(true);
      _this.canvas = CanvasPool$1.create(_assertThisInitialized(_this));
      _this.context = _this.canvas.getContext('2d', {
        willReadFrequently: true
      });
      _this._imageManager = undefined;
      if (style) {
        // Override align
        if (style.hasOwnProperty('align')) {
          var halign = style.align;
          delete style.align;
          style.halign = halign;
        }
        // Has Stroke color but stroke thinkness, set stroke thinkness to 1
        if (style.hasOwnProperty('stroke') && !style.hasOwnProperty('strokeThickness')) {
          style.strokeThickness = 1;
        }
      }
      _this.style = new TextStyle$1(_assertThisInitialized(_this), style);
      var imageData = GetValue$b(style, 'images', undefined);
      if (imageData) {
        _this.addImage(imageData);
      }
      _this.autoRound = true;
      _this._text = undefined;
      _this.padding = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      _this.width = 1;
      _this.height = 1;
      _this.lineSpacing = 0;
      _this.dirty = false;

      //  If resolution wasn't set, force it to 1
      if (_this.style.resolution === 0) {
        _this.style.resolution = 1;
      }
      _this._crop = _this.resetCropObject();

      //  Create a Texture for this Text object
      _this.texture = scene.sys.textures.addCanvas(null, _this.canvas, true);

      //  Get the frame
      _this.frame = _this.texture.get();

      //  Set the resolution
      _this.frame.source.resolution = _this.style.resolution;
      if (_this.renderer && _this.renderer.gl) {
        //  Clear the default 1x1 glTexture, as we override it later
        _this.renderer.deleteTexture(_this.frame.source.glTexture);
        _this.frame.source.glTexture = null;
      }
      var sharedPoolMode = GetValue$b(style, 'sharedPool', true);
      var pensPool, linesPool, wrapTextLinesPool;
      if (sharedPoolMode) {
        // Use pools first time
        if (!SharedPensPools) {
          SharedPensPools = {};
          SharedLinesPool = new Stack();
          SharedWrapTextLinesPool = new WrapTextLinesPool();

          // Remove cached data
          _this.scene.game.events.once('destroy', function () {
            SharedPensPools = null;
            SharedLinesPool = null;
            SharedWrapTextLinesPool = null;
          });
        }
        if (!SharedPensPools.hasOwnProperty(type)) {
          SharedPensPools[type] = new Stack();
        }
        pensPool = SharedPensPools[type];
        linesPool = SharedLinesPool;
        wrapTextLinesPool = SharedWrapTextLinesPool;
      } else {
        pensPool = new Stack();
        linesPool = new Stack();
        wrapTextLinesPool = new WrapTextLinesPool();
      }
      _this.canvasText = new CanvasText({
        parent: _assertThisInitialized(_this),
        context: _this.context,
        parser: parser,
        style: _this.style,
        pensPool: pensPool,
        linesPool: linesPool,
        wrapTextLinesPool: wrapTextLinesPool
      });
      _this.parser = parser;
      _this.initRTL();
      if (style && style.padding) {
        _this.setPadding(style.padding);
      }
      if (style && style.lineSpacing) {
        _this.setLineSpacing(style.lineSpacing);
      }
      _this.setText(text);
      _this.setUrlTagCursorStyle(GetValue$b(style, 'urlTagCursorStyle', 'pointer'));
      if (GetValue$b(style, 'interactive', false)) {
        _this.setInteractive();
      }
      return _this;
    }
    _createClass(Text, [{
      key: "preDestroy",
      value: function preDestroy() {
        RemoveFromDOM(this.canvas);
        // Do nothing if canvas did not add to parent node before

        this.canvasText.destroy();
        this.canvasText = undefined;
        if (this._imageManager) {
          this._imageManager.destroy();
          this._imageManager = undefined;
        }
        CanvasPool$1.remove(this.canvas);
        this.texture.destroy();
      }
    }, {
      key: "text",
      get: function get() {
        return this._text;
      },
      set: function set(value) {
        this.setText(value);
      }
    }, {
      key: "initRTL",
      value: function initRTL() {
        if (!this.style.rtl) {
          return;
        }

        //  Here is where the crazy starts.
        //
        //  Due to browser implementation issues, you cannot fillText BiDi text to a canvas
        //  that is not part of the DOM. It just completely ignores the direction property.

        this.canvas.dir = 'rtl';

        //  Experimental atm, but one day ...
        this.context.direction = 'rtl';

        //  Add it to the DOM, but hidden within the parent canvas.
        this.canvas.style.display = 'none';
        AddToDOM(this.canvas, this.scene.sys.canvas);

        //  And finally we set the x origin
        this.originX = 1;
      }
    }, {
      key: "setRTL",
      value: function setRTL(rtl) {
        if (rtl === undefined) {
          rtl = true;
        }
        var style = this.style;
        if (style.rtl === rtl) {
          return this;
        }
        style.rtl = rtl;
        if (rtl) {
          this.canvas.dir = 'rtl';
          this.context.direction = 'rtl';
          this.canvas.style.display = 'none';
          AddToDOM(this.canvas, this.scene.sys.canvas);
        } else {
          this.canvas.dir = 'ltr';
          this.context.direction = 'ltr';
        }
        if (style.halign === 'left') {
          style.halign = 'right';
        } else if (style.halign === 'right') {
          style.halign = 'left';
        }
        if (this._imageManager) {
          var images = this._imageManager.images;
          for (var key in images) {
            images[key].originX = 1 - images[key].originX;
          }
        }
        return this;
      }
    }, {
      key: "setText",
      value: function setText(value) {
        if (value == null) {
          value = '';
        } else if (Array.isArray(value)) {
          value = value.join('\n');
        } else {
          value = value.toString();
        }
        if (value === this._text) {
          return this;
        }
        this._text = value;
        this.updateText();
        return this;
      }
    }, {
      key: "setPadding",
      value: function setPadding(left, top, right, bottom) {
        if (_typeof(left) === 'object') {
          var config = left;

          //  If they specify x and/or y this applies to all
          var x = GetValue$b(config, 'x', null);
          if (x !== null) {
            left = x;
            right = x;
          } else {
            left = GetValue$b(config, 'left', 0);
            right = GetValue$b(config, 'right', left);
          }
          var y = GetValue$b(config, 'y', null);
          if (y !== null) {
            top = y;
            bottom = y;
          } else {
            top = GetValue$b(config, 'top', 0);
            bottom = GetValue$b(config, 'bottom', top);
          }
        } else {
          if (left === undefined) {
            left = 0;
          }
          if (top === undefined) {
            top = left;
          }
          if (right === undefined) {
            right = left;
          }
          if (bottom === undefined) {
            bottom = top;
          }
        }
        this.padding.left = left;
        this.padding.top = top;
        this.padding.right = right;
        this.padding.bottom = bottom;
        return this.updateText(false);
      }
    }, {
      key: "updateText",
      value: function updateText(runWrap) {
        if (runWrap === undefined) {
          runWrap = true;
        }
        var canvasText = this.canvasText;

        // wrap text to pens
        var style = this.style;
        if (runWrap) {
          canvasText.updatePenManager(this._text, style.wrapMode, style.wrapWidth, style.lineHeight);
        }

        // resize
        var padding = this.padding;
        var textWidth, textHeight;
        var linesWidth = Math.ceil(canvasText.linesWidth);
        if (style.fixedWidth === 0) {
          this.width = linesWidth + padding.left + padding.right;
          textWidth = linesWidth;
        } else {
          this.width = style.fixedWidth;
          textWidth = this.width - padding.left - padding.right;
          if (textWidth < linesWidth) {
            textWidth = linesWidth;
          }
        }
        if (style.fixedHeight === 0) {
          this.height = canvasText.linesHeight + padding.top + padding.bottom;
          textHeight = canvasText.linesHeight;
        } else {
          this.height = style.fixedHeight;
          textHeight = this.height - padding.top - padding.bottom;
          if (textHeight < canvasText.linesHeight) {
            textHeight = canvasText.linesHeight;
          }
        }
        var w = this.width;
        var h = this.height;
        this.updateDisplayOrigin();
        var resolution = style.resolution;
        w *= resolution;
        h *= resolution;
        w = Math.max(Math.ceil(w), 1);
        h = Math.max(Math.ceil(h), 1);
        var canvas = this.canvas;
        var context = this.context;
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
          this.frame.setSize(w, h);
        } else {
          context.clearRect(0, 0, w, h);
        }
        context.save();
        context.scale(resolution, resolution);

        // draw
        var startX = !this.style.rtl ? padding.left : padding.right;
        var startY = padding.top;
        canvasText.draw(startX, startY, textWidth, textHeight);
        context.restore();
        if (this.renderer && this.renderer.gl) {
          this.frame.source.glTexture = this.renderer.canvasToTexture(canvas, this.frame.source.glTexture, true);
          this.frame.glTexture = this.frame.source.glTexture;
        }
        this.dirty = true;
        var input = this.input;
        if (input && !input.customHitArea) {
          input.hitArea.width = this.width;
          input.hitArea.height = this.height;
        }
        return this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var out = Components.ToJSON(this);

        //  Extra Text data is added here

        var data = {
          autoRound: this.autoRound,
          text: this._text,
          style: this.style.toJSON(),
          resolution: this.resolution,
          padding: {
            left: this.padding.left,
            right: this.padding.right,
            top: this.padding.top,
            bottom: this.padding.bottom
          }
        };
        out.data = data;
        return out;
      }
    }, {
      key: "setInteractive",
      value: function setInteractive(hitArea, hitAreaCallback, dropZone) {
        var isInteractived = !!this.input;
        GameObject$2.prototype.setInteractive.call(this, hitArea, hitAreaCallback, dropZone);
        if (!isInteractived) {
          this.canvasText.setInteractive();
        }
        return this;
      }
    }, {
      key: "setUrlTagCursorStyle",
      value: function setUrlTagCursorStyle(cursor) {
        this.urlTagCursorStyle = cursor;
        return this;
      }
    }, {
      key: "urlTagCursorStyle",
      get: function get() {
        return this.canvasText.urlTagCursorStyle;
      },
      set: function set(value) {
        this.canvasText.urlTagCursorStyle = value;
      }
    }, {
      key: "getWrappedText",
      value: function getWrappedText(text, start, end) {
        if (typeof text === 'number') {
          end = start;
          start = text;
          text = undefined;
        }
        text = this.canvasText.getText(text, start, end, true);
        return text.split(SPLITREGEXP);
      }
    }, {
      key: "getPlainText",
      value: function getPlainText(text, start, end) {
        if (typeof text === 'number') {
          end = start;
          start = text;
          text = undefined;
        }
        return this.canvasText.getPlainText(text, start, end);
      }
    }, {
      key: "getText",
      value: function getText(text, start, end, wrap) {
        if (typeof text === 'number') {
          wrap = end;
          end = start;
          start = text;
          text = undefined;
        }
        if (wrap === undefined) {
          wrap = false;
        }
        return this.canvasText.getText(text, start, end, wrap);
      }
    }, {
      key: "getSubString",
      value: function getSubString(text, start, end) {
        if (typeof text === 'number') {
          end = start;
          start = text;
          text = undefined;
        }
        return this.getText(text, start, end);
      }
    }, {
      key: "copyPenManager",
      value: function copyPenManager(penManager) {
        return this.canvasText.copyPenManager(penManager);
      }
    }, {
      key: "getPenManager",
      value: function getPenManager(text, penManager) {
        return this.canvasText.getPenManager(text, penManager);
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        return this.setFixedSize(width, height);
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        return this.setFixedSize(width, height);
      }
    }, {
      key: "imageManager",
      get: function get() {
        if (!this._imageManager) {
          this._imageManager = new ImageManager(this.scene);
        }
        return this._imageManager;
      }
    }, {
      key: "addImage",
      value: function addImage(key, config) {
        this.imageManager.add(key, config);
        return this;
      }
    }, {
      key: "drawAreaBounds",
      value: function drawAreaBounds(graphics, color) {
        this.canvasText.hitAreaManager.drawBounds(graphics, color, this);
        return this;
      }
    }, {
      key: "generateTexture",
      value: function generateTexture(key, x, y, width, height) {
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
      }
    }]);
    return Text;
  }(TextBase);
  var methods$1 = {
    appendText: AppendText$1
  };
  Object.assign(Text.prototype, methods$1);

  var SplitText = function SplitText(text, mode) {
    var TagRegex = this.tagRegex;
    var result = [];
    var charIdx = 0;
    var rawMode = false,
      escMode = false;
    while (true) {
      var regexResult = TagRegex.RE_SPLITTEXT.exec(text);
      if (!regexResult) {
        break;
      }
      var match = regexResult[0];
      if (escMode) {
        if (TagRegex.RE_ESC_CLOSE.test(match)) {
          escMode = false;
        } else {
          continue; // Skip other tags
        }
      } else if (rawMode) {
        if (TagRegex.RE_RAW_CLOSE.test(match)) {
          rawMode = false;
        } else {
          continue; // Skip other tags
        }
      } else {
        if (TagRegex.RE_ESC_OPEN.test(match)) {
          escMode = true;
        } else if (TagRegex.RE_RAW_OPEN.test(match)) {
          rawMode = true;
        }
      }
      var matchEnd = TagRegex.RE_SPLITTEXT.lastIndex;
      var matchStart = matchEnd - match.length;
      if (charIdx < matchStart) {
        var content = text.substring(charIdx, matchStart);
        result.push(content);
      }
      if (mode === undefined) {
        result.push(match);
      }
      charIdx = matchEnd;
    }
    var totalLen = text.length;
    if (charIdx < totalLen) {
      // Push remainder string
      result.push(text.substring(charIdx, totalLen));
    }
    return result; // [text,...]
  };

  var PROP_REMOVE = false;
  var PROP_ADD = true;
  var GETPROP_RESULT = {
    plainText: null,
    prevProp: null
  };
  var TagTextToProp = function TagTextToProp(text, prevProp) {
    var TagRegex = this.tagRegex;

    // text : result of splitText()
    if (prevProp == null) {
      prevProp = {};
    }
    var plainText = '';

    // close image tag
    if (prevProp.img) {
      UpdateProp(prevProp, PROP_REMOVE, 'img');
    }
    if (prevProp.esc) {
      if (TagRegex.RE_ESC_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'esc');
      } else {
        plainText = text;
      }
    } else if (prevProp.raw) {
      if (TagRegex.RE_RAW_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'raw');
      } else {
        plainText = text;
      }
    } else {
      if (TagRegex.RE_ESC_OPEN.test(text)) {
        UpdateProp(prevProp, PROP_ADD, 'esc', true);
      } else if (TagRegex.RE_ESC_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'esc');
      } else if (TagRegex.RE_RAW_OPEN.test(text)) {
        UpdateProp(prevProp, PROP_ADD, 'raw', true);
      } else if (TagRegex.RE_RAW_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'raw');
      } else if (TagRegex.RE_BLOD_OPEN.test(text)) {
        UpdateProp(prevProp, PROP_ADD, 'b', true);
      } else if (TagRegex.RE_BLOD_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'b');
      } else if (TagRegex.RE_ITALICS_OPEN.test(text)) {
        UpdateProp(prevProp, PROP_ADD, 'i', true);
      } else if (TagRegex.RE_ITALICS_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'i');
      } else if (TagRegex.RE_WEIGHT_OPEN.test(text)) {
        var innerMatch = text.match(TagRegex.RE_WEIGHT_OPEN);
        UpdateProp(prevProp, PROP_ADD, 'weight', innerMatch[1]);
      } else if (TagRegex.RE_WEIGHT_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'weight');
      } else if (TagRegex.RE_SIZE_OPEN.test(text)) {
        var innerMatch = text.match(TagRegex.RE_SIZE_OPEN);
        UpdateProp(prevProp, PROP_ADD, 'size', "".concat(innerMatch[1], "px"));
      } else if (TagRegex.RE_SIZE_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'size');
      } else if (TagRegex.RE_COLOR_OPEN.test(text)) {
        var innerMatch = text.match(TagRegex.RE_COLOR_OPEN);
        UpdateProp(prevProp, PROP_ADD, 'color', innerMatch[1]);
      } else if (TagRegex.RE_COLOR_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'color');
      } else if (TagRegex.RE_UNDERLINE_OPEN.test(text)) {
        UpdateProp(prevProp, PROP_ADD, 'u', true);
      } else if (TagRegex.RE_UNDERLINE_OPENC.test(text)) {
        var innerMatch = text.match(TagRegex.RE_UNDERLINE_OPENC);
        UpdateProp(prevProp, PROP_ADD, 'u', innerMatch[1]);
      } else if (TagRegex.RE_UNDERLINE_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'u');
      } else if (TagRegex.RE_STRIKETHROUGH_OPEN.test(text)) {
        UpdateProp(prevProp, PROP_ADD, 's', true);
      } else if (TagRegex.RE_STRIKETHROUGH_OPENC.test(text)) {
        var innerMatch = text.match(TagRegex.RE_STRIKETHROUGH_OPENC);
        UpdateProp(prevProp, PROP_ADD, 's', innerMatch[1]);
      } else if (TagRegex.RE_STRIKETHROUGH_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 's');
      } else if (TagRegex.RE_SHADOW_OPEN.test(text)) {
        UpdateProp(prevProp, PROP_ADD, 'shadow', true);
      } else if (TagRegex.RE_SHADOW_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'shadow');
      } else if (TagRegex.RE_STROKE_OPEN.test(text)) {
        UpdateProp(prevProp, PROP_ADD, 'stroke', true);
      } else if (TagRegex.RE_STROKE_OPENC.test(text)) {
        var innerMatch = text.match(TagRegex.RE_STROKE_OPENC);
        UpdateProp(prevProp, PROP_ADD, 'stroke', innerMatch[1]);
      } else if (TagRegex.RE_STROKE_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'stroke');
      } else if (TagRegex.RE_OFFSETY_OPEN.test(text)) {
        var innerMatch = text.match(TagRegex.RE_OFFSETY_OPEN);
        UpdateProp(prevProp, PROP_ADD, 'y', parseFloat(innerMatch[1]));
      } else if (TagRegex.RE_OFFSETY_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'y');
      } else if (TagRegex.RE_IMAGE_OPEN.test(text)) {
        var innerMatch = text.match(TagRegex.RE_IMAGE_OPEN);
        UpdateProp(prevProp, PROP_ADD, 'img', innerMatch[1]);
      } else if (TagRegex.RE_IMAGE_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'img');
      } else if (TagRegex.RE_AREA_OPEN.test(text)) {
        var innerMatch = text.match(TagRegex.RE_AREA_OPEN);
        UpdateProp(prevProp, PROP_ADD, 'area', innerMatch[1]);
      } else if (TagRegex.RE_AREA_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'area');
      } else if (TagRegex.RE_URL_OPEN.test(text)) {
        var innerMatch = text.match(TagRegex.RE_URL_OPEN);
        UpdateProp(prevProp, PROP_ADD, 'url', innerMatch[1]);
      } else if (TagRegex.RE_URL_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'url');
      } else if (TagRegex.RE_ALIGN_OPEN.test(text)) {
        var innerMatch = text.match(TagRegex.RE_ALIGN_OPEN);
        UpdateProp(prevProp, PROP_ADD, 'align', innerMatch[1]);
      } else if (TagRegex.RE_ALIGN_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'align');
      } else if (TagRegex.RE_ID_OPEN.test(text)) {
        var innerMatch = text.match(TagRegex.RE_ID_OPEN);
        UpdateProp(prevProp, PROP_ADD, 'id', innerMatch[1]);
      } else if (TagRegex.RE_ID_CLOSE.test(text)) {
        UpdateProp(prevProp, PROP_REMOVE, 'id');
      } else {
        plainText = text;
      }
    }
    var result = GETPROP_RESULT;
    result.plainText = plainText;
    result.prop = prevProp;
    return result;
  };
  var UpdateProp = function UpdateProp(prop, op, key, value) {
    if (op === PROP_ADD) {
      // PROP_ADD     
      prop[key] = value;
    } else {
      // PROP_REMOVE        
      if (prop.hasOwnProperty(key)) {
        delete prop[key];
      }
    }
    return prop;
  };

  var PropToContextStyle = function PropToContextStyle(defaultStyle, prop) {
    var result = STYLE_RESULT;
    if (!prop.hasOwnProperty('img')) {
      result.image = null;
      if (prop.hasOwnProperty('family')) {
        result.fontFamily = prop.family;
      } else {
        result.fontFamily = defaultStyle.fontFamily;
      }
      if (prop.hasOwnProperty('size')) {
        var size = prop.size;
        if (typeof size === 'number') {
          size = "".concat(size, "px");
        }
        result.fontSize = size;
      } else {
        result.fontSize = defaultStyle.fontSize;
      }
      result.fontStyle = GetFontStyle(prop);
      if (prop.hasOwnProperty('color')) {
        result.color = prop.color;
      } else {
        result.color = defaultStyle.color;
      }
      if (prop.hasOwnProperty('stroke')) {
        if (prop.stroke === true) {
          result.stroke = defaultStyle.stroke;
          result.strokeThickness = defaultStyle.strokeThickness;
        } else {
          result.stroke = prop.stroke;
          result.strokeThickness = defaultStyle.strokeThickness;
        }
      } else {
        result.stroke = defaultStyle.stroke;
        result.strokeThickness = 0;
      }
    } else {
      result.image = prop.img;
    }
    if (prop.hasOwnProperty('shadow')) {
      if (prop.shadow === true) {
        result.shadowColor = defaultStyle.shadowColor;
        result.shadowOffsetX = defaultStyle.shadowOffsetX;
        result.shadowOffsetY = defaultStyle.shadowOffsetY;
        result.shadowBlur = defaultStyle.shadowBlur;
        result.shadowStroke = true;
        result.shadowFill = true;
      } else {
        result.shadowColor = prop.shadow;
        result.shadowOffsetX = defaultStyle.shadowOffsetX;
        result.shadowOffsetY = defaultStyle.shadowOffsetY;
        result.shadowBlur = defaultStyle.shadowBlur;
        result.shadowStroke = true;
        result.shadowFill = true;
      }
    } else {
      result.shadowColor = '#000';
      result.shadowOffsetX = 0;
      result.shadowOffsetY = 0;
      result.shadowBlur = 0;
      result.shadowStroke = false;
      result.shadowFill = false;
    }
    if (prop.hasOwnProperty('u')) {
      if (prop.u === true) {
        result.underlineColor = defaultStyle.underlineColor;
        result.underlineThickness = defaultStyle.underlineThickness;
        result.underlineOffset = defaultStyle.underlineOffset;
      } else {
        result.underlineColor = prop.u;
        result.underlineThickness = defaultStyle.underlineThickness;
        result.underlineOffset = defaultStyle.underlineOffset;
      }
    } else {
      result.underlineColor = '#000';
      result.underlineThickness = 0;
      result.underlineOffset = 0;
    }
    if (prop.hasOwnProperty('s')) {
      if (prop.s === true) {
        result.strikethroughColor = defaultStyle.strikethroughColor;
        result.strikethroughThickness = defaultStyle.strikethroughThickness;
        result.strikethroughOffset = defaultStyle.strikethroughOffset;
      } else {
        result.strikethroughColor = prop.s;
        result.strikethroughThickness = defaultStyle.strikethroughThickness;
        result.strikethroughOffset = defaultStyle.strikethroughOffset;
      }
    } else {
      result.strikethroughColor = '#000';
      result.strikethroughThickness = 0;
      result.strikethroughOffset = 0;
    }
    return result;
  };
  var GetFontStyle = function GetFontStyle(prop) {
    var isBold = prop.b;
    var weight = prop.weight;
    var isItalic = prop.i;
    if (isBold || weight || isItalic) {
      if (isItalic) {
        if (isBold) {
          return 'bold italic';
        } else if (weight) {
          return "".concat(weight, " italic");
        } else {
          return 'italic';
        }
      } else {
        // !isItalic
        if (isBold) {
          return 'bold';
        } else {
          return weight.toString();
        }
      }
    } else {
      return '';
    }
  };
  var STYLE_RESULT = new TextStyle$1();

  var PropToTagText = function PropToTagText(text, prop, prevProp) {
    if (prevProp == null) {
      prevProp = EMPTYPROP;
    }
    var delimiterLeft = this.delimiters[0];
    var delimiterRight = this.delimiters[1];
    var headers = [];
    for (var k in prevProp) {
      if (!prop.hasOwnProperty(k)) {
        headers.push("".concat(delimiterLeft, "/").concat(k).concat(delimiterRight));
      }
    }
    for (var k in prop) {
      var value = prop[k];
      if (prevProp[k] === value) {
        continue;
      }
      switch (k) {
        case 'size':
          headers.push("".concat(delimiterLeft, "size=").concat(value.replace('px', '')).concat(delimiterRight));
          break;
        case 'color':
        case 'weight':
        case 'stroke':
        case 'y':
        case 'img':
        case 'area':
        case 'url':
        case 'align':
        case 'id':
          headers.push("".concat(delimiterLeft).concat(k, "=").concat(value).concat(delimiterRight));
          break;
        case 'u':
        case 's':
          if (value === true) {
            headers.push("".concat(delimiterLeft).concat(k).concat(delimiterRight));
          } else {
            headers.push("".concat(delimiterLeft).concat(k, "=").concat(value).concat(delimiterRight));
          }
          break;
        default:
          headers.push("".concat(delimiterLeft).concat(k).concat(delimiterRight));
          break;
      }
    }
    headers.push(text);
    return headers.join('');
  };
  var EMPTYPROP = {};

  // https://github.com/sindresorhus/escape-string-regexp/blob/master/index.js

  var EscapeRegex = function EscapeRegex(s) {
    return s.replace(re0, '\\$&').replace(re1, '\\x2d');
  };
  var re0 = /[|\\{}()[\]^$+*?.]/g;
  var re1 = /-/g;

  var DelimiterLeftSave;
  var DelimiterRightSave;
  var TagRegexSave = {};
  var GetOpenTagRegString = function GetOpenTagRegString(delimiterLeft, delimiterRight, tagName, param) {
    if (param === undefined) {
      return "".concat(delimiterLeft).concat(tagName).concat(delimiterRight);
    } else {
      return "".concat(delimiterLeft).concat(tagName, "=(").concat(param, ")").concat(delimiterRight);
    }
  };
  var GetCloseTagRegString = function GetCloseTagRegString(delimiterLeft, delimiterRight, tagName) {
    return "".concat(delimiterLeft, "/").concat(tagName).concat(delimiterRight);
  };
  var NUMBER_PARAM = '[-.0-9]+';
  var COLOR_PARAM = '[a-z]+|#[0-9abcdef]+';
  var STR_PARAM = '[^\\]]+';
  var SetDelimiters = function SetDelimiters(delimiterLeft, delimiterRight) {
    if (delimiterRight === undefined) {
      var delimeters = delimiterLeft;
      delimiterLeft = delimeters[0];
      delimiterRight = delimeters[1];
    }
    if (DelimiterLeftSave === delimiterLeft && DelimiterRightSave === delimiterRight) {
      return false;
    }
    DelimiterLeftSave = delimiterLeft;
    DelimiterRightSave = delimiterRight;
    delimiterLeft = EscapeRegex(delimiterLeft);
    delimiterRight = EscapeRegex(delimiterRight);
    var ESC = 'esc';
    var ESC_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, ESC);
    var ESC_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, ESC);
    var RAW = 'raw';
    var RAW_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, RAW);
    var RAW_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, RAW);
    var BLOD = 'b';
    var BLOD_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, BLOD);
    var BLOD_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, BLOD);
    var ITALICS = 'i';
    var ITALICS_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, ITALICS);
    var ITALICS_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, ITALICS);
    var WEIGHT = 'weight';
    var WEIGHT_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, WEIGHT, NUMBER_PARAM);
    var WEIGHT_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, WEIGHT);
    var SIZE = 'size';
    var SIZE_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, SIZE, NUMBER_PARAM);
    var SIZE_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, SIZE);
    var COLOR = 'color';
    var COLOR_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, COLOR, COLOR_PARAM);
    var COLOR_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, COLOR);
    var UNDERLINE = 'u';
    var UNDERLINE_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, UNDERLINE);
    var UNDERLINE_OPENC = GetOpenTagRegString(delimiterLeft, delimiterRight, UNDERLINE, COLOR_PARAM);
    var UNDERLINE_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, UNDERLINE);
    var STRIKETHROUGH = 's';
    var STRIKETHROUGH_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, STRIKETHROUGH);
    var STRIKETHROUGH_OPENC = GetOpenTagRegString(delimiterLeft, delimiterRight, STRIKETHROUGH, COLOR_PARAM);
    var STRIKETHROUGH_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, STRIKETHROUGH);
    var SHADOW = 'shadow';
    var SHADOW_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, SHADOW);
    var SHADOW_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, SHADOW);
    var STROKE = 'stroke';
    var STROKE_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, STROKE);
    var STROKE_OPENC = GetOpenTagRegString(delimiterLeft, delimiterRight, STROKE, COLOR_PARAM);
    var STROKE_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, STROKE);
    var OFFSETY = 'y';
    var OFFSETY_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, OFFSETY, NUMBER_PARAM);
    var OFFSETY_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, OFFSETY);
    var IMAGE = 'img';
    var IMAGE_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, IMAGE, STR_PARAM);
    var IMAGE_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, IMAGE);
    var AREA = 'area';
    var AREA_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, AREA, STR_PARAM);
    var AREA_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, AREA);
    var URL = 'url';
    var URL_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, URL, STR_PARAM);
    var URL_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, URL);
    var ALIGN = 'align';
    var ALIGN_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, ALIGN, STR_PARAM);
    var ALIGN_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, ALIGN);
    var ID = 'id';
    var ID_OPEN = GetOpenTagRegString(delimiterLeft, delimiterRight, ID, STR_PARAM);
    var ID_CLOSE = GetCloseTagRegString(delimiterLeft, delimiterRight, ID);
    TagRegexSave.RE_ESC_OPEN = new RegExp(ESC_OPEN, 'i');
    TagRegexSave.RE_ESC_CLOSE = new RegExp(ESC_CLOSE, 'i');
    TagRegexSave.RE_RAW_OPEN = new RegExp(RAW_OPEN, 'i');
    TagRegexSave.RE_RAW_CLOSE = new RegExp(RAW_CLOSE, 'i');
    TagRegexSave.RE_BLOD_OPEN = new RegExp(BLOD_OPEN, 'i');
    TagRegexSave.RE_BLOD_CLOSE = new RegExp(BLOD_CLOSE, 'i');
    TagRegexSave.RE_ITALICS_OPEN = new RegExp(ITALICS_OPEN, 'i');
    TagRegexSave.RE_ITALICS_CLOSE = new RegExp(ITALICS_CLOSE, 'i');
    TagRegexSave.RE_WEIGHT_OPEN = new RegExp(WEIGHT_OPEN, 'i');
    TagRegexSave.RE_WEIGHT_CLOSE = new RegExp(WEIGHT_CLOSE, 'i');
    TagRegexSave.RE_SIZE_OPEN = new RegExp(SIZE_OPEN, 'i');
    TagRegexSave.RE_SIZE_CLOSE = new RegExp(SIZE_CLOSE, 'i');
    TagRegexSave.RE_COLOR_OPEN = new RegExp(COLOR_OPEN, 'i');
    TagRegexSave.RE_COLOR_CLOSE = new RegExp(COLOR_CLOSE, 'i');
    TagRegexSave.RE_UNDERLINE_OPEN = new RegExp(UNDERLINE_OPEN, 'i');
    TagRegexSave.RE_UNDERLINE_OPENC = new RegExp(UNDERLINE_OPENC, 'i');
    TagRegexSave.RE_UNDERLINE_CLOSE = new RegExp(UNDERLINE_CLOSE, 'i');
    TagRegexSave.RE_STRIKETHROUGH_OPEN = new RegExp(STRIKETHROUGH_OPEN, 'i');
    TagRegexSave.RE_STRIKETHROUGH_OPENC = new RegExp(STRIKETHROUGH_OPENC, 'i');
    TagRegexSave.RE_STRIKETHROUGH_CLOSE = new RegExp(STRIKETHROUGH_CLOSE, 'i');
    TagRegexSave.RE_SHADOW_OPEN = new RegExp(SHADOW_OPEN, 'i');
    TagRegexSave.RE_SHADOW_CLOSE = new RegExp(SHADOW_CLOSE, 'i');
    TagRegexSave.RE_STROKE_OPEN = new RegExp(STROKE_OPEN, 'i');
    TagRegexSave.RE_STROKE_OPENC = new RegExp(STROKE_OPENC, 'i');
    TagRegexSave.RE_STROKE_CLOSE = new RegExp(STROKE_CLOSE, 'i');
    TagRegexSave.RE_OFFSETY_OPEN = new RegExp(OFFSETY_OPEN, 'i');
    TagRegexSave.RE_OFFSETY_CLOSE = new RegExp(OFFSETY_CLOSE, 'i');
    TagRegexSave.RE_IMAGE_OPEN = new RegExp(IMAGE_OPEN, 'i');
    TagRegexSave.RE_IMAGE_CLOSE = new RegExp(IMAGE_CLOSE, 'i');
    TagRegexSave.RE_AREA_OPEN = new RegExp(AREA_OPEN, 'i');
    TagRegexSave.RE_AREA_CLOSE = new RegExp(AREA_CLOSE, 'i');
    TagRegexSave.RE_URL_OPEN = new RegExp(URL_OPEN, 'i');
    TagRegexSave.RE_URL_CLOSE = new RegExp(URL_CLOSE, 'i');
    TagRegexSave.RE_ALIGN_OPEN = new RegExp(ALIGN_OPEN, 'i');
    TagRegexSave.RE_ALIGN_CLOSE = new RegExp(ALIGN_CLOSE, 'i');
    TagRegexSave.RE_ID_OPEN = new RegExp(ID_OPEN, 'i');
    TagRegexSave.RE_ID_CLOSE = new RegExp(ID_CLOSE, 'i');
    TagRegexSave.RE_SPLITTEXT = new RegExp([RAW_OPEN, RAW_CLOSE, ESC_OPEN, ESC_CLOSE, BLOD_OPEN, BLOD_CLOSE, ITALICS_OPEN, ITALICS_CLOSE, WEIGHT_OPEN, WEIGHT_CLOSE, SIZE_OPEN, SIZE_CLOSE, COLOR_OPEN, COLOR_CLOSE, UNDERLINE_OPEN, UNDERLINE_OPENC, UNDERLINE_CLOSE, STRIKETHROUGH_OPEN, STRIKETHROUGH_OPENC, STRIKETHROUGH_CLOSE, SHADOW_OPEN, SHADOW_CLOSE, STROKE_OPEN, STROKE_OPENC, STROKE_CLOSE, OFFSETY_OPEN, OFFSETY_CLOSE, IMAGE_OPEN, IMAGE_CLOSE, AREA_OPEN, AREA_CLOSE, URL_OPEN, URL_CLOSE, ALIGN_OPEN, ALIGN_CLOSE, ID_OPEN, ID_CLOSE].join('|'), 'ig');
    return true;
  };
  var GetTagRegex = function GetTagRegex(delimiterLeft, delimiterRight) {
    if (delimiterLeft !== undefined) {
      SetDelimiters(delimiterLeft, delimiterRight);
    }
    return Object.assign({}, TagRegexSave);
  };

  var GetValue$a = Phaser.Utils.Objects.GetValue;
  var Parser = /*#__PURE__*/function () {
    function Parser(style) {
      _classCallCheck(this, Parser);
      var delimiters = GetValue$a(style, 'delimiters', '[]');
      this.tagRegex = GetTagRegex(delimiters);
      this.delimiters = delimiters;
    }
    _createClass(Parser, [{
      key: "getStrokeThinkness",
      value: function getStrokeThinkness(defaultStyle, prop) {
        var strokeThickness;
        if (prop.hasOwnProperty('stroke')) {
          strokeThickness = defaultStyle.strokeThickness;
        } else {
          strokeThickness = 0;
        }
        return strokeThickness;
      }
    }, {
      key: "setDelimiters",
      value: function setDelimiters(delimiterLeft, delimiterRight) {
        if (SetDelimiters(delimiterLeft, delimiterRight)) {
          this.tagRegex = GetTagRegex();
        }
        return this;
      }
    }]);
    return Parser;
  }();
  var methods = {
    splitText: SplitText,
    tagTextToProp: TagTextToProp,
    propToContextStyle: PropToContextStyle,
    propToTagText: PropToTagText
  };
  Object.assign(Parser.prototype, methods);

  var BBCodeText = /*#__PURE__*/function (_Text) {
    _inherits(BBCodeText, _Text);
    var _super = _createSuper(BBCodeText);
    function BBCodeText(scene, x, y, text, style) {
      _classCallCheck(this, BBCodeText);
      var parser = new Parser(style);
      return _super.call(this, scene, x, y, text, style, 'rexBBCodeText', parser);
    }
    _createClass(BBCodeText, [{
      key: "setDelimiters",
      value: function setDelimiters(delimiterLeft, delimiterRight) {
        this.parse.setDelimiters(delimiterLeft, delimiterRight);
        return this;
      }
    }]);
    return BBCodeText;
  }(Text);

  var GetValue$9 = Phaser.Utils.Objects.GetValue;
  var PhaserBitmapText = Phaser.GameObjects.BitmapText;
  var CreateText = function CreateText(scene, config) {
    var type = GetValue$9(config, '$type');
    if (type === undefined) {
      if (!!GetValue$9(config, 'key')) {
        type = 'bitmaptext';
      }
    }
    var gameObject;
    switch (type) {
      case 'bitmaptext':
      case 'bitmap':
        var key = GetValue$9(config, 'key');
        var size = GetValue$9(config, 'size');
        if (size === undefined) {
          size = GetValue$9(config, 'fontSize');
        }
        gameObject = new PhaserBitmapText(scene, 0, 0, key, '', size);
        var color = GetValue$9(config, 'color');
        if (color !== undefined) {
          gameObject.setTint(color);
        }
        break;
      case 'bbcodetext':
      case 'bbcode':
        gameObject = new BBCodeText(scene, 0, 0, '', config);
        break;
      case 'text':
      default:
        gameObject = new StatesText(scene, config);
        break;
    }
    scene.add.existing(gameObject);
    return gameObject;
  };

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

  CheckP3Version();
  var CanvasPool = Phaser.Display.Canvas.CanvasPool;
  var GameObject$1 = Phaser.GameObjects.GameObject;
  var Canvas = /*#__PURE__*/function (_GameObject) {
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
  }(GameObject$1);
  var Components$1 = Phaser.GameObjects.Components;
  Phaser.Class.mixin(Canvas, [Components$1.Alpha, Components$1.BlendMode, Components$1.Crop, Components$1.Depth, Components$1.Flip, Components$1.GetBounds, Components$1.Mask, Components$1.Origin, Components$1.Pipeline, Components$1.PostPipeline, Components$1.ScrollFactor, Components$1.Tint, Components$1.Transform, Components$1.Visible, Render, CanvasMethods, TextureMethods]);

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
      return key === undefined ? this.data : GetValue$N(this.data, key, defaultValue);
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

  var Base = /*#__PURE__*/function () {
    function Base(parent, type) {
      _classCallCheck(this, Base);
      this.setParent(parent);
      this.type = type;
      this.renderable = false;
      this.reset().setActive();
    }
    _createClass(Base, [{
      key: "destroy",
      value: function destroy() {
        this.parent.removeChild(this);
      }
    }, {
      key: "setParent",
      value: function setParent(parent) {
        this.parent = parent;
        return this;
      }
    }, {
      key: "scene",
      get: function get() {
        return this.parent.scene;
      }
    }, {
      key: "canvas",
      get: function get() {
        return this.parent ? this.parent.canvas : null;
      }
    }, {
      key: "context",
      get: function get() {
        return this.parent ? this.parent.context : null;
      }
    }, {
      key: "setDirty",
      value: function setDirty(dirty) {
        if (dirty && this.parent) {
          this.parent.dirty = true;
        }
        return this;
      }
    }, {
      key: "active",
      get: function get() {
        return this._active;
      },
      set: function set(value) {
        this.setDirty(this._active != value);
        this._active = value;
      }
    }, {
      key: "setActive",
      value: function setActive(active) {
        if (active === undefined) {
          active = true;
        }
        this.active = active;
        return this;
      }
    }, {
      key: "modifyPorperties",
      value: function modifyPorperties(o) {
        return this;
      }

      // Override
    }, {
      key: "onFree",
      value: function onFree() {
        this.reset().setParent();
      }

      // Override
    }, {
      key: "reset",
      value: function reset() {
        return this;
      }

      // Override
    }, {
      key: "render",
      value: function render() {}

      // Override
    }, {
      key: "contains",
      value: function contains(x, y) {
        return false;
      }
    }]);
    return Base;
  }();
  Object.assign(Base.prototype, DataMethods);

  var RenderMethods = {
    // Override
    renderContent: function renderContent() {},
    // Override
    render: function render() {
      if (!this.willRender) {
        return this;
      }
      var context = this.context;
      context.save();
      context.globalAlpha = this.alpha;
      if (this.toLocalPosition) {
        var x = this.drawX,
          y = this.drawY;
        if (this.autoRound) {
          x = Math.round(x);
          y = Math.round(y);
        }
        context.translate(x, y);
        context.scale(this.scaleX, this.scaleY);
        context.rotate(this.rotation);
      }
      if (this.drawBelowCallback) {
        this.drawBelowCallback(this);
      }
      this.renderContent();
      if (this.drawAboveCallback) {
        this.drawAboveCallback(this);
      }
      context.restore();
      return this;
    }
  };

  var RotateAround$1 = Phaser.Math.RotateAround;
  var CanvasPositionToBobPosition = function CanvasPositionToBobPosition(canvasX, canvasY, bob, out) {
    if (out === undefined) {
      out = {};
    } else if (out === true) {
      if (globPoint$1 === undefined) {
        globPoint$1 = {};
      }
      out = globPoint$1;
    }
    out.x = (canvasX - bob.drawX) / bob.scaleX;
    out.y = (canvasY - bob.drawY) / bob.scaleY;
    if (bob.rotation !== 0) {
      RotateAround$1(out, 0, 0, -bob.rotation);
    }
    return out;
  };
  var globPoint$1;

  var Rectangle = Phaser.Geom.Rectangle;
  var Contains = function Contains(canvasX, canvasY) {
    if (this.width === 0 || this.height === 0) {
      return false;
    }
    var bobPosition = CanvasPositionToBobPosition(canvasX, canvasY, this, true);
    return GetBobBounds(this).contains(bobPosition.x, bobPosition.y);
  };
  var GetBobBounds = function GetBobBounds(bob) {
    if (bobBounds === undefined) {
      bobBounds = new Rectangle();
    }
    var x = bob.drawTLX,
      y = bob.drawTLY;
    bobBounds.setTo(x, y, bob.drawTRX - x, bob.drawBLY - y);
    return bobBounds;
  };
  var bobBounds;

  var RotateAround = Phaser.Math.RotateAround;
  var BobPositionToCanvasPosition = function BobPositionToCanvasPosition(bob, bobX, bobY, out) {
    if (out === undefined) {
      out = {};
    } else if (out === true) {
      if (globPoint === undefined) {
        globPoint = {};
      }
      out = globPoint;
    }
    out.x = bobX;
    out.y = bobY;
    if (bob.rotation !== 0) {
      RotateAround(out, 0, 0, bob.rotation);
    }
    out.x = out.x * bob.scaleX + bob.drawX;
    out.y = out.y * bob.scaleY + bob.drawY;
    return out;
  };
  var globPoint;

  var TransformMatrix = Phaser.GameObjects.Components.TransformMatrix;
  var GameObjectLocalXYToWorldXY = function GameObjectLocalXYToWorldXY(gameObject, localX, localY, out) {
    if (out === undefined) {
      out = {};
    } else if (out === true) {
      out = globOut;
    }
    var px = localX - gameObject.width * gameObject.originX;
    var py = localY - gameObject.height * gameObject.originY;
    if (tempMatrix === undefined) {
      tempMatrix = new TransformMatrix();
      parentMatrix = new TransformMatrix();
    }
    if (gameObject.parentContainer) {
      gameObject.getWorldTransformMatrix(tempMatrix, parentMatrix);
    } else {
      tempMatrix.applyITRS(gameObject.x, gameObject.y, gameObject.rotation, gameObject.scaleX, gameObject.scaleY);
    }
    tempMatrix.transformPoint(px, py, out);
    return out;
  };
  var tempMatrix, parentMatrix;
  var globOut = {};

  var BobPositionToWorldPosition = function BobPositionToWorldPosition(dynamicText, bob, bobX, bobY, out) {
    var localXY = BobPositionToCanvasPosition(bob, bobX, bobY, true);
    var worldXY = GameObjectLocalXYToWorldXY(dynamicText, localXY.x, localXY.y, out);
    return worldXY;
  };

  var GetBobWorldPosition = function GetBobWorldPosition(dynamicText, bob, offsetX, offsetY, out) {
    if (typeof offsetX !== 'number') {
      out = offsetX;
      offsetX = 0;
      offsetY = 0;
    }
    var bobX = bob.drawCenterX + offsetX;
    var bobY = bob.drawCenterY + offsetY;
    return BobPositionToWorldPosition(dynamicText, bob, bobX, bobY, out);
  };

  var GetWorldPosition = function GetWorldPosition(offsetX, offsetY, out) {
    return GetBobWorldPosition(this.parent, this, offsetX, offsetY, out);
  };

  var Methods$1 = {
    contains: Contains,
    getWorldPosition: GetWorldPosition
  };
  Object.assign(Methods$1, RenderMethods);

  var DegToRad = Phaser.Math.DegToRad;
  var RadToDeg = Phaser.Math.RadToDeg;
  var GetValue$8 = Phaser.Utils.Objects.GetValue;
  var RenderBase = /*#__PURE__*/function (_Base) {
    _inherits(RenderBase, _Base);
    var _super = _createSuper(RenderBase);
    function RenderBase(parent, type) {
      var _this;
      _classCallCheck(this, RenderBase);
      _this = _super.call(this, parent, type);
      _this.renderable = true;
      _this.scrollFactorX = 1;
      _this.scrollFactorY = 1;
      _this.toLocalPosition = true;
      _this.originX = 0;
      _this.offsetX = 0; // Override
      _this.offsetY = 0; // Override
      return _this;
    }
    _createClass(RenderBase, [{
      key: "visible",
      get: function get() {
        return this._visible;
      },
      set: function set(value) {
        this.setDirty(this._visible != value);
        this._visible = value;
      }
    }, {
      key: "setVisible",
      value: function setVisible(visible) {
        if (visible === undefined) {
          visible = true;
        }
        this.visible = visible;
        return this;
      }
    }, {
      key: "alpha",
      get: function get() {
        return this._alpha;
      },
      set: function set(value) {
        this.setDirty(this._alpha != value);
        this._alpha = value;
      }
    }, {
      key: "setAlpha",
      value: function setAlpha(alpha) {
        this.alpha = alpha;
        return this;
      }
    }, {
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(value) {
        this.setDirty(this._x != value);
        this._x = value;
      }
    }, {
      key: "setX",
      value: function setX(x) {
        this.x = x;
        return this;
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(value) {
        this.setDirty(this._y != value);
        this._y = value;
      }
    }, {
      key: "setY",
      value: function setY(y) {
        this.y = y;
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
      key: "setInitialPosition",
      value: function setInitialPosition(x, y) {
        this.x0 = x;
        this.y0 = y;
        return this;
      }
    }, {
      key: "setScrollFactorX",
      value: function setScrollFactorX(x) {
        this.scrollFactorX = x;
        return this;
      }
    }, {
      key: "setScrollFactorY",
      value: function setScrollFactorY(y) {
        this.scrollFactorY = y;
        return this;
      }
    }, {
      key: "setScrollFactor",
      value: function setScrollFactor(x, y) {
        if (y === undefined) {
          y = x;
        }
        this.scrollFactorX = x;
        this.scrollFactorY = y;
        return this;
      }
    }, {
      key: "rotation",
      get: function get() {
        return this._rotation;
      },
      set: function set(value) {
        this.setDirty(this._rotation != value);
        this._rotation = value;
      }
    }, {
      key: "setRotation",
      value: function setRotation(rotation) {
        this.rotation = rotation;
        return this;
      }
    }, {
      key: "angle",
      get: function get() {
        return RadToDeg(this._rotation);
      },
      set: function set(value) {
        this.rotation = DegToRad(value);
      }
    }, {
      key: "setAngle",
      value: function setAngle(angle) {
        this.angle = angle;
        return this;
      }
    }, {
      key: "scaleX",
      get: function get() {
        return this._scaleX;
      },
      set: function set(value) {
        this.setDirty(this._scaleX !== value);
        this._scaleX = value;
      }
    }, {
      key: "setScaleX",
      value: function setScaleX(scaleX) {
        this.scaleX = scaleX;
        return this;
      }

      // Override
    }, {
      key: "width",
      get: function get() {
        return 0;
      }

      // Override
      ,
      set: function set(value) {}
    }, {
      key: "setWidth",
      value: function setWidth(width, keepAspectRatio) {
        if (keepAspectRatio === undefined) {
          keepAspectRatio = false;
        }
        this.width = width;
        if (keepAspectRatio) {
          this.scaleY = this.scaleX;
        }
        return this;
      }
    }, {
      key: "leftSpace",
      get: function get() {
        return this._leftSpace;
      },
      set: function set(value) {
        this.setDirty(this._leftSpace !== value);
        this._leftSpace = value;
      }
    }, {
      key: "setLeftSpace",
      value: function setLeftSpace(value) {
        this.leftSpace = value;
        return this;
      }
    }, {
      key: "rightSpace",
      get: function get() {
        return this._rightSpace;
      },
      set: function set(value) {
        this.setDirty(this._rightSpace !== value);
        this._rightSpace = value;
      }
    }, {
      key: "setRightSpace",
      value: function setRightSpace(value) {
        this.rightSpace = value;
        return this;
      }
    }, {
      key: "outerWidth",
      get: function get() {
        return this.width + this.leftSpace + this.rightSpace;
      }
    }, {
      key: "scaleY",
      get: function get() {
        return this._scaleY;
      },
      set: function set(value) {
        this.setDirty(this._scaleY !== value);
        this._scaleY = value;
      }
    }, {
      key: "setScaleY",
      value: function setScaleY(scaleY) {
        this.scaleY = scaleY;
        return this;
      }

      // Override
    }, {
      key: "height",
      get: function get() {
        return 0;
      }

      // Override
      ,
      set: function set(value) {}
    }, {
      key: "setHeight",
      value: function setHeight(height, keepAspectRatio) {
        if (keepAspectRatio === undefined) {
          keepAspectRatio = false;
        }
        this.height = height;
        if (keepAspectRatio) {
          this.scaleX = this.scaleY;
        }
        return this;
      }
    }, {
      key: "setScale",
      value: function setScale(scaleX, scaleY) {
        if (scaleY === undefined) {
          scaleY = scaleX;
        }
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        return this;
      }
    }, {
      key: "setOrigin",
      value: function setOrigin(x) {
        this.originX = x;
        return this;
      }
    }, {
      key: "setAlign",
      value: function setAlign(align) {
        this.align = align;
        return this;
      }
    }, {
      key: "modifyPorperties",
      value: function modifyPorperties(o) {
        if (!o) {
          return this;
        }
        if (o.hasOwnProperty('x')) {
          this.setX(o.x);
        }
        if (o.hasOwnProperty('y')) {
          this.setY(o.y);
        }
        if (o.hasOwnProperty('rotation')) {
          this.setRotation(o.rotation);
        } else if (o.hasOwnProperty('angle')) {
          this.setAngle(o.angle);
        }
        if (o.hasOwnProperty('alpha')) {
          this.setAlpha(o.alpha);
        }

        // ScaleX, ScaleY
        var width = GetValue$8(o, 'width', undefined);
        var height = GetValue$8(o, 'height', undefined);
        var scaleX = GetValue$8(o, 'scaleX', undefined);
        var scaleY = GetValue$8(o, 'scaleY', undefined);
        if (width !== undefined) {
          if (height === undefined && scaleY === undefined) {
            this.setWidth(width, true);
          } else {
            this.setWidth(width);
          }
        } else if (scaleX !== undefined) {
          this.setScaleX(scaleX);
        }
        if (height !== undefined) {
          if (width === undefined && scaleX === undefined) {
            this.setHeight(height, true);
          } else {
            this.setHeight(height);
          }
        } else if (scaleY !== undefined) {
          this.setScaleY(scaleY);
        }
        if (o.hasOwnProperty('leftSpace')) {
          this.setLeftSpace(o.leftSpace);
        }
        if (o.hasOwnProperty('rightSpace')) {
          this.setRightSpace(o.rightSpace);
        }
        if (o.hasOwnProperty('align')) {
          this.setAlign(o.align);
        }
        return this;
      }
    }, {
      key: "setDrawBelowCallback",
      value: function setDrawBelowCallback(callback) {
        this.drawBelowCallback = callback;
        return this;
      }
    }, {
      key: "setDrawAboveCallback",
      value: function setDrawAboveCallback(callback) {
        this.drawAboveCallback = callback;
        return this;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.setVisible().setAlpha(1).setPosition(0, 0).setRotation(0).setScale(1, 1).setLeftSpace(0).setRightSpace(0).setOrigin(0).setAlign().setDrawBelowCallback().setDrawAboveCallback();
        return this;
      }

      // Override
    }, {
      key: "willRender",
      get: function get() {
        return this.visible && this.alpha > 0;
      }
    }, {
      key: "drawX",
      get: function get() {
        var x = this.x + this.leftSpace + this.offsetX - this.originX * this.width;
        return this.parent._textOX * this.scrollFactorX + x;
      }
    }, {
      key: "drawY",
      get: function get() {
        var y = this.y + this.offsetY;
        return this.parent._textOY * this.scrollFactorY + y;
      }

      // Override
    }, {
      key: "drawTLX",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawTLY",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawBLX",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawBLY",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawTRX",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawTRY",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawBRX",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawBRY",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawCenterX",
      get: function get() {
        return (this.drawTRX + this.drawTLX) / 2;
      }
    }, {
      key: "drawCenterY",
      get: function get() {
        return (this.drawBLY + this.drawTLY) / 2;
      }
    }]);
    return RenderBase;
  }(Base);
  Object.assign(RenderBase.prototype, Methods$1);

  var GetProperty = function GetProperty(name, config, defaultConfig) {
    if (config.hasOwnProperty(name)) {
      return config[name];
    } else {
      return defaultConfig[name];
    }
  };

  var GetValue$7 = Phaser.Utils.Objects.GetValue;
  var Background = /*#__PURE__*/function (_RenderBase) {
    _inherits(Background, _RenderBase);
    var _super = _createSuper(Background);
    function Background(parent, config) {
      var _this;
      _classCallCheck(this, Background);
      _this = _super.call(this, parent, 'background');
      _this.setScrollFactor(0);
      _this.setColor(GetValue$7(config, 'color', null), GetValue$7(config, 'color2', null), GetValue$7(config, 'horizontalGradient', true));
      _this.setStroke(GetValue$7(config, 'stroke', null), GetValue$7(config, 'strokeThickness', 2));
      _this.setCornerRadius(GetValue$7(config, 'cornerRadius', 0), GetValue$7(config, 'cornerIteration', null));
      return _this;
    }
    _createClass(Background, [{
      key: "color",
      get: function get() {
        return this._color;
      },
      set: function set(value) {
        value = GetStyle(value, this.canvas, this.context);
        this.setDirty(this._color != value);
        this._color = value;
      }
    }, {
      key: "color2",
      get: function get() {
        return this._color2;
      },
      set: function set(value) {
        value = GetStyle(value, this.canvas, this.context);
        this.setDirty(this._color2 != value);
        this._color2 = value;
      }
    }, {
      key: "horizontalGradient",
      get: function get() {
        return this._horizontalGradient;
      },
      set: function set(value) {
        this.setDirty(this._horizontalGradient != value);
        this._horizontalGradient = value;
      }
    }, {
      key: "setColor",
      value: function setColor(color, color2, isHorizontalGradient) {
        if (isHorizontalGradient === undefined) {
          isHorizontalGradient = true;
        }
        this.color = color;
        this.color2 = color2;
        this.horizontalGradient = isHorizontalGradient;
        return this;
      }
    }, {
      key: "stroke",
      get: function get() {
        return this._stroke;
      },
      set: function set(value) {
        value = GetStyle(value, this.canvas, this.context);
        this.setDirty(this._stroke != value);
        this._stroke = value;
      }
    }, {
      key: "strokeThickness",
      get: function get() {
        return this._strokeThickness;
      },
      set: function set(value) {
        this.setDirty(this._strokeThickness != value);
        this._strokeThickness = value;
      }
    }, {
      key: "setStroke",
      value: function setStroke(color, lineWidth) {
        if (color != null) {
          if (lineWidth === undefined) {
            lineWidth = 2;
          }
        }
        this.stroke = color;
        this.strokeThickness = lineWidth;
        return this;
      }
    }, {
      key: "cornerRadius",
      get: function get() {
        return this._cornerRadius;
      },
      set: function set(value) {
        this.setDirty(this._cornerRadius != value);
        this._cornerRadius = value;
      }
    }, {
      key: "cornerIteration",
      get: function get() {
        return this._cornerIteration;
      },
      set: function set(value) {
        this.setDirty(this._cornerIteration != value);
        this._cornerIteration = value;
      }
    }, {
      key: "modifyStyle",
      value: function modifyStyle(o) {
        if (o.hasOwnProperty('color')) {
          this.setColor(o.color, GetProperty('color2', o, this), GetProperty('horizontalGradient', o, this));
        }
        if (o.hasOwnProperty('stroke')) {
          this.setStroke(o.stroke, GetProperty('strokeThickness', o, this));
        }
        if (o.hasOwnProperty('cornerRadius')) {
          this.setCornerRadius(o.cornerRadius, GetProperty('cornerIteration', o, this));
        }
        return this;
      }
    }, {
      key: "modifyPorperties",
      value: function modifyPorperties(o) {
        _get(_getPrototypeOf(Background.prototype), "modifyPorperties", this).call(this, o);
        this.modifyStyle(o);
        return this;
      }
    }, {
      key: "setCornerRadius",
      value: function setCornerRadius(radius, iteration) {
        this.cornerRadius = radius;
        this.cornerIteration = iteration;
        return this;
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        DrawRoundRectangleBackground(this.parent, this.color, this.stroke, this.strokeThickness, this.cornerRadius, this.color2, this.horizontalGradient, this.cornerIteration);
      }
    }]);
    return Background;
  }(RenderBase);

  var GetValue$6 = Phaser.Utils.Objects.GetValue;
  var InnerBounds = /*#__PURE__*/function (_RenderBase) {
    _inherits(InnerBounds, _RenderBase);
    var _super = _createSuper(InnerBounds);
    function InnerBounds(parent, config) {
      var _this;
      _classCallCheck(this, InnerBounds);
      _this = _super.call(this, parent, 'innerbounds');
      _this.setScrollFactor(0);
      _this.setColor(GetValue$6(config, 'color', null), GetValue$6(config, 'color2', null), GetValue$6(config, 'horizontalGradient', true));
      _this.setStroke(GetValue$6(config, 'stroke', null), GetValue$6(config, 'strokeThickness', 2));
      return _this;
    }
    _createClass(InnerBounds, [{
      key: "color",
      get: function get() {
        return this._color;
      },
      set: function set(value) {
        value = GetStyle(value, this.canvas, this.context);
        this.setDirty(this._color != value);
        this._color = value;
      }
    }, {
      key: "color2",
      get: function get() {
        return this._color2;
      },
      set: function set(value) {
        value = GetStyle(value, this.canvas, this.context);
        this.setDirty(this._color2 != value);
        this._color2 = value;
      }
    }, {
      key: "horizontalGradient",
      get: function get() {
        return this._horizontalGradient;
      },
      set: function set(value) {
        this.setDirty(this._horizontalGradient != value);
        this._horizontalGradient = value;
      }
    }, {
      key: "setColor",
      value: function setColor(color, color2, isHorizontalGradient) {
        if (isHorizontalGradient === undefined) {
          isHorizontalGradient = true;
        }
        this.color = color;
        this.color2 = color2;
        this.horizontalGradient = isHorizontalGradient;
        return this;
      }
    }, {
      key: "stroke",
      get: function get() {
        return this._stroke;
      },
      set: function set(value) {
        value = GetStyle(value, this.canvas, this.context);
        this.setDirty(this._stroke != value);
        this._stroke = value;
      }
    }, {
      key: "strokeThickness",
      get: function get() {
        return this._strokeThickness;
      },
      set: function set(value) {
        this.setDirty(this._strokeThickness != value);
        this._strokeThickness = value;
      }
    }, {
      key: "setStroke",
      value: function setStroke(color, lineWidth) {
        if (color != null) {
          if (lineWidth === undefined) {
            lineWidth = 2;
          }
        }
        this.stroke = color;
        this.strokeThickness = lineWidth;
        return this;
      }
    }, {
      key: "modifyPorperties",
      value: function modifyPorperties(o) {
        _get(_getPrototypeOf(InnerBounds.prototype), "modifyPorperties", this).call(this, o);
        if (o.hasOwnProperty('color')) {
          this.setColor(o.color, GetValue$6(o, 'color2', null), GetValue$6(o, 'horizontalGradient', true));
        }
        if (o.hasOwnProperty('stroke')) {
          this.setStroke(o.stroke, GetValue$6(o, 'strokeThickness', 2));
        }
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        var padding = this.parent.padding;
        var x = padding.left,
          y = padding.top,
          width = this.parent.width - padding.left - padding.right,
          height = this.parent.height - padding.top - padding.bottom;
        var context = this.context;
        if (this.color != null) {
          var fillStyle;
          if (this.color2 != null) {
            var grd;
            if (this.horizontalGradient) {
              grd = context.createLinearGradient(0, 0, width, 0);
            } else {
              grd = context.createLinearGradient(0, 0, 0, height);
            }
            grd.addColorStop(0, this.color);
            grd.addColorStop(1, this.color2);
            fillStyle = grd;
          } else {
            fillStyle = this.color;
          }
          context.fillStyle = fillStyle;
          context.fillRect(x, y, width, height);
        }
        if (this.stroke != null && this.strokeThickness > 0) {
          context.strokeStyle = this.stroke;
          context.lineWidth = this.strokeThickness;
          context.strokeRect(x, y, width, height);
        }
      }
    }]);
    return InnerBounds;
  }(RenderBase);

  var GetValue$5 = Phaser.Utils.Objects.GetValue;
  var TextStyle = /*#__PURE__*/function () {
    function TextStyle(parent, config) {
      _classCallCheck(this, TextStyle);
      this.parent = parent;
      this.set(config);
    }
    _createClass(TextStyle, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          bold: this.bold,
          italic: this.italic,
          fontSize: this.fontSize,
          fontFamily: this.fontFamily,
          color: this.color,
          stroke: this.stroke,
          strokeThickness: this.strokeThickness,
          shaodwColor: this.shadowColor,
          shadowBlur: this.shadowBlur,
          shadowOffsetX: this.shadowOffsetX,
          shadowOffsetY: this.shadowOffsetY,
          offsetX: this.offsetX,
          offsetY: this.offsetY,
          leftSpace: this.leftSpace,
          rightSpace: this.rightSpace,
          backgroundHeight: this.backgroundHeight,
          backgroundBottomY: this.backgroundBottomY,
          align: this.align
        };
      }
    }, {
      key: "set",
      value: function set(o) {
        this.setBold(GetValue$5(o, 'bold', false));
        this.setItalic(GetValue$5(o, 'italic', false));
        this.setFontSize(GetValue$5(o, 'fontSize', '16px'));
        this.setFontFamily(GetValue$5(o, 'fontFamily', 'Courier'));
        this.setColor(GetValue$5(o, 'color', '#fff'));
        this.setStrokeStyle(GetValue$5(o, 'stroke', null), GetValue$5(o, 'strokeThickness', 0));
        this.setShadow(GetValue$5(o, 'shadowColor', null), GetValue$5(o, 'shadowOffsetX', 0), GetValue$5(o, 'shadowOffsetY', 0), GetValue$5(o, 'shadowBlur', 0));
        this.setOffset(GetValue$5(o, 'offsetX', 0), GetValue$5(o, 'offsetY', 0));
        this.setSpace(GetValue$5(o, 'leftSpace', 0), GetValue$5(o, 'rightSpace', 0));
        this.setAlign(GetValue$5(o, 'align', undefined));
        this.setBackgroundColor(GetValue$5(o, 'backgroundColor', null));
        this.setBackgroundHeight(GetValue$5(o, 'backgroundHeight', undefined));
        this.setBackgroundBottomY(GetValue$5(o, 'backgroundBottomY', undefined));
        return this;
      }
    }, {
      key: "modify",
      value: function modify(o) {
        if (o.hasOwnProperty('bold')) {
          this.setBold(o.bold);
        }
        if (o.hasOwnProperty('italic')) {
          this.setItalic(o.italic);
        }
        if (o.hasOwnProperty('fontSize')) {
          this.setFontSize(o.fontSize);
        }
        if (o.hasOwnProperty('fontFamily')) {
          this.setFontFamily(o.fontFamily);
        }
        if (o.hasOwnProperty('color')) {
          this.setColor(o.color);
        }
        if (o.hasOwnProperty('stroke') || o.hasOwnProperty('strokeThickness')) {
          this.setStrokeStyle(GetProperty('stroke', o, this), GetProperty('strokeThickness', o, this));
        }
        if (o.hasOwnProperty('shadowColor')) {
          this.setShadowColor(o.shadowColor);
        }
        if (o.hasOwnProperty('shadowOffsetX') || o.hasOwnProperty('shadowOffsetY')) {
          this.setShadowOffset(GetProperty('shadowOffsetX', o, this), GetProperty('shadowOffsetY', o, this));
        }
        if (o.hasOwnProperty('shadowBlur')) {
          this.setShadowBlur(o.shaodwBlur);
        }
        if (o.hasOwnProperty('offsetX')) {
          this.setOffsetX(o.offsetX);
        }
        if (o.hasOwnProperty('offsetY')) {
          this.setOffsetY(o.offsetY);
        }
        if (o.hasOwnProperty('leftSpace')) {
          this.setLeftSpace(o.leftSpace);
        }
        if (o.hasOwnProperty('rightSpace')) {
          this.setRightSpace(o.rightSpace);
        }
        if (o.hasOwnProperty('align')) {
          this.setAlign(o.align);
        }
        if (o.hasOwnProperty('backgroundColor')) {
          this.setBackgroundColor(o.backgroundColor);
        }
        if (o.hasOwnProperty('backgroundHeight')) {
          this.setBackgroundHeight(o.backgroundHeight);
        }
        if (o.hasOwnProperty('backgroundBottomY')) {
          this.setBackgroundBottomY(o.backgroundBottomY);
        }
        return this;
      }
    }, {
      key: "setUpdateTextFlag",
      value: function setUpdateTextFlag() {
        if (this.parent) {
          this.parent.updateTextFlag = true;
        }
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new TextStyle(null, this.toJSON());
      }
    }, {
      key: "copyFrom",
      value: function copyFrom(sourceTextStyle) {
        this.set(sourceTextStyle.toJSON());
        return this;
      }
    }, {
      key: "copyTo",
      value: function copyTo(targetTextStyle) {
        targetTextStyle.set(this.toJSON());
        return this;
      }
    }, {
      key: "setBold",
      value: function setBold(value) {
        if (value === undefined) {
          value = true;
        }
        this.bold = value;
        this.setUpdateTextFlag();
        return this;
      }
    }, {
      key: "setItalic",
      value: function setItalic(value) {
        if (value === undefined) {
          value = true;
        }
        this.italic = value;
        this.setUpdateTextFlag();
        return this;
      }
    }, {
      key: "fontStyle",
      get: function get() {
        if (this.bold && this.italic) {
          return 'bold italic';
        } else if (this.bold) {
          return 'bold';
        } else if (this.italic) {
          return 'italic';
        } else {
          return '';
        }
      }
    }, {
      key: "setFontSize",
      value: function setFontSize(fontSize) {
        if (typeof fontSize === 'number') {
          fontSize = "".concat(fontSize, "px");
        }
        this.fontSize = fontSize;
        this.setUpdateTextFlag();
        return this;
      }
    }, {
      key: "setFontFamily",
      value: function setFontFamily(fontFamily) {
        this.fontFamily = fontFamily;
        this.setUpdateTextFlag();
        return this;
      }
    }, {
      key: "font",
      get: function get() {
        return "".concat(this.fontStyle, " ").concat(this.fontSize, " ").concat(this.fontFamily);
      }
    }, {
      key: "setColor",
      value: function setColor(color) {
        this.color = GetStyle(color);
        return this;
      }
    }, {
      key: "hasFill",
      get: function get() {
        return this.color != null;
      }
    }, {
      key: "setStrokeStyle",
      value: function setStrokeStyle(stroke, strokeThickness) {
        this.stroke = GetStyle(stroke);
        if (strokeThickness !== undefined) {
          this.strokeThickness = strokeThickness;
        }
        return this;
      }
    }, {
      key: "setStrokeThickness",
      value: function setStrokeThickness(strokeThickness) {
        this.strokeThickness = strokeThickness;
        return this;
      }
    }, {
      key: "hasStroke",
      get: function get() {
        return this.stroke != null && this.strokeThickness > 0;
      }
    }, {
      key: "setShadowColor",
      value: function setShadowColor(color) {
        this.shadowColor = GetStyle(color);
        return this;
      }
    }, {
      key: "setShadowOffset",
      value: function setShadowOffset(offsetX, offsetY) {
        if (offsetX === undefined) {
          offsetX = 0;
        }
        if (offsetY === undefined) {
          offsetY = 0;
        }
        this.shadowOffsetX = offsetX;
        this.shadowOffsetY = offsetY;
        return this;
      }
    }, {
      key: "setShadowBlur",
      value: function setShadowBlur(blur) {
        if (blur === undefined) {
          blur = 0;
        }
        this.shaodwBlur = blur;
        return this;
      }
    }, {
      key: "setShadow",
      value: function setShadow(color, offsetX, offsetY, blur) {
        this.setShadowColor(color).setShadowOffset(offsetX, offsetY).setShadowBlur(blur);
        return this;
      }
    }, {
      key: "setBackgroundColor",
      value: function setBackgroundColor(color) {
        this.backgroundColor = GetStyle(color);
        return this;
      }
    }, {
      key: "hasBackgroundColor",
      get: function get() {
        return this.backgroundColor != null;
      }
    }, {
      key: "setBackgroundHeight",
      value: function setBackgroundHeight(height) {
        this.backgroundHeight = height;
        return this;
      }
    }, {
      key: "setBackgroundBottomY",
      value: function setBackgroundBottomY(y) {
        this.backgroundBottomY = y;
        return this;
      }
    }, {
      key: "setOffsetX",
      value: function setOffsetX(offsetX) {
        if (offsetX === undefined) {
          offsetX = 0;
        }
        this.offsetX = offsetX;
        return this;
      }
    }, {
      key: "setOffsetY",
      value: function setOffsetY(offsetY) {
        if (offsetY === undefined) {
          offsetY = 0;
        }
        this.offsetY = offsetY;
        return this;
      }
    }, {
      key: "setOffset",
      value: function setOffset(offsetX, offsetY) {
        this.setOffsetX(offsetX).setOffsetY(offsetY);
        return this;
      }
    }, {
      key: "setLeftSpace",
      value: function setLeftSpace(space) {
        if (space === undefined) {
          space = 0;
        }
        this.leftSpace = space;
        return this;
      }
    }, {
      key: "setRightSpace",
      value: function setRightSpace(space) {
        if (space === undefined) {
          space = 0;
        }
        this.rightSpace = space;
        return this;
      }
    }, {
      key: "setSpace",
      value: function setSpace(leftSpace, rightSpace) {
        this.setLeftSpace(leftSpace).setRightSpace(rightSpace);
        return this;
      }
    }, {
      key: "setAlign",
      value: function setAlign(align) {
        this.align = align;
        return this;
      }
    }, {
      key: "syncFont",
      value: function syncFont(context) {
        context.font = this.font;
        return this;
      }
    }, {
      key: "syncStyle",
      value: function syncStyle(context) {
        context.textBaseline = 'alphabetic';
        var hasFill = this.hasFill;
        var hasStroke = this.hasStroke;
        context.fillStyle = hasFill ? this.color : '#000';
        context.strokeStyle = hasStroke ? this.stroke : '#000';
        context.lineWidth = hasStroke ? this.strokeThickness : 0;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        return this;
      }
    }, {
      key: "syncShadow",
      value: function syncShadow(context) {
        if (context.shadowColor != null) {
          context.shadowColor = this.shadowColor;
          context.shadowOffsetX = this.shadowOffsetX;
          context.shadowOffsetY = this.shadowOffsetY;
          context.shadowBlur = this.shadowBlur;
        } else {
          context.shadowColor = 0;
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 0;
          context.shadowBlur = 0;
        }
      }
    }, {
      key: "getTextMetrics",
      value: function getTextMetrics(context, text) {
        this.syncFont(context).syncStyle(context);
        return context.measureText(text);
      }
    }]);
    return TextStyle;
  }();

  var SetFixedSize = function SetFixedSize(width, height) {
    if (width === undefined) {
      width = 0;
    }
    if (height === undefined) {
      height = 0;
    }
    if (this.fixedWidth === width && this.fixedHeight === height) {
      return this;
    }
    this.fixedWidth = width;
    this.fixedHeight = height;
    this.dirty = true; // -> this.updateTexture();

    this.setCanvasSize(width > 0 ? width : this.width, height > 0 ? height : this.height);
    return this;
  };

  var SetPadding = function SetPadding(key, value) {
    var padding = this.padding;
    var paddingLeft = padding.left,
      paddingRight = padding.right,
      paddingTop = padding.top,
      paddingBottom = padding.bottom;
    SetPadding$1(padding, key, value);
    this.dirty = this.dirty || paddingLeft != padding.left || paddingRight != padding.right || paddingTop != padding.top || paddingBottom != padding.bottom;
    return this;
  };

  var GetPadding = function GetPadding(key) {
    return GetPadding$1(this.padding, key);
  };

  var ModifyTextStyle = function ModifyTextStyle(style) {
    this.textStyle.modify(style);
    return this;
  };

  var ModifyDefaultTextStyle = function ModifyDefaultTextStyle(style) {
    this.defaultTextStyle.modify(style);
    return this;
  };

  var ResetTextStyle = function ResetTextStyle() {
    this.textStyle.copyFrom(this.defaultTextStyle);
    return this;
  };

  var SetTestString = function SetTestString(testString) {
    this.testString = testString;
    return this;
  };

  var RemoveItem$1 = Phaser.Utils.Array.Remove;
  var RemoveChild = function RemoveChild(child) {
    this.poolManager.free(child);
    RemoveItem$1(this.children, child);
    this.lastAppendedChildren.length = 0;
    this.lastOverChild = null;
    this.dirty = true;
    return this;
  };

  var RemoveChildren = function RemoveChildren() {
    this.poolManager.freeMultiple(this.children);
    this.children.length = 0;
    this.lastAppendedChildren.length = 0;
    this.lastOverChild = null;
    this.dirty = true;
    return this;
  };

  var RemoveItem = Phaser.Utils.Array.Remove;
  var PopChild = function PopChild(child) {
    RemoveItem(this.children, child);
    this.lastAppendedChildren.length = 0;
    this.lastOverChild = null;
    this.dirty = true;
    return this;
  };

  var ClearContent = function ClearContent() {
    this.setText();
    return this;
  };

  // const RemoveItem = Phaser.Utils.Array.Remove;

  var AddChild = function AddChild(child, index) {
    var areChildren = Array.isArray(child);

    // Remove existed child(s)
    // RemoveItem(this.children, child);

    if (index === undefined || index === this.children.length) {
      if (areChildren) {
        var _this$children;
        (_this$children = this.children).push.apply(_this$children, _toConsumableArray(child));
      } else {
        this.children.push(child);
      }
    } else {
      if (areChildren) {
        var _this$children2;
        (_this$children2 = this.children).splice.apply(_this$children2, [index, 0].concat(_toConsumableArray(child)));
      } else {
        this.children.splice(index, 0, child);
      }
    }
    this.lastAppendedChildren.length = 0;
    if (areChildren) {
      var _this$lastAppendedChi;
      (_this$lastAppendedChi = this.lastAppendedChildren).push.apply(_this$lastAppendedChi, _toConsumableArray(child));
    } else {
      this.lastAppendedChildren.push(child);
    }
    return this;
  };

  var CharTypeName = 'text';
  var ImageTypeName = 'image';
  var DrawerTypeName = 'drawer';
  var SpaceTypeName = 'space';
  var CmdTypeName = 'command';
  var IsNewLineChar = function IsNewLineChar(bob) {
    return bob.type === CharTypeName && bob.text === '\n';
  };
  var IsPageBreakChar = function IsPageBreakChar(bob) {
    return bob.type === CharTypeName && bob.text === '\f';
  };
  var IsChar = function IsChar(bob) {
    return bob.type === CharTypeName;
  };

  var CharData = /*#__PURE__*/function (_RenderBase) {
    _inherits(CharData, _RenderBase);
    var _super = _createSuper(CharData);
    function CharData(parent, text, style) {
      var _this;
      _classCallCheck(this, CharData);
      _this = _super.call(this, parent, CharTypeName);
      _this.updateTextFlag = false;
      _this.style = new TextStyle(_assertThisInitialized(_this), style);
      _this.setText(text);
      return _this;
    }
    _createClass(CharData, [{
      key: "autoRound",
      get: function get() {
        return this.parent.autoRound;
      }
    }, {
      key: "offsetX",
      get: function get() {
        return this.style.offsetX;
      },
      set: function set(value) {
        if (this.style) {
          this.style.offsetX = value;
        }
      }
    }, {
      key: "offsetY",
      get: function get() {
        return this.style.offsetY;
      },
      set: function set(value) {
        if (this.style) {
          this.style.offsetY = value;
        }
      }
    }, {
      key: "leftSpace",
      get: function get() {
        return this.style.leftSpace * this.scaleX;
      },
      set: function set(value) {
        if (this.style) {
          this.style.leftSpace = value;
        }
        _set(_getPrototypeOf(CharData.prototype), "leftSpace", value, this, true);
      }
    }, {
      key: "rightSpace",
      get: function get() {
        return this.style.rightSpace * this.scaleX;
      },
      set: function set(value) {
        if (this.style) {
          this.style.rightSpace = value;
        }
        _set(_getPrototypeOf(CharData.prototype), "rightSpace", value, this, true);
      }
    }, {
      key: "align",
      get: function get() {
        return this.style.align;
      },
      set: function set(value) {
        if (this.style) {
          this.style.align = value;
        }
      }
    }, {
      key: "modifyStyle",
      value: function modifyStyle(style) {
        this.setDirty(true);
        this.style.modify(style);
        if (this.updateTextFlag) {
          this.updateTextSize();
        }
        return this;
      }
    }, {
      key: "modifyPorperties",
      value: function modifyPorperties(o) {
        if (!o) {
          return this;
        }
        this.modifyStyle(o);
        _get(_getPrototypeOf(CharData.prototype), "modifyPorperties", this).call(this, o);
        return this;
      }
    }, {
      key: "setText",
      value: function setText(text) {
        this.setDirty(this.text != text);
        this.text = text;
        this.updateTextSize();
        return this;
      }
    }, {
      key: "updateTextSize",
      value: function updateTextSize() {
        var text = this.text;
        // Is new-line, page-break, or empty character
        if (text === '\n' || text === '\f' || text === '') {
          this.clearTextSize();
        } else {
          var metrics = this.style.getTextMetrics(this.context, this.text);
          this.textWidth = metrics.width;
          var ascent, descent;
          if ('actualBoundingBoxAscent' in metrics) {
            ascent = metrics.actualBoundingBoxAscent;
            descent = metrics.actualBoundingBoxDescent;
          } else {
            ascent = 0;
            descent = 0;
          }
          this.textHeight = ascent + descent;
          this.ascent = ascent;
          this.descent = descent;
        }
        this.updateTextFlag = false;
        return this;
      }
    }, {
      key: "clearTextSize",
      value: function clearTextSize() {
        this.textWidth = 0;
        this.textHeight = 0;
        this.ascent = 0;
        this.descent = 0;
        return this;
      }
    }, {
      key: "copyTextSize",
      value: function copyTextSize(child) {
        this.textWidth = child.textWidth;
        this.textHeight = child.textHeight;
        this.ascent = child.ascent;
        this.descent = child.descent;
        return this;
      }
    }, {
      key: "width",
      get: function get() {
        return this.textWidth * this.scaleX;
      },
      set: function set(value) {
        if (this.textWidth > 0) {
          this.scaleX = value / this.textWidth;
        } else {
          this.scaleX = 1;
        }
      }
    }, {
      key: "height",
      get: function get() {
        return this.textHeight * this.scaleY;
      },
      set: function set(value) {
        if (this.textHeight > 0) {
          this.scaleY = value / this.textHeight;
        } else {
          this.scaleY = 1;
        }
      }
    }, {
      key: "willRender",
      get: function get() {
        if (this.textWidth === 0) {
          return false;
        }
        return _get(_getPrototypeOf(CharData.prototype), "willRender", this);
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        var context = this.context;
        var textStyle = this.style;
        if (textStyle.hasBackgroundColor) {
          context.fillStyle = textStyle.backgroundColor;
          var x = this.drawTLX;
          var width = this.drawTRX - x;
          var bottomY = textStyle.backgroundBottomY;
          if (bottomY == null) {
            bottomY = this.drawBLY;
          }
          var height = textStyle.backgroundHeight;
          if (height == null) {
            height = bottomY - this.drawTLY;
          }
          var y = bottomY - height;
          context.fillRect(x, y, width, height);
        }
        var hasFill = textStyle.hasFill,
          hasStroke = textStyle.hasStroke;
        if (!hasFill && !hasStroke) {
          return;
        }
        textStyle.syncFont(context).syncStyle(context);
        // textBaseline = 'alphabetic'

        if (hasStroke) {
          textStyle.syncShadow(context);
          context.strokeText(this.text, 0, 0);
        }
        if (hasFill) {
          textStyle.syncShadow(context);
          context.fillText(this.text, 0, 0);
        }
      }
    }, {
      key: "drawTLX",
      get: function get() {
        return -this.leftSpace;
      }
    }, {
      key: "drawTLY",
      get: function get() {
        return -this.ascent;
      }
    }, {
      key: "drawBLX",
      get: function get() {
        return -this.leftSpace;
      }
    }, {
      key: "drawBLY",
      get: function get() {
        return this.descent;
      }
    }, {
      key: "drawTRX",
      get: function get() {
        return this.textWidth + this.rightSpace;
      }
    }, {
      key: "drawTRY",
      get: function get() {
        return -this.ascent;
      }
    }, {
      key: "drawBRX",
      get: function get() {
        return this.textWidth + this.rightSpace;
      }
    }, {
      key: "drawBRY",
      get: function get() {
        return this.descent;
      }
    }]);
    return CharData;
  }(RenderBase);

  var CreateCharChild = function CreateCharChild(text, style) {
    if (style) {
      this.textStyle.modify(style);
    }
    var child = this.poolManager.allocate(CharTypeName);
    if (child === null) {
      child = new CharData(this,
      // parent
      text,
      // text
      this.textStyle) // style
      ;
    } else {
      child.setParent(this).setActive().modifyStyle(this.textStyle).setText(text);
    }
    return child;
  };

  var CreateCharChildren = function CreateCharChildren(text, style) {
    if (style) {
      this.textStyle.modify(style);
    }
    var children = [];
    for (var i = 0, cnt = text.length; i < cnt; i++) {
      var _char = text.charAt(i);
      var child = this.poolManager.allocate(CharTypeName);
      if (child === null) {
        child = new CharData(this,
        // parent
        _char,
        // text
        this.textStyle) // style
        ;
      } else {
        child.setParent(this).setActive().modifyStyle(this.textStyle).setText(_char);
      }
      // child.modifyPorperties(properties);  // Warning: Will modify text-style twice

      children.push(child);
    }
    return children;
  };

  var AppendText = function AppendText(text, style) {
    var children = this.createCharChildren(text, style);
    this.addChild(children);
    return this;
  };

  var SetText = function SetText(text, style) {
    if (text === undefined) {
      text = '';
    }
    this.removeChildren();
    AppendText.call(this, text, style); // this.appendText might be override

    this.dirty = true;
    return this;
  };

  var InsertText = function InsertText(index, text, style) {
    var children = this.createCharChildren(text, style);
    index = this.getCharChildIndex(index, true);
    this.addChild(children, index);
    return this;
  };

  var RemoveText = function RemoveText(index, length) {
    if (length === undefined) {
      length = 1;
    }
    for (var i = 0; i < length; i++) {
      var childIndex = this.getCharChildIndex(index, true);
      if (childIndex === undefined) {
        break;
      }
      this.removeChild(this.children[childIndex]);
    }
    return this;
  };

  var GetText = function GetText(activeOnly) {
    var text = '';
    this.forEachCharChild(function (child) {
      text += child.text;
    }, undefined, activeOnly);
    return text;
  };

  Phaser.Display.Canvas.CanvasPool;
  var ImageData = /*#__PURE__*/function (_RenderBase) {
    _inherits(ImageData, _RenderBase);
    var _super = _createSuper(ImageData);
    function ImageData(parent, key, frame) {
      var _this;
      _classCallCheck(this, ImageData);
      _this = _super.call(this, parent, ImageTypeName);
      _this.setTexture(key, frame);
      _this.color = undefined;
      return _this;
    }
    _createClass(ImageData, [{
      key: "frameWidth",
      get: function get() {
        return this.frameObj ? this.frameObj.cutWidth : 0;
      }
    }, {
      key: "frameHeight",
      get: function get() {
        return this.frameObj ? this.frameObj.cutHeight : 0;
      }
    }, {
      key: "offsetY",
      get: function get() {
        return -this.height;
      },
      set: function set(value) {}
    }, {
      key: "key",
      get: function get() {
        return this._key;
      },
      set: function set(value) {
        this.setDirty(this._key != value);
        this._key = value;
      }
    }, {
      key: "frame",
      get: function get() {
        return this._frame;
      },
      set: function set(value) {
        this.setDirty(this._frame != value);
        this._frame = value;
      }
    }, {
      key: "setTexture",
      value: function setTexture(key, frame) {
        this.key = key;
        this.frame = frame;
        this.frameObj = this.scene.sys.textures.getFrame(key, frame);
        return this;
      }
    }, {
      key: "width",
      get: function get() {
        return this.frameWidth * this.scaleX;
      },
      set: function set(value) {
        this.setDirty(this.width !== value);
        this.scaleX = value / this.frameWidth;
      }
    }, {
      key: "height",
      get: function get() {
        return this.frameHeight * this.scaleY;
      },
      set: function set(value) {
        this.setDirty(this.height !== value);
        this.scaleY = value / this.frameHeight;
      }
    }, {
      key: "setHeight",
      value: function setHeight(height, keepAspectRatio) {
        if (keepAspectRatio === undefined) {
          keepAspectRatio = false;
        }
        this.height = height;
        if (keepAspectRatio) {
          this.scaleX = this.scaleY;
        }
        return this;
      }
    }, {
      key: "setColor",
      value: function setColor(color) {
        this.color = color;
        return this;
      }
    }, {
      key: "modifyPorperties",
      value: function modifyPorperties(o) {
        if (o.hasOwnProperty('color')) {
          this.setColor(o.color);
        }
        _get(_getPrototypeOf(ImageData.prototype), "modifyPorperties", this).call(this, o);
        return this;
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        DrawFrameToCanvas(this.frameObj, this.canvas, 0, 0, this.frameWidth, this.frameHeight, this.color, false);
      }
    }, {
      key: "drawTLX",
      get: function get() {
        return -this.leftSpace;
      }
    }, {
      key: "drawTLY",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawBLX",
      get: function get() {
        return -this.leftSpace;
      }
    }, {
      key: "drawBLY",
      get: function get() {
        return this.frameHeight;
      }
    }, {
      key: "drawTRX",
      get: function get() {
        return this.frameWidth + this.rightSpace;
      }
    }, {
      key: "drawTRY",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawBRX",
      get: function get() {
        return this.frameWidth + this.rightSpace;
      }
    }, {
      key: "drawBRY",
      get: function get() {
        return this.frameHeight;
      }
    }]);
    return ImageData;
  }(RenderBase);

  var CreateImageChild = function CreateImageChild(key, frame, properties) {
    var child = this.poolManager.allocate(ImageTypeName);
    if (child === null) {
      child = new ImageData(this,
      // parent
      key, frame);
    } else {
      child.setParent(this).setActive().setTexture(key, frame);
    }
    child.modifyPorperties(properties);
    return child;
  };

  var AppendImage = function AppendImage(key, frame, properties) {
    var child = this.createImageChild(key, frame, properties);
    this.addChild(child);
    return this;
  };

  var Drawer = /*#__PURE__*/function (_RenderBase) {
    _inherits(Drawer, _RenderBase);
    var _super = _createSuper(Drawer);
    function Drawer(parent, renderCallback, width, height) {
      var _this;
      _classCallCheck(this, Drawer);
      _this = _super.call(this, parent, DrawerTypeName);
      _this.setRenderCallback(renderCallback);
      _this.setDrawerSize(width, height);
      return _this;
    }
    _createClass(Drawer, [{
      key: "setRenderCallback",
      value: function setRenderCallback(callback) {
        if (callback) {
          this.renderContent = callback.bind(this);
        } else {
          delete this.renderContent;
        }
        return this;
      }
    }, {
      key: "setDrawerSize",
      value: function setDrawerSize(width, height) {
        // Whole canvas
        if (width === true) {
          this.toLocalPosition = false;
          width = undefined;
          height = undefined;
        } else {
          this.toLocalPosition = true;
        }
        if (width === undefined) {
          width = 0;
        }
        if (height === undefined) {
          height = width;
        }
        this.drawerWidth = width;
        this.drawerHeight = height;
        return this;
      }
    }, {
      key: "onFree",
      value: function onFree() {
        _get(_getPrototypeOf(Drawer.prototype), "onFree", this).call(this);
        this.setRenderCallback();
      }
    }, {
      key: "width",
      get: function get() {
        return this.drawerWidth * this.scaleX;
      },
      set: function set(value) {
        this.setDirty(this.width !== value);
        this.scaleX = this.drawerWidth > 0 ? value / this.drawerWidth : 1;
      }
    }, {
      key: "height",
      get: function get() {
        return this.drawerHeight * this.scaleY;
      },
      set: function set(value) {
        this.setDirty(this.height !== value);
        this.scaleY = this.drawerHeight > 0 ? value / this.drawerHeight : 1;
      }
    }, {
      key: "offsetY",
      get: function get() {
        return -this.height;
      },
      set: function set(value) {}
    }, {
      key: "drawTLX",
      get: function get() {
        return -this.leftSpace;
      }
    }, {
      key: "drawTLY",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawBLX",
      get: function get() {
        return -this.leftSpace;
      }
    }, {
      key: "drawBLY",
      get: function get() {
        return this.drawerHeight;
      }
    }, {
      key: "drawTRX",
      get: function get() {
        return this.drawerWidth + this.rightSpace;
      }
    }, {
      key: "drawTRY",
      get: function get() {
        return 0;
      }
    }, {
      key: "drawBRX",
      get: function get() {
        return this.drawerWidth + this.rightSpace;
      }
    }, {
      key: "drawBRY",
      get: function get() {
        return this.drawerHeight;
      }
    }]);
    return Drawer;
  }(RenderBase);

  var CreateDrawerChild = function CreateDrawerChild(renderCallback, width, height) {
    var child = this.poolManager.allocate(DrawerTypeName);
    if (child === null) {
      child = new Drawer(this,
      // parent
      renderCallback, width, height);
    } else {
      child.setParent(this).setActive().setRenderCallback(renderCallback).setDrawerSize(width, height);
    }
    return child;
  };

  var AppendDrawer = function AppendDrawer(renderCallback, width, height) {
    var child = this.createDrawerChild(renderCallback, width, height);
    this.addChild(child);
    return this;
  };

  var Space = /*#__PURE__*/function (_RenderBase) {
    _inherits(Space, _RenderBase);
    var _super = _createSuper(Space);
    function Space(parent, width) {
      var _this;
      _classCallCheck(this, Space);
      _this = _super.call(this, parent, SpaceTypeName);
      _this.setSpaceWidth(width);
      return _this;
    }
    _createClass(Space, [{
      key: "width",
      get: function get() {
        return this.spaceWidth * this.scaleX;
      },
      set: function set(value) {
        if (this.spaceWidth > 0) {
          this.scaleX = value / this.spaceWidth;
        } else {
          this.scaleX = 1;
        }
      }
    }, {
      key: "setSpaceWidth",
      value: function setSpaceWidth(width) {
        this.spaceWidth = width;
        return this;
      }
    }]);
    return Space;
  }(RenderBase);

  var CreateSpaceChild = function CreateSpaceChild(width) {
    var child = this.poolManager.allocate(SpaceTypeName);
    if (child === null) {
      child = new Space(this,
      // parent
      width);
    } else {
      child.setParent(this).setActive().setSpaceWidth(width);
    }
    return child;
  };

  var AppendSpace = function AppendSpace(width) {
    var child = this.createSpaceChild(width);
    this.addChild(child);
    return this;
  };

  var Command = /*#__PURE__*/function (_Base) {
    _inherits(Command, _Base);
    var _super = _createSuper(Command);
    function Command(parent, name, callback, param, scope) {
      var _this;
      _classCallCheck(this, Command);
      _this = _super.call(this, parent, CmdTypeName);
      _this.setName(name).setParameter(param).setCallback(callback, scope);
      return _this;
    }
    _createClass(Command, [{
      key: "setName",
      value: function setName(name) {
        this.name = name;
        return this;
      }
    }, {
      key: "setParameter",
      value: function setParameter(param) {
        this.param = param;
        return this;
      }
    }, {
      key: "setCallback",
      value: function setCallback(callback, scope) {
        this.callback = callback;
        this.scope = scope;
        return this;
      }
    }, {
      key: "exec",
      value: function exec() {
        var result;
        if (this.scope) {
          result = this.callback.call(this.scope, this.param, this.name);
        } else {
          result = this.callback(this.param, this.name);
        }
        return result;
      }
    }, {
      key: "onFree",
      value: function onFree() {
        _get(_getPrototypeOf(Command.prototype), "onFree", this).call(this);
        this.setName().setCallback().setParameter();
      }
    }]);
    return Command;
  }(Base);

  var CreateCommandChild = function CreateCommandChild(name, callback, param, scope) {
    var child = this.poolManager.allocate(CmdTypeName);
    if (child === null) {
      child = new Command(this,
      // parent
      name, callback, param, scope);
    } else {
      child.setParent(this).setActive().setName(name).setCallback(callback, scope).setParameter(param);
    }
    return child;
  };

  var AppendCommand = function AppendCommand(name, callback, param, scope) {
    var child = this.createCommandChild(name, callback, param, scope);
    this.addChild(child);
    return this;
  };

  var SetWrapConfig = function SetWrapConfig(config) {
    if (config === undefined) {
      config = {};
    } else if (_typeof(config) === 'object') {
      config = DeepClone(config);
    }
    this.wrapConfig = config;
    return this;
  };

  var CreateWrapResultData = function CreateWrapResultData(config) {
    var data = {
      callback: undefined,
      start: 0,
      // Next start index
      isLastPage: false,
      // Is last page
      maxLines: undefined,
      padding: undefined,
      letterSpacing: undefined,
      hAlign: undefined,
      vAlign: undefined,
      children: [],
      // Wrap result
      lines: [],
      // Wrap result in lines

      // WordWrap
      maxLineWidth: 0,
      linesHeight: 0,
      lineHeight: undefined,
      // VerticalWrap
      maxLineHeight: 0,
      linesWidth: 0,
      lineWidth: undefined
    };
    return Object.assign(data, config);
  };

  var GetWord = function GetWord(children, startIndex, charMode, result) {
    if (result === undefined) {
      result = {
        word: [],
        width: 0
      };
    }
    result.word.length = 0;
    var endIndex = children.length;
    var currentIndex = startIndex;
    var word = result.word,
      wordWidth = 0;
    while (currentIndex < endIndex) {
      var child = children[currentIndex];
      // Can't render (command child), put into output directly
      if (!child.renderable) {
        word.push(child);
        currentIndex++;
        continue;
      }
      var text = child.type === CharTypeName ? child.text : null;
      if (text !== null && text !== ' ' && text !== '\n' && text !== '\f') {
        word.push(child);
        wordWidth += child.outerWidth;
        currentIndex++;
        // Continue
      } else {
        // Get image child, a space, a new-line, or page-break
        if (currentIndex === startIndex) {
          // Single child
          word.push(child);
          wordWidth += child.outerWidth;
        }
        break;
      }
      if (charMode) {
        // Word only contains 1 character
        break;
      }
    }
    result.width = wordWidth;
    return result;
  };

  var GetChildrenAlign = function GetChildrenAlign(children) {
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var child = children[i];
      if (child.align !== undefined) {
        return child.align;
      }
    }
    return undefined;
  };

  var OffsetChildren = function OffsetChildren(children, offsetX, offsetY) {
    if (offsetX === 0 && offsetY === 0) {
      return;
    }
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var child = children[i];
      if (!child.renderable) {
        continue;
      }
      child.x += offsetX;
      child.y += offsetY;
    }
  };

  var AlignLines$1 = function AlignLines(result, width, height) {
    var hAlign = result.hAlign,
      vAlign = result.vAlign;
    var offsetX, offsetY;
    var linesHeight = result.linesHeight;
    switch (vAlign) {
      case 1: // center
      case 'center':
        offsetY = (height - linesHeight) / 2;
        break;
      case 2: // bottom
      case 'bottom':
        offsetY = height - linesHeight;
        break;
      default:
        offsetY = 0;
        break;
    }
    var lines = result.lines;
    for (var li = 0, lcnt = lines.length; li < lcnt; li++) {
      var line = lines[li];
      var lineWidth = line.width,
        children = line.children;
      var lineHAlign = GetChildrenAlign(children);
      if (lineHAlign === undefined) {
        lineHAlign = hAlign;
      }
      switch (lineHAlign) {
        case 1: // center
        case 'center':
          offsetX = (width - lineWidth) / 2;
          break;
        case 2: // right
        case 'right':
          offsetX = width - lineWidth;
          break;
        default:
          offsetX = 0;
          break;
      }
      OffsetChildren(children, offsetX, offsetY);
    }
  };

  var GetDefaultTextHeight = function GetDefaultTextHeight() {
    var metrics = this.defaultTextStyle.getTextMetrics(this.context, this.testString);
    var ascent, descent;
    if ('actualBoundingBoxAscent' in metrics) {
      ascent = metrics.actualBoundingBoxAscent;
      descent = metrics.actualBoundingBoxDescent;
    } else {
      ascent = 0;
      descent = 0;
    }
    Result.ascent = ascent;
    Result.descent = descent;
    Result.height = ascent + descent;
    return Result;
  };
  var Result = {};

  var GetValue$4 = Phaser.Utils.Objects.GetValue;
  var RunWordWrap$1 = function RunWordWrap(config) {
    // Parse parameters
    var startIndex = GetValue$4(config, 'start', 0);
    SetPadding$1(this.wrapPadding, GetValue$4(config, 'padding', 0));
    var paddingVertical = this.padding.top + this.padding.bottom + this.wrapPadding.top + this.wrapPadding.bottom;
    var paddingHorizontal = this.padding.left + this.padding.right + this.wrapPadding.left + this.wrapPadding.right;

    // Get lineHeight, maxLines
    var lineHeight = GetValue$4(config, 'lineHeight');
    var ascent = GetValue$4(config, 'ascent', lineHeight);
    var maxLines;
    if (lineHeight === undefined) {
      // Calculate lineHeight
      var useDefaultTextHeight = GetValue$4(config, 'useDefaultTextHeight', false);
      maxLines = GetValue$4(config, 'maxLines', 0);
      if (this.fixedHeight > 0 && !useDefaultTextHeight) {
        var innerHeight = this.fixedHeight - paddingVertical;
        if (maxLines > 0) {
          // Calculate lineHeight via maxLines, in fixedHeight mode
          lineHeight = innerHeight / maxLines;
        } else {
          var textHeightResult = GetDefaultTextHeight.call(this);
          lineHeight = textHeightResult.height;
          ascent = textHeightResult.ascent;
          // Calculate maxLines via (ascent, lineHeight), in fixedHeight mode
          maxLines = Math.floor((innerHeight - ascent) / lineHeight);
        }
      } else {
        var textHeightResult = GetDefaultTextHeight.call(this);
        lineHeight = textHeightResult.height;
        ascent = textHeightResult.ascent;
      }
    } else {
      // Calculate maxLines
      if (this.fixedHeight > 0) {
        // Calculate maxLines via lineHeight, in fixedHeight mode
        maxLines = GetValue$4(config, 'maxLines');
        if (maxLines === undefined) {
          var innerHeight = this.fixedHeight - paddingVertical;
          maxLines = Math.floor(innerHeight / lineHeight);
        }
      } else {
        maxLines = GetValue$4(config, 'maxLines', 0); // Default is show all lines
      }
    }

    // If ascent is undefined, assign to lineHeight
    if (ascent === undefined) {
      ascent = lineHeight;
    }
    var showAllLines = maxLines === 0;

    // Get wrapWidth
    var wrapWidth = GetValue$4(config, 'wrapWidth', undefined);
    if (wrapWidth === undefined) {
      if (this.fixedWidth > 0) {
        wrapWidth = this.fixedWidth - paddingHorizontal;
      } else {
        wrapWidth = Infinity; // No word-wrap
      }
    }

    var letterSpacing = GetValue$4(config, 'letterSpacing', 0);
    var hAlign = GetValue$4(config, 'hAlign', 0);
    var vAlign = GetValue$4(config, 'vAlign', 0);
    var charWrap = GetValue$4(config, 'charWrap', false);
    var result = CreateWrapResultData({
      // Override properties
      callback: 'runWordWrap',
      start: startIndex,
      // Next start index
      padding: this.wrapPadding,
      letterSpacing: letterSpacing,
      maxLines: maxLines,
      hAlign: hAlign,
      vAlign: vAlign,
      // Specific properties
      ascent: ascent,
      lineHeight: lineHeight,
      wrapWidth: wrapWidth,
      charWrap: charWrap
    });

    // Set all children to inactive
    var children = this.children;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      children[i].setActive(false);
    }

    // Layout children
    wrapWidth += letterSpacing;
    var startX = this.padding.left + this.wrapPadding.left,
      startY = this.padding.top + this.wrapPadding.top + ascent,
      // Start(baseline) from ascent, not 0
      x = startX,
      y = startY;
    var remainderWidth = wrapWidth,
      childIndex = startIndex,
      lastChildIndex = children.length;
    var resultChildren = result.children;
    var resultLines = result.lines,
      lastLine = [],
      lastLineWidth = 0,
      maxLineWidth = 0;
    var wordResult;
    var isPageBreakChar = false;
    while (childIndex < lastChildIndex) {
      wordResult = GetWord(children, childIndex, charWrap, wordResult);
      var word = wordResult.word;
      var charCnt = word.length;
      var wordWidth = wordResult.width + charCnt * letterSpacing;
      childIndex += charCnt;
      // Next line
      var isNewLineChar = IsNewLineChar(word[0]);
      isPageBreakChar = IsPageBreakChar(word[0]);
      var isControlChar = isNewLineChar || isPageBreakChar;
      if (remainderWidth < wordWidth || isControlChar) {
        // Add to result
        if (isControlChar) {
          var _char = word[0];
          _char.setActive().setPosition(x, y);
          resultChildren.push(_char);
          lastLine.push(_char);
        }

        // Move cursor
        x = startX;
        y += lineHeight;
        remainderWidth = wrapWidth;
        resultLines.push({
          children: lastLine,
          width: lastLineWidth
        });
        maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
        lastLineWidth = 0;
        lastLine = [];
        var isPageEnd = isPageBreakChar || !showAllLines && resultLines.length === maxLines; // Exceed maxLines
        if (isPageEnd) {
          break;
        } else if (isControlChar) {
          // Already add to result
          continue;
        }
      }
      remainderWidth -= wordWidth;
      lastLineWidth += wordWidth;
      for (var i = 0, cnt = word.length; i < cnt; i++) {
        var child = word[i];
        child.setActive();
        resultChildren.push(child);
        lastLine.push(child);
        if (child.renderable) {
          child.setPosition(x, y);
          x += child.outerWidth + letterSpacing;
        }
      }
    }
    if (lastLine.length > 0) {
      resultLines.push({
        children: lastLine,
        width: lastLineWidth
      });
      maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
    }
    result.start += resultChildren.length;
    result.isLastPage = !isPageBreakChar && result.start === lastChildIndex;
    result.maxLineWidth = maxLineWidth;
    result.linesHeight = resultLines.length * lineHeight;

    // Calculate size of game object
    var width = this.fixedWidth > 0 ? this.fixedWidth : result.maxLineWidth + paddingHorizontal;
    var height = this.fixedHeight > 0 ? this.fixedHeight : result.linesHeight + paddingVertical;

    // Size might be changed after wrapping
    var innerWidth = width - paddingHorizontal;
    var innerHeight = height - paddingVertical;
    AlignLines$1(result, innerWidth, innerHeight);

    // Resize
    this.setCanvasSize(width, height);

    // Set initial position
    for (var i = 0, cnt = resultChildren.length; i < cnt; i++) {
      var child = resultChildren[i];
      if (!child.renderable) {
        continue;
      }
      child.x0 = child.x;
      child.y0 = child.y;
    }
    return result;
  };

  var Merge$1 = Phaser.Utils.Objects.Merge;
  var RunWordWrap = function RunWordWrap(config) {
    if (config === undefined) {
      config = {};
    }
    return RunWordWrap$1.call(this, Merge$1(config, this.wrapConfig));
  };

  var AlignLines = function AlignLines(result, width, height) {
    var hAlign = result.hAlign,
      vAlign = result.vAlign;
    var offsetX, offsetY;
    var rtl = result.rtl;
    var lines = result.lines,
      lineWidth = result.lineWidth,
      linesWidth = result.linesWidth;
    switch (hAlign) {
      case 1: // center
      case 'center':
        offsetX = (width - linesWidth) / 2;
        break;
      case 2: // right
      case 'right':
        offsetX = width - linesWidth;
        break;
      default:
        // left
        offsetX = 0;
        break;
    }
    if (rtl) {
      offsetX += lineWidth;
    }
    for (var li = 0, lcnt = lines.length; li < lcnt; li++) {
      var line = lines[rtl ? lcnt - li - 1 : li];
      var children = line.children;
      var lineHeight = line.height;
      var lineVAlign = GetChildrenAlign(children);
      if (lineVAlign === undefined) {
        lineVAlign = vAlign;
      }
      switch (lineVAlign) {
        case 1: // center
        case 'center':
          offsetY = (height - lineHeight) / 2;
          break;
        case 2: // bottom
        case 'bottom':
          offsetY = height - lineHeight;
          break;
        default:
          // top
          offsetY = 0;
          break;
      }
      OffsetChildren(children, offsetX, offsetY);
      offsetX += lineWidth;
    }
  };

  var GetValue$3 = Phaser.Utils.Objects.GetValue;
  var RunVerticalWrap$1 = function RunVerticalWrap(config) {
    // Parse parameters
    var startIndex = GetValue$3(config, 'start', 0);
    SetPadding$1(this.wrapPadding, GetValue$3(config, 'padding', 0));
    var paddingVertical = this.padding.top + this.padding.bottom + this.wrapPadding.top + this.wrapPadding.bottom;
    var paddingHorizontal = this.padding.left + this.padding.right + this.wrapPadding.left + this.wrapPadding.right;
    var lineWidth = GetValue$3(config, 'lineWidth', undefined);
    var maxLines;
    if (lineWidth === undefined) {
      // Calculate lineWidth via maxLines, in fixedWidth mode
      maxLines = GetValue$3(config, 'maxLines', 0);
      if (this.fixedWidth > 0) {
        var innerWidth = this.fixedWidth - paddingHorizontal;
        lineWidth = innerWidth / maxLines;
      } else {
        lineWidth = 0;
      }
    } else {
      if (this.fixedWidth > 0) {
        // Calculate maxLines via lineWidth, in fixedWidth mode
        maxLines = GetValue$3(config, 'maxLines', undefined);
        if (maxLines === undefined) {
          var innerWidth = this.fixedWidth - paddingHorizontal;
          maxLines = Math.floor(innerWidth / lineWidth) + 1;
        }
      } else {
        maxLines = GetValue$3(config, 'maxLines', 0); // Default is show all lines
      }
    }

    var showAllLines = maxLines === 0;

    // Get fixedCharacterHeight
    var fixedCharacterHeight = GetValue$3(config, 'fixedCharacterHeight', undefined);
    if (fixedCharacterHeight === undefined) {
      var charPerLine = GetValue$3(config, 'charPerLine', undefined);
      if (charPerLine !== undefined) {
        var innerHeight = this.fixedHeight - paddingVertical;
        fixedCharacterHeight = Math.floor(innerHeight / charPerLine);
      }
    }

    // Get wrapHeight
    var wrapHeight = GetValue$3(config, 'wrapHeight', undefined);
    if (wrapHeight === undefined) {
      if (this.fixedHeight > 0) {
        wrapHeight = this.fixedHeight - paddingVertical;
      } else {
        wrapHeight = Infinity; // No word-wrap
      }
    }

    var letterSpacing = GetValue$3(config, 'letterSpacing', 0);
    var rtl = GetValue$3(config, 'rtl', true);
    var hAlign = GetValue$3(config, 'hAlign', rtl ? 2 : 0);
    var vAlign = GetValue$3(config, 'vAlign', 0);
    var result = CreateWrapResultData({
      // Override properties
      callback: 'runVerticalWrap',
      start: startIndex,
      // Next start index
      padding: this.wrapPadding,
      letterSpacing: letterSpacing,
      maxLines: maxLines,
      hAlign: hAlign,
      vAlign: vAlign,
      // Specific properties
      lineWidth: lineWidth,
      fixedCharacterHeight: fixedCharacterHeight,
      wrapHeight: wrapHeight,
      rtl: rtl
    });

    // Set all children to active
    var children = this.children;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      children[i].setActive(false);
    }

    // Layout children
    wrapHeight += letterSpacing;
    var startX = this.padding.left + this.wrapPadding.left,
      // Reset x of each character in AlignLines method
      startY = this.padding.top + this.wrapPadding.top,
      x = startX,
      y = startY;
    var remainderHeight = wrapHeight,
      childIndex = startIndex,
      lastChildIndex = children.length;
    var resultChildren = result.children;
    var resultLines = result.lines,
      lastLine = [],
      lastLineHeight = 0,
      maxLineHeight = 0;
    while (childIndex < lastChildIndex) {
      // Append non-typeable child directly
      var child = children[childIndex];
      childIndex++;
      if (!child.renderable) {
        child.setActive();
        resultChildren.push(child);
        lastLine.push(child);
        continue;
      }
      var childHeight = (fixedCharacterHeight !== undefined ? fixedCharacterHeight : child.height) + letterSpacing;
      // Next line
      var isNewLineChar = IsNewLineChar(child);
      var isPageBreakChar = IsPageBreakChar(child);
      var isControlChar = isNewLineChar || isPageBreakChar;
      if (remainderHeight < childHeight || isControlChar) {
        // Add to result
        if (isNewLineChar) {
          child.setActive().setPosition(x, y).setOrigin(0.5);
          resultChildren.push(child);
          lastLine.push(child);
        }

        // Move cursor
        x = startX;
        y = startY;
        remainderHeight = wrapHeight;
        resultLines.push({
          children: lastLine,
          height: lastLineHeight
        });
        maxLineHeight = Math.max(maxLineHeight, lastLineHeight);
        lastLineHeight = 0;
        lastLine = [];
        var isPageEnd = isPageBreakChar || !showAllLines && resultLines.length === maxLines; // Exceed maxLines
        if (isPageEnd) {
          break;
        } else if (isControlChar) {
          // Already add to result                
          continue;
        }
      }
      remainderHeight -= childHeight;
      lastLineHeight += childHeight;
      child.setActive().setPosition(x, y).setOrigin(0.5);
      resultChildren.push(child);
      lastLine.push(child);
      y += childHeight;
    }
    if (lastLine.length > 0) {
      resultLines.push({
        children: lastLine,
        height: lastLineHeight
      });
      maxLineHeight = Math.max(maxLineHeight, lastLineHeight);
    }
    result.start += resultChildren.length;
    result.isLastPage = result.start === lastChildIndex;
    result.maxLineHeight = maxLineHeight;
    result.linesWidth = resultLines.length * lineWidth;

    // Calculate size of game object
    var width = this.fixedWidth > 0 ? this.fixedWidth : result.linesWidth + paddingHorizontal;
    var height = this.fixedHeight > 0 ? this.fixedHeight : result.maxLineHeight + paddingVertical;

    // Size might be changed after wrapping
    var innerWidth = width - paddingHorizontal;
    var innerHeight = height - paddingVertical;
    AlignLines(result, innerWidth, innerHeight);

    // Resize
    this.setCanvasSize(width, height);

    // Set initial position
    for (var i = 0, cnt = resultChildren.length; i < cnt; i++) {
      var child = resultChildren[i];
      if (!child.renderable) {
        continue;
      }
      child.x0 = child.x;
      child.y0 = child.y;
    }
    return result;
  };

  var Merge = Phaser.Utils.Objects.Merge;
  var RunVerticalWrap = function RunVerticalWrap(config) {
    if (config === undefined) {
      config = {};
    }
    return RunVerticalWrap$1.call(this, Merge(config, this.wrapConfig));
  };

  var GetValue$2 = Phaser.Utils.Objects.GetValue;
  var RunWrap = function RunWrap(config) {
    var wrapCallback = GetValue$2(this.wrapConfig, 'callback');
    if (!wrapCallback) {
      wrapCallback = GetValue$2(config, 'callback', this.runWordWrap);
    }
    if (typeof wrapCallback === 'string') {
      wrapCallback = this[wrapCallback];
    }
    return wrapCallback.call(this, config);
  };

  var SetAlignMethods = {
    setVAlign: function setVAlign(align) {
      this.wrapConfig.vAlign = align;
      return this;
    },
    setHAlign: function setHAlign(align) {
      this.wrapConfig.hAlign = align;
      return this;
    }
  };

  var SetTextOXYMethods = {
    setTextOX: function setTextOX(ox) {
      if (ox === this._textOX) {
        return this;
      }
      this._textOX = ox;
      return this;
    },
    setTextOY: function setTextOY(oy) {
      if (oy === this._textOY) {
        return this;
      }
      this._textOY = oy;
      return this;
    },
    setTextOXY: function setTextOXY(ox, oy) {
      if (ox === this._textOX && oy === this._textOY) {
        return;
      }
      this._textOX = ox;
      this._textOY = oy;
      return this;
    },
    addTextOX: function addTextOX(incX) {
      this.setTextOX(this._textOX + incX);
      return this;
    },
    addTextOY: function addTextOY(incY) {
      this.setTextOY(this._textOY + incY);
      return this;
    },
    addTextOXY: function addTextOXY(incX, incY) {
      this.setTextOXY(this._textOX + incX, this._textOY + incY);
      return this;
    }
  };

  var RenderContent = function RenderContent() {
    this.clear();
    this.setCanvasSize(this.width, this.height);
    if (this.background.active) {
      this.background.render();
    }
    var child;
    for (var i = 0, cnt = this.children.length; i < cnt; i++) {
      child = this.children[i];
      if (child.active) {
        child.render();
      }
    }
    if (this.innerBounds.active) {
      this.innerBounds.render();
    }
  };

  var ForEachChild = function ForEachChild(callback, scope, activeOnly) {
    if (activeOnly === undefined) {
      activeOnly = true;
    }
    var children = this.children;
    var childIndex = 0;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var child = children[i];
      if (activeOnly && !child.active) {
        continue;
      }
      var isBreak;
      if (scope) {
        isBreak = callback.call(this, child, childIndex, children);
      } else {
        isBreak = callback(child, childIndex, children);
      }
      childIndex++;
      if (isBreak) {
        break;
      }
    }
    return this;
  };

  var ForEachRenderableChild = function ForEachRenderableChild(callback, scope, activeOnly) {
    if (activeOnly === undefined) {
      activeOnly = true;
    }
    var children = this.children;
    var childIndex = 0;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var child = children[i];
      if (activeOnly && !child.active) {
        continue;
      }
      if (child.renderable && !child.removed) {
        var isBreak;
        if (scope) {
          isBreak = callback.call(this, child, childIndex, children);
        } else {
          isBreak = callback(child, childIndex, children);
        }
        childIndex++;
        if (isBreak) {
          break;
        }
      }
    }
    return this;
  };

  var ForEachCharChild = function ForEachCharChild(callback, scope, activeOnly) {
    if (activeOnly === undefined) {
      activeOnly = true;
    }
    var children = this.children;
    var charIndex = 0;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var child = children[i];
      if (activeOnly && !child.active) {
        continue;
      }
      if (IsChar(child) && !child.removed) {
        var isBreak;
        if (scope) {
          isBreak = callback.call(this, child, charIndex, children);
        } else {
          isBreak = callback(child, charIndex, children);
        }
        charIndex++;
        if (isBreak) {
          break;
        }
      }
    }
    return this;
  };

  var GetChildren = function GetChildren() {
    return this.children;
  };

  var GetAll = Phaser.Utils.Array.GetAll;
  var GetActiveChildren = function GetActiveChildren() {
    return GetAll(this.children, 'active', true);
  };

  var GetCharChildren = function GetCharChildren(activeOnly, out) {
    if (out === undefined) {
      out = [];
    }
    this.forEachCharChild(function (child) {
      out.push(child);
    }, undefined, activeOnly);
    return out;
  };

  var GetLastAppendedChildren = function GetLastAppendedChildren() {
    return this.lastAppendedChildren;
  };

  var GetBobCenterPosition = function GetBobCenterPosition(bob, offsetX, offsetY, out) {
    if (typeof offsetX !== 'number') {
      out = offsetX;
      offsetX = 0;
      offsetY = 0;
    }
    var bobX = bob.drawCenterX + offsetX;
    var bobY = bob.drawCenterY + offsetY;
    return BobPositionToCanvasPosition(bob, bobX, bobY, out);
  };

  var GetDistance = Phaser.Math.Distance.BetweenPointsSquared;
  var GetNearestChild = function GetNearestChild(canvasX, canvasY) {
    var pointA = {
      x: canvasX,
      y: canvasY
    };
    var minDistance = Infinity;
    var nearestChild = null;
    this.forEachRenderableChild(function (child) {
      var distance = GetDistance(pointA, GetBobCenterPosition(child, true));
      if (minDistance > distance) {
        minDistance = distance;
        nearestChild = child;
      }
    });
    return nearestChild;
  };

  var GetCharWorldPosition = function GetCharWorldPosition(child, offsetX, offsetY, out) {
    if (typeof child === 'number') {
      child = this.getCharChild(child, true);
    }
    return GetBobWorldPosition(this, child, offsetX, offsetY, out);
  };

  var SetToMinSize = function SetToMinSize() {
    var children = this.children;
    var maxX = 0,
      maxY = 0;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var child = children[i];
      if (!child.renderable || !child.active || !child.visible) {
        continue;
      }
      var x0 = child.x0 !== undefined ? child.x0 : child.x;
      var y0 = child.y0 !== undefined ? child.y0 : child.y;
      maxX = Math.max(maxX, x0);
      maxY = Math.max(maxY, y0);
    }
    var width = maxX + this.padding.left + this.padding.right + this.wrapPadding.left + this.wrapPadding.right;
    var height = maxY + this.padding.top + this.padding.bottom + this.wrapPadding.top + this.wrapPadding.bottom;

    // Ignore fixedWidth, and fixedHeight
    if (this.width !== width || this.height !== height) {
      this.dirty = true;
      this.setCanvasSize(width, height);
    }
    return this;
  };

  var GetCharChildIndex = function GetCharChildIndex(charIndex, activeOnly) {
    if (activeOnly === undefined) {
      activeOnly = true;
    }
    var children = this.children;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var child = children[i];
      if (activeOnly && !child.active) {
        continue;
      }
      if (IsChar(child) && !child.removed) {
        if (charIndex === 0) {
          return i;
        } else {
          charIndex--;
        }
      }
    }
    return undefined;
  };

  var GetCharChild = function GetCharChild(charIndex, activeOnly) {
    if (activeOnly === undefined) {
      activeOnly = true;
    }
    var children = this.children;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var child = children[i];
      if (activeOnly && !child.active) {
        continue;
      }
      if (IsChar(child) && !child.removed) {
        if (charIndex === 0) {
          return child;
        } else {
          charIndex--;
        }
      }
    }
    return undefined;
  };

  var GetCharIndex = function GetCharIndex(childIndex, activeOnly) {
    if (typeof childIndex !== 'number') {
      childIndex = this.children.indexOf(childIndex);
      if (childIndex < 0) {
        return null;
      }
    }
    if (activeOnly === undefined) {
      activeOnly = true;
    }
    var children = this.children;
    if (childIndex >= children.length) {
      childIndex = children.length;
    }
    var charIndex = 0;
    for (var i = 0; i < childIndex; i++) {
      var child = children[i];
      if (activeOnly && !child.active) {
        continue;
      }
      if (IsChar(child) && !child.removed) {
        charIndex++;
      }
    }
    return charIndex;
  };

  var SetChildrenInteractiveEnable = function SetChildrenInteractiveEnable(enable) {
    if (enable === undefined) {
      enable = true;
    }
    if (this.childrenInteractiveEnable !== enable) {
      this.lastOverChild = null;
    }
    this.childrenInteractiveEnable = enable;
    return this;
  };

  var GetFirstChildContains = function GetFirstChildContains(children, x, y) {
    var children = children;
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var child = children[i];
      if (!child.active || !child.renderable) {
        continue;
      }
      if (child.contains(x, y)) {
        return child;
      }
    }
    return null;
  };

  var SetChildrenInteractive = function SetChildrenInteractive() {
    this.on('pointerdown', OnPointerDown, this).on('pointerdown', OnPointerUp, this).on('pointermove', OnPointOverOut, this).on('pointerover', OnPointOverOut, this).on('pointerout', function (pointer, event) {
      OnPointOverOut.call(this, pointer, null, null, event);
    }, this);
    return this;
  };
  var OnPointerDown = function OnPointerDown(pointer, localX, localY, event) {
    if (!this.childrenInteractiveEnable) {
      return;
    }
    var child = GetFirstChildContains(this.children, localX, localY);
    if (!child) {
      return;
    }
    this.emit('child.pointerdown', child, pointer, localX, localY, event);
  };
  var OnPointerUp = function OnPointerUp(pointer, localX, localY, event) {
    if (!this.childrenInteractiveEnable) {
      return;
    }
    var child = GetFirstChildContains(this.children, localX, localY);
    if (!child) {
      return;
    }
    this.emit('child.pointerup', child, pointer, localX, localY, event);
  };
  var OnPointOverOut = function OnPointOverOut(pointer, localX, localY, event) {
    if (!this.childrenInteractiveEnable) {
      return;
    }
    if (localX === null) {
      // Case of pointerout
      if (this.lastOverChild !== null) {
        this.emit('child.pointerout', this.lastOverChild, pointer, localX, localY, event);
        this.lastOverChild = null;
      }
      return;
    }
    var child = GetFirstChildContains(this.children, localX, localY);
    if (child === this.lastOverChild) {
      return;
    }
    if (this.lastOverChild !== null) {
      this.emit('child.pointerout', this.lastOverChild, pointer, localX, localY, event);
    }
    if (child !== null) {
      this.emit('child.pointerover', child, pointer, localX, localY, event);
    }
    this.lastOverChild = child;
  };

  var GameObject = Phaser.GameObjects.GameObject;
  var SetInteractive = function SetInteractive(hitArea, hitAreaCallback, dropZone) {
    var isInteractived = !!this.input;
    GameObject.prototype.setInteractive.call(this, hitArea, hitAreaCallback, dropZone);
    if (!isInteractived) {
      SetChildrenInteractive.call(this);
    }
    return this;
  };

  var BringToTop = Phaser.Utils.Array.BringToTop;
  var SendToBack = Phaser.Utils.Array.SendToBack;
  var MoveUp = Phaser.Utils.Array.MoveUp;
  var MoveDown = Phaser.Utils.Array.MoveDown;
  var MoveAbove = Phaser.Utils.Array.MoveAbove;
  var MoveBelow = Phaser.Utils.Array.MoveBelow;
  var MoveChildMethods = {
    moveChildToFist: function moveChildToFist(child) {
      SendToBack(this.children, child);
      return this;
    },
    moveChildToLast: function moveChildToLast(child) {
      BringToTop(this.children, child);
      return this;
    },
    movechildUp: function movechildUp(child) {
      MoveUp(this.children, child);
      return this;
    },
    movechildDown: function movechildDown(child) {
      MoveDown(this.children, child);
      return this;
    },
    movechildAbove: function movechildAbove(child, baseChild) {
      MoveAbove(this.children, child, baseChild);
      return this;
    },
    movechildBelow: function movechildBelow(child, baseChild) {
      MoveBelow(this.children, child, baseChild);
      return this;
    }
  };

  var BackgroundMethods = {
    setBackgroundColor: function setBackgroundColor(color, color2, isHorizontalGradient) {
      this.background.setColor(color, color2, isHorizontalGradient);
      return this;
    },
    setBackgroundStroke: function setBackgroundStroke(color, lineWidth) {
      this.background.setStroke(color, lineWidth);
      return this;
    },
    setBackgroundCornerRadius: function setBackgroundCornerRadius(radius, iteration) {
      this.background.setCornerRadius(radius, iteration);
      return this;
    }
  };

  var InnerBoundsMethods = {
    setInnerBoundsColor: function setInnerBoundsColor(color, color2, isHorizontalGradient) {
      this.innerBounds.setColor(color, color2, isHorizontalGradient);
      return this;
    },
    setInnerBoundsStroke: function setInnerBoundsStroke(color, lineWidth) {
      this.innerBounds.setStroke(color, lineWidth);
      return this;
    }
  };

  var Methods = {
    setFixedSize: SetFixedSize,
    setPadding: SetPadding,
    getPadding: GetPadding,
    modifyTextStyle: ModifyTextStyle,
    modifyDefaultTextStyle: ModifyDefaultTextStyle,
    resetTextStyle: ResetTextStyle,
    setTestString: SetTestString,
    removeChild: RemoveChild,
    removeChildren: RemoveChildren,
    popChild: PopChild,
    clearContent: ClearContent,
    addChild: AddChild,
    createCharChild: CreateCharChild,
    createCharChildren: CreateCharChildren,
    setText: SetText,
    appendText: AppendText,
    insertText: InsertText,
    removeText: RemoveText,
    getText: GetText,
    createImageChild: CreateImageChild,
    appendImage: AppendImage,
    createDrawerChild: CreateDrawerChild,
    appendDrawer: AppendDrawer,
    createSpaceChild: CreateSpaceChild,
    appendSpace: AppendSpace,
    createCommandChild: CreateCommandChild,
    appendCommand: AppendCommand,
    setWrapConfig: SetWrapConfig,
    runWordWrap: RunWordWrap,
    runVerticalWrap: RunVerticalWrap,
    runWrap: RunWrap,
    renderContent: RenderContent,
    forEachChild: ForEachChild,
    forEachRenderableChild: ForEachRenderableChild,
    forEachCharChild: ForEachCharChild,
    getChildren: GetChildren,
    getActiveChildren: GetActiveChildren,
    getCharChildren: GetCharChildren,
    getLastAppendedChildren: GetLastAppendedChildren,
    getNearestChild: GetNearestChild,
    getCharWorldPosition: GetCharWorldPosition,
    setToMinSize: SetToMinSize,
    getCharChildIndex: GetCharChildIndex,
    getCharChild: GetCharChild,
    getCharIndex: GetCharIndex,
    setChildrenInteractiveEnable: SetChildrenInteractiveEnable,
    setInteractive: SetInteractive
  };
  Object.assign(Methods, MoveChildMethods, BackgroundMethods, InnerBoundsMethods, SetAlignMethods, SetTextOXYMethods);

  var GetFastValue = Phaser.Utils.Objects.GetFastValue;
  var Pools = {};
  var PoolManager = /*#__PURE__*/function () {
    function PoolManager(config) {
      _classCallCheck(this, PoolManager);
      this.pools = GetFastValue(config, 'pools', Pools);
    }
    _createClass(PoolManager, [{
      key: "free",
      value: function free(bob) {
        if (!this.pools) {
          return this;
        }
        var bobType = bob.type;
        if (!this.pools.hasOwnProperty(bobType)) {
          this.pools[bobType] = new Stack();
        }
        this.pools[bobType].push(bob);
        bob.onFree();
        return this;
      }
    }, {
      key: "freeMultiple",
      value: function freeMultiple(arr) {
        if (!this.pools) {
          return this;
        }
        for (var i = 0, cnt = arr.length; i < cnt; i++) {
          this.free(arr[i]);
        }
        return this;
      }
    }, {
      key: "allocate",
      value: function allocate(bobType) {
        if (!this.pools || !this.pools.hasOwnProperty(bobType)) {
          return null;
        }
        return this.pools[bobType].pop();
      }
    }]);
    return PoolManager;
  }();

  var IsPlainObject = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$1 = Phaser.Utils.Objects.GetValue;
  var DynamicText = /*#__PURE__*/function (_Canvas) {
    _inherits(DynamicText, _Canvas);
    var _super = _createSuper(DynamicText);
    function DynamicText(scene, x, y, fixedWidth, fixedHeight, config) {
      var _this;
      _classCallCheck(this, DynamicText);
      if (IsPlainObject(x)) {
        config = x;
        x = GetValue$1(config, 'x', 0);
        y = GetValue$1(config, 'y', 0);
        fixedWidth = GetValue$1(config, 'width', 0);
        fixedHeight = GetValue$1(config, 'height', 0);
      } else if (IsPlainObject(fixedWidth)) {
        config = fixedWidth;
        fixedWidth = GetValue$1(config, 'width', 0);
        fixedHeight = GetValue$1(config, 'height', 0);
      }
      var width = fixedWidth === 0 ? 1 : fixedWidth;
      var height = fixedHeight === 0 ? 1 : fixedHeight;
      _this = _super.call(this, scene, x, y, width, height);
      _this.type = 'rexDynamicText';
      _this.autoRound = true;
      _this.padding = SetPadding$1();
      _this.wrapPadding = SetPadding$1();
      var textStyleConfig = GetValue$1(config, 'style', undefined);
      _this.defaultTextStyle = new TextStyle(null, textStyleConfig);
      _this.textStyle = _this.defaultTextStyle.clone();
      _this.setTestString(GetValue$1(config, 'testString', '|MÉqgy'));
      _this._textOX = 0;
      _this._textOY = 0;
      _this.background = new Background(_assertThisInitialized(_this), GetValue$1(config, 'background', undefined));
      _this.innerBounds = new InnerBounds(_assertThisInitialized(_this), GetValue$1(config, 'innerBounds', undefined));
      _this.children = [];
      _this.lastAppendedChildren = [];
      _this.lastOverChild = null;
      _this.poolManager = new PoolManager(config);
      _this.setFixedSize(fixedWidth, fixedHeight);
      _this.setPadding(GetValue$1(config, 'padding', 0));
      _this.setWrapConfig(GetValue$1(config, 'wrap', undefined));
      _this.setChildrenInteractiveEnable(GetValue$1(config, 'childrenInteractive', false));
      var text = GetValue$1(config, 'text', undefined);
      if (text) {
        _this.setText(text);
      }
      return _this;
    }
    _createClass(DynamicText, [{
      key: "updateTexture",
      value: function updateTexture() {
        this.renderContent();
        _get(_getPrototypeOf(DynamicText.prototype), "updateTexture", this).call(this);
        return this;
      }
    }, {
      key: "text",
      get: function get() {
        return this.getText(true);
      },
      set: function set(value) {
        this.setText(value);
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        this.setFixedSize(width, height);
        return this;
      }
    }, {
      key: "textOX",
      get: function get() {
        return this._textOX;
      },
      set: function set(value) {
        this.setTextOX(value);
      }
    }, {
      key: "textOY",
      get: function get() {
        return this._textOY;
      },
      set: function set(value) {
        this.setTextOY(value);
      }
    }]);
    return DynamicText;
  }(Canvas);
  Object.assign(DynamicText.prototype, Methods);

  var BitmapTextKlass = Phaser.GameObjects.BitmapText;
  var IsBitmapTextGameObject = function IsBitmapTextGameObject(gameObject) {
    return gameObject instanceof BitmapTextKlass;
  };

  var TextKlass = Phaser.GameObjects.Text;
  var IsTextGameObject = function IsTextGameObject(gameObject) {
    return gameObject instanceof TextKlass;
  };

  var TextRunWidthWrap = function TextRunWidthWrap(textObject) {
    var RunWidthWrap = function RunWidthWrap(width) {
      var padding = textObject.padding;
      var wrapWidth = width - padding.left - padding.right;
      var style = textObject.style;
      if (IsTextGameObject(textObject)) {
        style.wordWrapWidth = wrapWidth;
        style.maxLines = 0;
      } else {
        // BBCode text, Tag text
        if (style.wrapMode === 0) {
          // Turn no-wrap to word-wrap
          style.wrapMode = 1;
        }
        style.wrapWidth = wrapWidth;
        style.maxLines = 0;
      }
      style.fixedWidth = width;
      style.fixedHeight = 0;
      textObject.updateText(); // Redraw text

      textObject.minHeight = textObject.height;
      return textObject;
    };
    return RunWidthWrap;
  };

  var DynamicTextRunWidthWrap = function DynamicTextRunWidthWrap(textObject) {
    var RunWidthWrap = function RunWidthWrap(width) {
      textObject.setFixedSize(width, 0).runWordWrap();
      textObject.minHeight = textObject.height;
      return textObject;
    };
    return RunWidthWrap;
  };

  var BitmapTextRunWidthWrap = function BitmapTextRunWidthWrap(textObject) {
    var RunWidthWrap = function RunWidthWrap(width) {
      textObject.setMaxWidth(width);
      textObject.minHeight = textObject.height;
      return textObject;
    };
    return RunWidthWrap;
  };

  var IsDynamicTextGameObject = function IsDynamicTextGameObject(gameObject) {
    return gameObject instanceof DynamicText;
  };
  var WrapExpandText = function WrapExpandText(textObject, minWidth) {
    if (minWidth === undefined) {
      minWidth = 0;
    }
    textObject._minWidth = minWidth;
    textObject.runWidthWrap = IsDynamicTextGameObject(textObject) ? DynamicTextRunWidthWrap(textObject) : IsBitmapTextGameObject(textObject) ? BitmapTextRunWidthWrap(textObject) : TextRunWidthWrap(textObject);
    return textObject;
  };

  var CreateImage = function CreateImage(scene, config) {
    var gameObject = new StatesImage(scene, config);
    scene.add.existing(gameObject);
    return gameObject;
  };

  var GetValue = Phaser.Utils.Objects.GetValue;
  var BuildLabelConfig = function BuildLabelConfig(scene, config, creators) {
    config = config ? DeepClone(config) : {};
    var createBackground = GetValue(creators, 'background', CreateBackground);
    var createText = GetValue(creators, 'text', CreateText);
    var createIcon = GetValue(creators, 'icon', CreateImage);
    var createAction = GetValue(creators, 'action', CreateImage);
    if (createBackground) {
      config.background = createBackground(scene, config.background);
    } else {
      delete config.background;
    }
    if (createText) {
      var wrapText = GetValue(config, 'wrapText', false);
      if (wrapText) {
        if (wrapText === true) {
          wrapText = 'word';
        }
        SetValue(config, 'text.wrap.mode', wrapText);
        config.expandTextWidth = true;
      }
      config.text = createText(scene, config.text);
      if (wrapText) {
        config.text = WrapExpandText(config.text);
      }
    } else {
      delete config.text;
    }
    if (createIcon && config.icon !== null) {
      config.icon = createIcon(scene, config.icon);
    } else {
      delete config.icon;
    }
    if (createAction && config.action !== null) {
      config.action = createAction(scene, config.action);
    } else {
      delete config.action;
    }
    return config;
  };

  var SimpleLabel = /*#__PURE__*/function (_Label) {
    _inherits(SimpleLabel, _Label);
    var _super = _createSuper(SimpleLabel);
    function SimpleLabel(scene, config, creators) {
      var _this;
      _classCallCheck(this, SimpleLabel);
      config = BuildLabelConfig(scene, config, creators);
      _this = _super.call(this, scene, config);
      _this.type = 'rexSimpleLabel';
      return _this;
    }
    _createClass(SimpleLabel, [{
      key: "setActiveState",
      value: function setActiveState(enable) {
        RunMethod(this.getChildren(), 'setActiveState', enable);
        return this;
      }
    }, {
      key: "setHoverState",
      value: function setHoverState(enable) {
        RunMethod(this.getChildren(), 'setHoverState', enable);
        return this;
      }
    }, {
      key: "setDisableState",
      value: function setDisableState(enable) {
        RunMethod(this.getChildren(), 'setDisableState', enable);
        return this;
      }
    }]);
    return SimpleLabel;
  }(Label);
  var RunMethod = function RunMethod(children, methodName, enable) {
    for (var i = 0, cnt = children.length; i < cnt; i++) {
      var gameObject = children[i];
      if (gameObject && gameObject[methodName]) {
        gameObject[methodName](enable);
      }
    }
  };

  return SimpleLabel;

}));
