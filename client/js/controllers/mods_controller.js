"use strict";

const topNavigation = require("../models/top_navigation.js");
const ModsView = require("../views/mods_view.js");

class ModsController {
    constructor(section, subsection) {
        topNavigation.activate("mods");
        topNavigation.setTitle("Mods");
        this._modsView = new ModsView(section, subsection);

        // Redirect after a short delay to display the message first
        setTimeout(this.redirectToModsRepository, 2000); // 2 seconds delay
    }

    redirectToModsRepository() {
        // Redirect the user to the mods repository URL
        window.location.href = 'https://mods.snootbooru.com/';
    }
}

module.exports = (router) => {
    router.get("/mods", (req, res) => {
        console.log('Mods route entered');
        new ModsController();
        res.send();
    });
};