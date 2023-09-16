<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixevent/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/l/ixevent?t=dark">
      <img alt="license" src="https://none.deno.dev/npm/l/ixevent?t=light" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixevent">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/v/ixevent?t=dark">
      <img alt="version" src="https://none.deno.dev/npm/v/ixevent?t=light" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixevent">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/bundlejs/mz/ixevent?t=dark">
      <img alt="size" src="https://none.deno.dev/bundlejs/mz/ixevent?t=light" hspace="1">
    </picture>
  </a>
</p>

<h1 id="ixevent">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=rocket">
    <img alt="lucide rocket" src="https://none.deno.dev/ui/icon/lucide?t=light&i=rocket" hspace="1">
  </picture>
  <span>
    ixevent
  </span>
</h1>

simple event emitter

<h2 id="usage">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=code">
    <img alt="lucide code" src="https://none.deno.dev/ui/icon/lucide?t=light&i=code" hspace="1">
  </picture>
  <span>
    usage
  </span>
</h2>

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

<h2 id="license">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=scale">
    <img alt="lucide scale" src="https://none.deno.dev/ui/icon/lucide?t=light&i=scale" hspace="1">
  </picture>
  <span>
    license
  </span>
</h2>

MIT
