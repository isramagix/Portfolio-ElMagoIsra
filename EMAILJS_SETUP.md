# Configuración de EmailJS para Portfolio El Mago Isra

## 🚀 Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea tu cuenta gratuita
3. Verifica tu email

### 2. Configurar servicio de email

1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **Copia el Service ID** que aparece (ej: `service_abc123`)

### 3. Crear plantilla de email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura la plantilla con estas variables:

```
Asunto: Nuevo contacto desde Portfolio - {{from_name}}

Contenido:
Has recibido un nuevo mensaje desde tu portfolio:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Tipo de espectáculo: {{show_type}}
Tipo de evento: {{event_type}}

Mensaje:
{{message}}
```

4. **Copia el Template ID** (ej: `template_xyz789`)

### 4. Obtener Public Key

1. Ve a **"Account"** > **"General"**
2. Copia tu **Public Key** (ej: `abcdefghij1234567`)

### 5. Configurar variables de entorno

1. Crea un archivo `.env` en la raíz del proyecto (al mismo nivel que `package.json`)
2. Copia el contenido de `.env.example` y pega tus claves:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghij1234567
```

3. **IMPORTANTE**: Añade `.env` al `.gitignore` para no subir tus claves a Git

### 6. Reiniciar el servidor

```bash
npm run dev
```

## ✅ Verificar que funciona

1. Ve a la página de Contacto en tu portfolio
2. Rellena el formulario
3. Envíalo
4. Deberías recibir el email en tu bandeja de entrada

## 🔒 Seguridad

- El archivo `.env` no debe subirse a Git (ya está en `.gitignore`)
- Las claves de EmailJS son públicas (van en el frontend), pero tienen protección anti-spam
- Puedes activar reCAPTCHA en EmailJS para mayor seguridad

## 📊 Límites del plan gratuito

- 200 emails/mes
- Suficiente para empezar
- Si necesitas más, puedes actualizar a un plan de pago

## 🆘 Problemas comunes

- **Error "Faltan las credenciales"**: Verifica que el archivo `.env` existe y tiene las 3 variables
- **No llegan emails**: Revisa la carpeta de spam y verifica las credenciales en EmailJS
- **Cambios no se aplican**: Reinicia el servidor (`npm run dev`)
