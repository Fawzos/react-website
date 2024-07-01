import { Box, Container, Grid } from "@mui/material";
import { footerData } from "./FooterData";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 6, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-around">
          {footerData.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
