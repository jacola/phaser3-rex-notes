import GridSizer from '../gridsizer/GridSizer.js';
import AddSlider from './AddSlider.js';

const GetValue = Phaser.Utils.Objects.GetValue;

var CreateScrollableSizer = function (parent, config) {
    var scene = parent.scene;

    var scrollableSizer = new GridSizer(scene, {
        column: 3, row: 3,
        columnProportions: [0, 1, 0],
        rowProportions: [0, 1, 0]
    });

    switch (parent.scrollMode) {
        case 0:  // y
            AddSlider(parent, scrollableSizer, 'y', config);
            break;
        case 1:  // x
            AddSlider(parent, scrollableSizer, 'x', config);
            break;

        default: // xy
            AddSlider(parent, scrollableSizer, 'x', config);
            AddSlider(parent, scrollableSizer, 'y', config);
            break;
    }

    parent.addChildrenMap('child', child);

    return scrollableSizer;
}

export default CreateScrollableSizer;