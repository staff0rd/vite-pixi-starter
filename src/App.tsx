import { Pixi } from "./Pixi";
import { useEffect, useState } from "react";
import { blueGrey } from "@mui/material/colors";
import * as PIXI from "pixi.js";

function App() {
  const [app, setApp] = useState<PIXI.Application>();

  useEffect(() => {
    if (app) {
      app.stage.removeChildren();
      const container = new PIXI.Container();
      app.stage.addChild(container);

      const message = new PIXI.Text("This is your stage, bro!");
      message.pivot.set(message.width / 2, message.height / 2);
      message.position.set(app.screen.width / 2, app.screen.height / 2);
      container.addChild(message);
    }
  }, [app]);

  return (
    <Pixi
      onAppChange={setApp}
      onResized={() => console.log("resized")}
      backgroundColor={PIXI.utils.string2hex(blueGrey[900])}
    />
  );
}

export default App;
