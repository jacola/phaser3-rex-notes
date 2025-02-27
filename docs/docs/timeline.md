## Introduction

Schedule commands to happen at specific times in the future, built-in object of phaser.

- Author: Richard Davey

## Usage

### Create timeline

```javascript
var timeline = scene.add.timeline([    
    {
        // Time condition
        at: 0,
        in:
        from:

        // Enable condition
        if(event) {
            // this: target parameter
            return true;  // false
        },


        set: {
            key: value,
        },
        
        tween: {
            targets: gameObject,
            alpha: 1,
            ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 1000,
            repeat: 0,            // -1: infinity
            yoyo: false
        },

        run(){ 
            // this: target parameter
        },

        sound: '',

        event: '',

        // target: this,

        // once: false,
        // stop: false,
    },

    // ...
])
```

- Time :
    - `at` : Absolute delay time after starting in ms.
    - `in` : Absolute delay time after current time in ms.
    - `from` : Relative delay time after previous event in ms
- Enable : 
    - `if` : A function. Invoking every tick, run actions when it returns `true`.
- Actions :
    - `set` : A key-value object of properties to set on the `target`.
    - `tween` : [tween config](tween.md#create-tween-task)
    - `run` : A function which will be called when the Event fires.
        ```javascript
        function() {
            // this: target parameter
        }
        ```
    - `sound` : 
        - A string : A key from the Sound Manager to play
        - A config object for a sound to play when the Event fires. 
            ```javascript
            {
                key,
                config
            }
            ```
            - `key` : The key of the sound to play
            - `config` : [config of playing sound](audio.md#configuration_1)
    - `event` : String-based event name to emit when the Event fires. The event is emitted from the Timeline instance.
        ```javascript
        timeline.on(eventName);
        ```
    - `target` : The scope (`this` object) with which to invoke the `run`.
- Control
    - `once` : If set, the Event will be removed from the Timeline when it fires.
    - `stop` : If set, the Timeline will stop and enter a complete state when this Event fires, even if there are other events after it.


The Timeline always starts paused.

### Steps of commands

For each tick, for each command :

1. Test time (`at`, `in`, `from`)
1. Test enable (`if`)
1. Run actions (`set`, `tween`, `run`, `sound`, `event`)
1. Control (`once`, `stop`)

### Start

```javascript
timeline.play();
```

Restart

```javascript
timeline.play(true);
```

### Stop

```javascript
timeline.stop();
```

### Pause / Resume

```javascript
timeline.pause();
// timeline.paused = true;
```

```javascript
timeline.resume();
// timeline.paused = false;
```

### Add command

```javascript
timeline.add(config);
```

or

```javascript
timeline.add([config0, config1, ...]);
```

### Clear all commands

```javascript
timeline.clear();
```

### Events

- On all commands are completed
    ```javascript
    timeline.on('complete', function(){

    });
    ```

### Other properties

- Timeline is currently playing, not paused or not complete.
    ```javascript
    var isPlaying = timeline.isPlaying()
    ```
- Is paused
    ```javascript
    var isPaused = timeline.paused;
    ```
- All commands are complete
    ```javascript
    var isCompleted = timeline.complete;
    ```

### Destroy

Also remove updating.

```javascript
timeline.destroy();
```
