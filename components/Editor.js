import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import {
  FormatTextdirectionRToL as FormatTextdirectionRToLIcon,
  FormatClear as FormatClearIcon,
  ContentCopy as ContentCopyIcon,
  DeleteForever as ClearAllIcon,
} from "@mui/icons-material";
import { styled, experimental_sx as sx } from "@mui/system";

const TextArea = styled("textarea")(
  sx({
    width: "100%",
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    pt: 1,
    resize: "none",
    outline: "none",
    fontSize: "16px",
  })
);

const EditorButton = styled(IconButton)(({ theme }) => ({
  border: "1px solid #ccc",
  borderRadius: 0,
}));

export default function Editor() {
  const [modifiedText, setModifiedText] = useState("");
  const [openCopiedNotification, setOpenCopiedNotification] = useState(false);

  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenCopiedNotification(false);
  };

  const handleRTLConversion = () => {
    if (modifiedText == "") return;
    setModifiedText((value) => value.clearFormatting().toRTL());
  };

  const handleClearFormatting = () => {
    if (modifiedText == "") return;
    setModifiedText((value) => value.clearFormatting());
  };

  const handleClearAll = () => {
    setModifiedText("");
  };

  const onTextAreaChange = (e) => {
    setModifiedText(e.target.value);
  };

  const handleCopyToClipboard = (e) => {
    setOpenCopiedNotification(true);
    navigator.clipboard.writeText(modifiedText);
  };

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: 0,
        p: 1,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{
          mb: 1,
        }}
      >
        <Stack direction="row" spacing={1}>
          <Tooltip title="Change to RTL">
            <EditorButton
              onClick={handleRTLConversion}
              aria-label="fix-rtl-text"
              color="editorButton"
            >
              <FormatTextdirectionRToLIcon />
            </EditorButton>
          </Tooltip>

          <Tooltip title="Clear formatting">
            <EditorButton
              onClick={handleClearFormatting}
              aria-label="clear-formatting"
              color="editorButton"
            >
              <FormatClearIcon />
            </EditorButton>
          </Tooltip>

          <Tooltip title="Clear text">
            <EditorButton
              onClick={handleClearAll}
              aria-label="clear-text"
              color="editorButton"
            >
              <ClearAllIcon />
            </EditorButton>
          </Tooltip>
        </Stack>
        <Tooltip title="Copy to clipboard">
          <EditorButton
            onClick={handleCopyToClipboard}
            aria-label="copy-to-clipboard"
            color="editorButton"
          >
            <ContentCopyIcon />
          </EditorButton>
        </Tooltip>
      </Stack>

      <Box
        sx={{
          borderTop: "1px solid #ccc",
        }}
      >
        <TextArea
          rows={10}
          value={modifiedText}
          onChange={onTextAreaChange}
          placeholder="Write your text here..."
        />
      </Box>
      <Snackbar
        open={openCopiedNotification}
        autoHideDuration={2000}
        onClose={handleCloseNotification}
        message="Copied to clipboard"
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      />
    </Box>
  );
}
