"use strict"

export const workoutTable = `
    <table class="workout">
        <thead>
            <tr>
                <th>date</th>
                <th>workout</th>
                <th>duration</th>
                <th></th>
            </tr>
        </thead>
        <tbody class="workout-entries"></tbody>
        <tbody>
            <tr class="workout-row add-row">
                <td colspan="4">
                    <span class="add-workout-btn">add</span>
                </td>
            </tr>
        </tbody>
    </table>
`;

export const workoutRow = `
    <tr class="workout-row">
        <td>
            <input type="date" class="workout-date">
        </td>
        <td>
            <select class="workout-activity">
                <option value="weight-lifting">Weight Lifting</option>
                <option value="running">Running</option>
                <option value="cycling">Cycling</option>
                <option value="treadmill">Treadmill</option>
                <option value="swimming">Swimming</option>
                <option value="hiking">Hiking</option>
            </select>
        </td>
        <td>
            <input type="number" class="workout-duration">
            <span class="duration-text">minutes</span>
        </td>
        <td>
            <button type="button" class="delete-btn">&times;</button>
        </td>
    </tr>
`;
