import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import instagramUseCaseImage from "../public/images/FixTxt_Instagram.png";
import notionUseCaseImage from "../public/images/FixTxt_Notion.png";
import {
  FormatTextdirectionRToL as FormatTextdirectionRToLIcon,
  ContentCopy as ContentCopyIcon,
} from "@mui/icons-material";

export default function IndexInfo() {
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">What is FixTxt?</Typography>
        <Typography variant="body1" gutterBottom>
          FixTxt is a web tool that helps you correct the text alignment in the
          proper flow of the language. Some web apps and services do not support
          RTL languages, such as Arabic, and when you try to mix LTR characters
          within the text, the words get misaligned, to the point that sometimes
          it becomes hard to understand.
        </Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">How to use FixTxt?</Typography>
        <ol>
          <li>Copy or write the text that you want to fix in the text area</li>
          <li>
            Click on the change text direction icon{" "}
            <FormatTextdirectionRToLIcon
              fontSize="small"
              sx={{
                verticalAlign: "text-bottom",
              }}
            />
          </li>
          <li>
            Copy the the result by clicking on the copy icon{" "}
            <ContentCopyIcon
              fontSize="small"
              sx={{
                verticalAlign: "text-bottom",
              }}
            />
          </li>
        </ol>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">Use Cases</Typography>
        <Typography variant="body1" gutterBottom>
          You can use the text to fix your RTL and LTR mixed text in a lot of
          placed around the web.
        </Typography>
        <Typography variant="h5">Instagram</Typography>
        <Image src={instagramUseCaseImage} alt="Picture of the author" />
        <Typography variant="h5">Notion</Typography>
        <Image src={notionUseCaseImage} alt="Picture of the author" />
        <Typography variant="body1" gutterBottom>
          Plus much more...
        </Typography>
      </Box>
    </>
  );
}
