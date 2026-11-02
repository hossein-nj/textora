"use client";
import { jsxs as c, jsx as t, Fragment as Oe } from "react/jsx-runtime";
import { useId as pt, useRef as P, useState as v, useCallback as K, useEffect as Ke } from "react";
const bt = [
  "English",
  "Chinese",
  "Hindi",
  "Spanish",
  "Arabic",
  "French",
  "Bengali",
  "Portuguese",
  "Russian",
  "Urdu",
  "Indonesian",
  "German",
  "Japanese",
  "Nigerian Pidgin",
  "Turkish",
  "Persian"
], Xe = {
  English: {
    insertMedia: "Insert media",
    insertFile: "Insert file",
    mediaDimensions: "Media dimensions",
    invalidFile: "Please choose a supported file.",
    width: "Width",
    height: "Height",
    fontSize: "Font size",
    paragraph: "Paragraph",
    heading1: "Heading 1",
    heading2: "Heading 2",
    heading3: "Heading 3",
    heading4: "Heading 4",
    heading5: "Heading 5",
    heading6: "Heading 6",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    alignLeft: "Align left",
    alignCenter: "Align center",
    alignRight: "Align right",
    ltr: "Left to right",
    rtl: "Right to left",
    orderedList: "Numbered list",
    unorderedList: "Bulleted list",
    textColor: "Text color",
    backgroundColor: "Text background color",
    clearFormatting: "Clear formatting",
    insertImage: "Insert image",
    insertLink: "Insert link",
    insertTable: "Insert table",
    sourceCode: "HTML source",
    imageUrl: "Image URL",
    imageTitle: "Image title",
    imageAlt: "Image alt text",
    imageWidth: "Image width",
    imageHeight: "Image height",
    imagePreview: "Image preview",
    selectImage: "Choose an image from your device",
    linkUrl: "Link URL",
    linkText: "Link text",
    newTab: "Open in a new tab",
    linkTitle: "Link title",
    rows: "Rows",
    columns: "Columns",
    insert: "Insert",
    cancel: "Cancel",
    uploadImage: "Choose image",
    uploading: "Reading…",
    invalidUrl: "Enter a valid and supported URL.",
    invalidImage: "Please choose a valid image file.",
    imageTooLarge: "The image is larger than the allowed limit.",
    invalidDimensions: "Width and height must be positive numbers.",
    linkTextRequired: "Text to display is required.",
    tableControls: "Table controls",
    addRow: "Add row",
    deleteRow: "Delete row",
    addColumn: "Add column",
    deleteColumn: "Delete column",
    editorAriaLabel: "Rich text editor",
    placeholder: "Start writing…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "Unable to read the selected file.",
    selectMedia: "Choose an audio or video file",
    selectFile: "Choose a file",
    close: "Close"
  },
  Chinese: {
    insertMedia: "插入媒体",
    insertFile: "插入文件",
    mediaDimensions: "媒体尺寸",
    invalidFile: "请选择受支持的文件。",
    width: "宽度",
    height: "高度",
    fontSize: "字号",
    paragraph: "段落",
    heading1: "标题 1",
    heading2: "标题 2",
    heading3: "标题 3",
    heading4: "标题 4",
    heading5: "标题 5",
    heading6: "标题 6",
    bold: "粗体",
    italic: "斜体",
    underline: "下划线",
    alignLeft: "左对齐",
    alignCenter: "居中对齐",
    alignRight: "右对齐",
    ltr: "从左到右",
    rtl: "从右到左",
    orderedList: "编号列表",
    unorderedList: "项目符号列表",
    textColor: "文字颜色",
    backgroundColor: "文字背景色",
    clearFormatting: "清除格式",
    insertImage: "插入图片",
    insertLink: "插入链接",
    insertTable: "插入表格",
    sourceCode: "HTML 源代码",
    imageUrl: "图片 URL",
    imageTitle: "图片标题",
    imageAlt: "图片替代文字",
    imageWidth: "图片宽度",
    imageHeight: "图片高度",
    imagePreview: "图片预览",
    selectImage: "从设备选择图片",
    linkUrl: "链接 URL",
    linkText: "链接文字",
    newTab: "在新标签页打开",
    linkTitle: "链接标题",
    rows: "行数",
    columns: "列数",
    insert: "插入",
    cancel: "取消",
    uploadImage: "选择图片",
    uploading: "正在读取…",
    invalidUrl: "请输入有效且受支持的 URL。",
    invalidImage: "请选择有效的图片文件。",
    imageTooLarge: "图片超过了允许的大小限制。",
    invalidDimensions: "宽度和高度必须是正数。",
    linkTextRequired: "请输入要显示的文字。",
    tableControls: "表格控制",
    addRow: "添加行",
    deleteRow: "删除行",
    addColumn: "添加列",
    deleteColumn: "删除列",
    editorAriaLabel: "富文本编辑器",
    placeholder: "开始输入…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "无法读取所选文件。",
    selectMedia: "选择音频或视频文件",
    selectFile: "选择文件",
    close: "关闭"
  },
  Hindi: {
    insertMedia: "मीडिया जोड़ें",
    insertFile: "फ़ाइल जोड़ें",
    mediaDimensions: "मीडिया के आयाम",
    invalidFile: "कृपया समर्थित फ़ाइल चुनें।",
    width: "चौड़ाई",
    height: "ऊंचाई",
    fontSize: "फ़ॉन्ट आकार",
    paragraph: "पैराग्राफ़",
    heading1: "शीर्षक 1",
    heading2: "शीर्षक 2",
    heading3: "शीर्षक 3",
    heading4: "शीर्षक 4",
    heading5: "शीर्षक 5",
    heading6: "शीर्षक 6",
    bold: "बोल्ड",
    italic: "इटैलिक",
    underline: "रेखांकित",
    alignLeft: "बाईं ओर संरेखित",
    alignCenter: "केंद्र में संरेखित",
    alignRight: "दाईं ओर संरेखित",
    ltr: "बाएं से दाएं",
    rtl: "दाएं से बाएं",
    orderedList: "क्रमांकित सूची",
    unorderedList: "बुलेट सूची",
    textColor: "टेक्स्ट का रंग",
    backgroundColor: "टेक्स्ट की पृष्ठभूमि का रंग",
    clearFormatting: "फ़ॉर्मैटिंग हटाएं",
    insertImage: "चित्र जोड़ें",
    insertLink: "लिंक जोड़ें",
    insertTable: "तालिका जोड़ें",
    sourceCode: "HTML स्रोत",
    imageUrl: "चित्र URL",
    imageTitle: "चित्र का शीर्षक",
    imageAlt: "चित्र का वैकल्पिक टेक्स्ट",
    imageWidth: "चित्र की चौड़ाई",
    imageHeight: "चित्र की ऊंचाई",
    imagePreview: "चित्र का पूर्वावलोकन",
    selectImage: "डिवाइस से चित्र चुनें",
    linkUrl: "लिंक URL",
    linkText: "लिंक टेक्स्ट",
    newTab: "नए टैब में खोलें",
    linkTitle: "लिंक का शीर्षक",
    rows: "पंक्तियां",
    columns: "कॉलम",
    insert: "जोड़ें",
    cancel: "रद्द करें",
    uploadImage: "चित्र चुनें",
    uploading: "पढ़ा जा रहा है…",
    invalidUrl: "मान्य और समर्थित URL दर्ज करें।",
    invalidImage: "कृपया मान्य चित्र फ़ाइल चुनें।",
    imageTooLarge: "चित्र अनुमत सीमा से बड़ा है।",
    invalidDimensions: "चौड़ाई और ऊंचाई धनात्मक संख्याएं होनी चाहिए।",
    linkTextRequired: "दिखाने के लिए टेक्स्ट आवश्यक है।",
    tableControls: "तालिका नियंत्रण",
    addRow: "पंक्ति जोड़ें",
    deleteRow: "पंक्ति हटाएं",
    addColumn: "कॉलम जोड़ें",
    deleteColumn: "कॉलम हटाएं",
    editorAriaLabel: "रिच टेक्स्ट एडिटर",
    placeholder: "लिखना शुरू करें…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "चयनित फ़ाइल पढ़ी नहीं जा सकी।",
    selectMedia: "ऑडियो या वीडियो फ़ाइल चुनें",
    selectFile: "फ़ाइल चुनें",
    close: "बंद करें"
  },
  Spanish: {
    insertMedia: "Insertar multimedia",
    insertFile: "Insertar archivo",
    mediaDimensions: "Dimensiones multimedia",
    invalidFile: "Elige un archivo compatible.",
    width: "Ancho",
    height: "Alto",
    fontSize: "Tamaño de fuente",
    paragraph: "Párrafo",
    heading1: "Encabezado 1",
    heading2: "Encabezado 2",
    heading3: "Encabezado 3",
    heading4: "Encabezado 4",
    heading5: "Encabezado 5",
    heading6: "Encabezado 6",
    bold: "Negrita",
    italic: "Cursiva",
    underline: "Subrayado",
    alignLeft: "Alinear a la izquierda",
    alignCenter: "Centrar",
    alignRight: "Alinear a la derecha",
    ltr: "De izquierda a derecha",
    rtl: "De derecha a izquierda",
    orderedList: "Lista numerada",
    unorderedList: "Lista con viñetas",
    textColor: "Color del texto",
    backgroundColor: "Color de fondo del texto",
    clearFormatting: "Borrar formato",
    insertImage: "Insertar imagen",
    insertLink: "Insertar enlace",
    insertTable: "Insertar tabla",
    sourceCode: "Código HTML",
    imageUrl: "URL de la imagen",
    imageTitle: "Título de la imagen",
    imageAlt: "Texto alternativo de la imagen",
    imageWidth: "Ancho de la imagen",
    imageHeight: "Alto de la imagen",
    imagePreview: "Vista previa de la imagen",
    selectImage: "Elegir una imagen del dispositivo",
    linkUrl: "URL del enlace",
    linkText: "Texto del enlace",
    newTab: "Abrir en una pestaña nueva",
    linkTitle: "Título del enlace",
    rows: "Filas",
    columns: "Columnas",
    insert: "Insertar",
    cancel: "Cancelar",
    uploadImage: "Elegir imagen",
    uploading: "Leyendo…",
    invalidUrl: "Introduce una URL válida y compatible.",
    invalidImage: "Elige un archivo de imagen válido.",
    imageTooLarge: "La imagen supera el límite permitido.",
    invalidDimensions: "El ancho y el alto deben ser números positivos.",
    linkTextRequired: "El texto que se mostrará es obligatorio.",
    tableControls: "Controles de tabla",
    addRow: "Añadir fila",
    deleteRow: "Eliminar fila",
    addColumn: "Añadir columna",
    deleteColumn: "Eliminar columna",
    editorAriaLabel: "Editor de texto enriquecido",
    placeholder: "Empieza a escribir…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "No se puede leer el archivo seleccionado.",
    selectMedia: "Elegir un archivo de audio o vídeo",
    selectFile: "Elegir un archivo",
    close: "Cerrar"
  },
  Arabic: {
    insertMedia: "إدراج وسائط",
    insertFile: "إدراج ملف",
    mediaDimensions: "أبعاد الوسائط",
    invalidFile: "يرجى اختيار ملف مدعوم.",
    width: "العرض",
    height: "الارتفاع",
    fontSize: "حجم الخط",
    paragraph: "فقرة",
    heading1: "عنوان 1",
    heading2: "عنوان 2",
    heading3: "عنوان 3",
    heading4: "عنوان 4",
    heading5: "عنوان 5",
    heading6: "عنوان 6",
    bold: "عريض",
    italic: "مائل",
    underline: "تحته خط",
    alignLeft: "محاذاة لليسار",
    alignCenter: "محاذاة للوسط",
    alignRight: "محاذاة لليمين",
    ltr: "من اليسار إلى اليمين",
    rtl: "من اليمين إلى اليسار",
    orderedList: "قائمة مرقمة",
    unorderedList: "قائمة نقطية",
    textColor: "لون النص",
    backgroundColor: "لون خلفية النص",
    clearFormatting: "مسح التنسيق",
    insertImage: "إدراج صورة",
    insertLink: "إدراج رابط",
    insertTable: "إدراج جدول",
    sourceCode: "مصدر HTML",
    imageUrl: "عنوان URL للصورة",
    imageTitle: "عنوان الصورة",
    imageAlt: "النص البديل للصورة",
    imageWidth: "عرض الصورة",
    imageHeight: "ارتفاع الصورة",
    imagePreview: "معاينة الصورة",
    selectImage: "اختيار صورة من جهازك",
    linkUrl: "عنوان URL للرابط",
    linkText: "نص الرابط",
    newTab: "فتح في علامة تبويب جديدة",
    linkTitle: "عنوان الرابط",
    rows: "الصفوف",
    columns: "الأعمدة",
    insert: "إدراج",
    cancel: "إلغاء",
    uploadImage: "اختيار صورة",
    uploading: "جارٍ القراءة…",
    invalidUrl: "أدخل عنوان URL صالحاً ومدعوماً.",
    invalidImage: "يرجى اختيار ملف صورة صالح.",
    imageTooLarge: "حجم الصورة أكبر من الحد المسموح.",
    invalidDimensions: "يجب أن يكون العرض والارتفاع رقمين موجبين.",
    linkTextRequired: "النص المراد عرضه مطلوب.",
    tableControls: "عناصر التحكم بالجدول",
    addRow: "إضافة صف",
    deleteRow: "حذف صف",
    addColumn: "إضافة عمود",
    deleteColumn: "حذف عمود",
    editorAriaLabel: "محرر نص منسق",
    placeholder: "ابدأ الكتابة…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "تعذرت قراءة الملف المحدد.",
    selectMedia: "اختيار ملف صوت أو فيديو",
    selectFile: "اختيار ملف",
    close: "إغلاق"
  },
  French: {
    insertMedia: "Insérer un média",
    insertFile: "Insérer un fichier",
    mediaDimensions: "Dimensions du média",
    invalidFile: "Veuillez choisir un fichier compatible.",
    width: "Largeur",
    height: "Hauteur",
    fontSize: "Taille de police",
    paragraph: "Paragraphe",
    heading1: "Titre 1",
    heading2: "Titre 2",
    heading3: "Titre 3",
    heading4: "Titre 4",
    heading5: "Titre 5",
    heading6: "Titre 6",
    bold: "Gras",
    italic: "Italique",
    underline: "Souligné",
    alignLeft: "Aligner à gauche",
    alignCenter: "Centrer",
    alignRight: "Aligner à droite",
    ltr: "De gauche à droite",
    rtl: "De droite à gauche",
    orderedList: "Liste numérotée",
    unorderedList: "Liste à puces",
    textColor: "Couleur du texte",
    backgroundColor: "Couleur d’arrière-plan du texte",
    clearFormatting: "Effacer la mise en forme",
    insertImage: "Insérer une image",
    insertLink: "Insérer un lien",
    insertTable: "Insérer un tableau",
    sourceCode: "Code HTML",
    imageUrl: "URL de l’image",
    imageTitle: "Titre de l’image",
    imageAlt: "Texte alternatif de l’image",
    imageWidth: "Largeur de l’image",
    imageHeight: "Hauteur de l’image",
    imagePreview: "Aperçu de l’image",
    selectImage: "Choisir une image sur l’appareil",
    linkUrl: "URL du lien",
    linkText: "Texte du lien",
    newTab: "Ouvrir dans un nouvel onglet",
    linkTitle: "Titre du lien",
    rows: "Lignes",
    columns: "Colonnes",
    insert: "Insérer",
    cancel: "Annuler",
    uploadImage: "Choisir une image",
    uploading: "Lecture…",
    invalidUrl: "Saisissez une URL valide et compatible.",
    invalidImage: "Veuillez choisir un fichier image valide.",
    imageTooLarge: "L’image dépasse la taille autorisée.",
    invalidDimensions: "La largeur et la hauteur doivent être des nombres positifs.",
    linkTextRequired: "Le texte à afficher est obligatoire.",
    tableControls: "Commandes du tableau",
    addRow: "Ajouter une ligne",
    deleteRow: "Supprimer la ligne",
    addColumn: "Ajouter une colonne",
    deleteColumn: "Supprimer la colonne",
    editorAriaLabel: "Éditeur de texte enrichi",
    placeholder: "Commencez à écrire…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "Impossible de lire le fichier sélectionné.",
    selectMedia: "Choisir un fichier audio ou vidéo",
    selectFile: "Choisir un fichier",
    close: "Fermer"
  },
  Bengali: {
    insertMedia: "মিডিয়া যোগ করুন",
    insertFile: "ফাইল যোগ করুন",
    mediaDimensions: "মিডিয়ার মাপ",
    invalidFile: "অনুগ্রহ করে সমর্থিত ফাইল বেছে নিন।",
    width: "প্রস্থ",
    height: "উচ্চতা",
    fontSize: "ফন্টের আকার",
    paragraph: "অনুচ্ছেদ",
    heading1: "শিরোনাম ১",
    heading2: "শিরোনাম ২",
    heading3: "শিরোনাম ৩",
    heading4: "শিরোনাম ৪",
    heading5: "শিরোনাম ৫",
    heading6: "শিরোনাম ৬",
    bold: "গাঢ়",
    italic: "তির্যক",
    underline: "আন্ডারলাইন",
    alignLeft: "বামে সাজান",
    alignCenter: "মাঝখানে সাজান",
    alignRight: "ডানে সাজান",
    ltr: "বাম থেকে ডানে",
    rtl: "ডান থেকে বামে",
    orderedList: "ক্রমিক তালিকা",
    unorderedList: "বুলেট তালিকা",
    textColor: "লেখার রং",
    backgroundColor: "লেখার পটভূমির রং",
    clearFormatting: "ফরম্যাট মুছুন",
    insertImage: "ছবি যোগ করুন",
    insertLink: "লিংক যোগ করুন",
    insertTable: "টেবিল যোগ করুন",
    sourceCode: "HTML সোর্স",
    imageUrl: "ছবির URL",
    imageTitle: "ছবির শিরোনাম",
    imageAlt: "ছবির বিকল্প লেখা",
    imageWidth: "ছবির প্রস্থ",
    imageHeight: "ছবির উচ্চতা",
    imagePreview: "ছবির প্রিভিউ",
    selectImage: "ডিভাইস থেকে ছবি বাছুন",
    linkUrl: "লিংকের URL",
    linkText: "লিংকের লেখা",
    newTab: "নতুন ট্যাবে খুলুন",
    linkTitle: "লিংকের শিরোনাম",
    rows: "সারি",
    columns: "কলাম",
    insert: "যোগ করুন",
    cancel: "বাতিল",
    uploadImage: "ছবি বাছুন",
    uploading: "পড়া হচ্ছে…",
    invalidUrl: "একটি বৈধ ও সমর্থিত URL লিখুন।",
    invalidImage: "অনুগ্রহ করে একটি বৈধ ছবি ফাইল বাছুন।",
    imageTooLarge: "ছবিটি অনুমোদিত সীমার চেয়ে বড়।",
    invalidDimensions: "প্রস্থ ও উচ্চতা ধনাত্মক সংখ্যা হতে হবে।",
    linkTextRequired: "প্রদর্শনের জন্য লেখা আবশ্যক।",
    tableControls: "টেবিল নিয়ন্ত্রণ",
    addRow: "সারি যোগ করুন",
    deleteRow: "সারি মুছুন",
    addColumn: "কলাম যোগ করুন",
    deleteColumn: "কলাম মুছুন",
    editorAriaLabel: "রিচ টেক্সট এডিটর",
    placeholder: "লেখা শুরু করুন…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "নির্বাচিত ফাইল পড়া যায়নি।",
    selectMedia: "অডিও বা ভিডিও ফাইল বাছুন",
    selectFile: "ফাইল বাছুন",
    close: "বন্ধ করুন"
  },
  Portuguese: {
    insertMedia: "Inserir mídia",
    insertFile: "Inserir arquivo",
    mediaDimensions: "Dimensões da mídia",
    invalidFile: "Escolha um arquivo compatível.",
    width: "Largura",
    height: "Altura",
    fontSize: "Tamanho da fonte",
    paragraph: "Parágrafo",
    heading1: "Título 1",
    heading2: "Título 2",
    heading3: "Título 3",
    heading4: "Título 4",
    heading5: "Título 5",
    heading6: "Título 6",
    bold: "Negrito",
    italic: "Itálico",
    underline: "Sublinhado",
    alignLeft: "Alinhar à esquerda",
    alignCenter: "Centralizar",
    alignRight: "Alinhar à direita",
    ltr: "Da esquerda para a direita",
    rtl: "Da direita para a esquerda",
    orderedList: "Lista numerada",
    unorderedList: "Lista com marcadores",
    textColor: "Cor do texto",
    backgroundColor: "Cor de fundo do texto",
    clearFormatting: "Limpar formatação",
    insertImage: "Inserir imagem",
    insertLink: "Inserir link",
    insertTable: "Inserir tabela",
    sourceCode: "Código HTML",
    imageUrl: "URL da imagem",
    imageTitle: "Título da imagem",
    imageAlt: "Texto alternativo da imagem",
    imageWidth: "Largura da imagem",
    imageHeight: "Altura da imagem",
    imagePreview: "Pré-visualização da imagem",
    selectImage: "Escolher uma imagem do dispositivo",
    linkUrl: "URL do link",
    linkText: "Texto do link",
    newTab: "Abrir em uma nova aba",
    linkTitle: "Título do link",
    rows: "Linhas",
    columns: "Colunas",
    insert: "Inserir",
    cancel: "Cancelar",
    uploadImage: "Escolher imagem",
    uploading: "Lendo…",
    invalidUrl: "Digite uma URL válida e compatível.",
    invalidImage: "Escolha um arquivo de imagem válido.",
    imageTooLarge: "A imagem é maior que o limite permitido.",
    invalidDimensions: "A largura e a altura devem ser números positivos.",
    linkTextRequired: "O texto a exibir é obrigatório.",
    tableControls: "Controles da tabela",
    addRow: "Adicionar linha",
    deleteRow: "Excluir linha",
    addColumn: "Adicionar coluna",
    deleteColumn: "Excluir coluna",
    editorAriaLabel: "Editor de texto rico",
    placeholder: "Comece a escrever…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "Não foi possível ler o arquivo selecionado.",
    selectMedia: "Escolher arquivo de áudio ou vídeo",
    selectFile: "Escolher arquivo",
    close: "Fechar"
  },
  Russian: {
    insertMedia: "Вставить медиа",
    insertFile: "Вставить файл",
    mediaDimensions: "Размеры медиа",
    invalidFile: "Выберите поддерживаемый файл.",
    width: "Ширина",
    height: "Высота",
    fontSize: "Размер шрифта",
    paragraph: "Абзац",
    heading1: "Заголовок 1",
    heading2: "Заголовок 2",
    heading3: "Заголовок 3",
    heading4: "Заголовок 4",
    heading5: "Заголовок 5",
    heading6: "Заголовок 6",
    bold: "Полужирный",
    italic: "Курсив",
    underline: "Подчёркивание",
    alignLeft: "По левому краю",
    alignCenter: "По центру",
    alignRight: "По правому краю",
    ltr: "Слева направо",
    rtl: "Справа налево",
    orderedList: "Нумерованный список",
    unorderedList: "Маркированный список",
    textColor: "Цвет текста",
    backgroundColor: "Цвет фона текста",
    clearFormatting: "Очистить форматирование",
    insertImage: "Вставить изображение",
    insertLink: "Вставить ссылку",
    insertTable: "Вставить таблицу",
    sourceCode: "Исходный код HTML",
    imageUrl: "URL изображения",
    imageTitle: "Название изображения",
    imageAlt: "Альтернативный текст изображения",
    imageWidth: "Ширина изображения",
    imageHeight: "Высота изображения",
    imagePreview: "Предпросмотр изображения",
    selectImage: "Выбрать изображение на устройстве",
    linkUrl: "URL ссылки",
    linkText: "Текст ссылки",
    newTab: "Открыть в новой вкладке",
    linkTitle: "Название ссылки",
    rows: "Строки",
    columns: "Столбцы",
    insert: "Вставить",
    cancel: "Отмена",
    uploadImage: "Выбрать изображение",
    uploading: "Чтение…",
    invalidUrl: "Введите допустимый URL.",
    invalidImage: "Выберите корректный файл изображения.",
    imageTooLarge: "Изображение превышает допустимый размер.",
    invalidDimensions: "Ширина и высота должны быть положительными числами.",
    linkTextRequired: "Введите отображаемый текст.",
    tableControls: "Управление таблицей",
    addRow: "Добавить строку",
    deleteRow: "Удалить строку",
    addColumn: "Добавить столбец",
    deleteColumn: "Удалить столбец",
    editorAriaLabel: "Редактор форматированного текста",
    placeholder: "Начните писать…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "Не удалось прочитать выбранный файл.",
    selectMedia: "Выбрать аудио- или видеофайл",
    selectFile: "Выбрать файл",
    close: "Закрыть"
  },
  Urdu: {
    insertMedia: "میڈیا شامل کریں",
    insertFile: "فائل شامل کریں",
    mediaDimensions: "میڈیا کے ابعاد",
    invalidFile: "براہ کرم معاون فائل منتخب کریں۔",
    width: "چوڑائی",
    height: "اونچائی",
    fontSize: "فونٹ کا سائز",
    paragraph: "پیراگراف",
    heading1: "سرخی ۱",
    heading2: "سرخی ۲",
    heading3: "سرخی ۳",
    heading4: "سرخی ۴",
    heading5: "سرخی ۵",
    heading6: "سرخی ۶",
    bold: "موٹا",
    italic: "ترچھا",
    underline: "خط کشیدہ",
    alignLeft: "بائیں طرف سیدھ",
    alignCenter: "درمیان میں سیدھ",
    alignRight: "دائیں طرف سیدھ",
    ltr: "بائیں سے دائیں",
    rtl: "دائیں سے بائیں",
    orderedList: "نمبر والی فہرست",
    unorderedList: "بلٹ والی فہرست",
    textColor: "متن کا رنگ",
    backgroundColor: "متن کے پس منظر کا رنگ",
    clearFormatting: "فارمیٹنگ صاف کریں",
    insertImage: "تصویر شامل کریں",
    insertLink: "لنک شامل کریں",
    insertTable: "جدول شامل کریں",
    sourceCode: "HTML ماخذ",
    imageUrl: "تصویر کا URL",
    imageTitle: "تصویر کا عنوان",
    imageAlt: "تصویر کا متبادل متن",
    imageWidth: "تصویر کی چوڑائی",
    imageHeight: "تصویر کی اونچائی",
    imagePreview: "تصویر کا پیش نظارہ",
    selectImage: "ڈیوائس سے تصویر منتخب کریں",
    linkUrl: "لنک کا URL",
    linkText: "لنک کا متن",
    newTab: "نئے ٹیب میں کھولیں",
    linkTitle: "لنک کا عنوان",
    rows: "قطاریں",
    columns: "کالم",
    insert: "شامل کریں",
    cancel: "منسوخ",
    uploadImage: "تصویر منتخب کریں",
    uploading: "پڑھا جا رہا ہے…",
    invalidUrl: "درست اور معاون URL درج کریں۔",
    invalidImage: "براہ کرم درست تصویر فائل منتخب کریں۔",
    imageTooLarge: "تصویر کی جسامت مقررہ حد سے زیادہ ہے۔",
    invalidDimensions: "چوڑائی اور اونچائی مثبت اعداد ہونی چاہییں۔",
    linkTextRequired: "دکھانے کے لیے متن ضروری ہے۔",
    tableControls: "جدول کے اختیارات",
    addRow: "قطار شامل کریں",
    deleteRow: "قطار حذف کریں",
    addColumn: "کالم شامل کریں",
    deleteColumn: "کالم حذف کریں",
    editorAriaLabel: "رچ ٹیکسٹ ایڈیٹر",
    placeholder: "لکھنا شروع کریں…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "منتخب فائل پڑھی نہیں جا سکی۔",
    selectMedia: "آڈیو یا ویڈیو فائل منتخب کریں",
    selectFile: "فائل منتخب کریں",
    close: "بند کریں"
  },
  Indonesian: {
    insertMedia: "Sisipkan media",
    insertFile: "Sisipkan file",
    mediaDimensions: "Dimensi media",
    invalidFile: "Pilih file yang didukung.",
    width: "Lebar",
    height: "Tinggi",
    fontSize: "Ukuran font",
    paragraph: "Paragraf",
    heading1: "Judul 1",
    heading2: "Judul 2",
    heading3: "Judul 3",
    heading4: "Judul 4",
    heading5: "Judul 5",
    heading6: "Judul 6",
    bold: "Tebal",
    italic: "Miring",
    underline: "Garis bawah",
    alignLeft: "Rata kiri",
    alignCenter: "Rata tengah",
    alignRight: "Rata kanan",
    ltr: "Kiri ke kanan",
    rtl: "Kanan ke kiri",
    orderedList: "Daftar bernomor",
    unorderedList: "Daftar berpoin",
    textColor: "Warna teks",
    backgroundColor: "Warna latar teks",
    clearFormatting: "Hapus pemformatan",
    insertImage: "Sisipkan gambar",
    insertLink: "Sisipkan tautan",
    insertTable: "Sisipkan tabel",
    sourceCode: "Sumber HTML",
    imageUrl: "URL gambar",
    imageTitle: "Judul gambar",
    imageAlt: "Teks alternatif gambar",
    imageWidth: "Lebar gambar",
    imageHeight: "Tinggi gambar",
    imagePreview: "Pratinjau gambar",
    selectImage: "Pilih gambar dari perangkat",
    linkUrl: "URL tautan",
    linkText: "Teks tautan",
    newTab: "Buka di tab baru",
    linkTitle: "Judul tautan",
    rows: "Baris",
    columns: "Kolom",
    insert: "Sisipkan",
    cancel: "Batal",
    uploadImage: "Pilih gambar",
    uploading: "Membaca…",
    invalidUrl: "Masukkan URL yang valid dan didukung.",
    invalidImage: "Pilih file gambar yang valid.",
    imageTooLarge: "Ukuran gambar melebihi batas yang diizinkan.",
    invalidDimensions: "Lebar dan tinggi harus berupa angka positif.",
    linkTextRequired: "Teks yang ditampilkan wajib diisi.",
    tableControls: "Kontrol tabel",
    addRow: "Tambah baris",
    deleteRow: "Hapus baris",
    addColumn: "Tambah kolom",
    deleteColumn: "Hapus kolom",
    editorAriaLabel: "Editor teks kaya",
    placeholder: "Mulai menulis…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "File yang dipilih tidak dapat dibaca.",
    selectMedia: "Pilih file audio atau video",
    selectFile: "Pilih file",
    close: "Tutup"
  },
  German: {
    insertMedia: "Medien einfügen",
    insertFile: "Datei einfügen",
    mediaDimensions: "Medienabmessungen",
    invalidFile: "Bitte wählen Sie eine unterstützte Datei aus.",
    width: "Breite",
    height: "Höhe",
    fontSize: "Schriftgröße",
    paragraph: "Absatz",
    heading1: "Überschrift 1",
    heading2: "Überschrift 2",
    heading3: "Überschrift 3",
    heading4: "Überschrift 4",
    heading5: "Überschrift 5",
    heading6: "Überschrift 6",
    bold: "Fett",
    italic: "Kursiv",
    underline: "Unterstrichen",
    alignLeft: "Linksbündig",
    alignCenter: "Zentriert",
    alignRight: "Rechtsbündig",
    ltr: "Von links nach rechts",
    rtl: "Von rechts nach links",
    orderedList: "Nummerierte Liste",
    unorderedList: "Aufzählungsliste",
    textColor: "Textfarbe",
    backgroundColor: "Texthintergrundfarbe",
    clearFormatting: "Formatierung löschen",
    insertImage: "Bild einfügen",
    insertLink: "Link einfügen",
    insertTable: "Tabelle einfügen",
    sourceCode: "HTML-Quelltext",
    imageUrl: "Bild-URL",
    imageTitle: "Bildtitel",
    imageAlt: "Alternativtext des Bildes",
    imageWidth: "Bildbreite",
    imageHeight: "Bildhöhe",
    imagePreview: "Bildvorschau",
    selectImage: "Bild vom Gerät auswählen",
    linkUrl: "Link-URL",
    linkText: "Linktext",
    newTab: "In neuem Tab öffnen",
    linkTitle: "Linktitel",
    rows: "Zeilen",
    columns: "Spalten",
    insert: "Einfügen",
    cancel: "Abbrechen",
    uploadImage: "Bild auswählen",
    uploading: "Wird gelesen…",
    invalidUrl: "Geben Sie eine gültige und unterstützte URL ein.",
    invalidImage: "Bitte wählen Sie eine gültige Bilddatei aus.",
    imageTooLarge: "Das Bild überschreitet die zulässige Größe.",
    invalidDimensions: "Breite und Höhe müssen positive Zahlen sein.",
    linkTextRequired: "Der anzuzeigende Text ist erforderlich.",
    tableControls: "Tabellensteuerung",
    addRow: "Zeile hinzufügen",
    deleteRow: "Zeile löschen",
    addColumn: "Spalte hinzufügen",
    deleteColumn: "Spalte löschen",
    editorAriaLabel: "Rich-Text-Editor",
    placeholder: "Schreiben Sie los…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "Die ausgewählte Datei konnte nicht gelesen werden.",
    selectMedia: "Audio- oder Videodatei auswählen",
    selectFile: "Datei auswählen",
    close: "Schließen"
  },
  Japanese: {
    insertMedia: "メディアを挿入",
    insertFile: "ファイルを挿入",
    mediaDimensions: "メディアのサイズ",
    invalidFile: "対応しているファイルを選択してください。",
    width: "幅",
    height: "高さ",
    fontSize: "フォントサイズ",
    paragraph: "段落",
    heading1: "見出し 1",
    heading2: "見出し 2",
    heading3: "見出し 3",
    heading4: "見出し 4",
    heading5: "見出し 5",
    heading6: "見出し 6",
    bold: "太字",
    italic: "斜体",
    underline: "下線",
    alignLeft: "左揃え",
    alignCenter: "中央揃え",
    alignRight: "右揃え",
    ltr: "左から右",
    rtl: "右から左",
    orderedList: "番号付きリスト",
    unorderedList: "箇条書きリスト",
    textColor: "文字色",
    backgroundColor: "文字の背景色",
    clearFormatting: "書式をクリア",
    insertImage: "画像を挿入",
    insertLink: "リンクを挿入",
    insertTable: "表を挿入",
    sourceCode: "HTML ソース",
    imageUrl: "画像 URL",
    imageTitle: "画像のタイトル",
    imageAlt: "画像の代替テキスト",
    imageWidth: "画像の幅",
    imageHeight: "画像の高さ",
    imagePreview: "画像プレビュー",
    selectImage: "デバイスから画像を選択",
    linkUrl: "リンク URL",
    linkText: "リンクのテキスト",
    newTab: "新しいタブで開く",
    linkTitle: "リンクのタイトル",
    rows: "行",
    columns: "列",
    insert: "挿入",
    cancel: "キャンセル",
    uploadImage: "画像を選択",
    uploading: "読み込み中…",
    invalidUrl: "有効で対応している URL を入力してください。",
    invalidImage: "有効な画像ファイルを選択してください。",
    imageTooLarge: "画像が許可されたサイズを超えています。",
    invalidDimensions: "幅と高さには正の数を指定してください。",
    linkTextRequired: "表示するテキストを入力してください。",
    tableControls: "表の操作",
    addRow: "行を追加",
    deleteRow: "行を削除",
    addColumn: "列を追加",
    deleteColumn: "列を削除",
    editorAriaLabel: "リッチテキストエディター",
    placeholder: "入力を始めてください…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "選択したファイルを読み込めませんでした。",
    selectMedia: "音声または動画ファイルを選択",
    selectFile: "ファイルを選択",
    close: "閉じる"
  },
  "Nigerian Pidgin": {
    insertMedia: "Put media",
    insertFile: "Put file",
    mediaDimensions: "Media size",
    invalidFile: "Abeg choose file wey we support.",
    width: "Width",
    height: "Height",
    fontSize: "Font size",
    paragraph: "Paragraph",
    heading1: "Heading 1",
    heading2: "Heading 2",
    heading3: "Heading 3",
    heading4: "Heading 4",
    heading5: "Heading 5",
    heading6: "Heading 6",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    alignLeft: "Align left",
    alignCenter: "Align center",
    alignRight: "Align right",
    ltr: "Left to right",
    rtl: "Right to left",
    orderedList: "Numbered list",
    unorderedList: "Bullet list",
    textColor: "Text colour",
    backgroundColor: "Text background colour",
    clearFormatting: "Clear formatting",
    insertImage: "Put image",
    insertLink: "Put link",
    insertTable: "Put table",
    sourceCode: "HTML source",
    imageUrl: "Image URL",
    imageTitle: "Image title",
    imageAlt: "Image alt text",
    imageWidth: "Image width",
    imageHeight: "Image height",
    imagePreview: "Image preview",
    selectImage: "Choose image from your device",
    linkUrl: "Link URL",
    linkText: "Link text",
    newTab: "Open for new tab",
    linkTitle: "Link title",
    rows: "Rows",
    columns: "Columns",
    insert: "Put am",
    cancel: "Cancel",
    uploadImage: "Choose image",
    uploading: "E dey read…",
    invalidUrl: "Enter URL wey correct and wey we support.",
    invalidImage: "Abeg choose correct image file.",
    imageTooLarge: "The image pass the size limit.",
    invalidDimensions: "Width and height must be positive numbers.",
    linkTextRequired: "You need text to display.",
    tableControls: "Table controls",
    addRow: "Add row",
    deleteRow: "Remove row",
    addColumn: "Add column",
    deleteColumn: "Remove column",
    editorAriaLabel: "Rich text editor",
    placeholder: "Start to write…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "We no fit read the file wey you choose.",
    selectMedia: "Choose audio or video file",
    selectFile: "Choose file",
    close: "Close"
  },
  Turkish: {
    insertMedia: "Medya ekle",
    insertFile: "Dosya ekle",
    mediaDimensions: "Medya boyutları",
    invalidFile: "Lütfen desteklenen bir dosya seçin.",
    width: "Genişlik",
    height: "Yükseklik",
    fontSize: "Yazı boyutu",
    paragraph: "Paragraf",
    heading1: "Başlık 1",
    heading2: "Başlık 2",
    heading3: "Başlık 3",
    heading4: "Başlık 4",
    heading5: "Başlık 5",
    heading6: "Başlık 6",
    bold: "Kalın",
    italic: "İtalik",
    underline: "Altı çizili",
    alignLeft: "Sola hizala",
    alignCenter: "Ortala",
    alignRight: "Sağa hizala",
    ltr: "Soldan sağa",
    rtl: "Sağdan sola",
    orderedList: "Numaralı liste",
    unorderedList: "Madde işaretli liste",
    textColor: "Metin rengi",
    backgroundColor: "Metin arka plan rengi",
    clearFormatting: "Biçimlendirmeyi temizle",
    insertImage: "Resim ekle",
    insertLink: "Bağlantı ekle",
    insertTable: "Tablo ekle",
    sourceCode: "HTML kaynağı",
    imageUrl: "Resim URL’si",
    imageTitle: "Resim başlığı",
    imageAlt: "Resim alternatif metni",
    imageWidth: "Resim genişliği",
    imageHeight: "Resim yüksekliği",
    imagePreview: "Resim önizlemesi",
    selectImage: "Cihazınızdan resim seçin",
    linkUrl: "Bağlantı URL’si",
    linkText: "Bağlantı metni",
    newTab: "Yeni sekmede aç",
    linkTitle: "Bağlantı başlığı",
    rows: "Satır",
    columns: "Sütun",
    insert: "Ekle",
    cancel: "İptal",
    uploadImage: "Resim seç",
    uploading: "Okunuyor…",
    invalidUrl: "Geçerli ve desteklenen bir URL girin.",
    invalidImage: "Lütfen geçerli bir resim dosyası seçin.",
    imageTooLarge: "Resim izin verilen sınırı aşıyor.",
    invalidDimensions: "Genişlik ve yükseklik pozitif sayı olmalıdır.",
    linkTextRequired: "Görüntülenecek metin gereklidir.",
    tableControls: "Tablo denetimleri",
    addRow: "Satır ekle",
    deleteRow: "Satırı sil",
    addColumn: "Sütun ekle",
    deleteColumn: "Sütunu sil",
    editorAriaLabel: "Zengin metin düzenleyici",
    placeholder: "Yazmaya başlayın…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "Seçilen dosya okunamadı.",
    selectMedia: "Ses veya video dosyası seçin",
    selectFile: "Dosya seçin",
    close: "Kapat"
  },
  Persian: {
    insertMedia: "درج رسانه",
    insertFile: "درج فایل",
    mediaDimensions: "ابعاد رسانه",
    invalidFile: "لطفاً یک فایل پشتیبانی‌شده انتخاب کنید.",
    width: "عرض",
    height: "ارتفاع",
    fontSize: "اندازه متن",
    paragraph: "پاراگراف",
    heading1: "عنوان ۱",
    heading2: "عنوان ۲",
    heading3: "عنوان ۳",
    heading4: "عنوان ۴",
    heading5: "عنوان ۵",
    heading6: "عنوان ۶",
    bold: "ضخیم",
    italic: "مورب",
    underline: "زیرخط",
    alignLeft: "چپ‌چین",
    alignCenter: "وسط‌چین",
    alignRight: "راست‌چین",
    ltr: "چپ به راست",
    rtl: "راست به چپ",
    orderedList: "فهرست شماره‌دار",
    unorderedList: "فهرست نشانه‌دار",
    textColor: "رنگ متن",
    backgroundColor: "رنگ پس‌زمینه متن",
    clearFormatting: "پاک کردن قالب‌بندی",
    insertImage: "درج تصویر",
    insertLink: "درج پیوند",
    insertTable: "درج جدول",
    sourceCode: "کد HTML",
    imageUrl: "نشانی تصویر",
    imageTitle: "عنوان تصویر",
    imageAlt: "متن جایگزین تصویر",
    imageWidth: "عرض تصویر",
    imageHeight: "ارتفاع تصویر",
    imagePreview: "پیش‌نمایش تصویر",
    selectImage: "انتخاب تصویر از دستگاه",
    linkUrl: "نشانی پیوند",
    linkText: "متن پیوند",
    newTab: "باز کردن در زبانه جدید",
    linkTitle: "عنوان پیوند",
    rows: "تعداد ردیف",
    columns: "تعداد ستون",
    insert: "درج",
    cancel: "انصراف",
    uploadImage: "انتخاب تصویر",
    uploading: "در حال خواندن…",
    invalidUrl: "یک نشانی معتبر و پشتیبانی‌شده وارد کنید.",
    invalidImage: "لطفاً یک فایل تصویری معتبر انتخاب کنید.",
    imageTooLarge: "حجم تصویر از حد مجاز بیشتر است.",
    invalidDimensions: "عرض و ارتفاع باید عددی مثبت باشند.",
    linkTextRequired: "متن نمایشی الزامی است.",
    tableControls: "تنظیمات جدول",
    addRow: "افزودن ردیف",
    deleteRow: "حذف ردیف",
    addColumn: "افزودن ستون",
    deleteColumn: "حذف ستون",
    editorAriaLabel: "ویرایشگر متن غنی",
    placeholder: "شروع به نوشتن کنید…",
    imageUrlPlaceholder: "https://example.com/image.jpg",
    linkUrlPlaceholder: "https://example.com",
    fileReadError: "خواندن فایل انتخاب‌شده ممکن نیست.",
    selectMedia: "انتخاب فایل صوتی یا ویدیویی",
    selectFile: "انتخاب فایل",
    close: "بستن"
  }
};
function ft(o) {
  return typeof o == "string" && Object.prototype.hasOwnProperty.call(Xe, o) ? o : "English";
}
const Ui = {
  English: { imageClass: "Class", mediaType: "Media type", audio: "Audio", video: "Video", mediaUrl: "Media URL", mediaTitle: "Media title", mediaAlt: "Media alt text", mediaWidth: "Media width", mediaHeight: "Media height", mediaPreview: "Media preview", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Chinese: { imageClass: "类", mediaType: "媒体类型", audio: "音频", video: "视频", mediaUrl: "媒体 URL", mediaTitle: "媒体标题", mediaAlt: "媒体替代文本", mediaWidth: "媒体宽度", mediaHeight: "媒体高度", mediaPreview: "媒体预览", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Hindi: { imageClass: "क्लास", mediaType: "मीडिया प्रकार", audio: "ऑडियो", video: "वीडियो", mediaUrl: "मीडिया URL", mediaTitle: "मीडिया शीर्षक", mediaAlt: "मीडिया वैकल्पिक पाठ", mediaWidth: "मीडिया चौड़ाई", mediaHeight: "मीडिया ऊंचाई", mediaPreview: "मीडिया पूर्वावलोकन", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Spanish: { imageClass: "Clase", mediaType: "Tipo de multimedia", audio: "Audio", video: "Vídeo", mediaUrl: "URL multimedia", mediaTitle: "Título multimedia", mediaAlt: "Texto alternativo multimedia", mediaWidth: "Ancho multimedia", mediaHeight: "Alto multimedia", mediaPreview: "Vista previa multimedia", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Arabic: { imageClass: "الفئة", mediaType: "نوع الوسائط", audio: "صوت", video: "فيديو", mediaUrl: "عنوان URL للوسائط", mediaTitle: "عنوان الوسائط", mediaAlt: "النص البديل للوسائط", mediaWidth: "عرض الوسائط", mediaHeight: "ارتفاع الوسائط", mediaPreview: "معاينة الوسائط", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  French: { imageClass: "Classe", mediaType: "Type de média", audio: "Audio", video: "Vidéo", mediaUrl: "URL du média", mediaTitle: "Titre du média", mediaAlt: "Texte alternatif du média", mediaWidth: "Largeur du média", mediaHeight: "Hauteur du média", mediaPreview: "Aperçu du média", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Bengali: { imageClass: "ক্লাস", mediaType: "মিডিয়ার ধরন", audio: "অডিও", video: "ভিডিও", mediaUrl: "মিডিয়া URL", mediaTitle: "মিডিয়ার শিরোনাম", mediaAlt: "মিডিয়ার বিকল্প পাঠ", mediaWidth: "মিডিয়ার প্রস্থ", mediaHeight: "মিডিয়ার উচ্চতা", mediaPreview: "মিডিয়া প্রিভিউ", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Portuguese: { imageClass: "Classe", mediaType: "Tipo de mídia", audio: "Áudio", video: "Vídeo", mediaUrl: "URL da mídia", mediaTitle: "Título da mídia", mediaAlt: "Texto alternativo da mídia", mediaWidth: "Largura da mídia", mediaHeight: "Altura da mídia", mediaPreview: "Pré-visualização da mídia", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Russian: { imageClass: "Класс", mediaType: "Тип медиа", audio: "Аудио", video: "Видео", mediaUrl: "URL медиа", mediaTitle: "Название медиа", mediaAlt: "Альтернативный текст медиа", mediaWidth: "Ширина медиа", mediaHeight: "Высота медиа", mediaPreview: "Предпросмотр медиа", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Urdu: { imageClass: "کلاس", mediaType: "میڈیا کی قسم", audio: "آڈیو", video: "ویڈیو", mediaUrl: "میڈیا URL", mediaTitle: "میڈیا کا عنوان", mediaAlt: "میڈیا کا متبادل متن", mediaWidth: "میڈیا کی چوڑائی", mediaHeight: "میڈیا کی اونچائی", mediaPreview: "میڈیا کا پیش نظارہ", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Indonesian: { imageClass: "Kelas", mediaType: "Jenis media", audio: "Audio", video: "Video", mediaUrl: "URL media", mediaTitle: "Judul media", mediaAlt: "Teks alternatif media", mediaWidth: "Lebar media", mediaHeight: "Tinggi media", mediaPreview: "Pratinjau media", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  German: { imageClass: "Klasse", mediaType: "Medientyp", audio: "Audio", video: "Video", mediaUrl: "Medien-URL", mediaTitle: "Medientitel", mediaAlt: "Alternativtext des Mediums", mediaWidth: "Medienbreite", mediaHeight: "Medienhöhe", mediaPreview: "Medienvorschau", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Japanese: { imageClass: "クラス", mediaType: "メディアの種類", audio: "音声", video: "動画", mediaUrl: "メディア URL", mediaTitle: "メディアのタイトル", mediaAlt: "メディアの代替テキスト", mediaWidth: "メディアの幅", mediaHeight: "メディアの高さ", mediaPreview: "メディアプレビュー", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  "Nigerian Pidgin": { imageClass: "Class", mediaType: "Media type", audio: "Audio", video: "Video", mediaUrl: "Media URL", mediaTitle: "Media title", mediaAlt: "Media alt text", mediaWidth: "Media width", mediaHeight: "Media height", mediaPreview: "Media preview", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Turkish: { imageClass: "Sınıf", mediaType: "Medya türü", audio: "Ses", video: "Video", mediaUrl: "Medya URL’si", mediaTitle: "Medya başlığı", mediaAlt: "Medya alternatif metni", mediaWidth: "Medya genişliği", mediaHeight: "Medya yüksekliği", mediaPreview: "Medya önizlemesi", mediaUrlPlaceholder: "https://example.com/media.mp4" },
  Persian: { imageClass: "کلاس", mediaType: "نوع رسانه", audio: "صوت", video: "ویدیو", mediaUrl: "نشانی رسانه", mediaTitle: "عنوان رسانه", mediaAlt: "متن جایگزین رسانه", mediaWidth: "عرض رسانه", mediaHeight: "ارتفاع رسانه", mediaPreview: "پیش‌نمایش رسانه", mediaUrlPlaceholder: "https://example.com/media.mp4" }
};
bt.forEach((o) => Object.assign(Xe[o], Ui[o]));
function vt(o, r) {
  const n = ft(o), s = Ui[n];
  return { ...Xe[n], ...s, ...r };
}
const wt = ["light", "dark", "cupcake", "emerald", "corporate", "retro", "dracula", "synthwave", "nord"];
function kt(o) {
  return wt.includes(o);
}
const Tt = [12, 14, 16, 18, 20, 24, 30, 36], Ct = [
  { value: "p", labelKey: "paragraph" },
  { value: "h1", labelKey: "heading1" },
  { value: "h2", labelKey: "heading2" },
  { value: "h3", labelKey: "heading3" },
  { value: "h4", labelKey: "heading4" },
  { value: "h5", labelKey: "heading5" },
  { value: "h6", labelKey: "heading6" }
], Te = "p,h1,h2,h3,h4,h5,h6,blockquote,li,div,td,th", L = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.8 }, Lt = /<!--\s*(?:(?:Start|End)(?:HTML|Fragment|Selection))\s*-->/gi;
function Q({ name: o }) {
  const r = { "aria-hidden": !0, fill: "none", height: "1em", viewBox: "0 0 24 24", width: "1em", xmlns: "http://www.w3.org/2000/svg" };
  switch (o) {
    case "bold":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "M7 4h5.5a4 4 0 0 1 1.7 7.62A4.2 4.2 0 0 1 12.5 20H7V4Zm2.5 2.5v4.1h2.4a2.05 2.05 0 1 0 0-4.1H9.5Zm0 6.6v4.4h3a2.2 2.2 0 1 0 0-4.4h-3Z", fill: "currentColor" }) });
    case "italic":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "M10 4h8M6 20h8M14 4 10 20", ...L }) });
    case "underline":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "M7 4v6a5 5 0 0 0 10 0V4M5 20h14", ...L }) });
    case "left":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "M5 6h14M5 10h10M5 14h14M5 18h10", ...L }) });
    case "center":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "M4 6h16M7 10h10M4 14h16M7 18h10", ...L }) });
    case "right":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "M5 6h14M9 10h10M5 14h14M9 18h10", ...L }) });
    case "ltr":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "M4 8h15M8 4 4 8l4 4M20 16H5M16 12l4 4-4 4", ...L }) });
    case "rtl":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "M5 8h15M16 4l4 4-4 4M4 16h15M8 12l-4 4 4 4", ...L }) });
    case "ordered":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "M9 6h11M9 12h11M9 18h11M4.5 5.2h1v3M4 8.2h3M4 11.3c.3-.3.7-.5 1.3-.5.7 0 1.2.4 1.2 1s-.4.9-1.1 1.4L4 14h2.7M4 17h2.3l-2.3 3h2.6", ...L }) });
    case "list":
      return /* @__PURE__ */ c("svg", { ...r, children: [
        /* @__PURE__ */ t("path", { d: "M9 6h11M9 12h11M9 18h11", ...L }),
        /* @__PURE__ */ t("circle", { cx: "5", cy: "6", fill: "currentColor", r: "1" }),
        /* @__PURE__ */ t("circle", { cx: "5", cy: "12", fill: "currentColor", r: "1" }),
        /* @__PURE__ */ t("circle", { cx: "5", cy: "18", fill: "currentColor", r: "1" })
      ] });
    case "palette":
      return /* @__PURE__ */ c("svg", { ...r, children: [
        /* @__PURE__ */ t("path", { d: "M12 4a8 8 0 1 0 0 16h1.2a1.8 1.8 0 0 0 1.2-3.1 1.8 1.8 0 0 1 1.2-3.1H18A4 4 0 0 0 22 10c-.9-3.5-4.8-6-10-6Z", ...L }),
        /* @__PURE__ */ t("circle", { cx: "7.5", cy: "10", fill: "currentColor", r: "1" }),
        /* @__PURE__ */ t("circle", { cx: "10", cy: "7", fill: "currentColor", r: "1" }),
        /* @__PURE__ */ t("circle", { cx: "14", cy: "7", fill: "currentColor", r: "1" })
      ] });
    case "highlight":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "m14 5 5 5M4 20h5l9.5-9.5a2.12 2.12 0 0 0-3-3L6 16v4M3 22h18", ...L }) });
    case "clear":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "M5 5h14M9 5l-2 14M15 5l-2 14M4 19h10M17 15l4 4M21 15l-4 4", ...L }) });
    case "photo":
      return /* @__PURE__ */ c("svg", { ...r, children: [
        /* @__PURE__ */ t("rect", { height: "15", rx: "2", width: "18", x: "3", y: "4", ...L }),
        /* @__PURE__ */ t("circle", { cx: "8.5", cy: "9", fill: "currentColor", r: "1.4" }),
        /* @__PURE__ */ t("path", { d: "m5 17 4.5-4 3 2.5 2.5-2 4 3.5", ...L })
      ] });
    case "play":
      return /* @__PURE__ */ c("svg", { ...r, children: [
        /* @__PURE__ */ t("rect", { height: "17", rx: "2", width: "18", x: "3", y: "3.5", ...L }),
        /* @__PURE__ */ t("path", { d: "m10 8 5 4-5 4V8Z", fill: "currentColor" })
      ] });
    case "file":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "M6 3h8l4 4v14H6V3Zm8 0v5h4M9 13h6M9 17h6", ...L }) });
    case "link":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "m10 13 4-4M8.5 16.5l-1 1a3.54 3.54 0 0 1-5-5l3-3a3.54 3.54 0 0 1 5 0M15.5 7.5l1-1a3.54 3.54 0 0 1 5 5l-3 3a3.54 3.54 0 0 1-5 0", ...L }) });
    case "table":
      return /* @__PURE__ */ c("svg", { ...r, children: [
        /* @__PURE__ */ t("rect", { height: "16", rx: "1", width: "18", x: "3", y: "4", ...L }),
        /* @__PURE__ */ t("path", { d: "M3 10h18M9 4v16M15 4v16", ...L })
      ] });
    case "code":
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16", ...L }) });
    default:
      return /* @__PURE__ */ t("svg", { ...r, children: /* @__PURE__ */ t("path", { d: "m6 9 6 6 6-6", ...L }) });
  }
}
function Ge({ alignment: o, direction: r }) {
  const n = { "aria-hidden": !0, fill: "none", height: "1em", viewBox: "0 0 24 24", width: "1em", xmlns: "http://www.w3.org/2000/svg" }, s = {
    left: "M5 6h14M5 10h10M5 14h14M5 18h10",
    center: "M4 6h16M7 10h10M4 14h16M7 18h10",
    right: "M5 6h14M9 10h10M5 14h14M9 18h10"
  }, u = r === "ltr" && o !== "center" ? "translate(24 0) scale(-1 1)" : void 0;
  return /* @__PURE__ */ t("svg", { ...n, "data-alignment": o, "data-direction": r, children: /* @__PURE__ */ t("path", { d: s[o], transform: u, ...L }) });
}
function ve({ target: o, direction: r }) {
  const n = { "aria-hidden": !0, fill: "none", height: "1em", viewBox: "0 0 24 24", width: "1em", xmlns: "http://www.w3.org/2000/svg" }, s = {
    ltr: "M4 8h15M8 4 4 8l4 4M20 16H5M16 12l4 4-4 4",
    rtl: "M5 8h15M16 4l4 4-4 4M4 16h15M8 12l-4 4 4 4"
  }, u = r === "ltr" ? "translate(24 0) scale(-1 1)" : void 0;
  return /* @__PURE__ */ t("svg", { ...n, "data-direction": r, "data-target-direction": o, children: /* @__PURE__ */ t("path", { d: s[o], transform: u, ...L }) });
}
function W({ label: o, children: r, active: n = !1, disabled: s = !1, onClick: u, onRememberSelection: f }) {
  return /* @__PURE__ */ t("button", { type: "button", title: o, "aria-label": o, "aria-pressed": n, disabled: s, onMouseDown: (S) => {
    S.preventDefault(), f();
  }, onClick: u, className: `rte-tool-button${n ? " rte-tool-button-active" : ""}`, children: r });
}
function yt(o) {
  return typeof o == "string" ? o : o == null ? "" : String(o);
}
function Je(o) {
  return /<(img|table|iframe|video|audio)\b/i.test(o) ? !1 : o.replace(/<br\s*\/?\s*>/gi, "").replace(/<[^>]*>/g, "").replace(/&nbsp;/gi, "").trim().length === 0;
}
function E(o) {
  return o.replace(/[&<>'"]/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[r] ?? r);
}
function Mt(o) {
  return o.trim().replace(/\s+/g, " ");
}
function Rt(o) {
  let r = o;
  /^\s*(?:Version|StartHTML|EndHTML|StartFragment|EndFragment|SourceURL):/i.test(r) && (r = r.replace(/^(?:Version|StartHTML|EndHTML|StartFragment|EndFragment|SourceURL):[^\r\n]*(?:\r\n|\r|\n)?/gim, ""));
  const n = /<!--\s*StartFragment\s*-->/i.exec(r), s = /<!--\s*EndFragment\s*-->/i.exec(r);
  return n && s && s.index > n.index && (r = r.slice(n.index + n[0].length, s.index)), r.replace(Lt, "");
}
function xt(o) {
  return E(o).replace(/\r\n?|\u2028|\u2029/g, "<br>");
}
function Ut(o, r) {
  const n = (o == null ? void 0 : o.nodeType) === Node.ELEMENT_NODE ? o : o == null ? void 0 : o.parentElement, s = n == null ? void 0 : n.closest(Te);
  return s && r.contains(s) ? s : null;
}
function Ci(o, r) {
  const n = Array.from(o.querySelectorAll(Te)).filter((f) => {
    try {
      return r.intersectsNode(f);
    } catch {
      return !1;
    }
  }), s = n.filter((f) => !n.some((S) => S !== f && f.contains(S)));
  if (s.length > 0) return s;
  const u = Ut(r.startContainer, o);
  return u ? [u] : [];
}
function q(o, r) {
  const n = o.trim();
  if (!n) return !1;
  if (n.startsWith("/") || n.startsWith("#")) return r === "image" || r === "media";
  if (n.startsWith("data:"))
    return r === "image" ? /^data:image\/(?!svg\+xml)[a-z0-9.+-]+;base64,/i.test(n) : r === "media" ? /^data:(?:audio|video)\/[a-z0-9.+-]+;base64,/i.test(n) : r === "file" ? /^data:(?!(?:text\/html|application\/xhtml\+xml|image\/svg\+xml)(?:[;,]))[^;,]+\/[^;,]+(?:;[^,]*)?;base64,/i.test(n) : !1;
  if (n.startsWith("blob:")) return r !== "link";
  try {
    const s = new URL(n).protocol;
    return (r === "link" ? ["http:", "https:", "mailto:", "tel:"] : ["http:", "https:"]).includes(s);
  } catch {
    return !1;
  }
}
function At(o) {
  return o.replace(/expression\s*\(/gi, "").replace(/behavior\s*:/gi, "").replace(/-moz-binding\s*:/gi, "").replace(/url\s*\([^)]*\)/gi, "");
}
function we(o) {
  if (typeof document > "u") return o;
  const r = document.createElement("template");
  return r.innerHTML = o, r.content.querySelectorAll("script,style,iframe,object,embed,form,input,textarea,button,link,meta,base").forEach((n) => n.remove()), r.content.querySelectorAll("*").forEach((n) => {
    Array.from(n.attributes).forEach((s) => {
      (s.name.toLowerCase().startsWith("on") || s.name.toLowerCase() === "srcdoc") && n.removeAttribute(s.name);
    }), n.hasAttribute("style") && n.setAttribute("style", At(n.getAttribute("style") ?? "")), n instanceof HTMLAnchorElement && (q(n.getAttribute("href") ?? "", n.hasAttribute("download") ? "file" : "link") || n.removeAttribute("href"), n.getAttribute("target") === "_blank" && n.setAttribute("rel", "noopener noreferrer")), n instanceof HTMLImageElement && (q(n.getAttribute("src") ?? "", "image") || n.removeAttribute("src"), n.removeAttribute("srcset")), (n instanceof HTMLVideoElement || n instanceof HTMLAudioElement) && (q(n.getAttribute("src") ?? "", "media") || n.removeAttribute("src"), n.removeAttribute("srcset"));
  }), r.innerHTML;
}
function Ze(o, r) {
  const n = o.trim();
  return q(n, r) ? n : null;
}
function X(o, r) {
  var s;
  return o ? ((s = (o.style[r] || o.getAttribute(r) || "").match(/^(\d+(?:\.\d+)?)(?:px)?$/i)) == null ? void 0 : s[1]) ?? "" : "";
}
function ke(o) {
  return Math.max(0, ...Array.from(o.rows).map((r) => r.cells.length));
}
function Li(o) {
  var s;
  const r = o.type.trim().toLowerCase();
  if (r.startsWith("image/")) return "image";
  if (r.startsWith("video/")) return "video";
  if (r.startsWith("audio/")) return "audio";
  const n = ((s = o.name.toLowerCase().match(/\.([a-z0-9]+)$/)) == null ? void 0 : s[1]) ?? "";
  return ["mp4", "m4v", "webm", "ogv", "mov", "avi", "mkv", "mpeg", "mpg", "3gp", "3g2", "ts"].includes(n) ? "video" : ["mp3", "wav", "ogg", "oga", "opus", "m4a", "aac", "flac", "weba", "wma", "aiff"].includes(n) ? "audio" : "file";
}
function Ce(o, r) {
  return new Promise((n, s) => {
    const u = new FileReader();
    u.onerror = () => s(new Error(r)), u.onload = () => typeof u.result == "string" ? n(u.result) : s(new Error(r)), u.readAsDataURL(o);
  });
}
async function yi(o, r) {
  if (o.type.trim() || typeof URL > "u" || typeof Image > "u" || typeof document > "u") return Ce(o, r);
  const n = URL.createObjectURL(o);
  try {
    const s = await new Promise((S, x) => {
      const _ = new Image();
      _.onload = () => S(_), _.onerror = () => x(new Error(r)), _.src = n;
    }), u = document.createElement("canvas");
    u.width = s.naturalWidth, u.height = s.naturalHeight;
    const f = u.getContext("2d");
    if (!f || !u.width || !u.height) throw new Error(r);
    return f.drawImage(s, 0, 0), u.toDataURL("image/png");
  } finally {
    URL.revokeObjectURL(n);
  }
}
async function Mi(o, r) {
  if (o.type.trim().toLowerCase().startsWith("image/") && typeof createImageBitmap != "function") return !0;
  if (o.type.trim() && !o.type.trim().toLowerCase().startsWith("image/")) return !1;
  if (typeof createImageBitmap == "function")
    try {
      return (await createImageBitmap(o)).close(), !0;
    } catch {
      return !1;
    }
  if (typeof URL > "u" || typeof Image > "u") return !1;
  const n = URL.createObjectURL(o);
  try {
    return await new Promise((s, u) => {
      const f = new Image();
      f.onload = () => s(), f.onerror = () => u(new Error(r)), f.src = n;
    }), !0;
  } catch {
    return !1;
  } finally {
    URL.revokeObjectURL(n);
  }
}
function Nt(o) {
  return typeof Image > "u" ? Promise.resolve(!0) : new Promise((r) => {
    const n = new Image();
    n.onload = () => r(!0), n.onerror = () => r(!1), n.src = o;
  });
}
function Ri(o) {
  return o instanceof Element && o.matches("img,video,audio") ? o : null;
}
function _e(o, r) {
  let n = o;
  const s = Ri(n);
  if (s) return s;
  for (; n && n.childNodes.length; ) {
    n = r === "backward" ? n.lastChild : n.firstChild;
    const u = Ri(n);
    if (u) return u;
  }
  return null;
}
function xi(o, r, n) {
  let s = o;
  for (; s && s !== n; ) {
    const u = r === "backward" ? s.previousSibling : s.nextSibling;
    if (u) return u;
    s = s.parentNode;
  }
  return null;
}
function Ye(o, r, n) {
  var S;
  if (!r.collapsed) return null;
  const s = r.startContainer, u = r.startOffset;
  if (s.nodeType === Node.TEXT_NODE) {
    const x = ((S = s.textContent) == null ? void 0 : S.length) ?? 0;
    return n === "backward" && u !== 0 || n === "forward" && u !== x ? null : _e(xi(s, n, o), n === "backward" ? "backward" : "forward");
  }
  const f = n === "backward" ? s.childNodes[u - 1] : s.childNodes[u];
  return _e(f || xi(s, n, o), n === "backward" ? "backward" : "forward");
}
const Et = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "BLOCKQUOTE", "PRE", "OL", "UL", "TABLE", "HR"]);
function It(o) {
  return o.nodeType === Node.ELEMENT_NODE && Et.has(o.tagName);
}
function Qe(o) {
  const r = [];
  let n = null;
  const s = () => {
    var u;
    r.length !== 0 && (n = document.createElement("p"), (u = r[0].parentNode) == null || u.insertBefore(n, r[0]), r.splice(0).forEach((f) => n == null ? void 0 : n.appendChild(f)), n = null);
  };
  Array.from(o.childNodes).forEach((u) => {
    if (It(u) || u.nodeType === Node.ELEMENT_NODE && ["IMG", "VIDEO", "AUDIO"].includes(u.tagName))
      s();
    else {
      if (u.nodeType === Node.TEXT_NODE && !(u.textContent ?? "").trim() && r.length === 0)
        return;
      r.push(u);
    }
  }), s();
}
function Pt({ children: o, onClose: r, title: n, titleId: s, direction: u }) {
  return /* @__PURE__ */ t("div", { className: "rte-modal-backdrop", role: "presentation", onMouseDown: r, children: /* @__PURE__ */ c("section", { "aria-labelledby": s, "aria-modal": "true", className: "rte-modal", dir: u, role: "dialog", tabIndex: -1, onKeyDown: (f) => {
    f.key === "Escape" && r();
  }, onMouseDown: (f) => f.stopPropagation(), children: [
    /* @__PURE__ */ t("h2", { className: "rte-modal-title", id: s, children: n }),
    o
  ] }) });
}
function St({ value: o, onChange: r, id: n, theme: s = "light", title: u, error: f, placeholder: S, direction: x = "ltr", locale: _ = "English", minHeight: ei = 260, disabled: C = !1, className: Ai = "", labels: Ni, maxImageSize: ii = 5 * 1024 * 1024 }) {
  const Ei = pt(), g = n ?? Ei, h = P(null), j = P(null), $ = P(null), ti = P(null), ai = P(null), li = P(null), I = P(null), Le = P(null), ye = P(null), ri = P(null), ni = P(null), oi = P(null), Ii = kt(s) ? s : "light", a = vt(_, Ni), V = yt(o), de = Number.isFinite(ei) ? Math.max(0, ei) : 260, [di, Me] = v(V), [M, Pi] = v(!1), [N, ee] = v(null), [si, ci] = v(""), [mi, ui] = v(""), [Re, gi] = v(""), [hi, Fi] = v(3), [pi, Hi] = v(3), [G, ie] = v(null), [z, T] = v(""), [A, B] = v(!1), [Si, bi] = v(() => Je(V)), [Di, se] = v(null), [$i, fi] = v(""), [zi, vi] = v(""), [xe, Ue] = v("video"), [Y, ce] = v(""), [Ae, me] = v(""), [Ne, ue] = v(""), [Ee, Ie] = v(""), [Pe, Fe] = v(""), [te, ge] = v(""), [ae, He] = v(""), [le, he] = v(""), [wi, Se] = v(""), [De, $e] = v(""), [ze, Be] = v(""), [We, Bi] = v({ bold: !1, italic: !1, underline: !1 }), qe = P(V), pe = K((e) => {
    qe.current !== e && (qe.current = e, Me(e), bi(Je(e)), r(e));
  }, [r]);
  Ke(() => {
    const e = we(V);
    qe.current = V, Me(V), bi(Je(e)), !M && h.current && h.current.innerHTML !== e && (h.current.innerHTML = e);
  }, [V, M]);
  const k = K(() => {
    const e = h.current, i = typeof window > "u" ? null : window.getSelection();
    if (!e || !i || i.rangeCount === 0) return;
    const l = i.getRangeAt(0);
    e.contains(l.commonAncestorContainer) && (j.current = l.cloneRange());
  }, []), J = K(() => {
    const e = typeof window > "u" ? null : window.getSelection(), i = h.current;
    !e || !i || (i.focus({ preventScroll: !0 }), j.current && i.contains(j.current.commonAncestorContainer) && (e.removeAllRanges(), e.addRange(j.current)));
  }, []), re = K(() => {
    const e = h.current, i = typeof window > "u" ? null : window.getSelection();
    !e || !i || i.rangeCount === 0 || !e.contains(i.anchorNode) || (Bi({ bold: document.queryCommandState("bold"), italic: document.queryCommandState("italic"), underline: document.queryCommandState("underline") }), k());
  }, [k]);
  Ke(() => (document.addEventListener("selectionchange", re), () => document.removeEventListener("selectionchange", re)), [re]), Ke(() => {
    var e, i, l;
    N === "link" && ((e = ri.current) == null || e.focus()), N === "image" && ((i = ni.current) == null || i.focus()), N === "media" && ((l = oi.current) == null || l.focus());
  }, [N]);
  const U = K(() => {
    h.current && (Qe(h.current), pe(h.current.innerHTML), k(), re());
  }, [pe, k, re]), F = K((e, i) => {
    C || M || (J(), document.execCommand(e, !1, i), U());
  }, [U, C, J, M]), Wi = (e) => {
    var i;
    F("fontSize", "7"), (i = h.current) == null || i.querySelectorAll('font[size="7"]').forEach((l) => {
      l.removeAttribute("size"), l.style.fontSize = `${e}px`;
    }), U();
  }, qi = K((e) => {
    if (C || M) return;
    J();
    const i = h.current, l = typeof window > "u" ? null : window.getSelection();
    let d = l != null && l.rangeCount ? l.getRangeAt(0) : null;
    if (!i || !d || !i.contains(d.commonAncestorContainer)) return;
    let m = Ci(i, d);
    m.length === 0 && (document.execCommand("formatBlock", !1, "p"), d = l != null && l.rangeCount ? l.getRangeAt(0) : null, d && (m = Ci(i, d))), m.forEach((p) => {
      p.style.textAlign = e;
    }), m.length > 0 && U();
  }, [U, C, J, M]), be = (e) => {
    var m, p;
    if (!h.current || M || C) return;
    J();
    const i = typeof window > "u" ? null : window.getSelection(), l = i != null && i.rangeCount ? i.getRangeAt(0) : null, d = Array.from(h.current.querySelectorAll(Te)).filter((b) => {
      try {
        return !!(l != null && l.intersectsNode(b));
      } catch {
        return !1;
      }
    });
    if (d.length === 0) {
      const b = l == null ? void 0 : l.startContainer, R = (b == null ? void 0 : b.nodeType) === Node.ELEMENT_NODE ? b : b == null ? void 0 : b.parentElement, y = R == null ? void 0 : R.closest(Te);
      if (y && h.current.contains(y)) d.push(y);
      else {
        document.execCommand("formatBlock", !1, "p");
        const w = (m = window.getSelection()) == null ? void 0 : m.anchorNode, Z = (w == null ? void 0 : w.nodeType) === Node.ELEMENT_NODE ? w.closest("p") : (p = w == null ? void 0 : w.parentElement) == null ? void 0 : p.closest("p");
        Z && d.push(Z);
      }
    }
    d.forEach((b) => {
      b.dir = e;
    }), U();
  }, ji = () => {
    F("removeFormat"), F("unlink"), F("formatBlock", "p");
  }, O = () => {
    ee(null), T(""), B(!1), Le.current = null, ye.current = null;
  }, ne = (e) => {
    J(), document.execCommand("insertHTML", !1, we(e)), O(), U();
  }, Vi = () => {
    var e;
    k(), T(""), ci(""), ui(((e = j.current) == null ? void 0 : e.toString()) ?? ""), gi(""), ee("link");
  }, Oi = () => {
    k(), T(""), ee("table");
  }, Ki = () => {
    var i;
    if (C || M || A) return;
    k(), T("");
    const e = I.current instanceof HTMLImageElement && ((i = h.current) != null && i.contains(I.current)) ? I.current : null;
    Le.current = e, ge((e == null ? void 0 : e.getAttribute("src")) ?? ""), He((e == null ? void 0 : e.getAttribute("title")) ?? ""), he((e == null ? void 0 : e.getAttribute("alt")) ?? ""), Se((e == null ? void 0 : e.getAttribute("class")) ?? ""), $e(X(e, "width")), Be(X(e, "height")), e || (ge(""), He(""), he(""), Se(""), $e(""), Be("")), ee("image");
  }, Gi = () => {
    if (C || M || A) return;
    k(), T("");
    const e = I.current, i = e instanceof HTMLAudioElement || e instanceof HTMLVideoElement ? e : null;
    ye.current = i, Ue(i instanceof HTMLAudioElement ? "audio" : "video"), ce((i == null ? void 0 : i.getAttribute("src")) ?? ""), me((i == null ? void 0 : i.getAttribute("title")) ?? ""), ue((i == null ? void 0 : i.getAttribute("alt")) ?? (i == null ? void 0 : i.getAttribute("data-alt")) ?? (i == null ? void 0 : i.getAttribute("aria-label")) ?? ""), Ie(X(i, "width")), Fe(X(i, "height")), i || (ce(""), me(""), ue(""), Ie(""), Fe("")), ee("media");
  }, Ji = () => {
    const e = Ze(si, "link"), i = mi.trim();
    if (!e) {
      T(a.invalidUrl);
      return;
    }
    if (!i) {
      T(a.linkTextRequired);
      return;
    }
    const l = Re.trim() ? ` title="${E(Re.trim())}"` : "";
    ne(`<a href="${E(e)}" target="_blank" rel="noopener noreferrer"${l}>${E(i)}</a>`);
  }, Zi = () => {
    const e = Math.min(12, Math.max(1, Number(hi) || 1)), i = Math.min(8, Math.max(1, Number(pi) || 1)), l = Array.from({ length: e }, () => `<tr>${Array.from({ length: i }, () => "<td><br></td>").join("")}</tr>`).join("");
    ne(`<table><tbody>${l}</tbody></table><p><br></p>`);
  }, oe = () => {
    var l;
    const e = G, i = $.current;
    return !e || !i || !((l = h.current) != null && l.contains(e)) || !e.contains(i) ? (ie(null), $.current = null, null) : { table: e, cell: i };
  }, fe = (e) => {
    C || M || !oe() || (e(), U());
  }, _i = () => fe(() => {
    const e = oe(), i = e == null ? void 0 : e.cell.closest("tr");
    if (!e || !(i != null && i.parentElement)) return;
    const l = document.createElement("tr");
    for (let d = 0; d < Math.max(ke(e.table), 1); d += 1) {
      const m = document.createElement("td");
      m.innerHTML = "<br>", l.appendChild(m);
    }
    i.parentElement.insertBefore(l, i.nextSibling), $.current = l.cells[0] ?? null;
  }), Yi = () => fe(() => {
    const e = oe(), i = e == null ? void 0 : e.cell.closest("tr");
    if (!e || !i || e.table.rows.length <= 1) return;
    const l = i.previousElementSibling ?? i.nextElementSibling;
    i.remove(), $.current = (l == null ? void 0 : l.cells[0]) ?? null;
  }), Qi = () => fe(() => {
    const e = oe(), i = e == null ? void 0 : e.cell.closest("tr");
    if (!e || !i) return;
    const l = e.cell.cellIndex;
    Array.from(e.table.rows).forEach((d) => {
      const m = d.cells[l], p = document.createElement((m == null ? void 0 : m.tagName.toLowerCase()) === "th" ? "th" : "td");
      p.innerHTML = "<br>", m ? d.insertBefore(p, m) : d.appendChild(p);
    }), $.current = i.cells[l] ?? null;
  }), Xi = () => fe(() => {
    const e = oe();
    if (!e || ke(e.table) <= 1) return;
    const i = e.cell.cellIndex, l = e.cell.closest("tr");
    Array.from(e.table.rows).forEach((d) => {
      var m;
      return (m = d.cells[i]) == null ? void 0 : m.remove();
    }), $.current = (l == null ? void 0 : l.cells[Math.min(i, ke(e.table) - 1)]) ?? null;
  }), et = async (e, i) => {
    if (!e || e.size === 0) throw new Error(a.invalidFile);
    const l = Li(e);
    if (l === "image") {
      if (e.size > ii) throw new Error(a.imageTooLarge);
      if (!await Mi(e, a.invalidImage)) throw new Error(a.invalidImage);
    }
    const d = l === "image" ? await yi(e, a.fileReadError) : await Ce(e, a.fileReadError);
    if (!q(d, l === "image" ? "image" : l === "file" ? "file" : "media")) throw new Error(l === "image" ? a.invalidImage : a.invalidFile);
    const p = E(d), b = E(e.name), R = l === "image" ? `<img src="${p}" alt="${b}" title="${b}" data-file-name="${b}" />` : l === "video" ? `<video src="${p}" title="${b}" data-file-name="${b}" controls style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;"></video>` : l === "audio" ? `<audio src="${p}" title="${b}" data-file-name="${b}" controls style="display: block; margin-left: auto; margin-right: auto;"></audio>` : `<a href="${p}" target="_blank" rel="noopener noreferrer" download="${b}">${b}</a>`;
    ne(R);
  }, it = async (e, i) => {
    var d;
    const l = (d = e.target.files) == null ? void 0 : d[0];
    if (e.target.value = "", !!l) {
      B(!0), T("");
      try {
        await et(l, i);
      } catch (m) {
        T(m instanceof Error ? m.message : a.invalidFile);
      } finally {
        B(!1);
      }
    }
  }, tt = async (e) => {
    var l;
    const i = (l = e.target.files) == null ? void 0 : l[0];
    if (e.target.value = "", !i || i.size === 0) {
      T(a.invalidImage);
      return;
    }
    if (i.size > ii) {
      T(a.imageTooLarge);
      return;
    }
    B(!0), T("");
    try {
      if (!await Mi(i, a.invalidImage)) throw new Error(a.invalidImage);
      const d = await yi(i, a.fileReadError);
      if (!q(d, "image")) throw new Error(a.invalidImage);
      ge(d), le || he(i.name);
    } catch (d) {
      T(d instanceof Error ? d.message : a.invalidImage);
    } finally {
      B(!1);
    }
  }, at = async (e) => {
    var d;
    const i = (d = e.target.files) == null ? void 0 : d[0];
    if (e.target.value = "", !i || i.size === 0) {
      T(a.invalidFile);
      return;
    }
    const l = Li(i);
    if (l !== "audio" && l !== "video") {
      T(a.invalidFile);
      return;
    }
    B(!0), T("");
    try {
      const m = await Ce(i, a.fileReadError);
      if (!q(m, "media")) throw new Error(a.invalidFile);
      Ue(l), ce(m), Ae || me(i.name), Ne || ue(i.name);
    } catch (m) {
      T(m instanceof Error ? m.message : a.fileReadError);
    } finally {
      B(!1);
    }
  }, lt = (e) => {
    var i;
    C || M || A || (k(), T(""), (i = li.current) == null || i.click());
  }, ki = (e, i) => {
    var m;
    const l = I.current;
    if (C || M || !l || !((m = h.current) != null && m.contains(l))) return;
    const d = Number(i);
    i.trim() ? Number.isFinite(d) && d > 0 && l.style.setProperty(e, `${d}px`) : l.style.removeProperty(e), e === "width" ? fi(i) : vi(i), U();
  }, je = (e) => {
    var l;
    const i = I.current;
    if (!i || C || M || !((l = h.current) != null && l.contains(i))) {
      qi(e);
      return;
    }
    i.style.display = "block", i.style.marginTop = ".75rem", i.style.marginBottom = ".75rem", i.style.marginLeft = e === "right" || e === "center" ? "auto" : "0", i.style.marginRight = e === "left" || e === "center" ? "auto" : "0", U();
  }, rt = K((e) => {
    const i = h.current, l = e.parentNode;
    if (!i || !l || !i.contains(e)) return;
    const d = Array.prototype.indexOf.call(l.childNodes, e);
    e.remove();
    const m = typeof window > "u" ? null : window.getSelection(), p = document.createRange();
    p.setStart(l, Math.min(d, l.childNodes.length)), p.collapse(!0), m && (m.removeAllRanges(), m.addRange(p)), j.current = p.cloneRange(), I.current = null, se(null), U();
  }, [U]), nt = (e) => {
    if (C || M) return;
    const i = h.current;
    if (e.key === "Enter" && i && i.childNodes.length === 0) {
      e.preventDefault();
      const R = document.createElement("p");
      R.appendChild(document.createElement("br")), i.appendChild(R);
      const y = window.getSelection(), w = document.createRange();
      w.setStart(R, 0), w.collapse(!0), y == null || y.removeAllRanges(), y == null || y.addRange(w), j.current = w.cloneRange(), U();
      return;
    }
    if (e.key !== "Backspace" && e.key !== "Delete") return;
    const l = typeof window > "u" ? null : window.getSelection(), d = l != null && l.rangeCount ? l.getRangeAt(0) : null, m = I.current && d && (Ye(h.current, d, "backward") === I.current || Ye(h.current, d, "forward") === I.current) ? I.current : null, p = d && h.current ? Ye(h.current, d, e.key === "Backspace" ? "backward" : "forward") : null, b = m ?? p;
    b && (e.preventDefault(), rt(b));
  }, ot = () => {
    var e, i;
    if (!C) {
      if (M) {
        const l = we(di);
        h.current && (h.current.innerHTML = l, Qe(h.current)), pe(((e = h.current) == null ? void 0 : e.innerHTML) ?? l);
      } else Me(((i = h.current) == null ? void 0 : i.innerHTML) ?? V);
      ie(null), $.current = null, I.current = null, se(null), Pi((l) => !l);
    }
  }, dt = (e) => {
    e.preventDefault();
    const i = Rt(e.clipboardData.getData("text/html")), l = e.clipboardData.getData("text/plain"), d = i.trim() ? we(i) : "", m = d.trim() ? d : xt(l);
    m && (k(), h.current && Qe(h.current), J(), document.execCommand("insertHTML", !1, m), U());
  }, st = (e) => {
    var p, b;
    const i = e.target;
    if (!(i instanceof HTMLElement)) return;
    const l = i.closest("img,video,audio");
    if (l && ((p = h.current) != null && p.contains(l))) {
      I.current = l, se(l), fi(X(l, "width")), vi(X(l, "height")), $.current = null, ie(null);
      const R = window.getSelection(), y = document.createRange();
      y.setStartAfter(l), y.collapse(!0), R == null || R.removeAllRanges(), R == null || R.addRange(y), j.current = y.cloneRange();
      return;
    }
    I.current = null, se(null);
    const d = i.closest("td,th"), m = d == null ? void 0 : d.closest("table");
    if (!d || !m || !((b = h.current) != null && b.contains(m))) {
      $.current = null, ie(null);
      return;
    }
    $.current = d, ie(m), k();
  }, ct = async () => {
    var d;
    if (A) return;
    const e = Ze(te, "image");
    if (!e) {
      T(a.invalidUrl);
      return;
    }
    const i = De.trim() ? Number(De) : null, l = ze.trim() ? Number(ze) : null;
    if (i !== null && (!Number.isFinite(i) || i <= 0) || l !== null && (!Number.isFinite(l) || l <= 0)) {
      T(a.invalidDimensions);
      return;
    }
    B(!0), T("");
    try {
      if (!await Nt(e)) throw new Error(a.invalidImage);
      const m = i === null ? "" : ` width="${i}"`, p = l === null ? "" : ` height="${l}"`, b = ae.trim() ? ` title="${E(ae.trim())}"` : "", R = ` alt="${E(le)}"`, y = Mt(wi), w = Le.current;
      if (w && ((d = h.current) != null && d.contains(w)))
        w.setAttribute("src", e), w.setAttribute("alt", le), ae.trim() ? w.setAttribute("title", ae.trim()) : w.removeAttribute("title"), i === null ? w.removeAttribute("width") : w.setAttribute("width", String(i)), l === null ? w.removeAttribute("height") : w.setAttribute("height", String(l)), y ? w.setAttribute("class", y) : w.removeAttribute("class"), O(), U();
      else {
        const Z = y ? ` class="${E(y)}"` : "";
        ne(`<img src="${E(e)}"${R}${b}${m}${p}${Z} />`);
      }
    } catch (m) {
      T(m instanceof Error ? m.message : a.invalidImage);
    } finally {
      B(!1);
    }
  }, mt = async () => {
    var Ti;
    if (A) return;
    const e = Y.trim();
    if (!q(e, "media")) {
      T(a.invalidUrl);
      return;
    }
    const i = Ee.trim() ? Number(Ee) : null, l = Pe.trim() ? Number(Pe) : null;
    if (i !== null && (!Number.isFinite(i) || i <= 0) || l !== null && (!Number.isFinite(l) || l <= 0)) {
      T(a.invalidDimensions);
      return;
    }
    const d = ye.current, m = Ae.trim(), p = Ne.trim(), b = i === null ? "" : ` width="${i}"`, R = l === null ? "" : ` height="${l}"`, y = m ? ` title="${E(m)}"` : "", w = p ? ` alt="${E(p)}" data-alt="${E(p)}" aria-label="${E(p)}"` : "";
    if (d && ((Ti = h.current) != null && Ti.contains(d))) {
      d.setAttribute("src", e), m ? d.setAttribute("title", m) : d.removeAttribute("title"), p ? (d.setAttribute("alt", p), d.setAttribute("data-alt", p), d.setAttribute("aria-label", p)) : (d.removeAttribute("alt"), d.removeAttribute("data-alt"), d.removeAttribute("aria-label")), i === null ? d.removeAttribute("width") : d.setAttribute("width", String(i)), l === null ? d.removeAttribute("height") : d.setAttribute("height", String(l)), O(), U();
      return;
    }
    const Z = xe;
    ne(`<${Z} src="${E(e)}"${y}${w}${b}${R} controls style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;"></${Z}>`);
  }, ut = (G == null ? void 0 : G.rows.length) ?? 0, gt = G ? ke(G) : 0, H = C || M, D = (e, i, l, d = !1) => /* @__PURE__ */ t(W, { label: e, active: d, disabled: H, onRememberSelection: k, onClick: l, children: /* @__PURE__ */ t(Q, { name: i }) }), ht = S ?? a.placeholder, Ve = u ?? a.editorAriaLabel;
  return /* @__PURE__ */ c("div", { className: `rte-root ${Ai}`.trim(), "data-direction": x, "data-theme": Ii, dir: x, children: [
    u && /* @__PURE__ */ t("label", { className: "rte-title", htmlFor: g, id: `${g}-label`, children: u }),
    /* @__PURE__ */ c("div", { className: `rte-shell${f ? " rte-shell-error" : ""}${C ? " rte-shell-disabled" : ""}`, children: [
      /* @__PURE__ */ c("div", { className: "rte-toolbar", role: "toolbar", "aria-label": Ve, children: [
        /* @__PURE__ */ c("div", { className: "rte-toolbar-group", children: [
          /* @__PURE__ */ c("label", { className: "rte-select-wrap", children: [
            /* @__PURE__ */ t("span", { className: "rte-sr-only", children: a.fontSize }),
            /* @__PURE__ */ t("select", { "aria-label": a.fontSize, title: a.fontSize, defaultValue: "16", disabled: H, onMouseDown: k, onChange: (e) => Wi(e.target.value), className: "rte-select", children: Tt.map((e) => /* @__PURE__ */ c("option", { value: e, children: [
              e,
              "px"
            ] }, e)) }),
            /* @__PURE__ */ t(Q, { name: "chevron" })
          ] }),
          /* @__PURE__ */ c("label", { className: "rte-select-wrap", children: [
            /* @__PURE__ */ t("span", { className: "rte-sr-only", children: a.paragraph }),
            /* @__PURE__ */ t("select", { "aria-label": a.paragraph, title: a.paragraph, defaultValue: "p", disabled: H, onMouseDown: k, onChange: (e) => F("formatBlock", e.target.value), className: "rte-select", children: Ct.map((e) => /* @__PURE__ */ t("option", { value: e.value, children: a[e.labelKey] }, e.value)) }),
            /* @__PURE__ */ t(Q, { name: "chevron" })
          ] })
        ] }),
        /* @__PURE__ */ c("div", { className: "rte-toolbar-group", children: [
          D(a.bold, "bold", () => F("bold"), We.bold),
          D(a.italic, "italic", () => F("italic"), We.italic),
          D(a.underline, "underline", () => F("underline"), We.underline)
        ] }),
        /* @__PURE__ */ c("div", { className: "rte-toolbar-group", children: [
          /* @__PURE__ */ t(W, { label: a.alignRight, disabled: H, onRememberSelection: k, onClick: () => je(x === "ltr" ? "left" : "right"), children: /* @__PURE__ */ t(Ge, { alignment: "right", direction: x }) }),
          /* @__PURE__ */ t(W, { label: a.alignCenter, disabled: H, onRememberSelection: k, onClick: () => je("center"), children: /* @__PURE__ */ t(Ge, { alignment: "center", direction: x }) }),
          /* @__PURE__ */ t(W, { label: a.alignLeft, disabled: H, onRememberSelection: k, onClick: () => je(x === "ltr" ? "right" : "left"), children: /* @__PURE__ */ t(Ge, { alignment: "left", direction: x }) }),
          x === "rtl" ? /* @__PURE__ */ c(Oe, { children: [
            /* @__PURE__ */ t(W, { label: a.rtl, disabled: H, onRememberSelection: k, onClick: () => be("rtl"), children: /* @__PURE__ */ t(ve, { target: "rtl", direction: x }) }),
            /* @__PURE__ */ t(W, { label: a.ltr, disabled: H, onRememberSelection: k, onClick: () => be("ltr"), children: /* @__PURE__ */ t(ve, { target: "ltr", direction: x }) })
          ] }) : /* @__PURE__ */ c(Oe, { children: [
            /* @__PURE__ */ t(W, { label: a.ltr, disabled: H, onRememberSelection: k, onClick: () => be("ltr"), children: /* @__PURE__ */ t(ve, { target: "ltr", direction: x }) }),
            /* @__PURE__ */ t(W, { label: a.rtl, disabled: H, onRememberSelection: k, onClick: () => be("rtl"), children: /* @__PURE__ */ t(ve, { target: "rtl", direction: x }) })
          ] })
        ] }),
        /* @__PURE__ */ c("div", { className: "rte-toolbar-group", children: [
          D(a.orderedList, "ordered", () => F("insertOrderedList")),
          D(a.unorderedList, "list", () => F("insertUnorderedList"))
        ] }),
        /* @__PURE__ */ c("div", { className: "rte-toolbar-group", children: [
          /* @__PURE__ */ c("label", { className: "rte-color-button", title: a.textColor, "aria-label": a.textColor, onMouseDown: k, children: [
            /* @__PURE__ */ t(Q, { name: "palette" }),
            /* @__PURE__ */ t("input", { type: "color", defaultValue: "#171821", disabled: H, onChange: (e) => F("foreColor", e.target.value) })
          ] }),
          /* @__PURE__ */ c("label", { className: "rte-color-button", title: a.backgroundColor, "aria-label": a.backgroundColor, onMouseDown: k, children: [
            /* @__PURE__ */ t(Q, { name: "highlight" }),
            /* @__PURE__ */ t("input", { type: "color", defaultValue: "#ece8f8", disabled: H, onChange: (e) => F("hiliteColor", e.target.value) })
          ] }),
          D(a.clearFormatting, "clear", ji)
        ] }),
        /* @__PURE__ */ c("div", { className: "rte-toolbar-group", children: [
          D(A ? a.uploading : a.insertImage, "photo", Ki),
          D(A ? a.uploading : a.insertMedia, "play", Gi, N === "media"),
          D(A ? a.uploading : a.insertFile, "file", () => lt()),
          D(a.insertLink, "link", Vi, N === "link"),
          D(a.insertTable, "table", Oi, N === "table")
        ] }),
        /* @__PURE__ */ t("div", { className: "rte-toolbar-last", children: /* @__PURE__ */ t(W, { label: a.sourceCode, active: M, disabled: C, onRememberSelection: k, onClick: ot, children: /* @__PURE__ */ t(Q, { name: "code" }) }) })
      ] }),
      /* @__PURE__ */ t("input", { ref: ti, type: "file", accept: "image/*", "aria-label": a.selectImage, onChange: tt, className: "rte-hidden" }),
      /* @__PURE__ */ t("input", { ref: ai, type: "file", accept: "audio/*,video/*", "aria-label": a.selectMedia, onChange: at, className: "rte-hidden" }),
      /* @__PURE__ */ t("input", { ref: li, type: "file", accept: "*/*", "aria-label": a.selectFile, onChange: (e) => it(e, "file"), className: "rte-hidden" }),
      Di && !M && !C && /* @__PURE__ */ c("div", { className: "rte-subtoolbar", children: [
        /* @__PURE__ */ t("span", { className: "rte-subtoolbar-label", children: a.mediaDimensions }),
        /* @__PURE__ */ c("label", { className: "rte-inline-label", children: [
          a.width,
          /* @__PURE__ */ t("input", { type: "number", min: "1", step: "1", inputMode: "numeric", value: $i, onChange: (e) => ki("width", e.target.value), className: "rte-field rte-dimension-field" })
        ] }),
        /* @__PURE__ */ c("label", { className: "rte-inline-label", children: [
          a.height,
          /* @__PURE__ */ t("input", { type: "number", min: "1", step: "1", inputMode: "numeric", value: zi, onChange: (e) => ki("height", e.target.value), className: "rte-field rte-dimension-field" })
        ] })
      ] }),
      G && !M && /* @__PURE__ */ c("div", { className: "rte-subtoolbar", children: [
        /* @__PURE__ */ t("span", { className: "rte-subtoolbar-label", children: a.tableControls }),
        /* @__PURE__ */ t("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: _i, disabled: C, className: "rte-action-button", children: a.addRow }),
        /* @__PURE__ */ t("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: Yi, disabled: C || ut <= 1, className: "rte-action-button", children: a.deleteRow }),
        /* @__PURE__ */ t("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: Qi, disabled: C, className: "rte-action-button", children: a.addColumn }),
        /* @__PURE__ */ t("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: Xi, disabled: C || gt <= 1, className: "rte-action-button", children: a.deleteColumn })
      ] }),
      z && !N && /* @__PURE__ */ t("p", { role: "alert", className: "rte-inline-feedback", children: z }),
      /* @__PURE__ */ t("div", { className: "rte-editor-wrap", children: M ? /* @__PURE__ */ t("textarea", { id: g, value: di, disabled: C, dir: "ltr", spellCheck: !1, "aria-label": Ve, "aria-labelledby": u ? `${g}-label` : void 0, "aria-invalid": f ? !0 : void 0, "aria-describedby": f ? `${g}-error` : void 0, onChange: (e) => pe(e.target.value), className: "rte-source", style: { height: de, minHeight: de } }) : /* @__PURE__ */ c(Oe, { children: [
        Si && /* @__PURE__ */ t("span", { "aria-hidden": "true", className: "rte-placeholder", children: ht }),
        /* @__PURE__ */ t("div", { ref: h, id: g, role: "textbox", "aria-multiline": "true", "aria-label": Ve, "aria-labelledby": u ? `${g}-label` : void 0, "aria-invalid": f ? !0 : void 0, "aria-describedby": f ? `${g}-error` : void 0, contentEditable: !C, suppressContentEditableWarning: !0, dir: x, onInput: U, onBlur: k, onClick: st, onKeyDown: nt, onPaste: dt, className: "rte-editor", style: { height: de, minHeight: de } })
      ] }) })
    ] }),
    N && /* @__PURE__ */ t(Pt, { onClose: O, direction: x, titleId: `${g}-modal-title`, title: N === "image" ? a.insertImage : N === "media" ? a.insertMedia : N === "link" ? a.insertLink : a.insertTable, children: N === "image" ? /* @__PURE__ */ c("div", { className: "rte-modal-content", children: [
      /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-image-url`, children: [
        a.imageUrl,
        /* @__PURE__ */ t("input", { ref: ni, id: `${g}-image-url`, type: "text", inputMode: "url", value: te, onChange: (e) => ge(e.target.value), dir: "ltr", placeholder: a.imageUrlPlaceholder, className: "rte-field" })
      ] }),
      /* @__PURE__ */ t("button", { type: "button", className: "rte-action-button rte-upload-button", onClick: () => {
        var e;
        return (e = ti.current) == null ? void 0 : e.click();
      }, disabled: A, children: A ? a.uploading : a.selectImage }),
      te && Ze(te, "image") && /* @__PURE__ */ c("div", { className: "rte-image-preview", children: [
        /* @__PURE__ */ t("span", { className: "rte-modal-label", children: a.imagePreview }),
        /* @__PURE__ */ t("img", { src: te, alt: le })
      ] }),
      /* @__PURE__ */ c("div", { className: "rte-modal-grid", children: [
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-image-title`, children: [
          a.imageTitle,
          /* @__PURE__ */ t("input", { id: `${g}-image-title`, type: "text", value: ae, onChange: (e) => He(e.target.value), className: "rte-field" })
        ] }),
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-image-alt`, children: [
          a.imageAlt,
          /* @__PURE__ */ t("input", { id: `${g}-image-alt`, type: "text", value: le, onChange: (e) => he(e.target.value), className: "rte-field" })
        ] })
      ] }),
      /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-image-class`, children: [
        a.imageClass,
        /* @__PURE__ */ t("input", { id: `${g}-image-class`, type: "text", value: wi, onChange: (e) => Se(e.target.value), className: "rte-field" })
      ] }),
      /* @__PURE__ */ c("div", { className: "rte-modal-grid", children: [
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-image-width`, children: [
          a.imageWidth,
          /* @__PURE__ */ t("input", { id: `${g}-image-width`, type: "number", min: "1", step: "1", value: De, onChange: (e) => $e(e.target.value), className: "rte-field" })
        ] }),
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-image-height`, children: [
          a.imageHeight,
          /* @__PURE__ */ t("input", { id: `${g}-image-height`, type: "number", min: "1", step: "1", value: ze, onChange: (e) => Be(e.target.value), className: "rte-field" })
        ] })
      ] }),
      z && /* @__PURE__ */ t("p", { role: "alert", className: "rte-panel-error", children: z }),
      /* @__PURE__ */ c("div", { className: "rte-modal-actions", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: O, className: "rte-action-button", children: a.cancel }),
        /* @__PURE__ */ t("button", { type: "button", onClick: ct, disabled: A, className: "rte-primary-button", children: A ? a.uploading : a.insertImage })
      ] })
    ] }) : N === "media" ? /* @__PURE__ */ c("div", { className: "rte-modal-content", children: [
      /* @__PURE__ */ c("div", { className: "rte-modal-grid", children: [
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-media-type`, children: [
          a.mediaType,
          /* @__PURE__ */ c("select", { id: `${g}-media-type`, value: xe, onChange: (e) => Ue(e.target.value), className: "rte-field", children: [
            /* @__PURE__ */ t("option", { value: "audio", children: a.audio }),
            /* @__PURE__ */ t("option", { value: "video", children: a.video })
          ] })
        ] }),
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-media-url`, children: [
          a.mediaUrl,
          /* @__PURE__ */ t("input", { ref: oi, id: `${g}-media-url`, type: "text", inputMode: "url", value: Y, onChange: (e) => ce(e.target.value), dir: "ltr", placeholder: a.mediaUrlPlaceholder, className: "rte-field" })
        ] })
      ] }),
      /* @__PURE__ */ t("button", { type: "button", className: "rte-action-button rte-upload-button", onClick: () => {
        var e;
        return (e = ai.current) == null ? void 0 : e.click();
      }, disabled: A, children: A ? a.uploading : a.selectMedia }),
      Y && q(Y, "media") && /* @__PURE__ */ c("div", { className: "rte-image-preview", children: [
        /* @__PURE__ */ t("span", { className: "rte-modal-label", children: a.mediaPreview }),
        xe === "audio" ? /* @__PURE__ */ t("audio", { src: Y, controls: !0 }) : /* @__PURE__ */ t("video", { src: Y, controls: !0 })
      ] }),
      /* @__PURE__ */ c("div", { className: "rte-modal-grid", children: [
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-media-title`, children: [
          a.mediaTitle,
          /* @__PURE__ */ t("input", { id: `${g}-media-title`, type: "text", value: Ae, onChange: (e) => me(e.target.value), className: "rte-field" })
        ] }),
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-media-alt`, children: [
          a.mediaAlt,
          /* @__PURE__ */ t("input", { id: `${g}-media-alt`, type: "text", value: Ne, onChange: (e) => ue(e.target.value), className: "rte-field" })
        ] })
      ] }),
      /* @__PURE__ */ c("div", { className: "rte-modal-grid", children: [
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-media-width`, children: [
          a.mediaWidth,
          /* @__PURE__ */ t("input", { id: `${g}-media-width`, type: "number", min: "1", step: "1", value: Ee, onChange: (e) => Ie(e.target.value), className: "rte-field" })
        ] }),
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-media-height`, children: [
          a.mediaHeight,
          /* @__PURE__ */ t("input", { id: `${g}-media-height`, type: "number", min: "1", step: "1", value: Pe, onChange: (e) => Fe(e.target.value), className: "rte-field" })
        ] })
      ] }),
      z && /* @__PURE__ */ t("p", { role: "alert", className: "rte-panel-error", children: z }),
      /* @__PURE__ */ c("div", { className: "rte-modal-actions", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: O, className: "rte-action-button", children: a.cancel }),
        /* @__PURE__ */ t("button", { type: "button", onClick: mt, disabled: A, className: "rte-primary-button", children: A ? a.uploading : a.insert })
      ] })
    ] }) : N === "link" ? /* @__PURE__ */ c("div", { className: "rte-modal-content", children: [
      /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-link-url`, children: [
        a.linkUrl,
        /* @__PURE__ */ t("input", { ref: ri, id: `${g}-link-url`, type: "text", inputMode: "url", value: si, onChange: (e) => ci(e.target.value), dir: "ltr", placeholder: a.linkUrlPlaceholder, className: "rte-field" })
      ] }),
      /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-link-text`, children: [
        a.linkText,
        /* @__PURE__ */ t("input", { id: `${g}-link-text`, type: "text", value: mi, onChange: (e) => ui(e.target.value), className: "rte-field" })
      ] }),
      /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-link-title`, children: [
        a.linkTitle,
        /* @__PURE__ */ t("input", { id: `${g}-link-title`, type: "text", value: Re, onChange: (e) => gi(e.target.value), className: "rte-field" })
      ] }),
      z && /* @__PURE__ */ t("p", { role: "alert", className: "rte-panel-error", children: z }),
      /* @__PURE__ */ c("div", { className: "rte-modal-actions", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: O, className: "rte-action-button", children: a.cancel }),
        /* @__PURE__ */ t("button", { type: "button", onClick: Ji, className: "rte-primary-button", children: a.insert })
      ] })
    ] }) : /* @__PURE__ */ c("div", { className: "rte-modal-content", children: [
      /* @__PURE__ */ c("div", { className: "rte-modal-grid", children: [
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-table-columns`, children: [
          a.columns,
          /* @__PURE__ */ t("input", { id: `${g}-table-columns`, type: "number", min: "1", max: "8", value: pi, onChange: (e) => Hi(Number(e.target.value)), className: "rte-field" })
        ] }),
        /* @__PURE__ */ c("label", { className: "rte-modal-label", htmlFor: `${g}-table-rows`, children: [
          a.rows,
          /* @__PURE__ */ t("input", { id: `${g}-table-rows`, type: "number", min: "1", max: "12", value: hi, onChange: (e) => Fi(Number(e.target.value)), className: "rte-field" })
        ] })
      ] }),
      z && /* @__PURE__ */ t("p", { role: "alert", className: "rte-panel-error", children: z }),
      /* @__PURE__ */ c("div", { className: "rte-modal-actions", children: [
        /* @__PURE__ */ t("button", { type: "button", onClick: O, className: "rte-action-button", children: a.cancel }),
        /* @__PURE__ */ t("button", { type: "button", onClick: Zi, className: "rte-primary-button", children: a.insert })
      ] })
    ] }) }),
    f && /* @__PURE__ */ t("p", { id: `${g}-error`, role: "alert", className: "rte-error", children: f })
  ] });
}
export {
  St as Textora,
  St as default
};
