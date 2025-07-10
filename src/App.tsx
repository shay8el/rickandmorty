import React, { FunctionComponent } from "react";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import { RickAndMorty } from "./RickAndMorty";

const Instructions = () => {
  return (
    <div className={"Instructions"}>
      <h1>Async operation with Rick & Morty</h1>
      <div style={{ width: "100%", display: "flex" }}>
        <details>
          <summary>Instructions</summary>
          <p>Task duration: 1 hour</p>
          <p>
            Create an app that allows you to fetch rick and morty charactor
            using <a href="https://rickandmortyapi.com/">rickandmortyapi.com</a>
          </p>

          <p>
            <b>Requirements</b>
            <ul>
              <li>Input box to insert numbers</li>
              <li>fetch button</li>
              <li>random buttom</li>
              <li>
                Box that shows the photo, name and location of the fecthed
                charactor
              </li>
              <li>The app should indicate loading while the request sent</li>
              <li>The input and button should be disabled while loading</li>
              <li>
                When the number currently in the input field has been
                successfully submitted - the button will be disabled
              </li>
            </ul>
            <b>Acceptence critiria </b>
            <ol>
              <li>Make the app work by the requirements - MUST</li>
              <li>Make the code look nice and clear</li>
              <li>Make the UI look nice</li>
              <li>NICE TO HAVE: implement cache for last 3 requests</li>
              <li>
                NICE TO HAVE2: impment ui box that allows you to query the
                latest 3 search from cache
              </li>
            </ol>
          </p>
        </details>
      </div>
    </div>
  );
};

const App: FunctionComponent = () => {
  return (
    <div className={"App"}>
      <Instructions />
      <RickAndMorty />
    </div>
  );
};

export default App;
