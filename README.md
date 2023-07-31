<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixevent/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/l?t=dark&n=ixevent">
      <img alt="license" src="https://none.deno.dev/npm/l?t=light&n=ixevent" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixevent">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/v?t=dark&n=ixevent">
      <img alt="version" src="https://none.deno.dev/npm/v?t=light&n=ixevent" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixevent">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/bundlejs/mz?t=dark&n=ixevent">
      <img alt="size" src="https://none.deno.dev/bundlejs/mz?t=light&n=ixevent" hspace="1">
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
