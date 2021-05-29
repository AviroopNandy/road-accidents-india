import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.component";
import Devs from "./components/Devs/Devs.component";
import DataFrame1 from "./components/VisualIdioms/DataFrame1.component";
import DataFrame2 from "./components/VisualIdioms/DataFrame2.component";
import DataFrame3 from "./components/VisualIdioms/DataFrame3.component";
import DataFrame4 from "./components/VisualIdioms/DataFrame4.component";
import DataFrame5 from "./components/VisualIdioms/DataFrame5.component";
import DataFrame6 from "./components/VisualIdioms/DataFrame6.component";
import DataFrame7 from "./components/VisualIdioms/DataFrame7.component";
import DataFrame8 from "./components/VisualIdioms/DataFrame8.component";

import "./App.css";

function App() {
    return(
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={ Landing } />
                <Route path="/devs" component={ Devs } />
                <Route path="/dataframe-1" component={ DataFrame1 } />
                <Route path="/dataframe-2" component={ DataFrame2 } />
                <Route path="/dataframe-3" component={ DataFrame3 } />
                <Route path="/dataframe-4" component={ DataFrame4 } />
                <Route path="/dataframe-5" component={ DataFrame5 } />
                <Route path="/dataframe-6" component={ DataFrame6 } />
                <Route path="/dataframe-7" component={ DataFrame7 } />
                <Route path="/dataframe-8" component={ DataFrame8 } />
            </Switch>
        </React.Fragment>
    );
}

export default App;