import React from 'react';
import efstool_pdf from "../images/paper-img/Saddler_EFSTool_preprint.pdf";
import '../css/proceeding-block.css'
export const Conferences = () => {
  return (
    <dl class="conference">
        <dt>Conference Proceedings</dt>
        <dd>
        <ol>
            <li><span class="me">Saddler, Jonathan A.</span>, Peterson, Cole S., Sama, Sanjana, 
            Nagaraj, Shruthi, Baysal, Olga, Guerrouj, Latifa, and Sharif, Bonita.
            &quot;Studying Developer Reading Behavior on Stack Overflow 
            during API Summarization Tasks.&quot;
            in <span class="paper">Proceedings 
            of the 27th International Conference on Software Analysis, 
            Evolution, and Reenginering (SANER 2020).</span>&nbsp;
            London, Ontario, Canada, February 2020.<br/>
            Available: https://doi.org/10.1109/SANER48275.2020.9054848<br/></li>
            <li>
                <span class="me">Saddler, J. A.</span>, Peterson, C., Peachock, P. and Sharif, B. 
                &quot;Reading Behavior and Comprehension of C++ Source Code -- A Classroom Study,&quot; 
                in 
                <span class="paper">Proceedings of the 21st International Conference on Human Computer Interaction (HCII 2019).</span>&nbsp;
                Orlando, FL, USA: Springer, July 2019. pp. 597-616. [Online]<br/>
                Available: http://www.doi.org/10.1007/978-3-030-22419-6_43</li>
            <li>
                Mansoor, N., <span class="me">Saddler, J. A.</span>, Silva, B.,  
                Bagheri, H., Cohen, M. B., and Farritor, S. &quot;Modeling and Testing a Family of Surgical Robots: An Experience Report&quot;,  in <span class="paper">The 26th ACM Joint European  Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE)</span>&nbsp;
                , Nov. 2018. [Online]<br/>
                Available: https://doi.org/10.1145/3236024.3275534</li>
            <li>
                <span class="me">Saddler, J. A.</span>, Cohen, M. B. &quot;EventFlowSlicer: A tool for
                generating realistic goal-driven GUI tests,&quot; 
                in <span class="paper">Proceedings of the 32nd IEEE/ACM 
                International Conference on Automated Software Engineering ASE).</span>&nbsp; 
                IEEE, Oct. 2017, pp. 955-960. [Online]. <br/> 
                Available: http://dx.doi.org/10.1109/ASE.2017.8115711<br/> 
                <span class="preprint"><a href={efstool_pdf}>Preprint Available</a></span></li>
            
        </ol>
        </dd>
    </dl>
  )
};

export default Conferences;