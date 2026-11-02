# textora-editor

<div align="center">

**Everything You Need. Completely Free.**

[![npm version](https://img.shields.io/npm/v/textora-editor?style=flat-square&color=cb3837)](https://www.npmjs.com/package/textora-editor)
[![React](https://img.shields.io/badge/React-%3E%3D18.2.0-61dafb?style=flat-square&logo=react&logoColor=20232a)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-first-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![npm downloads](https://img.shields.io/npm/dm/textora-editor?style=flat-square&color=green)](https://www.npmjs.com/package/textora-editor)

<br />

<sub>A lightweight, feature-rich React rich text editor that stores editable content as HTML and needs no upload service or UI framework.</sub>

</div>

`textora-editor` is a controlled rich text editor for React and TypeScript applications. It provides a browser-native editing surface with formatting tools, HTML source editing, image and media insertion, local file handling, tables, themes, localization, RTL support, and accessible editor states.

Images, audio, video, and files selected through the toolbar are read in the browser as Base64 data URLs. Textora does not make upload requests and does not require a backend endpoint for those actions.

## Why Textora?

- **Controlled HTML** — the parent owns the complete HTML value through `value` and `onChange`.
- **Useful editing tools** — headings, font sizes, emphasis, alignment, lists, colors, links, tables, media, and HTML source mode are built in.
- **No upload service required** — local assets are embedded in the returned HTML as data URLs.
- **Safe insertion paths** — pasted and inserted HTML is sanitized, unsafe URLs are rejected, and dangerous elements and event attributes are removed when content is normalized.
- **International by design** — 16 built-in locales, independent LTR/RTL direction control, and per-label overrides.
- **Easy to integrate** — one component, one stylesheet import, no Tailwind, CSS-in-JS, or icon package.

## Features and capabilities

- Controlled `string` value containing HTML.
- Paragraph and heading levels 1–6.
- Font sizes: 12, 14, 16, 18, 20, 24, 30, and 36 px.
- Bold, italic, underline, clear formatting, ordered lists, and unordered lists.
- Text color and text background color controls.
- Left, center, and right alignment, plus LTR and RTL block direction.
- Link insertion with URL, display text, and title fields.
- Image insertion from a URL or local device file, with alt text, title, class, and dimensions.
- Audio and video insertion from a URL or local device file, with title, alternative text, and dimensions.
- Generic file insertion as a downloadable link.
- Table insertion with up to 12 rows and 8 columns, plus row and column controls after insertion.
- HTML source mode with sanitization when returning to the visual editor.
- Clipboard handling for HTML and plain text, including newline preservation.
- Nine scoped built-in themes, 16 locales, custom labels, error text, and disabled state.
- Accessible toolbar, editor, dialog, file-input, and error semantics.

## Installation

~~~bash
npm install textora-editor
~~~

Or use another package manager:

~~~bash
yarn add textora-editor
pnpm add textora-editor
~~~

Textora declares React and React DOM `>=18.2.0` as peer dependencies and Node `>=18.18.0` in its engine metadata.

Import the package stylesheet once in your application entry point:

~~~tsx
import 'textora-editor/styles.css'
~~~

The stylesheet is also imported by the component source and is available through the package export `textora-editor/styles.css`.

## Quick start

~~~tsx
import { useState } from 'react'
import { Textora } from 'textora-editor'
import 'textora-editor/styles.css'

export default function ArticleEditor() {
    const [value, setValue] = useState('<p>Hello from Textora.</p>')

    return (
        <Textora
            title="Article body"
            value={value}
            onChange={setValue}
            placeholder="Start writing..."
        />
    )
}
~~~

`value` is required and is the source of truth. `onChange` receives the complete updated HTML string after an editing operation.

## Common interactions

### Controlled editing

Textora is controlled: keep the HTML string in React state, a form library, or another external store.

~~~tsx
import { useState } from 'react'
import { Textora } from 'textora-editor'
import 'textora-editor/styles.css'

export function ControlledExample() {
    const [html, setHtml] = useState('<p>Write something useful.</p>')

    return (
        <div>
            <Textora value={html} onChange={setHtml} />
            <pre>{html}</pre>
        </div>
    )
}
~~~

### Format and paste content

Select text and use the toolbar for bold, italic, underline, font size, paragraph or heading level, alignment, lists, text color, and text background color. Clear formatting removes inline formatting, removes links, and changes the selected block to a paragraph.

Pasted HTML is extracted from common browser clipboard fragments and sanitized before insertion. If HTML is unavailable, plain text is escaped and line breaks become `<br>` elements.

### Insert links and tables

**Insert link** accepts a URL, display text, and optional title. Inserted links use `target="_blank"` and `rel="noopener noreferrer"`. Link URLs must use `http:`, `https:`, `mailto:`, or `tel:`.

**Insert table** starts with a body-only table. Rows are clamped to `1–12` and columns to `1–8`. Click a cell to expose controls for adding or deleting a row or column; the last row and column cannot be deleted.

~~~tsx
<Textora
    value={html}
    onChange={setHtml}
    labels={{
        insertTable: 'Add a table',
        addRow: 'Add a row',
        deleteColumn: 'Remove a column',
    }}
/>
~~~

### Edit HTML directly

The code icon toggles **HTML source** mode. The source editor is a left-to-right textarea with spell checking disabled. Source content is sanitized when visual mode is restored, then committed through `onChange`.

## Built-in themes

The `theme` prop accepts these values:

| Theme | Value |
| --- | --- |
| Light | `light` |
| Dark | `dark` |
| Cupcake | `cupcake` |
| Emerald | `emerald` |
| Corporate | `corporate` |
| Retro | `retro` |
| Dracula | `dracula` |
| Synthwave | `synthwave` |
| Nord | `nord` |

Themes are applied to the component root through `data-theme` and are scoped to the editor. The repository contains no demo GIFs, screenshots, or theme preview images, so no preview asset is linked here.

~~~tsx
import { useState } from 'react'
import { Textora } from 'textora-editor'
import 'textora-editor/styles.css'

export function ThemedEditor() {
    const [value, setValue] = useState('<p>A themed editor.</p>')

    return <Textora value={value} onChange={setValue} theme="synthwave" />
}
~~~

## API reference

### `Textora` props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | required | Current HTML content. |
| `onChange` | `(value: string) => void` | required | Called with the complete updated HTML string. |
| `id` | `string` | generated | ID for the editor element; omitted values are generated with React `useId`. |
| `theme` | `EditorTheme` | `'light'` | Built-in visual theme. Invalid runtime values fall back to `light`. |
| `title` | `string` | — | Visible editor title and accessible label source. |
| `error` | `string` | — | Error text shown below the editor; adds an error border and `aria-invalid`. |
| `placeholder` | `string` | locale placeholder | Placeholder shown while content is empty. |
| `direction` | `TextDirection` | `'ltr'` | Direction of the editor, toolbar controls, and insertion dialogs. |
| `locale` | `TextoraLocale` | `'English'` | Interface language for toolbar, dialogs, validation, and accessibility labels. |
| `minHeight` | `number` | `260` | Editor and source textarea height in pixels. Finite values are clamped at zero. |
| `disabled` | `boolean` | `false` | Disables editing, toolbar actions, file pickers, and table/media controls. |
| `className` | `string` | `''` | Additional class name applied to the outer `.rte-root` element. |
| `labels` | `Partial<TextoraLabels>` | — | Per-label overrides merged after the selected locale. |
| `maxImageSize` | `number` | `5242880` | Maximum local image size in bytes; the default is 5 MiB. |

### `value` and `onChange`

~~~ts
value: string
onChange: (value: string) => void
~~~

There is no `defaultValue` prop. Textora reads `value` as HTML and emits a new HTML string after typing, toolbar commands, paste, source edits, insertions, or table mutations. Inserted and pasted content is sanitized. Content supplied from outside is sanitized before it is placed in the visual editing surface.

### `id`, `title`, `error`, and `placeholder`

`id` controls the editor element ID and the IDs used to connect the visible title and error message. If omitted, Textora uses React `useId()`.

`title` renders a visible `<label>` and is used as the editor's accessible label. Without a title, the locale's `editorAriaLabel` is used. `placeholder` overrides the locale placeholder and is not inserted into the HTML value.

When `error` is provided, Textora renders it with `role="alert"`, applies the error border, sets `aria-invalid="true"`, and connects the editor to the error through `aria-describedby`.

~~~tsx
<Textora
    id="post-body"
    title="Post body"
    value={html}
    onChange={setHtml}
    placeholder="Write the post body..."
    error={html.trim() ? undefined : 'Post body is required.'}
/>
~~~

### `theme`

~~~ts
theme?: 'light' | 'dark' | 'cupcake' | 'emerald' | 'corporate' | 'retro' | 'dracula' | 'synthwave' | 'nord'
~~~

The selected theme is applied as `data-theme`. TypeScript prevents unsupported values, and the runtime falls back to `light` for an untyped unsupported value.

### `direction`

~~~ts
direction?: 'ltr' | 'rtl'
~~~

`direction` controls the editor root, editable content, toolbar layout, and insertion dialogs. It is independent from `locale`.

~~~tsx
<Textora value={value} onChange={setValue} locale="Persian" direction="rtl" />
~~~

The toolbar also includes LTR and RTL controls that apply `dir` to selected content blocks. Alignment maps visual left and right behavior to the current editor direction.

### `locale` and `labels`

`locale` selects built-in interface strings. `labels` is a `Partial<TextoraLabels>` object and overrides only the supplied values.

~~~tsx
<Textora
    value={value}
    onChange={setValue}
    locale="German"
    labels={{
        placeholder: 'Beginnen Sie zu schreiben...',
        insertImage: 'Bild hinzufügen',
        insertFile: 'Datei hinzufügen',
    }}
/>
~~~

Unsupported runtime locale values resolve to `English`. The locale does not translate existing HTML or infer `direction`.

### `minHeight`, `disabled`, and `className`

`minHeight` is applied as both `height` and `minHeight` on the visual editor and source textarea. It uses pixels; finite negative values become `0`, while non-finite values use `260`.

When `disabled` is `true`, the editable surface is not content-editable, toolbar controls and file pickers are disabled, and media/table controls cannot mutate content. The current value remains visible.

`className` is appended to `.rte-root`, providing a scoped integration hook:

~~~css
.rte-root.article-editor {
    --rte-primary: #7c3aed;
    --rte-primary-strong: #6d28d9;
    --rte-toolbar-bg: #f5f3ff;
}
~~~

For a non-light theme, include its selector when overriding a variable whose theme rule has higher specificity:

~~~css
.rte-root.article-editor[data-theme='dark'] {
    --rte-primary: #8b5cf6;
}
~~~

## Image insertion and upload

The **Insert image** action opens URL, title, alt text, class, width, and height fields. A valid source can be previewed before insertion. Selecting an existing image and opening the action edits it instead of inserting another one.

~~~tsx
import { useState } from 'react'
import { Textora } from 'textora-editor'
import 'textora-editor/styles.css'

export function ImageEditor() {
    const [value, setValue] = useState('<p>Add an image from a URL or your device.</p>')

    return (
        <Textora
            value={value}
            onChange={setValue}
            maxImageSize={2 * 1024 * 1024}
            labels={{ insertImage: 'Add image', imageAlt: 'Accessible description' }}
        />
    )
}
~~~

Image URLs accept `http:`, `https:`, root-relative (`/path/image.jpg`), hash (`#image`), `blob:`, and Base64 `data:image/*` URLs. SVG image data URLs are rejected. Local images are read with `FileReader` and validated with browser image decoding APIs when available. `maxImageSize` applies to local images selected through the image form and to images classified through the generic file picker; it does not apply to remote URLs.

Width and height must be positive finite numbers when supplied. The resulting element includes `src`, `alt`, and optional `title`, `width`, `height`, and `class` attributes.

## Video, audio, and file handling

The **Insert media** action handles audio and video. It accepts a URL, lets the user choose `Audio` or `Video`, and exposes title, alternative text, width, and height fields. Inserted media uses native `controls` and a max-width style.

The **Insert file** action reads a selected file into a Base64 data URL and inserts a download link. The picker accepts `*/*`; Textora classifies files by MIME type first and by extension when the MIME type is unavailable.

| Action | Picker | Local handling |
| --- | --- | --- |
| Image form | `image/*` | Validated image data URL; `maxImageSize` applies. |
| Media form | `audio/*,video/*` | Audio or video data URL; no separate media-size prop. |
| File action | `*/*` | Images, audio, and video become elements; other supported data URLs become a download link. |

Extension fallbacks are video: `mp4`, `m4v`, `webm`, `ogv`, `mov`, `avi`, `mkv`, `mpeg`, `mpg`, `3gp`, `3g2`, `ts`; and audio: `mp3`, `wav`, `ogg`, `oga`, `opus`, `m4a`, `aac`, `flac`, `weba`, `wma`, `aiff`.

Local files are embedded in the HTML returned by `onChange`; they are not uploaded. Media URLs accept `http:`, `https:`, root-relative, hash, `blob:`, and Base64 `data:audio/*` or `data:video/*` URLs. Unsafe protocols are rejected.

~~~tsx
import { useState } from 'react'
import { Textora } from 'textora-editor'
import 'textora-editor/styles.css'

export function MediaAndFileEditor() {
    const [value, setValue] = useState('<p>Add audio, video, or a downloadable file.</p>')

    return (
        <Textora
            value={value}
            onChange={setValue}
            labels={{
                insertMedia: 'Add audio or video',
                selectMedia: 'Choose media from this device',
                insertFile: 'Add a downloadable file',
            }}
        />
    )
}
~~~

Click a media element to expose width and height controls. Backspace or Delete can remove adjacent selected media.

## Links, tables, and formatting tools

The toolbar provides font sizes `12`, `14`, `16`, `18`, `20`, `24`, `30`, and `36`; paragraph and heading blocks `h1`–`h6`; bold, italic, underline; ordered and unordered lists; left, center, and right alignment; text color; text background color; LTR/RTL block direction; clear formatting; image, media, file, link, table, and HTML source actions.

Formatting uses the browser's content-editing APIs and operates on the current selection. Toolbar buttons preserve the editor selection when focus moves to a control.

Tables start as `<table><tbody>...</tbody></table>` with editable `<td>` cells. Insertion is clamped to 12 rows and 8 columns. Table controls never delete the last row or column.

## HTML/source editing and sanitization

Source mode exposes the current HTML in a `textarea`. Switching back to visual mode sanitizes the source, restores it into the editor, and emits the resulting HTML. Pasted and toolbar-inserted content follows the same safety boundary.

Sanitization removes scripts, styles, iframes, objects, embeds, forms, form controls, `link`, `meta`, and `base` elements; removes inline event-handler attributes and `srcdoc`; strips selected unsafe CSS URL functions; rejects unsafe image, media, file, and link URLs; and adds `rel="noopener noreferrer"` to `_blank` links. It is not a replacement for server-side validation before storing or rendering untrusted HTML.

## RTL and LTR direction support

~~~tsx
import { useState } from 'react'
import { Textora } from 'textora-editor'
import 'textora-editor/styles.css'

export function PersianEditor() {
    const [value, setValue] = useState('<p>متن خود را اینجا بنویسید.</p>')

    return (
        <Textora
            value={value}
            onChange={setValue}
            locale="Persian"
            direction="rtl"
            title="متن مقاله"
        />
    )
}
~~~

Use `direction="rtl"` for Persian, Arabic, Urdu, Hebrew, or another right-to-left interface. URL fields and the HTML source textarea intentionally use LTR input behavior for URLs and source editing.

## Localization and supported languages

`TextoraLocale` accepts these exact values:

`English`, `Chinese`, `Hindi`, `Spanish`, `Arabic`, `French`, `Bengali`, `Portuguese`, `Russian`, `Urdu`, `Indonesian`, `German`, `Japanese`, `Nigerian Pidgin`, `Turkish`, and `Persian`.

The default is `English`. Localization covers toolbar, modal, validation, upload, placeholder, and accessibility labels. It does not translate the HTML value or automatically set direction.

## Custom labels and localization overrides

`labels` accepts `Partial<TextoraLabels>`, so applications can override only the strings they need:

~~~tsx
import type { TextoraLabels } from 'textora-editor'

const labels = {
    editorAriaLabel: 'Product description editor',
    placeholder: 'Describe the product...',
    insertImage: 'Add product image',
    sourceCode: 'Edit HTML',
    invalidDimensions: 'Use positive width and height values.',
} satisfies Partial<TextoraLabels>
~~~

`TextoraLabels` contains these required keys:

~~~text
insertMedia, insertFile, mediaDimensions, invalidFile, width, height,
fontSize, paragraph, heading1, heading2, heading3, heading4, heading5,
heading6, bold, italic, underline, alignLeft, alignCenter, alignRight,
ltr, rtl, orderedList, unorderedList, textColor, backgroundColor,
clearFormatting, insertImage, insertLink, insertTable, sourceCode,
imageUrl, imageTitle, imageAlt, imageWidth, imageHeight, imagePreview,
selectImage, linkUrl, linkText, newTab, linkTitle, rows, columns, insert,
cancel, uploadImage, uploading, invalidUrl, invalidImage, imageTooLarge,
invalidDimensions, linkTextRequired, tableControls, addRow, deleteRow,
addColumn, deleteColumn, editorAriaLabel, placeholder, imageUrlPlaceholder,
linkUrlPlaceholder, fileReadError, selectMedia, selectFile, close
~~~

The interface also declares optional `imageClass`, `mediaType`, `audio`, `video`, `mediaUrl`, `mediaTitle`, `mediaAlt`, `mediaWidth`, `mediaHeight`, `mediaPreview`, and `mediaUrlPlaceholder` fields. Textora fills these from its built-in locale data and they can be overridden through `labels`.

## Accessibility, disabled state, and errors

- The toolbar has `role="toolbar"`.
- Toolbar buttons have localized `title`, `aria-label`, and `aria-pressed` values.
- The editor has `role="textbox"`, `aria-multiline="true"`, and a label from `title` or the locale.
- Titles and errors are connected with `aria-labelledby` and `aria-describedby`.
- Errors use `role="alert"` and set `aria-invalid` on the editor.
- Insertion panels use `role="dialog"` and `aria-modal="true"`.
- Escape and backdrop clicks close an open insertion dialog.
- Hidden image, media, and file inputs receive localized `aria-label` values.

~~~tsx
import { useState } from 'react'
import { Textora } from 'textora-editor'
import 'textora-editor/styles.css'

export function FormEditor() {
    const [value, setValue] = useState('')
    const hasError = value.replace(/<[^>]*>/g, '').trim().length === 0

    return (
        <Textora
            title="Message"
            value={value}
            onChange={setValue}
            error={hasError ? 'Message is required.' : undefined}
            disabled
        />
    )
}
~~~

The `error` prop displays feedback but does not block `onChange` or validate HTML automatically. Form-level validation remains the consuming application's responsibility.

## Styling and CSS customization

Import `textora-editor/styles.css` once. Styles are scoped under `.rte-root`, and `className` gives the root an application-specific hook. Themes use CSS custom properties such as `--rte-primary`, `--rte-bg`, `--rte-text`, `--rte-toolbar-bg`, and `--rte-theme-border`.

~~~css
.rte-root.my-editor {
    max-width: 52rem;
}

.rte-root.my-editor .rte-editor {
    font-family: Georgia, serif;
}
~~~

The editor is full width up to its parent's available width. The toolbar wraps, and modal grids become a single column below 640 px.

## TypeScript and public exports

The package ships declaration files generated during the build. Its public entry point exports the default component, named `Textora`, and these types:

~~~tsx
import TextoraDefault, {
    Textora,
    type EditorTheme,
    type TextDirection,
    type TextoraLabels,
    type TextoraLocale,
    type TextoraProps,
} from 'textora-editor'
~~~

| Export | Definition |
| --- | --- |
| `TextoraProps` | Props accepted by `Textora`. |
| `EditorTheme` | Union of the nine built-in theme names. |
| `TextDirection` | `'ltr'` or `'rtl'`. |
| `TextoraLocale` | Union of the sixteen locale names. |
| `TextoraLabels` | Label interface used by `labels`. |

The stylesheet is exported as `textora-editor/styles.css`.

## Performance notes

- Textora is controlled and emits the complete HTML string after edits. Keep expensive parent work out of the immediate `onChange` path for large documents.
- Local images, audio, video, and files are Base64 data URLs. This keeps the editor independent of a server but increases HTML size, memory use, and storage/transmission cost.
- `maxImageSize` applies only to local images. There is no media-size prop, and remote sources are not downloaded by Textora.
- The library build externalizes React, React DOM, and JSX runtimes. It has no upload client, icon dependency, or CSS-in-JS runtime.
- Image decoding and file reads occur in the browser; selected bytes are not sent over the network.

## Development

The repository uses Vite for the library build and TypeScript for checking and declaration generation.

~~~bash
npm run typecheck
npm run build
npm run lint
npm run pack:check
~~~

| Script | What it does |
| --- | --- |
| `npm run typecheck` | Runs TypeScript with `tsconfig.json` and `noEmit`. |
| `npm run build` | Runs `vite build`, then emits declarations with `tsconfig.build.json`. |
| `npm run lint` | Runs the same TypeScript no-emit check currently configured for the project. |
| `npm run pack:check` | Runs `npm pack --dry-run` to inspect package contents without publishing. |

The build emits ESM and CommonJS entry points, a bundled stylesheet, and declarations under `dist`: `textora-editor.js`, `textora-editor.cjs`, `styles.css`, `index.d.ts`, and related declaration files.

## License

MIT. See [LICENSE](./LICENSE).
