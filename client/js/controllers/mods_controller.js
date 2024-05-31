"use strict";

const topNavigation = require("../models/top_navigation.js");
const ModsView = require("../views/mods_view.js");

class ModsController {
    constructor(path) {
        topNavigation.activate("mods");
        topNavigation.setTitle("Mods");
        this._modsView = new ModsView(path);
    }
}

module.exports = (router) => {
    router.enter(["mods"], (ctx, next) => {
        new ModsController();
    });
};