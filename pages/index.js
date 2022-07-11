import Head from "next/head";
import { useState } from "react";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import instagramUseCaseImage from "../public/images/FixTxt_Instagram.png";
import notionUseCaseImage from "../public/images/FixTxt_Notion.png";

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
      maxWidth="md"
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
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4">What is FixTxt?</Typography>
          <Typography variant="body1" gutterBottom>
            It is a web tool that helps you write text in proper flow of the
            language. Some web services and apps do not support RTL languages
            such as Arabic, and when you try to mix LTR characters within the
            text, the whole flow gets corrupted, to the point that sometimes it
            is not understandable.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4">How to use FixTxt?</Typography>
          <Typography variant="body1" gutterBottom>
            <ol>
              <li>Copy the text that you want to fix in the text area.</li>
              <li>Click on the change text direction icon.</li>
              <li>Copy the the result by clicking on the copy icon.</li>
            </ol>
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4">Use Cases</Typography>
          <Typography variant="body1" gutterBottom>
            You can use the text to fix your RTL &lt;-&gt; LTR mixed text in a
            lot of placed around the web.
          </Typography>
          <Typography variant="h5">Instagram</Typography>
          <Image src={instagramUseCaseImage} alt="Picture of the author" />
          <Typography variant="h5">Notion</Typography>
          <Image src={notionUseCaseImage} alt="Picture of the author" />
          <Typography variant="body1" gutterBottom>
            Plus much much more...
          </Typography>
        </Box>
      </Container>

      <Container component="footer" sx={{ mt: "auto", py: 3 }}>
        Made with <span>♥</span> in Qatar by{" "}
        <a href="https://mawqey.com/">Abdulrahman Saleh Khamis</a>
      </Container>
    </Container>
  );
}
