export type TextoraLocale =
    | 'English'
    | 'Chinese'
    | 'Hindi'
    | 'Spanish'
    | 'Arabic'
    | 'French'
    | 'Bengali'
    | 'Portuguese'
    | 'Russian'
    | 'Urdu'
    | 'Indonesian'
    | 'German'
    | 'Japanese'
    | 'Nigerian Pidgin'
    | 'Turkish'
    | 'Persian'

export interface TextoraLabels {
    insertMedia: string
    insertFile: string
    mediaDimensions: string
    invalidFile: string
    width: string
    height: string
    fontSize: string
    paragraph: string
    heading1: string
    heading2: string
    heading3: string
    heading4: string
    heading5: string
    heading6: string
    bold: string
    italic: string
    underline: string
    alignLeft: string
    alignCenter: string
    alignRight: string
    ltr: string
    rtl: string
    orderedList: string
    unorderedList: string
    textColor: string
    backgroundColor: string
    clearFormatting: string
    insertImage: string
    insertLink: string
    insertTable: string
    sourceCode: string
    imageUrl: string
    imageTitle: string
    imageAlt: string
    imageClass?: string
    imageWidth: string
    imageHeight: string
    imagePreview: string
    selectImage: string
    linkUrl: string
    linkText: string
    newTab: string
    linkTitle: string
    rows: string
    columns: string
    insert: string
    cancel: string
    uploadImage: string
    uploading: string
    invalidUrl: string
    invalidImage: string
    imageTooLarge: string
    invalidDimensions: string
    linkTextRequired: string
    tableControls: string
    addRow: string
    deleteRow: string
    addColumn: string
    deleteColumn: string
    editorAriaLabel: string
    placeholder: string
    imageUrlPlaceholder: string
    linkUrlPlaceholder: string
    fileReadError: string
    selectMedia: string
    selectFile: string
    close: string
    mediaType?: string
    audio?: string
    video?: string
    mediaUrl?: string
    mediaTitle?: string
    mediaAlt?: string
    mediaWidth?: string
    mediaHeight?: string
    mediaPreview?: string
    mediaUrlPlaceholder?: string
}

export const supportedLocales: readonly TextoraLocale[] = [
    'English', 'Chinese', 'Hindi', 'Spanish', 'Arabic', 'French', 'Bengali', 'Portuguese',
    'Russian', 'Urdu', 'Indonesian', 'German', 'Japanese', 'Nigerian Pidgin', 'Turkish', 'Persian',
]

