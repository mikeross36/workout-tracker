import "../style/main.scss"
import WorkoutTracker from "./WorkoutTracker.js"

const selector = document.querySelector(".tracker")

const tracker = new WorkoutTracker(selector)

window.tracker = tracker;