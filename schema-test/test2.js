const Ajv = require("ajv");

const ajv = new Ajv();

const validate = ajv.compile({
  type: "object",
  properties: {
    select: {
      type: "number",
      minimum: 10,
    },
  },
});

const r = validate({
  select: 11,
});

console.log(r);
