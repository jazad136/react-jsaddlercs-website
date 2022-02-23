import React,{Fragment} from 'react';
import '../../css/proceeding-block.css'
import efstool_pdf from "../../images/paper-img/Saddler_EFSTool_preprint.pdf";
import ProceedingD from './ProceedingD'
import efstool_tab2 from '../../tablescsv/SaddlerEFSGtable2.csv'
import efstool_tab4 from '../../tablescsv/SaddlerEFSGtable4.csv'
export const ProceedingsD = () => {
  return (
    <Fragment>
        <h3>Conference Proceedings</h3>
        <ol>
          <ProceedingD 
          paperDoi="10.1109/SANER48275.2020.9054848"
          >
            <span className="me">Saddler, Jonathan A.</span>, Peterson, Cole S., Sama, Sanjana, 
              Nagaraj, Shruthi, Baysal, Olga, Guerrouj, Latifa, and Sharif, Bonita.
              &quot;Studying Developer Reading Behavior on Stack Overflow 
              during API Summarization Tasks.&quot;
              in <span className="paper">Proceedings 
              of the 27th International Conference on Software Analysis, 
              Evolution, and Reenginering (SANER 2020).</span>&nbsp;
              London, Ontario, Canada, Feb. 2020. [Online]
          </ProceedingD>
          <ProceedingD 
          paperDoi="10.1007/978-3-030-22419-6_43"
          >
            <span className="me">Saddler, J. A.</span>, Peterson, C., Peachock, P. and Sharif, B. 
                &quot;Reading Behavior and Comprehension of C++ Source Code -- A Classroom Study,&quot; 
                in <span className="paper">Proceedings of the 21st International Conference 
                on Human Computer Interaction (HCII 2019).</span>&nbsp;
                Orlando, FL, USA: Springer, July 2019. pp. 597-616. [Online]
          </ProceedingD>
          <ProceedingD 
          paperDoi="10.1145/3236024.3275534"
          >
            Mansoor, N., <span className="me">Saddler, J. A.</span>, Silva, B.,  
            Bagheri, H., Cohen, M. B., and Farritor, S. &quot;Modeling and Testing a Family of 
            Surgical Robots: An Experience Report&quot;,  
            in <span className="paper">The 26th ACM Joint European Software Engineering 
            Conference and Symposium on the Foundations 
            of Software Engineering (ESEC/FSE)</span>&nbsp;
            , Nov. 2018. [Online]
          </ProceedingD>
          <ProceedingD 
          paperDoi="10.1109/ASE.2017.8115711" 
          preprint={efstool_pdf}
          csvTables={[
              {
                'displayName': 'Table 2',
                'importName': efstool_tab2},
              {
                'displayName': 'Table 4',
                'importName': efstool_tab4
              }
          ]}
          >
            <span className="me">Saddler, J. A.</span>, Cohen, M. B. &quot;EventFlowSlicer: A tool for
              generating realistic goal-driven GUI tests,&quot; 
              in <span className="paper">Proceedings of the 32nd IEEE/ACM 
              International Conference on Automated Software Engineering ASE).</span>&nbsp; 
              IEEE, Oct. 2017, pp. 955-960. [Online].
          </ProceedingD>
        </ol>
    </Fragment>
  )
};

export default ProceedingsD;