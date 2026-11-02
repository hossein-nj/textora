import {
    useCallback, useEffect, useId, useRef, useState,
    type ChangeEvent, type ClipboardEvent, type KeyboardEvent,
    type MouseEvent, type ReactNode,
} from 'react'
import { resolveLabels, type TextoraLabels, type TextoraLocale } from './locales'
import './styles.css'
export type { TextoraLabels, TextoraLocale } from './locales'

export type TextDirection = 'ltr' | 'rtl'
export type EditorTheme = 'light' | 'dark' | 'cupcake' | 'emerald' | 'corporate' | 'retro' | 'dracula' | 'synthwave' | 'nord'
const editorThemes: readonly EditorTheme[] = ['light', 'dark', 'cupcake', 'emerald', 'corporate', 'retro', 'dracula', 'synthwave', 'nord']
function isEditorTheme(value: string): value is EditorTheme { return editorThemes.includes(value as EditorTheme) }
type InsertModal = 'image' | 'media' | 'link' | 'table' | null
type UploadPicker = 'media' | 'file'
type UploadKind = 'image' | 'video' | 'audio' | 'file'
type MediaType = 'audio' | 'video'
type EditableMedia = HTMLImageElement | HTMLVideoElement | HTMLAudioElement

export interface TextoraProps {
    value: string
    onChange: (value: string) => void
    id?: string
    theme?: EditorTheme
    title?: string
    error?: string
    placeholder?: string
    direction?: TextDirection
    locale?: TextoraLocale
    minHeight?: number
    disabled?: boolean
    className?: string
    labels?: Partial<TextoraLabels>
    maxImageSize?: number
}

interface ToolButtonProps { label: string; children: ReactNode; active?: boolean; disabled?: boolean; onClick: () => void; onRememberSelection: () => void }
type IconName = 'bold' | 'italic' | 'underline' | 'left' | 'center' | 'right' | 'ltr' | 'rtl' | 'ordered' | 'list' | 'palette' | 'highlight' | 'clear' | 'photo' | 'play' | 'file' | 'link' | 'table' | 'code' | 'chevron'

const fontSizes = [12, 14, 16, 18, 20, 24, 30, 36]
const blockFormats = [
    { value: 'p', labelKey: 'paragraph' }, { value: 'h1', labelKey: 'heading1' }, { value: 'h2', labelKey: 'heading2' },
    { value: 'h3', labelKey: 'heading3' }, { value: 'h4', labelKey: 'heading4' }, { value: 'h5', labelKey: 'heading5' }, { value: 'h6', labelKey: 'heading6' },
] as const
const blockSelector = 'p,h1,h2,h3,h4,h5,h6,blockquote,li,div,td,th'
const line = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, strokeWidth: 1.8 }
const clipboardBoundaryComment = /<!--\s*(?:(?:Start|End)(?:HTML|Fragment|Selection))\s*-->/gi

