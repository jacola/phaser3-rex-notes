import BehaviorTree from './BehaviorTree/BehaviorTree.js';
import Blackboard from './Blackboard/Blackboard.js';
import Composite from './Nodes/Composite.js';
import Decorator from './Nodes/Decorator.js';
import Action from './Nodes/Action.js';
import ObjectFactory from '../ObjectFactory.js';
import SetValue from '../../../utils/object/SetValue.js';


ObjectFactory.register('behaviorTree', function (config) {
    return new BehaviorTree(config);
});
ObjectFactory.register('blackboard', function (config) {
    return new Blackboard(config);
});

SetValue(window, 'RexPlugins.BehaviorTree.BehaviorTree', BehaviorTree);
SetValue(window, 'RexPlugins.BehaviorTree.Blackboard', Blackboard);
SetValue(window, 'RexPlugins.BehaviorTree.Composite', Composite);
SetValue(window, 'RexPlugins.BehaviorTree.Decorator', Decorator);
SetValue(window, 'RexPlugins.BehaviorTree.Action', Action);

export {
    BehaviorTree,
    Blackboard,
    Composite,
    Decorator,
    Action
};