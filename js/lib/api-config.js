// js/lib/api-config.js

/**
 * Determina la URL base de la API dependiendo del entorno.
 * 
 * - Si estamos en localhost pero NO en el puerto 3000 (ej. live-server en 8080),
 *   asumimos que el backend está en http://localhost:3000.
 * - En producción o si estamos sirviendo desde el mismo puerto (ej. node server.js),
 *   usamos una ruta relativa (string vacío).
 */
export function getApiBaseUrl() {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const isPort3000 = window.location.port === '3000';

    // Si estamos en desarrollo (localhost) y el frontend no está en el puerto del backend (3000),
    // forzamos la URL del backend.
    if (isLocalhost && !isPort3000) {
        return 'http://localhost:3000';
    }

    // En producción o mismo puerto, usar rutas relativas
    return '';
}