function Icon({ name }: { name: IconName }) {
    const common = { 'aria-hidden': true, fill: 'none', height: '1em', viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg' }
    switch (name) {
        case 'bold': return <svg {...common}><path d='M7 4h5.5a4 4 0 0 1 1.7 7.62A4.2 4.2 0 0 1 12.5 20H7V4Zm2.5 2.5v4.1h2.4a2.05 2.05 0 1 0 0-4.1H9.5Zm0 6.6v4.4h3a2.2 2.2 0 1 0 0-4.4h-3Z' fill='currentColor' /></svg>
        case 'italic': return <svg {...common}><path d='M10 4h8M6 20h8M14 4 10 20' {...line} /></svg>
        case 'underline': return <svg {...common}><path d='M7 4v6a5 5 0 0 0 10 0V4M5 20h14' {...line} /></svg>
        case 'left': return <svg {...common}><path d='M5 6h14M5 10h10M5 14h14M5 18h10' {...line} /></svg>
        case 'center': return <svg {...common}><path d='M4 6h16M7 10h10M4 14h16M7 18h10' {...line} /></svg>
        case 'right': return <svg {...common}><path d='M5 6h14M9 10h10M5 14h14M9 18h10' {...line} /></svg>
        case 'ltr': return <svg {...common}><path d='M4 8h15M8 4 4 8l4 4M20 16H5M16 12l4 4-4 4' {...line} /></svg>
        case 'rtl': return <svg {...common}><path d='M5 8h15M16 4l4 4-4 4M4 16h15M8 12l-4 4 4 4' {...line} /></svg>
        case 'ordered': return <svg {...common}><path d='M9 6h11M9 12h11M9 18h11M4.5 5.2h1v3M4 8.2h3M4 11.3c.3-.3.7-.5 1.3-.5.7 0 1.2.4 1.2 1s-.4.9-1.1 1.4L4 14h2.7M4 17h2.3l-2.3 3h2.6' {...line} /></svg>
        case 'list': return <svg {...common}><path d='M9 6h11M9 12h11M9 18h11' {...line} /><circle cx='5' cy='6' fill='currentColor' r='1' /><circle cx='5' cy='12' fill='currentColor' r='1' /><circle cx='5' cy='18' fill='currentColor' r='1' /></svg>
        case 'palette': return <svg {...common}><path d='M12 4a8 8 0 1 0 0 16h1.2a1.8 1.8 0 0 0 1.2-3.1 1.8 1.8 0 0 1 1.2-3.1H18A4 4 0 0 0 22 10c-.9-3.5-4.8-6-10-6Z' {...line} /><circle cx='7.5' cy='10' fill='currentColor' r='1' /><circle cx='10' cy='7' fill='currentColor' r='1' /><circle cx='14' cy='7' fill='currentColor' r='1' /></svg>
        case 'highlight': return <svg {...common}><path d='m14 5 5 5M4 20h5l9.5-9.5a2.12 2.12 0 0 0-3-3L6 16v4M3 22h18' {...line} /></svg>
        case 'clear': return <svg {...common}><path d='M5 5h14M9 5l-2 14M15 5l-2 14M4 19h10M17 15l4 4M21 15l-4 4' {...line} /></svg>
        case 'photo': return <svg {...common}><rect height='15' rx='2' width='18' x='3' y='4' {...line} /><circle cx='8.5' cy='9' fill='currentColor' r='1.4' /><path d='m5 17 4.5-4 3 2.5 2.5-2 4 3.5' {...line} /></svg>
        case 'play': return <svg {...common}><rect height='17' rx='2' width='18' x='3' y='3.5' {...line} /><path d='m10 8 5 4-5 4V8Z' fill='currentColor' /></svg>
        case 'file': return <svg {...common}><path d='M6 3h8l4 4v14H6V3Zm8 0v5h4M9 13h6M9 17h6' {...line} /></svg>
        case 'link': return <svg {...common}><path d='m10 13 4-4M8.5 16.5l-1 1a3.54 3.54 0 0 1-5-5l3-3a3.54 3.54 0 0 1 5 0M15.5 7.5l1-1a3.54 3.54 0 0 1 5 5l-3 3a3.54 3.54 0 0 1-5 0' {...line} /></svg>
        case 'table': return <svg {...common}><rect height='16' rx='1' width='18' x='3' y='4' {...line} /><path d='M3 10h18M9 4v16M15 4v16' {...line} /></svg>
        case 'code': return <svg {...common}><path d='m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16' {...line} /></svg>
        default: return <svg {...common}><path d='m6 9 6 6 6-6' {...line} /></svg>
    }
}

function AlignmentIcon({ alignment, direction }: { alignment: 'left' | 'center' | 'right'; direction: TextDirection }) {
    const common = { 'aria-hidden': true, fill: 'none', height: '1em', viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg' }
    const paths = {
        left: 'M5 6h14M5 10h10M5 14h14M5 18h10',
        center: 'M4 6h16M7 10h10M4 14h16M7 18h10',
        right: 'M5 6h14M9 10h10M5 14h14M9 18h10',
    }
    const mirror = direction === 'ltr' && alignment !== 'center' ? 'translate(24 0) scale(-1 1)' : undefined
    return <svg {...common} data-alignment={alignment} data-direction={direction}><path d={paths[alignment]} transform={mirror} {...line} /></svg>
}

function DirectionIcon({ target, direction }: { target: TextDirection; direction: TextDirection }) {
    const common = { 'aria-hidden': true, fill: 'none', height: '1em', viewBox: '0 0 24 24', width: '1em', xmlns: 'http://www.w3.org/2000/svg' }
    const paths = {
        ltr: 'M4 8h15M8 4 4 8l4 4M20 16H5M16 12l4 4-4 4',
        rtl: 'M5 8h15M16 4l4 4-4 4M4 16h15M8 12l-4 4 4 4',
    }
    const mirror = direction === 'ltr' ? 'translate(24 0) scale(-1 1)' : undefined
    return <svg {...common} data-direction={direction} data-target-direction={target}><path d={paths[target]} transform={mirror} {...line} /></svg>
}

function ToolButton({ label, children, active = false, disabled = false, onClick, onRememberSelection }: ToolButtonProps) {
    return <button type='button' title={label} aria-label={label} aria-pressed={active} disabled={disabled} onMouseDown={(event) => { event.preventDefault(); onRememberSelection() }} onClick={onClick} className={`rte-tool-button${active ? ' rte-tool-button-active' : ''}`}>{children}</button>
}

function normalizeHtmlValue(value: unknown) { return typeof value === 'string' ? value : value == null ? '' : String(value) }
function isEmptyHtml(html: string) {
    if (/<(img|table|iframe|video|audio)\b/i.test(html)) return false
    return html.replace(/<br\s*\/?\s*>/gi, '').replace(/<[^>]*>/g, '').replace(/&nbsp;/gi, '').trim().length === 0
}
function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] ?? character) }
function normalizeClassName(value: string) { return value.trim().replace(/\s+/g, ' ') }
function normalizeClipboardHtml(html: string) {
    let normalized = html
    if (/^\s*(?:Version|StartHTML|EndHTML|StartFragment|EndFragment|SourceURL):/i.test(normalized)) normalized = normalized.replace(/^(?:Version|StartHTML|EndHTML|StartFragment|EndFragment|SourceURL):[^\r\n]*(?:\r\n|\r|\n)?/gim, '')
    const start = /<!--\s*StartFragment\s*-->/i.exec(normalized)
    const end = /<!--\s*EndFragment\s*-->/i.exec(normalized)
    if (start && end && end.index > start.index) normalized = normalized.slice(start.index + start[0].length, end.index)
    return normalized.replace(clipboardBoundaryComment, '')
}
function plainTextToHtml(text: string) { return escapeHtml(text).replace(/\r\n?|\u2028|\u2029/g, '<br>') }
function closestEditorBlock(node: Node | null, editor: HTMLElement) {
    const element = node?.nodeType === Node.ELEMENT_NODE ? node as Element : node?.parentElement
    const block = element?.closest<HTMLElement>(blockSelector)
    return block && editor.contains(block) ? block : null
}
function getSelectionBlocks(editor: HTMLElement, range: Range) {
    const candidates = Array.from(editor.querySelectorAll<HTMLElement>(blockSelector)).filter((block) => {
        try { return range.intersectsNode(block) } catch { return false }
    })
    const deepestBlocks = candidates.filter((block) => !candidates.some((candidate) => candidate !== block && block.contains(candidate)))
    if (deepestBlocks.length > 0) return deepestBlocks
    const block = closestEditorBlock(range.startContainer, editor)
    return block ? [block] : []
}
function isSafeUrl(value: string, type: 'image' | 'media' | 'link' | 'file') {
    const url = value.trim()
    if (!url) return false
    if (url.startsWith('/') || url.startsWith('#')) return type === 'image' || type === 'media'
    if (url.startsWith('data:')) {
        if (type === 'image') return /^data:image\/(?!svg\+xml)[a-z0-9.+-]+;base64,/i.test(url)
        if (type === 'media') return /^data:(?:audio|video)\/[a-z0-9.+-]+;base64,/i.test(url)
        if (type === 'file') return /^data:(?!(?:text\/html|application\/xhtml\+xml|image\/svg\+xml)(?:[;,]))[^;,]+\/[^;,]+(?:;[^,]*)?;base64,/i.test(url)
        return false
    }
    if (url.startsWith('blob:')) return type !== 'link'
    try { const protocol = new URL(url).protocol; return (type === 'link' ? ['http:', 'https:', 'mailto:', 'tel:'] : ['http:', 'https:']).includes(protocol) } catch { return false }
}
function sanitizeStyle(value: string) { return value.replace(/expression\s*\(/gi, '').replace(/behavior\s*:/gi, '').replace(/-moz-binding\s*:/gi, '').replace(/url\s*\([^)]*\)/gi, '') }
function sanitizeHtml(html: string) {
    if (typeof document === 'undefined') return html
    const template = document.createElement('template'); template.innerHTML = html
    template.content.querySelectorAll('script,style,iframe,object,embed,form,input,textarea,button,link,meta,base').forEach((element) => element.remove())
    template.content.querySelectorAll<HTMLElement>('*').forEach((element) => {
        Array.from(element.attributes).forEach((attribute) => { if (attribute.name.toLowerCase().startsWith('on') || attribute.name.toLowerCase() === 'srcdoc') element.removeAttribute(attribute.name) })
        if (element.hasAttribute('style')) element.setAttribute('style', sanitizeStyle(element.getAttribute('style') ?? ''))
        if (element instanceof HTMLAnchorElement) { if (!isSafeUrl(element.getAttribute('href') ?? '', element.hasAttribute('download') ? 'file' : 'link')) element.removeAttribute('href'); if (element.getAttribute('target') === '_blank') element.setAttribute('rel', 'noopener noreferrer') }
        if (element instanceof HTMLImageElement) { if (!isSafeUrl(element.getAttribute('src') ?? '', 'image')) element.removeAttribute('src'); element.removeAttribute('srcset') }
        if (element instanceof HTMLVideoElement || element instanceof HTMLAudioElement) { if (!isSafeUrl(element.getAttribute('src') ?? '', 'media')) element.removeAttribute('src'); element.removeAttribute('srcset') }
    })
    return template.innerHTML
}
function normalizeUrl(value: string, type: 'image' | 'link') { const url = value.trim(); return isSafeUrl(url, type) ? url : null }
function getMediaDimension(media: EditableMedia | null, dimension: 'width' | 'height') { if (!media) return ''; const value = media.style[dimension] || media.getAttribute(dimension) || ''; return value.match(/^(\d+(?:\.\d+)?)(?:px)?$/i)?.[1] ?? '' }
function getTableColumnCount(table: HTMLTableElement) { return Math.max(0, ...Array.from(table.rows).map((row) => row.cells.length)) }
function getUploadKind(file: File): UploadKind {
    const type = file.type.trim().toLowerCase()
    if (type.startsWith('image/')) return 'image'
    if (type.startsWith('video/')) return 'video'
    if (type.startsWith('audio/')) return 'audio'
    const extension = file.name.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1] ?? ''
    if (['mp4', 'm4v', 'webm', 'ogv', 'mov', 'avi', 'mkv', 'mpeg', 'mpg', '3gp', '3g2', 'ts'].includes(extension)) return 'video'
    if (['mp3', 'wav', 'ogg', 'oga', 'opus', 'm4a', 'aac', 'flac', 'weba', 'wma', 'aiff'].includes(extension)) return 'audio'
    return 'file'
}
function readFileAsDataUrl(file: File, errorMessage: string) { return new Promise<string>((resolve, reject) => { const reader = new FileReader(); reader.onerror = () => reject(new Error(errorMessage)); reader.onload = () => typeof reader.result === 'string' ? resolve(reader.result) : reject(new Error(errorMessage)); reader.readAsDataURL(file) }) }
async function readImageAsDataUrl(file: File, errorMessage: string) {
    if (file.type.trim()) return readFileAsDataUrl(file, errorMessage)
    if (typeof URL === 'undefined' || typeof Image === 'undefined' || typeof document === 'undefined') return readFileAsDataUrl(file, errorMessage)
    const objectUrl = URL.createObjectURL(file)
    try { const image = await new Promise<HTMLImageElement>((resolve, reject) => { const element = new Image(); element.onload = () => resolve(element); element.onerror = () => reject(new Error(errorMessage)); element.src = objectUrl }); const canvas = document.createElement('canvas'); canvas.width = image.naturalWidth; canvas.height = image.naturalHeight; const context = canvas.getContext('2d'); if (!context || !canvas.width || !canvas.height) throw new Error(errorMessage); context.drawImage(image, 0, 0); return canvas.toDataURL('image/png') } finally { URL.revokeObjectURL(objectUrl) }
}
async function isImageFile(file: File, errorMessage: string) {
    if (file.type.trim().toLowerCase().startsWith('image/') && typeof createImageBitmap !== 'function') return true
    if (file.type.trim() && !file.type.trim().toLowerCase().startsWith('image/')) return false
    if (typeof createImageBitmap === 'function') { try { const bitmap = await createImageBitmap(file); bitmap.close(); return true } catch { return false } }
    if (typeof URL === 'undefined' || typeof Image === 'undefined') return false
    const objectUrl = URL.createObjectURL(file)
    try { await new Promise<void>((resolve, reject) => { const image = new Image(); image.onload = () => resolve(); image.onerror = () => reject(new Error(errorMessage)); image.src = objectUrl }); return true } catch { return false } finally { URL.revokeObjectURL(objectUrl) }
}
function validateImageSource(source: string) {
    if (typeof Image === 'undefined') return Promise.resolve(true)
    return new Promise<boolean>((resolve) => { const image = new Image(); image.onload = () => resolve(true); image.onerror = () => resolve(false); image.src = source })
}
function mediaFromNode(node: Node | null): EditableMedia | null { if (!(node instanceof Element)) return null; return node.matches('img,video,audio') ? node as EditableMedia : null }
function mediaAtEdge(node: Node | null, direction: 'backward' | 'forward'): EditableMedia | null { let current = node; const directMedia = mediaFromNode(current); if (directMedia) return directMedia; while (current && current.childNodes.length) { current = direction === 'backward' ? current.lastChild : current.firstChild; const media = mediaFromNode(current); if (media) return media }; return null }
function adjacentNode(node: Node, direction: 'backward' | 'forward', editor: HTMLElement): Node | null { let current: Node | null = node; while (current && current !== editor) { const sibling = direction === 'backward' ? current.previousSibling : current.nextSibling; if (sibling) return sibling; current = current.parentNode }; return null }
function getCaretAdjacentMedia(editor: HTMLElement, range: Range, direction: 'backward' | 'forward') {
    if (!range.collapsed) return null
    const container = range.startContainer; const offset = range.startOffset
    if (container.nodeType === Node.TEXT_NODE) { const textLength = container.textContent?.length ?? 0; if (direction === 'backward' && offset !== 0) return null; if (direction === 'forward' && offset !== textLength) return null; return mediaAtEdge(adjacentNode(container, direction, editor), direction === 'backward' ? 'backward' : 'forward') }
    const child = direction === 'backward' ? container.childNodes[offset - 1] : container.childNodes[offset]
    return child ? mediaAtEdge(child, direction === 'backward' ? 'backward' : 'forward') : mediaAtEdge(adjacentNode(container, direction, editor), direction === 'backward' ? 'backward' : 'forward')
}

