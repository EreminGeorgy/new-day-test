
import React from "react";

import "./styles.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import { Button, Dialog, Classes } from "@blueprintjs/core";

//-------------------------------------------//
// Please read the attached comments.md      //
// file for more information about the task. //
//-------------------------------------------//

export default function App() {
  const [isOpen, setOpen] = React.useState(false);
  const [isConfirmed, setConfirmed] = React.useState(false);
  const input = React.useRef(null);

  const handleClose = React.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setOpen(false);
      setConfirmed(false);
    },
    [setOpen, setConfirmed]
  );

  React.useEffect(() => {
    if (input.current && !isConfirmed && isOpen) {
      input.current.focus();
    }
  }, [input.current, isConfirmed, isOpen]);

  return (
    <div className="app">
      <h1>NewDay</h1>
      <button onClick={() => setOpen(true)}>let' see a modal</button>

      <Dialog
        title="Here it is!"
        isOpen={isOpen}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="info"
        aria-modal="true"
        usePortal={false}
      >
        <section className={Classes.DIALOG_BODY}>
          <h5 id="title">WCAG 2.1 AA Compliant Modal</h5>
          <p id="info">
            <strong>This is an example modal window</strong>
          </p>
          <form id="myForm">
            <fieldset legend="sample form">
              <div className="field" title="user name input">
                <label htmlFor="username">User name input</label>
                <input
                  name="username"
                  id="username"
                  ref={input}
                  className="bp4-input"
                  type="text"
                  placeholder="Name"
                  aria-label="Type your name"
                  data-testid="name"
                />
              </div>
              <div className="field" title="Is data correct?">
                <label htmlFor="checkbox">Is data correct?</label>
                <input
                  id="checkbox"
                  type="checkbox"
                  placeholder="Name"
                  onChange={() => {
                    setConfirmed(!isConfirmed);
                  }}
                  aria-label="Is data correct?"
                  data-testid="checkbox"
                />
              </div>
            </fieldset>
          </form>
        </section>

        <footer className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button
              title="This button is hooked up to close the dialog."
              onClick={handleClose}
              data-testid="close"
            >
              Close
            </Button>
            <Button
              type="submit"
              form="myForm"
              title={
                isConfirmed
                  ? "This button submits data."
                  : "Please, confirm data."
              }
              onClick={handleClose}
              disabled={!isConfirmed}
              data-testid="submit"
            >
              Ok
            </Button>
          </div>
        </footer>
      </Dialog>
    </div>
  );
}

