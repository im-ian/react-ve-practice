import { Button } from "./components/Buttons/Button.tsx";
import { TextInput } from "./components/Inputs/TextInput";

import "./css/global.css.ts";
import { sprinkles } from "./css/sprinkles.css.ts";
import Flex from "./components/Sections/Flex.tsx";

function App() {
  return (
    <div
      className={sprinkles({
        padding: "medium",
        background: {
          lightMode: "white",
          darkMode: "gray-700",
        },
      })}
    >
      <Flex direction={"row"} gap={"8px"}>
        <Flex.Item flex={"1"}>
          <TextInput />
        </Flex.Item>
        <Flex.Item>
          <Button>Click Me!</Button>
        </Flex.Item>
      </Flex>
    </div>
  );
}

export default App;
