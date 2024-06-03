"use strict";

const views = require("../util/views.js");

const template = views.getTemplate("mods");

class ModsView {
    constructor(path) {
        this._hostNode = document.getElementById("content-holder");

        const sourceNode = template({ path: path });
        views.replaceContent(this._hostNode, sourceNode);
        views.syncScrollPosition();

        // Render the redirection message
        this.renderRedirectionMessage();
    }

    renderRedirectionMessage() {
        if (this._hostNode) {
            this._hostNode.innerHTML = `
                <div class="redirect-message">
                    <p>Hang on, you are being redirected to the mod repository!</p>
                </div>
            `;
        }
    }
}

module.exports = ModsView;