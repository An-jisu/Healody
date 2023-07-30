import { useState } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Family_main from "../routes/Family_main";
import Family_main_none from "../routes/Family_main_none";
import Family_invite from '../routes/Family_invite';
import Family_care_detail from '../routes/Family_care_detail';

const AppRouter = () => {
  const [isCreated, setIsCreated] = useState(true);
  
  return (
    <Router>
      <Routes>
        {isCreated ? (
          <Route exact path="/" element={<Family_main />} />
        ) : (
          <Route exact path="/" element={<Family_main_none />} />
        )}
        {isCreated && (
          <>
            <Route exact path="/Family_invite" element={<Family_invite />} />
            <Route exact path="/Family_care_detail" element={<Family_care_detail />} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default AppRouter;