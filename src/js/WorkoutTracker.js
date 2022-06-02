import { workoutTable, workoutRow } from "./trackerElements";

class WorkoutTracker {
    constructor(tracker){
        this.tracker = tracker; 
        this.tracker.insertAdjacentHTML("afterbegin", WorkoutTracker.workoutTable())
        this.workoutEntries = [];
        this.getWorkoutEntries()
        this.addBtn = this.tracker.querySelector(".add-workout-btn");

        this.addBtn.addEventListener("click", () => {
            const date = new Date()
            const year = date.getFullYear()
            const month = (date.getMonth()+1).toString().padStart(2, "0")
            const day = date.getDay().toString().padStart(2, "0")

            this.addWorkoutEntry({
                date: `${year}/${month}/${day}`,
                activity: "weight-lifting",
                duration: 45
            })
        })
        this.tableEntries = this.tracker.querySelector(".workout-entries")
        this.updateWorkoutTable()
    }

    static workoutTable(){
        return workoutTable;
    };

    static workoutRow(){
        return workoutRow;
    };

    static entriesKey = "workoutEntries"

    getWorkoutEntries(){
        this.workoutEntries = JSON.parse(localStorage.getItem(WorkoutTracker.entriesKey) || "[]")
    };

    setWorkoutEntries(){
        localStorage.setItem(WorkoutTracker.entriesKey, JSON.stringify(this.workoutEntries))
    };

    addWorkoutEntry(data){
        this.workoutEntries.push(data)
        this.setWorkoutEntries()
        this.updateWorkoutTable()
    };

    updateWorkoutTable(){
        const addWorkout = workoutData => {
            const template = document.createElement("template")
            let workout = null;
           
            template.innerHTML = WorkoutTracker.workoutRow().trim()
            workout = template.content.firstElementChild;
           
            this.setInputValue(workout, workoutData);
            this.updateWorkoutData(workout, workoutData);
            this.tableEntries.appendChild(workout)
        };

        this.tableEntries.querySelectorAll(".workout-row").forEach(workout => {
            workout.remove()
        })

        this.workoutEntries.forEach(workoutEntry => {
            addWorkout(workoutEntry)
        })
    };

    setInputValue(workout, workoutData) {
        workout.querySelector(".workout-date").value = workoutData.date;
        workout.querySelector(".workout-activity").value = workoutData.activity;
        workout.querySelector(".workout-duration").value = workoutData.duration;
    };

    updateWorkoutData(workout, workoutData) {
        workout.querySelector(".workout-date").addEventListener("change", ({ target }) => {
            workoutData.date = target.value; 
            this.setWorkoutEntries();
        });
        workout.querySelector(".workout-activity").addEventListener("change", ({ target }) => {
            workoutData.activity = target.value;
            this.setWorkoutEntries();
        });
        workout.querySelector(".workout-duration").addEventListener("change", ({ target }) => {
            workoutData.duration = target.value;
            this.setWorkoutEntries();
        });
        workout.querySelector(".delete-btn").addEventListener("click", () => {
            this.deleteWorkoutEntry(workoutData);
        });
    };

    deleteWorkoutEntry(dataToDelete){
        let copyEntries = this.workoutEntries.filter(data => {
            return data !== dataToDelete;
        })
        this.workoutEntries = copyEntries;
        this.setWorkoutEntries()
        this.updateWorkoutTable()
    };
}

export default WorkoutTracker;