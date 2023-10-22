const SetTransform = Phaser.Renderer.Canvas.SetTransform;

var CanvasRenderer = function (renderer, src, camera, parentMatrix) {
    src.updateData();
    camera.addToRenderList(src);

    var ctx = renderer.currentContext;

    if (SetTransform(renderer, ctx, src, camera, parentMatrix)) {
        var dx = src._displayOriginX;
        var dy = src._displayOriginY;

        var shapes = src.geom,
            shape;
        for (var i = 0, cnt = shapes.length; i < cnt; i++) {
            shape = shapes[i];
            if (shape.visible) {
                shape.canvasRender(ctx, dx, dy);
            }
        }

        //  Restore the context saved in SetTransform
        ctx.restore();
    }
};

export default CanvasRenderer;
