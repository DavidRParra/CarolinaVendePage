module.exports = {
  apps : [{
    // Configuración para el entorno de PRODUCCIÓN
    name: "carolinavende-page-prod", // Nombre del proceso en PM2
    script: "npm",                    // Usamos npm para ejecutar el script
    args: "run start",                // El comando "npm run start"
    env: {
      NODE_ENV: "production",
      PORT: 3006,
    },
    // Este proceso debe ser usado después de ejecutar "npm run build"
  }]
};
