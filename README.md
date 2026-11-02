# textora-editor

<div align="center">

**Everything You Need. Completely Free.**

[![npm version](https://img.shields.io/npm/v/textora-editor?style=flat-square&color=cb3837)](https://www.npmjs.com/package/textora-editor)
[![React](https://img.shields.io/badge/React-%3E%3D18.2.0-61dafb?style=flat-square&logo=react&logoColor=20232a)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-first-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![npm downloads](https://img.shields.io/npm/dm/textora-editor?style=flat-square&color=green)](https://www.npmjs.com/package/textora-editor)

<br />

<sub>A lightweight, feature-rich React rich text editor that stores editable content as HTML and requires no upload service or UI framework.</sub>

</div>

`textora-editor` is a controlled rich text editor for React and TypeScript applications. It provides formatting tools, HTML source editing, image and media insertion, local file handling, tables, customizable themes, localization, and RTL support.

Local images, audio, video, and files are read in the browser and embedded in the resulting HTML as Base64 data URLs. Textora does not make upload requests or require a backend endpoint for these actions.

## Installation

~~~bash
npm install textora-editor
~~~

Or use another package manager:

~~~bash
yarn add textora-editor
pnpm add textora-editor
~~~

Textora supports React and React DOM `>=18.2.0`.

Import the package stylesheet:

~~~tsx
import 'textora-editor/styles.css'
~~~

## Quick start

~~~tsx
import { useState } from 'react'
import { Textora } from 'textora-editor'
import 'textora-editor/styles.css'

export default function Example() {
    const [value, setValue] = useState('<p>Hello from Textora.</p>')

    return (
        <>
            <Textora
                title="Article content"
                value={value}
                onChange={setValue}
                placeholder="Start writing..."
            />

            <div
                className="rte-content"
                dangerouslySetInnerHTML={{ __html: value }}
            />
        </>
    )
}
~~~

`Textora` is a controlled component. The `value` prop contains the editor's HTML content, and `onChange` receives the updated HTML string.

**Important:** When rendering the HTML output outside the editor, the wrapper element must have the `rte-content` class. This class provides the default styling for rendered content, including images and media. Without it, the editor's content styles will not be applied to the displayed HTML.

## Built-in themes

Textora includes nine built-in themes. All themes use the same component API and can be changed through the `theme` prop.

<table>
  <tr>
    <td align="center"><strong>Light</strong><br /><img src="YOUR-LIGHT-IMAGE-PATH" alt="Textora light theme" width="500" /></td>
    <td align="center"><strong>Dark</strong><br /><img src="YOUR-DARK-IMAGE-PATH" alt="Textora dark theme" width="500" /></td>
  </tr>
  <tr>
    <td align="center"><strong>Cupcake</strong><br /><img src="YOUR-CUPCAKE-IMAGE-PATH" alt="Textora cupcake theme" width="500" /></td>
    <td align="center"><strong>Emerald</strong><br /><img src="YOUR-EMERALD-IMAGE-PATH" alt="Textora emerald theme" width="500" /></td>
  </tr>
  <tr>
    <td align="center"><strong>Corporate</strong><br /><img src="YOUR-CORPORATE-IMAGE-PATH" alt="Textora corporate theme" width="500" /></td>
    <td align="center"><strong>Retro</strong><br /><img src="YOUR-RETRO-IMAGE-PATH" alt="Textora retro theme" width="500" /></td>
  </tr>
  <tr>
    <td align="center"><strong>Dracula</strong><br /><img src="YOUR-DRACULA-IMAGE-PATH" alt="Textora dracula theme" width="500" /></td>
    <td align="center"><strong>Synthwave</strong><br /><img src="YOUR-SYNTHWAVE-IMAGE-PATH" alt="Textora synthwave theme" width="500" /></td>
  </tr>
  <tr>
    <td align="center"><strong>Nord</strong><br /><img src="YOUR-NORD-IMAGE-PATH" alt="Textora nord theme" width="500" /></td>
    <td align="center"><em>All themes share the same editor functionality.</em></td>
  </tr>
</table>

~~~tsx
<Textora
    value={value}
    onChange={setValue}
    theme="synthwave"
/>
~~~

## Localization and supported languages

Textora includes 16 built-in locales for its interface. The `locale` prop controls toolbar labels, dialogs, validation messages, placeholders, and accessibility labels.

Supported locales:

`English`, `Chinese`, `Hindi`, `Spanish`, `Arabic`, `French`, `Bengali`, `Portuguese`, `Russian`, `Urdu`, `Indonesian`, `German`, `Japanese`, `Nigerian Pidgin`, `Turkish`, and `Persian`.

~~~tsx
<Textora
    value={value}
    onChange={setValue}
    locale="Persian"
    direction="rtl"
/>
~~~

The `locale` and `direction` props work independently. Changing the interface language does not automatically change the editor's text direction.

## RTL and LTR support

Textora supports both left-to-right and right-to-left interfaces through the `direction` prop.

~~~tsx
<Textora
    value={value}
    onChange={setValue}
    locale="Persian"
    direction="rtl"
/>
~~~

Use `rtl` for Persian, Arabic, Urdu, and other right-to-left languages, or `ltr` for left-to-right content.

The toolbar also provides controls for changing the direction of selected content blocks.

## Image insertion and customization

The image insertion dialog allows users to add an image using a URL or by selecting a local image file.

You can also specify the image's alternative text, title, dimensions, and CSS classes.

**Custom image classes**

The image dialog includes a class input. You can enter any CSS class name supported by your application, including Tailwind CSS classes, Bootstrap classes, or your own custom CSS classes.

The entered classes are applied directly to the inserted image element.

~~~tsx
<Textora
    value={value}
    onChange={setValue}
    maxImageSize={5 * 1024 * 1024}
/>
~~~

`maxImageSize` controls the maximum allowed size of locally selected images. Its default value is 5 MiB (5 × 1024 × 1024 bytes). This limit does not apply to images inserted through a URL.

## Video, audio, and file insertion

Textora supports inserting audio and video through a URL or a local file. The media dialog provides fields for media type, title, alternative text, width, and height.

The file insertion tool allows users to select local files and insert them into the editor as downloadable links when they are not recognized as images, audio, or video.

Local media and files are converted into Base64 data URLs and stored inside the editor's HTML content. No upload request is sent to a server.

## HTML source editing

Textora includes an HTML source mode that allows users to view and edit the editor's HTML directly.

Switching back to the visual editor sanitizes the source content before restoring it to the editing surface. The updated HTML is then emitted through `onChange`.

Pasted and inserted HTML is also sanitized before being added to the editor.

## Custom labels

The `labels` prop allows you to override individual interface texts without creating a complete locale.

~~~tsx
<Textora
    value={value}
    onChange={setValue}
    locale="English"
    labels={{
        insertImage: 'Add image',
        insertFile: 'Upload file',
        insertMedia: 'Add media',
        placeholder: 'Write your content...',
    }}
/>
~~~

Only the labels you provide are overridden. All other labels continue to use the selected locale.

## API reference

### Textora props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | Required | Current HTML content. |
| `onChange` | `(value: string) => void` | Required | Called with the updated HTML string. |
| `id` | `string` | Generated | Editor element ID. |
| `theme` | `EditorTheme` | `'light'` | Built-in editor theme. |
| `title` | `string` | — | Visible editor title and accessible label. |
| `error` | `string` | — | Error message displayed below the editor. |
| `placeholder` | `string` | Locale default | Placeholder displayed when the editor is empty. |
| `direction` | `TextDirection` | `'ltr'` | Editor and interface direction. |
| `locale` | `TextoraLocale` | `'English'` | Interface language. |
| `minHeight` | `number` | `260` | Editor minimum height in pixels. |
| `disabled` | `boolean` | `false` | Disables editor interactions. |
| `className` | `string` | `''` | Additional class applied to the editor root. |
| `labels` | `Partial<TextoraLabels>` | — | Custom interface label overrides. |
| `maxImageSize` | `number` | `5242880` | Maximum local image size in bytes. |

### TypeScript types

Textora exports its component and public types:

~~~tsx
import {
    Textora,
    type TextoraProps,
    type EditorTheme,
    type TextDirection,
    type TextoraLocale,
    type TextoraLabels,
} from 'textora-editor'
~~~

## Styling and customization

Import `textora-editor/styles.css` to apply the editor's default styles.

The `className` prop allows you to add a custom class to the editor's root element. Textora also uses scoped CSS classes and custom properties, making it possible to customize the editor without affecting unrelated application elements.

~~~tsx
<Textora
    value={value}
    onChange={setValue}
    className="my-custom-editor"
/>
~~~

~~~css
.rte-root.my-custom-editor {
    max-width: 900px;
}
~~~

## Development

Clone the repository, install dependencies, and run the available scripts:

~~~bash
npm install
npm run typecheck
npm run build
npm run lint
npm run pack:check
~~~

| Command | Purpose |
| --- | --- |
| `npm run typecheck` | Run TypeScript checks. |
| `npm run build` | Build the library and generate declaration files. |
| `npm run lint` | Run the configured TypeScript check. |
| `npm run pack:check` | Preview the npm package contents without publishing. |

## License

MIT. See [LICENSE](./LICENSE).