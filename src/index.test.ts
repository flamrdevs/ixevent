import { describe, expect, it } from "vitest";

import ixevent from ".";

describe("ixevent", () => {
  it("Works", () => {
    type Data = "red" | "green" | "blue";

    let listenValue: Data = "red";
    let listenCalls: number = 0;

    const event = ixevent<Data>();

    const unlisten = event.listen((value) => {
      listenValue = value;
      ++listenCalls;
    });

    const expects = (equalListenValue: Data, equalListenCalls: number) => {
      expect(listenValue).toEqual(equalListenValue);
      expect(listenCalls).toEqual(equalListenCalls);
    };

    expects("red", 0);

    event.send("green");

    expects("green", 1);

    event.send("blue");

    expects("blue", 2);

    event.send("blue");

    expects("blue", 3);

    event.send("red");

    expects("red", 4);

    unlisten();

    event.send("red");

    expects("red", 4);
  });
});
