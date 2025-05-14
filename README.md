# Real-Time Collaborative Drawing Tool
InstaDraw is an open-source, real-time drawing and whiteboarding app that lets multiple users sketch, annotate, and collaborate simultaneously on a shared canvas.


🎨 Drawing & Canvas Features
- Freehand Drawing

    - Smooth pen or pencil tool

    - Eraser support

- Shapes and Objects

    - Predefined shapes: rectangles, circles, lines, arrows

    - Text boxes

    - Sticky notes

- Color & Styling

    - Fill and stroke color pickers

    - Line thickness, dashed/solid styles

    - Background color

- Layers & Object Grouping

    - Bring forward / send backward

    - Group multiple elements together

- Drag, Resize, Rotate

    - All drawn elements are editable after creation

- Undo / Redo

    - For all drawing actions

👥 Real-Time Collaboration Features
- Live Multi-User Drawing

    - See others’ cursors and drawings as they happen

- User Presence Indicator

    - Who is online / editing

- Cursor Preview

    - Colored cursors with names to see who is drawing what

- Chat or Commenting

    -O ptional side chat panel for real-time communication

🧠 Interaction & Usability
- Multi-touch & Tablet Support

    - Compatible with pen tablets and touch screens

☁️ Sync & Backend
- Cloud Sync

    - Optionally save drawings to user account or shared link

- WebSocket-based Real-Time Updates

    - Using Socket.io, ws, or WebRTC for syncing

- Room-Based Collaboration

    - Join/leave rooms with unique URLs

🔐 Authentication & Access
- Login / Sign up (optional)


# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/docs/reference/configuration)
- [CLI Usage](https://turbo.build/docs/reference/command-line-reference)
