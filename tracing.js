const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-http");

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter({
    // optional - url for OTLP collector
    // url: "http://localhost:4318/v1/traces",
    // optional - collection of custom headers to be sent with each request, e.g. in auth context
    // headers: {},
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();


