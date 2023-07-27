<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixevent/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/core/badge?t=dark&v=MIT">
      <img alt="license" src="https://flamrdevs.cyclic.app/core/badge?t=light&v=MIT" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixevent">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/npm/version?t=dark&n=ixevent">
      <img alt="version" src="https://flamrdevs.cyclic.app/npm/version?t=light&n=ixevent" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixevent">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/bundlejs/size?t=dark&n=ixevent">
      <img alt="size" src="https://flamrdevs.cyclic.app/bundlejs/size?t=light&n=ixevent" hspace="1">
    </picture>
  </a>
</p>

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
