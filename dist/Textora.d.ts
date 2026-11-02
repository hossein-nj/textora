import { type TextoraLabels, type TextoraLocale } from './locales';
import './styles.css';
export type { TextoraLabels, TextoraLocale } from './locales';
export type TextDirection = 'ltr' | 'rtl';
export type EditorTheme = 'light' | 'dark' | 'cupcake' | 'emerald' | 'corporate' | 'retro' | 'dracula' | 'synthwave' | 'nord';
export interface TextoraProps {
    value: string;
    onChange: (value: string) => void;
    id?: string;
    theme?: EditorTheme;
    title?: string;
    error?: string;
    placeholder?: string;
    direction?: TextDirection;
    locale?: TextoraLocale;
    minHeight?: number;
    disabled?: boolean;
    className?: string;
    labels?: Partial<TextoraLabels>;
    maxImageSize?: number;
}
export declare function Textora({ value, onChange, id, theme, title, error, placeholder, direction, locale, minHeight, disabled, className, labels: labelOverrides, maxImageSize }: TextoraProps): import("react").JSX.Element;
export default Textora;
