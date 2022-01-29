import React, { Component } from 'react';

export class PetersonDwellTime extends Component {
  render() {
    return (
        <table>
            <thead>
                <tr>		<td>		Visits		</td>				<td>		All Subjects</td>				<td>		Expert		</td>				<td>		Novice		</td>		</tr>
            </thead>
            <tbody>
                <tr>		<td>		Class 		</td>				<td>		0.0061		</td>				<td>		0.0031		</td>				<td>		0.0069		</td>		</tr>
                <tr>		<td>		Class Attr.	</td>				<td>		0.0089		</td>				<td>		0.0041		</td>				<td>		0.0102		</td>		</tr>
                <tr>		<td>		Import		</td>				<td>		0.0255		</td>				<td>		0.0289		</td>				<td>		0.0245		</td>		</tr>
                <tr>		<td>		For			</td>				<td>		0.0362		</td>				<td>		0.0355		</td>				<td>		0.0364		</td>		</tr>
                <tr>		<td>		Method Sig.	</td>				<td>		0.0524		</td>				<td>		0.0448		</td>				<td>		0.0546		</td>		</tr>
                <tr>		<td>		Return		</td>				<td>		0.0755		</td>				<td>		0.0491		</td>				<td>		0.083		</td>		</tr>
                <tr>		<td>		Variable	</td>				<td>		0.179		</td>				<td>		0.1781		</td>				<td>		0.1793		</td>		</tr>
                <tr>		<td>		If			</td>				<td>		0.2343		</td>				<td>		0.2508		</td>				<td>		0.2296		</td>		</tr>
                <tr>		<td>		Method Call	</td>				<td>		0.3822		</td>				<td>		0.4056		</td>				<td>		0.3755		</td>		</tr>
            </tbody>
        </table>
    );
  }
}

export default PetersonDwellTime;