const rootBlockTags = new Set(['P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE', 'PRE', 'OL', 'UL', 'TABLE', 'HR'])
function isRootBlockNode(node: Node) { return node.nodeType === Node.ELEMENT_NODE && rootBlockTags.has((node as Element).tagName) }
function ensureEditorParagraph(editor: HTMLElement) {
    const directInlineNodes: Node[] = []
    let paragraph: HTMLParagraphElement | null = null
    const flush = () => {
        if (directInlineNodes.length === 0) return
        paragraph = document.createElement('p')
        directInlineNodes[0].parentNode?.insertBefore(paragraph, directInlineNodes[0])
        directInlineNodes.splice(0).forEach((node) => paragraph?.appendChild(node))
        paragraph = null
    }
    Array.from(editor.childNodes).forEach((node) => {
        if (isRootBlockNode(node) || (node.nodeType === Node.ELEMENT_NODE && ['IMG', 'VIDEO', 'AUDIO'].includes((node as Element).tagName))) {
            flush()
        } else if (node.nodeType === Node.TEXT_NODE && !(node.textContent ?? '').trim() && directInlineNodes.length === 0) {
            return
        } else {
            directInlineNodes.push(node)
        }
    })
    flush()
}

function EditorModal({ children, onClose, title, titleId, direction }: { children: ReactNode; onClose: () => void; title: string; titleId: string; direction: TextDirection }) {
    return <div className='rte-modal-backdrop' role='presentation' onMouseDown={onClose}><section aria-labelledby={titleId} aria-modal='true' className='rte-modal' dir={direction} role='dialog' tabIndex={-1} onKeyDown={(event) => { if (event.key === 'Escape') onClose() }} onMouseDown={(event) => event.stopPropagation()}><h2 className='rte-modal-title' id={titleId}>{title}</h2>{children}</section></div>
}

