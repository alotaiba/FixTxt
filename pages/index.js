import Head from "next/head";
import { useState } from "react";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import {
  FormatTextdirectionLToR as FormatTextdirectionLToRIcon,
  FormatTextdirectionRToL as FormatTextdirectionRToLIcon,
  FormatClear as FormatClearIcon,
  ContentCopy as ContentCopyIcon,
  DeleteForever as ClearAllIcon,
} from "@mui/icons-material";

Object.assign(String.prototype, {
  clearFormatting() {
    return this.replace(/\u202A|\u202B|\u202C/g, "");
  },
});

Object.assign(String.prototype, {
  toRTL() {
    return this.split("\n")
      .map((line) => "\u202B" + line + "\u202C")
      .join("\n");
  },
});

Object.assign(String.prototype, {
  toLTR() {
    return this.split("\n")
      .map((line) => "\u202A" + line + "\u202C")
      .join("\n");
  },
});

export default function Home() {
  const [modifiedText, setModifiedText] = useState("");

  const handleRTLConversion = () => {
    setModifiedText((value) => value.clearFormatting().toRTL());
  };

  const handleLTRConversion = () => {
    setModifiedText((value) => value.clearFormatting().toLTR());
  };

  const handleClearFormatting = () => {
    setModifiedText((value) => value.clearFormatting());
  };

  const handleClearAll = () => {
    setModifiedText("");
  };

  const onTextAreaChange = (e) => {
    setModifiedText(e.target.value);
  };

  const handleCopyToClipboard = (e) => {
    navigator.clipboard.writeText(modifiedText);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>FixTxt - Fix Right-to-Left text mixed with Left-to-Right</title>
        <meta
          name="description"
          content="Fix your Right-to-Left (RTL) text when you mix it with Left-to-Right (LTR) characters, or vice-versa."
        />
      </Head>

      <Container component="main">
        <Typography variant="h1">FixTxt</Typography>
        <Typography variant="subtitle1" gutterBottom>
          Fix your Right-to-Left (RTL) text when you mix it with Left-to-Right
          (LTR) characters, or vice-versa.
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={handleLTRConversion}
            aria-label="fix-ltr-text"
            color="primary"
          >
            <FormatTextdirectionLToRIcon />
          </IconButton>
          <IconButton
            onClick={handleRTLConversion}
            aria-label="fix-rtl-text"
            color="primary"
          >
            <FormatTextdirectionRToLIcon />
          </IconButton>
          <IconButton
            onClick={handleClearFormatting}
            aria-label="clear-formatting"
            color="primary"
          >
            <FormatClearIcon />
          </IconButton>
          <IconButton
            onClick={handleClearAll}
            aria-label="clear-text"
            color="primary"
          >
            <ClearAllIcon />
          </IconButton>
          <IconButton
            onClick={handleCopyToClipboard}
            aria-label="copy-to-clipboard"
            color="primary"
          >
            <ContentCopyIcon />
          </IconButton>
        </Stack>
        <Box>
          <textarea
            rows={10}
            value={modifiedText}
            onChange={onTextAreaChange}
            style={{ width: "100%" }}
          />
        </Box>
      </Container>

      <Container component="footer" sx={{ mt: "auto", py: 3 }}>
        Made with <span>♥</span> by{" "}
        <a href="https://mawqey.com/" target="_blank">
          Abdulrahman Saleh Khamis
        </a>
      </Container>
    </Container>
  );
}
