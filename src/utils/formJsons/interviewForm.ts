export const firstFormJson: any = [
  {
    grid: {
      md: 12,
      lg: 12,
      xs: 12,
    },
    rows: [
      {
        grid: {
          md: 12,
          lg: 12,
          xs: 12,
        },
        fields: [
          {
            type: "yesOrNo",
            errorMessage: true,
            name: "role",
            validation: { required: "Field is required" },
            label:
              "1. Can clearly explain his/her current role at his workplace?",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "radio",
            errorMessage: true,
            name: "contribution",
            validation: { required: "Field is required" },
            label:
              "2. Can clearly define his/her contribution/value add to the team and the role in his work experience?",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "radio",
            errorMessage: true,
            name: "quality",
            validation: { required: "Field is required" },
            label:
              "3. Quality and Depth of his/her role in the current Organization?",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "radio",
            errorMessage: true,
            name: "developed",
            validation: { required: "Field is required" },
            label: "4. Has developed subject matter expertise?",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "textarea",
            name: "prospects",
            errorMessage: true,
            validation: {
              required: "Field is required",
            },
            label:
              "5. What are the biggest prospects and threats in the business sector that you wish to work in?",
            placeholder: "Add description. (Word limit: Max 200 words)",
            fieldStyle: { marginTop: "20px" },
            multiline: true,
            rows: 3,
            inputProps: {
              style: {
                minHeight: "20px !important",
              },
            },
          },
          
        ],
      },
    ],
  },
];

export const secondFormJson: any = [
  {
    grid: {
      md: 12,
      lg: 12,
      xs: 12,
    },
    rows: [
      {
        grid: {
          md: 12,
          lg: 12,
          xs: 12,
        },
        fields: [
          {
            type: "radio",
            errorMessage: true,
            name: "Correct",
            validation: { required: "Field is required" },
            label:
              "1. Correct use of Syntax & Grammar & Use of wide range of vocabulary?",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "radio",
            errorMessage: true,
            name: "Ability",
            validation: { required: "Field is required" },
            label:
              "2. Ability to answer questions concisely yet telling a story",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "radio",
            errorMessage: true,
            name: "Explores",
            validation: { required: "Field is required" },
            label:
              "3. Explores and weighs all the alternatives objectively (Thinking & Foresight)",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "radio",
            errorMessage: true,
            name: "Makes",
            validation: { required: "Field is required" },
            label:
              "4. Makes effective decisions with logical reasoning/assumptions and presents well",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "radio",
            errorMessage: true,
            name: "fluently",
            validation: { required: "Field is required" },
            label: "5. Ability to talk fluently & in a structured manner",
            fieldStyle: { marginTop: "20px" },
          },
        ],
      },
    ],
  },
];

export const thirdFormJson: any = [
  {
    grid: {
      md: 12,
      lg: 12,
      xs: 12,
    },
    rows: [
      {
        grid: {
          md: 12,
          lg: 12,
          xs: 12,
        },
        fields: [
          {
            type: "yesOrNo",
            errorMessage: true,
            name: "Aware",
            validation: { required: "Field is required" },
            label:
              "1. Aware of the program, knowledge on faculty, placements etc",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "radio",
            errorMessage: true,
            name: "Stand",
            validation: { required: "Field is required" },
            label:
              "2. Stand out Factor/Diversity for candidate – unique achievement, diverse background or work experience, exceptional technical or communication.",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "radio",
            errorMessage: true,
            name: "Extends",
            validation: { required: "Field is required" },
            label: "3. Extends respect and courtesy",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "radio",
            errorMessage: true,
            name: "listening",
            validation: { required: "Field is required" },
            label: "4. Actively listening and engaging, building rapport",
            fieldStyle: { marginTop: "20px" },
          },
          {
            type: "radio",
            errorMessage: true,
            name: "Clarity",
            validation: { required: "Field is required" },
            label: "5. Clarity in his/her Reason/s to Join AIIMS",
            fieldStyle: { marginTop: "20px" },
          },
        ],
      },
    ],
  },
];

export const fourthFormJson: any = [
  {
    grid: {
      md: 12,
      lg: 12,
      xs: 12,
    },
    rows: [
      {
        grid: {
          md: 12,
          lg: 12,
          xs: 12,
        },
        fields: [
          {
            type: "textarea",
            name: "final",
            errorMessage: true,
            validation: {
              required: "Field is required",
            },
            label: "1. Final decision",
            placeholder: "Add description. (Word limit: Max 200 words)",
            fieldStyle: { marginTop: "20px" },
            multiline: true,
            rows: 4,
            inputProps: {
              style: {
                minHeight: "20px !important",
              },
            },
          },
          {
            type: "textarea",
            name: "stream",
            errorMessage: true,
            validation: {
              required: "Field is required",
            },
            label: "2. Decision made for stream",
            placeholder: "Enter description",
            fieldStyle: { marginTop: "20px" },
            multiline: true,
            rows: 4,
            inputProps: {
              style: {
                minHeight: "20px !important",
              },
            },
          },
          {
            type: "textarea",
            name: "comment",
            errorMessage: true,
            validation: {
              required: "Field is required",
            },
            label: "3. Final comment",
            placeholder: "Enter description",
            fieldStyle: { marginTop: "20px" },
            multiline: true,
            rows: 4,
            inputProps: {
              style: {
                minHeight: "20px !important",
              },
            },
          },
        ],
      },
    ],
  },
];
