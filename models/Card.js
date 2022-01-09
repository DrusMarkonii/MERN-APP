const  {Schema, model, Types}  = require ("mongoose");

const schema = new Schema({
    _id: { type: Types.ObjectId },
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    drugType: { type: String, required: true },
    descriptionHtml: { type: String },
    descriptionText: { type: String },
    drugStatus: {
      type: { type: String },
    },
    drugMessages: [String],
    isOtcDrug: { type: Boolean },
    variants: [
      {
        id: { type: String },
        urlSlug: { type: String },
        name: { type: String },
        drugType: { type: String },
      },
    ],
    formulations: [
      {
        id: { type: String },
        drugId: { type: String },
        drugUrlSlug: { type: String },
        gpi14: { type: String },
        name: { type: String },
        drugType: { type: String },
        form: { type: String },
        pluralForm: { type: String },
        dosage: {
          value: { type: Number },
          unit: { type: String },
          display: { type: String },
        },
        ndc: { type: String },
        commonQuantities: [
          {
            value: { type: Number },
            display: { type: String },
            ndc: { type: String },
          },
        ],
        reasonCodes: [String],
        unbreakable: { type: Boolean },
      },
    ],
    defaultSettings: {
      formulationId: { type: String },
      quantity: { type: Number },
      reasonCodes: [String],
    },
    info: [
      {
        id: { type: String },
        html: { type: String },
        title: { type: String },
      },
    ],
    theraoeuticClas_: [],
    pharmacologicCl_: [],
    urlSlug: {type: String},
    medicare: {
      isCovered: {type: Boolean},
      explanation: {type: String}
    },
    sideEffects: {
      overview: {type: String},
      commonSideEffectsOverview: {type: String},
      commonSideEffects: [String],
      rareSideEffectsOverview: {type: String},
      rareSideEffects: [String]
    }
  });
  
  module.exports = model("Cards", schema);