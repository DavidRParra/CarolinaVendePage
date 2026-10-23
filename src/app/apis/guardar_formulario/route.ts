import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, type, appointmentDate, message } = body;

    // Validación básica de campos requeridos
    if (!firstName || !lastName || !phone || !email || !type || !appointmentDate || !message) {
      return NextResponse.json(
        { success: false, message: "Faltan campos obligatorios en el formulario." },
        { status: 400 }
      );
    }

    // Creación de la conexión utilizando las credenciales principales del .env.local
    const connection = await mysql.createConnection({
      host: process.env.DB_SERVER,
      user: process.env.DB_USER_CONTACTANOS,
      password: process.env.DB_PASSWORD_CONTACTANOS,
      database: process.env.DB_DATABASE_CONTACTANOS, 
      port: Number(process.env.DB_PORT) || 3306,
    });

    // Inserción en la tabla 'contactos_formulario' asignado al usuario ID 3 (Carolina Vende)
    const query = `
      INSERT INTO contactos_formulario 
        (nombre, apellido, telefono, correo, tipo_consulta, fecha_consulta, mensaje, usuario_asignado_id, fecha_registro) 
      VALUES (?, ?, ?, ?, ?, ?, ?, 3, NOW())
    `;

    const values = [firstName, lastName, phone, email, type, appointmentDate, message];

    await connection.execute(query, values);

    // Cerrar la conexión explícitamente
    await connection.end();

    return NextResponse.json(
      { success: true, message: 'Cita guardada correctamente para Carolina Vende' },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error al guardar el formulario:", error);
    return NextResponse.json(
      { success: false, message: 'Error interno conectando a la base de datos' },
      { status: 500 }
    );
  }
}