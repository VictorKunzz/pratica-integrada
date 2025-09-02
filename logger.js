const path = require('path');
const fs = require('fs');
const winston = require('winston');
const { format } = require('winston');
const { trace, context } = require("@opentelemetry/api");

const logsDir = path.resolve(__dirname, "logs");
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

function getTraceId() {
  try {
    const activeContext = context.active();
    const activeSpan = trace.getSpan(activeContext);
    if (activeSpan) {
      return activeSpan.spanContext().traceId;
    }
  } catch (error) {
    // Se OpenTelemetry não estiver disponível ou houver erro, retorna N/A
  }
  return "N/A";
}

const customFormat = format.printf(({ level, message, timestamp, service }) => {
  const traceId = getTraceId();
  return `${timestamp} [${service}] [trace_id=${traceId}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json(),
    customFormat
  ),
  defaultMeta: { service: 'node-logs-monitor' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(logsDir, 'error.log'), level: 'error' }),
    new winston.transports.File({ filename: path.join(logsDir, 'app.log') })
  ],
});

module.exports = logger;
