"use strict"
import { qs } from "./utils";
import { workoutTable, workoutRow } from "./trackerElements.js"

class WorkoutTracker {
    constructor(tracker) {
        this.tracker = tracker;
        this.setTable()
        this.workoutEntries = [];
        this.getEntriesDataFromStorage()
        this.addBtn = this.setAddBtn()
        this.clickAddBtn()
        this.tableWorkoutEntries = this.setTableWorkoutEntries()
        this.updateWorkoutTable()
    }

    static entriesKey = "workout-entries";

    setEntriesDataToStorage() {
        localStorage.setItem(WorkoutTracker.entriesKey, JSON.stringify(this.workoutEntries))
    }

    getEntriesDataFromStorage() {
        this.workoutEntries = JSON.parse(localStorage.getItem(WorkoutTracker.entriesKey) || "[]")
    }

    setTable() {
        this.tracker.insertAdjacentHTML("afterbegin", workoutTable)
    }

    setAddBtn() {
        const addBtn = qs(this.tracker,".add-workout-btn")
        if (addBtn) return addBtn;
    }

    clickAddBtn() {
        this.addBtn.addEventListener("click", () => {
            const date = new Date();
            const year = date.getFullYear()
            const month = (date.getMonth() + 1).toString().padStart(2, "0")
            const day = date.getDay().toString().padStart(2, "0")

            this.addInititalWorkoutEntry({
                date: `${year}/${month}/${day}`,
                activity: "weight-lifting",
                duration: 45
            })
        })
    }

    addInititalWorkoutEntry(data) {
        this.workoutEntries.push(data)
        this.setEntriesDataToStorage()
        this.updateWorkoutTable()
    }

    setTableWorkoutEntries() {
        const tableWorkoutEntries = qs(this.tracker,".workout-entries")
        if (tableWorkoutEntries) return tableWorkoutEntries;
    }
    
    updateWorkoutTable() {
        const addWorkout = workoutEntryData => {
            const template = document.createElement("template")
            let workout = null;

            template.innerHTML = workoutRow.trim()
            workout = template.content.firstElementChild;

            this.setInputValue(workout, workoutEntryData)
            this.updateWorkoutData(workout, workoutEntryData)
            this.tableWorkoutEntries.appendChild(workout)
        }

        this.tableWorkoutEntries.querySelectorAll(".workout-row").forEach(row => row.remove())
        this.workoutEntries.forEach(entryData => addWorkout(entryData))
    }

    setInputValue(workout, workoutEntryData) {
        qs(workout,".workout-date").value = workoutEntryData.date;
        qs(workout,".workout-activity").value = workoutEntryData.activity;
        qs(workout,".workout-duration").value = workoutEntryData.duration;
    }

    updateWorkoutData(workout, data) {
        qs(workout, ".workout-date").addEventListener("change", ({ target }) => {
            data.date = target.value;
            this.setEntriesDataToStorage()
        })
        
        qs(workout, ".workout-activity").addEventListener("change", ({ target }) => {
            data.activity = target.value;
            this.setEntriesDataToStorage()
        })
        
        qs(workout, ".workout-duration").addEventListener("change", ({ target }) => {
            data.duration = target.value;
            this.setEntriesDataToStorage()
        })
        
        qs(workout,".delete-btn").addEventListener("click", ()=> this.deleteWorkoutEntry(data))
    }

    deleteWorkoutEntry(dataToDelete) {
        let copyOfEntries = this.workoutEntries.filter(entry => entry !== dataToDelete)
        this.workoutEntries = copyOfEntries;
        this.setEntriesDataToStorage()
        this.updateWorkoutTable()
    }
}

export default WorkoutTracker;


