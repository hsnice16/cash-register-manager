import React from "react";

export default function sectionThree({ noOfNotes }) {
  return (
    <div className="SectionThree">
      <h4>Return the Change</h4>
      <table>
        <tbody>
          <tr>
            <th>No. Of Notes</th>
            <td className="NotesValue">
              {noOfNotes[2000] === "" ? "" : noOfNotes[2000]}
            </td>
            <td className="NotesValue">
              {noOfNotes[500] === "" ? "" : noOfNotes[500]}
            </td>
            <td className="NotesValue">
              {noOfNotes[100] === "" ? "" : noOfNotes[100]}
            </td>
            <td className="NotesValue">
              {noOfNotes[20] === "" ? "" : noOfNotes[20]}
            </td>
            <td className="NotesValue">
              {noOfNotes[10] === "" ? "" : noOfNotes[10]}
            </td>
            <td className="NotesValue">
              {noOfNotes[5] === "" ? "" : noOfNotes[5]}
            </td>
            <td className="NotesValue">
              {noOfNotes[1] === "" ? "" : noOfNotes[1]}
            </td>
          </tr>
          <tr>
            <th>Note (₹)</th>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
