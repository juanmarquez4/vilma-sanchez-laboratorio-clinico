import React from "react";
import ExamenesSection from '../components/ExamenesSection'

import data from "../utils/data";

const Examenes = () => {
    return(
       <>
        <ExamenesSection dataExamenes={data.examenes}/>
       </>
    )
};

export default Examenes;