export function Textora({ value, onChange, id, theme = 'light', title, error, placeholder, direction = 'ltr', locale = 'English', minHeight = 260, disabled = false, className = '', labels: labelOverrides, maxImageSize = 5 * 1024 * 1024 }: TextoraProps) {
    const generatedEditorId = useId(); const editorId = id ?? generatedEditorId; const editorRef = useRef<HTMLDivElement>(null); const selectionRef = useRef<Range | null>(null); const selectedCellRef = useRef<HTMLTableCellElement | null>(null); const imageInputRef = useRef<HTMLInputElement>(null); const mediaInputRef = useRef<HTMLInputElement>(null); const fileInputRef = useRef<HTMLInputElement>(null); const selectedMediaRef = useRef<EditableMedia | null>(null); const editingImageRef = useRef<HTMLImageElement | null>(null); const editingMediaRef = useRef<HTMLAudioElement | HTMLVideoElement | null>(null); const linkUrlInputRef = useRef<HTMLInputElement>(null); const imageUrlInputRef = useRef<HTMLInputElement>(null); const mediaUrlInputRef = useRef<HTMLInputElement>(null)
    const resolvedTheme = isEditorTheme(theme) ? theme : 'light'; const labels = resolveLabels(locale, labelOverrides); const currentValue = normalizeHtmlValue(value); const editorHeight = Number.isFinite(minHeight) ? Math.max(0, minHeight) : 260
    const [sourceValue, setSourceValue] = useState(currentValue); const [sourceMode, setSourceMode] = useState(false); const [insertModal, setInsertModal] = useState<InsertModal>(null); const [linkUrl, setLinkUrl] = useState(''); const [linkText, setLinkText] = useState(''); const [linkTitle, setLinkTitle] = useState(''); const [tableRows, setTableRows] = useState(3); const [tableColumns, setTableColumns] = useState(3); const [activeTable, setActiveTable] = useState<HTMLTableElement | null>(null); const [panelError, setPanelError] = useState(''); const [isUploading, setIsUploading] = useState(false); const [isEmpty, setIsEmpty] = useState(() => isEmptyHtml(currentValue)); const [activeMedia, setActiveMedia] = useState<EditableMedia | null>(null); const [mediaWidth, setMediaWidth] = useState(''); const [mediaHeight, setMediaHeight] = useState(''); const [mediaType, setMediaType] = useState<MediaType>('video'); const [mediaUrl, setMediaUrl] = useState(''); const [mediaTitle, setMediaTitle] = useState(''); const [mediaAlt, setMediaAlt] = useState(''); const [mediaFormWidth, setMediaFormWidth] = useState(''); const [mediaFormHeight, setMediaFormHeight] = useState(''); const [imageUrl, setImageUrl] = useState(''); const [imageTitle, setImageTitle] = useState(''); const [imageAlt, setImageAlt] = useState(''); const [imageClass, setImageClass] = useState(''); const [imageWidth, setImageWidth] = useState(''); const [imageHeight, setImageHeight] = useState(''); const [active, setActive] = useState({ bold: false, italic: false, underline: false })
    const lastValueRef = useRef(currentValue)
    const emitChange = useCallback((nextValue: string) => { if (lastValueRef.current === nextValue) return; lastValueRef.current = nextValue; setSourceValue(nextValue); setIsEmpty(isEmptyHtml(nextValue)); onChange(nextValue) }, [onChange])
    useEffect(() => { const safeValue = sanitizeHtml(currentValue); lastValueRef.current = currentValue; setSourceValue(currentValue); setIsEmpty(isEmptyHtml(safeValue)); if (!sourceMode && editorRef.current && editorRef.current.innerHTML !== safeValue) editorRef.current.innerHTML = safeValue }, [currentValue, sourceMode])
    const rememberSelection = useCallback(() => { const editor = editorRef.current; const selection = typeof window === 'undefined' ? null : window.getSelection(); if (!editor || !selection || selection.rangeCount === 0) return; const range = selection.getRangeAt(0); if (editor.contains(range.commonAncestorContainer)) selectionRef.current = range.cloneRange() }, [])
    const restoreSelection = useCallback(() => { const selection = typeof window === 'undefined' ? null : window.getSelection(); const editor = editorRef.current; if (!selection || !editor) return; editor.focus({ preventScroll: true }); if (selectionRef.current && editor.contains(selectionRef.current.commonAncestorContainer)) { selection.removeAllRanges(); selection.addRange(selectionRef.current) } }, [])
    const updateToolbarState = useCallback(() => { const editor = editorRef.current; const selection = typeof window === 'undefined' ? null : window.getSelection(); if (!editor || !selection || selection.rangeCount === 0 || !editor.contains(selection.anchorNode)) return; setActive({ bold: document.queryCommandState('bold'), italic: document.queryCommandState('italic'), underline: document.queryCommandState('underline') }); rememberSelection() }, [rememberSelection])
    useEffect(() => { document.addEventListener('selectionchange', updateToolbarState); return () => document.removeEventListener('selectionchange', updateToolbarState) }, [updateToolbarState]); useEffect(() => { if (insertModal === 'link') linkUrlInputRef.current?.focus(); if (insertModal === 'image') imageUrlInputRef.current?.focus(); if (insertModal === 'media') mediaUrlInputRef.current?.focus() }, [insertModal])
    const commitEditorValue = useCallback(() => { if (editorRef.current) { ensureEditorParagraph(editorRef.current); emitChange(editorRef.current.innerHTML); rememberSelection(); updateToolbarState() } }, [emitChange, rememberSelection, updateToolbarState])
    const runCommand = useCallback((command: string, commandValue?: string) => { if (disabled || sourceMode) return; restoreSelection(); document.execCommand(command, false, commandValue); commitEditorValue() }, [commitEditorValue, disabled, restoreSelection, sourceMode])
    const setFontSize = (size: string) => { runCommand('fontSize', '7'); editorRef.current?.querySelectorAll<HTMLElement>('font[size="7"]').forEach((font) => { font.removeAttribute('size'); font.style.fontSize = `${size}px` }); commitEditorValue() }
    const applyTextAlignment = useCallback((alignment: 'left' | 'center' | 'right') => {
        if (disabled || sourceMode) return
        restoreSelection()
        const editor = editorRef.current
        const selection = typeof window === 'undefined' ? null : window.getSelection()
        let range = selection?.rangeCount ? selection.getRangeAt(0) : null
        if (!editor || !range || !editor.contains(range.commonAncestorContainer)) return
        let blocks = getSelectionBlocks(editor, range)
        if (blocks.length === 0) {
            document.execCommand('formatBlock', false, 'p')
            range = selection?.rangeCount ? selection.getRangeAt(0) : null
            if (range) blocks = getSelectionBlocks(editor, range)
        }
        blocks.forEach((block) => { block.style.textAlign = alignment })
        if (blocks.length > 0) commitEditorValue()
    }, [commitEditorValue, disabled, restoreSelection, sourceMode])
    const setTextDirection = (nextDirection: TextDirection) => { if (!editorRef.current || sourceMode || disabled) return; restoreSelection(); const selection = typeof window === 'undefined' ? null : window.getSelection(); const range = selection?.rangeCount ? selection.getRangeAt(0) : null; const blocks = Array.from(editorRef.current.querySelectorAll<HTMLElement>(blockSelector)).filter((block) => { try { return Boolean(range?.intersectsNode(block)) } catch { return false } }); if (blocks.length === 0) { const node = range?.startContainer; const element = node?.nodeType === Node.ELEMENT_NODE ? node as Element : node?.parentElement; const block = element?.closest<HTMLElement>(blockSelector); if (block && editorRef.current.contains(block)) blocks.push(block); else { document.execCommand('formatBlock', false, 'p'); const selected = window.getSelection()?.anchorNode; const paragraph = selected?.nodeType === Node.ELEMENT_NODE ? (selected as Element).closest<HTMLElement>('p') : selected?.parentElement?.closest<HTMLElement>('p'); if (paragraph) blocks.push(paragraph) } } blocks.forEach((block) => { block.dir = nextDirection }); commitEditorValue() }
    const clearFormatting = () => { runCommand('removeFormat'); runCommand('unlink'); runCommand('formatBlock', 'p') }
    const closeModal = () => { setInsertModal(null); setPanelError(''); setIsUploading(false); editingImageRef.current = null; editingMediaRef.current = null }; const insertHtml = (html: string) => { restoreSelection(); document.execCommand('insertHTML', false, sanitizeHtml(html)); closeModal(); commitEditorValue() }
    const openLinkModal = () => { rememberSelection(); setPanelError(''); setLinkUrl(''); setLinkText(selectionRef.current?.toString() ?? ''); setLinkTitle(''); setInsertModal('link') }; const openTableModal = () => { rememberSelection(); setPanelError(''); setInsertModal('table') };
    const openImageModal = () => { if (disabled || sourceMode || isUploading) return; rememberSelection(); setPanelError(''); const selectedImage = selectedMediaRef.current instanceof HTMLImageElement && editorRef.current?.contains(selectedMediaRef.current) ? selectedMediaRef.current : null; editingImageRef.current = selectedImage; setImageUrl(selectedImage?.getAttribute('src') ?? ''); setImageTitle(selectedImage?.getAttribute('title') ?? ''); setImageAlt(selectedImage?.getAttribute('alt') ?? ''); setImageClass(selectedImage?.getAttribute('class') ?? ''); setImageWidth(getMediaDimension(selectedImage, 'width')); setImageHeight(getMediaDimension(selectedImage, 'height')); if (!selectedImage) { setImageUrl(''); setImageTitle(''); setImageAlt(''); setImageClass(''); setImageWidth(''); setImageHeight('') } setInsertModal('image') }
    const openMediaModal = () => { if (disabled || sourceMode || isUploading) return; rememberSelection(); setPanelError(''); const selected = selectedMediaRef.current; const selectedMedia = selected instanceof HTMLAudioElement || selected instanceof HTMLVideoElement ? selected : null; editingMediaRef.current = selectedMedia; setMediaType(selectedMedia instanceof HTMLAudioElement ? 'audio' : 'video'); setMediaUrl(selectedMedia?.getAttribute('src') ?? ''); setMediaTitle(selectedMedia?.getAttribute('title') ?? ''); setMediaAlt(selectedMedia?.getAttribute('alt') ?? selectedMedia?.getAttribute('data-alt') ?? selectedMedia?.getAttribute('aria-label') ?? ''); setMediaFormWidth(getMediaDimension(selectedMedia, 'width')); setMediaFormHeight(getMediaDimension(selectedMedia, 'height')); if (!selectedMedia) { setMediaUrl(''); setMediaTitle(''); setMediaAlt(''); setMediaFormWidth(''); setMediaFormHeight('') } setInsertModal('media') }
    const handleLinkInsert = () => { const href = normalizeUrl(linkUrl, 'link'); const text = linkText.trim(); if (!href) { setPanelError(labels.invalidUrl); return }; if (!text) { setPanelError(labels.linkTextRequired); return }; const titleAttribute = linkTitle.trim() ? ` title="${escapeHtml(linkTitle.trim())}"` : ''; insertHtml(`<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer"${titleAttribute}>${escapeHtml(text)}</a>`) }
    const handleTableInsert = () => { const rows = Math.min(12, Math.max(1, Number(tableRows) || 1)); const columns = Math.min(8, Math.max(1, Number(tableColumns) || 1)); const body = Array.from({ length: rows }, () => `<tr>${Array.from({ length: columns }, () => '<td><br></td>').join('')}</tr>`).join(''); insertHtml(`<table><tbody>${body}</tbody></table><p><br></p>`) }
    const getActiveTableContext = () => { const table = activeTable; const cell = selectedCellRef.current; if (!table || !cell || !editorRef.current?.contains(table) || !table.contains(cell)) { setActiveTable(null); selectedCellRef.current = null; return null }; return { table, cell } }; const commitTableMutation = (mutation: () => void) => { if (disabled || sourceMode || !getActiveTableContext()) return; mutation(); commitEditorValue() }
    const addTableRow = () => commitTableMutation(() => { const context = getActiveTableContext(); const sourceRow = context?.cell.closest<HTMLTableRowElement>('tr'); if (!context || !sourceRow?.parentElement) return; const row = document.createElement('tr'); for (let i = 0; i < Math.max(getTableColumnCount(context.table), 1); i += 1) { const cell = document.createElement('td'); cell.innerHTML = '<br>'; row.appendChild(cell) }; sourceRow.parentElement.insertBefore(row, sourceRow.nextSibling); selectedCellRef.current = row.cells[0] ?? null }); const deleteTableRow = () => commitTableMutation(() => { const context = getActiveTableContext(); const sourceRow = context?.cell.closest<HTMLTableRowElement>('tr'); if (!context || !sourceRow || context.table.rows.length <= 1) return; const replacement = (sourceRow.previousElementSibling ?? sourceRow.nextElementSibling) as HTMLTableRowElement | null; sourceRow.remove(); selectedCellRef.current = replacement?.cells[0] ?? null }); const addTableColumn = () => commitTableMutation(() => { const context = getActiveTableContext(); const sourceRow = context?.cell.closest<HTMLTableRowElement>('tr'); if (!context || !sourceRow) return; const index = context.cell.cellIndex; Array.from(context.table.rows).forEach((row) => { const reference = row.cells[index]; const cell = document.createElement(reference?.tagName.toLowerCase() === 'th' ? 'th' : 'td'); cell.innerHTML = '<br>'; if (reference) row.insertBefore(cell, reference); else row.appendChild(cell) }); selectedCellRef.current = sourceRow.cells[index] ?? null }); const deleteTableColumn = () => commitTableMutation(() => { const context = getActiveTableContext(); if (!context || getTableColumnCount(context.table) <= 1) return; const index = context.cell.cellIndex; const selectedRow = context.cell.closest<HTMLTableRowElement>('tr'); Array.from(context.table.rows).forEach((row) => row.cells[index]?.remove()); selectedCellRef.current = selectedRow?.cells[Math.min(index, getTableColumnCount(context.table) - 1)] ?? null })
    const insertUploadedFile = async (file: File, picker: UploadPicker) => { if (!file || file.size === 0) throw new Error(labels.invalidFile); const kind = getUploadKind(file); if (picker === 'media' && kind !== 'video' && kind !== 'audio') throw new Error(labels.invalidFile); if (kind === 'image') { if (file.size > maxImageSize) throw new Error(labels.imageTooLarge); if (!await isImageFile(file, labels.invalidImage)) throw new Error(labels.invalidImage) }; const dataUrl = kind === 'image' ? await readImageAsDataUrl(file, labels.fileReadError) : await readFileAsDataUrl(file, labels.fileReadError); const safeType = kind === 'image' ? 'image' : kind === 'file' ? 'file' : 'media'; if (!isSafeUrl(dataUrl, safeType)) throw new Error(kind === 'image' ? labels.invalidImage : labels.invalidFile); const src = escapeHtml(dataUrl); const fileName = escapeHtml(file.name); const html = kind === 'image' ? `<img src="${src}" alt="${fileName}" title="${fileName}" data-file-name="${fileName}" />` : kind === 'video' ? `<video src="${src}" title="${fileName}" data-file-name="${fileName}" controls style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;"></video>` : kind === 'audio' ? `<audio src="${src}" title="${fileName}" data-file-name="${fileName}" controls style="display: block; margin-left: auto; margin-right: auto;"></audio>` : `<a href="${src}" target="_blank" rel="noopener noreferrer" download="${fileName}">${fileName}</a>`; insertHtml(html) }
    const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>, picker: UploadPicker) => { const file = event.target.files?.[0]; event.target.value = ''; if (!file) return; setIsUploading(true); setPanelError(''); try { await insertUploadedFile(file, picker) } catch (uploadError) { setPanelError(uploadError instanceof Error ? uploadError.message : labels.invalidFile) } finally { setIsUploading(false) } }
    const handleImageFileSelect = async (event: ChangeEvent<HTMLInputElement>) => { const file = event.target.files?.[0]; event.target.value = ''; if (!file || file.size === 0) { setPanelError(labels.invalidImage); return }; if (file.size > maxImageSize) { setPanelError(labels.imageTooLarge); return }; setIsUploading(true); setPanelError(''); try { if (!await isImageFile(file, labels.invalidImage)) throw new Error(labels.invalidImage); const dataUrl = await readImageAsDataUrl(file, labels.fileReadError); if (!isSafeUrl(dataUrl, 'image')) throw new Error(labels.invalidImage); setImageUrl(dataUrl); if (!imageAlt) setImageAlt(file.name) } catch (uploadError) { setPanelError(uploadError instanceof Error ? uploadError.message : labels.invalidImage) } finally { setIsUploading(false) } }
    const handleMediaFileSelect = async (event: ChangeEvent<HTMLInputElement>) => { const file = event.target.files?.[0]; event.target.value = ''; if (!file || file.size === 0) { setPanelError(labels.invalidFile); return }; const kind = getUploadKind(file); if (kind !== 'audio' && kind !== 'video') { setPanelError(labels.invalidFile); return }; setIsUploading(true); setPanelError(''); try { const dataUrl = await readFileAsDataUrl(file, labels.fileReadError); if (!isSafeUrl(dataUrl, 'media')) throw new Error(labels.invalidFile); setMediaType(kind); setMediaUrl(dataUrl); if (!mediaTitle) setMediaTitle(file.name); if (!mediaAlt) setMediaAlt(file.name) } catch (uploadError) { setPanelError(uploadError instanceof Error ? uploadError.message : labels.fileReadError) } finally { setIsUploading(false) } }
    const openFilePicker = (picker: UploadPicker) => { if (disabled || sourceMode || isUploading) return; rememberSelection(); setPanelError(''); if (picker === 'media') mediaInputRef.current?.click(); else fileInputRef.current?.click() }
    const updateMediaDimension = (dimension: 'width' | 'height', value: string) => { const media = selectedMediaRef.current; if (disabled || sourceMode || !media || !editorRef.current?.contains(media)) return; const number = Number(value); if (!value.trim()) media.style.removeProperty(dimension); else if (Number.isFinite(number) && number > 0) media.style.setProperty(dimension, `${number}px`); if (dimension === 'width') setMediaWidth(value); else setMediaHeight(value); commitEditorValue() }
    const updateMediaAlignment = (alignment: 'left' | 'center' | 'right') => { const media = selectedMediaRef.current; if (!media || disabled || sourceMode || !editorRef.current?.contains(media)) { applyTextAlignment(alignment); return }; media.style.display = 'block'; media.style.marginTop = '.75rem'; media.style.marginBottom = '.75rem'; media.style.marginLeft = alignment === 'right' ? 'auto' : alignment === 'center' ? 'auto' : '0'; media.style.marginRight = alignment === 'left' ? 'auto' : alignment === 'center' ? 'auto' : '0'; commitEditorValue() }
    const removeMedia = useCallback((media: EditableMedia) => { const editor = editorRef.current; const parent = media.parentNode; if (!editor || !parent || !editor.contains(media)) return; const index = Array.prototype.indexOf.call(parent.childNodes, media) as number; media.remove(); const selection = typeof window === 'undefined' ? null : window.getSelection(); const range = document.createRange(); range.setStart(parent, Math.min(index, parent.childNodes.length)); range.collapse(true); if (selection) { selection.removeAllRanges(); selection.addRange(range) }; selectionRef.current = range.cloneRange(); selectedMediaRef.current = null; setActiveMedia(null); commitEditorValue() }, [commitEditorValue])
    const handleEditorKeyDown = (event: KeyboardEvent<HTMLDivElement>) => { if (disabled || sourceMode) return; const editor = editorRef.current; if (event.key === 'Enter' && editor && editor.childNodes.length === 0) { event.preventDefault(); const paragraph = document.createElement('p'); paragraph.appendChild(document.createElement('br')); editor.appendChild(paragraph); const selection = window.getSelection(); const range = document.createRange(); range.setStart(paragraph, 0); range.collapse(true); selection?.removeAllRanges(); selection?.addRange(range); selectionRef.current = range.cloneRange(); commitEditorValue(); return }; if (event.key !== 'Backspace' && event.key !== 'Delete') return; const selection = typeof window === 'undefined' ? null : window.getSelection(); const range = selection?.rangeCount ? selection.getRangeAt(0) : null; const activeSelected = selectedMediaRef.current && range && (getCaretAdjacentMedia(editorRef.current!, range, 'backward') === selectedMediaRef.current || getCaretAdjacentMedia(editorRef.current!, range, 'forward') === selectedMediaRef.current) ? selectedMediaRef.current : null; const adjacent = range && editorRef.current ? getCaretAdjacentMedia(editorRef.current, range, event.key === 'Backspace' ? 'backward' : 'forward') : null; const media = activeSelected ?? adjacent; if (media) { event.preventDefault(); removeMedia(media) } }
    const toggleSourceMode = () => { if (disabled) return; if (sourceMode) { const safeValue = sanitizeHtml(sourceValue); if (editorRef.current) { editorRef.current.innerHTML = safeValue; ensureEditorParagraph(editorRef.current) }; emitChange(editorRef.current?.innerHTML ?? safeValue) } else setSourceValue(editorRef.current?.innerHTML ?? currentValue); setActiveTable(null); selectedCellRef.current = null; selectedMediaRef.current = null; setActiveMedia(null); setSourceMode((current) => !current) }
    const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => { event.preventDefault(); const clipboardHtml = normalizeClipboardHtml(event.clipboardData.getData('text/html')); const text = event.clipboardData.getData('text/plain'); const safeHtml = clipboardHtml.trim() ? sanitizeHtml(clipboardHtml) : ''; const content = safeHtml.trim() ? safeHtml : plainTextToHtml(text); if (!content) return; rememberSelection(); if (editorRef.current) ensureEditorParagraph(editorRef.current); restoreSelection(); document.execCommand('insertHTML', false, content); commitEditorValue() }
    const handleEditorClick = (event: MouseEvent<HTMLDivElement>) => { const target = event.target; if (!(target instanceof HTMLElement)) return; const media = target.closest('img,video,audio') as EditableMedia | null; if (media && editorRef.current?.contains(media)) { selectedMediaRef.current = media; setActiveMedia(media); setMediaWidth(getMediaDimension(media, 'width')); setMediaHeight(getMediaDimension(media, 'height')); selectedCellRef.current = null; setActiveTable(null); const selection = window.getSelection(); const range = document.createRange(); range.setStartAfter(media); range.collapse(true); selection?.removeAllRanges(); selection?.addRange(range); selectionRef.current = range.cloneRange(); return }; selectedMediaRef.current = null; setActiveMedia(null); const cell = target.closest<HTMLTableCellElement>('td,th'); const table = cell?.closest<HTMLTableElement>('table'); if (!cell || !table || !editorRef.current?.contains(table)) { selectedCellRef.current = null; setActiveTable(null); return }; selectedCellRef.current = cell; setActiveTable(table); rememberSelection() }
    const handleImageInsert = async () => { if (isUploading) return; const source = normalizeUrl(imageUrl, 'image'); if (!source) { setPanelError(labels.invalidUrl); return }; const width = imageWidth.trim() ? Number(imageWidth) : null; const height = imageHeight.trim() ? Number(imageHeight) : null; if ((width !== null && (!Number.isFinite(width) || width <= 0)) || (height !== null && (!Number.isFinite(height) || height <= 0))) { setPanelError(labels.invalidDimensions); return }; setIsUploading(true); setPanelError(''); try { if (!await validateImageSource(source)) throw new Error(labels.invalidImage); const widthAttribute = width === null ? '' : ` width="${width}"`; const heightAttribute = height === null ? '' : ` height="${height}"`; const titleAttribute = imageTitle.trim() ? ` title="${escapeHtml(imageTitle.trim())}"` : ''; const altAttribute = ` alt="${escapeHtml(imageAlt)}"`; const normalizedClass = normalizeClassName(imageClass); const existingImage = editingImageRef.current; if (existingImage && editorRef.current?.contains(existingImage)) { existingImage.setAttribute('src', source); existingImage.setAttribute('alt', imageAlt); if (imageTitle.trim()) existingImage.setAttribute('title', imageTitle.trim()); else existingImage.removeAttribute('title'); if (width === null) existingImage.removeAttribute('width'); else existingImage.setAttribute('width', String(width)); if (height === null) existingImage.removeAttribute('height'); else existingImage.setAttribute('height', String(height)); if (normalizedClass) existingImage.setAttribute('class', normalizedClass); else existingImage.removeAttribute('class'); closeModal(); commitEditorValue() } else { const classAttribute = normalizedClass ? ` class="${escapeHtml(normalizedClass)}"` : ''; insertHtml(`<img src="${escapeHtml(source)}"${altAttribute}${titleAttribute}${widthAttribute}${heightAttribute}${classAttribute} />`) } } catch (imageError) { setPanelError(imageError instanceof Error ? imageError.message : labels.invalidImage) } finally { setIsUploading(false) } }
    const handleMediaInsert = async () => { if (isUploading) return; const source = mediaUrl.trim(); if (!isSafeUrl(source, 'media')) { setPanelError(labels.invalidUrl); return }; const width = mediaFormWidth.trim() ? Number(mediaFormWidth) : null; const height = mediaFormHeight.trim() ? Number(mediaFormHeight) : null; if ((width !== null && (!Number.isFinite(width) || width <= 0)) || (height !== null && (!Number.isFinite(height) || height <= 0))) { setPanelError(labels.invalidDimensions); return }; const media = editingMediaRef.current; const title = mediaTitle.trim(); const alt = mediaAlt.trim(); const widthAttribute = width === null ? '' : ` width="${width}"`; const heightAttribute = height === null ? '' : ` height="${height}"`; const titleAttribute = title ? ` title="${escapeHtml(title)}"` : ''; const altAttribute = alt ? ` alt="${escapeHtml(alt)}" data-alt="${escapeHtml(alt)}" aria-label="${escapeHtml(alt)}"` : ''; if (media && editorRef.current?.contains(media)) { media.setAttribute('src', source); if (title) media.setAttribute('title', title); else media.removeAttribute('title'); if (alt) { media.setAttribute('alt', alt); media.setAttribute('data-alt', alt); media.setAttribute('aria-label', alt) } else { media.removeAttribute('alt'); media.removeAttribute('data-alt'); media.removeAttribute('aria-label') } if (width === null) media.removeAttribute('width'); else media.setAttribute('width', String(width)); if (height === null) media.removeAttribute('height'); else media.setAttribute('height', String(height)); closeModal(); commitEditorValue(); return }; const tag = mediaType; insertHtml(`<${tag} src="${escapeHtml(source)}"${titleAttribute}${altAttribute}${widthAttribute}${heightAttribute} controls style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;"></${tag}>`) }
    const activeTableRowCount = activeTable?.rows.length ?? 0; const activeTableColumnCount = activeTable ? getTableColumnCount(activeTable) : 0; const commonDisabled = disabled || sourceMode; const button = (label: string, name: IconName, onClick: () => void, active = false) => <ToolButton label={label} active={active} disabled={commonDisabled} onRememberSelection={rememberSelection} onClick={onClick}><Icon name={name} /></ToolButton>; const resolvedPlaceholder = placeholder ?? labels.placeholder; const ariaLabel = title ?? labels.editorAriaLabel

    return <div className={`rte-root ${className}`.trim()} data-direction={direction} data-theme={resolvedTheme} dir={direction}>
        {title && <label className='rte-title' htmlFor={editorId} id={`${editorId}-label`}>{title}</label>}
        <div className={`rte-shell${error ? ' rte-shell-error' : ''}${disabled ? ' rte-shell-disabled' : ''}`}>
            <div className='rte-toolbar' role='toolbar' aria-label={ariaLabel}>
                <div className='rte-toolbar-group'><label className='rte-select-wrap'><span className='rte-sr-only'>{labels.fontSize}</span><select aria-label={labels.fontSize} title={labels.fontSize} defaultValue='16' disabled={commonDisabled} onMouseDown={rememberSelection} onChange={(event) => setFontSize(event.target.value)} className='rte-select'>{fontSizes.map((size) => <option key={size} value={size}>{size}px</option>)}</select><Icon name='chevron' /></label><label className='rte-select-wrap'><span className='rte-sr-only'>{labels.paragraph}</span><select aria-label={labels.paragraph} title={labels.paragraph} defaultValue='p' disabled={commonDisabled} onMouseDown={rememberSelection} onChange={(event) => runCommand('formatBlock', event.target.value)} className='rte-select'>{blockFormats.map((format) => <option key={format.value} value={format.value}>{labels[format.labelKey]}</option>)}</select><Icon name='chevron' /></label></div>
                <div className='rte-toolbar-group'>{button(labels.bold, 'bold', () => runCommand('bold'), active.bold)}{button(labels.italic, 'italic', () => runCommand('italic'), active.italic)}{button(labels.underline, 'underline', () => runCommand('underline'), active.underline)}</div>
                <div className='rte-toolbar-group'><ToolButton label={labels.alignRight} disabled={commonDisabled} onRememberSelection={rememberSelection} onClick={() => updateMediaAlignment(direction === 'ltr' ? 'left' : 'right')}><AlignmentIcon alignment='right' direction={direction} /></ToolButton><ToolButton label={labels.alignCenter} disabled={commonDisabled} onRememberSelection={rememberSelection} onClick={() => updateMediaAlignment('center')}><AlignmentIcon alignment='center' direction={direction} /></ToolButton><ToolButton label={labels.alignLeft} disabled={commonDisabled} onRememberSelection={rememberSelection} onClick={() => updateMediaAlignment(direction === 'ltr' ? 'right' : 'left')}><AlignmentIcon alignment='left' direction={direction} /></ToolButton>{direction === 'rtl' ? <><ToolButton label={labels.rtl} disabled={commonDisabled} onRememberSelection={rememberSelection} onClick={() => setTextDirection('rtl')}><DirectionIcon target='rtl' direction={direction} /></ToolButton><ToolButton label={labels.ltr} disabled={commonDisabled} onRememberSelection={rememberSelection} onClick={() => setTextDirection('ltr')}><DirectionIcon target='ltr' direction={direction} /></ToolButton></> : <><ToolButton label={labels.ltr} disabled={commonDisabled} onRememberSelection={rememberSelection} onClick={() => setTextDirection('ltr')}><DirectionIcon target='ltr' direction={direction} /></ToolButton><ToolButton label={labels.rtl} disabled={commonDisabled} onRememberSelection={rememberSelection} onClick={() => setTextDirection('rtl')}><DirectionIcon target='rtl' direction={direction} /></ToolButton></>}</div>
                <div className='rte-toolbar-group'>{button(labels.orderedList, 'ordered', () => runCommand('insertOrderedList'))}{button(labels.unorderedList, 'list', () => runCommand('insertUnorderedList'))}</div>
                <div className='rte-toolbar-group'><label className='rte-color-button' title={labels.textColor} aria-label={labels.textColor} onMouseDown={rememberSelection}><Icon name='palette' /><input type='color' defaultValue='#171821' disabled={commonDisabled} onChange={(event) => runCommand('foreColor', event.target.value)} /></label><label className='rte-color-button' title={labels.backgroundColor} aria-label={labels.backgroundColor} onMouseDown={rememberSelection}><Icon name='highlight' /><input type='color' defaultValue='#ece8f8' disabled={commonDisabled} onChange={(event) => runCommand('hiliteColor', event.target.value)} /></label>{button(labels.clearFormatting, 'clear', clearFormatting)}</div>
                <div className='rte-toolbar-group'>{button(isUploading ? labels.uploading : labels.insertImage, 'photo', openImageModal)}{button(isUploading ? labels.uploading : labels.insertMedia, 'play', openMediaModal, insertModal === 'media')}{button(isUploading ? labels.uploading : labels.insertFile, 'file', () => openFilePicker('file'))}{button(labels.insertLink, 'link', openLinkModal, insertModal === 'link')}{button(labels.insertTable, 'table', openTableModal, insertModal === 'table')}</div>
                <div className='rte-toolbar-last'><ToolButton label={labels.sourceCode} active={sourceMode} disabled={disabled} onRememberSelection={rememberSelection} onClick={toggleSourceMode}><Icon name='code' /></ToolButton></div>
            </div>
            <input ref={imageInputRef} type='file' accept='image/*' aria-label={labels.selectImage} onChange={handleImageFileSelect} className='rte-hidden' /><input ref={mediaInputRef} type='file' accept='audio/*,video/*' aria-label={labels.selectMedia} onChange={handleMediaFileSelect} className='rte-hidden' /><input ref={fileInputRef} type='file' accept='*/*' aria-label={labels.selectFile} onChange={(event) => handleFileUpload(event, 'file')} className='rte-hidden' />
            {activeMedia && !sourceMode && !disabled && <div className='rte-subtoolbar'><span className='rte-subtoolbar-label'>{labels.mediaDimensions}</span><label className='rte-inline-label'>{labels.width}<input type='number' min='1' step='1' inputMode='numeric' value={mediaWidth} onChange={(event) => updateMediaDimension('width', event.target.value)} className='rte-field rte-dimension-field' /></label><label className='rte-inline-label'>{labels.height}<input type='number' min='1' step='1' inputMode='numeric' value={mediaHeight} onChange={(event) => updateMediaDimension('height', event.target.value)} className='rte-field rte-dimension-field' /></label></div>}
            {activeTable && !sourceMode && <div className='rte-subtoolbar'><span className='rte-subtoolbar-label'>{labels.tableControls}</span><button type='button' onMouseDown={(event) => event.preventDefault()} onClick={addTableRow} disabled={disabled} className='rte-action-button'>{labels.addRow}</button><button type='button' onMouseDown={(event) => event.preventDefault()} onClick={deleteTableRow} disabled={disabled || activeTableRowCount <= 1} className='rte-action-button'>{labels.deleteRow}</button><button type='button' onMouseDown={(event) => event.preventDefault()} onClick={addTableColumn} disabled={disabled} className='rte-action-button'>{labels.addColumn}</button><button type='button' onMouseDown={(event) => event.preventDefault()} onClick={deleteTableColumn} disabled={disabled || activeTableColumnCount <= 1} className='rte-action-button'>{labels.deleteColumn}</button></div>}
            {panelError && !insertModal && <p role='alert' className='rte-inline-feedback'>{panelError}</p>}
            <div className='rte-editor-wrap'>{sourceMode ? <textarea id={editorId} value={sourceValue} disabled={disabled} dir='ltr' spellCheck={false} aria-label={ariaLabel} aria-labelledby={title ? `${editorId}-label` : undefined} aria-invalid={error ? true : undefined} aria-describedby={error ? `${editorId}-error` : undefined} onChange={(event) => emitChange(event.target.value)} className='rte-source' style={{ height: editorHeight, minHeight: editorHeight }} /> : <>{isEmpty && <span aria-hidden='true' className='rte-placeholder'>{resolvedPlaceholder}</span>}<div ref={editorRef} id={editorId} role='textbox' aria-multiline='true' aria-label={ariaLabel} aria-labelledby={title ? `${editorId}-label` : undefined} aria-invalid={error ? true : undefined} aria-describedby={error ? `${editorId}-error` : undefined} contentEditable={!disabled} suppressContentEditableWarning dir={direction} onInput={commitEditorValue} onBlur={rememberSelection} onClick={handleEditorClick} onKeyDown={handleEditorKeyDown} onPaste={handlePaste} className='rte-editor' style={{ height: editorHeight, minHeight: editorHeight }} /></>}</div>
        </div>
        {insertModal && <EditorModal onClose={closeModal} direction={direction} titleId={`${editorId}-modal-title`} title={insertModal === 'image' ? labels.insertImage : insertModal === 'media' ? labels.insertMedia : insertModal === 'link' ? labels.insertLink : labels.insertTable}>
            {insertModal === 'image' ? <div className='rte-modal-content'>
                <label className='rte-modal-label' htmlFor={`${editorId}-image-url`}>{labels.imageUrl}<input ref={imageUrlInputRef} id={`${editorId}-image-url`} type='text' inputMode='url' value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} dir='ltr' placeholder={labels.imageUrlPlaceholder} className='rte-field' /></label><button type='button' className='rte-action-button rte-upload-button' onClick={() => imageInputRef.current?.click()} disabled={isUploading}>{isUploading ? labels.uploading : labels.selectImage}</button>
                {imageUrl && normalizeUrl(imageUrl, 'image') && <div className='rte-image-preview'><span className='rte-modal-label'>{labels.imagePreview}</span><img src={imageUrl} alt={imageAlt} /></div>}
                <div className='rte-modal-grid'><label className='rte-modal-label' htmlFor={`${editorId}-image-title`}>{labels.imageTitle}<input id={`${editorId}-image-title`} type='text' value={imageTitle} onChange={(event) => setImageTitle(event.target.value)} className='rte-field' /></label><label className='rte-modal-label' htmlFor={`${editorId}-image-alt`}>{labels.imageAlt}<input id={`${editorId}-image-alt`} type='text' value={imageAlt} onChange={(event) => setImageAlt(event.target.value)} className='rte-field' /></label></div><label className='rte-modal-label' htmlFor={`${editorId}-image-class`}>{labels.imageClass}<input id={`${editorId}-image-class`} type='text' value={imageClass} onChange={(event) => setImageClass(event.target.value)} className='rte-field' /></label><div className='rte-modal-grid'><label className='rte-modal-label' htmlFor={`${editorId}-image-width`}>{labels.imageWidth}<input id={`${editorId}-image-width`} type='number' min='1' step='1' value={imageWidth} onChange={(event) => setImageWidth(event.target.value)} className='rte-field' /></label><label className='rte-modal-label' htmlFor={`${editorId}-image-height`}>{labels.imageHeight}<input id={`${editorId}-image-height`} type='number' min='1' step='1' value={imageHeight} onChange={(event) => setImageHeight(event.target.value)} className='rte-field' /></label></div>
                {panelError && <p role='alert' className='rte-panel-error'>{panelError}</p>}<div className='rte-modal-actions'><button type='button' onClick={closeModal} className='rte-action-button'>{labels.cancel}</button><button type='button' onClick={handleImageInsert} disabled={isUploading} className='rte-primary-button'>{isUploading ? labels.uploading : labels.insertImage}</button></div>
            </div> : insertModal === 'media' ? <div className='rte-modal-content'>
                <div className='rte-modal-grid'><label className='rte-modal-label' htmlFor={`${editorId}-media-type`}>{labels.mediaType}<select id={`${editorId}-media-type`} value={mediaType} onChange={(event) => setMediaType(event.target.value as MediaType)} className='rte-field'><option value='audio'>{labels.audio}</option><option value='video'>{labels.video}</option></select></label><label className='rte-modal-label' htmlFor={`${editorId}-media-url`}>{labels.mediaUrl}<input ref={mediaUrlInputRef} id={`${editorId}-media-url`} type='text' inputMode='url' value={mediaUrl} onChange={(event) => setMediaUrl(event.target.value)} dir='ltr' placeholder={labels.mediaUrlPlaceholder} className='rte-field' /></label></div><button type='button' className='rte-action-button rte-upload-button' onClick={() => mediaInputRef.current?.click()} disabled={isUploading}>{isUploading ? labels.uploading : labels.selectMedia}</button>
                {mediaUrl && isSafeUrl(mediaUrl, 'media') && <div className='rte-image-preview'><span className='rte-modal-label'>{labels.mediaPreview}</span>{mediaType === 'audio' ? <audio src={mediaUrl} controls /> : <video src={mediaUrl} controls />}</div>}
                <div className='rte-modal-grid'><label className='rte-modal-label' htmlFor={`${editorId}-media-title`}>{labels.mediaTitle}<input id={`${editorId}-media-title`} type='text' value={mediaTitle} onChange={(event) => setMediaTitle(event.target.value)} className='rte-field' /></label><label className='rte-modal-label' htmlFor={`${editorId}-media-alt`}>{labels.mediaAlt}<input id={`${editorId}-media-alt`} type='text' value={mediaAlt} onChange={(event) => setMediaAlt(event.target.value)} className='rte-field' /></label></div><div className='rte-modal-grid'><label className='rte-modal-label' htmlFor={`${editorId}-media-width`}>{labels.mediaWidth}<input id={`${editorId}-media-width`} type='number' min='1' step='1' value={mediaFormWidth} onChange={(event) => setMediaFormWidth(event.target.value)} className='rte-field' /></label><label className='rte-modal-label' htmlFor={`${editorId}-media-height`}>{labels.mediaHeight}<input id={`${editorId}-media-height`} type='number' min='1' step='1' value={mediaFormHeight} onChange={(event) => setMediaFormHeight(event.target.value)} className='rte-field' /></label></div>
                {panelError && <p role='alert' className='rte-panel-error'>{panelError}</p>}<div className='rte-modal-actions'><button type='button' onClick={closeModal} className='rte-action-button'>{labels.cancel}</button><button type='button' onClick={handleMediaInsert} disabled={isUploading} className='rte-primary-button'>{isUploading ? labels.uploading : labels.insert}</button></div>
            </div> : insertModal === 'link' ? <div className='rte-modal-content'>
                <label className='rte-modal-label' htmlFor={`${editorId}-link-url`}>{labels.linkUrl}<input ref={linkUrlInputRef} id={`${editorId}-link-url`} type='text' inputMode='url' value={linkUrl} onChange={(event) => setLinkUrl(event.target.value)} dir='ltr' placeholder={labels.linkUrlPlaceholder} className='rte-field' /></label><label className='rte-modal-label' htmlFor={`${editorId}-link-text`}>{labels.linkText}<input id={`${editorId}-link-text`} type='text' value={linkText} onChange={(event) => setLinkText(event.target.value)} className='rte-field' /></label><label className='rte-modal-label' htmlFor={`${editorId}-link-title`}>{labels.linkTitle}<input id={`${editorId}-link-title`} type='text' value={linkTitle} onChange={(event) => setLinkTitle(event.target.value)} className='rte-field' /></label>{panelError && <p role='alert' className='rte-panel-error'>{panelError}</p>}<div className='rte-modal-actions'><button type='button' onClick={closeModal} className='rte-action-button'>{labels.cancel}</button><button type='button' onClick={handleLinkInsert} className='rte-primary-button'>{labels.insert}</button></div>
            </div> : <div className='rte-modal-content'><div className='rte-modal-grid'><label className='rte-modal-label' htmlFor={`${editorId}-table-columns`}>{labels.columns}<input id={`${editorId}-table-columns`} type='number' min='1' max='8' value={tableColumns} onChange={(event) => setTableColumns(Number(event.target.value))} className='rte-field' /></label><label className='rte-modal-label' htmlFor={`${editorId}-table-rows`}>{labels.rows}<input id={`${editorId}-table-rows`} type='number' min='1' max='12' value={tableRows} onChange={(event) => setTableRows(Number(event.target.value))} className='rte-field' /></label></div>{panelError && <p role='alert' className='rte-panel-error'>{panelError}</p>}<div className='rte-modal-actions'><button type='button' onClick={closeModal} className='rte-action-button'>{labels.cancel}</button><button type='button' onClick={handleTableInsert} className='rte-primary-button'>{labels.insert}</button></div></div>}
        </EditorModal>}
        {error && <p id={`${editorId}-error`} role='alert' className='rte-error'>{error}</p>}
    </div>
}

export default Textora
