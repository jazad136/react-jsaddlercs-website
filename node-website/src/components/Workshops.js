import React from 'react';
import '../css/proceeding-block.css';
const Workshops = () => {
  return (
    <dl className="workshops">
      <dt>Workshop Proceedings</dt>
      <dd><ol>
      <li>
        Peterson, C. S., <span className="me">Saddler, J.</span>, Blascheck, T., and Sharif, B. 
        &quot;Visually Analyzing Students' Gaze on C++ Code Snippets,&quot; in 
        <span className="paper">Proceedings of the 6th International Workshop on 
        Eye Movements in Programming,</span>&nbsp; Montreal, Quebec, Canada, May 2019. pp. 18-25 [Online]<br/>
        Available: https://doi.org/10.1109/EMIP.2019.00011</li>
      <li>
        Peterson, C. S., Halavick, N. M., <span className="me">Saddler, J. A.</span>, and Sharif, B. 
        &quot;A Gaze-Based Exploratory Study on the Information Seeking Behavior of Developers on Stack Overflow&quot;, in 
        <span className="paper">CHI '19, Extended Abstracts of the SIGCHI Conference on Human Factors in Computing Systems.</span>&nbsp; 
        Glasgow, Scotland, May 2019. [Online]<br/>
        Available: https://doi.org/10.1145/3290607.3312801<br/>
        <span className="website"><a href="https://dl.acm.org/citation.cfm?id=3312801">Website available at: ACM DL</a></span></li>
       <li>
         <span className="me">Saddler, J. A.</span>, and Cohen, M.  B. 
         &quot;EventFlowSlicer: Goal Based Test Case	 Generation for Graphical User Interfaces,&quot; in
         <span className="paper">Proceedings of the 7th
         International Workshop on Automating Test Design, Selection,
         and Evaluation,</span>
         ser. A-TEST 2016. New York, NY, USA: ACM, 2016,
         pp. 8-15. [Online].<br/>
         Available: http://dx.doi.org/10.1145/2994291.2994293<br/>
         <span className="website"><a href="https://cse.unl.edu/~myra/artifacts/EventFlowSlicer/">Website Available</a></span></li>
      </ol></dd>
    </dl>
  );
};

export default Workshops;
