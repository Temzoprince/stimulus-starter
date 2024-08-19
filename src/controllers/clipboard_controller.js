// src/controllers/clipboard_controller.js

import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static classes = [ 'supported' ]
    static targets = [ 'source' ]

    connect() {
        if ( 'clipboard' in navigator) {
            this.element.classList.add(this.supportedClass)
        }
    }

    copy(event) {
        event.preventDefault()
        navigator.clipboard.writeText(this.sourceTarget.value)
    }
}