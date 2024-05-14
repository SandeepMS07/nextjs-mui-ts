"use client";
import { useStyles } from "../styles.module";
import { useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { Controller, useFormContext } from "react-hook-form";
import KenTextLabel from "@/components/KenComponents/KenTextLabel";
import ReactQuill from "react-quill";
import { Typography } from "@mui/material";
import KenColors from "@/helpers/themes/kenColors";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { FormJsonFields } from "@/interfaces/Common";
 

const QuillEditor: React.FC<FormJsonFields> = (props) => {
  const { control, register } = useFormContext();
  const classes = useStyles();
  const quillRef = useRef<any>();

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", ".pdf");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file && file.type === "application/pdf") {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const arrayBuffer = event.target?.result;
          if (arrayBuffer) {
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer })
              .promise;
            let fullText = "";
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
              const page = await pdf.getPage(pageNum);
              const textContent = await page.getTextContent();
              const pageText = textContent.items
                .map((item: any) => item.str)
                .join(" ");
              fullText += pageText + "\n";
            }
            const range = quillRef.current?.getEditor()?.getSelection(true);
            if (range) {
              quillRef.current
                ?.getEditor()
                ?.clipboard.dangerouslyPasteHTML(
                  range.index,
                  `<div>${fullText}</div>`
                );
            }
          }
        };

        reader.readAsArrayBuffer(file);
      }
    };
  };

  return (
    <Controller
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div style={{ margin: "10px 0px", ...props.fieldStyle }}>
          <KenTextLabel
            label={props.label}
            labelClassName={classes.inputLableCustom}
          />
          <input id="quill-upload" style={{ display: "none" }} />
          <ReactQuill
            theme="snow"
            style={{ height: "150px" }}
            onChange={onChange}
            modules={{ toolbar: { container: "#toolbar" } }}
            value={value}
            ref={(el) => {
              if (el) quillRef.current = el;
            }}
            {...props.editorConfigs}
          />
          <div id={"toolbar"}>
            <div style={{ display: "flex" }}>
              <span className="ql-formats">
                <button className="ql-bold" />
                <button className="ql-italic" />
              </span>
              <span className="ql-formats">
                <button className="ql-list" value="ordered" />
                <button className="ql-list" value="bullet" />
              </span>
            </div>
            <div>
              <span>
                <button
                  type="button"
                  onClick={() => {
                    handleImageUpload();
                  }}
                  style={{ margin: "auto 6px" }}
                >
                  <FileUploadOutlinedIcon
                    fontSize={"large"}
                    color={KenColors.kenBlack as any}
                  />
                </button>
                <span className="upload-text">Upload Job Description</span>
              </span>
            </div>
          </div>
          {error && (
            <Typography
              textAlign={"start"}
              color={KenColors.red2}
              fontSize={"14px"}
              fontWeight={"500"}
              margin={"8px 0px"}
            >
              {error?.message}
            </Typography>
          )}
        </div>
      )}
      {...register(`${props.name}`, { ...props.validation })}
    />
  );
};

export default QuillEditor;
