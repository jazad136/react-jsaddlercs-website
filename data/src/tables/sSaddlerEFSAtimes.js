import React from 'react';

const SaddlerEFSAtimes = () => { 
  return (
    <table>
      <thead>
        <caption>	Table 2: Cumulative Run Times	</caption>
        <caption>	From: 	Saddler, J. A. and Cohen, M. B. "EventFlowSlicer: Goal Based Test Case Generation for Graphical User Interfaces"</caption>
        <tr>	<th>	No.	</th>	<th>	Task	</th>	<th>	Application Name	</th>	<th>	Variant	</th>	<th>	EFS Time	</th>	<th>	HPRT Time	</th>	<th>	Difference	</th>	<th>	% Reduction	</th>	</tr>
        </thead>
        <tbody>
        <tr>	<td>	1	</td>	<td>	Format Text	</td>	<td>	TerpWord	</td>	<td>	M	</td>	<td>	9.2s	</td>	<td>	8s	</td>	<td>	-1.2s	</td>	<td>	-13.0%	</td>	</tr>
        <tr>	<td>	2	</td>	<td>	Format Text	</td>	<td>	TerpWord	</td>	<td>	MK	</td>	<td>	12.6s	</td>	<td>	107s	</td>	<td>	94.4s	</td>	<td>	88.2%	</td>	</tr>
        <tr>	<td>	3	</td>	<td>	Format Text	</td>	<td>	TerpWord	</td>	<td>	MKT	</td>	<td>	19s	</td>	<td>	11257s	</td>	<td>	11238s	</td>	<td>	99.8%	</td>	</tr>
        <tr>	<td>	4	</td>	<td>	Insert Hyperlink	</td>	<td>	TerpWord	</td>	<td>	M	</td>	<td>	6.6s	</td>	<td>	7s	</td>	<td>	0.4s	</td>	<td>	5.7%	</td>	</tr>
        <tr>	<td>	5	</td>	<td>	Insert Hyperlink	</td>	<td>	TerpWord	</td>	<td>	MK	</td>	<td>	9.2s	</td>	<td>	35s	</td>	<td>	25.8s	</td>	<td>	73.7%	</td>	</tr>
        <tr>	<td>	6	</td>	<td>	Insert Hyperlink	</td>	<td>	TerpWord	</td>	<td>	MKT	</td>	<td>	10.4s	</td>	<td>	295s	</td>	<td>	284.6s	</td>	<td>	96.5%	</td>	</tr>
        <tr>	<td>	7	</td>	<td>	Absolute Value	</td>	<td>	TerpWord	</td>	<td>	M	</td>	<td>	10s	</td>	<td>	16s	</td>	<td>	6s	</td>	<td>	37.5%	</td>	</tr>
        <tr>	<td>	8	</td>	<td>	Absolute Value	</td>	<td>	TerpWord	</td>	<td>	MK	</td>	<td>	12s	</td>	<td>	280s	</td>	<td>	268s	</td>	<td>	95.7%	</td>	</tr>
        <tr>	<td>	9	</td>	<td>	Absolute Value	</td>	<td>	TerpWord	</td>	<td>	MKT	</td>	<td>	18s	</td>	<td>	4254s	</td>	<td>	4236s	</td>	<td>	99.6%	</td>	</tr>
        <tr>	<td>	10	</td>	<td>	Insert Table	</td>	<td>	TerpWord	</td>	<td>	M	</td>	<td>	7.2s	</td>	<td>	4s	</td>	<td>	-3.2s	</td>	<td>	-44.4%	</td>	</tr>
        <tr>	<td>	11	</td>	<td>	Insert Table	</td>	<td>	TerpWord	</td>	<td>	MK	</td>	<td>	8s	</td>	<td>	23s	</td>	<td>	15	</td>	<td>	65.2%	</td>	</tr>
        <tr>	<td>	12	</td>	<td>	Insert Table	</td>	<td>	TerpWord	</td>	<td>	MKT	</td>	<td>	15s	</td>	<td>	45s	</td>	<td>	30s	</td>	<td>	66.7%	</td>	</tr>
        <tr>	<td>	13	</td>	<td>	Comment Indent	</td>	<td>	DrJava	</td>	<td>	-	</td>	<td>	5s	</td>	<td>	45s	</td>	<td>	40s	</td>	<td>	88.9%	</td>	</tr>
        <tr>	<td>	14	</td>	<td>	Search Options	</td>	<td>	DrJava	</td>	<td>	-	</td>	<td>	14.8s	</td>	<td>	261s	</td>	<td>	246.2s	</td>	<td>	94.3%	</td>	</tr>
        <tr>	<td>	15	</td>	<td>	Bold Center	</td>	<td>	TerpWord	</td>	<td>	-	</td>	<td>	8s	</td>	<td>	106s	</td>	<td>	98s	</td>	<td>	92.5%	</td>	</tr>
        <tr>	<td>	16	</td>	<td>	Compile File	</td>	<td>	DrJava	</td>	<td>	-	</td>	<td>	4.8s	</td>	<td>	N/A	</td>	<td>	N/A	</td>	<td>	N/A	</td>	</tr>
        <tr>	<td>	17	</td>	<td>	Commented Text	</td>	<td>	JEdit	</td>	<td>	TC	</td>	<td>	10.8s	</td>	<td>	N/A	</td>	<td>	N/A	</td>	<td>	N/A	</td>	</tr>
        <tr>	<td>	18	</td>	<td>	Commented Text	</td>	<td>	JEdit	</td>	<td>	BG	</td>	<td>	11.6s	</td>	<td>	N/A	</td>	<td>	N/A	</td>	<td>	N/A	</td>	</tr>
        <tr>	<td>	19	</td>	<td>	Commented Text	</td>	<td>	JEdit	</td>	<td>	FULL	</td>	<td>	19.6s	</td>	<td>	N/A	</td>	<td>	N/A	</td>	<td>	N/A	</td>	</tr>
        <tr>	<td>	20	</td>	<td>	Four Paragraphs	</td>	<td>	JEdit	</td>	<td>	W	</td>	<td>	15.8s	</td>	<td>	N/A	</td>	<td>	N/A	</td>	<td>	N/A	</td>	</tr>
        <tr>	<td>	21	</td>	<td>	Four Paragraphs	</td>	<td>	JEdit	</td>	<td>	MD	</td>	<td>	10.4s	</td>	<td>	N/A	</td>	<td>	N/A	</td>	<td>	N/A	</td>	</tr>
        </tbody>
    </table>
  );
};

export default SaddlerEFSAtimes;
