import Head from "next/head";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Editor from "../components/Editor";
import IndexInfo from "../components/IndexInfo";
import "../utils/string";

export default function Home() {
  return (
    <Container maxWidth="md">
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
        <Editor />
        <IndexInfo />
      </Container>

      <Container component="footer" sx={{ mt: "auto", py: 3 }}>
        Made with <span>♥</span> in Qatar by{" "}
        <a href="https://mawqey.com/">Abdulrahman Saleh Khamis</a>
      </Container>
    </Container>
  );
}
