import { IFilter } from '../../types/filters.types';

const typeFilter: IFilter[] = [
    { property: 'type', selected: false, id: 'ACOPLAMIENTO', label: 'Acoplamiento' },
    { property: 'type', selected: false, id: 'ACUSTICA', label: 'Acústica' },
    { property: 'type', selected: false, id: 'ADAPTADOR', label: 'Adaptador' },
    { property: 'type', selected: false, id: 'ADSS', label: 'ADSS' },
    { property: 'type', selected: false, id: 'AISLANTE', label: 'Aislante' },
    { property: 'type', selected: false, id: 'AMPERIMETRO', label: 'Amperímetro' },
    { property: 'type', selected: false, id: 'ANALIZADOR DE RED', label: 'Analizador de Red' },
    { property: 'type', selected: false, id: 'ARMADA', label: 'Armada' },
    { property: 'type', selected: false, id: 'ARQUITECTONICA', label: 'Arquitectónica' },
    { property: 'type', selected: false, id: 'ARRANCADOR', label: 'Arrancador' },
    { property: 'type', selected: false, id: 'AUTOMATICO', label: 'Automático' },
    { property: 'type', selected: false, id: 'AUTOMATICO ACB', label: 'Automático ACB' },
    { property: 'type', selected: false, id: 'AUTOMATICO MCCB', label: 'Automático MCCB' },
    { property: 'type', selected: false, id: 'AUTOSOPORTADO A PRUEBA DE EXPLOSION', label: 'Autosportado a Prueba de Explosión' },
    { property: 'type', selected: false, id: 'AUTOSOPORTADO EN ACERO INOXIDABLE', label: 'Autosportado en Acero Inoxidable' },
    { property: 'type', selected: false, id: 'AUTOSOPORTADO EN COLL-ROLLED', label: 'Autosportado en Coll-Rolled' },
    { property: 'type', selected: false, id: 'AUTOSOPORTADO EN POLIMERO', label: 'Autosportado en Polímero' },
    { property: 'type', selected: false, id: 'AUTOSOPORTADO METALICO', label: 'Autosportado Metálico' },
    { property: 'type', selected: false, id: 'AUTOTRANSFORMADOR', label: 'Autotransformador' },
    { property: 'type', selected: false, id: 'AUXILIAR', label: 'Auxiliar' },
    { property: 'type', selected: false, id: 'BALIZA', label: 'Baliza' },
    { property: 'type', selected: false, id: 'BANDIT', label: 'Bandit' },
    { property: 'type', selected: false, id: 'BASE ADHESIVA', label: 'Base Adhesiva' },
    { property: 'type', selected: false, id: 'BUJE', label: 'Buje' },
    { property: 'type', selected: false, id: 'CABEZA PILOTO', label: 'Cabeza Piloto' },
    { property: 'type', selected: false, id: 'CABLOFIL', label: 'Cablofil' },
    { property: 'type', selected: false, id: 'CALEFACTORA', label: 'Calefactora' },
    { property: 'type', selected: false, id: 'CALENTADOR', label: 'Calentador' },
    { property: 'type', selected: false, id: 'CANALETA', label: 'Canaleta' },
    { property: 'type', selected: false, id: 'CILINDRICO', label: 'Cilíndrico' },
    { property: 'type', selected: false, id: 'CIRCULAR', label: 'Circular' },
    { property: 'type', selected: false, id: 'CODO', label: 'Codo' },
    { property: 'type', selected: false, id: 'COMPACTO', label: 'Compacto' },
    { property: 'type', selected: false, id: 'COMPATO', label: 'Compato' },
    { property: 'type', selected: false, id: 'CONMUTADOR', label: 'Conmutador' },
    { property: 'type', selected: false, id: 'CONTACTOS', label: 'Contactos' },
    { property: 'type', selected: false, id: 'CONTADOR', label: 'Contador' },
    { property: 'type', selected: false, id: 'CONTADOR DE ENERGIA', label: 'Contador de Energía' },
    { property: 'type', selected: false, id: 'CONTAINER', label: 'Container' },
    { property: 'type', selected: false, id: 'CONVERTIDOR', label: 'Convertidor' },
    { property: 'type', selected: false, id: 'CONVERTIDOR/AISLADOR DE SENALES', label: 'Convertidor/Aislador de Señales' },
    { property: 'type', selected: false, id: 'CORTACIRCUITO', label: 'Cortacircuito' },
    { property: 'type', selected: false, id: 'CRUZ', label: 'Cruz' },
    { property: 'type', selected: false, id: 'CUBIERTA PROTECTORA', label: 'Cubierta Protectora' },
    { property: 'type', selected: false, id: 'CUBRELUZ', label: 'Cubre Luz' },
    { property: 'type', selected: false, id: 'CUERPO', label: 'Cuerpo' },
    { property: 'type', selected: false, id: 'CURVA VERTICAL AJUSTABLE', label: 'Curva Vertical Ajustable' },
    { property: 'type', selected: false, id: 'DE ACOMETIDA', label: 'De Acometida' },
    { property: 'type', selected: false, id: 'DE ALIMENTACION', label: 'De Alimentación' },
    { property: 'type', selected: false, id: 'DE ALIVIO DE TENSION', label: 'De Alivio de Tensión' },
    { property: 'type', selected: false, id: 'DE ALTA TENSION', label: 'De Alta Tensión' },
    { property: 'type', selected: false, id: 'DE ALUMBRADO PUBLICO', label: 'De Alumbrado Público' },
    { property: 'type', selected: false, id: 'DE BATERIAS', label: 'De Baterías' },
    { property: 'type', selected: false, id: 'DE CELDAS DE CARGA', label: 'De Celdas de Carga' },
    { property: 'type', selected: false, id: 'DE CHAQUETA', label: 'De Chaqueta' },
    { property: 'type', selected: false, id: 'DE CIRCUITOS', label: 'De Circuitos' },
    { property: 'type', selected: false, id: 'DE COBRE', label: 'De Cobre' },
    { property: 'type', selected: false, id: 'DE COMUNICACIONES', label: 'De Comunicaciones' },
    { property: 'type', selected: false, id: 'DE COMUNICACIONES ARMADO', label: 'De Comunicaciones Armado' },
    { property: 'type', selected: false, id: 'DE COMUNICACIONES AUTOSOPORTADO', label: 'De Comunicaciones Autosportado' },
    { property: 'type', selected: false, id: 'DE COMUNICACIONES DE SOBREPONER', label: 'De Comunicaciones de Sobreponer' },
    { property: 'type', selected: false, id: 'DE CONMUTACION', label: 'De Conmutación' },
    { property: 'type', selected: false, id: 'DE CONTACTOR', label: 'De Contactor' },
    { property: 'type', selected: false, id: 'DE CONTACTOS', label: 'De Contactos' },
    { property: 'type', selected: false, id: 'DE CONTROL', label: 'De Control' },
    { property: 'type', selected: false, id: 'DE CONTROL ARMADO', label: 'De Control Armado' },
    { property: 'type', selected: false, id: 'DE CONTROL MOTOR', label: 'De Control Motor' },
    { property: 'type', selected: false, id: 'DE CONTROL Y POTENCIA', label: 'De Control y Potencia' },
    { property: 'type', selected: false, id: 'DE CONTROL Y POTENCIA ARMADO', label: 'De Control y Potencia Armado' },
    { property: 'type', selected: false, id: 'DE CORRIENTE', label: 'De Corriente' },
    { property: 'type', selected: false, id: 'DE DERIVACION', label: 'De Derivación' },
    { property: 'type', selected: false, id: 'DE DISTRIBUCION', label: 'De Distribución' },
    { property: 'type', selected: false, id: 'DE DISTRIBUCION DE ALIMENTACION', label: 'De Distribución de Alimentación' },
    { property: 'type', selected: false, id: 'DE EMERGENCIA', label: 'De Emergencia' },
    { property: 'type', selected: false, id: 'DE ENTRADAS ANALOGICAS', label: 'De Entradas Analógicas' },
    { property: 'type', selected: false, id: 'DE ENTRADAS DIGITALES', label: 'De Entradas Digitales' },
    { property: 'type', selected: false, id: 'DE ENTRADAS/SALIDAS ANALOGICAS', label: 'De Entradas/Salidas Analógicas' },
    { property: 'type', selected: false, id: 'DE ENTRADAS/SALIDAS DIGITALES', label: 'De Entradas/Salidas Digitales' },
    { property: 'type', selected: false, id: 'DE ESTADO SOLIDO', label: 'De Estado Sólido' },
    { property: 'type', selected: false, id: 'DE FIBRA OPTICA', label: 'De Fibra Óptica' },
    { property: 'type', selected: false, id: 'DE FRECUENCIA', label: 'De Frecuencia' },
    { property: 'type', selected: false, id: 'DE HORQUILLA', label: 'De Horquilla' },
    { property: 'type', selected: false, id: 'DE IMANES PERMANENTES', label: 'De Imanes Permanentes' },
    { property: 'type', selected: false, id: 'DE INDUCCION', label: 'De Inducción' },
    { property: 'type', selected: false, id: 'DE INSTRUMENTACION', label: 'De Instrumentación' },
    { property: 'type', selected: false, id: 'DE INSTRUMENTACION ARMADO', label: 'De Instrumentación Armado' },
    { property: 'type', selected: false, id: 'DE INTERFAZ', label: 'De Interfaz' },
    { property: 'type', selected: false, id: 'DE LINEA', label: 'De Línea' },
    { property: 'type', selected: false, id: 'DE MANDO EN ACERO INOXIDABLE', label: 'De Mando en Acero Inoxidable' },
    { property: 'type', selected: false, id: 'DE MANDO EN COLL-ROLLED', label: 'De Mando en Coll-Rolled' },
    { property: 'type', selected: false, id: 'DE MANDO ESPECIAL', label: 'De Mando Especial' },
    { property: 'type', selected: false, id: 'DE MANDO METALICA', label: 'De Mando Metálica' },
    { property: 'type', selected: false, id: 'DE MANDO PLASTICA', label: 'De Mando Plástica' },
    { property: 'type', selected: false, id: 'DE MANIOBRA', label: 'De Maniobra' },
    { property: 'type', selected: false, id: 'DE MEDIA TENSION', label: 'De Media Tensión' },
    { property: 'type', selected: false, id: 'DE MEDIA TENSION ARMADO', label: 'De Media Tensión Armado' },
    { property: 'type', selected: false, id: 'DE MEDICION', label: 'De Medición' },
    { property: 'type', selected: false, id: 'DE MONITOREO', label: 'De Monitoreo' },
    { property: 'type', selected: false, id: 'DE MOTOR', label: 'De Motor' },
    { property: 'type', selected: false, id: 'DE OJO', label: 'De Ojo' },
    { property: 'type', selected: false, id: 'DE PASO', label: 'De Paso' },
    { property: 'type', selected: false, id: 'DE PASO EN ACERO INOXIDABLE', label: 'De Paso en Acero Inoxidable' },
    { property: 'type', selected: false, id: 'DE PASO EN COLL-ROLLED', label: 'De Paso en Coll-Rolled' },
    { property: 'type', selected: false, id: 'DE PASO ESPECIAL', label: 'De Paso Especial' },
    { property: 'type', selected: false, id: 'DE PASO METALICA', label: 'De Paso Metálica' },
    { property: 'type', selected: false, id: 'DE PASO PLASTICA', label: 'De Paso Plástica' },
    { property: 'type', selected: false, id: 'DE PERIFERIA', label: 'De Periferia' },
    { property: 'type', selected: false, id: 'DE PIN', label: 'De Pin' },
    { property: 'type', selected: false, id: 'DE POTENCIA', label: 'De Potencia' },
    { property: 'type', selected: false, id: 'DE POTENCIA ARMADO', label: 'De Potencia Armado' },
    { property: 'type', selected: false, id: 'DE POTENCIA FLEXIBLE', label: 'De Potencia Flexible' },
    { property: 'type', selected: false, id: 'DE REFUERZO', label: 'De Refuerzo' },
    { property: 'type', selected: false, id: 'DE RELUCTANCIA', label: 'De Reluctancia' },
    { property: 'type', selected: false, id: 'DE REVESTIMIENTO', label: 'De Revestimiento' },
    { property: 'type', selected: false, id: 'DE SALIDA EN ACERO INOXIDABLE', label: 'De Salida en Acero Inoxidable' },
    { property: 'type', selected: false, id: 'DE SALIDA EN COLL-ROLLED', label: 'De Salida en Coll-Rolled' },
    { property: 'type', selected: false, id: 'DE SALIDA ESPECIAL', label: 'De Salida Especial' },
    { property: 'type', selected: false, id: 'DE SALIDA METALICA', label: 'De Salida Metálica' },
    { property: 'type', selected: false, id: 'DE SALIDA PLASTICA', label: 'De Salida Plástica' },
    { property: 'type', selected: false, id: 'DE SALIDAS ANALOGICAS', label: 'De Salidas Analógicas' },
    { property: 'type', selected: false, id: 'DE SALIDAS DIGITALES', label: 'De Salidas Digitales' },
    { property: 'type', selected: false, id: 'DE SEGURIDAD', label: 'De Seguridad' },
    { property: 'type', selected: false, id: 'DE SELLO', label: 'De Sello' },
    { property: 'type', selected: false, id: 'DE SENALIZACION', label: 'De Señalización' },
    { property: 'type', selected: false, id: 'DE SENSOR', label: 'De Sensor' },
    { property: 'type', selected: false, id: 'DE SOBRECARGA', label: 'De Sobrecarga' },
    { property: 'type', selected: false, id: 'DE SOBREPONER A PRUEBA DE EXPLOSION', label: 'De Sobreponer a Prueba de Explosión' },
    { property: 'type', selected: false, id: 'DE SOBREPONER EN ACERO INOXIDABLE', label: 'De Sobreponer en Acero Inoxidable' },
    { property: 'type', selected: false, id: 'DE SOBREPONER EN COLL-ROLLED', label: 'De Sobreponer en Coll-Rolled' },
    { property: 'type', selected: false, id: 'DE SOBREPONER EN POLIMERO', label: 'De Sobreponer en Polímero' },
    { property: 'type', selected: false, id: 'DE SOBREPONER METALICO', label: 'De Sobreponer Metálico' },
    { property: 'type', selected: false, id: 'DE TEMPERATURA', label: 'De Temperatura' },
    { property: 'type', selected: false, id: 'DE TENSION', label: 'De Tensión' },
    { property: 'type', selected: false, id: 'DE TERMINALES PREMOLDEADAS', label: 'De Terminales Premoldeadas' },
    { property: 'type', selected: false, id: 'DE TESTEO', label: 'De Testeo' },
    { property: 'type', selected: false, id: 'DE TIERRA', label: 'De Tierra' },
    { property: 'type', selected: false, id: 'DE TRANFERENCIA', label: 'De Transferencia' },
    { property: 'type', selected: false, id: 'DE TRANSFERENCIA', label: 'De Transferencia' },
    { property: 'type', selected: false, id: 'DE UNION', label: 'De Unión' },
    { property: 'type', selected: false, id: 'DE VARIADOR', label: 'De Variador' },
    { property: 'type', selected: false, id: 'DESCARTABLE', label: 'Descartable' },
    { property: 'type', selected: false, id: 'DESCONECTADOR', label: 'Desconectador' },
    { property: 'type', selected: false, id: 'DESENGRASANTE ELECTRONICO', label: 'Desengrasante Electrónico' },
    { property: 'type', selected: false, id: 'DESNUDO', label: 'Desnudo' },
    { property: 'type', selected: false, id: 'DIFERENCIAL', label: 'Diferencial' },
    { property: 'type', selected: false, id: 'DIFERENCIAL RCCB', label: 'Diferencial RCCB' },
    { property: 'type', selected: false, id: 'DIGITAL', label: 'Digital' },
    { property: 'type', selected: false, id: 'DIN OMEGA', label: 'Din Omega' },
    { property: 'type', selected: false, id: 'DIRECTO', label: 'Directo' },
    { property: 'type', selected: false, id: 'ELECTRICA', label: 'Eléctrica' },
    { property: 'type', selected: false, id: 'ELECTROMECANICO', label: 'Electromecánico' },
    { property: 'type', selected: false, id: 'ELECTRONICA', label: 'Electrónica' },
    { property: 'type', selected: false, id: 'ELECTRONICO', label: 'Electrónico' },
    { property: 'type', selected: false, id: 'EN BANCO', label: 'En Banco' },
    { property: 'type', selected: false, id: 'EN CEMENTO', label: 'En Cemento' },
    { property: 'type', selected: false, id: 'EN FIBRA', label: 'En Fibra' },
    { property: 'type', selected: false, id: 'EN GABINETE', label: 'En Gabinete' },
    { property: 'type', selected: false, id: 'EN MASILLA', label: 'En Masilla' },
    { property: 'type', selected: false, id: 'EN PASTA', label: 'En Pasta' },
    { property: 'type', selected: false, id: 'EN RESINA', label: 'En Resina' },
    { property: 'type', selected: false, id: 'ESCALERA', label: 'Escalera' },
    { property: 'type', selected: false, id: 'ESPECIAL', label: 'Especial' },
    { property: 'type', selected: false, id: 'ESPECIAL DE COMUNICACIONES', label: 'Especial de Comunicaciones' },
    { property: 'type', selected: false, id: 'ESPECIAL DE CONTROL', label: 'Especial de Control' },
    { property: 'type', selected: false, id: 'ESPECIAL DE INSTRUMENTACION', label: 'Especial de Instrumentación' },
    { property: 'type', selected: false, id: 'ESPECIAL DE PROCESO', label: 'Especial de Proceso' },
    { property: 'type', selected: false, id: 'ESPECIAL METALICA', label: 'Especial Metálica' },
    { property: 'type', selected: false, id: 'ESPECIAL PLASTICA', label: 'Especial Plástica' },
    { property: 'type', selected: false, id: 'ESTANDAR', label: 'Estándar' },
    { property: 'type', selected: false, id: 'FAST-ON', label: 'Fast-On' },
    { property: 'type', selected: false, id: 'FINAL DE CARRERA', label: 'Final de Carrera' },
    { property: 'type', selected: false, id: 'FIREWALL', label: 'Firewall' },
    { property: 'type', selected: false, id: 'FLEXIBLE DE PROCESO', label: 'Flexible de Proceso' },
    { property: 'type', selected: false, id: 'FLEXIBLE METALICA', label: 'Flexible Metálica' },
    { property: 'type', selected: false, id: 'FLEXIBLE PLASTICA', label: 'Flexible Plástica' },
    { property: 'type', selected: false, id: 'FOTOVOLTAICO', label: 'Fotovoltaico' },
    { property: 'type', selected: false, id: 'FUSIBLE', label: 'Fusible' },
    { property: 'type', selected: false, id: 'GAR', label: 'Gar' },
    { property: 'type', selected: false, id: 'GATEWAY', label: 'Gateway' },
    { property: 'type', selected: false, id: 'HIBRIDO', label: 'Híbrido' },
    { property: 'type', selected: false, id: 'HIDRAULICA', label: 'Hidráulica' },
    { property: 'type', selected: false, id: 'HIGROSTATO', label: 'Higrostato' },
    { property: 'type', selected: false, id: 'HIGROTERMO', label: 'Higrotermo' },
    { property: 'type', selected: false, id: 'HORNO', label: 'Horno' },
    { property: 'type', selected: false, id: 'HORQUILLA', label: 'Horquilla' },
    { property: 'type', selected: false, id: 'HUMEDA', label: 'Húmeda' },
    { property: 'type', selected: false, id: 'INDUSTRIAL', label: 'Industrial' },
    { property: 'type', selected: false, id: 'INDUSTRIAL MULTIPLE', label: 'Industrial Múltiple' },
    { property: 'type', selected: false, id: 'INTERRUPTOR', label: 'Interruptor' },
    { property: 'type', selected: false, id: 'INTERRUPTOR FUSIBLE', label: 'Interruptor Fusible' },
    { property: 'type', selected: false, id: 'LAMPARA PILOTO', label: 'Lámpara Piloto' },
    { property: 'type', selected: false, id: 'LINTERNA', label: 'Linterna' },
    { property: 'type', selected: false, id: 'LISA', label: 'Lisa' },
    { property: 'type', selected: false, id: 'MAGNETICO', label: 'Magnético' },
    { property: 'type', selected: false, id: 'MALLA', label: 'Malla' },
    { property: 'type', selected: false, id: 'MANUAL', label: 'Manual' },
    { property: 'type', selected: false, id: 'MECANICA', label: 'Mecánica' },
    { property: 'type', selected: false, id: 'MECANICO', label: 'Mecánico' },
    { property: 'type', selected: false, id: 'MINERA', label: 'Minera' },
    { property: 'type', selected: false, id: 'MINERO', label: 'Minero' },
    { property: 'type', selected: false, id: 'MODEM', label: 'Módem' },
    { property: 'type', selected: false, id: 'MODULAR', label: 'Modular' },
    { property: 'type', selected: false, id: 'MODULO LED', label: 'Módulo LED' },
    { property: 'type', selected: false, id: 'MULTIFUNCIONAL', label: 'Multifuncional' },
    { property: 'type', selected: false, id: 'MULTIPLE', label: 'Múltiple' },
    { property: 'type', selected: false, id: 'NEUMATICA', label: 'Neumática' },
    { property: 'type', selected: false, id: 'NH', label: 'NH' },
    { property: 'type', selected: false, id: 'NIPLE', label: 'Niple' },
    { property: 'type', selected: false, id: 'OPGW', label: 'OPGW' },
    { property: 'type', selected: false, id: 'OPTOCOPLADOR', label: 'Optoacoplador' },
    { property: 'type', selected: false, id: 'PALA', label: 'Pala' },
    { property: 'type', selected: false, id: 'PARA BORNERAS', label: 'Para Borneras' },
    { property: 'type', selected: false, id: 'PARA CABLES', label: 'Para Cables' },
    { property: 'type', selected: false, id: 'PARA COMUNICACIONES', label: 'Para Comunicaciones' },
    { property: 'type', selected: false, id: 'PARA CONDENSADORES', label: 'Para Condensadores' },
    { property: 'type', selected: false, id: 'PARA CONTROLADOR', label: 'Para Controlador' },
    { property: 'type', selected: false, id: 'PARA EQUIPOS', label: 'Para Equipos' },
    { property: 'type', selected: false, id: 'PARA FOTOVOLTAICA', label: 'Para Fotovoltaica' },
    { property: 'type', selected: false, id: 'PARA MARCACION', label: 'Para Marcación' },
    { property: 'type', selected: false, id: 'PARA MEDIDOR', label: 'Para Medidor' },
    { property: 'type', selected: false, id: 'PARA MOTOR DE PASOS/PWM', label: 'Para Motor de Pasos/PWM' },
    { property: 'type', selected: false, id: 'PARA PORTAETIQUETAS', label: 'Para Portaetiquetas' },
    { property: 'type', selected: false, id: 'PARA POTENCIA', label: 'Para Potencia' },
    { property: 'type', selected: false, id: 'PARA RIEL', label: 'Para Riel' },
    { property: 'type', selected: false, id: 'PARA RIEL DIN', label: 'Para Riel DIN' },
    { property: 'type', selected: false, id: 'PARA SENALES', label: 'Para Señales' },
    { property: 'type', selected: false, id: 'PARA TABLERO', label: 'Para Tablero' },
    { property: 'type', selected: false, id: 'PARO DE EMERGENCIA', label: 'Paro de Emergencia' },
    { property: 'type', selected: false, id: 'PASAMUROS', label: 'Pasamuros' },
    { property: 'type', selected: false, id: 'PERFIL', label: 'Perfil' },
    { property: 'type', selected: false, id: 'PERNO', label: 'Perno' },
    { property: 'type', selected: false, id: 'PIGTAIL', label: 'Pigtail' },
    { property: 'type', selected: false, id: 'PLANA', label: 'Plana' },
    { property: 'type', selected: false, id: 'PLASTICO', label: 'Plástico' },
    { property: 'type', selected: false, id: 'PLATINA DE UNION', label: 'Platina de Unión' },
    { property: 'type', selected: false, id: 'PLC', label: 'PLC' },
    { property: 'type', selected: false, id: 'PORTAFUSIBLE', label: 'Portafusible' },
    { property: 'type', selected: false, id: 'PORTATIL', label: 'Portátil' },
    { property: 'type', selected: false, id: 'PREMOLDEADA', label: 'Premoldeada' },
    { property: 'type', selected: false, id: 'PREMOLDEADO', label: 'Premoldeado' },
    { property: 'type', selected: false, id: 'PRENSAESTOPA', label: 'Prensaestopa' },
    { property: 'type', selected: false, id: 'PULSADOR', label: 'Pulsador' },
    { property: 'type', selected: false, id: 'RACKEABLE', label: 'Rackeable' },
    { property: 'type', selected: false, id: 'RANURADA', label: 'Ranurada' },
    { property: 'type', selected: false, id: 'RECONECTADOR', label: 'Recontactador' },
    { property: 'type', selected: false, id: 'REDUCCIONES TIPO CONECTOR', label: 'Reducciones Tipo Conector' },
    { property: 'type', selected: false, id: 'REGULABLE', label: 'Regulable' },
    { property: 'type', selected: false, id: 'REMOTA', label: 'Remota' },
    { property: 'type', selected: false, id: 'RESETEABLE', label: 'Reseteable' },
    { property: 'type', selected: false, id: 'RIGIDA DE PROCESO', label: 'Rígida de Proceso' },
    { property: 'type', selected: false, id: 'RIGIDA METALICA', label: 'Rígida Metálica' },
    { property: 'type', selected: false, id: 'RIGIDA PLASTICA', label: 'Rígida Plástica' },
    { property: 'type', selected: false, id: 'ROUTER', label: 'Router' },
    { property: 'type', selected: false, id: 'RTU', label: 'RTU' },
    { property: 'type', selected: false, id: 'SACRIFICABLE', label: 'Sacrificable' },
    { property: 'type', selected: false, id: 'SECA', label: 'Seca' },
    { property: 'type', selected: false, id: 'SECCIONABLE', label: 'Seccionable' },
    { property: 'type', selected: false, id: 'SECCIONADOR', label: 'Seccionador' },
    { property: 'type', selected: false, id: 'SELECTOR', label: 'Selector' },
    { property: 'type', selected: false, id: 'SELLO CORTAFUEGO', label: 'Sello Cortafuego' },
    { property: 'type', selected: false, id: 'SEMICONDUCTORA', label: 'Semiconductora' },
    { property: 'type', selected: false, id: 'SKID', label: 'Skid' },
    { property: 'type', selected: false, id: 'SOLAR', label: 'Solar' },
    { property: 'type', selected: false, id: 'SOPORTE', label: 'Soporte' },
    { property: 'type', selected: false, id: 'STRUT', label: 'Strut' },
    { property: 'type', selected: false, id: 'SUAVE', label: 'Suave' },
    { property: 'type', selected: false, id: 'SUBMARINA', label: 'Submarina' },
    { property: 'type', selected: false, id: 'SUJETADOR', label: 'Sujetador' },
    { property: 'type', selected: false, id: 'SWITCH', label: 'Switch' },
    { property: 'type', selected: false, id: 'TACTIL', label: 'Táctil' },
    { property: 'type', selected: false, id: 'TAPA', label: 'Tapa' },
    { property: 'type', selected: false, id: 'TAPON', label: 'Tapón' },
    { property: 'type', selected: false, id: 'TEE', label: 'Tee' },
    { property: 'type', selected: false, id: 'TELECOM', label: 'Telecom' },
    { property: 'type', selected: false, id: 'TELERRUPTOR', label: 'Teleruptor' },
    { property: 'type', selected: false, id: 'TEMPORIZADOR', label: 'Temporizador' },
    { property: 'type', selected: false, id: 'TERMINAL EN ACERO INOXIDABLE', label: 'Terminal en Acero Inoxidable' },
    { property: 'type', selected: false, id: 'TERMINAL EN COLL-ROLLED', label: 'Terminal en Coll-Rolled' },
    { property: 'type', selected: false, id: 'TERMINAL ESPECIAL', label: 'Terminal Especial' },
    { property: 'type', selected: false, id: 'TERMINAL METALICA', label: 'Terminal Metálica' },
    { property: 'type', selected: false, id: 'TERMINAL PLASTICA', label: 'Terminal Plástica' },
    { property: 'type', selected: false, id: 'TERMOMAGNETICO DIFERENCIAL RCBO', label: 'Termomagnético Diferencial RCBO' },
    { property: 'type', selected: false, id: 'TERMOMAGNETICO MCB', label: 'Termomagnético MCB' },
    { property: 'type', selected: false, id: 'TERMOSTATO', label: 'Termostato' },
    { property: 'type', selected: false, id: 'TIPO BARRIL', label: 'Tipo Barril' },
    { property: 'type', selected: false, id: 'TIPO BLOQUE DE DISTRIBUCION', label: 'Tipo Bloque de Distribución' },
    { property: 'type', selected: false, id: 'TIPO CONECTOR', label: 'Tipo Conector' },
    { property: 'type', selected: false, id: 'TIPO FUNDA', label: 'Tipo Funda' },
    { property: 'type', selected: false, id: 'TIPO MANTA', label: 'Tipo Manta' },
    { property: 'type', selected: false, id: 'TIPO PEINE', label: 'Tipo Peine' },
    { property: 'type', selected: false, id: 'TIPO PORTABARRAS', label: 'Tipo Portabarras' },
    { property: 'type', selected: false, id: 'TIPO TORRE', label: 'Tipo Torre' },
    { property: 'type', selected: false, id: 'TIPO TUBO', label: 'Tipo Tubo' },
    { property: 'type', selected: false, id: 'TOP JET', label: 'Top Jet' },
    { property: 'type', selected: false, id: 'TUBULAR', label: 'Tubular' },
    { property: 'type', selected: false, id: 'TUERCA', label: 'Tuerca' },
    { property: 'type', selected: false, id: 'UNION', label: 'Unión' },
    { property: 'type', selected: false, id: 'VENTILADOR', label: 'Ventilador' },
    { property: 'type', selected: false, id: 'VFD', label: 'VFD' },
    { property: 'type', selected: false, id: 'WYE', label: 'Wye' },
];

export default typeFilter;