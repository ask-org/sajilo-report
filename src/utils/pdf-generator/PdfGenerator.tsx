import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { TContentItem } from "../../types/create-document";

// Styles for the document with proper margins and font sizes for proposal report
const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  section: {
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center", // Distribute space between items
    marginBottom: 8,
    marginTop: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subheadingContainer: {
    flexDirection: "row",
    alignItems: "center", // Distribute space between items
    marginBottom: 8,
    marginTop: 10,
  },
  subheadingNumber: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 5,
  },
  subheadingText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 1.5,
  },
});

// Function to render content based on its type
const renderContent = (content: TContentItem) => {
  switch (content.type) {
    case "heading":
      return <Text style={styles.titleText}>{content.value}</Text>;
    case "paragraph":
      return <Text style={styles.paragraph}>{content.value}</Text>;
    default:
      return null;
  }
};

// Document component for generating proposal report
const MyDocument = ({ sectionData = [] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {sectionData.length > 0 ? (
        sectionData.map((section, index) => (
          <View key={index} style={styles.section}>
            {/* Section Title with numbering */}
            <div> {console.log(index + 1, section.title)}</div>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Chapterss {index + 1} {section.title}
              </Text>
            </View>
            {section.content.map((content, contentIndex) => (
              <React.Fragment key={contentIndex}>
                {renderContent(content)}
              </React.Fragment>
            ))}
            {/* Subsections */}
            {section.subsection &&
              section.subsection.map((subsec, subIndex) => (
                <View key={subIndex} style={styles.section}>
                  {/* Subsection Title with numbering */}
                  <View style={styles.subheadingContainer}>
                    <Text style={styles.subheadingNumber}>
                      {index + 1}.{subIndex + 1}
                    </Text>
                    <Text style={styles.subheadingText}>{subsec.title}</Text>
                  </View>
                  {subsec.content.map((subContent, subContentIndex) => (
                    <Text key={subContentIndex} style={styles.paragraph}>
                      {subContent.value}
                    </Text>
                  ))}
                </View>
              ))}
          </View>
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
