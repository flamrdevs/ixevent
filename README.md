# ixevent

simple event emitter

## Usage

```ts
import ixevent from "ixevent";

const event = ixevent<{ hello: string }>();

const unlisten = event.listen((value) => {
  console.log(value);
});

event.send({ hello: "ixevent" });

// { hello: "ixevent" }

unlisten();
```

## License

MIT
