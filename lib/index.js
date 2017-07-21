var visit = require('rework-visit');

function rem2pxPlugin(size) {

    function rem2px(style) {
        visit(style, function (declarations) {
            declarations.forEach(function (d) {
                if (/\d*\.?\d+rem/.test(d.value)) {
                    d.value = d.value.replace(/(\d*\.?\d+)rem/g, function (match, m1) {
                        return m1 * size  + 'px';
                    });
                }
            });
        });
    }

    return rem2px;
}

module.exports = rem2pxPlugin;