export const translations: Record<TextoraLocale, TextoraLabels> = {
    English: {
        insertMedia: 'Insert media', insertFile: 'Insert file', mediaDimensions: 'Media dimensions', invalidFile: 'Please choose a supported file.', width: 'Width', height: 'Height',
        fontSize: 'Font size', paragraph: 'Paragraph', heading1: 'Heading 1', heading2: 'Heading 2', heading3: 'Heading 3', heading4: 'Heading 4', heading5: 'Heading 5', heading6: 'Heading 6',
        bold: 'Bold', italic: 'Italic', underline: 'Underline', alignLeft: 'Align left', alignCenter: 'Align center', alignRight: 'Align right', ltr: 'Left to right', rtl: 'Right to left',
        orderedList: 'Numbered list', unorderedList: 'Bulleted list', textColor: 'Text color', backgroundColor: 'Text background color', clearFormatting: 'Clear formatting',
        insertImage: 'Insert image', insertLink: 'Insert link', insertTable: 'Insert table', sourceCode: 'HTML source', imageUrl: 'Image URL', imageTitle: 'Image title', imageAlt: 'Image alt text',
        imageWidth: 'Image width', imageHeight: 'Image height', imagePreview: 'Image preview', selectImage: 'Choose an image from your device', linkUrl: 'Link URL', linkText: 'Link text', newTab: 'Open in a new tab',
        linkTitle: 'Link title', rows: 'Rows', columns: 'Columns', insert: 'Insert', cancel: 'Cancel', uploadImage: 'Choose image', uploading: 'Reading…',
        invalidUrl: 'Enter a valid and supported URL.', invalidImage: 'Please choose a valid image file.', imageTooLarge: 'The image is larger than the allowed limit.', invalidDimensions: 'Width and height must be positive numbers.', linkTextRequired: 'Text to display is required.', tableControls: 'Table controls',
        addRow: 'Add row', deleteRow: 'Delete row', addColumn: 'Add column', deleteColumn: 'Delete column', editorAriaLabel: 'Rich text editor', placeholder: 'Start writing…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'Unable to read the selected file.', selectMedia: 'Choose an audio or video file', selectFile: 'Choose a file', close: 'Close',
    },
    Chinese: {
        insertMedia: '插入媒体', insertFile: '插入文件', mediaDimensions: '媒体尺寸', invalidFile: '请选择受支持的文件。', width: '宽度', height: '高度',
        fontSize: '字号', paragraph: '段落', heading1: '标题 1', heading2: '标题 2', heading3: '标题 3', heading4: '标题 4', heading5: '标题 5', heading6: '标题 6',
        bold: '粗体', italic: '斜体', underline: '下划线', alignLeft: '左对齐', alignCenter: '居中对齐', alignRight: '右对齐', ltr: '从左到右', rtl: '从右到左',
        orderedList: '编号列表', unorderedList: '项目符号列表', textColor: '文字颜色', backgroundColor: '文字背景色', clearFormatting: '清除格式',
        insertImage: '插入图片', insertLink: '插入链接', insertTable: '插入表格', sourceCode: 'HTML 源代码', imageUrl: '图片 URL', imageTitle: '图片标题', imageAlt: '图片替代文字',
        imageWidth: '图片宽度', imageHeight: '图片高度', imagePreview: '图片预览', selectImage: '从设备选择图片', linkUrl: '链接 URL', linkText: '链接文字', newTab: '在新标签页打开',
        linkTitle: '链接标题', rows: '行数', columns: '列数', insert: '插入', cancel: '取消', uploadImage: '选择图片', uploading: '正在读取…',
        invalidUrl: '请输入有效且受支持的 URL。', invalidImage: '请选择有效的图片文件。', imageTooLarge: '图片超过了允许的大小限制。', invalidDimensions: '宽度和高度必须是正数。', linkTextRequired: '请输入要显示的文字。', tableControls: '表格控制',
        addRow: '添加行', deleteRow: '删除行', addColumn: '添加列', deleteColumn: '删除列', editorAriaLabel: '富文本编辑器', placeholder: '开始输入…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: '无法读取所选文件。', selectMedia: '选择音频或视频文件', selectFile: '选择文件', close: '关闭',
    },
    Hindi: {
        insertMedia: 'मीडिया जोड़ें', insertFile: 'फ़ाइल जोड़ें', mediaDimensions: 'मीडिया के आयाम', invalidFile: 'कृपया समर्थित फ़ाइल चुनें।', width: 'चौड़ाई', height: 'ऊंचाई',
        fontSize: 'फ़ॉन्ट आकार', paragraph: 'पैराग्राफ़', heading1: 'शीर्षक 1', heading2: 'शीर्षक 2', heading3: 'शीर्षक 3', heading4: 'शीर्षक 4', heading5: 'शीर्षक 5', heading6: 'शीर्षक 6',
        bold: 'बोल्ड', italic: 'इटैलिक', underline: 'रेखांकित', alignLeft: 'बाईं ओर संरेखित', alignCenter: 'केंद्र में संरेखित', alignRight: 'दाईं ओर संरेखित', ltr: 'बाएं से दाएं', rtl: 'दाएं से बाएं',
        orderedList: 'क्रमांकित सूची', unorderedList: 'बुलेट सूची', textColor: 'टेक्स्ट का रंग', backgroundColor: 'टेक्स्ट की पृष्ठभूमि का रंग', clearFormatting: 'फ़ॉर्मैटिंग हटाएं',
        insertImage: 'चित्र जोड़ें', insertLink: 'लिंक जोड़ें', insertTable: 'तालिका जोड़ें', sourceCode: 'HTML स्रोत', imageUrl: 'चित्र URL', imageTitle: 'चित्र का शीर्षक', imageAlt: 'चित्र का वैकल्पिक टेक्स्ट',
        imageWidth: 'चित्र की चौड़ाई', imageHeight: 'चित्र की ऊंचाई', imagePreview: 'चित्र का पूर्वावलोकन', selectImage: 'डिवाइस से चित्र चुनें', linkUrl: 'लिंक URL', linkText: 'लिंक टेक्स्ट', newTab: 'नए टैब में खोलें',
        linkTitle: 'लिंक का शीर्षक', rows: 'पंक्तियां', columns: 'कॉलम', insert: 'जोड़ें', cancel: 'रद्द करें', uploadImage: 'चित्र चुनें', uploading: 'पढ़ा जा रहा है…',
        invalidUrl: 'मान्य और समर्थित URL दर्ज करें।', invalidImage: 'कृपया मान्य चित्र फ़ाइल चुनें।', imageTooLarge: 'चित्र अनुमत सीमा से बड़ा है।', invalidDimensions: 'चौड़ाई और ऊंचाई धनात्मक संख्याएं होनी चाहिए।', linkTextRequired: 'दिखाने के लिए टेक्स्ट आवश्यक है।', tableControls: 'तालिका नियंत्रण',
        addRow: 'पंक्ति जोड़ें', deleteRow: 'पंक्ति हटाएं', addColumn: 'कॉलम जोड़ें', deleteColumn: 'कॉलम हटाएं', editorAriaLabel: 'रिच टेक्स्ट एडिटर', placeholder: 'लिखना शुरू करें…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'चयनित फ़ाइल पढ़ी नहीं जा सकी।', selectMedia: 'ऑडियो या वीडियो फ़ाइल चुनें', selectFile: 'फ़ाइल चुनें', close: 'बंद करें',
    },
    Spanish: {
        insertMedia: 'Insertar multimedia', insertFile: 'Insertar archivo', mediaDimensions: 'Dimensiones multimedia', invalidFile: 'Elige un archivo compatible.', width: 'Ancho', height: 'Alto',
        fontSize: 'Tamaño de fuente', paragraph: 'Párrafo', heading1: 'Encabezado 1', heading2: 'Encabezado 2', heading3: 'Encabezado 3', heading4: 'Encabezado 4', heading5: 'Encabezado 5', heading6: 'Encabezado 6',
        bold: 'Negrita', italic: 'Cursiva', underline: 'Subrayado', alignLeft: 'Alinear a la izquierda', alignCenter: 'Centrar', alignRight: 'Alinear a la derecha', ltr: 'De izquierda a derecha', rtl: 'De derecha a izquierda',
        orderedList: 'Lista numerada', unorderedList: 'Lista con viñetas', textColor: 'Color del texto', backgroundColor: 'Color de fondo del texto', clearFormatting: 'Borrar formato',
        insertImage: 'Insertar imagen', insertLink: 'Insertar enlace', insertTable: 'Insertar tabla', sourceCode: 'Código HTML', imageUrl: 'URL de la imagen', imageTitle: 'Título de la imagen', imageAlt: 'Texto alternativo de la imagen',
        imageWidth: 'Ancho de la imagen', imageHeight: 'Alto de la imagen', imagePreview: 'Vista previa de la imagen', selectImage: 'Elegir una imagen del dispositivo', linkUrl: 'URL del enlace', linkText: 'Texto del enlace', newTab: 'Abrir en una pestaña nueva',
        linkTitle: 'Título del enlace', rows: 'Filas', columns: 'Columnas', insert: 'Insertar', cancel: 'Cancelar', uploadImage: 'Elegir imagen', uploading: 'Leyendo…',
        invalidUrl: 'Introduce una URL válida y compatible.', invalidImage: 'Elige un archivo de imagen válido.', imageTooLarge: 'La imagen supera el límite permitido.', invalidDimensions: 'El ancho y el alto deben ser números positivos.', linkTextRequired: 'El texto que se mostrará es obligatorio.', tableControls: 'Controles de tabla',
        addRow: 'Añadir fila', deleteRow: 'Eliminar fila', addColumn: 'Añadir columna', deleteColumn: 'Eliminar columna', editorAriaLabel: 'Editor de texto enriquecido', placeholder: 'Empieza a escribir…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'No se puede leer el archivo seleccionado.', selectMedia: 'Elegir un archivo de audio o vídeo', selectFile: 'Elegir un archivo', close: 'Cerrar',
    },
    Arabic: {
        insertMedia: 'إدراج وسائط', insertFile: 'إدراج ملف', mediaDimensions: 'أبعاد الوسائط', invalidFile: 'يرجى اختيار ملف مدعوم.', width: 'العرض', height: 'الارتفاع',
        fontSize: 'حجم الخط', paragraph: 'فقرة', heading1: 'عنوان 1', heading2: 'عنوان 2', heading3: 'عنوان 3', heading4: 'عنوان 4', heading5: 'عنوان 5', heading6: 'عنوان 6',
        bold: 'عريض', italic: 'مائل', underline: 'تحته خط', alignLeft: 'محاذاة لليسار', alignCenter: 'محاذاة للوسط', alignRight: 'محاذاة لليمين', ltr: 'من اليسار إلى اليمين', rtl: 'من اليمين إلى اليسار',
        orderedList: 'قائمة مرقمة', unorderedList: 'قائمة نقطية', textColor: 'لون النص', backgroundColor: 'لون خلفية النص', clearFormatting: 'مسح التنسيق',
        insertImage: 'إدراج صورة', insertLink: 'إدراج رابط', insertTable: 'إدراج جدول', sourceCode: 'مصدر HTML', imageUrl: 'عنوان URL للصورة', imageTitle: 'عنوان الصورة', imageAlt: 'النص البديل للصورة',
        imageWidth: 'عرض الصورة', imageHeight: 'ارتفاع الصورة', imagePreview: 'معاينة الصورة', selectImage: 'اختيار صورة من جهازك', linkUrl: 'عنوان URL للرابط', linkText: 'نص الرابط', newTab: 'فتح في علامة تبويب جديدة',
        linkTitle: 'عنوان الرابط', rows: 'الصفوف', columns: 'الأعمدة', insert: 'إدراج', cancel: 'إلغاء', uploadImage: 'اختيار صورة', uploading: 'جارٍ القراءة…',
        invalidUrl: 'أدخل عنوان URL صالحاً ومدعوماً.', invalidImage: 'يرجى اختيار ملف صورة صالح.', imageTooLarge: 'حجم الصورة أكبر من الحد المسموح.', invalidDimensions: 'يجب أن يكون العرض والارتفاع رقمين موجبين.', linkTextRequired: 'النص المراد عرضه مطلوب.', tableControls: 'عناصر التحكم بالجدول',
        addRow: 'إضافة صف', deleteRow: 'حذف صف', addColumn: 'إضافة عمود', deleteColumn: 'حذف عمود', editorAriaLabel: 'محرر نص منسق', placeholder: 'ابدأ الكتابة…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'تعذرت قراءة الملف المحدد.', selectMedia: 'اختيار ملف صوت أو فيديو', selectFile: 'اختيار ملف', close: 'إغلاق',
    },
    French: {
        insertMedia: 'Insérer un média', insertFile: 'Insérer un fichier', mediaDimensions: 'Dimensions du média', invalidFile: 'Veuillez choisir un fichier compatible.', width: 'Largeur', height: 'Hauteur',
        fontSize: 'Taille de police', paragraph: 'Paragraphe', heading1: 'Titre 1', heading2: 'Titre 2', heading3: 'Titre 3', heading4: 'Titre 4', heading5: 'Titre 5', heading6: 'Titre 6',
        bold: 'Gras', italic: 'Italique', underline: 'Souligné', alignLeft: 'Aligner à gauche', alignCenter: 'Centrer', alignRight: 'Aligner à droite', ltr: 'De gauche à droite', rtl: 'De droite à gauche',
        orderedList: 'Liste numérotée', unorderedList: 'Liste à puces', textColor: 'Couleur du texte', backgroundColor: 'Couleur d’arrière-plan du texte', clearFormatting: 'Effacer la mise en forme',
        insertImage: 'Insérer une image', insertLink: 'Insérer un lien', insertTable: 'Insérer un tableau', sourceCode: 'Code HTML', imageUrl: 'URL de l’image', imageTitle: 'Titre de l’image', imageAlt: 'Texte alternatif de l’image',
        imageWidth: 'Largeur de l’image', imageHeight: 'Hauteur de l’image', imagePreview: 'Aperçu de l’image', selectImage: 'Choisir une image sur l’appareil', linkUrl: 'URL du lien', linkText: 'Texte du lien', newTab: 'Ouvrir dans un nouvel onglet',
        linkTitle: 'Titre du lien', rows: 'Lignes', columns: 'Colonnes', insert: 'Insérer', cancel: 'Annuler', uploadImage: 'Choisir une image', uploading: 'Lecture…',
        invalidUrl: 'Saisissez une URL valide et compatible.', invalidImage: 'Veuillez choisir un fichier image valide.', imageTooLarge: 'L’image dépasse la taille autorisée.', invalidDimensions: 'La largeur et la hauteur doivent être des nombres positifs.', linkTextRequired: 'Le texte à afficher est obligatoire.', tableControls: 'Commandes du tableau',
        addRow: 'Ajouter une ligne', deleteRow: 'Supprimer la ligne', addColumn: 'Ajouter une colonne', deleteColumn: 'Supprimer la colonne', editorAriaLabel: 'Éditeur de texte enrichi', placeholder: 'Commencez à écrire…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'Impossible de lire le fichier sélectionné.', selectMedia: 'Choisir un fichier audio ou vidéo', selectFile: 'Choisir un fichier', close: 'Fermer',
    },
    Bengali: {
        insertMedia: 'মিডিয়া যোগ করুন', insertFile: 'ফাইল যোগ করুন', mediaDimensions: 'মিডিয়ার মাপ', invalidFile: 'অনুগ্রহ করে সমর্থিত ফাইল বেছে নিন।', width: 'প্রস্থ', height: 'উচ্চতা',
        fontSize: 'ফন্টের আকার', paragraph: 'অনুচ্ছেদ', heading1: 'শিরোনাম ১', heading2: 'শিরোনাম ২', heading3: 'শিরোনাম ৩', heading4: 'শিরোনাম ৪', heading5: 'শিরোনাম ৫', heading6: 'শিরোনাম ৬',
        bold: 'গাঢ়', italic: 'তির্যক', underline: 'আন্ডারলাইন', alignLeft: 'বামে সাজান', alignCenter: 'মাঝখানে সাজান', alignRight: 'ডানে সাজান', ltr: 'বাম থেকে ডানে', rtl: 'ডান থেকে বামে',
        orderedList: 'ক্রমিক তালিকা', unorderedList: 'বুলেট তালিকা', textColor: 'লেখার রং', backgroundColor: 'লেখার পটভূমির রং', clearFormatting: 'ফরম্যাট মুছুন',
        insertImage: 'ছবি যোগ করুন', insertLink: 'লিংক যোগ করুন', insertTable: 'টেবিল যোগ করুন', sourceCode: 'HTML সোর্স', imageUrl: 'ছবির URL', imageTitle: 'ছবির শিরোনাম', imageAlt: 'ছবির বিকল্প লেখা',
        imageWidth: 'ছবির প্রস্থ', imageHeight: 'ছবির উচ্চতা', imagePreview: 'ছবির প্রিভিউ', selectImage: 'ডিভাইস থেকে ছবি বাছুন', linkUrl: 'লিংকের URL', linkText: 'লিংকের লেখা', newTab: 'নতুন ট্যাবে খুলুন',
        linkTitle: 'লিংকের শিরোনাম', rows: 'সারি', columns: 'কলাম', insert: 'যোগ করুন', cancel: 'বাতিল', uploadImage: 'ছবি বাছুন', uploading: 'পড়া হচ্ছে…',
        invalidUrl: 'একটি বৈধ ও সমর্থিত URL লিখুন।', invalidImage: 'অনুগ্রহ করে একটি বৈধ ছবি ফাইল বাছুন।', imageTooLarge: 'ছবিটি অনুমোদিত সীমার চেয়ে বড়।', invalidDimensions: 'প্রস্থ ও উচ্চতা ধনাত্মক সংখ্যা হতে হবে।', linkTextRequired: 'প্রদর্শনের জন্য লেখা আবশ্যক।', tableControls: 'টেবিল নিয়ন্ত্রণ',
        addRow: 'সারি যোগ করুন', deleteRow: 'সারি মুছুন', addColumn: 'কলাম যোগ করুন', deleteColumn: 'কলাম মুছুন', editorAriaLabel: 'রিচ টেক্সট এডিটর', placeholder: 'লেখা শুরু করুন…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'নির্বাচিত ফাইল পড়া যায়নি।', selectMedia: 'অডিও বা ভিডিও ফাইল বাছুন', selectFile: 'ফাইল বাছুন', close: 'বন্ধ করুন',
    },
    Portuguese: {
        insertMedia: 'Inserir mídia', insertFile: 'Inserir arquivo', mediaDimensions: 'Dimensões da mídia', invalidFile: 'Escolha um arquivo compatível.', width: 'Largura', height: 'Altura',
        fontSize: 'Tamanho da fonte', paragraph: 'Parágrafo', heading1: 'Título 1', heading2: 'Título 2', heading3: 'Título 3', heading4: 'Título 4', heading5: 'Título 5', heading6: 'Título 6',
        bold: 'Negrito', italic: 'Itálico', underline: 'Sublinhado', alignLeft: 'Alinhar à esquerda', alignCenter: 'Centralizar', alignRight: 'Alinhar à direita', ltr: 'Da esquerda para a direita', rtl: 'Da direita para a esquerda',
        orderedList: 'Lista numerada', unorderedList: 'Lista com marcadores', textColor: 'Cor do texto', backgroundColor: 'Cor de fundo do texto', clearFormatting: 'Limpar formatação',
        insertImage: 'Inserir imagem', insertLink: 'Inserir link', insertTable: 'Inserir tabela', sourceCode: 'Código HTML', imageUrl: 'URL da imagem', imageTitle: 'Título da imagem', imageAlt: 'Texto alternativo da imagem',
        imageWidth: 'Largura da imagem', imageHeight: 'Altura da imagem', imagePreview: 'Pré-visualização da imagem', selectImage: 'Escolher uma imagem do dispositivo', linkUrl: 'URL do link', linkText: 'Texto do link', newTab: 'Abrir em uma nova aba',
        linkTitle: 'Título do link', rows: 'Linhas', columns: 'Colunas', insert: 'Inserir', cancel: 'Cancelar', uploadImage: 'Escolher imagem', uploading: 'Lendo…',
        invalidUrl: 'Digite uma URL válida e compatível.', invalidImage: 'Escolha um arquivo de imagem válido.', imageTooLarge: 'A imagem é maior que o limite permitido.', invalidDimensions: 'A largura e a altura devem ser números positivos.', linkTextRequired: 'O texto a exibir é obrigatório.', tableControls: 'Controles da tabela',
        addRow: 'Adicionar linha', deleteRow: 'Excluir linha', addColumn: 'Adicionar coluna', deleteColumn: 'Excluir coluna', editorAriaLabel: 'Editor de texto rico', placeholder: 'Comece a escrever…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'Não foi possível ler o arquivo selecionado.', selectMedia: 'Escolher arquivo de áudio ou vídeo', selectFile: 'Escolher arquivo', close: 'Fechar',
    },
    Russian: {
        insertMedia: 'Вставить медиа', insertFile: 'Вставить файл', mediaDimensions: 'Размеры медиа', invalidFile: 'Выберите поддерживаемый файл.', width: 'Ширина', height: 'Высота',
        fontSize: 'Размер шрифта', paragraph: 'Абзац', heading1: 'Заголовок 1', heading2: 'Заголовок 2', heading3: 'Заголовок 3', heading4: 'Заголовок 4', heading5: 'Заголовок 5', heading6: 'Заголовок 6',
        bold: 'Полужирный', italic: 'Курсив', underline: 'Подчёркивание', alignLeft: 'По левому краю', alignCenter: 'По центру', alignRight: 'По правому краю', ltr: 'Слева направо', rtl: 'Справа налево',
        orderedList: 'Нумерованный список', unorderedList: 'Маркированный список', textColor: 'Цвет текста', backgroundColor: 'Цвет фона текста', clearFormatting: 'Очистить форматирование',
        insertImage: 'Вставить изображение', insertLink: 'Вставить ссылку', insertTable: 'Вставить таблицу', sourceCode: 'Исходный код HTML', imageUrl: 'URL изображения', imageTitle: 'Название изображения', imageAlt: 'Альтернативный текст изображения',
        imageWidth: 'Ширина изображения', imageHeight: 'Высота изображения', imagePreview: 'Предпросмотр изображения', selectImage: 'Выбрать изображение на устройстве', linkUrl: 'URL ссылки', linkText: 'Текст ссылки', newTab: 'Открыть в новой вкладке',
        linkTitle: 'Название ссылки', rows: 'Строки', columns: 'Столбцы', insert: 'Вставить', cancel: 'Отмена', uploadImage: 'Выбрать изображение', uploading: 'Чтение…',
        invalidUrl: 'Введите допустимый URL.', invalidImage: 'Выберите корректный файл изображения.', imageTooLarge: 'Изображение превышает допустимый размер.', invalidDimensions: 'Ширина и высота должны быть положительными числами.', linkTextRequired: 'Введите отображаемый текст.', tableControls: 'Управление таблицей',
        addRow: 'Добавить строку', deleteRow: 'Удалить строку', addColumn: 'Добавить столбец', deleteColumn: 'Удалить столбец', editorAriaLabel: 'Редактор форматированного текста', placeholder: 'Начните писать…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'Не удалось прочитать выбранный файл.', selectMedia: 'Выбрать аудио- или видеофайл', selectFile: 'Выбрать файл', close: 'Закрыть',
    },
    Urdu: {
        insertMedia: 'میڈیا شامل کریں', insertFile: 'فائل شامل کریں', mediaDimensions: 'میڈیا کے ابعاد', invalidFile: 'براہ کرم معاون فائل منتخب کریں۔', width: 'چوڑائی', height: 'اونچائی',
        fontSize: 'فونٹ کا سائز', paragraph: 'پیراگراف', heading1: 'سرخی ۱', heading2: 'سرخی ۲', heading3: 'سرخی ۳', heading4: 'سرخی ۴', heading5: 'سرخی ۵', heading6: 'سرخی ۶',
        bold: 'موٹا', italic: 'ترچھا', underline: 'خط کشیدہ', alignLeft: 'بائیں طرف سیدھ', alignCenter: 'درمیان میں سیدھ', alignRight: 'دائیں طرف سیدھ', ltr: 'بائیں سے دائیں', rtl: 'دائیں سے بائیں',
        orderedList: 'نمبر والی فہرست', unorderedList: 'بلٹ والی فہرست', textColor: 'متن کا رنگ', backgroundColor: 'متن کے پس منظر کا رنگ', clearFormatting: 'فارمیٹنگ صاف کریں',
        insertImage: 'تصویر شامل کریں', insertLink: 'لنک شامل کریں', insertTable: 'جدول شامل کریں', sourceCode: 'HTML ماخذ', imageUrl: 'تصویر کا URL', imageTitle: 'تصویر کا عنوان', imageAlt: 'تصویر کا متبادل متن',
        imageWidth: 'تصویر کی چوڑائی', imageHeight: 'تصویر کی اونچائی', imagePreview: 'تصویر کا پیش نظارہ', selectImage: 'ڈیوائس سے تصویر منتخب کریں', linkUrl: 'لنک کا URL', linkText: 'لنک کا متن', newTab: 'نئے ٹیب میں کھولیں',
        linkTitle: 'لنک کا عنوان', rows: 'قطاریں', columns: 'کالم', insert: 'شامل کریں', cancel: 'منسوخ', uploadImage: 'تصویر منتخب کریں', uploading: 'پڑھا جا رہا ہے…',
        invalidUrl: 'درست اور معاون URL درج کریں۔', invalidImage: 'براہ کرم درست تصویر فائل منتخب کریں۔', imageTooLarge: 'تصویر کی جسامت مقررہ حد سے زیادہ ہے۔', invalidDimensions: 'چوڑائی اور اونچائی مثبت اعداد ہونی چاہییں۔', linkTextRequired: 'دکھانے کے لیے متن ضروری ہے۔', tableControls: 'جدول کے اختیارات',
        addRow: 'قطار شامل کریں', deleteRow: 'قطار حذف کریں', addColumn: 'کالم شامل کریں', deleteColumn: 'کالم حذف کریں', editorAriaLabel: 'رچ ٹیکسٹ ایڈیٹر', placeholder: 'لکھنا شروع کریں…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'منتخب فائل پڑھی نہیں جا سکی۔', selectMedia: 'آڈیو یا ویڈیو فائل منتخب کریں', selectFile: 'فائل منتخب کریں', close: 'بند کریں',
    },
    Indonesian: {
        insertMedia: 'Sisipkan media', insertFile: 'Sisipkan file', mediaDimensions: 'Dimensi media', invalidFile: 'Pilih file yang didukung.', width: 'Lebar', height: 'Tinggi',
        fontSize: 'Ukuran font', paragraph: 'Paragraf', heading1: 'Judul 1', heading2: 'Judul 2', heading3: 'Judul 3', heading4: 'Judul 4', heading5: 'Judul 5', heading6: 'Judul 6',
        bold: 'Tebal', italic: 'Miring', underline: 'Garis bawah', alignLeft: 'Rata kiri', alignCenter: 'Rata tengah', alignRight: 'Rata kanan', ltr: 'Kiri ke kanan', rtl: 'Kanan ke kiri',
        orderedList: 'Daftar bernomor', unorderedList: 'Daftar berpoin', textColor: 'Warna teks', backgroundColor: 'Warna latar teks', clearFormatting: 'Hapus pemformatan',
        insertImage: 'Sisipkan gambar', insertLink: 'Sisipkan tautan', insertTable: 'Sisipkan tabel', sourceCode: 'Sumber HTML', imageUrl: 'URL gambar', imageTitle: 'Judul gambar', imageAlt: 'Teks alternatif gambar',
        imageWidth: 'Lebar gambar', imageHeight: 'Tinggi gambar', imagePreview: 'Pratinjau gambar', selectImage: 'Pilih gambar dari perangkat', linkUrl: 'URL tautan', linkText: 'Teks tautan', newTab: 'Buka di tab baru',
        linkTitle: 'Judul tautan', rows: 'Baris', columns: 'Kolom', insert: 'Sisipkan', cancel: 'Batal', uploadImage: 'Pilih gambar', uploading: 'Membaca…',
        invalidUrl: 'Masukkan URL yang valid dan didukung.', invalidImage: 'Pilih file gambar yang valid.', imageTooLarge: 'Ukuran gambar melebihi batas yang diizinkan.', invalidDimensions: 'Lebar dan tinggi harus berupa angka positif.', linkTextRequired: 'Teks yang ditampilkan wajib diisi.', tableControls: 'Kontrol tabel',
        addRow: 'Tambah baris', deleteRow: 'Hapus baris', addColumn: 'Tambah kolom', deleteColumn: 'Hapus kolom', editorAriaLabel: 'Editor teks kaya', placeholder: 'Mulai menulis…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'File yang dipilih tidak dapat dibaca.', selectMedia: 'Pilih file audio atau video', selectFile: 'Pilih file', close: 'Tutup',
    },
    German: {
        insertMedia: 'Medien einfügen', insertFile: 'Datei einfügen', mediaDimensions: 'Medienabmessungen', invalidFile: 'Bitte wählen Sie eine unterstützte Datei aus.', width: 'Breite', height: 'Höhe',
        fontSize: 'Schriftgröße', paragraph: 'Absatz', heading1: 'Überschrift 1', heading2: 'Überschrift 2', heading3: 'Überschrift 3', heading4: 'Überschrift 4', heading5: 'Überschrift 5', heading6: 'Überschrift 6',
        bold: 'Fett', italic: 'Kursiv', underline: 'Unterstrichen', alignLeft: 'Linksbündig', alignCenter: 'Zentriert', alignRight: 'Rechtsbündig', ltr: 'Von links nach rechts', rtl: 'Von rechts nach links',
        orderedList: 'Nummerierte Liste', unorderedList: 'Aufzählungsliste', textColor: 'Textfarbe', backgroundColor: 'Texthintergrundfarbe', clearFormatting: 'Formatierung löschen',
        insertImage: 'Bild einfügen', insertLink: 'Link einfügen', insertTable: 'Tabelle einfügen', sourceCode: 'HTML-Quelltext', imageUrl: 'Bild-URL', imageTitle: 'Bildtitel', imageAlt: 'Alternativtext des Bildes',
        imageWidth: 'Bildbreite', imageHeight: 'Bildhöhe', imagePreview: 'Bildvorschau', selectImage: 'Bild vom Gerät auswählen', linkUrl: 'Link-URL', linkText: 'Linktext', newTab: 'In neuem Tab öffnen',
        linkTitle: 'Linktitel', rows: 'Zeilen', columns: 'Spalten', insert: 'Einfügen', cancel: 'Abbrechen', uploadImage: 'Bild auswählen', uploading: 'Wird gelesen…',
        invalidUrl: 'Geben Sie eine gültige und unterstützte URL ein.', invalidImage: 'Bitte wählen Sie eine gültige Bilddatei aus.', imageTooLarge: 'Das Bild überschreitet die zulässige Größe.', invalidDimensions: 'Breite und Höhe müssen positive Zahlen sein.', linkTextRequired: 'Der anzuzeigende Text ist erforderlich.', tableControls: 'Tabellensteuerung',
        addRow: 'Zeile hinzufügen', deleteRow: 'Zeile löschen', addColumn: 'Spalte hinzufügen', deleteColumn: 'Spalte löschen', editorAriaLabel: 'Rich-Text-Editor', placeholder: 'Schreiben Sie los…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'Die ausgewählte Datei konnte nicht gelesen werden.', selectMedia: 'Audio- oder Videodatei auswählen', selectFile: 'Datei auswählen', close: 'Schließen',
    },
    Japanese: {
        insertMedia: 'メディアを挿入', insertFile: 'ファイルを挿入', mediaDimensions: 'メディアのサイズ', invalidFile: '対応しているファイルを選択してください。', width: '幅', height: '高さ',
        fontSize: 'フォントサイズ', paragraph: '段落', heading1: '見出し 1', heading2: '見出し 2', heading3: '見出し 3', heading4: '見出し 4', heading5: '見出し 5', heading6: '見出し 6',
        bold: '太字', italic: '斜体', underline: '下線', alignLeft: '左揃え', alignCenter: '中央揃え', alignRight: '右揃え', ltr: '左から右', rtl: '右から左',
        orderedList: '番号付きリスト', unorderedList: '箇条書きリスト', textColor: '文字色', backgroundColor: '文字の背景色', clearFormatting: '書式をクリア',
        insertImage: '画像を挿入', insertLink: 'リンクを挿入', insertTable: '表を挿入', sourceCode: 'HTML ソース', imageUrl: '画像 URL', imageTitle: '画像のタイトル', imageAlt: '画像の代替テキスト',
        imageWidth: '画像の幅', imageHeight: '画像の高さ', imagePreview: '画像プレビュー', selectImage: 'デバイスから画像を選択', linkUrl: 'リンク URL', linkText: 'リンクのテキスト', newTab: '新しいタブで開く',
        linkTitle: 'リンクのタイトル', rows: '行', columns: '列', insert: '挿入', cancel: 'キャンセル', uploadImage: '画像を選択', uploading: '読み込み中…',
        invalidUrl: '有効で対応している URL を入力してください。', invalidImage: '有効な画像ファイルを選択してください。', imageTooLarge: '画像が許可されたサイズを超えています。', invalidDimensions: '幅と高さには正の数を指定してください。', linkTextRequired: '表示するテキストを入力してください。', tableControls: '表の操作',
        addRow: '行を追加', deleteRow: '行を削除', addColumn: '列を追加', deleteColumn: '列を削除', editorAriaLabel: 'リッチテキストエディター', placeholder: '入力を始めてください…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: '選択したファイルを読み込めませんでした。', selectMedia: '音声または動画ファイルを選択', selectFile: 'ファイルを選択', close: '閉じる',
    },
    'Nigerian Pidgin': {
        insertMedia: 'Put media', insertFile: 'Put file', mediaDimensions: 'Media size', invalidFile: 'Abeg choose file wey we support.', width: 'Width', height: 'Height',
        fontSize: 'Font size', paragraph: 'Paragraph', heading1: 'Heading 1', heading2: 'Heading 2', heading3: 'Heading 3', heading4: 'Heading 4', heading5: 'Heading 5', heading6: 'Heading 6',
        bold: 'Bold', italic: 'Italic', underline: 'Underline', alignLeft: 'Align left', alignCenter: 'Align center', alignRight: 'Align right', ltr: 'Left to right', rtl: 'Right to left',
        orderedList: 'Numbered list', unorderedList: 'Bullet list', textColor: 'Text colour', backgroundColor: 'Text background colour', clearFormatting: 'Clear formatting',
        insertImage: 'Put image', insertLink: 'Put link', insertTable: 'Put table', sourceCode: 'HTML source', imageUrl: 'Image URL', imageTitle: 'Image title', imageAlt: 'Image alt text',
        imageWidth: 'Image width', imageHeight: 'Image height', imagePreview: 'Image preview', selectImage: 'Choose image from your device', linkUrl: 'Link URL', linkText: 'Link text', newTab: 'Open for new tab',
        linkTitle: 'Link title', rows: 'Rows', columns: 'Columns', insert: 'Put am', cancel: 'Cancel', uploadImage: 'Choose image', uploading: 'E dey read…',
        invalidUrl: 'Enter URL wey correct and wey we support.', invalidImage: 'Abeg choose correct image file.', imageTooLarge: 'The image pass the size limit.', invalidDimensions: 'Width and height must be positive numbers.', linkTextRequired: 'You need text to display.', tableControls: 'Table controls',
        addRow: 'Add row', deleteRow: 'Remove row', addColumn: 'Add column', deleteColumn: 'Remove column', editorAriaLabel: 'Rich text editor', placeholder: 'Start to write…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'We no fit read the file wey you choose.', selectMedia: 'Choose audio or video file', selectFile: 'Choose file', close: 'Close',
    },
    Turkish: {
        insertMedia: 'Medya ekle', insertFile: 'Dosya ekle', mediaDimensions: 'Medya boyutları', invalidFile: 'Lütfen desteklenen bir dosya seçin.', width: 'Genişlik', height: 'Yükseklik',
        fontSize: 'Yazı boyutu', paragraph: 'Paragraf', heading1: 'Başlık 1', heading2: 'Başlık 2', heading3: 'Başlık 3', heading4: 'Başlık 4', heading5: 'Başlık 5', heading6: 'Başlık 6',
        bold: 'Kalın', italic: 'İtalik', underline: 'Altı çizili', alignLeft: 'Sola hizala', alignCenter: 'Ortala', alignRight: 'Sağa hizala', ltr: 'Soldan sağa', rtl: 'Sağdan sola',
        orderedList: 'Numaralı liste', unorderedList: 'Madde işaretli liste', textColor: 'Metin rengi', backgroundColor: 'Metin arka plan rengi', clearFormatting: 'Biçimlendirmeyi temizle',
        insertImage: 'Resim ekle', insertLink: 'Bağlantı ekle', insertTable: 'Tablo ekle', sourceCode: 'HTML kaynağı', imageUrl: 'Resim URL’si', imageTitle: 'Resim başlığı', imageAlt: 'Resim alternatif metni',
        imageWidth: 'Resim genişliği', imageHeight: 'Resim yüksekliği', imagePreview: 'Resim önizlemesi', selectImage: 'Cihazınızdan resim seçin', linkUrl: 'Bağlantı URL’si', linkText: 'Bağlantı metni', newTab: 'Yeni sekmede aç',
        linkTitle: 'Bağlantı başlığı', rows: 'Satır', columns: 'Sütun', insert: 'Ekle', cancel: 'İptal', uploadImage: 'Resim seç', uploading: 'Okunuyor…',
        invalidUrl: 'Geçerli ve desteklenen bir URL girin.', invalidImage: 'Lütfen geçerli bir resim dosyası seçin.', imageTooLarge: 'Resim izin verilen sınırı aşıyor.', invalidDimensions: 'Genişlik ve yükseklik pozitif sayı olmalıdır.', linkTextRequired: 'Görüntülenecek metin gereklidir.', tableControls: 'Tablo denetimleri',
        addRow: 'Satır ekle', deleteRow: 'Satırı sil', addColumn: 'Sütun ekle', deleteColumn: 'Sütunu sil', editorAriaLabel: 'Zengin metin düzenleyici', placeholder: 'Yazmaya başlayın…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'Seçilen dosya okunamadı.', selectMedia: 'Ses veya video dosyası seçin', selectFile: 'Dosya seçin', close: 'Kapat',
    },
    Persian: {
        insertMedia: 'درج رسانه', insertFile: 'درج فایل', mediaDimensions: 'ابعاد رسانه', invalidFile: 'لطفاً یک فایل پشتیبانی‌شده انتخاب کنید.', width: 'عرض', height: 'ارتفاع',
        fontSize: 'اندازه متن', paragraph: 'پاراگراف', heading1: 'عنوان ۱', heading2: 'عنوان ۲', heading3: 'عنوان ۳', heading4: 'عنوان ۴', heading5: 'عنوان ۵', heading6: 'عنوان ۶',
        bold: 'ضخیم', italic: 'مورب', underline: 'زیرخط', alignLeft: 'چپ‌چین', alignCenter: 'وسط‌چین', alignRight: 'راست‌چین', ltr: 'چپ به راست', rtl: 'راست به چپ',
        orderedList: 'فهرست شماره‌دار', unorderedList: 'فهرست نشانه‌دار', textColor: 'رنگ متن', backgroundColor: 'رنگ پس‌زمینه متن', clearFormatting: 'پاک کردن قالب‌بندی',
        insertImage: 'درج تصویر', insertLink: 'درج پیوند', insertTable: 'درج جدول', sourceCode: 'کد HTML', imageUrl: 'نشانی تصویر', imageTitle: 'عنوان تصویر', imageAlt: 'متن جایگزین تصویر',
        imageWidth: 'عرض تصویر', imageHeight: 'ارتفاع تصویر', imagePreview: 'پیش‌نمایش تصویر', selectImage: 'انتخاب تصویر از دستگاه', linkUrl: 'نشانی پیوند', linkText: 'متن پیوند', newTab: 'باز کردن در زبانه جدید',
        linkTitle: 'عنوان پیوند', rows: 'تعداد ردیف', columns: 'تعداد ستون', insert: 'درج', cancel: 'انصراف', uploadImage: 'انتخاب تصویر', uploading: 'در حال خواندن…',
        invalidUrl: 'یک نشانی معتبر و پشتیبانی‌شده وارد کنید.', invalidImage: 'لطفاً یک فایل تصویری معتبر انتخاب کنید.', imageTooLarge: 'حجم تصویر از حد مجاز بیشتر است.', invalidDimensions: 'عرض و ارتفاع باید عددی مثبت باشند.', linkTextRequired: 'متن نمایشی الزامی است.', tableControls: 'تنظیمات جدول',
        addRow: 'افزودن ردیف', deleteRow: 'حذف ردیف', addColumn: 'افزودن ستون', deleteColumn: 'حذف ستون', editorAriaLabel: 'ویرایشگر متن غنی', placeholder: 'شروع به نوشتن کنید…',
        imageUrlPlaceholder: 'https://example.com/image.jpg', linkUrlPlaceholder: 'https://example.com', fileReadError: 'خواندن فایل انتخاب‌شده ممکن نیست.', selectMedia: 'انتخاب فایل صوتی یا ویدیویی', selectFile: 'انتخاب فایل', close: 'بستن',
    },
}

