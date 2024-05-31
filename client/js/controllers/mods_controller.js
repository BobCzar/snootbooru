"use strict";

const topNavigation = require("../models/top_navigation.js");
const NotFoundView = require("../views/mods.js");

class ModsController {
    constructor(path) {
        topNavigation.activate("");
        topNavigation.setTitle("Mods");
        this._ModsView = new Mods_view(path);
    }
}

module.exports = (router) => {
    router.enter(null, (ctx, next) => {
        ctx.controller = new ModsController(ctx.canonicalPath);
    });
};
