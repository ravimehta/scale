// src/controllers/dropdown_controller.js
import { Controller } from "@hotwired/stimulus"

// import the enter leave functions
import { enter, leave } from "el-transition" 

export default class extends Controller {
  static targets = ["menu", "button"] 

  connect() {
    this.menuTarget.classList.add("hidden");
  }

  toggleMenu() {
    if(this.menuTarget.classList.contains('hidden')) {
      enter(this.menuTarget)
    } else {
      leave(this.menuTarget)
    }
    // this.menuTarget.classList.toggle('hidden')
  }

  hideMenu(event) {
    const buttonClicked = this.buttonTarget.contains(event.target)

    if (!buttonClicked) {
      leave(this.menuTarget)
    }
  }
}