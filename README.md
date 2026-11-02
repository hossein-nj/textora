# textora-editor

A lightweight rich text editor component for React and TypeScript applications. It has no Tailwind, CSS-in-JS, upload service, icon package, or runtime dependency beyond React.

## Installation

```bash
npm install textora-editor
```

Import the package stylesheet once in the application entry point:

```tsx
import 'textora-editor/styles.css'
```

## Usage

```tsx
'use client'

import { useState } from 'react'
import { Textora } from 'textora-editor'
import 'textora-editor/styles.css'

export function ArticleEditor() {
  const [value, setValue] = useState('<p>Hello!</p>')

  return (
    <Textora
      title="Article body"
      value={value}
      onChange={setValue}
      locale="English"
      direction="ltr"
      theme="light"
    />
  )
}
```

The component uses a controlled string API: `value` supplies the current HTML and `onChange` receives the complete updated HTML string. Images, audio, video, and files selected through the toolbar are read locally as Base64 data URLs, so no backend upload endpoint is required. `maxImageSize` is measured in bytes and defaults to 5 MiB.

The image toolbar action opens a metadata form where an image URL or local image can be configured before insertion. Built-in toolbar, dialog, upload, validation, and accessibility labels are selected from `locale`; individual labels can be overridden with the `labels` prop. The `locale` controls the interface language only. It is independent from `direction`, which controls the editor and modal text direction.

## Localization

`locale` is optional and defaults to `"English"`. It accepts these full English language names:

- `English`
- `Chinese` (Simplified Chinese)
- `Hindi`
- `Spanish`
- `Arabic`
- `French`
- `Bengali`
- `Portuguese`
- `Russian`
- `Urdu`
- `Indonesian`
- `German`
- `Japanese`
- `Nigerian Pidgin`
- `Turkish`
- `Persian`

For example:

```tsx
<Textora
  value={value}
  onChange={setValue}
  locale="Persian"
  direction="rtl"
/>

<Textora {...props} locale="German" direction="ltr" />
```

Changing `locale` updates the interface immediately without remounting the editor. If an unsupported value is supplied at runtime, the interface safely falls back to English. The `direction` prop does not change automatically when the locale changes, so applications should set it separately when needed.

## API

`TextoraProps` includes:

- `value` and `onChange` for controlled HTML content.
- Optional `id` for the editor element; when omitted, a stable unique ID is generated automatically.
- Optional `theme` for a scoped predefined theme. It defaults to `light` and accepts `light`, `dark`, `cupcake`, `emerald`, `corporate`, `retro`, `dracula`, `synthwave`, or `nord`.
- `title`, `error`, `placeholder`, `direction`, `locale`, `minHeight`, `disabled`, and `className` for presentation and state.
- `labels` for overriding toolbar and dialog labels.
- `maxImageSize` for limiting selected images in bytes.

The former `uploadApi` prop is intentionally removed. There are no network requests for file insertion.

## Public exports

The package exports the default component and named `Textora`, plus the `TextoraProps`, `EditorTheme`, `TextoraLabels`, `TextoraLocale`, and `TextDirection` types. The stylesheet is available at `textora-editor/styles.css`.

## Build and publish checks

```bash
npm run typecheck
npm run build
npm run pack:check
```

`npm run build` produces ESM, CommonJS, CSS, and declaration files in `dist`. The package is not published by this project automatically.

## License

MIT