export function resolveLocale(locale: unknown): TextoraLocale {
    return typeof locale === 'string' && Object.prototype.hasOwnProperty.call(translations, locale)
        ? locale as TextoraLocale
        : 'English'
}

type AdditionalLabels = Required<Pick<TextoraLabels, 'imageClass' | 'mediaType' | 'audio' | 'video' | 'mediaUrl' | 'mediaTitle' | 'mediaAlt' | 'mediaWidth' | 'mediaHeight' | 'mediaPreview' | 'mediaUrlPlaceholder'>>
const additionalTranslations: Record<TextoraLocale, AdditionalLabels> = {
    English: { imageClass: 'Class', mediaType: 'Media type', audio: 'Audio', video: 'Video', mediaUrl: 'Media URL', mediaTitle: 'Media title', mediaAlt: 'Media alt text', mediaWidth: 'Media width', mediaHeight: 'Media height', mediaPreview: 'Media preview', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Chinese: { imageClass: '类', mediaType: '媒体类型', audio: '音频', video: '视频', mediaUrl: '媒体 URL', mediaTitle: '媒体标题', mediaAlt: '媒体替代文本', mediaWidth: '媒体宽度', mediaHeight: '媒体高度', mediaPreview: '媒体预览', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Hindi: { imageClass: 'क्लास', mediaType: 'मीडिया प्रकार', audio: 'ऑडियो', video: 'वीडियो', mediaUrl: 'मीडिया URL', mediaTitle: 'मीडिया शीर्षक', mediaAlt: 'मीडिया वैकल्पिक पाठ', mediaWidth: 'मीडिया चौड़ाई', mediaHeight: 'मीडिया ऊंचाई', mediaPreview: 'मीडिया पूर्वावलोकन', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Spanish: { imageClass: 'Clase', mediaType: 'Tipo de multimedia', audio: 'Audio', video: 'Vídeo', mediaUrl: 'URL multimedia', mediaTitle: 'Título multimedia', mediaAlt: 'Texto alternativo multimedia', mediaWidth: 'Ancho multimedia', mediaHeight: 'Alto multimedia', mediaPreview: 'Vista previa multimedia', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Arabic: { imageClass: 'الفئة', mediaType: 'نوع الوسائط', audio: 'صوت', video: 'فيديو', mediaUrl: 'عنوان URL للوسائط', mediaTitle: 'عنوان الوسائط', mediaAlt: 'النص البديل للوسائط', mediaWidth: 'عرض الوسائط', mediaHeight: 'ارتفاع الوسائط', mediaPreview: 'معاينة الوسائط', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    French: { imageClass: 'Classe', mediaType: 'Type de média', audio: 'Audio', video: 'Vidéo', mediaUrl: 'URL du média', mediaTitle: 'Titre du média', mediaAlt: 'Texte alternatif du média', mediaWidth: 'Largeur du média', mediaHeight: 'Hauteur du média', mediaPreview: 'Aperçu du média', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Bengali: { imageClass: 'ক্লাস', mediaType: 'মিডিয়ার ধরন', audio: 'অডিও', video: 'ভিডিও', mediaUrl: 'মিডিয়া URL', mediaTitle: 'মিডিয়ার শিরোনাম', mediaAlt: 'মিডিয়ার বিকল্প পাঠ', mediaWidth: 'মিডিয়ার প্রস্থ', mediaHeight: 'মিডিয়ার উচ্চতা', mediaPreview: 'মিডিয়া প্রিভিউ', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Portuguese: { imageClass: 'Classe', mediaType: 'Tipo de mídia', audio: 'Áudio', video: 'Vídeo', mediaUrl: 'URL da mídia', mediaTitle: 'Título da mídia', mediaAlt: 'Texto alternativo da mídia', mediaWidth: 'Largura da mídia', mediaHeight: 'Altura da mídia', mediaPreview: 'Pré-visualização da mídia', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Russian: { imageClass: 'Класс', mediaType: 'Тип медиа', audio: 'Аудио', video: 'Видео', mediaUrl: 'URL медиа', mediaTitle: 'Название медиа', mediaAlt: 'Альтернативный текст медиа', mediaWidth: 'Ширина медиа', mediaHeight: 'Высота медиа', mediaPreview: 'Предпросмотр медиа', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Urdu: { imageClass: 'کلاس', mediaType: 'میڈیا کی قسم', audio: 'آڈیو', video: 'ویڈیو', mediaUrl: 'میڈیا URL', mediaTitle: 'میڈیا کا عنوان', mediaAlt: 'میڈیا کا متبادل متن', mediaWidth: 'میڈیا کی چوڑائی', mediaHeight: 'میڈیا کی اونچائی', mediaPreview: 'میڈیا کا پیش نظارہ', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Indonesian: { imageClass: 'Kelas', mediaType: 'Jenis media', audio: 'Audio', video: 'Video', mediaUrl: 'URL media', mediaTitle: 'Judul media', mediaAlt: 'Teks alternatif media', mediaWidth: 'Lebar media', mediaHeight: 'Tinggi media', mediaPreview: 'Pratinjau media', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    German: { imageClass: 'Klasse', mediaType: 'Medientyp', audio: 'Audio', video: 'Video', mediaUrl: 'Medien-URL', mediaTitle: 'Medientitel', mediaAlt: 'Alternativtext des Mediums', mediaWidth: 'Medienbreite', mediaHeight: 'Medienhöhe', mediaPreview: 'Medienvorschau', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Japanese: { imageClass: 'クラス', mediaType: 'メディアの種類', audio: '音声', video: '動画', mediaUrl: 'メディア URL', mediaTitle: 'メディアのタイトル', mediaAlt: 'メディアの代替テキスト', mediaWidth: 'メディアの幅', mediaHeight: 'メディアの高さ', mediaPreview: 'メディアプレビュー', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    'Nigerian Pidgin': { imageClass: 'Class', mediaType: 'Media type', audio: 'Audio', video: 'Video', mediaUrl: 'Media URL', mediaTitle: 'Media title', mediaAlt: 'Media alt text', mediaWidth: 'Media width', mediaHeight: 'Media height', mediaPreview: 'Media preview', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Turkish: { imageClass: 'Sınıf', mediaType: 'Medya türü', audio: 'Ses', video: 'Video', mediaUrl: 'Medya URL’si', mediaTitle: 'Medya başlığı', mediaAlt: 'Medya alternatif metni', mediaWidth: 'Medya genişliği', mediaHeight: 'Medya yüksekliği', mediaPreview: 'Medya önizlemesi', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
    Persian: { imageClass: 'کلاس', mediaType: 'نوع رسانه', audio: 'صوت', video: 'ویدیو', mediaUrl: 'نشانی رسانه', mediaTitle: 'عنوان رسانه', mediaAlt: 'متن جایگزین رسانه', mediaWidth: 'عرض رسانه', mediaHeight: 'ارتفاع رسانه', mediaPreview: 'پیش‌نمایش رسانه', mediaUrlPlaceholder: 'https://example.com/media.mp4' },
}

supportedLocales.forEach((supportedLocale) => Object.assign(translations[supportedLocale], additionalTranslations[supportedLocale]))

export function resolveLabels(locale: unknown, overrides?: Partial<TextoraLabels>): TextoraLabels & AdditionalLabels {
    const resolvedLocale = resolveLocale(locale)
    const extra = additionalTranslations[resolvedLocale]
    return { ...translations[resolvedLocale], ...extra, ...overrides } as TextoraLabels & AdditionalLabels
}
