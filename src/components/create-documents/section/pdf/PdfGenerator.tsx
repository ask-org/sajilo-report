import { Page, Text, View, Document } from "@react-pdf/renderer";
import { Tsection } from "../../../../types/create-document";
import { styles } from "./StyleSheet";
import PDFChapter from "./pdfChapter";

// Document component for generating proposal report with improved structure
const MyDocument = ({ sectionData }: { sectionData: Tsection[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {sectionData.length > 0 ? (
        sectionData.map((singleSection, index) => (
          <PDFChapter index={index} chapter={singleSection} />
        ))
      ) : (
        <View style={styles.section}>
          <Text>No content available</Text>
        </View>
      )}
    </Page>
  </Document>
);

export default MyDocument;
