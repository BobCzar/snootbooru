"use strict";

const views = require("../util/views.js");

const template = views.getTemplate("mods");

class ModsView {
    constructor(path) {
        this._hostNode = document.getElementById("content-holder");

        const sourceNode = template({ path: path });
        views.replaceContent(this._hostNode, sourceNode);
        views.syncScrollPosition();
    }
}

module.exports = ModsView;
